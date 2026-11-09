// @vitest-environment jsdom

import { cleanup, fireEvent, render, within } from '@testing-library/svelte';
import { afterEach, expect, it } from 'vitest';
import type { RuleResult } from '../../services/validationCoordinator.svelte';
import ValidationBadgePopover from './ValidationBadgePopover.svelte';
import ValidationRuleItem from './ValidationRuleItem.svelte';

afterEach(cleanup);

const failedRule: RuleResult = {
  title: 'Required bay name',
  description: 'Every bay must have a name.',
  context: '//scl:Bay',
  assertion: '@name',
  status: 'FAILED',
  errors: [
    { ruleName: 'Required bay name', message: 'Missing name', lineNumber: 12 },
    { ruleName: 'Required bay name', message: 'Missing name', lineNumber: 28 },
    { ruleName: 'Required bay name', message: 'Missing name', lineNumber: 12 },
    {
      ruleName: 'Required bay name',
      message: 'No context nodes found',
      lineNumber: null,
    },
    { ruleName: 'Required bay name', message: 'Missing name' },
  ],
  diagnostics: [],
};

it('shows unique affected lines below the description when opening a failed rule in the badge popup', async () => {
  const { container, getByText, getByRole } = render(ValidationBadgePopover, {
    view: {
      state: 'failed',
      rules: [failedRule],
      failedRules: [failedRule],
      passedRules: [],
      erroredRules: [],
    },
  });
  const wrapper = container.querySelector('.wrapper');
  if (!wrapper) throw new Error('Missing badge wrapper');
  await fireEvent.mouseEnter(wrapper);
  await fireEvent.click(getByText(failedRule.title));

  const description = getByText(failedRule.description ?? '');
  const lines = getByRole('list', { name: 'Affected lines' });
  expect(lines.closest('details')?.open).toBe(true);
  expect(
    within(lines)
      .getAllByRole('listitem')
      .map((item) => item.textContent),
  ).toEqual(['Line 12', 'Line 28']);
  expect(description.nextElementSibling).toBe(lines.parentElement);
  expect(lines.parentElement?.nextElementSibling?.textContent).toContain(
    'Context',
  );
});

it('shows a single line even without a description', () => {
  const { getByText, getByRole } = render(ValidationRuleItem, {
    rule: { ...failedRule, description: '', errors: [failedRule.errors[0]] },
  });

  expect(getByText('Line')).toBeTruthy();
  expect(
    within(getByRole('list', { name: 'Affected lines' })).getByText('Line 12'),
  ).toBeTruthy();
});

it.each([
  { status: 'FAILED', errors: failedRule.errors.slice(3) },
  { status: 'PASSED', errors: [] },
  { status: 'EVALUATION_ERROR', errors: [] },
  { status: 'REQUEST_ERROR', errors: [] },
] satisfies Partial<RuleResult>[])(
  'omits the line section for $status without line numbers',
  (result) => {
    const { queryByRole } = render(ValidationRuleItem, {
      rule: { ...failedRule, ...result },
    });

    expect(queryByRole('list', { name: 'Affected lines' })).toBeNull();
  },
);
