// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  within,
} from '@testing-library/svelte';
import type { Process } from '@oscd-transnet-plugins/shared';
import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { tick } from 'svelte';
import { deleteProcess, getPersistedProcesses, saveProcess } from '../features/processes/repository.svelte';
import { ProcessVersionConflictError } from '../features/processes/process.service';
import {
  engineeringProcesses,
  engineeringProcessesStatus,
  runningEngineeringProcess,
  selectedEngineeringProcess,
} from '../features/processes/stores.svelte';
import ProcessesList from './ProcessesList.view.svelte';
import { createProcessExport } from '../features/processes/processJson';

vi.mock('../features/processes/repository.svelte', () => ({
  deleteProcess: vi.fn(),
  saveProcess: vi.fn(),
  getPersistedProcesses: vi.fn(),
}));
vi.mock('@oscd-transnet-plugins/oscd-services/dialog', () => ({
  openDialog: vi.fn(),
}));
vi.mock('@oscd-transnet-plugins/oscd-services/toast', () => ({
  toastService: { success: vi.fn(), error: vi.fn(), warn: vi.fn() },
}));

beforeEach(() => {
  vi.resetAllMocks();
  runningEngineeringProcess.process = null;
  engineeringProcessesStatus.loading = false;
  engineeringProcessesStatus.error = '';
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe = vi.fn();
      disconnect = vi.fn();
    },
  );
  engineeringProcesses.processes = ['Alpha', 'Beta', 'Gamma'].map((name) => ({
    id: name.toLowerCase(),
    name,
    description: '',
    version: '1.0.0',
    pluginGroups: [],
  }));
  vi.mocked(openDialog).mockResolvedValue({ type: 'confirm' });
  vi.mocked(getPersistedProcesses).mockResolvedValue(new Map());
});

