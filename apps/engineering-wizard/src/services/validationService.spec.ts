import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  validateRulesWithContent,
  validateWithContent,
  ValidationApiError,
} from './validationService';

const rule = {
  title: 'Rule',
  description: '',
  context: '//SCL',
  assert: 'true()',
};

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

describe('legacy validation client', () => {
  it('sends the legacy multipart request for a single rule', async () => {
    const fetch = respond({ valid: true, errors: [] });
    await expect(validateWithContent(rule, '<SCL/>')).resolves.toEqual({
      valid: true,
      errors: [],
    });
    expect(fetch).toHaveBeenCalledOnce();
    const [url, options] = fetch.mock.calls[0];
    expect(url).toContain('/api/v1/validate');
    const form: FormData = options.body;
    expect([...form.keys()]).toEqual([
      'validationType',
      'sclFile',
      'rulesJson',
      'sclFileExtension',
    ]);
    expect(form.get('validationType')).toBe('XPATH');
    expect(form.get('sclFile')).toBeInstanceOf(File);
    expect(form.get('sclFileExtension')).toBe('SCD');
    expect(JSON.parse(String(form.get('rulesJson')))).toEqual([
      { context: '//SCL', assertion: 'true()' },
    ]);
    const file = form.get('sclFile');
    if (!(file instanceof File)) throw new Error('Missing SCL file');
    expect(await file.text()).toBe('<SCL/>');
  });

  it('maps separate legacy responses to the submitted rule order', async () => {
    const errors = [
      {
        ruleName: 'xpath rule',
        message: 'Rule violated',
        xpath: '/SCL',
        severity: 'ERROR',
        lineNumber: 2,
      },
    ];
    let resolveFirst!: (response: Response) => void;
    const fetch = respond({ valid: false, errors });
    fetch.mockImplementationOnce(
      () =>
        new Promise<Response>((resolve) => {
          resolveFirst = resolve;
        }),
    );
    const controller = new AbortController();
    const pending = validateRulesWithContent(
      [rule, { ...rule, assert: 'false()' }],
      '<SCL/>',
      controller.signal,
    );
    expect(fetch).toHaveBeenCalledTimes(2);
    resolveFirst(new Response(JSON.stringify({ valid: true, errors: [] })));
    await expect(pending).resolves.toEqual({
      valid: false,
      complete: true,
      results: [
        { ruleIndex: 0, status: 'PASSED', errors: [], diagnostics: [] },
        { ruleIndex: 1, status: 'FAILED', errors, diagnostics: [] },
      ],
    });
    expect(
      fetch.mock.calls.map(([, options]) =>
        JSON.parse(String(options.body.get('rulesJson'))),
      ),
    ).toEqual([
      [{ context: '//SCL', assertion: 'true()' }],
      [{ context: '//SCL', assertion: 'false()' }],
    ]);
    for (const [, options] of fetch.mock.calls) {
      expect(options.signal).toBe(controller.signal);
    }
  });

  it('does not request validation for an empty ruleset', async () => {
    const fetch = respond({ valid: true, errors: [] });
    await expect(validateRulesWithContent([], '<SCL/>')).resolves.toEqual({
      valid: true,
      complete: true,
      results: [],
    });
    expect(fetch).not.toHaveBeenCalled();
  });

  it.each([
    null,
    { valid: true },
    { valid: true, errors: [{}] },
    { valid: false, errors: [] },
    {
      valid: true,
      errors: [{ ruleName: 'xpath rule', message: 'Rule violated' }],
    },
  ])('rejects malformed or inconsistent legacy responses', async (response) => {
    respond(response);
    await expect(validateWithContent(rule, '<SCL/>')).rejects.toThrow(
      'Unexpected response shape from validation API',
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

    await expect(validateWithContent(rule, '<SCL/>')).rejects.toBe(error);
  });
});
