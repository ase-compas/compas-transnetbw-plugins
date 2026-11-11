// @vitest-environment jsdom

import { cleanup, fireEvent, render } from '@testing-library/svelte';
import { afterEach, expect, it, vi } from 'vitest';
import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import AddNewValidationDialog from './AddNewValidationDialog.svelte';
import { validationEditor } from '../../validationEditorStore.svelte';

vi.mock('@oscd-transnet-plugins/oscd-services/dialog', () => ({
  closeDialog: vi.fn(),
}));

vi.mock('../../../../../services/validationService', () => ({
  describeValidationError: (error: Error) => error.message,
  validateWithContent: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.mocked(closeDialog).mockReset();
});

it('allows expert navigation without the new syntax API but requires an assertion', async () => {
  // jsdom has no layout; Material's focus trap requires visible child bounds.
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 100, 30),
  );
  const fetch = vi.fn();
  vi.stubGlobal('fetch', fetch);
  const { getByRole, getByLabelText } = render(AddNewValidationDialog, {
    open: true,
    plugin: { id: 'plugin', name: 'Plugin', type: 'internal' },
    process: {
      id: 'process',
      name: 'Process',
      description: '',
      version: '1',
      pluginGroups: [],
    },
    initialValidation: {
      title: 'Expert rule',
      description: '',
      context: '//SCL',
      assert: 'true()',
      message: 'Rule failed',
    },
  });
  await fireEvent.click(
    getByRole('button', { name: 'Next step', hidden: true }),
  );
  const next = getByRole('button', { name: 'Next step', hidden: true });
  expect(next.hasAttribute('disabled')).toBe(false);
  await fireEvent.input(getByLabelText(/XPath assertion/), {
    target: { value: ' ' },
  });
  expect(next.hasAttribute('disabled')).toBe(true);
  expect(fetch).not.toHaveBeenCalled();
});

it('creates a new expert rule without a syntax request', async () => {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 100, 30),
  );
  const fetch = vi.fn();
  vi.stubGlobal('fetch', fetch);
  const { getByRole, getByLabelText } = render(AddNewValidationDialog, {
    open: true,
    plugin: { id: 'plugin', name: 'Plugin', type: 'internal' },
    process: {
      id: 'process',
      name: 'Process',
      description: '',
      version: '1',
      pluginGroups: [],
    },
  });

  await fireEvent.input(getByLabelText('Rule Name'), {
    target: { value: 'Offline rule' },
  });
  await fireEvent.click(
    getByRole('button', { name: 'Next step', hidden: true }),
  );
  await fireEvent.click(getByRole('switch', { hidden: true }));
  await fireEvent.input(getByLabelText(/XPath assertion/), {
    target: { value: 'true()' },
  });
  await fireEvent.input(getByLabelText('Error Message'), {
    target: { value: 'Rule failed' },
  });

  const next = getByRole('button', { name: 'Next step', hidden: true });
  expect(next.hasAttribute('disabled')).toBe(false);
  await fireEvent.click(next);
  const create = getByRole('button', { name: 'Create', hidden: true });
  expect(create.hasAttribute('disabled')).toBe(false);
  await fireEvent.click(create);

  expect(closeDialog).toHaveBeenCalledWith('confirm', {
    title: 'Offline rule',
    description: '',
    context: '//SCL',
    assert: 'true()',
    message: 'Rule failed',
  });
  expect(fetch).not.toHaveBeenCalled();
});

function renderElementRule(context: string, element: string) {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 100, 30),
  );
  return render(AddNewValidationDialog, {
    open: true,
    plugin: { id: 'plugin', name: 'Plugin', type: 'internal' },
    process: {
      id: 'process',
      name: 'Process',
      description: '',
      version: '1',
      pluginGroups: [],
    },
    initialValidation: {
      title: 'Element rule',
      description: '',
      context,
      assert: `count(${element}) > 0`,
      message: 'Element missing',
    },
  });
}

it('offers standard children in the first-page path and preserves the rule when navigating back', async () => {
  const parent = '//SCL/Communication/SubNetwork/ConnectedAP';
  const { getByRole, getAllByRole } = renderElementRule(parent, 'Address');

  expect(
    getByRole('option', { name: 'P', exact: true, hidden: true }),
  ).toBeDefined();
  const selectors = getAllByRole('combobox', { hidden: true });
  await fireEvent.change(selectors[selectors.length - 1], {
    target: { value: 'P' },
  });
  expect(validationEditor.entry.context).toBe(`${parent}/Address`);
  expect(validationEditor.entry.assert).toBe('count(P) > 0');

  await fireEvent.click(
    getByRole('button', { name: 'Next step', hidden: true }),
  );
  await fireEvent.click(
    getByRole('button', { name: 'Previous step', hidden: true }),
  );

  const pOption = getByRole('option', {
    name: 'P',
    exact: true,
    hidden: true,
  }) as HTMLOptionElement;
  expect(pOption.selected).toBe(true);
  expect(validationEditor.entry.context).toBe(`${parent}/Address`);
  expect(validationEditor.entry.assert).toBe('count(P) > 0');

  const clearButtons = getAllByRole('button', {
    name: 'Clear selection',
    hidden: true,
  });
  await fireEvent.click(clearButtons[clearButtons.length - 1]);
  expect(validationEditor.entry.context).toBe(parent);
  expect(validationEditor.entry.assert).toBe('count(Address) > 0');
});

it('allows an unlisted child in the first-page path and preserves it when navigating back', async () => {
  const parent = '//SCL/Communication/SubNetwork/ConnectedAP/Address/P';
  const { getByRole, queryByRole } = renderElementRule(parent, 'CustomChild');

  await fireEvent.input(
    getByRole('textbox', { name: 'Next element name', hidden: true }),
    {
      target: { value: 'NestedChild' },
    },
  );
  expect(validationEditor.entry.context).toBe(`${parent}/CustomChild`);
  expect(validationEditor.entry.assert).toBe('count(NestedChild) > 0');

  await fireEvent.click(
    getByRole('button', { name: 'Next step', hidden: true }),
  );
  expect(
    queryByRole('textbox', { name: 'Element name', hidden: true }),
  ).toBeNull();
  await fireEvent.click(
    getByRole('button', { name: 'Previous step', hidden: true }),
  );

  const elementInput = getByRole('textbox', {
    name: 'Element name',
    hidden: true,
  });
  expect((elementInput as HTMLInputElement).value).toBe('NestedChild');
  expect(validationEditor.entry.context).toBe(`${parent}/CustomChild`);
  expect(validationEditor.entry.assert).toBe('count(NestedChild) > 0');

  await fireEvent.input(elementInput, { target: { value: '' } });
  expect(validationEditor.entry.context).toBe(parent);
  expect(validationEditor.entry.assert).toBe('count(CustomChild) > 0');
});

it('shows the parent execution context when entering expert mode for an element rule', async () => {
  const parent = '//SCL/Substation/VoltageLevel';
  const { getByRole, getByLabelText } = renderElementRule(parent, 'Bay');

  await fireEvent.click(
    getByRole('button', { name: 'Next step', hidden: true }),
  );
  await fireEvent.click(getByRole('switch', { hidden: true }));

  const assertionInput = getByLabelText(
    /XPath assertion/,
  ) as HTMLTextAreaElement;
  const hint = assertionInput.labels?.[0];
  expect(hint?.textContent).toContain(parent);
  expect(hint?.textContent).toContain('parent of the selected element');
  expect(validationEditor.entry.context).toBe(parent);
  expect(validationEditor.entry.assert).toBe('count(Bay) > 0');
});
