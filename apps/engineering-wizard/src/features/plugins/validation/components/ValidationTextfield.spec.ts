// @vitest-environment jsdom

import { cleanup, fireEvent, render } from '@testing-library/svelte';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import {
  initValidationEditor,
  validationEditor,
} from '../validationEditorStore.svelte';
import ValidationBasicInformationDialogPage from './dialogs/pages/ValidationBasicInformationDialogPage.svelte';
import ValidationRuleDefinitionDialogPage from './dialogs/pages/ValidationRuleDefinitionDialogPage.svelte';
import SchemaNameField from './SchemaNameField.svelte';
import AttributeCheckFields from './AttributeCheckFields.svelte';

beforeEach(() => {
  initValidationEditor();
});

afterEach(cleanup);

it.each(['Rule Name', 'Error Message'])(
  'keeps the %s helper mounted across validity changes and blur',
  async (label) => {
    validationEditor.ruleUi.expertMode = true;
    const view =
      label === 'Rule Name'
        ? render(ValidationBasicInformationDialogPage)
        : render(ValidationRuleDefinitionDialogPage, {
            syntaxState: {
              status: 'unchecked',
              key: '',
              diagnostics: [],
              error: null,
            },
            onRetrySyntax: vi.fn(),
          });
    const field = view.getByRole('textbox', { name: label });
    const helper = view.getByText(`${label} is required.`);

    for (const value of ['Provided value', '', '   ', 'Updated value']) {
      await fireEvent.focus(field);
      await fireEvent.input(field, { target: { value } });
      await fireEvent.blur(field);
      expect(helper.isConnected).toBe(true);
      expect(
        field
          .closest('.mdc-text-field')
          ?.classList.contains('mdc-text-field--invalid'),
      ).toBe(!value.trim());
    }
  },
);

it('keeps a free-text schema name helper mounted across validity changes', async () => {
  const { getByRole, getByText } = render(SchemaNameField, {
    value: '',
    options: [],
    label: 'Attribute',
    placeholder: 'Attribute name',
    requiredMessage: 'Attribute is required.',
  });
  const field = getByRole('textbox', { name: 'Attribute' });
  const helper = getByText('Attribute is required.');

  for (const value of ['@name', '', '@desc']) {
    await fireEvent.input(field, { target: { value } });
    await fireEvent.blur(field);
    expect(helper.isConnected).toBe(true);
    expect(
      field
        .closest('.mdc-text-field')
        ?.classList.contains('mdc-text-field--invalid'),
    ).toBe(!value.trim());
  }
});

it('keeps the pattern helper mounted when switching away from and back to regex', async () => {
  validationEditor.ruleUi.condition = 'matches';
  const { getByRole, getByText } = render(AttributeCheckFields, {
    ruleUi: validationEditor.ruleUi,
  });
  const helper = getByText(/use.*to anchor the full value/);
  const field = getByRole('textbox', { name: 'Pattern' });

  validationEditor.ruleUi.condition = 'equals';
  await fireEvent.input(field, { target: { value: 'Bay1' } });
  await fireEvent.blur(field);
  expect(helper.isConnected).toBe(true);
  expect(helper.textContent?.trim()).toBe('');
  expect(getByRole('textbox', { name: 'Specific text' })).toBe(field);

  validationEditor.ruleUi.condition = 'matches';
  await fireEvent.input(field, { target: { value: '^Bay.*$' } });
  await fireEvent.blur(field);
  expect(helper.isConnected).toBe(true);
  expect(getByRole('textbox', { name: 'Pattern' })).toBe(field);
  expect(helper.textContent).toContain('to anchor the full value');
});