afterEach(() => {
  cleanup();
  selectedEngineeringProcess.process = null;
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

function renderList() {
  const callbacks = {
    handleStart: vi.fn(),
    handleView: vi.fn(),
    handleEdit: vi.fn(),
    handleAddNew: vi.fn(),
    handleDeleted: vi.fn(),
  };
  return { ...render(ProcessesList, callbacks), ...callbacks };
}

it('recalculates the scrollable table height when host padding changes around a running process', async () => {
  const callbacks = new Map<Element, Set<() => void>>();
  vi.stubGlobal('ResizeObserver', class {
    private targets = new Set<Element>();
    constructor(private callback: () => void) {}
    observe(target: Element, options?: ResizeObserverOptions) {
      if (options?.box !== 'border-box') return;
      this.targets.add(target);
      if (!callbacks.has(target)) callbacks.set(target, new Set());
      callbacks.get(target)?.add(this.callback);
    }
    disconnect() {
      for (const target of this.targets) callbacks.get(target)?.delete(this.callback);
    }
  });
  let tableTop = 144;
  const bounds = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(() => new DOMRect(0, tableTop, 1000, 0));
  try {
    const { container, getByRole } = renderList();
    const table = container.querySelector<HTMLElement>('.oscd-basic-table');
    expect(table?.style.getPropertyValue('--oscd-basic-table-max-height'))
      .toBe(`${window.innerHeight - 144 - 24}px`);

    runningEngineeringProcess.process = engineeringProcesses.processes[0];
    await waitFor(() => expect(getByRole('button', { name: 'Continue', exact: true })).toBeTruthy());
    tableTop = 236;
    for (const callback of callbacks.get(document.body) ?? []) callback();
    expect(table?.style.getPropertyValue('--oscd-basic-table-max-height'))
      .toBe(`${window.innerHeight - 236 - 24}px`);

    tableTop = 300;
    for (const callback of callbacks.get(document.body) ?? []) callback();
    expect(table?.style.getPropertyValue('--oscd-basic-table-max-height'))
      .toBe(`${window.innerHeight - 300 - 24}px`);
  } finally {
    bounds.mockRestore();
  }
});

it('opens a saved duplicate when the user stays in the process list', async () => {
  vi.mocked(saveProcess).mockResolvedValueOnce('1.0.0');
  const { getAllByRole, handleEdit, handleView } = renderList();

  await fireEvent.click(getAllByRole('button', { name: 'Duplicate process' })[0]);

  await waitFor(() => expect(handleEdit).toHaveBeenCalledOnce());
  expect(handleEdit).toHaveBeenCalledWith(
    expect.objectContaining({ id: 'alpha-copy', name: 'Alpha (copy)', version: '1.0.0' }),
  );
  expect(handleView).not.toHaveBeenCalled();
  expect(engineeringProcesses.processes).toHaveLength(4);
});

it('saves a pending duplicate without discarding a draft opened after leaving the list', async () => {
  let finishSave!: (version: string) => void;
  vi.mocked(saveProcess).mockReturnValueOnce(new Promise((resolve) => {
    finishSave = resolve;
  }));
  const { getAllByRole, handleEdit, unmount } = renderList();
  handleEdit.mockImplementation((process: Process) => {
    selectedEngineeringProcess.process = process;
  });
  await fireEvent.click(getAllByRole('button', { name: 'Duplicate process' })[0]);
  expect(saveProcess).toHaveBeenCalledOnce();
  await unmount();
  selectedEngineeringProcess.draft = {
    id: 'unsaved',
    name: 'Unsaved work',
    description: '',
    version: '1.0.0',
    pluginGroups: [],
  };

  finishSave('1.0.0');

  await waitFor(() => expect(engineeringProcesses.processes).toHaveLength(4));
  expect(handleEdit).not.toHaveBeenCalled();
  expect(selectedEngineeringProcess.draft?.name).toBe('Unsaved work');
  expect(toastService.success).toHaveBeenCalledWith('Process duplicated', expect.any(String));
});

it.each(['Start', 'Continue'])(
  'keeps the %s label and starts the process without opening its editor',
  async (label) => {
    if (label === 'Continue') {
      runningEngineeringProcess.process = engineeringProcesses.processes[0];
    }
    const { getByRole, handleStart, handleView } = renderList();
    const table = within(getByRole('table'));
    const action = table.getAllByRole('button', {
      name: `${label} process`,
    })[0];

    expect(action.textContent?.trim()).toBe(label);
    await fireEvent.click(action);
    expect(handleStart).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'alpha' }),
    );
    expect(handleView).not.toHaveBeenCalled();
  },
);

it.each(['short', 'long'])(
  'preserves full %s process text in tooltips and row callbacks',
  async (length) => {
    const repeat = length === 'long' ? 50 : 1;
    const process = {
      id: 'process-a',
      name: 'Process name '.repeat(repeat).trim(),
      description: 'Description with <equipment> & details '
        .repeat(repeat)
        .trim(),
      version: `1.0.0-${'revision'.repeat(repeat)}`,
      pluginGroups: [],
    };
    engineeringProcesses.processes = [process];
    const { getByTitle, getByRole, handleView } = renderList();

    for (const value of [process.name, process.description, process.version]) {
      expect(getByTitle(value).textContent).toBe(value);
    }
    const table = within(getByRole('table'));
    expect(table.getByRole('button', { name: 'Start process' })).toBeTruthy();
    expect(table.getByRole('button', { name: 'Delete process' })).toBeTruthy();
    await fireEvent.click(getByTitle(process.name));
    expect(handleView).toHaveBeenCalledWith(expect.objectContaining(process));
  },
);

