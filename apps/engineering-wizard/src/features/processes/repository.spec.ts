// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
import { processService } from '../../bootstrap';
import { engineeringProcesses, engineeringProcessesStatus } from './stores.svelte';
import {
  getPersistedProcesses,
  loadEngineeringProcesses,
  refreshEngineeringProcesses,
  saveProcess,
} from './repository.svelte';
import type { Process } from '@oscd-transnet-plugins/shared';
import { createValidationExport } from '../plugins/validation/validationJson';
import { prepareValidationImport } from '../plugins/validation/validationRules';
import { createProcessExport } from './processJson';
import { classifyProcessImport } from './processImport';

vi.mock('../../bootstrap', () => ({
  processService: {
    listLatest: vi.fn(),
    getById: vi.fn(),
    save: vi.fn(),
  },
}));

vi.mock('@oscd-transnet-plugins/oscd-services/toast', () => ({
  toastService: { warn: vi.fn() },
}));

const process: Process = {
  id: 'existing',
  name: 'Existing process',
  description: '',
  version: '1.0.0',
  pluginGroups: [],
};

beforeEach(() => {
  vi.resetAllMocks();
  vi.mocked(processService.listLatest).mockResolvedValue([
    {
      resourceId: 'resource-1',
      processId: 'existing',
      version: '2.0.0',
      description: '',
    },
    {
      resourceId: 'resource-2',
      processId: 'unrelated',
      version: '1.0.0',
      description: '',
    },
  ]);
  vi.mocked(processService.getById).mockResolvedValue(process);
});

afterEach(() => vi.unstubAllGlobals());

describe('process loading failures', () => {
  beforeEach(() => {
    engineeringProcesses.processes = [];
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(
        '<processes><process><id>baseline</id><name>Baseline</name><version>1.0.0</version></process></processes>',
      )),
    );
  });

  it.each(['listLatest', 'getById'] as const)(
    'warns when %s fails and still loads the XML baseline',
    async (method) => {
      vi.mocked(processService[method]).mockRejectedValueOnce(
        new Error('Backend unavailable'),
      );

      const loaded = await loadEngineeringProcesses();

      expect(loaded).toMatchObject([{ id: 'baseline' }]);
      expect(engineeringProcesses.processes).toEqual(loaded);
      expect(engineeringProcessesStatus.loading).toBe(false);
      expect(engineeringProcessesStatus.error).toBe('');
      expect(toastService.warn).toHaveBeenCalledOnce();
      expect(toastService.warn).toHaveBeenCalledWith(
        'Saved processes could not be loaded',
        'The XML baseline is being used. Saved processes may be missing or outdated. Backend unavailable',
        15_000,
      );
    },
  );

  it('does not warn when the backend has no saved processes', async () => {
    vi.mocked(processService.listLatest).mockResolvedValueOnce([]);

    await expect(loadEngineeringProcesses()).resolves.toMatchObject([
      { id: 'baseline' },
    ]);

    expect(toastService.warn).not.toHaveBeenCalled();
  });

  it.each(['listLatest', 'getById'] as const)(
    'keeps the existing list and reports the error when %s fails during refresh',
    async (method) => {
      engineeringProcesses.processes = [{ ...process, name: 'Previously loaded' }];
      const previous = engineeringProcesses.processes;
      vi.mocked(processService[method]).mockRejectedValueOnce(
        new Error('Refresh failed'),
      );

      await expect(refreshEngineeringProcesses()).rejects.toThrow('Refresh failed');

      expect(engineeringProcesses.processes).toBe(previous);
      expect(engineeringProcesses.processes[0].name).toBe('Previously loaded');
      expect(engineeringProcessesStatus.error).toBe('Refresh failed');
      expect(engineeringProcessesStatus.loading).toBe(false);
      expect(toastService.warn).not.toHaveBeenCalled();
    },
  );
});

