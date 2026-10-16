import { describe, expect, it, vi } from 'vitest';
import type { CustomResourceService } from '@oscd-transnet-plugins/api-compas-custom-resource';
import type { Process } from '@oscd-transnet-plugins/shared';
import { ProcessService } from './process.service';

describe('ProcessService.save', () => {
  it('writes validations with only the stored rule fields', async () => {
    const upload = vi.fn(async (data: { content: Blob }) => {
      return { id: 'resource-1', version: '1.0.0', content: data.content };
    });
    const service = new ProcessService({ upload } as unknown as CustomResourceService);
    const source = {
      title: 'Rule',
      description: 'Description',
      context: '//SCL',
      assert: 'true()',
      message: 'Failed',
      processId: 'process-a',
      pluginId: 'plugin-a',
      ruleUi: { mode: 'element', elementName: 'IED' },
    };
    const process = {
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
          validations: [source],
        }],
      }],
    } as Process;

    await service.save(process);

    const saved = JSON.parse(await upload.mock.calls[0][0].content.text()) as Process;
    expect(saved.version).toBe('1.0.0');
    expect(saved.id).toBe('process-a');
    expect(saved.pluginGroups[0].plugins[0].id).toBe('plugin-a');
    expect(saved.pluginGroups[0].plugins[0].validations).toEqual([{
      title: 'Rule',
      description: 'Description',
      context: '//SCL',
      assert: 'true()',
      message: 'Failed',
    }]);
    expect(process.pluginGroups[0].plugins[0].validations?.[0]).toBe(source);
  });
});
