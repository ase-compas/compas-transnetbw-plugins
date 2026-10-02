import { describe, expect, it } from 'vitest';
import {
  enterExpertMode,
  exitExpertMode,
  initValidationEditor,
  validationEditor,
} from './validationEditorStore.svelte';
import type { RuleUiState } from './validationRuleUi';
import { buildAssertionExpression } from './xpathBuilder';

describe('validation editor initialization', () => {
  it('preserves unsupported XPath in expert mode', () => {
    const assert = 'every $ied in IED satisfies normalize-space($ied/@name)';

    initValidationEditor('process', 'plugin', {
      title: 'Custom rule',
      description: '',
      context: '//SCL',
      assert,
      message: 'IED names are required.',
      processId: 'process',
      pluginId: 'plugin',
    });

    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: true,
      expertXPath: assert,
      message: 'IED names are required.',
    });
  });

  it('generates builder state from the assertion without a persisted UI snapshot', () => {
    const legacyValidation = {
      title: 'Attribute rule',
      description: '',
      context: '//SCL',
      assert: "normalize-space(@name) = 'valid'",
      message: 'The name must be valid.',
      processId: 'process',
      pluginId: 'plugin',
      ruleUi: {
        mode: 'element',
        elementName: 'IED',
      },
    };

    initValidationEditor('process', 'plugin', legacyValidation);

    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: false,
      attribute: 'name',
      condition: 'equals',
      specificText: 'valid',
      message: 'The name must be valid.',
    });
    expect(validationEditor.entry).not.toHaveProperty('ruleUi');
  });

  it('uses the default builder state for an empty assertion', () => {
    initValidationEditor('process', 'plugin', {
      title: 'Empty rule',
      description: '',
      context: '//SCL',
      assert: '   ',
      message: 'Define this rule.',
      processId: 'process',
      pluginId: 'plugin',
    });

    expect(validationEditor.ruleUi).toMatchObject({
      mode: 'attribute',
      condition: 'notContains',
      attribute: '',
      specificText: '',
      expertMode: false,
      expertXPath: '',
      message: 'Define this rule.',
    });
  });

  it('restores builder rules with namespaced and hyphenated attributes', () => {
    initValidationEditor('process', 'plugin', {
      title: 'Attribute rule',
      description: '',
      context: '//SCL',
      assert: "normalize-space(@scl:name-format) = 'valid'",
      message: 'The format must be valid.',
      processId: 'process',
      pluginId: 'plugin',
    });

    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: false,
      attribute: 'scl:name-format',
      condition: 'equals',
      specificText: 'valid',
    });
  });

  it.each([
    'contains',
    'notContains',
    'equals',
    'notEquals',
    'startsWith',
    'endsWith',
    'matches',
    'notMatches',
  ] as const)('round-trips generated %s attribute assertions', (condition) => {
    const ruleUi: RuleUiState = {
      mode: 'attribute',
      condition,
      specificText: "owner's, team value's",
      attribute: 'scl:name-format',
      elementCheckType: 'exists',
      elementName: '',
      elementCount: 1,
      message: 'Invalid attribute.',
      expertMode: false,
      expertXPath: '',
    };
    const assert = buildAssertionExpression(ruleUi);

    initValidationEditor('process', 'plugin', {
      title: 'Attribute rule',
      description: '',
      context: '//SCL',
      assert,
      message: ruleUi.message,
      processId: 'process',
      pluginId: 'plugin',
    });

    expect(validationEditor.ruleUi).toMatchObject({
      mode: 'attribute',
      condition,
      specificText: "owner's, team value's",
      attribute: 'scl:name-format',
      expertMode: false,
    });
    expect(buildAssertionExpression(validationEditor.ruleUi)).toBe(assert);
  });

  it.each([
    ['exists', 1, 1],
    ['notExists', 1, 0],
    ['exactly', 3, 3],
    ['atLeast', 2, 2],
    ['atMost', 4, 4],
  ] as const)('round-trips generated %s element assertions', (
    elementCheckType,
    elementCount,
    parsedElementCount,
  ) => {
    const ruleUi: RuleUiState = {
      mode: 'element',
      condition: 'notContains',
      specificText: '',
      attribute: '',
      elementCheckType,
      elementName: 'scl:Private-Element',
      elementCount,
      message: 'Invalid element count.',
      expertMode: false,
      expertXPath: '',
    };
    const assert = buildAssertionExpression(ruleUi);

    initValidationEditor('process', 'plugin', {
      title: 'Element rule',
      description: '',
      context: '//SCL',
      assert,
      message: ruleUi.message,
      processId: 'process',
      pluginId: 'plugin',
    });

    expect(validationEditor.ruleUi).toMatchObject({
      mode: 'element',
      elementCheckType,
      elementName: 'scl:Private-Element',
      elementCount: parsedElementCount,
      expertMode: false,
    });
    expect(buildAssertionExpression(validationEditor.ruleUi)).toBe(assert);
  });

  it('round-trips the attribute-presence assertion used for empty comparison text', () => {
    const assert = 'normalize-space(@name)';

    initValidationEditor('process', 'plugin', {
      title: 'Attribute rule',
      description: '',
      context: '//SCL',
      assert,
      message: 'Name is required.',
      processId: 'process',
      pluginId: 'plugin',
    });

    expect(validationEditor.ruleUi).toMatchObject({
      mode: 'attribute',
      attribute: 'name',
      specificText: '',
      expertMode: false,
    });
    expect(buildAssertionExpression(validationEditor.ruleUi)).toBe(assert);
  });

  it('keeps builder-like assertions in expert mode when they cannot round-trip', () => {
    const assert = 'count(IED) > 2';

    initValidationEditor('process', 'plugin', {
      title: 'Custom count',
      description: '',
      context: '//SCL',
      assert,
      message: 'More IEDs are required.',
      processId: 'process',
      pluginId: 'plugin',
    });

    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: true,
      expertXPath: assert,
    });
  });

  it('seeds expert mode from the current builder assertion', () => {
    initValidationEditor('process', 'plugin', {
      title: 'Attribute rule',
      description: '',
      context: '//SCL',
      assert: "normalize-space(@name) = 'valid'",
      message: 'The name must be valid.',
      processId: 'process',
      pluginId: 'plugin',
    });

    enterExpertMode();

    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: true,
      expertXPath: "normalize-space(@name) = 'valid'",
    });
  });

  it('converts parseable expert XPath back to builder state without losing the draft', () => {
    const expertXPath = "normalize-space(@name) = 'updated'";
    initValidationEditor('process', 'plugin');
    validationEditor.ruleUi.message = 'The name must be updated.';
    validationEditor.ruleUi.expertMode = true;
    validationEditor.ruleUi.expertXPath = expertXPath;

    expect(exitExpertMode()).toBe(true);
    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: false,
      expertXPath,
      attribute: 'name',
      condition: 'equals',
      specificText: 'updated',
      message: 'The name must be updated.',
    });

    enterExpertMode();
    expect(validationEditor.ruleUi.expertXPath).toBe(expertXPath);
  });

  it('seeds expert mode from builder changes instead of restoring a stale draft', () => {
    initValidationEditor('process', 'plugin', {
      title: 'Attribute rule',
      description: '',
      context: '//SCL',
      assert: "normalize-space(@name) = 'initial'",
      message: 'The name must be valid.',
      processId: 'process',
      pluginId: 'plugin',
    });

    enterExpertMode();
    expect(exitExpertMode()).toBe(true);
    validationEditor.ruleUi.specificText = 'changed in builder';

    enterExpertMode();

    expect(validationEditor.ruleUi.expertXPath)
      .toBe("normalize-space(@name) = 'changed in builder'");
  });

  it('stays in expert mode when the XPath cannot be represented by the builder', () => {
    const expertXPath = 'count(IED) > 2';
    initValidationEditor('process', 'plugin');
    validationEditor.ruleUi.expertMode = true;
    validationEditor.ruleUi.expertXPath = expertXPath;

    expect(exitExpertMode()).toBe(false);
    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: true,
      expertXPath,
    });
  });

  it('returns to the default builder state for empty expert XPath', () => {
    initValidationEditor('process', 'plugin');
    validationEditor.ruleUi.message = 'Define this rule.';
    validationEditor.ruleUi.expertMode = true;
    validationEditor.ruleUi.expertXPath = '   ';

    expect(exitExpertMode()).toBe(true);
    expect(validationEditor.ruleUi).toMatchObject({
      mode: 'attribute',
      condition: 'notContains',
      attribute: '',
      specificText: '',
      message: 'Define this rule.',
      expertMode: false,
      expertXPath: '   ',
    });
  });

  it.each([
    'contains',
    'notContains',
    'equals',
    'notEquals',
    'startsWith',
    'endsWith',
  ] as const)(
    'normalizes generated %s rules with empty text to attribute-presence state',
    (condition) => {
      const ruleUi: RuleUiState = {
        mode: 'attribute',
        condition,
        specificText: '',
        attribute: 'name',
        elementCheckType: 'exists',
        elementName: '',
        elementCount: 1,
        message: 'Name is required.',
        expertMode: false,
        expertXPath: '',
      };
      const assert = buildAssertionExpression(ruleUi);

      initValidationEditor('process', 'plugin', {
        title: 'Attribute rule',
        description: '',
        context: '//SCL',
        assert,
        message: ruleUi.message,
        processId: 'process',
        pluginId: 'plugin',
      });

      expect(buildAssertionExpression(validationEditor.ruleUi)).toBe(assert);
      expect(validationEditor.ruleUi).toMatchObject({
        mode: 'attribute',
        condition: 'notContains',
        attribute: 'name',
        specificText: '',
        expertMode: false,
      });
    },
  );

  it('normalizes exactly zero elements to the equivalent not-exists state', () => {
    const assert = 'count(IED) = 0';

    initValidationEditor('process', 'plugin', {
      title: 'No IEDs',
      description: '',
      context: '//SCL',
      assert,
      message: 'IEDs are not allowed.',
      processId: 'process',
      pluginId: 'plugin',
    });

    expect(validationEditor.ruleUi).toMatchObject({
      mode: 'element',
      elementCheckType: 'notExists',
      elementName: 'IED',
      elementCount: 0,
      expertMode: false,
    });
    expect(buildAssertionExpression(validationEditor.ruleUi)).toBe(assert);
  });

  it.each([-1, 1.5, Number.NaN])(
    'does not build an element assertion with invalid count %s',
    (elementCount) => {
      const ruleUi: RuleUiState = {
        mode: 'element',
        condition: 'notContains',
        specificText: '',
        attribute: '',
        elementCheckType: 'exactly',
        elementName: 'IED',
        elementCount,
        message: 'Invalid count.',
        expertMode: false,
        expertXPath: '',
      };

      expect(buildAssertionExpression(ruleUi)).toBe('');
    },
  );

  it.each([
    'count(IED) = -1',
    'count(IED) >= 1.5',
  ])('keeps invalid builder count assertion "%s" in expert mode', (assert) => {
    initValidationEditor('process', 'plugin', {
      title: 'Invalid count',
      description: '',
      context: '//SCL',
      assert,
      message: 'Invalid count.',
      processId: 'process',
      pluginId: 'plugin',
    });

    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: true,
      expertXPath: assert,
    });
  });
});
