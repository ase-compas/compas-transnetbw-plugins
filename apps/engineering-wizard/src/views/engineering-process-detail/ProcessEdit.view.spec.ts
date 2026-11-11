// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  within,
} from '@testing-library/svelte';
import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
import type { XPathValidation } from '@oscd-transnet-plugins/shared';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import {
  engineeringProcesses,
  corePlugins,
  selectedEngineeringProcess,
} from '../../features/processes/stores.svelte';
import { saveProcess } from '../../features/processes/repository.svelte';
import { downloadValidationExport } from '../../features/plugins/validation/validationJson';
import ProcessEdit from './ProcessEdit.view.svelte';

vi.mock('../../features/processes/repository.svelte', () => ({
  saveProcess: vi.fn(),
}));
vi.mock('@oscd-transnet-plugins/oscd-services/dialog', () => ({
  openDialog: vi.fn(),
}));
vi.mock('@oscd-transnet-plugins/oscd-services/toast', () => ({
  toastService: { success: vi.fn(), error: vi.fn(), warn: vi.fn() },
}));
vi.mock(
  '../../features/plugins/validation/validationJson',
  async (importOriginal) => ({
    ...(await importOriginal<
      typeof import('../../features/plugins/validation/validationJson')
    >()),
    downloadValidationExport: vi.fn(),
  }),
);

function rule(title: string): XPathValidation {
  return { id: `rule-${title}`, title, description: '', context: '//scl:Bay', assert: '@name' };
}

beforeEach(() => {
  vi.resetAllMocks();
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe = vi.fn();
      disconnect = vi.fn();
    },
  );
  engineeringProcesses.processes = [
    {
      id: 'process-a',
      name: 'Process A',
      description: '',
      version: '1.0.0',
      pluginGroups: [
        {
          title: 'Plugins',
          plugins: [
            {
              id: 'first',
              name: 'First plugin',
              type: 'internal',
              validations: ['First', 'Second', 'Third'].map(rule),
            },
            {
              id: 'other',
              name: 'Other plugin',
              type: 'internal',
              validations: [rule('Other')],
            },
          ],
        },
      ],
    },
  ];
  selectedEngineeringProcess.process = engineeringProcesses.processes[0];
  corePlugins.plugins = [];
  vi.mocked(openDialog).mockResolvedValue({ type: 'confirm' });
});

