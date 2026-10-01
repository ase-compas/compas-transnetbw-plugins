import { describe, expect, it } from 'vitest';
import {
  initValidationEditor,
  validationEditor,
} from './validationEditorStore.svelte';

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
      ruleUi: { mode: 'attribute' },
    });

    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: true,
      expertXPath: assert,
      message: 'IED names are required.',
    });
  });

  it('restores complete builder state when it matches the assertion', () => {
    initValidationEditor('process', 'plugin', {
      title: 'Attribute rule',
      description: '',
      context: '//SCL',
      assert: "normalize-space(@name) = 'valid'",
      message: 'The name must be valid.',
      processId: 'process',
      pluginId: 'plugin',
      ruleUi: {
        mode: 'attribute',
        condition: 'equals',
        specificText: 'valid',
        attribute: 'name',
        elementCheckType: 'exists',
        elementName: '',
        elementCount: 1,
        message: 'stale message',
        expertMode: false,
        expertXPath: '',
      },
    });

    expect(validationEditor.ruleUi).toMatchObject({
      expertMode: false,
      attribute: 'name',
      condition: 'equals',
      specificText: 'valid',
      message: 'The name must be valid.',
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
});
