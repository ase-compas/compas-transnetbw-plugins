// @vitest-environment jsdom

import { cleanup, fireEvent, render, waitFor } from '@testing-library/svelte';
import { afterEach, expect, it, vi } from 'vitest';
import type { Plugin, Process } from '@oscd-transnet-plugins/shared';
import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import {
  checkRuleSyntax,
  type SyntaxValidationResult,
} from '../../../../../services/validationService';
import AddNewValidationDialog from './AddNewValidationDialog.svelte';
import { validationEditor } from '../../validationEditorStore.svelte';

vi.mock('@oscd-transnet-plugins/oscd-services/dialog', () => ({
  closeDialog: vi.fn(),
}));

vi.mock('../../../../../services/validationService', () => ({
  checkRuleSyntax: vi.fn(),
  describeValidationError: (error: Error) => error.message,
  validateWithContent: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.mocked(checkRuleSyntax).mockReset();
  vi.mocked(closeDialog).mockReset();
});

it('gates expert navigation on the current syntax check, not a previous successful check', async () => {
  // jsdom has no layout; Material's focus trap requires visible child bounds.
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 100, 30),
  );
  let resolve!: (result: SyntaxValidationResult) => void;
  vi.mocked(checkRuleSyntax)
    .mockImplementationOnce(
      () =>
        new Promise((complete) => {
          resolve = complete;
        }),
    )
    .mockResolvedValueOnce({
      valid: false,
      errors: [
        {
          ruleIndex: 0,
          field: 'assert',
          code: 'INVALID_XPATH',
          message: 'Invalid assertion',
        },
      ],
    });
  const plugin: Plugin = { id: 'plugin', name: 'Plugin', type: 'internal' };
  const process: Process = {
    id: 'process',
    name: 'Process',
    description: '',
    version: '1',
    pluginGroups: [],
  };
  const { getByRole, getByLabelText, getByText } = render(
    AddNewValidationDialog,
    {
      open: true,
      plugin,
      process,
      initialValidation: {
        title: 'Expert rule',
        description: '',
        context: '//SCL',
        assert: 'true()',
        message: 'Rule failed',
      },
    },
  );
  await fireEvent.click(
    getByRole('button', { name: 'Next step', hidden: true }),
  );
  const next = getByRole('button', { name: 'Next step', hidden: true });
  expect(next.hasAttribute('disabled')).toBe(true);
  await waitFor(() => expect(checkRuleSyntax).toHaveBeenCalledOnce());
  resolve({ valid: true, errors: [] });
  await waitFor(() => expect(next.hasAttribute('disabled')).toBe(false));
  await fireEvent.input(getByLabelText(/XPath assertion/), {
    target: { value: '(' },
  });
  expect(next.hasAttribute('disabled')).toBe(true);
  await waitFor(() =>
    expect(getByText('Assertion: Invalid assertion')).toBeTruthy(),
  );
  expect(next.hasAttribute('disabled')).toBe(true);
});

it.each([
  new TypeError('Failed to fetch'),
  new Error('HTTP 404: Not Found'),
])('creates a new expert rule without validation when the API fails: %s', async (error) => {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, 100, 30),
  );
  vi.mocked(checkRuleSyntax).mockRejectedValue(error);
  const { getByRole, getByLabelText, getByText } = render(AddNewValidationDialog, {
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
  await fireEvent.click(getByRole('button', { name: 'Next step', hidden: true }));
  await fireEvent.click(getByRole('switch', { hidden: true }));
  await fireEvent.input(getByLabelText(/XPath assertion/), {
    target: { value: 'true()' },
  });
  await fireEvent.input(getByLabelText('Error Message'), {
    target: { value: 'Rule failed' },
  });

  const next = getByRole('button', { name: 'Next step', hidden: true });
  expect(next.hasAttribute('disabled')).toBe(true);
  await waitFor(() => {
    expect(getByText('Syntax check is currently unavailable.')).toBeTruthy();
    expect(next.hasAttribute('disabled')).toBe(false);
  });
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

it('allows an unlisted child in the first-page path and preserves it when navigating back', async () => {
  const parent = '//SCL/Communication/SubNetwork/ConnectedAP';
  const { getByRole, queryByRole } = renderElementRule(parent, 'Address');

  await fireEvent.input(getByRole('textbox', { name: 'Next element name', hidden: true }), {
    target: { value: 'P' },
  });
  expect(validationEditor.entry.context).toBe(`${parent}/Address`);
  expect(validationEditor.entry.assert).toBe('count(P) > 0');

  await fireEvent.click(getByRole('button', { name: 'Next step', hidden: true }));
  expect(queryByRole('textbox', { name: 'Element name', hidden: true })).toBeNull();
  await fireEvent.click(getByRole('button', { name: 'Previous step', hidden: true }));

  const elementInput = getByRole('textbox', { name: 'Element name', hidden: true });
  expect((elementInput as HTMLInputElement).value).toBe('P');
  expect(validationEditor.entry.context).toBe(`${parent}/Address`);
  expect(validationEditor.entry.assert).toBe('count(P) > 0');

  await fireEvent.input(elementInput, { target: { value: '' } });
  expect(validationEditor.entry.context).toBe(parent);
  expect(validationEditor.entry.assert).toBe('count(Address) > 0');
});

it('shows the parent execution context when entering expert mode for an element rule', async () => {
  vi.mocked(checkRuleSyntax).mockResolvedValue({ valid: true, errors: [] });
  const parent = '//SCL/Substation/VoltageLevel';
  const { getByRole, getByLabelText } = renderElementRule(parent, 'Bay');

  await fireEvent.click(getByRole('button', { name: 'Next step', hidden: true }));
  await fireEvent.click(getByRole('switch', { hidden: true }));

  const assertionInput = getByLabelText(/XPath assertion/) as HTMLTextAreaElement;
  const hint = assertionInput.labels?.[0];
  expect(hint?.textContent).toContain(parent);
  expect(hint?.textContent).toContain('parent of the selected element');
  expect(validationEditor.entry.context).toBe(parent);
  expect(validationEditor.entry.assert).toBe('count(Bay) > 0');
});
