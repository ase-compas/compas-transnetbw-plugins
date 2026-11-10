import type { XPathValidation } from '@oscd-transnet-plugins/shared';
import { documentStore } from '../documentStore.svelte';
import { describeNetworkError } from '../utils/network-error';

const API_URL =
  import.meta.env.VITE_VALIDATION_API_URL ??
  '/compas-validation-service/api/v1/validate';

export type RuleExpressions = Pick<XPathValidation, 'context' | 'assert'>;
export type RuleStatus =
  | 'PASSED'
  | 'FAILED'
  | 'INVALID_RULE'
  | 'EVALUATION_ERROR';

export interface ValidationError {
  ruleName: string;
  message: string;
  xpath?: string | null;
  severity?: 'ERROR' | 'WARNING' | 'INFO' | null;
  lineNumber?: number | null;
}

export interface RuleDiagnostic {
  field: 'context' | 'assert';
  code: 'INVALID_XPATH' | 'XPATH_EVALUATION_ERROR';
  message: string;
}

export interface RuleOutcome {
  ruleIndex: number;
  status: RuleStatus;
  errors: ValidationError[];
  diagnostics: RuleDiagnostic[];
}

export interface BatchValidationResult {
  valid: boolean;
  complete: boolean;
  results: RuleOutcome[];
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export class ValidationApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly details?: string,
  ) {
    super(message);
    this.name = 'ValidationApiError';
  }
}

async function readResponse(response: Response): Promise<unknown> {
  if (!response.ok) {
    let body: unknown;
    if (response.headers.get('content-type')?.includes('application/json')) {
      try {
        body = await response.json();
      } catch (error) {
        if (!(error instanceof SyntaxError)) throw error;
      }
    }
    throw new ValidationApiError(
      response.status,
      isRecord(body) && typeof body.message === 'string'
        ? body.message
        : `HTTP ${response.status}: ${response.statusText}`,
      isRecord(body) && typeof body.details === 'string'
        ? body.details
        : undefined,
    );
  }
  return response.json();
}

export async function validateRulesWithContent(
  rules: RuleExpressions[],
  sclContent: string,
  signal?: AbortSignal,
): Promise<BatchValidationResult> {
  // The legacy API has no per-rule results, so submit each rule separately.
  const results: RuleOutcome[] = await Promise.all(
    rules.map(async (rule, ruleIndex) => {
      const result = await validateWithContent(rule, sclContent, signal);
      return {
        ruleIndex,
        status: result.valid ? 'PASSED' : 'FAILED',
        errors: result.errors,
        diagnostics: [],
      };
    }),
  );
  return {
    valid: results.every((result) => result.status === 'PASSED'),
    complete: true,
    results,
  };
}

export async function validateWithContent(
  entry: RuleExpressions,
  sclContent: string,
  signal?: AbortSignal,
): Promise<ValidationResult> {
  const formData = new FormData();
  formData.append('validationType', 'XPATH');
  formData.append(
    'sclFile',
    new File([sclContent], 'document.scd', { type: 'application/xml' }),
  );
  formData.append(
    'rulesJson',
    JSON.stringify([{ context: entry.context, assertion: entry.assert }]),
  );
  formData.append('sclFileExtension', 'SCD');
  const data = await readResponse(
    await fetch(API_URL, { method: 'POST', body: formData, signal }),
  );
  if (
    !isRecord(data) ||
    typeof data.valid !== 'boolean' ||
    !Array.isArray(data.errors) ||
    !data.errors.every(isValidationError) ||
    data.valid !== (data.errors.length === 0)
  ) {
    throw new Error('Unexpected response shape from validation API');
  }
  return { valid: data.valid, errors: data.errors };
}

export async function validateEntry(
  entry: XPathValidation,
): Promise<ValidationResult> {
  const doc = documentStore.doc;
  if (!doc) throw new Error('No SCL document loaded');
  return validateWithContent(entry, new XMLSerializer().serializeToString(doc));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isValidationError(value: unknown): value is ValidationError {
  return (
    isRecord(value) &&
    typeof value.ruleName === 'string' &&
    typeof value.message === 'string' &&
    (value.xpath === undefined ||
      value.xpath === null ||
      typeof value.xpath === 'string') &&
    (value.severity === undefined ||
      value.severity === null ||
      ['ERROR', 'WARNING', 'INFO'].includes(String(value.severity))) &&
    (value.lineNumber === undefined ||
      value.lineNumber === null ||
      (typeof value.lineNumber === 'number' &&
        Number.isInteger(value.lineNumber)))
  );
}

export function describeValidationError(error: unknown): string {
  return describeNetworkError(error, {
    offline:
      'You appear to be offline. Validation will resume once your connection is restored.',
    unreachable:
      'Could not reach the validation service. Check your connection and try again.',
    fallback: 'Validation request failed.',
  });
}