it('selects rows without opening them and shows partial/select-all state', async () => {
  const { getByRole, handleView } = renderList();
  const toolbar = within(
    getByRole('toolbar', { name: 'Processes table controls' }),
  );
  expect(
    toolbar.getByRole('searchbox', { name: 'Search Processes' }),
  ).toBeTruthy();
  expect(toolbar.getByRole('status').textContent?.trim()).toBe('3 processes');
  expect(
    toolbar.getByRole<HTMLButtonElement>('button', {
      name: 'Delete',
      exact: true,
    }).disabled,
  ).toBe(true);
  const alpha = getByRole('checkbox', { name: 'Select process Alpha' });
  const all = getByRole<HTMLInputElement>('checkbox', {
    name: 'Select all rows',
  });

  const selectionCell = alpha.closest('td');
  if (!selectionCell) throw new Error('Missing checkbox cell');
  await fireEvent.click(selectionCell);
  expect(handleView).not.toHaveBeenCalled();
  expect(getByRole<HTMLInputElement>('checkbox', { name: 'Select process Alpha' }).checked).toBe(false);

  await fireEvent.keyDown(alpha, { key: ' ' });
  expect(handleView).not.toHaveBeenCalled();
  await fireEvent.click(alpha);
  expect(handleView).not.toHaveBeenCalled();
  expect(all.indeterminate).toBe(true);
  expect(toolbar.getByRole('status').textContent?.trim()).toBe('1 selected');

  await fireEvent.click(all);
  expect(
    toolbar.getByRole<HTMLButtonElement>('button', {
      name: 'Delete',
      exact: true,
    }).disabled,
  ).toBe(false);
  expect(toolbar.getByRole('status').textContent?.trim()).toBe('3 selected');
  expect(all.checked).toBe(true);
  await fireEvent.click(all);
  expect(
    toolbar.getByRole<HTMLButtonElement>('button', {
      name: 'Delete',
      exact: true,
    }).disabled,
  ).toBe(true);
  expect(toolbar.getByRole('status').textContent?.trim()).toBe('3 processes');
});

it.each([0, 1])(
  'shows the process count and disabled deletion for %i processes',
  (count) => {
    engineeringProcesses.processes = engineeringProcesses.processes.slice(
      0,
      count,
    );
    const { getByRole } = renderList();

    expect(getByRole('status').textContent?.trim()).toBe(
      `${count} ${count === 1 ? 'process' : 'processes'}`,
    );
    expect(
      getByRole<HTMLButtonElement>('button', { name: 'Delete', exact: true })
        .disabled,
    ).toBe(true);
  },
);

it('excludes hidden selections from bulk deletion and preserves failed deletions for retry', async () => {
  const { getByRole, handleDeleted } = renderList();
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select process Alpha' }),
  );
  await fireEvent.input(getByRole('searchbox'), { target: { value: 'Beta' } });
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Delete', exact: true })
      .disabled,
  ).toBe(true);
  expect(getByRole('status').textContent?.trim()).toBe('1 process');
  await fireEvent.click(getByRole('checkbox', { name: 'Select all rows' }));

  vi.mocked(deleteProcess).mockImplementation(async (process: Process) => {
    if (process.id === 'beta') throw new Error('Backend unavailable');
    engineeringProcesses.processes = engineeringProcesses.processes.filter(
      (item) => item.id !== process.id,
    );
  });
  await fireEvent.click(getByRole('button', { name: 'Delete', exact: true }));

  await waitFor(() =>
    expect(toastService.error).toHaveBeenCalledWith(
      'Delete failed',
      '"Beta" could not be deleted.',
    ),
  );
  expect(openDialog).toHaveBeenCalledTimes(1);
  expect(
    vi.mocked(deleteProcess).mock.calls.map(([process]) => process.id),
  ).toEqual(['beta']);
  expect(handleDeleted).not.toHaveBeenCalled();
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select process Beta' })
      .checked,
  ).toBe(true);
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Delete', exact: true })
      .disabled,
  ).toBe(false);
  await fireEvent.input(getByRole('searchbox'), { target: { value: '' } });
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select process Alpha' })
      .checked,
  ).toBe(true);
});

it('removes successful bulk deletions from the selection but retains failures', async () => {
  const { getByRole, handleDeleted } = renderList();
  await fireEvent.click(getByRole('checkbox', { name: 'Select all rows' }));
  vi.mocked(deleteProcess).mockImplementation(async (process: Process) => {
    if (process.id === 'beta') throw new Error('Backend unavailable');
    engineeringProcesses.processes = engineeringProcesses.processes.filter(
      (item) => item.id !== process.id,
    );
  });
  await fireEvent.click(getByRole('button', { name: 'Delete', exact: true }));

  await waitFor(() => expect(toastService.error).toHaveBeenCalled());
  expect(handleDeleted.mock.calls.map(([process]) => process.id)).toEqual([
    'alpha',
    'gamma',
  ]);
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select process Beta' })
      .checked,
  ).toBe(true);
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Delete', exact: true })
      .disabled,
  ).toBe(false);
});

