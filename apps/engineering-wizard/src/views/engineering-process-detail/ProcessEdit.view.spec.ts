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
  selectedEngineeringProcess,
} from '../../features/processes/stores.svelte';
import { downloadValidationExport } from '../../features/plugins/validation/validationJson';
import ProcessEdit from './ProcessEdit.view.svelte';

vi.mock('../../features/processes/repository.svelte', () => ({
  saveProcess: vi.fn(),
}));
vi.mock('@oscd-transnet-plugins/oscd-services/dialog', () => ({
  openDialog: vi.fn(),
}));
vi.mock('@oscd-transnet-plugins/oscd-services/toast', () => ({
  toastService: { success: vi.fn(), error: vi.fn() },
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
  return { title, description: '', context: '//scl:Bay', assert: '@name' };
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
  vi.mocked(openDialog).mockResolvedValue({ type: 'confirm' });
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

async function renderRules() {
  const view = render(ProcessEdit, { onReturnToList: vi.fn() });
  await fireEvent.click(view.getByRole('button', { name: 'Next step' }));
  return view;
}

it('exports only checked rules directly and resets selection when switching plugins', async () => {
  const { getByRole } = await renderRules();
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Export selected (0)' })
      .disabled,
  ).toBe(true);
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation First' }),
  );
  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation Third' }),
  );
  await fireEvent.click(getByRole('button', { name: 'Export selected (2)' }));

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
  expect(getByRole('button', { name: 'Export selected (2)' })).toBeTruthy();

  await fireEvent.input(getByRole('searchbox'), { target: { value: 'First' } });
  await fireEvent.click(getByRole('button', { name: 'Other plugin' }));
  expect(getByRole<HTMLInputElement>('searchbox').value).toBe('');
  expect(
    getByRole<HTMLButtonElement>('button', { name: 'Export selected (0)' })
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
    getByRole<HTMLButtonElement>('button', { name: 'Export selected (0)' })
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
  await fireEvent.click(getByRole('button', { name: 'Export selected (1)' }));

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
    getByRole<HTMLButtonElement>('button', { name: 'Export selected (0)' })
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
  await fireEvent.click(getByRole('button', { name: 'Export selected (3)' }));

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
  await fireEvent.click(getByRole('button', { name: 'Export selected (3)' }));

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
    getByRole<HTMLButtonElement>('button', { name: 'Export selected (0)' })
      .disabled,
  ).toBe(true);

  await fireEvent.click(getByRole('checkbox', { name: 'Select all rows' }));
  expect(getByRole('status').textContent?.trim()).toBe('1 selected');
  await fireEvent.click(getByRole('button', { name: 'Export selected (1)' }));
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
  await fireEvent.click(
    getAllByRole('button', { name: 'Duplicate validation' })[0],
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
    getAllByRole('button', { name: 'Remove validation' })[0],
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
  await fireEvent.click(getByRole('button', { name: 'Export selected (1)' }));
  expect(downloadValidationExport).toHaveBeenCalledWith(
    'first-plugin-validations.json',
    [rule('Edited third')],
  );
});
