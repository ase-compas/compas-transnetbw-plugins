import type { XPathValidation } from '@oscd-transnet-plugins/shared';
import { documentStore } from '../documentStore.svelte';

const API_URL =
  import.meta.env.VITE_VALIDATION_API_URL ??
  '/compas-validation-service/api/v1/validate';

export interface ValidationError {
  ruleName: string;
  message: string;
  xpath: string;
  severity: string;
  lineNumber: number | null;
}

export interface ValidationResult {
  validationType: string;
  valid: boolean;
  errors: ValidationError[];
}

export async function validateWithContent(
  entry: XPathValidation,
  sclContent: string,
): Promise<ValidationResult> {
  const rule = { context: entry.context, assertion: entry.assert };

  const formData = new FormData();
  formData.append('validationType', 'XPATH');
  formData.append('sclFile', new File([sclContent], 'document.scd', { type: 'application/xml' }));
  formData.append('rulesJson', JSON.stringify([rule]));
  formData.append('sclFileExtension', 'SCD');

  const response = await fetch(API_URL, { method: 'POST', body: formData });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const data: unknown = await response.json();
  if (!isValidationResult(data)) {
    throw new Error('Unexpected response shape from validation API');
  }
  return data;
}

export async function validateEntry(entry: XPathValidation): Promise<ValidationResult> {
  const doc = documentStore.doc;
  if (!doc) throw new Error('No SCL document loaded');
  return validateWithContent(entry, new XMLSerializer().serializeToString(doc));
}

function isValidationResult(data: unknown): data is ValidationResult {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).valid === 'boolean' &&
    Array.isArray((data as Record<string, unknown>).errors)
  );
}