it('does not delete or clear selection when confirmation is cancelled', async () => {
  vi.mocked(openDialog).mockResolvedValue({ type: 'cancel' });
  const { getByRole } = renderList();
  await fireEvent.click(getByRole('checkbox', { name: 'Select all rows' }));
  await fireEvent.click(getByRole('button', { name: 'Delete', exact: true }));

  await waitFor(() =>
    expect(
      getByRole<HTMLButtonElement>('button', { name: 'Delete', exact: true })
        .disabled,
    ).toBe(false),
  );
  expect(deleteProcess).not.toHaveBeenCalled();
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select all rows' })
      .checked,
  ).toBe(true);
});

it('selects and deselects ranges with Shift without opening a process', async () => {
  const { getByRole, handleView } = renderList();
  const alpha = getByRole<HTMLInputElement>('checkbox', {
    name: 'Select process Alpha',
  });
  const beta = getByRole<HTMLInputElement>('checkbox', {
    name: 'Select process Beta',
  });
  const gamma = getByRole<HTMLInputElement>('checkbox', {
    name: 'Select process Gamma',
  });

  await fireEvent.click(gamma);
  await fireEvent.click(alpha, { shiftKey: true });

  expect([alpha.checked, beta.checked, gamma.checked]).toEqual([
    true,
    true,
    true,
  ]);
  expect(
    getByRole('button', {
      name: 'Delete',
      exact: true,
    }).closest('[role="toolbar"]'),
  ).not.toBeNull();
  expect(handleView).not.toHaveBeenCalled();

  await fireEvent.click(alpha, { shiftKey: true });
  expect([alpha.checked, beta.checked, gamma.checked]).toEqual([
    false,
    false,
    false,
  ]);
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Delete', exact: true })
      .disabled,
  ).toBe(true);
});

it('does not extend a Shift selection from an anchor hidden by filtering', async () => {
  const { getByRole } = renderList();
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select process Alpha' }),
  );
  await fireEvent.input(getByRole('searchbox'), { target: { value: 'Gamma' } });
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select process Gamma' }),
    { shiftKey: true },
  );
  await fireEvent.input(getByRole('searchbox'), { target: { value: '' } });

  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select process Alpha' })
      .checked,
  ).toBe(true);
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select process Beta' })
      .checked,
  ).toBe(false);
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select process Gamma' })
      .checked,
  ).toBe(true);
});