afterEach(() => {
  cleanup();
  selectedEngineeringProcess.process = null;
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

function startDraft() {
  selectedEngineeringProcess.process = null;
  selectedEngineeringProcess.draft = {
    id: '',
    name: '',
    description: '',
    version: '1.0.0',
    pluginGroups: [{ title: 'Ungrouped', plugins: [] }],
  };
}

it('creates a process with plugins and rules using the shared editor before its first save', async () => {
  startDraft();
  corePlugins.plugins = [{
    name: 'Validation plugin',
    src: 'validation.js',
    kind: 'editor',
    active: true,
    activeByDefault: true,
    requiresDoc: false,
  }];
  const onReturnToList = vi.fn();
  const { getByRole } = render(ProcessEdit, { creating: true, onReturnToList });
  const create = getByRole<HTMLButtonElement>('button', { name: 'Create', exact: true });
  expect(create.disabled).toBe(true);

  await fireEvent.input(getByRole('textbox', { name: 'Process name' }), {
    target: { value: 'New process' },
  });
  expect(getByRole<HTMLInputElement>('textbox', { name: 'Process ID' }).value).toBe('new-process');
  await fireEvent.input(getByRole('textbox', { name: 'Process ID' }), {
    target: { value: 'custom-id' },
  });
  await fireEvent.input(getByRole('textbox', { name: 'Process name' }), {
    target: { value: 'Renamed process' },
  });
  expect(getByRole<HTMLInputElement>('textbox', { name: 'Process ID' }).value).toBe('custom-id');
  await fireEvent.click(getByRole('button', { name: 'Add Validation plugin to group Ungrouped' }));
  await fireEvent.click(getByRole('button', { name: 'Next step' }));
  vi.mocked(openDialog).mockResolvedValueOnce({ type: 'confirm', data: rule('New rule') });
  await fireEvent.click(getByRole('button', { name: 'Add validation' }));
  expect(getByRole('checkbox', { name: 'Select validation New rule' })).toBeTruthy();
  expect(engineeringProcesses.processes).toHaveLength(1);
  expect(saveProcess).not.toHaveBeenCalled();

  vi.mocked(saveProcess).mockResolvedValueOnce('1.0.0');
  await fireEvent.click(create);

  expect(saveProcess).toHaveBeenCalledWith(
    expect.objectContaining({
      id: 'custom-id',
      name: 'Renamed process',
      version: '1.0.0',
      pluginGroups: [expect.objectContaining({
        plugins: [expect.objectContaining({ validations: [rule('New rule')] })],
      })],
    }),
    undefined,
  );
  expect(openDialog).toHaveBeenCalledTimes(1);
  expect(engineeringProcesses.processes).toHaveLength(2);
  expect(selectedEngineeringProcess.draft).toBeNull();
  expect(onReturnToList).toHaveBeenCalledOnce();
});

it('keeps a colliding draft separate and creates it only after confirming a unique ID', async () => {
  startDraft();
  const { getByRole } = render(ProcessEdit, { creating: true, onReturnToList: vi.fn() });
  await fireEvent.input(getByRole('textbox', { name: 'Process name' }), {
    target: { value: 'Process A' },
  });
  await fireEvent.input(getByRole('textbox', { name: 'Description' }), {
    target: { value: 'Draft description' },
  });
  expect(engineeringProcesses.processes[0].description).toBe('');
  vi.mocked(openDialog).mockResolvedValueOnce({ type: 'cancel' });
  await fireEvent.click(getByRole('button', { name: 'Create', exact: true }));
  expect(saveProcess).not.toHaveBeenCalled();
  expect(engineeringProcesses.processes).toHaveLength(1);
  expect(selectedEngineeringProcess.draft?.id).toBe('process-a');

  vi.mocked(saveProcess).mockResolvedValueOnce('1.0.0');
  await fireEvent.click(getByRole('button', { name: 'Create', exact: true }));
  expect(openDialog).toHaveBeenLastCalledWith(expect.anything(), expect.objectContaining({
    title: 'Process ID already in use',
    message: expect.stringContaining('"process-a-2"'),
  }));
  await waitFor(() =>
    expect(engineeringProcesses.processes.map((process) => process.id)).toEqual(['process-a', 'process-a-2']),
  );
  expect(engineeringProcesses.processes[0].description).toBe('');
});

it('retains a failed creation for retry without adding an unsaved process to the list', async () => {
  startDraft();
  const onReturnToList = vi.fn();
  const { getByRole } = render(ProcessEdit, { creating: true, onReturnToList });
  await fireEvent.input(getByRole('textbox', { name: 'Process name' }), {
    target: { value: 'Retry process' },
  });
  vi.mocked(saveProcess).mockRejectedValueOnce(new Error('Offline'));
  await fireEvent.click(getByRole('button', { name: 'Create', exact: true }));
  expect(toastService.error).toHaveBeenCalledWith('Save failed', expect.any(String));
  expect(selectedEngineeringProcess.draft?.name).toBe('Retry process');
  expect(engineeringProcesses.processes).toHaveLength(1);
  expect(onReturnToList).not.toHaveBeenCalled();
  expect(getByRole<HTMLButtonElement>('button', { name: 'Create', exact: true }).disabled).toBe(false);

  vi.mocked(saveProcess).mockResolvedValueOnce('1.0.0');
  await fireEvent.click(getByRole('button', { name: 'Create', exact: true }));
  expect(engineeringProcesses.processes).toHaveLength(2);
  expect(onReturnToList).toHaveBeenCalledOnce();
});

it('confirms discarding a draft and never saves it when leaving the editor', async () => {
  startDraft();
  const onReturnToList = vi.fn();
  const { getByRole } = render(ProcessEdit, { creating: true, onReturnToList });
  await fireEvent.input(getByRole('textbox', { name: 'Process name' }), {
    target: { value: 'Unsaved process' },
  });
  vi.mocked(openDialog).mockResolvedValueOnce({ type: 'cancel' });
  await fireEvent.click(getByRole('button', { name: 'Discard Changes', exact: true }));
  expect(onReturnToList).not.toHaveBeenCalled();
  expect(selectedEngineeringProcess.draft?.name).toBe('Unsaved process');

  await fireEvent.click(getByRole('button', { name: 'Discard Changes', exact: true }));
  expect(selectedEngineeringProcess.draft).toBeNull();
  expect(engineeringProcesses.processes).toHaveLength(1);
  expect(saveProcess).not.toHaveBeenCalled();
  expect(onReturnToList).toHaveBeenCalledOnce();
});

it('keeps discard and navigation in the bottom bar on both editor steps', async () => {
  const { getByRole, container } = render(ProcessEdit, { onReturnToList: vi.fn() });
  const footer = getByRole('toolbar', { name: 'Process editor actions' });
  const actions = within(footer);
  expect(actions.getAllByRole('button').map((button) => button.textContent?.trim())).toEqual([
    'Discard Changes', 'Back', 'Next', 'Save',
  ]);
  expect(footer.parentElement?.lastElementChild).toBe(footer);
  expect(container.querySelector('.stepper .stepper-actions')).toBeNull();
  expect(actions.getByRole<HTMLButtonElement>('button', { name: 'Previous step' }).disabled).toBe(true);

  await fireEvent.click(actions.getByRole('button', { name: 'Next step' }));
  expect(actions.getByRole<HTMLButtonElement>('button', { name: 'Previous step' }).disabled).toBe(false);
  expect(actions.getByRole<HTMLButtonElement>('button', { name: 'Next step' }).disabled).toBe(true);
  await fireEvent.click(actions.getByRole('button', { name: 'Previous step' }));
  expect(getByRole('textbox', { name: 'Process name' })).toBeTruthy();
});

it('keeps the wizard aligned when host padding changes without a window resize', async () => {
  const callbacks = new Map<Element, () => void>();
  vi.stubGlobal('ResizeObserver', class {
    constructor(private callback: () => void) {}
    observe(target: Element, options?: ResizeObserverOptions) {
      if (options?.box === 'border-box') callbacks.set(target, this.callback);
    }
    disconnect() {
      for (const [target, callback] of callbacks) {
        if (callback === this.callback) callbacks.delete(target);
      }
    }
  });
  let top = 96;
  const bounds = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
    () => new DOMRect(24, top, window.innerWidth - 48, 0),
  );
  try {
    const { container } = render(ProcessEdit, { onReturnToList: vi.fn() });
    const anchor = container.querySelector<HTMLElement>('.editor-viewport');
    expect(anchor?.style.getPropertyValue('--editor-top')).toBe('96px');
    expect(anchor?.style.getPropertyValue('--editor-left')).toBe('24px');
    expect(anchor?.style.getPropertyValue('--editor-right')).toBe('24px');
    top = 64;
    callbacks.get(document.body)?.();
    expect(anchor?.style.getPropertyValue('--editor-top')).toBe('64px');
  } finally {
    bounds.mockRestore();
  }
});

it('switches the stepper layout using available plugin width rather than window width', async () => {
  let width = 600;
  const bounds = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(() => new DOMRect(0, 80, width, 0));
  try {
    const { container } = render(ProcessEdit, { onReturnToList: vi.fn() });
    const stepper = container.querySelector('.edit-view > .stepper');
    await waitFor(() => expect(stepper?.classList.contains('compact')).toBe(true));
    width = 1000;
    window.dispatchEvent(new Event('resize'));
    await waitFor(() => expect(stepper?.classList.contains('compact')).toBe(false));
    width = 480;
    window.dispatchEvent(new Event('resize'));
    await waitFor(() => expect(stepper?.classList.contains('compact')).toBe(true));
  } finally {
    bounds.mockRestore();
  }
});

it('restores an existing process when discarding changes from the bottom bar', async () => {
  const onReturnToList = vi.fn();
  const { getByRole } = render(ProcessEdit, { onReturnToList });
  await fireEvent.input(getByRole('textbox', { name: 'Process name' }), {
    target: { value: 'Unsaved name' },
  });
  vi.mocked(openDialog).mockResolvedValueOnce({ type: 'cancel' });
  await fireEvent.click(getByRole('button', { name: 'Discard Changes' }));
  expect(onReturnToList).not.toHaveBeenCalled();
  expect(engineeringProcesses.processes[0].name).toBe('Unsaved name');

  await fireEvent.click(getByRole('button', { name: 'Discard Changes' }));
  expect(engineeringProcesses.processes[0].name).toBe('Process A');
  expect(onReturnToList).toHaveBeenCalledOnce();
  expect(saveProcess).not.toHaveBeenCalled();
});

it('disables all bottom bar actions while saving', async () => {
  let finishSave!: (version: string) => void;
  vi.mocked(saveProcess).mockReturnValueOnce(new Promise((resolve) => {
    finishSave = resolve;
  }));
  const onReturnToList = vi.fn();
  const { getByRole } = render(ProcessEdit, { onReturnToList });
  await fireEvent.click(getByRole('button', { name: 'Next step' }));
  await fireEvent.click(getByRole('checkbox', { name: 'Select validation First' }));
  await fireEvent.click(getByRole('button', { name: 'Delete', exact: true }));
  vi.mocked(openDialog).mockResolvedValueOnce({ type: 'confirm', data: 'patch' });
  await fireEvent.click(getByRole('button', { name: 'Save', exact: true }));

  const footer = within(getByRole('toolbar', { name: 'Process editor actions' }));
  expect(footer.getAllByRole<HTMLButtonElement>('button').every((button) => button.disabled)).toBe(true);
  finishSave('1.0.1');
  await waitFor(() => expect(onReturnToList).toHaveBeenCalledOnce());
});

it('always shows Save for an existing process and retains version-bump saving for changes', async () => {
  const onReturnToList = vi.fn();
  const { getByRole } = render(ProcessEdit, { onReturnToList });
  expect(getByRole('button', { name: 'Save', exact: true })).toBeTruthy();
  expect(getByRole<HTMLInputElement>('textbox', { name: 'Process ID' }).disabled).toBe(true);
  await fireEvent.input(getByRole('textbox', { name: 'Process name' }), {
    target: { value: 'Updated name' },
  });
  expect(getByRole('button', { name: 'Save', exact: true })).toBeTruthy();
  await fireEvent.input(getByRole('textbox', { name: 'Process name' }), {
    target: { value: 'Process A' },
  });
  expect(getByRole('button', { name: 'Save', exact: true })).toBeTruthy();
  await fireEvent.input(getByRole('textbox', { name: 'Description' }), {
    target: { value: 'Updated description' },
  });
  vi.mocked(openDialog).mockResolvedValueOnce({ type: 'cancel' });
  await fireEvent.click(getByRole('button', { name: 'Save', exact: true }));
  expect(saveProcess).not.toHaveBeenCalled();
  expect(onReturnToList).not.toHaveBeenCalled();

  vi.mocked(openDialog).mockResolvedValueOnce({ type: 'confirm', data: 'minor' });
  vi.mocked(saveProcess).mockResolvedValueOnce('1.1.0');
  await fireEvent.click(getByRole('button', { name: 'Save', exact: true }));
  await waitFor(() => expect(onReturnToList).toHaveBeenCalledOnce());
  expect(openDialog).toHaveBeenLastCalledWith(expect.anything(), { currentVersion: '1.0.0' });
  expect(saveProcess).toHaveBeenCalledWith(
    expect.objectContaining({ id: 'process-a', description: 'Updated description' }),
    'minor',
  );
  expect(engineeringProcesses.processes).toHaveLength(1);
  expect(onReturnToList).toHaveBeenCalledOnce();
});

it('returns from an unchanged existing process without saving or asking for a version', async () => {
  const onReturnToList = vi.fn();
  const { getByRole } = render(ProcessEdit, { onReturnToList });
  await fireEvent.click(getByRole('button', { name: 'Save', exact: true }));
  expect(saveProcess).not.toHaveBeenCalled();
  expect(openDialog).not.toHaveBeenCalled();
  expect(onReturnToList).toHaveBeenCalledOnce();
});

async function renderRules() {
  const view = render(ProcessEdit, { onReturnToList: vi.fn() });
  await fireEvent.click(view.getByRole('button', { name: 'Next step' }));
  return view;
}

it('places borderless rule transfer actions beside add and delete with icons', async () => {
  const { getByRole } = await renderRules();
  const importButton = getByRole('button', { name: 'Import', exact: true });
  const exportButton = getByRole<HTMLButtonElement>('button', { name: 'Export', exact: true });
  const addButton = getByRole('button', { name: 'Add validation' });
  const toolbar = getByRole('toolbar', { name: 'Validation rules table controls' });
  const deleteButton = within(toolbar).getByRole('button', { name: 'Delete', exact: true });

  expect(Array.from(addButton.parentElement?.querySelectorAll('button') ?? [])).toEqual([importButton, addButton]);
  expect(toolbar.contains(importButton)).toBe(false);
  expect(exportButton.parentElement?.nextElementSibling).toBe(deleteButton);
  expect(exportButton.disabled).toBe(true);
  for (const button of [importButton, exportButton]) {
    expect(button.classList.contains('ew-table-action--labeled')).toBe(true);
    expect(button.style.borderWidth).toBe('0px');
    expect(button.querySelector('svg')).not.toBeNull();
  }
  await fireEvent.click(getByRole('checkbox', { name: 'Select validation First' }));
  expect(exportButton.disabled).toBe(false);
  await fireEvent.click(getByRole('checkbox', { name: 'Select validation First' }));
  expect(exportButton.disabled).toBe(true);
});

it('imports rules into the selected plugin through the relocated import action', async () => {
  const { getByRole, getByLabelText } = await renderRules();
  const input = getByLabelText<HTMLInputElement>('Import validation JSON files');
  const selectFile = vi.spyOn(input, 'click').mockImplementation(() => undefined);
  await fireEvent.click(getByRole('button', { name: 'Import', exact: true }));
  expect(selectFile).toHaveBeenCalledOnce();
  selectFile.mockRestore();
  vi.useFakeTimers();
  await fireEvent.change(input, {
    target: { files: [{
      name: 'rules.json',
      size: 100,
      text: async () => JSON.stringify([rule('Imported')]),
    }] },
  });
  await vi.advanceTimersByTimeAsync(0);
  expect(
    getByRole('checkbox', { name: 'Select validation Imported' }),
  ).toBeTruthy();
  expect(toastService.success).toHaveBeenCalledWith('Validations imported', expect.any(String));
  const row = getByRole('checkbox', { name: 'Select validation Imported' }).closest('tr');
  expect(row?.classList.contains('oscd-basic-table__row--added')).toBe(true);
  await vi.advanceTimersByTimeAsync(1600);
  expect(row?.classList.contains('oscd-basic-table__row--added')).toBe(false);
  expect(getByRole('checkbox', { name: 'Select validation Imported' }).closest('tr')).toBe(row);
});

it.each(['Edit validation', 'Remove validation'])(
  'keeps the correct target when an import finishes during the %s dialog',
  async (action) => {
    const { getByRole, getByLabelText } = await renderRules();
    let finishRead!: (content: string) => void;
    let finishDialog!: (result: { type: 'confirm'; data: XPathValidation }) => void;
    const text = vi.fn(() => new Promise<string>((resolve) => { finishRead = resolve; }));
    await fireEvent.change(getByLabelText('Import validation JSON files'), {
      target: { files: [{ name: 'rules.json', size: 100, text }] },
    });
    await waitFor(() => expect(text).toHaveBeenCalledOnce());
    const checkbox = getByRole('checkbox', { name: 'Select validation Second' });
    await fireEvent.click(checkbox);
    const row = checkbox.closest('tr');
    if (!row) throw new Error('Second rule row was not rendered.');
    vi.mocked(openDialog).mockReturnValueOnce(new Promise((resolve) => { finishDialog = resolve; }));
    await fireEvent.click(within(row).getByRole('button', { name: action }));

    finishRead(JSON.stringify([rule('Alpha')]));
    await waitFor(() => expect(toastService.success).toHaveBeenCalled());
    finishDialog({ type: 'confirm', data: rule('Edited second') });

    const plugin = engineeringProcesses.processes[0].pluginGroups[0].plugins[0];
    await waitFor(() => expect(plugin.validations?.map(({ title }) => title)).toEqual(
      action === 'Edit validation'
        ? ['Alpha', 'Edited second', 'First', 'Third']
        : ['Alpha', 'First', 'Third'],
    ));
    expect(plugin.validations?.find(({ id }) => id === 'rule-First')?.title).toBe('First');
    if (action === 'Edit validation') {
      expect(plugin.validations?.find(({ id }) => id === 'rule-Second')?.title).toBe('Edited second');
      expect(getByRole<HTMLInputElement>('checkbox', { name: 'Select validation Edited second' }).checked).toBe(true);
    }
    expect(toastService.error).not.toHaveBeenCalled();
  },
);

it('reports when the edit target is replaced while its dialog is open', async () => {
  const { getByRole } = await renderRules();
  const row = getByRole('checkbox', { name: 'Select validation Second' }).closest('tr');
  if (!row) throw new Error('Second rule row was not rendered.');
  let finishDialog!: (result: { type: 'confirm'; data: XPathValidation }) => void;
  vi.mocked(openDialog).mockReturnValueOnce(new Promise((resolve) => { finishDialog = resolve; }));
  await fireEvent.click(within(row).getByRole('button', { name: 'Edit validation' }));
  const plugin = engineeringProcesses.processes[0].pluginGroups[0].plugins[0];
  plugin.validations = [rule('Second')];
  finishDialog({ type: 'confirm', data: rule('Edited second') });

  await waitFor(() => expect(toastService.error).toHaveBeenCalledWith(
    'Validation update failed',
    expect.stringContaining('The selected validation no longer exists.'),
  ));
  expect(plugin.validations).toEqual([rule('Second')]);
});

it('skips duplicate imported IDs and reports renamed rules while highlighting only additions', async () => {
  const { getByRole, getByLabelText } = await renderRules();
  const input = getByLabelText<HTMLInputElement>('Import validation JSON files');
  const content = JSON.stringify([
    rule('First'),
    { ...rule('First'), id: 'another-rule' },
    rule('Alpha'),
  ]);
  const file = { name: 'rules.json', size: content.length, text: async () => content };
  await fireEvent.change(input, { target: { files: [file] } });

  await waitFor(() => expect(toastService.warn).toHaveBeenCalledWith(
    'Validations imported with changes',
    expect.stringContaining('"First" -> "First (copy)"'),
    15_000,
  ));
  expect(toastService.warn).toHaveBeenCalledWith(
    expect.any(String), expect.stringContaining('1 duplicate rule ID skipped'), 15_000,
  );
  const plugin = engineeringProcesses.processes[0].pluginGroups[0].plugins[0];
  expect(plugin.validations?.map(({ title }) => title))
    .toEqual(['Alpha', 'First', 'First (copy)', 'Second', 'Third']);
  expect(getByRole('checkbox', { name: 'Select validation First (copy)' }).closest('tr')
    ?.classList.contains('oscd-basic-table__row--added')).toBe(true);
  expect(getByRole('checkbox', { name: 'Select validation First' }).closest('tr')
    ?.classList.contains('oscd-basic-table__row--added')).toBe(false);

  await fireEvent.change(input, { target: { files: [file] } });
  await waitFor(() => expect(toastService.warn).toHaveBeenLastCalledWith(
    expect.any(String), expect.stringContaining('3 duplicate rule IDs skipped'), 15_000,
  ));
  expect(plugin.validations).toHaveLength(5);
});

it('sorts and highlights a manually added rule and gives duplicates a fresh ID', async () => {
  const { getByRole } = await renderRules();
  vi.useFakeTimers();
  vi.mocked(openDialog).mockResolvedValueOnce({
    type: 'confirm', data: { ...rule('Alpha'), id: undefined },
  });
  await fireEvent.click(getByRole('button', { name: 'Add validation' }));
  const plugin = engineeringProcesses.processes[0].pluginGroups[0].plugins[0];
  expect(plugin.validations?.map(({ title }) => title)).toEqual(['Alpha', 'First', 'Second', 'Third']);
  expect(plugin.validations?.[0].id).toEqual(expect.any(String));
  const alphaRow = getByRole('checkbox', { name: 'Select validation Alpha' }).closest('tr');
  if (!alphaRow) throw new Error('Added rule row was not rendered.');
  expect(alphaRow.classList.contains('oscd-basic-table__row--added')).toBe(true);
  vi.mocked(openDialog).mockResolvedValueOnce({ type: 'cancel' });
  await fireEvent.click(within(alphaRow).getByRole('button', { name: 'Duplicate validation' }));
  const copy = plugin.validations?.find(({ title }) => title === 'Alpha (copy)');
  expect(copy?.id).toEqual(expect.any(String));
  expect(copy?.id).not.toBe(plugin.validations?.[0].id);
  const copyRow = getByRole('checkbox', { name: 'Select validation Alpha (copy)' }).closest('tr');
  expect(copyRow?.classList.contains('oscd-basic-table__row--added')).toBe(true);
  await vi.advanceTimersByTimeAsync(1600);
  expect(copyRow?.classList.contains('oscd-basic-table__row--added')).toBe(false);
});

it('exports only checked rules directly and resets selection when switching plugins', async () => {
  const { getByRole } = await renderRules();
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Export' })
      .disabled,
  ).toBe(true);
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation First' }),
  );
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation Third' }),
  );
  await fireEvent.click(getByRole('button', { name: 'Export' }));

  expect(downloadValidationExport).toHaveBeenCalledWith(
    'first-plugin-validations.json',
    [rule('First'), rule('Third')],
  );
  expect(openDialog).not.toHaveBeenCalled();

  await fireEvent.click(getByRole('button', { name: 'First plugin' }));
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select validation First' })
      .checked,
  ).toBe(true);
  expect(getByRole<HTMLButtonElement>('button', { name: 'Export' }).disabled).toBe(false);

  await fireEvent.input(getByRole('searchbox'), { target: { value: 'First' } });
  await fireEvent.click(getByRole('button', { name: 'Other plugin' }));
  expect(getByRole<HTMLInputElement>('searchbox').value).toBe('');
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Export' })
      .disabled,
  ).toBe(true);
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select validation Other' })
      .checked,
  ).toBe(false);
  await fireEvent.click(getByRole('button', { name: 'First plugin' }));
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select validation First' })
      .checked,
  ).toBe(false);
});

