// @vitest-environment jsdom

import { cleanup, fireEvent, render, waitFor } from '@testing-library/svelte';
import { afterEach, expect, it, vi } from 'vitest';
import type { Plugin, Process } from '@oscd-transnet-plugins/shared';
import {
  checkRuleSyntax,
  type SyntaxValidationResult,
} from '../../../../../services/validationService';
import AddNewValidationDialog from './AddNewValidationDialog.svelte';

vi.mock('../../../../../services/validationService', () => ({
  checkRuleSyntax: vi.fn(),
  describeValidationError: (error: Error) => error.message,
  validateWithContent: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.mocked(checkRuleSyntax).mockReset();
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
});
