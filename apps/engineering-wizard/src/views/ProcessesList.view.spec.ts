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
import { deleteProcess, listPersistedProcessIds, saveProcess } from '../features/processes/repository.svelte';
import {
  engineeringProcesses,
  runningEngineeringProcess,
  selectedEngineeringProcess,
} from '../features/processes/stores.svelte';
import ProcessesList from './ProcessesList.view.svelte';
import { createProcessExport } from '../features/processes/processJson';

vi.mock('../features/processes/repository.svelte', () => ({
  deleteProcess: vi.fn(),
  saveProcess: vi.fn(),
  listPersistedProcessIds: vi.fn(),
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
  vi.mocked(listPersistedProcessIds).mockResolvedValue(new Set());
});

afterEach(() => {
  cleanup();
  selectedEngineeringProcess.process = null;
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

it('persists imported processes, rejects existing IDs, and reports save failures', async () => {
  vi.mocked(saveProcess)
    .mockResolvedValueOnce('2.0.0')
    .mockRejectedValueOnce(new Error('Backend unavailable'));
  const { getByLabelText } = renderList();
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
    'Some processes could not be imported',
    expect.stringContaining('Backend unavailable'),
    15_000,
  );
  expect((input as HTMLInputElement).value).toBe('');
});

it('rejects a process present only in the backend after loading the local fallback', async () => {
  vi.mocked(listPersistedProcessIds).mockResolvedValueOnce(new Set(['backend-only']));
  const { getByLabelText } = renderList();
  const process = { id: 'backend-only', name: 'Existing remote process', description: '', version: '9.0.0', pluginGroups: [] };
  await fireEvent.change(getByLabelText('Import processes JSON files'), {
    target: { files: [{
      name: 'processes.json',
      size: 100,
      text: async () => JSON.stringify(createProcessExport([process])),
    }] },
  });

  await waitFor(() => expect(toastService.error).toHaveBeenCalledWith(
    'Import failed',
    expect.stringContaining('Process id "backend-only" already exists'),
    15_000,
  ));
  expect(listPersistedProcessIds).toHaveBeenCalledOnce();
  expect(saveProcess).not.toHaveBeenCalled();
  expect(engineeringProcesses.processes.map(({ id }) => id)).toEqual(['alpha', 'beta', 'gamma']);
});

it('does not save while the backend ID check is pending or failed and allows retry', async () => {
  let rejectCheck!: (reason: Error) => void;
  vi.mocked(listPersistedProcessIds).mockReturnValueOnce(new Promise((_resolve, reject) => {
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
  await waitFor(() => expect(listPersistedProcessIds).toHaveBeenCalledOnce());
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
  expect(listPersistedProcessIds).toHaveBeenCalledTimes(2);
  expect(saveProcess).toHaveBeenCalledOnce();
  expect(engineeringProcesses.processes.map(({ id }) => id)).toEqual(['alpha', 'beta', 'gamma', 'new']);
});
