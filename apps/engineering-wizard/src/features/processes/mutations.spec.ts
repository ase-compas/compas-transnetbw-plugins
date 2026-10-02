import { beforeEach, describe, expect, it } from 'vitest';
import type { XPathValidation } from '@oscd-transnet-plugins/shared';
import {
  addValidationsToPluginInProcess,
  getValidationsForScope,
  updateValidationInPluginInProcess,
} from './mutations.svelte';
import { engineeringProcesses } from './stores.svelte';

function validation(
  processId: string,
  pluginId: string,
  title: string,
): XPathValidation {
  return {
    title,
    description: '',
    context: '//SCL',
    assert: '@name',
    message: '',
    processId,
    pluginId,
  };
}

describe('getValidationsForScope', () => {
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

  it('filters by both process and plugin', () => {
    const matching = validation('process-a', 'plugin-a', 'Matching');
    const validations = [
      matching,
      validation('process-a', 'plugin-b', 'Wrong plugin'),
      validation('process-b', 'plugin-a', 'Wrong process'),
    ];

    expect(
      getValidationsForScope(validations, 'process-a', 'plugin-a'),
    ).toEqual([matching]);
  });

  it('returns an empty list when validations are undefined', () => {
    expect(getValidationsForScope(undefined, 'process', 'plugin')).toEqual([]);
  });

  it('adds validations in one batch and enforces the target scope', () => {
    addValidationsToPluginInProcess('process-a', 'plugin-a', [
      validation('wrong-process', 'wrong-plugin', 'First'),
      validation('wrong-process', 'wrong-plugin', 'Second'),
    ]);

    const validations =
      engineeringProcesses.processes[0].pluginGroups[0].plugins[0].validations;
    expect(validations).toHaveLength(2);
    expect(validations).toEqual([
      validation('process-a', 'plugin-a', 'First'),
      validation('process-a', 'plugin-a', 'Second'),
    ]);
  });

  it('enforces the target scope when updating a validation', () => {
    addValidationsToPluginInProcess('process-a', 'plugin-a', [
      validation('process-a', 'plugin-a', 'Original'),
    ]);

    updateValidationInPluginInProcess(
      'process-a',
      'plugin-a',
      0,
      validation('wrong-process', 'wrong-plugin', 'Updated'),
    );

    const validations =
      engineeringProcesses.processes[0].pluginGroups[0].plugins[0].validations;
    expect(validations).toEqual([
      validation('process-a', 'plugin-a', 'Updated'),
    ]);
  });
});
