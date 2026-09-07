export interface ValidationErrorMessages {
  offline: string;
  unreachable: string;
  fallback: string;
}

export const DEFAULT_VALIDATION_ERROR_MESSAGES: ValidationErrorMessages = {
  offline:
    'You appear to be offline. Validation will resume once your connection is restored.',
  unreachable:
    'Could not reach the validation service. Check your connection and try again.',
  fallback: 'Validation request failed.',
};

export function describeValidationError(
  error: unknown,
  messages: ValidationErrorMessages = DEFAULT_VALIDATION_ERROR_MESSAGES,
): string {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return messages.offline;
  }
  // `fetch` rejects with a plain TypeError on network failure (DNS, CORS,
  // connection refused).
  if (error instanceof TypeError) {
    return messages.unreachable;
  }
  return error instanceof Error ? error.message : messages.fallback;
}