it('places import before new process and export before delete using table action styling', () => {
  const { getByRole, getByText } = renderList();
  const importButton = getByRole('button', { name: 'Import' });
  const exportButton = getByRole('button', { name: 'Export' });
  const toolbar = getByRole('toolbar', { name: 'Processes table controls' });
  const newButton = getByText('Add new process');
  const deleteButton = within(toolbar).getByRole('button', { name: 'Delete', exact: true });

  expect(importButton.closest('.process-toolbar__actions')).toBe(newButton.parentElement);
  expect(importButton.compareDocumentPosition(newButton) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  expect(toolbar.contains(importButton)).toBe(false);
  expect(exportButton.parentElement?.nextElementSibling).toBe(deleteButton);
  for (const button of [importButton, exportButton]) {
    expect(button.classList.contains('ew-table-action--labeled')).toBe(true);
    expect(button.style.getPropertyValue('--mdc-theme-primary')).toBe('var(--oscd-plugin-surface)');
    expect(button.style.borderWidth).toBe('0px');
    expect(button.querySelector('svg')).not.toBeNull();
  }
});

it('exports only selected visible processes', async () => {
  const createObjectURL = vi.fn<(blob: Blob) => string>().mockReturnValue('blob:processes');
  const revokeObjectURL = vi.fn();
  vi.stubGlobal('URL', { createObjectURL, revokeObjectURL });
  const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => undefined);
  const { getByRole } = renderList();
  expect(getByRole<HTMLButtonElement>('button', { name: 'Export' }).disabled).toBe(true);
  await fireEvent.click(getByRole('checkbox', { name: 'Select process Alpha' }));
  expect(getByRole<HTMLButtonElement>('button', { name: 'Export' }).disabled).toBe(false);
  await fireEvent.click(getByRole('button', { name: 'Export' }));
  expect(createObjectURL).toHaveBeenCalledWith(expect.any(Blob));
  expect(click).toHaveBeenCalledOnce();
  const blob = vi.mocked(createObjectURL).mock.calls[0][0];
  const content = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(blob);
  });
  expect(JSON.parse(content)).toEqual(createProcessExport([engineeringProcesses.processes[0]]));
  await waitFor(() => expect(revokeObjectURL).toHaveBeenCalledWith('blob:processes'));
  await fireEvent.click(getByRole('checkbox', { name: 'Select process Alpha' }));
  expect(getByRole<HTMLButtonElement>('button', { name: 'Export' }).disabled).toBe(true);
  await fireEvent.click(getByRole('checkbox', { name: 'Select process Alpha' }));
  await fireEvent.input(getByRole('searchbox'), { target: { value: 'Beta' } });
  expect(getByRole<HTMLButtonElement>('button', { name: 'Export' }).disabled).toBe(true);
  click.mockRestore();
});

it('persists new processes, reports ID conflicts separately from save failures, and highlights only additions', async () => {
  vi.mocked(saveProcess)
    .mockResolvedValueOnce('2.0.0')
    .mockRejectedValueOnce(new Error('Backend unavailable'));
  const { getByLabelText, container } = renderList();
  const input = getByLabelText('Import processes JSON files');
  const processes = ['alpha', 'new', 'failed'].map((id) => ({
    id, name: id, description: '', version: '1.0.0', pluginGroups: [],
  }));
  await fireEvent.change(input, {
    target: { files: [{ name: 'processes.json', size: 100, text: async () => JSON.stringify(createProcessExport(processes)) }] },
  });
  await waitFor(() => expect(toastService.warn).toHaveBeenCalled());
  expect(vi.mocked(saveProcess).mock.calls.map(([process]) => process.id)).toEqual(['new', 'failed']);
  expect(engineeringProcesses.processes.map(({ id }) => id)).toEqual(['alpha', 'beta', 'gamma', 'new']);
  expect(engineeringProcesses.processes.at(-1)?.version).toBe('2.0.0');
  expect(toastService.warn).toHaveBeenCalledWith(
    'Process import completed with issues',
    expect.stringContaining('Backend unavailable'),
    15_000,
  );
  expect(toastService.warn).toHaveBeenCalledWith(
    expect.any(String),
    expect.stringContaining('1 imported; 0 already present; 1 conflicting; 1 failed.'),
    15_000,
  );
  expect(container.querySelectorAll('tr.oscd-basic-table__row--added')).toHaveLength(1);
  expect((input as HTMLInputElement).value).toBe('');
});

it('recognizes an identical backend-only process without uploading it', async () => {
  const process = { id: 'backend-only', name: 'Existing remote process', description: '', version: '9.0.0', pluginGroups: [] };
  vi.mocked(getPersistedProcesses).mockResolvedValueOnce(new Map([[process.id, process]]));
  const { getByLabelText } = renderList();
  await fireEvent.change(getByLabelText('Import processes JSON files'), {
    target: { files: [{
      name: 'processes.json',
      size: 100,
      text: async () => JSON.stringify(createProcessExport([process])),
    }] },
  });

  await waitFor(() => expect(toastService.success).toHaveBeenCalledWith(
    'Process import complete',
    '0 imported; 1 already present; 0 conflicting; 0 failed.',
  ));
  expect(getPersistedProcesses).toHaveBeenCalledOnce();
  expect(saveProcess).not.toHaveBeenCalled();
  expect(engineeringProcesses.processes.map(({ id }) => id)).toEqual(['alpha', 'beta', 'gamma']);
});

