import type { ValidationError } from './validationService';

const NO_CONTEXT_PREFIX = 'No context nodes found';

/**
 * True when the backend could not locate any XML nodes for the rule's context expression.
 * Indicated by a null lineNumber and the well-known message prefix from the validator.
 */
export function isNoContextError(err: ValidationError): boolean {
  return err.lineNumber === null && err.message.startsWith(NO_CONTEXT_PREFIX);
}

export interface ErrorDisplay {
  /** Primary text to show — the user-defined rule message, or the raw API message as fallback. */
  message: string;
  /** Optional supplementary note (e.g. "No context nodes found") shown separately. */
  note: string | undefined;
}

/**
 * Resolves a single ValidationError into a user-facing display object.
 *
 * @param err - Error from the API response.
 * @param userMessage - The message the user wrote when creating the rule.
 */
export function resolveErrorDisplay(err: ValidationError, userMessage: string): ErrorDisplay {
  const message = userMessage.trim().length > 0 ? userMessage.trim() : err.message;
  const note = isNoContextError(err) ? 'No context nodes found' : undefined;
  return { message, note };
}

/**
 * Produces a single detail string suitable for a toast notification.
 * Deduplicates identical entries that arise when multiple elements fail the same rule.
 *
 * @param errors - All errors from the ValidationResult.
 * @param userMessage - The message the user wrote when creating the rule.
 */
export function formatToastDetail(errors: ValidationError[], userMessage: string): string {
  if (errors.length === 0) return '';

  const parts = errors.map((err) => {
    const { message, note } = resolveErrorDisplay(err, userMessage);
    return note ? `${message} (${note})` : message;
  });

  return [...new Set(parts)].join('; ');
}
