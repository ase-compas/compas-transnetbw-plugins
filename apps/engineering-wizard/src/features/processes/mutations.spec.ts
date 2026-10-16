import { beforeEach, describe, expect, it } from 'vitest';
import type { XPathValidation } from '@oscd-transnet-plugins/shared';
import {
  addValidationsToPluginInProcess,
  removeValidationFromPluginInProcess,
  updateValidationInPluginInProcess,
} from './mutations.svelte';
import { engineeringProcesses } from './stores.svelte';

function validation(title: string): XPathValidation {
  return {
    title,
    description: '',
    context: '//SCL',
    assert: '@name',
    message: '',
  };
}

function storedValidations(): XPathValidation[] | undefined {
  return engineeringProcesses.processes[0].pluginGroups[0].plugins[0].validations;
}

describe('plugin validation mutations', () => {
  beforeEach(() => {
    engineeringProcesses.processes = [{
      id: 'process-a',
      version: '1.0.0',
      name: 'Process A',
      description: '',
      pluginGroups: [{
        title: 'Plugins',
        plugins: [{
          id: 'plugin-a',
          name: 'Plugin A',
          type: 'internal',
          validations: [],
        }],
      }],
    }];
  });

  it('stores added validations without scope identifiers', () => {
    addValidationsToPluginInProcess('process-a', 'plugin-a', [
      {
        ...validation('First'),
        processId: 'wrong-process',
        pluginId: 'wrong-plugin',
        ruleUi: { mode: 'element' },
      } as XPathValidation,
      validation('Second'),
    ]);

    expect(storedValidations()).toEqual([
      validation('First'),
      validation('Second'),
    ]);
  });

  it('updates and removes the validation at the array index', () => {
    addValidationsToPluginInProcess('process-a', 'plugin-a', [
      validation('First'),
      validation('Second'),
      validation('Third'),
    ]);

    updateValidationInPluginInProcess(
      'process-a',
      'plugin-a',
      1,
      {
        ...validation('Updated'),
        processId: 'wrong-process',
        pluginId: 'wrong-plugin',
      } as XPathValidation,
    );
    removeValidationFromPluginInProcess('process-a', 'plugin-a', 0);

    expect(storedValidations()).toEqual([
      validation('Updated'),
      validation('Third'),
    ]);
  });
});