it('clears selection when leaving and reopening the validation step', async () => {
  const { getByRole } = await renderRules();
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation First' }),
  );
  await fireEvent.click(getByRole('button', { name: 'Previous step' }));
  await fireEvent.click(getByRole('button', { name: 'Next step' }));

  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Export' })
      .disabled,
  ).toBe(true);
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select validation First' })
      .checked,
  ).toBe(false);
});

it('removes a single deleted rule from selection while retaining other checked rules', async () => {
  const { getByRole, getAllByRole } = await renderRules();
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation First' }),
  );
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation Third' }),
  );
  await fireEvent.click(
    getAllByRole('button', { name: 'Remove validation' })[0],
  );
  await fireEvent.click(getByRole('button', { name: 'Export' }));

  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select validation Third' })
      .checked,
  ).toBe(true);
  expect(downloadValidationExport).toHaveBeenCalledWith(
    'first-plugin-validations.json',
    [rule('Third')],
  );
});

it('removes selected rules with one confirmation without deleting shifted indexes', async () => {
  const { getByRole, queryByRole } = await renderRules();
  const toolbar = within(
    getByRole('toolbar', { name: 'Validation rules table controls' }),
  );
  expect(toolbar.getByRole('searchbox', { name: 'Search Rules' })).toBeTruthy();
  expect(toolbar.getByRole('status').textContent?.trim()).toBe('3 rules');
  expect(
    toolbar.getByRole<HTMLButtonElement>('button', {
      name: 'Delete',
      exact: true,
    }).disabled,
  ).toBe(true);
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation First' }),
  );
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation Third' }),
  );
  expect(toolbar.getByRole('status').textContent?.trim()).toBe('2 selected');
  await fireEvent.click(
    toolbar.getByRole('button', { name: 'Delete', exact: true }),
  );

  await waitFor(() =>
    expect(
      queryByRole('checkbox', { name: 'Select validation First' }),
    ).toBeNull(),
  );
  expect(openDialog).toHaveBeenCalledTimes(1);
  expect(
    toolbar.getByRole<HTMLButtonElement>('button', {
      name: 'Delete',
      exact: true,
    }).disabled,
  ).toBe(true);
  expect(toolbar.getByRole('status').textContent?.trim()).toBe('1 rule');
  expect(
    engineeringProcesses.processes[0].pluginGroups[0].plugins[0].validations,
  ).toEqual([rule('Second')]);
  expect(
    getByRole<HTMLInputElement>('checkbox', {
      name: 'Select validation Second',
    }).checked,
  ).toBe(false);
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Export' })
      .disabled,
  ).toBe(true);
});