it('imports the first stored process when the backend returns SDS-0006 and only the default process exists', async () => {
  engineeringProcesses.processes = [{
    id: 'default', name: 'Default', description: '', version: '1.0.0', pluginGroups: [],
  }];
  const repository = await vi.importActual<typeof import('../features/processes/repository.svelte')>(
    '../features/processes/repository.svelte',
  );
  vi.mocked(getPersistedProcesses).mockImplementationOnce(repository.getPersistedProcesses);
  vi.mocked(saveProcess).mockImplementationOnce(repository.saveProcess);
  const fetchBackend = vi.fn()
    .mockResolvedValueOnce(new Response(JSON.stringify({
      errorMessages: [{
        code: 'SDS-0006',
        message: "No data entries found for type 'engineering-wizard_process'",
        property: null,
      }],
    }), { status: 404 }))
    .mockResolvedValueOnce(new Response(JSON.stringify({ id: 'resource-1', version: '1.0.0' })));
  vi.stubGlobal('fetch', fetchBackend);
  const { getByLabelText, getByRole } = renderList();
  const process: Process = {
    id: 'first-import', name: 'First import', description: '', version: '1.0.0', pluginGroups: [],
  };
  await fireEvent.change(getByLabelText('Import processes JSON files'), {
    target: { files: [{
      name: 'processes.json', size: 100,
      text: async () => JSON.stringify(createProcessExport([process])),
    }] },
  });

  await waitFor(() => expect(toastService.success).toHaveBeenCalledWith(
    'Process import complete',
    '1 imported; 0 already present; 0 conflicting; 0 failed.',
  ));
  expect(fetchBackend).toHaveBeenCalledTimes(2);
  expect(fetchBackend).toHaveBeenNthCalledWith(
    1, expect.stringContaining('/plugins/resources/engineering-wizard_process/latest'),
    expect.objectContaining({ method: 'GET' }),
  );
  expect(fetchBackend).toHaveBeenNthCalledWith(
    2, expect.stringMatching(/\/plugins\/resources$/),
    expect.objectContaining({ method: 'POST' }),
  );
  expect(engineeringProcesses.processes.map(({ id }) => id)).toEqual(['default', 'first-import']);
  expect(getByRole('checkbox', { name: 'Select process First import' })).toBeTruthy();
  expect(toastService.error).not.toHaveBeenCalled();
});

it('does not save while backend verification is pending or failed and allows retry', async () => {
  let rejectCheck!: (reason: Error) => void;
  vi.mocked(getPersistedProcesses).mockReturnValueOnce(new Promise((_resolve, reject) => {
    rejectCheck = reject;
  }));
  vi.mocked(saveProcess).mockResolvedValueOnce('1.0.0');
  const { getByLabelText, getByRole } = renderList();
  const process = { id: 'new', name: 'New process', description: '', version: '1.0.0', pluginGroups: [] };
  const event = { target: { files: [{
    name: 'processes.json',
    size: 100,
    text: async () => JSON.stringify(createProcessExport([process])),
  }] } };
  const input = getByLabelText('Import processes JSON files');
  await fireEvent.change(input, event);
  await waitFor(() => expect(getPersistedProcesses).toHaveBeenCalledOnce());
  expect(saveProcess).not.toHaveBeenCalled();
  expect(getByRole<HTMLButtonElement>('button', { name: 'Import' }).disabled).toBe(true);

  rejectCheck(new Error('Backend unavailable'));
  await waitFor(() => expect(toastService.error).toHaveBeenCalledWith('Import failed', 'Backend unavailable'));
  expect(saveProcess).not.toHaveBeenCalled();
  expect(engineeringProcesses.processes).toHaveLength(3);
  expect(toastService.success).not.toHaveBeenCalled();
  expect(getByRole<HTMLButtonElement>('button', { name: 'Import' }).disabled).toBe(false);

  await fireEvent.change(input, event);
  await waitFor(() => expect(toastService.success).toHaveBeenCalled());
  expect(getPersistedProcesses).toHaveBeenCalledTimes(2);
  expect(saveProcess).toHaveBeenCalledOnce();
  expect(engineeringProcesses.processes.map(({ id }) => id)).toEqual(['alpha', 'beta', 'gamma', 'new']);
});

