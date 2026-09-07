import { afterEach, describe, expect, it, vi } from 'vitest';
import { describeValidationError } from './errors';

const MESSAGES = {
  offline: 'offline',
  unreachable: 'unreachable',
  fallback: 'fallback',
};

describe('describeValidationError', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('reports offline when navigator.onLine is false', () => {
    vi.stubGlobal('navigator', { onLine: false });
    expect(describeValidationError(new Error('boom'), MESSAGES)).toBe('offline');
  });

  it('reports unreachable for a fetch TypeError', () => {
    vi.stubGlobal('navigator', { onLine: true });
    expect(describeValidationError(new TypeError('Failed to fetch'), MESSAGES)).toBe(
      'unreachable',
    );
  });

  it('propagates the Error message for HTTP errors', () => {
    vi.stubGlobal('navigator', { onLine: true });
    expect(describeValidationError(new Error('HTTP 500'), MESSAGES)).toBe('HTTP 500');
  });

  it('falls back for non-Error rejections', () => {
    vi.stubGlobal('navigator', { onLine: true });
    expect(describeValidationError('weird', MESSAGES)).toBe('fallback');
  });
});
