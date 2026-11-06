import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  checkRuleSyntax,
  validateRulesWithContent,
  validateWithContent,
  ValidationApiError,
  type BatchValidationResult,
} from './validationService';

const rule = {
  title: 'Rule',
  description: '',
  context: '//SCL',
  assert: 'true()',
};
const passed = (ruleIndex = 0) => ({
  ruleIndex,
  status: 'PASSED' as const,
  errors: [],
  diagnostics: [],
});

function respond(body: unknown, status = 200) {
  const fetch = vi.fn().mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    }),
  );
  vi.stubGlobal('fetch', fetch);
  return fetch;
}

afterEach(() => vi.unstubAllGlobals());

describe('typed validation client', () => {
  it('sends a single file and typed JSON array for all rules', async () => {
    const fetch = respond({
      valid: true,
      complete: true,
      results: [passed(), passed(1)],
    });
    await validateRulesWithContent([rule, rule], '<SCL/>');
    expect(fetch).toHaveBeenCalledOnce();
    const [url, options] = fetch.mock.calls[0];
    expect(url).toContain('/api/scl-resources/validation');
    const form: FormData = options.body;
    expect([...form.keys()]).toEqual(['sclFile', 'rules', 'sclFileExtension']);
    const part = form.get('rules');
    expect(part).toBeInstanceOf(Blob);
    if (!(part instanceof Blob)) throw new Error('Missing rules part');
    expect(part.type).toBe('application/json');
    expect(JSON.parse(await part.text())).toEqual([
      { type: 'XPATH', context: '//SCL', assert: 'true()' },
      { type: 'XPATH', context: '//SCL', assert: 'true()' },
    ]);
  });

  it('sends syntax checks without a document and retains all diagnostics', async () => {
    const errors = [
      {
        ruleIndex: 0,
        field: 'context',
        code: 'INVALID_XPATH',
        message: 'Bad context',
      },
      {
        ruleIndex: 0,
        field: 'assert',
        code: 'INVALID_XPATH',
        message: 'Bad assertion',
      },
    ];
    const fetch = respond({ valid: false, errors });
    expect(await checkRuleSyntax([rule])).toEqual({ valid: false, errors });
    expect(JSON.parse(fetch.mock.calls[0][1].body)).toEqual({
      rules: [{ type: 'XPATH', context: '//SCL', assert: 'true()' }],
    });
  });

  it.each([
    { valid: true, complete: true, results: [] },
    { valid: true, complete: true, results: [passed(), passed()] },
    { valid: true, complete: true, results: [passed(2), passed(1)] },
    { valid: false, complete: true, results: [passed(), passed(1)] },
    { valid: true, complete: false, results: [passed(), passed(1)] },
    {
      valid: true,
      complete: true,
      results: [{ ...passed(), errors: [{}] }, passed(1)],
    },
  ])(
    'rejects missing, duplicate, invalid or inconsistent results',
    async (response) => {
      respond(response);
      await expect(
        validateRulesWithContent([rule, rule], '<SCL/>'),
      ).rejects.toThrow();
    },
  );

  it('preserves expected rule failures as batch outcomes, but surfaces them in single-rule testing', async () => {
    const response: BatchValidationResult = {
      valid: false,
      complete: false,
      results: [
        {
          ruleIndex: 0,
          status: 'EVALUATION_ERROR',
          errors: [],
          diagnostics: [
            {
              field: 'assert',
              code: 'XPATH_EVALUATION_ERROR',
              message: 'Invalid conversion',
            },
          ],
        },
      ],
    };
    respond(response);
    await expect(validateRulesWithContent([rule], '<SCL/>')).resolves.toEqual(
      response,
    );
    respond(response);
    await expect(validateWithContent(rule, '<SCL/>')).rejects.toThrow(
      'assert: Invalid conversion',
    );
  });

  it('preserves structured HTTP errors', async () => {
    respond({ message: 'Malformed XML', details: 'Invalid document' }, 400);
    await expect(
      validateRulesWithContent([rule], '<SCL/>'),
    ).rejects.toMatchObject({
      name: 'ValidationApiError',
      status: 400,
      message: 'Malformed XML',
      details: 'Invalid document',
    } satisfies Partial<ValidationApiError>);
  });

  it.each([
    { name: 'empty JSON', body: null, contentType: 'application/json' },
    {
      name: 'malformed JSON',
      body: '{invalid',
      contentType: 'application/json',
    },
    { name: 'empty untyped', body: null, contentType: '' },
    { name: 'HTML', body: '<html>Too large</html>', contentType: 'text/html' },
  ])(
    'preserves HTTP status for $name error bodies',
    async ({ body, contentType }) => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue(
          new Response(body, {
            status: 413,
            statusText: 'Payload Too Large',
            headers: contentType ? { 'Content-Type': contentType } : {},
          }),
        ),
      );

      await expect(
        validateRulesWithContent([rule], '<SCL/>'),
      ).rejects.toMatchObject({
        name: 'ValidationApiError',
        status: 413,
        message: 'HTTP 413: Payload Too Large',
      });
    },
  );

  it('does not swallow cancellation while reading an HTTP error body', async () => {
    const error = new DOMException('Request cancelled', 'AbortError');
    const response = new Response(null, {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
    vi.spyOn(response, 'json').mockRejectedValue(error);
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response));

    await expect(checkRuleSyntax([rule])).rejects.toBe(error);
  });
});