it('skips identical processes across files, preserves duplicate display names, and never saves conflicting versions', async () => {
  vi.mocked(saveProcess).mockResolvedValue('1.0.0');
  const original = engineeringProcesses.processes[0];
  const incoming: Process = {
    id: 'new-alpha', name: 'Alpha', description: '', version: '1.0.0', pluginGroups: [],
  };
  const { getByLabelText } = renderList();
  const file = (name: string, processes: Process[]) => ({
    name,
    size: 100,
    text: async () => JSON.stringify(createProcessExport(processes)),
  });

  await fireEvent.change(getByLabelText('Import processes JSON files'), {
    target: { files: [
      file('first.json', [original, incoming]),
      file('second.json', [incoming, { ...incoming, version: '2.0.0' }]),
    ] },
  });

  await waitFor(() => expect(toastService.warn).toHaveBeenCalledWith(
    'Process import completed with issues',
    expect.stringContaining('1 imported; 2 already present; 1 conflicting; 0 failed.'),
    15_000,
  ));
  expect(saveProcess).toHaveBeenCalledOnce();
  expect(saveProcess).toHaveBeenCalledWith(expect.objectContaining({ id: 'new-alpha', name: 'Alpha' }));
  expect(engineeringProcesses.processes.find(({ id }) => id === 'alpha')).toBe(original);
  expect(engineeringProcesses.processes.filter(({ name }) => name === 'Alpha')).toHaveLength(2);
});

it('reports a backend-only version conflict without saving or changing local state', async () => {
  const process: Process = {
    id: 'backend-only', name: 'Remote', description: '', version: '2.0.0', pluginGroups: [],
  };
  vi.mocked(getPersistedProcesses).mockResolvedValueOnce(new Map([[process.id, process]]));
  const { getByLabelText } = renderList();
  await fireEvent.change(getByLabelText('Import processes JSON files'), {
    target: { files: [{
      name: 'older.json', size: 100,
      text: async () => JSON.stringify(createProcessExport([{ ...process, version: '1.0.0' }])),
    }] },
  });

  await waitFor(() => expect(toastService.warn).toHaveBeenCalledWith(
    'Process import completed with issues',
    expect.stringContaining('Existing version "2.0.0" differs from imported version "1.0.0".'),
    15_000,
  ));
  expect(saveProcess).not.toHaveBeenCalled();
  expect(engineeringProcesses.processes).toHaveLength(3);
});

it('reports concurrent backend version conflicts separately from failed saves', async () => {
  vi.mocked(saveProcess).mockRejectedValueOnce(new ProcessVersionConflictError('new', '1.0.0'));
  const process: Process = {
    id: 'new', name: 'New', description: '', version: '1.0.0', pluginGroups: [],
  };
  const { getByLabelText, container } = renderList();
  await fireEvent.change(getByLabelText('Import processes JSON files'), {
    target: { files: [{
      name: 'new.json', size: 100, text: async () => JSON.stringify(createProcessExport([process])),
    }] },
  });

  await waitFor(() => expect(toastService.warn).toHaveBeenCalledWith(
    'Process import completed with issues',
    expect.stringContaining('0 imported; 0 already present; 1 conflicting; 0 failed.'),
    15_000,
  ));
  expect(engineeringProcesses.processes).toHaveLength(3);
  expect(container.querySelector('.oscd-basic-table__row--added')).toBeNull();
});