it('keeps checked rules when bulk removal is cancelled', async () => {
  vi.mocked(openDialog).mockResolvedValue({ type: 'cancel' });
  const { getByRole } = await renderRules();
  await fireEvent.click(getByRole('checkbox', { name: 'Select all rows' }));
  await fireEvent.click(getByRole('button', { name: 'Delete', exact: true }));

  expect(
    engineeringProcesses.processes[0].pluginGroups[0].plugins[0].validations,
  ).toHaveLength(3);
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select all rows' })
      .checked,
  ).toBe(true);
});

it('exports the full range selected with Shift', async () => {
  const { getByRole } = await renderRules();
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation First' }),
  );
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation Third' }),
    { shiftKey: true },
  );
  await fireEvent.click(getByRole('button', { name: 'Export' }));

  expect(downloadValidationExport).toHaveBeenCalledWith(
    'first-plugin-validations.json',
    [rule('First'), rule('Second'), rule('Third')],
  );
});

it('surfaces export errors without reopening the old selection dialog', async () => {
  vi.mocked(downloadValidationExport).mockImplementation(() => {
    throw new Error('Download unavailable');
  });
  const { getByRole } = await renderRules();
  await fireEvent.click(getByRole('checkbox', { name: 'Select all rows' }));
  await fireEvent.click(getByRole('button', { name: 'Export' }));

  expect(toastService.error).toHaveBeenCalledWith(
    'Export failed',
    'Download unavailable',
  );
  expect(openDialog).not.toHaveBeenCalled();
});

