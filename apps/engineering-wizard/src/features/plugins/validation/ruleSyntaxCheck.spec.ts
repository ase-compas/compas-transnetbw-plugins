import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  checkRuleSyntax,
  type SyntaxValidationResult,
} from '../../../services/validationService';
import { createRuleSyntaxCheck } from './ruleSyntaxCheck.svelte';

vi.mock('../../../services/validationService', () => ({
  checkRuleSyntax: vi.fn(),
  describeValidationError: (error: Error) => error.message,
}));

const rule = { context: '//SCL', assert: 'true()' };

function waitForAbort(signal?: AbortSignal): Promise<SyntaxValidationResult> {
  return new Promise((_resolve, reject) => {
    if (!signal) throw new Error('Missing request signal');
    signal.addEventListener('abort', () => reject(signal.reason), {
      once: true,
    });
  });
}

beforeEach(() => {
  vi.useFakeTimers();
  vi.mocked(checkRuleSyntax).mockReset();
});
afterEach(() => vi.useRealTimers());

describe('expert syntax check lifecycle', () => {
  it('debounces edits and only accepts a successful check of the current rule', async () => {
    vi.mocked(checkRuleSyntax).mockResolvedValue({ valid: true, errors: [] });
    const check = createRuleSyntaxCheck();
    check.update(rule);
    await vi.advanceTimersByTimeAsync(250);
    check.update({ ...rule, assert: 'false()' });
    await vi.advanceTimersByTimeAsync(499);
    expect(checkRuleSyntax).not.toHaveBeenCalled();
    expect(check.isValidFor(rule)).toBe(false);
    await vi.advanceTimersByTimeAsync(1);
    expect(checkRuleSyntax).toHaveBeenCalledOnce();
    expect(check.isValidFor({ ...rule, assert: 'false()' })).toBe(true);
    expect(check.isValidFor(rule)).toBe(false);
    check.update({ context: '/', assert: 'false()' });
    expect(check.state.status).toBe('checking');
    expect(check.isValidFor({ ...rule, assert: 'false()' })).toBe(false);
    check.dispose();
  });

  it('aborts superseded checks and ignores their late responses', async () => {
    let resolveOld!: (result: SyntaxValidationResult) => void;
    vi.mocked(checkRuleSyntax)
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolveOld = resolve;
          }),
      )
      .mockResolvedValueOnce({
        valid: false,
        errors: [
          {
            ruleIndex: 0,
            field: 'assert',
            code: 'INVALID_XPATH',
            message: 'Invalid XPath',
          },
        ],
      });
    const check = createRuleSyntaxCheck();
    check.update(rule);
    await vi.advanceTimersByTimeAsync(500);
    const signal = vi.mocked(checkRuleSyntax).mock.calls[0][1];
    check.update({ ...rule, assert: '(' });
    expect(signal?.aborted).toBe(true);
    await vi.advanceTimersByTimeAsync(500);
    resolveOld({ valid: true, errors: [] });
    await Promise.resolve();
    expect(check.state.status).toBe('invalid');
    expect(check.state.diagnostics[0].message).toBe('Invalid XPath');
    check.dispose();
  });

  it('blocks on network errors, supports retry and resets between dialog sessions', async () => {
    vi.mocked(checkRuleSyntax)
      .mockRejectedValueOnce(new Error('Backend unavailable'))
      .mockResolvedValueOnce({ valid: true, errors: [] });
    const check = createRuleSyntaxCheck();
    check.update(rule);
    await vi.advanceTimersByTimeAsync(500);
    expect(check.state.status).toBe('error');
    expect(check.isValidFor(rule)).toBe(false);
    check.retry();
    await vi.advanceTimersByTimeAsync(0);
    expect(check.isValidFor(rule)).toBe(true);
    check.reset();
    expect(check.state.status).toBe('unchecked');
    expect(check.isValidFor(rule)).toBe(false);
    check.update({ ...rule, assert: ' ' });
    await vi.advanceTimersByTimeAsync(500);
    expect(check.state.status).toBe('unchecked');
    expect(checkRuleSyntax).toHaveBeenCalledTimes(2);
    check.dispose();
  });

  it('times out a stalled request and allows retrying the same rule', async () => {
    vi.mocked(checkRuleSyntax)
      .mockImplementationOnce((_rules, signal) => waitForAbort(signal))
      .mockResolvedValueOnce({ valid: true, errors: [] });
    const check = createRuleSyntaxCheck();
    check.update(rule);
    await vi.advanceTimersByTimeAsync(500);
    const signal = vi.mocked(checkRuleSyntax).mock.calls[0][1];

    await vi.advanceTimersByTimeAsync(29_999);
    expect(check.state.status).toBe('checking');
    expect(signal?.aborted).toBe(false);
    await vi.advanceTimersByTimeAsync(1);
    expect(signal?.aborted).toBe(true);
    expect(check.state.status).toBe('error');
    expect(check.state.error).toContain('timed out');
    expect(check.isValidFor(rule)).toBe(false);
    expect(vi.getTimerCount()).toBe(0);

    check.retry();
    await vi.advanceTimersByTimeAsync(0);
    expect(check.isValidFor(rule)).toBe(true);
    expect(check.state.error).toBeNull();
    expect(vi.getTimerCount()).toBe(0);
    check.dispose();
  });

  it.each(['reset', 'dispose'] as const)(
    'cancels the request and its deadline on %s',
    async (action) => {
      vi.mocked(checkRuleSyntax).mockImplementationOnce((_rules, signal) =>
        waitForAbort(signal),
      );
      const check = createRuleSyntaxCheck();
      check.update(rule);
      await vi.advanceTimersByTimeAsync(500);
      const signal = vi.mocked(checkRuleSyntax).mock.calls[0][1];

      check[action]();
      await vi.advanceTimersByTimeAsync(0);
      expect(signal?.aborted).toBe(true);
      expect(check.state.error).toBeNull();
      expect(vi.getTimerCount()).toBe(0);
    },
  );
});
