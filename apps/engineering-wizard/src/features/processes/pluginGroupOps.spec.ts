import type { Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';
import { describe, expect, it } from 'vitest';
import {
  addPluginToGroups,
  createPluginInstance,
  removePluginFromGroups,
} from './pluginGroupOps';

const plugin: Plugin = {
  id: 'example-plugin',
  name: 'Example plugin',
  src: '/example.js',
  type: 'internal',
};

describe('pluginGroupOps', () => {
  it('adds the same plugin as distinct instances', () => {
    const once = addPluginToGroups([], plugin, 'First');
    const twice = addPluginToGroups(once, plugin, 'Second');

    expect(twice[0].plugins[0]).toEqual(plugin);
    expect(twice[0].plugins[0]).not.toBe(plugin);
    expect(twice[1].plugins[0]).toEqual({ ...plugin, id: 'example-plugin-2' });
  });

  it('uses the next available suffix across all groups', () => {
    const groups: PluginGroup[] = [
      { title: 'First', plugins: [plugin] },
      { title: 'Second', plugins: [{ ...plugin, id: 'example-plugin-2' }] },
    ];

    expect(createPluginInstance(groups, plugin).id).toBe('example-plugin-3');
  });

  it('copies validations onto the new instance without scope identifiers', () => {
    const source = {
      title: 'Rule',
      description: 'Description',
      context: 'SCL',
      assert: 'true()',
      message: 'Failed',
      processId: 'process',
      pluginId: plugin.id,
      ruleUi: { mode: 'element' },
    };
    const pluginWithValidation = {
      ...plugin,
      validations: [source],
    };

    const instance = createPluginInstance(
      [{ title: 'First', plugins: [pluginWithValidation] }],
      pluginWithValidation,
    );

    expect(instance.id).toBe('example-plugin-2');
    expect(instance.validations?.[0]).toEqual({
      title: 'Rule',
      description: 'Description',
      context: 'SCL',
      assert: 'true()',
      message: 'Failed',
    });
    expect(instance.validations?.[0]).not.toBe(source);
    expect(pluginWithValidation.validations[0]).toBe(source);
  });

  it('removes one instance without removing the others', () => {
    const groups = addPluginToGroups(addPluginToGroups([], plugin), plugin);

    const result = removePluginFromGroups(groups, 'example-plugin');

    expect(result[0].plugins.map((item) => item.id)).toEqual([
      'example-plugin-2',
    ]);
  });
});