it('sorts rows without reordering stored processes and briefly highlights successful imports', async () => {
  engineeringProcesses.processes.reverse();
  vi.mocked(saveProcess).mockResolvedValueOnce('1.0.0');
  const { getAllByRole, getByLabelText, getByRole } = renderList();
  expect(getAllByRole('checkbox').slice(1).map((checkbox) => checkbox.getAttribute('aria-label')))
    .toEqual(['Select process Alpha', 'Select process Beta', 'Select process Gamma']);
  expect(engineeringProcesses.processes.map(({ id }) => id)).toEqual(['gamma', 'beta', 'alpha']);
  vi.useFakeTimers();
  const process: Process = {
    id: 'aardvark', name: 'Aardvark', description: '', version: '1.0.0', pluginGroups: [],
  };
  await fireEvent.change(getByLabelText('Import processes JSON files'), {
    target: { files: [{
      name: 'new.json', size: 100, text: async () => JSON.stringify(createProcessExport([process])),
    }] },
  });
  await vi.advanceTimersByTimeAsync(0);

  const row = getByRole('checkbox', { name: 'Select process Aardvark' }).closest('tr');
  expect(getAllByRole('checkbox')[1].getAttribute('aria-label')).toBe('Select process Aardvark');
  expect(row?.classList.contains('oscd-basic-table__row--added')).toBe(true);
  await vi.advanceTimersByTimeAsync(1600);
  expect(row?.classList.contains('oscd-basic-table__row--added')).toBe(false);
});

it('gives every process imported from multiple files its own uninterrupted highlight lifetime', async () => {
  const { getByLabelText, getByRole } = renderList();
  vi.useFakeTimers();
  vi.mocked(saveProcess).mockImplementation(() =>
    new Promise((resolve) => setTimeout(() => resolve('1.0.0'), 400)),
  );
  const incoming: Process[] = ['A', 'B', 'C'].map((suffix) => ({
    id: `imported-${suffix}`,
    name: `Imported ${suffix}`,
    description: '',
    version: '1.0.0',
    pluginGroups: [],
  }));
  const file = (name: string, processes: Process[]) => ({
    name,
    size: 100,
    text: async () => JSON.stringify(createProcessExport(processes)),
  });
  const highlighted = (name: string) =>
    getByRole('checkbox', { name: `Select process ${name}` }).closest('tr')
      ?.classList.contains('oscd-basic-table__row--added');

  await fireEvent.change(getByLabelText('Import processes JSON files'), {
    target: { files: [
      file('first.json', [engineeringProcesses.processes[0], incoming[0]]),
      file('second.json', incoming.slice(1)),
    ] },
  });
  await vi.advanceTimersByTimeAsync(400);
  expect(highlighted('Imported A')).toBe(true);
  expect(highlighted('Alpha')).toBe(false);
  await vi.advanceTimersByTimeAsync(400);
  expect(highlighted('Imported A')).toBe(true);
  expect(highlighted('Imported B')).toBe(true);
  await vi.advanceTimersByTimeAsync(400);
  expect(incoming.map(({ name }) => highlighted(name))).toEqual([true, true, true]);
  expect(toastService.success).toHaveBeenCalledWith(
    'Process import complete',
    '3 imported; 1 already present; 0 conflicting; 0 failed.',
  );

  await vi.advanceTimersByTimeAsync(799);
  expect(incoming.map(({ name }) => highlighted(name))).toEqual([true, true, true]);
  await vi.advanceTimersByTimeAsync(1);
  expect(incoming.map(({ name }) => highlighted(name))).toEqual([false, true, true]);
  await vi.advanceTimersByTimeAsync(400);
  expect(incoming.map(({ name }) => highlighted(name))).toEqual([false, false, true]);
  await vi.advanceTimersByTimeAsync(400);
  expect(incoming.map(({ name }) => highlighted(name))).toEqual([false, false, false]);
});

it('does not highlight processes loaded from the backend as newly imported', async () => {
  const loaded = engineeringProcesses.processes;
  engineeringProcesses.processes = [];
  engineeringProcessesStatus.loading = true;
  const { container } = renderList();

  engineeringProcesses.processes = loaded;
  engineeringProcessesStatus.loading = false;
  await tick();

  expect(container.querySelector('.oscd-basic-table__row--added')).toBeNull();
});
