import { beforeEach, describe, expect, it } from 'vitest';
import type { XPathValidation } from '@oscd-transnet-plugins/shared';
import {
  addProcess,
  addValidationsToPluginInProcess,
  importValidationsToPluginInProcess,
  removeValidationFromPluginInProcess,
  updateValidationInPluginInProcess,
} from './mutations.svelte';
import { engineeringProcesses } from './stores.svelte';
import { prepareValidationImport } from '../plugins/validation/validationRules';

function validation(title: string): XPathValidation {
  return {
    id: `rule-${title}`,
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

  it('preserves explicit empty groups instead of changing imported process content', () => {
    const process = addProcess({
      id: 'empty',
      name: 'Empty',
      version: '1.0.0',
      description: '',
      pluginGroups: [],
    });

    expect(process.pluginGroups).toEqual([]);
  });

  it('updates and removes the selected validation while preserving its identity', () => {
    addValidationsToPluginInProcess('process-a', 'plugin-a', [
      validation('First'),
      validation('Second'),
      validation('Third'),
    ]);
    const [first, second] = storedValidations() ?? [];
    if (!first || !second) throw new Error('Expected the stored rules.');

    updateValidationInPluginInProcess(
      'process-a',
      'plugin-a',
      second,
      {
        ...validation('Updated'),
        processId: 'wrong-process',
        pluginId: 'wrong-plugin',
      } as XPathValidation,
    );
    removeValidationFromPluginInProcess('process-a', 'plugin-a', first);

    expect(storedValidations()).toEqual([
      validation('Third'),
      { ...validation('Updated'), id: 'rule-Second' },
    ]);
  });

  it('rejects removed targets rather than mutating a replacement with the same ID', () => {
    addValidationsToPluginInProcess('process-a', 'plugin-a', [validation('First')]);
    const entry = storedValidations()?.[0];
    if (!entry) throw new Error('Expected the stored rule.');
    removeValidationFromPluginInProcess('process-a', 'plugin-a', entry);
    addValidationsToPluginInProcess('process-a', 'plugin-a', [validation('First')]);

    expect(() => updateValidationInPluginInProcess('process-a', 'plugin-a', entry, validation('Changed')))
      .toThrow('The selected validation no longer exists.');
    expect(() => removeValidationFromPluginInProcess('process-a', 'plugin-a', entry))
      .toThrow('The selected validation no longer exists.');
    expect(storedValidations()).toEqual([validation('First')]);
  });

  it('assigns IDs to new rules and sorts additions alphabetically', () => {
    addValidationsToPluginInProcess('process-a', 'plugin-a', [
      { ...validation('Zulu'), id: undefined },
      { ...validation('Alpha'), id: undefined },
    ]);

    const stored = storedValidations() ?? [];
    expect(stored.map(({ title }) => title)).toEqual(['Alpha', 'Zulu']);
    expect(stored[0].id).toEqual(expect.any(String));
    expect(stored[1].id).toEqual(expect.any(String));
    expect(stored[0].id).not.toBe(stored[1].id);
  });

  it('skips IDs already present or repeated in the import and uniquely renames name collisions', () => {
    addValidationsToPluginInProcess('process-a', 'plugin-a', [
      validation('Rule'),
      validation('Rule (copy)'),
    ]);
    const result = importValidationsToPluginInProcess('process-a', 'plugin-a', [
      { ...validation('Changed title'), id: 'rule-Rule' },
      { ...validation('Rule'), id: 'new-1' },
      { ...validation('Rule'), id: 'new-2' },
      { ...validation('Different title'), id: 'new-1' },
      validation('Alpha'),
    ]);

    expect(result.skipped).toBe(2);
    expect(result.renamed).toEqual([
      { from: 'Rule', to: 'Rule (copy 2)' },
      { from: 'Rule', to: 'Rule (copy 3)' },
    ]);
    expect(storedValidations()?.map(({ title }) => title)).toEqual([
      'Alpha', 'Rule', 'Rule (copy 2)', 'Rule (copy 3)', 'Rule (copy)',
    ].sort((a, b) => a.localeCompare(b)));
    expect(result.added.map(({ id }) => id)).toEqual(['new-1', 'new-2', 'rule-Alpha']);
    expect(importValidationsToPluginInProcess('process-a', 'plugin-a', result.added))
      .toMatchObject({ added: [], skipped: 3, renamed: [] });
  });

  it('allows the same rule ID in a different plugin', () => {
    engineeringProcesses.processes[0].pluginGroups[0].plugins.push({
      id: 'plugin-b', name: 'Plugin B', type: 'internal',
    });
    addValidationsToPluginInProcess('process-a', 'plugin-a', [validation('Rule')]);
    expect(importValidationsToPluginInProcess('process-a', 'plugin-b', [validation('Rule')]))
      .toMatchObject({ skipped: 0, added: [validation('Rule')] });
  });

  it('prepares imports without modifying existing or incoming rules', () => {
    const existing = Object.freeze(validation('Rule'));
    const incoming = Object.freeze({
      ...validation('Rule'),
      id: undefined,
    });

    const result = prepareValidationImport(
      Object.freeze([existing]),
      Object.freeze([incoming]),
    );

    expect(result.added).toEqual([
      { ...incoming, id: expect.any(String), title: 'Rule (copy)' },
    ]);
    expect(incoming.id).toBeUndefined();
    expect(incoming.title).toBe('Rule');
    expect(existing).toEqual(validation('Rule'));
  });

  it('leaves the stored array untouched when all imported IDs already exist', () => {
    addValidationsToPluginInProcess('process-a', 'plugin-a', [
      validation('Rule'),
    ]);
    const before = storedValidations();

    expect(
      importValidationsToPluginInProcess('process-a', 'plugin-a', [
        validation('Rule'),
      ]),
    ).toEqual({ added: [], skipped: 1, renamed: [] });
    expect(storedValidations()).toBe(before);
  });
});
