import { describe, expect, it, vi } from 'vitest';
import type { CustomResourceService } from '@oscd-transnet-plugins/api-compas-custom-resource';
import { ResponseError } from '@oscd-transnet-plugins/api-compas-custom-resource';
import type { Process } from '@oscd-transnet-plugins/shared';
import { ProcessService, ProcessVersionConflictError } from './process.service';

function serviceWith(overrides: Partial<CustomResourceService>): ProcessService {
  return new ProcessService({
    upload: vi.fn(),
    listData: vi.fn(),
    getById: vi.fn(),
    getLatestByType: vi.fn(),
    getLatestByTypeAndName: vi.fn(),
    deleteByType: vi.fn(),
    deleteByTypeAndName: vi.fn(),
    ...overrides,
  });
}

describe('ProcessService.listLatest', () => {
  const noEntries = {
    errorMessages: [{
      code: 'SDS-0006',
      message: "No data entries found for type 'engineering-wizard_process'",
      property: null,
    }],
  };

  it('treats the empty-type 404 as an empty process list without consuming the error response', async () => {
    const response = new Response(JSON.stringify(noEntries), { status: 404 });
    const getLatestByType = vi.fn().mockRejectedValue(new ResponseError(response));

    await expect(serviceWith({ getLatestByType }).listLatest()).resolves.toEqual([]);
    expect(getLatestByType).toHaveBeenCalledWith(ProcessService.RESOURCE_TYPE);
    expect(response.bodyUsed).toBe(false);
  });

  it.each([
    { label: 'server failure', status: 500, body: noEntries },
    { label: 'access denied', status: 403, body: noEntries },
    { label: 'unrelated not-found error', status: 404, body: { errorMessages: [{ code: 'SDS-9999' }] } },
    { label: 'mixed errors', status: 404, body: { errorMessages: [...noEntries.errorMessages, { code: 'SDS-9999' }] } },
    { label: 'non-JSON not-found response', status: 404, body: '<html>Not found</html>' },
  ])('does not hide $label', async ({ status, body }) => {
    const error = new ResponseError(new Response(
      typeof body === 'string' ? body : JSON.stringify(body),
      { status },
    ));
    const getLatestByType = vi.fn().mockRejectedValue(error);

    await expect(serviceWith({ getLatestByType }).listLatest()).rejects.toBe(error);
  });

  it('preserves network failures', async () => {
    const error = new Error('Network unavailable');
    const getLatestByType = vi.fn().mockRejectedValue(error);
    await expect(serviceWith({ getLatestByType }).listLatest()).rejects.toBe(error);
  });
});

describe('ProcessService.save', () => {
  it('writes validations with only the stored rule fields', async () => {
    const upload = vi.fn(async (data: { content: Blob }) => {
      return { id: 'resource-1', version: '1.0.0', content: data.content };
    });
    const service = serviceWith({ upload });
    const source = {
      id: 'rule-1',
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
      id: 'rule-1',
      title: 'Rule',
      description: 'Description',
      context: '//SCL',
      assert: 'true()',
      message: 'Failed',
    }]);
    expect(process.pluginGroups[0].plugins[0].validations?.[0]).toBe(source);
  });

  it('exposes backend version conflicts separately from storage failures', async () => {
    const upload = vi.fn().mockRejectedValueOnce(
      new ResponseError(new Response(null, { status: 409 })),
    );
    const service = serviceWith({ upload });
    const process: Process = {
      id: 'process-a', name: 'Process A', version: '1.0.0', description: '', pluginGroups: [],
    };

    await expect(service.save(process)).rejects.toBeInstanceOf(ProcessVersionConflictError);
    const failure = new Error('Backend unavailable');
    upload.mockRejectedValueOnce(failure);
    await expect(service.save(process)).rejects.toBe(failure);
  });
});