it.each([' sEcOnD ', 'BayTwo', '@special'])(
  'filters rules by name, scope or condition and edits the original entry for %s',
  async (query) => {
    const plugin = engineeringProcesses.processes[0].pluginGroups[0].plugins[0];
    if (!plugin.validations) throw new Error('Missing fixture validations');
    plugin.validations[1].context = '//scl:BayTwo';
    plugin.validations[1].assert = '@special';
    const editedRule = { ...plugin.validations[1], title: 'Second edited' };
    const { getByRole, queryByRole } = await renderRules();
    await fireEvent.input(getByRole('searchbox'), { target: { value: query } });

    expect(getByRole('status').textContent?.trim()).toBe('1 rule');
    expect(
      queryByRole('checkbox', { name: 'Select validation First' }),
    ).toBeNull();
    expect(
      getByRole('checkbox', { name: 'Select validation Second' }),
    ).toBeTruthy();
    expect(
      queryByRole('checkbox', { name: 'Select validation Third' }),
    ).toBeNull();

    vi.mocked(openDialog).mockResolvedValueOnce({
      type: 'confirm',
      data: editedRule,
    });
    await fireEvent.click(getByRole('button', { name: 'Edit validation' }));
    expect(plugin.validations.map((entry) => entry.title)).toEqual([
      'First',
      'Second edited',
      'Third',
    ]);
  },
);

