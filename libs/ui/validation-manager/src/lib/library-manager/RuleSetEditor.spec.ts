import { fireEvent, render, screen, waitFor, within } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import RuleSetEditor from './RuleSetEditor.svelte';
import { FakeLibraryService } from '../testing/fakeValidationLibraryService';

/**
 * Walks the three-step rule wizard to completion.
 *
 * The editor is a guided flow rather than a flat form, so a test that wants to
 * assert on the *saved* result has to drive it step by step. Fields are
 * located by `aria-label`/tag rather than visible label text, since some are
 * marked up with a placeholder-as-label pattern instead of a `<label for>`.
 */
async function completeWizard(
  fields: { title?: string; message?: string },
  finishLabel: 'Create' | 'Save',
) {
  const field = (selector: string): HTMLElement => {
    const el = document.querySelector(selector);
    if (!el) throw new Error(`Wizard field not found: ${selector}`);
    return el as HTMLElement;
  };

  if (fields.title !== undefined) {
    await fireEvent.input(field('input[aria-label="Rule Name"]'), {
      target: { value: fields.title },
    });
  }
  await fireEvent.click(screen.getByRole('button', { name: 'Next step' }));

  if (fields.message !== undefined) {
    // The attribute to check defaults to the first one the SCL schema offers
    // for the selected context, so only the message needs filling in.
    await fireEvent.input(field('textarea'), { target: { value: fields.message } });
  }
  await fireEvent.click(screen.getByRole('button', { name: 'Next step' }));

  await fireEvent.click(screen.getByRole('button', { name: finishLabel }));
}

describe('RuleSetEditor', () => {
  it('shows an empty state for a rule set that does not exist yet', async () => {
    const service = new FakeLibraryService();
    render(RuleSetEditor, {
      props: { service, ruleSetName: 'rs', ruleSetMeta: { title: 'RS' } },
    });

    expect(await screen.findByText('No rules in this rule set yet.')).not.toBeNull();
  });

  it('creates the rule set on first rule creation', async () => {
    const service = new FakeLibraryService();
    render(RuleSetEditor, {
      props: { service, ruleSetName: 'rs', ruleSetMeta: { title: 'RS' } },
    });

    await screen.findByText('No rules in this rule set yet.');
    await fireEvent.click(screen.getByRole('button', { name: '+ Add rule' }));

    await completeWizard({ title: 'My Rule', message: 'Name must be set' }, 'Create');

    expect(await screen.findByText('My Rule')).not.toBeNull();
    await waitFor(() =>
      expect(service.ruleSet('rs')?.rules).toEqual([{ name: 'my-rule', version: 'latest' }]),
    );
  });

  it('lists existing rules and allows editing one', async () => {
    const service = new FakeLibraryService();
    await service.publishRule({
      schemaVersion: '1.0.0',
      name: 'rule-a',
      title: 'Rule A',
      kind: 'XPATH',
      defaultSeverity: 'ERROR',
      definition: { context: '//IED', assertion: 'true()' },
    });
    service.seedRuleSet({
      schemaVersion: '1.0.0',
      name: 'rs',
      title: 'RS',
      rules: [{ name: 'rule-a', version: 'latest' }],
    });

    render(RuleSetEditor, {
      props: { service, ruleSetName: 'rs', ruleSetMeta: { title: 'RS' } },
    });

    const item = (await screen.findByText('Rule A')).closest('li');
    expect(item).not.toBeNull();
    await fireEvent.click(within(item as HTMLElement).getByRole('button', { name: 'Edit' }));

    // Existing values are pre-filled, so only the changed field is touched.
    await completeWizard({ message: 'Description required' }, 'Save');

    await screen.findByText('Rule A');
    await waitFor(() => expect(service.ruleSet('rs')?.rules).toHaveLength(1));
    await waitFor(() =>
      expect(service.rule('rule-a')?.message).toBe('Description required'),
    );
  });

  it('removes a rule', async () => {
    const service = new FakeLibraryService();
    await service.publishRule({
      schemaVersion: '1.0.0',
      name: 'rule-a',
      title: 'Rule A',
      kind: 'XPATH',
      defaultSeverity: 'ERROR',
      definition: { context: '//IED', assertion: 'true()' },
    });
    service.seedRuleSet({
      schemaVersion: '1.0.0',
      name: 'rs',
      title: 'RS',
      rules: [{ name: 'rule-a', version: 'latest' }],
    });

    render(RuleSetEditor, {
      props: { service, ruleSetName: 'rs', ruleSetMeta: { title: 'RS' } },
    });

    const item = (await screen.findByText('Rule A')).closest('li');
    await fireEvent.click(within(item as HTMLElement).getByRole('button', { name: 'Remove' }));

    expect(await screen.findByText('No rules in this rule set yet.')).not.toBeNull();
    expect(service.ruleSet('rs')?.rules).toEqual([]);
  });

  it('calls onBack', async () => {
    const service = new FakeLibraryService();
    const onBack = () => {
      backCalled = true;
    };
    let backCalled = false;

    render(RuleSetEditor, {
      props: { service, ruleSetName: 'rs', ruleSetMeta: { title: 'RS' }, onBack },
    });

    await fireEvent.click(await screen.findByRole('button', { name: /Back/ }));
    expect(backCalled).toBe(true);
  });
});
