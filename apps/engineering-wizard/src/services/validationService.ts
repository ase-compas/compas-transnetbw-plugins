import type { XPathValidation } from '@oscd-transnet-plugins/shared';
import { documentStore } from '../documentStore.svelte';

const API_URL = 'http://localhost:8081/api/v1/validate';

export interface ValidationError {
  ruleName: string;
  message: string;
  xpath: string;
  severity: string;
  lineNumber: number;
}

export interface ValidationResult {
  validationType: string;
  valid: boolean;
  errors: ValidationError[];
}

export async function validateEntry(entry: XPathValidation): Promise<ValidationResult> {
  const doc = documentStore.doc;
  if (!doc) throw new Error('No SCL document loaded');

  const sclContent = new XMLSerializer().serializeToString(doc);
  const rule = { context: entry.context, assertion: entry.assert };

  console.log('[validateEntry] Sending rule:', rule);
  console.log('[validateEntry] Document preview:', sclContent.slice(0, 300));

  const formData = new FormData();
  formData.append('validationType', 'XPATH');
  formData.append('sclFile', new File([sclContent], 'document.scd', { type: 'application/xml' }));
  formData.append('rulesJson', JSON.stringify([rule]));
  formData.append('sclFileExtension', 'SCD');

  const response = await fetch(API_URL, { method: 'POST', body: formData });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