it('limits bulk deletion and export to visible selected rules without losing hidden selections', async () => {
  const { getByRole, getByText } = await renderRules();
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation First' }),
  );
  await fireEvent.input(getByRole('searchbox'), { target: { value: 'Third' } });

  expect(getByRole('status').textContent?.trim()).toBe('1 rule');
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Delete', exact: true })
      .disabled,
  ).toBe(true);
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Export' })
      .disabled,
  ).toBe(true);

  await fireEvent.click(getByRole('checkbox', { name: 'Select all rows' }));
  expect(getByRole('status').textContent?.trim()).toBe('1 selected');
  await fireEvent.click(getByRole('button', { name: 'Export' }));
  expect(downloadValidationExport).toHaveBeenLastCalledWith(
    'first-plugin-validations.json',
    [rule('Third')],
  );
  await fireEvent.click(getByRole('button', { name: 'Delete', exact: true }));

  expect(openDialog).toHaveBeenCalledTimes(1);
  expect(
    engineeringProcesses.processes[0].pluginGroups[0].plugins[0].validations,
  ).toEqual([rule('First'), rule('Second')]);
  expect(getByRole('status').textContent?.trim()).toBe('0 rules');
  expect(getByText('No matching validation rules.')).toBeTruthy();
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Delete', exact: true })
      .disabled,
  ).toBe(true);

  await fireEvent.input(getByRole('searchbox'), { target: { value: '' } });
  expect(getByRole('status').textContent?.trim()).toBe('1 selected');
  expect(
    getByRole<HTMLInputElement>('checkbox', { name: 'Select validation First' })
      .checked,
  ).toBe(true);
  expect(
    getByRole<HTMLInputElement>('checkbox', {
      name: 'Select validation Second',
    }).checked,
  ).toBe(false);
});

