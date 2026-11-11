// @vitest-environment jsdom

import { cleanup, fireEvent, render } from '@testing-library/svelte';
import type { Plugin, XPathValidation } from '@oscd-transnet-plugins/shared';
import { OscdBasicDataTable } from '@oscd-transnet-plugins/oscd-component';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { tick } from 'svelte';
import { engineeringProcesses } from '../../features/processes/stores.svelte';
import ProcessValidation from './ProcessValidation.view.svelte';

beforeEach(() => {
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe = vi.fn();
      disconnect = vi.fn();
    },
  );
});

afterEach(() => {
  cleanup();
  engineeringProcesses.processes = [];
  vi.unstubAllGlobals();
});

it('keeps non-scrolling tables as direct layout children', () => {
  const { container } = render(OscdBasicDataTable, {
    items: [{ id: 'first', name: 'First' }],
    columns: [{ key: 'name', header: 'Name' }],
  });

  expect(container.querySelector('.oscd-basic-table')).toBeNull();
  expect(container.querySelector('.mdc-data-table')?.parentElement).toBe(
    container,
  );
});

it('ignores selection-cell padding while preserving checkbox, data-cell and keyboard actions', async () => {
  const item = { id: 'first', name: 'First' };
  const onRowClick = vi.fn();
  const { getByRole, getByText } = render(OscdBasicDataTable, {
    items: [item],
    columns: [{ key: 'name', header: 'Name' }],
    selectable: true,
    onRowClick,
  });
  const checkbox = getByRole<HTMLInputElement>('checkbox', { name: 'Select row 1' });
  const selectionCell = checkbox.closest('td');
  const row = checkbox.closest('tr');
  if (!selectionCell || !row) throw new Error('Missing checkbox cell or row');

  await fireEvent.click(selectionCell);
  expect(onRowClick).not.toHaveBeenCalled();
  expect(checkbox.checked).toBe(false);
  await fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
  expect(onRowClick).not.toHaveBeenCalled();
  await fireEvent.click(getByText('First'));
  expect(onRowClick).toHaveBeenCalledOnce();
  expect(onRowClick).toHaveBeenCalledWith(item);
  await fireEvent.keyDown(row, { key: 'Enter' });
  expect(onRowClick).toHaveBeenCalledTimes(2);
});

it('displays the selection provided by its parent without resetting it on mount', () => {
  const entry: XPathValidation = {
    title: 'Selected rule',
    description: '',
    context: '//scl:Bay',
    assert: '@name',
  };
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
              id: 'validation',
              name: 'Validation',
              type: 'internal',
              validations: [entry],
            },
          ],
        },
      ],
    },
  ];
  const plugin = engineeringProcesses.processes[0].pluginGroups[0].plugins[0];
  const { getByRole } = render(ProcessValidation, {
    selectedPlugin: plugin,
    selectedValidations: plugin.validations,
  });

  expect(
    getByRole<HTMLInputElement>('checkbox', {
      name: 'Select validation Selected rule',
    }).checked,
  ).toBe(true);
});

it('keeps rows independently selectable when legacy data contains duplicate rule IDs', async () => {
  const first: XPathValidation = {
    id: 'duplicate-id',
    title: 'First',
    description: '',
    context: '//SCL',
    assert: '@name',
  };
  const second = { ...first, title: 'Second' };
  const onSelectionChange = vi.fn();
  const { getByRole } = render(ProcessValidation, {
    selectedPlugin: {
      id: 'validation',
      name: 'Validation',
      type: 'internal',
      validations: [first, second],
    },
    onSelectionChange,
  });

  await fireEvent.click(
    getByRole('checkbox', { name: 'Select validation First' }),
  );
  expect(onSelectionChange).toHaveBeenCalledWith([first]);
  expect(
    getByRole<HTMLInputElement>('checkbox', {
      name: 'Select validation Second',
    }).checked,
  ).toBe(false);
});

it('highlights additions from state changes but not initial rows or plugin switches', async () => {
  const first: XPathValidation = {
    id: 'first',
    title: 'First',
    description: '',
    context: '//SCL',
    assert: '@name',
  };
  engineeringProcesses.processes = [{
    id: 'process-a',
    name: 'Process A',
    description: '',
    version: '1.0.0',
    pluginGroups: [{
      title: 'Plugins',
      plugins: [{
        id: 'validation',
        name: 'Validation',
        type: 'internal',
        validations: [first],
      }],
    }],
  }];
  const plugin = engineeringProcesses.processes[0].pluginGroups[0].plugins[0];
  const { getByRole, rerender } = render(ProcessValidation, {
    selectedPlugin: plugin,
  });
  const isHighlighted = (name: string) =>
    getByRole('checkbox', { name: `Select validation ${name}` })
      .closest('tr')?.classList.contains('oscd-basic-table__row--added');

  expect(isHighlighted('First')).toBe(false);
  plugin.validations?.push({ ...first, id: 'added', title: 'Added' });
  await tick();
  expect(isHighlighted('Added')).toBe(true);
  expect(isHighlighted('First')).toBe(false);

  await rerender({
    selectedPlugin: {
      ...plugin,
      id: 'other-plugin',
      validations: [{ ...first, id: 'other', title: 'Other' }],
    },
  });
  expect(isHighlighted('Other')).toBe(false);
});

it.each(['short', 'long'])(
  'keeps full %s cell values in tooltips and edit callbacks',
  async (length) => {
    const repeat = length === 'long' ? 30 : 1;
    const entry: XPathValidation = {
      title: 'Check bay '.repeat(repeat).trim(),
      description: '',
      context: Array(repeat).fill('scl:Bay').join('//'),
      assert: Array(repeat).fill('@desc = "<Bay> & equipment"').join(' or '),
    };
    const selectedPlugin: Plugin = {
      id: 'validation',
      name: 'Validation',
      type: 'internal',
      validations: [entry],
    };
    const onEditEntry = vi.fn();
    const { getByTitle, getByRole } = render(ProcessValidation, {
      selectedPlugin,
      onEditEntry,
    });

    const selectionCell = getByRole('checkbox', { name: `Select validation ${entry.title}` }).closest('td');
    if (!selectionCell) throw new Error('Missing checkbox cell');
    await fireEvent.click(selectionCell);
    expect(onEditEntry).not.toHaveBeenCalled();

    for (const value of [entry.title, entry.context, entry.assert]) {
      const cell = getByTitle(value);
      expect(cell.textContent).toBe(value);
      expect(cell.children).toHaveLength(0);
    }

    await fireEvent.click(getByRole('button', { name: 'Edit validation' }));
    expect(onEditEntry).toHaveBeenCalledWith(entry, 0);
  },
);