describe('process import backend lookup', () => {
  it('loads only matching IDs and uses the authoritative metadata version', async () => {
    const result = await getPersistedProcesses(new Set(['existing', 'new']));

    expect(processService.getById).toHaveBeenCalledOnce();
    expect(processService.getById).toHaveBeenCalledWith('resource-1');
    expect(result.get('existing')).toEqual({ ...process, version: '2.0.0' });
    expect(result.has('new')).toBe(false);
    expect(process.version).toBe('1.0.0');
  });

  it('does not contact the backend when no valid processes were parsed', async () => {
    expect(await getPersistedProcesses(new Set())).toEqual(new Map());
    expect(processService.listLatest).not.toHaveBeenCalled();
  });

  it('fails explicitly when existing content cannot be verified', async () => {
    vi.mocked(processService.getById).mockRejectedValueOnce(
      new Error('Read failed'),
    );
    await expect(getPersistedProcesses(new Set(['existing']))).rejects.toThrow(
      'Read failed',
    );
    vi.mocked(processService.getById).mockResolvedValueOnce({
      ...process,
      id: 'wrong-id',
    });
    await expect(getPersistedProcesses(new Set(['existing']))).rejects.toThrow(
      'Stored process ID does not match',
    );
  });

  it('keeps legacy rule identities stable across refreshes and skips unchanged reimports without saving on load', async () => {
    const rule = {
      title: 'Legacy',
      description: '',
      context: '//SCL',
      assert: '@name',
    };
    const legacy: Process = {
      ...process,
      pluginGroups: [
        {
          title: 'Checks',
          plugins: [
            {
              id: 'editor',
              name: 'Editor',
              type: 'internal',
              validations: [
                rule,
                { ...rule },
                { ...rule, id: 'persisted-rule' },
              ],
            },
            {
              id: 'other-editor',
              name: 'Other editor',
              type: 'internal',
              validations: [{ ...rule }],
            },
          ],
        },
      ],
    };
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('<processes />')),
    );
    vi.mocked(processService.listLatest).mockResolvedValue([
      {
        resourceId: 'resource-1',
        processId: legacy.id,
        version: '2.0.0',
        description: '',
      },
    ]);
    vi.mocked(processService.getById).mockImplementation(async () =>
      structuredClone(legacy),
    );
    const [loaded] = await loadEngineeringProcesses();
    const exportedProcess = createProcessExport([loaded]).processes[0];
    const exportedRules = createValidationExport(
      loaded.pluginGroups[0].plugins[0].validations ?? [],
    );
    const ids = loaded.pluginGroups[0].plugins.flatMap(
      (plugin) => plugin.validations?.map(({ id }) => id) ?? [],
    );
    expect(new Set(ids).size).toBe(4);
    expect(ids[2]).toBe('persisted-rule');

    const [refreshed] = await refreshEngineeringProcesses();
    expect(
      refreshed.pluginGroups[0].plugins.flatMap(
        (plugin) => plugin.validations?.map(({ id }) => id) ?? [],
      ),
    ).toEqual(ids);
    expect(
      prepareValidationImport(
        refreshed.pluginGroups[0].plugins[0].validations ?? [],
        exportedRules.validations,
      ),
    ).toEqual({ added: [], skipped: 3, renamed: [] });
    const persisted = await getPersistedProcesses(new Set([legacy.id]));
    expect(
      classifyProcessImport(exportedProcess, [
        refreshed,
        ...persisted.values(),
      ]),
    ).toEqual({ status: 'already-present' });
    expect(processService.save).not.toHaveBeenCalled();
    expect(rule).not.toHaveProperty('id');
  });

  it('assigns persistent IDs to legacy rules before saving the process snapshot', async () => {
    const legacy: Process = {
      ...process,
      pluginGroups: [
        {
          title: 'Checks',
          plugins: [
            {
              id: 'editor',
              name: 'Editor',
              type: 'internal',
              validations: [
                {
                  title: 'Legacy rule',
                  description: '',
                  context: '//SCL',
                  assert: '@name',
                },
              ],
            },
          ],
        },
      ],
    };
    vi.mocked(processService.save).mockResolvedValueOnce({
      resourceId: 'resource-1',
      version: '1.0.0',
    });

    await saveProcess(legacy);

    const id = legacy.pluginGroups[0].plugins[0].validations?.[0].id;
    expect(id).toEqual(expect.any(String));
    expect(processService.save).toHaveBeenCalledWith(
      expect.objectContaining({
        pluginGroups: [
          expect.objectContaining({
            plugins: [
              expect.objectContaining({
                validations: [expect.objectContaining({ id })],
              }),
            ],
          }),
        ],
      }),
      undefined,
    );
  });
});