it('shows an empty rule count and disabled deletion for a plugin without validations', async () => {
  engineeringProcesses.processes[0].pluginGroups[0].plugins[0].validations = [];
  const { getByRole } = await renderRules();

  expect(getByRole('status').textContent?.trim()).toBe('0 rules');
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Delete', exact: true })
      .disabled,
  ).toBe(true);
});

it('preserves selected rules across editing, duplication and removal of another rule', async () => {
  const { getByRole, getAllByRole } = await renderRules();
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation Third' }),
  );

  vi.mocked(openDialog).mockResolvedValueOnce({
    type: 'confirm',
    data: rule('Edited third'),
  });
  await fireEvent.click(getAllByRole('button', { name: 'Edit validation' })[2]);
  expect(
    getByRole<HTMLInputElement>('checkbox', {
      name: 'Select validation Edited third',
    }).checked,
  ).toBe(true);

  vi.mocked(openDialog).mockResolvedValueOnce({ type: 'cancel' });
  const firstRow = getByRole('checkbox', { name: 'Select validation First' }).closest('tr');
  if (!firstRow) throw new Error('First rule row was not rendered.');
  await fireEvent.click(
    within(firstRow).getByRole('button', { name: 'Duplicate validation' }),
  );
  expect(
    getByRole<HTMLInputElement>('checkbox', {
      name: 'Select validation Edited third',
    }).checked,
  ).toBe(true);
  expect(
    getByRole<HTMLInputElement>('checkbox', {
      name: 'Select validation First (copy)',
    }).checked,
  ).toBe(false);

  await fireEvent.click(
    within(firstRow).getByRole('button', { name: 'Remove validation' }),
  );
  expect(
    getByRole<HTMLInputElement>('checkbox', {
      name: 'Select validation Edited third',
    }).checked,
  ).toBe(true);
  expect(
    getByRole<HTMLInputElement>('checkbox', {
      name: 'Select validation Second',
    }).checked,
  ).toBe(false);
  await fireEvent.click(getByRole('button', { name: 'Export' }));
  expect(downloadValidationExport).toHaveBeenCalledWith(
    'first-plugin-validations.json',
    [{ ...rule('Edited third'), id: 'rule-Third' }],
  );
});
