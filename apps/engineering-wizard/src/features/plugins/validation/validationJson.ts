import type { XPathValidation } from '@oscd-transnet-plugins/shared';

export const VALIDATION_EXPORT_FORMAT_VERSION = 1;
export const MAX_VALIDATION_IMPORT_BYTES = 5 * 1024 * 1024;

type ExportedValidation = Omit<XPathValidation, 'processId' | 'pluginId'>;

export type ValidationExport = {
  formatVersion: typeof VALIDATION_EXPORT_FORMAT_VERSION;
  validations: ExportedValidation[];
};

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function readOptionalString(entry: JsonRecord, key: string): string {
  const value = entry[key];
  if (value === undefined) return '';
  if (typeof value !== 'string') {
    throw new Error(`Validation "${key}" must be a string.`);
  }
  return value;
}

function readRequiredString(entry: JsonRecord, key: string, index: number): string {
  const value = entry[key];
  if (typeof value !== 'string') {
    throw new Error(`Validation ${index + 1} "${key}" must be a string.`);
  }
  const normalizedValue = value.trim();
  if (!normalizedValue) {
    throw new Error(`Validation ${index + 1} "${key}" must not be empty.`);
  }
  return normalizedValue;
}

function toValidation(
  value: unknown,
  processId: string,
  pluginId: string,
  index: number,
): XPathValidation {
  if (!isRecord(value)) {
    throw new Error(`Validation ${index + 1} must be a JSON object.`);
  }

  const ruleUi = value.ruleUi;
  const normalizedRuleUi: Record<string, unknown> | undefined =
    isRecord(ruleUi) ? ruleUi : undefined;
  if (ruleUi !== undefined && !normalizedRuleUi) {
    throw new Error(`Validation ${index + 1} "ruleUi" must be a JSON object.`);
  }

  const validation: XPathValidation = {
    title: readRequiredString(value, 'title', index),
    description: readOptionalString(value, 'description'),
    context: readRequiredString(value, 'context', index),
    assert: readRequiredString(value, 'assert', index),
    message: readRequiredString(value, 'message', index),
    processId,
    pluginId,
  };

  if (normalizedRuleUi) validation.ruleUi = normalizedRuleUi;
  return validation;
}

function getImportValidations(content: unknown): unknown[] {
  if (Array.isArray(content)) return content;

  if (!isRecord(content)) {
    throw new Error('The JSON file must contain a validation export object or array.');
  }
  if (content.formatVersion !== VALIDATION_EXPORT_FORMAT_VERSION) {
    throw new Error(`Unsupported validation export format version "${String(content.formatVersion)}".`);
  }
  if (!Array.isArray(content.validations)) {
    throw new Error('The validation export must contain a "validations" array.');
  }
  return content.validations;
}

export function getValidationsForScope(
  validations: XPathValidation[] | undefined,
  processId: string,
  pluginId: string,
): XPathValidation[] {
  return (validations ?? []).filter(
    (validation) => validation.processId === processId && validation.pluginId === pluginId,
  );
}

export function createValidationExport(validations: readonly XPathValidation[]): ValidationExport {
  return {
    formatVersion: VALIDATION_EXPORT_FORMAT_VERSION,
    validations: validations.map(({ title, description, context, assert, message, ruleUi }) => ({
      title,
      description,
      context,
      assert,
      ...(message === undefined ? {} : { message }),
      ...(ruleUi === undefined ? {} : { ruleUi }),
    })),
  };
}

export function parseValidationImport(
  content: unknown,
  processId: string,
  pluginId: string,
): XPathValidation[] {
  return getImportValidations(content).map((validation, index) =>
    toValidation(validation, processId, pluginId, index),
  );
}

export function parseValidationImportJson(
  content: string,
  processId: string,
  pluginId: string,
): XPathValidation[] {
  try {
    return parseValidationImport(JSON.parse(content), processId, pluginId);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('The selected file does not contain valid JSON.');
    }
    throw error;
  }
}

export function createValidationExportFileName(pluginName: string): string {
  const normalizedName = pluginName
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return normalizedName
    ? `${normalizedName}-validations.json`
    : 'validation-rules.json';
}

export function downloadValidationExport(
  fileName: string,
  validations: readonly XPathValidation[],
): void {
  const content = JSON.stringify(createValidationExport(validations), null, 2);
  const url = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.hidden = true;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}
