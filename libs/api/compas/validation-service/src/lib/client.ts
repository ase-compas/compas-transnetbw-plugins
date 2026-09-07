import {
  draftToServiceRule,
  toXPathValidationServiceRules,
  type ResolvedValidationRule,
  type RuleDraft,
  type XPathValidationServiceRule,
} from '@oscd-transnet-plugins/api-compas-validation-library';
import type { SclFileExtension, ValidationResult } from './types';

const DEFAULT_SCL_FILE_EXTENSION: SclFileExtension = 'SCD';

export interface ValidationServiceClientOptions {
  /** Base URL of the compas-validation-service, without a trailing slash. */
  baseUrl: string;
  fetch?: typeof fetch;
  /**
   * Bearer token for `Authorization`. Return `undefined` to skip the header
   * (default deployment authenticates via the auth-proxy's session cookie).
   */
  getAuthToken?: () => string | Promise<string | undefined> | undefined;
}

export interface ValidationServiceClient {
  validateRules(
    rules: readonly XPathValidationServiceRule[],
    sclContent: string,
    ext?: SclFileExtension,
  ): Promise<ValidationResult>;

  /** Non-XPath rules are filtered out silently. */
  validateResolvedRules(
    rules: readonly ResolvedValidationRule[],
    sclContent: string,
    ext?: SclFileExtension,
  ): Promise<ValidationResult>;

  /** Unsaved draft; its name falls back to the title on the wire. */
  validateDraftRule(
    draft: RuleDraft,
    sclContent: string,
    ext?: SclFileExtension,
  ): Promise<ValidationResult>;
}

function isValidationResult(data: unknown): data is ValidationResult {
  if (typeof data !== 'object' || data === null) return false;
  const record = data as Record<string, unknown>;
  return typeof record['valid'] === 'boolean' && Array.isArray(record['errors']);
}

export function createValidationServiceClient(
  options: ValidationServiceClientOptions,
): ValidationServiceClient {
  const doFetch: typeof fetch =
    options.fetch ?? ((...args) => globalThis.fetch(...args));
  const baseUrl = options.baseUrl.replace(/\/+$/, '');

  async function post(
    rules: readonly XPathValidationServiceRule[],
    sclContent: string,
    ext: SclFileExtension,
  ): Promise<ValidationResult> {
    if (rules.length === 0) {
      return { validationType: 'XPATH', valid: true, errors: [] };
    }

    const formData = new FormData();
    formData.append('validationType', 'XPATH');
    formData.append(
      'sclFile',
      new File([sclContent], `document.${ext.toLowerCase()}`, {
        type: 'application/xml',
      }),
    );
    formData.append('rulesJson', JSON.stringify(rules));
    formData.append('sclFileExtension', ext);

    const headers: Record<string, string> = {};
    if (options.getAuthToken) {
      const token = await options.getAuthToken();
      if (token) headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await doFetch(`${baseUrl}/api/v1/validate`, {
      method: 'POST',
      body: formData,
      headers,
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: unknown = await response.json();
    if (!isValidationResult(data)) {
      throw new Error('Unexpected response shape from the validation API');
    }
    return data;
  }

  return {
    validateRules: (rules, sclContent, ext = DEFAULT_SCL_FILE_EXTENSION) =>
      post(rules, sclContent, ext),
    validateResolvedRules: (rules, sclContent, ext = DEFAULT_SCL_FILE_EXTENSION) =>
      post(toXPathValidationServiceRules(rules), sclContent, ext),
    validateDraftRule: (draft, sclContent, ext = DEFAULT_SCL_FILE_EXTENSION) =>
      post([draftToServiceRule(draft)], sclContent, ext),
  };
}
