import type { XPathValidation } from '@oscd-transnet-plugins/shared';
import { documentStore } from '../documentStore.svelte';
import { describeNetworkError } from '../utils/network-error';

const SCL_API_URL =
  import.meta.env.VITE_SCL_VALIDATION_API_URL ??
  '/compas-validation-service/api/scl-resources/validation';
const RULES_API_URL =
  import.meta.env.VITE_VALIDATION_RULES_API_URL ??
  '/compas-validation-service/api/validation-rules/validation';

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

export interface SyntaxDiagnostic extends RuleDiagnostic {
  ruleIndex: number;
  code: 'INVALID_XPATH';
}

export interface SyntaxValidationResult {
  valid: boolean;
  errors: SyntaxDiagnostic[];
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

function typedRule(rule: RuleExpressions) {
  return { type: 'XPATH' as const, context: rule.context, assert: rule.assert };
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

export async function checkRuleSyntax(
  rules: RuleExpressions[],
  signal?: AbortSignal,
): Promise<SyntaxValidationResult> {
  const data = await readResponse(
    await fetch(RULES_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rules: rules.map(typedRule) }),
      signal,
    }),
  );
  if (
    !isRecord(data) ||
    typeof data.valid !== 'boolean' ||
    !Array.isArray(data.errors) ||
    !data.errors.every(
      (error: unknown): error is SyntaxDiagnostic =>
        isDiagnostic(error) &&
        error.code === 'INVALID_XPATH' &&
        isRecord(error) &&
        isRuleIndex(error.ruleIndex, rules.length),
    ) ||
    data.valid !== (data.errors.length === 0)
  ) {
    throw new Error('Unexpected rule syntax response from validation API');
  }
  return { valid: data.valid, errors: data.errors };
}

export async function validateRulesWithContent(
  rules: RuleExpressions[],
  sclContent: string,
  signal?: AbortSignal,
): Promise<BatchValidationResult> {
  const formData = new FormData();
  formData.append(
    'sclFile',
    new File([sclContent], 'document.scd', { type: 'application/xml' }),
  );
  formData.append(
    'rules',
    new Blob([JSON.stringify(rules.map(typedRule))], {
      type: 'application/json',
    }),
  );
  formData.append('sclFileExtension', 'SCD');
  const data = await readResponse(
    await fetch(SCL_API_URL, { method: 'POST', body: formData, signal }),
  );
  if (
    !isRecord(data) ||
    typeof data.valid !== 'boolean' ||
    typeof data.complete !== 'boolean' ||
    !Array.isArray(data.results) ||
    data.results.length !== rules.length ||
    !data.results.every(isRuleOutcome)
  ) {
    throw new Error('Unexpected batch response from validation API');
  }
  const results: RuleOutcome[] = data.results;
  if (
    results.some((result) => !isRuleIndex(result.ruleIndex, rules.length)) ||
    new Set(results.map((result) => result.ruleIndex)).size !== rules.length ||
    data.valid !== results.every((result) => result.status === 'PASSED') ||
    data.complete !==
      results.every(
        (result) => result.status === 'PASSED' || result.status === 'FAILED',
      )
  ) {
    throw new Error('Inconsistent rule results from validation API');
  }
  return { valid: data.valid, complete: data.complete, results };
}

export async function validateWithContent(
  entry: XPathValidation,
  sclContent: string,
): Promise<ValidationResult> {
  const batch = await validateRulesWithContent([entry], sclContent);
  const result = batch.results[0];
  if (
    result.status === 'INVALID_RULE' ||
    result.status === 'EVALUATION_ERROR'
  ) {
    throw new Error(
      result.diagnostics
        .map((diagnostic) => `${diagnostic.field}: ${diagnostic.message}`)
        .join('; '),
    );
  }
  return { valid: result.status === 'PASSED', errors: result.errors };
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

function isRuleIndex(value: unknown, length: number): value is number {
  return (
    typeof value === 'number' &&
    Number.isInteger(value) &&
    value >= 0 &&
    value < length
  );
}

function isDiagnostic(value: unknown): value is RuleDiagnostic {
  return (
    isRecord(value) &&
    (value.field === 'context' || value.field === 'assert') &&
    (value.code === 'INVALID_XPATH' ||
      value.code === 'XPATH_EVALUATION_ERROR') &&
    typeof value.message === 'string'
  );
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

function isRuleOutcome(value: unknown): value is RuleOutcome {
  if (
    !isRecord(value) ||
    typeof value.ruleIndex !== 'number' ||
    !Array.isArray(value.errors) ||
    !value.errors.every(isValidationError) ||
    !Array.isArray(value.diagnostics) ||
    !value.diagnostics.every(isDiagnostic)
  )
    return false;
  switch (value.status) {
    case 'PASSED':
      return value.errors.length === 0 && value.diagnostics.length === 0;
    case 'FAILED':
      return value.errors.length > 0 && value.diagnostics.length === 0;
    case 'INVALID_RULE':
    case 'EVALUATION_ERROR':
      return (
        value.errors.length === 0 &&
        value.diagnostics.length > 0 &&
        value.diagnostics.every(
          (diagnostic: RuleDiagnostic) =>
            diagnostic.code ===
            (value.status === 'INVALID_RULE'
              ? 'INVALID_XPATH'
              : 'XPATH_EVALUATION_ERROR'),
        )
      );
    default:
      return false;
  }
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
