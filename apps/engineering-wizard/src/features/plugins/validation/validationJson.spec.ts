import { describe, expect, it, vi } from 'vitest';
import {
  MAX_VALIDATION_IMPORT_BYTES,
  createValidationExport,
  createValidationExportFileName,
  importValidationFiles,
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

  it('imports multiple files while rejecting whole malformed or unreadable files', async () => {
    const file = (name: string, content: string) => ({
      name,
      size: new Blob([content]).size,
      text: vi.fn().mockResolvedValue(content),
    });
    const result = await importValidationFiles([
      file('first.json', JSON.stringify([validation])),
      file('invalid-json.json', '{'),
      file(
        'invalid-rule.json',
        JSON.stringify([validation, { ...validation, context: 42 }]),
      ),
      {
        name: 'unreadable.json',
        size: 10,
        text: vi.fn().mockRejectedValue(new Error('Read failed')),
      },
      file('last.json', JSON.stringify(createValidationExport([validation]))),
    ]);

    expect(result.importedFiles).toBe(2);
    expect(result.validations).toEqual([
      ...parseValidationImport([validation]),
      ...parseValidationImport([validation]),
    ]);
    expect(result.failures).toEqual([
      {
        name: 'invalid-json.json',
        reason: 'The selected file does not contain valid JSON.',
      },
      {
        name: 'invalid-rule.json',
        reason: 'Validation 2 "context" must be a string.',
      },
      { name: 'unreadable.json', reason: 'Read failed' },
    ]);
  });

  it('reports all files when none can be imported', async () => {
    const result = await importValidationFiles([
      { name: 'null.json', size: 4, text: async () => 'null' },
      {
        name: 'empty-title.json',
        size: 100,
        text: async () => JSON.stringify([{ ...validation, title: ' ' }]),
      },
    ]);

    expect(result.importedFiles).toBe(0);
    expect(result.validations).toEqual([]);
    expect(result.failures.map(({ name }) => name)).toEqual([
      'null.json',
      'empty-title.json',
    ]);
  });

  it('skips oversized files before reading and retains the combined read budget', async () => {
    const oversizedRead = vi.fn();
    const overBudgetRead = vi.fn();
    const result = await importValidationFiles([
      {
        name: 'oversized.json',
        size: MAX_VALIDATION_IMPORT_BYTES + 1,
        text: oversizedRead,
      },
      {
        name: 'invalid.json',
        size: MAX_VALIDATION_IMPORT_BYTES - 2,
        text: async () => '{',
      },
      { name: 'over-budget.json', size: 3, text: overBudgetRead },
      { name: 'remaining.json', size: 2, text: async () => '[]' },
    ]);

    expect(oversizedRead).not.toHaveBeenCalled();
    expect(overBudgetRead).not.toHaveBeenCalled();
    expect(result.importedFiles).toBe(1);
    expect(result.failures.map(({ name }) => name)).toEqual([
      'oversized.json',
      'invalid.json',
      'over-budget.json',
    ]);
  });

  it('only imports allowed fields from untrusted JSON', async () => {
    const content = JSON.stringify([
      {
        ...validation,
        ['__proto__']: { polluted: true },
        constructor: { prototype: { polluted: true } },
        pluginUrl: 'javascript:alert(1)',
      },
    ]);
    const result = await importValidationFiles([
      {
        name: 'untrusted.json',
        size: content.length,
        text: async () => content,
      },
    ]);

    expect(result.failures).toEqual([]);
    expect(result.validations).toEqual(parseValidationImport([validation]));
    expect(Object.getPrototypeOf(result.validations[0])).toBe(Object.prototype);
    expect(result.validations[0]).not.toHaveProperty('polluted');
  });
});
