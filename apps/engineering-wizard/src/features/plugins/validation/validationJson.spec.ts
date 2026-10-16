import { describe, expect, it } from 'vitest';
import {
  createValidationExport,
  createValidationExportFileName,
  parseValidationImport,
  parseValidationImportJson,
} from './validationJson';

const validation = {
  title: 'Required name',
  description: 'Requires a name attribute.',
  context: '//SCL',
  assert: '@name',
  message: 'A name is required.',
  processId: 'source-process',
  pluginId: 'source-plugin',
};

describe('validationJson', () => {
  it('exports portable validations without source scope identifiers', () => {
    expect(createValidationExport([validation])).toEqual({
      formatVersion: 1,
      validations: [{
        title: validation.title,
        description: validation.description,
        context: validation.context,
        assert: validation.assert,
        message: validation.message,
      }],
    });
  });

  it('imports validations without scope identifiers', () => {
    const [imported] = parseValidationImport([validation]);

    expect(imported).toEqual({
      title: validation.title,
      description: validation.description,
      context: validation.context,
      assert: validation.assert,
      message: validation.message,
    });
    expect(imported).not.toHaveProperty('processId');
    expect(imported).not.toHaveProperty('pluginId');
  });

  it('imports legacy validations without an error message', () => {
    const [imported] = parseValidationImport(
      [{ ...validation, message: undefined }],
    );

    expect(imported.message).toBe('');
  });

  it('exports an empty message when no message is defined', () => {
    const exported = createValidationExport([
      { ...validation, message: undefined },
    ]);

    expect(exported.validations[0].message).toBe('');
  });

  it('ignores legacy ruleUi snapshots during import and export', () => {
    const legacyValidation = {
      ...validation,
      ruleUi: { mode: 'element', elementName: 'IED' },
    };

    const [imported] = parseValidationImport([legacyValidation]);

    expect(imported).not.toHaveProperty('ruleUi');
    expect(createValidationExport([legacyValidation])).not.toHaveProperty(
      'validations.0.ruleUi',
    );
  });

  it('rejects invalid JSON and unsupported export versions', () => {
    expect(() => parseValidationImportJson('{'))
      .toThrow('The selected file does not contain valid JSON.');
    expect(() => parseValidationImport(
      { formatVersion: 2, validations: [] },
    )).toThrow('Unsupported validation export format version "2".');
  });

  it('creates a short, filesystem-safe export filename', () => {
    expect(createValidationExportFileName(' Plugin Ä 1 ')).toBe('plugin-a-1-validations.json');
  });
});
