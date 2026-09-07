import { describe, expect, it, vi } from 'vitest';
import {
  SeverityLevel,
  ValidationRuleKind,
  type ResolvedValidationRule,
} from '@oscd-transnet-plugins/api-compas-validation-library';
import { createValidationServiceClient } from './client';

function okResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

const resolvedRule: ResolvedValidationRule = {
  kind: ValidationRuleKind.Xpath,
  name: 'unique-ied-name',
  version: '1.0.0',
  title: 'Unique IED name',
  severity: SeverityLevel.Error,
  definition: {
    context: '//IED',
    assertion: 'count(//IED[@name=current()/@name]) = 1',
  },
};

describe('createValidationServiceClient', () => {
  it('short-circuits when the batch is empty', async () => {
    const fetchMock = vi.fn();
    const client = createValidationServiceClient({
      baseUrl: '/svc',
      fetch: fetchMock as unknown as typeof fetch,
    });
    const result = await client.validateRules([], '<SCL/>');
    expect(result).toEqual({ validationType: 'XPATH', valid: true, errors: [] });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('posts a FormData payload with the batched rules', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(okResponse({ validationType: 'XPATH', valid: true, errors: [] }));
    const client = createValidationServiceClient({
      baseUrl: '/svc/',
      fetch: fetchMock as unknown as typeof fetch,
    });
    await client.validateResolvedRules([resolvedRule], '<SCL/>');

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('/svc/api/v1/validate');
    expect(init.method).toBe('POST');
    expect(init.body).toBeInstanceOf(FormData);
    const form = init.body as FormData;
    expect(form.get('validationType')).toBe('XPATH');
    expect(form.get('sclFileExtension')).toBe('SCD');
    expect(JSON.parse(form.get('rulesJson') as string)).toEqual([
      {
        name: 'unique-ied-name',
        title: 'Unique IED name',
        severity: SeverityLevel.Error,
        context: '//IED',
        assertion: 'count(//IED[@name=current()/@name]) = 1',
      },
    ]);
  });

  it('attaches a bearer token when getAuthToken resolves a value', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(okResponse({ validationType: 'XPATH', valid: true, errors: [] }));
    const client = createValidationServiceClient({
      baseUrl: '/svc',
      fetch: fetchMock as unknown as typeof fetch,
      getAuthToken: () => 'abc.def',
    });
    await client.validateResolvedRules([resolvedRule], '<SCL/>');
    const init = fetchMock.mock.calls[0][1];
    expect(init.headers).toMatchObject({ Authorization: 'Bearer abc.def' });
  });

  it('omits the header when getAuthToken returns undefined', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(okResponse({ validationType: 'XPATH', valid: true, errors: [] }));
    const client = createValidationServiceClient({
      baseUrl: '/svc',
      fetch: fetchMock as unknown as typeof fetch,
      getAuthToken: () => undefined,
    });
    await client.validateResolvedRules([resolvedRule], '<SCL/>');
    const init = fetchMock.mock.calls[0][1];
    expect(init.headers).toEqual({});
  });

  it('throws with the status text on non-2xx', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response('nope', { status: 500, statusText: 'Server Error' }));
    const client = createValidationServiceClient({
      baseUrl: '/svc',
      fetch: fetchMock as unknown as typeof fetch,
    });
    await expect(client.validateResolvedRules([resolvedRule], '<SCL/>')).rejects.toThrow(
      /HTTP 500: Server Error/,
    );
  });

  it('throws when the response shape is unexpected', async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse({ not: 'a result' }));
    const client = createValidationServiceClient({
      baseUrl: '/svc',
      fetch: fetchMock as unknown as typeof fetch,
    });
    await expect(client.validateResolvedRules([resolvedRule], '<SCL/>')).rejects.toThrow(
      /Unexpected response shape/,
    );
  });
});
