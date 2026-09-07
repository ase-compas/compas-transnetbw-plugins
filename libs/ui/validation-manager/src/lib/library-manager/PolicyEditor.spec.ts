import { fireEvent, render, screen, waitFor, within } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import PolicyEditor from './PolicyEditor.svelte';
import { FakeLibraryService } from '../testing/fakeValidationLibraryService';

describe('PolicyEditor', () => {
  it('lists known rule sets, none checked, for a policy that does not exist yet', async () => {
    const service = new FakeLibraryService();
    service.seedRuleSet({ schemaVersion: '1.0.0', name: 'rs1', title: 'RS1', rules: [] });

    render(PolicyEditor, {
      props: { service, policyName: 'p', policyMeta: { title: 'Policy' } },
    });

    const item = (await screen.findByText('rs1')).closest('li') as HTMLElement;
    const checkbox = within(item).getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('binds and unbinds a rule set via the checkbox', async () => {
    const service = new FakeLibraryService();
    service.seedRuleSet({ schemaVersion: '1.0.0', name: 'rs1', title: 'RS1', rules: [] });

    render(PolicyEditor, {
      props: { service, policyName: 'p', policyMeta: { title: 'Policy' } },
    });

    const item = (await screen.findByText('rs1')).closest('li') as HTMLElement;
    const checkbox = within(item).getByRole('checkbox') as HTMLInputElement;

    await fireEvent.click(checkbox);
    await waitFor(() =>
      expect(service.policy('p')?.ruleSets.map((b) => b.ref.name)).toEqual(['rs1']),
    );

    await fireEvent.click(within(item).getByRole('checkbox'));
    await waitFor(() => expect(service.policy('p')?.ruleSets).toEqual([]));
  });

  it('creates a new rule set and binds it in one step', async () => {
    const service = new FakeLibraryService();

    render(PolicyEditor, {
      props: { service, policyName: 'p', policyMeta: { title: 'Policy' } },
    });

    await screen.findByText('Nothing here yet.');
    await fireEvent.click(screen.getByRole('button', { name: '+ New rule set' }));
    await fireEvent.input(screen.getByLabelText('Title'), { target: { value: 'New Set' } });
    await fireEvent.click(screen.getByRole('button', { name: 'Create' }));

    await screen.findByText('new-set');
    await waitFor(() => expect(service.ruleSet('new-set')).toBeDefined());
    await waitFor(() =>
      expect(service.policy('p')?.ruleSets.map((b) => b.ref.name)).toEqual(['new-set']),
    );
  });

  it('opens a rule set and can navigate back to the list', async () => {
    const service = new FakeLibraryService();
    service.seedRuleSet({ schemaVersion: '1.0.0', name: 'rs1', title: 'RS1', rules: [] });
    service.seedPolicy({
      schemaVersion: '1.0.0',
      name: 'p',
      title: 'Policy',
      ruleSets: [{ ref: { name: 'rs1', version: 'latest' } }],
    });

    render(PolicyEditor, {
      props: { service, policyName: 'p', policyMeta: { title: 'Policy' } },
    });

    await fireEvent.click(await screen.findByRole('button', { name: 'Open' }));
    expect(await screen.findByText('No rules in this rule set yet.')).not.toBeNull();

    await fireEvent.click(screen.getByRole('button', { name: /Back/ }));
    expect(await screen.findByText('rs1')).not.toBeNull();
  });

  it('with a bindScope, only shows rule packs already bound under that exact scope, leaving other scopes of the same rule set untouched', async () => {
    const service = new FakeLibraryService();
    service.seedRuleSet({ schemaVersion: '1.0.0', name: 'rs1', title: 'RS1', rules: [] });
    service.seedPolicy({
      schemaVersion: '1.0.0',
      name: 'p',
      title: 'Policy',
      ruleSets: [{ ref: { name: 'rs1', version: 'latest' }, appliesTo: { pluginIds: ['other-plugin'] } }],
    });

    render(PolicyEditor, {
      props: {
        service,
        policyName: 'p',
        policyMeta: { title: 'Policy' },
        bindScope: { pluginIds: ['my-plugin'] },
      },
    });

    // Bound only under 'other-plugin' - not shown from 'my-plugin's perspective.
    await screen.findByText('Nothing here yet.');
    expect(screen.queryByText('rs1')).toBeNull();
  });

  describe('scoped rule packs (bindScope)', () => {
    it('shows no rule packs and no checkboxes when nothing is bound under this scope yet', async () => {
      const service = new FakeLibraryService();

      render(PolicyEditor, {
        props: {
          service,
          policyName: 'ew-policy',
          policyMeta: { title: 'Engineering Wizard validation policy' },
          bindScope: { pluginIds: ['plugin-a'] },
        },
      });

      await screen.findByText('Nothing here yet.');
      expect(screen.queryByRole('checkbox')).toBeNull();
    });

    it('creates a new rule pack, auto-bound to the scope', async () => {
      const service = new FakeLibraryService();

      render(PolicyEditor, {
        props: {
          service,
          policyName: 'ew-policy',
          policyMeta: { title: 'Engineering Wizard validation policy' },
          bindScope: { pluginIds: ['plugin-a'] },
        },
      });

      await screen.findByText('Nothing here yet.');
      await fireEvent.click(screen.getByRole('button', { name: '+ New rule pack' }));
      await fireEvent.input(screen.getByLabelText('Title'), { target: { value: 'Bay checks' } });
      await fireEvent.click(screen.getByRole('button', { name: 'Create' }));

      await screen.findByText('bay-checks');
      await waitFor(() => expect(service.ruleSet('bay-checks')).toBeDefined());
      await waitFor(() =>
        expect(service.policy('ew-policy')?.ruleSets).toEqual([
          { ref: { name: 'bay-checks', version: 'latest' }, appliesTo: { pluginIds: ['plugin-a'] } },
        ]),
      );
    });

    it('allows several rule packs to coexist under the same scope', async () => {
      const service = new FakeLibraryService();
      service.seedRuleSet({ schemaVersion: '1.0.0', name: 'rs1', title: 'RS1', rules: [] });
      service.seedRuleSet({ schemaVersion: '1.0.0', name: 'rs2', title: 'RS2', rules: [] });
      service.seedPolicy({
        schemaVersion: '1.0.0',
        name: 'ew-policy',
        title: 'Engineering Wizard validation policy',
        ruleSets: [
          { ref: { name: 'rs1', version: 'latest' }, appliesTo: { pluginIds: ['plugin-a'] } },
          { ref: { name: 'rs2', version: 'latest' }, appliesTo: { pluginIds: ['plugin-a'] } },
        ],
      });

      render(PolicyEditor, {
        props: {
          service,
          policyName: 'ew-policy',
          policyMeta: { title: 'Engineering Wizard validation policy' },
          bindScope: { pluginIds: ['plugin-a'] },
        },
      });

      await screen.findByText('rs1');
      await screen.findByText('rs2');
    });

    it('removing a rule pack unbinds it from this scope only, without deleting it or affecting other scopes', async () => {
      const service = new FakeLibraryService();
      service.seedRuleSet({ schemaVersion: '1.0.0', name: 'rs1', title: 'RS1', rules: [] });
      service.seedPolicy({
        schemaVersion: '1.0.0',
        name: 'ew-policy',
        title: 'Engineering Wizard validation policy',
        ruleSets: [
          { ref: { name: 'rs1', version: 'latest' }, appliesTo: { pluginIds: ['plugin-a'] } },
          { ref: { name: 'rs1', version: 'latest' }, appliesTo: { pluginIds: ['plugin-b'] } },
        ],
      });

      render(PolicyEditor, {
        props: {
          service,
          policyName: 'ew-policy',
          policyMeta: { title: 'Engineering Wizard validation policy' },
          bindScope: { pluginIds: ['plugin-a'] },
        },
      });

      const item = (await screen.findByText('rs1')).closest('li') as HTMLElement;
      await fireEvent.click(within(item).getByRole('button', { name: 'Delete' }));

      await waitFor(() =>
        expect(service.policy('ew-policy')?.ruleSets).toEqual([
          { ref: { name: 'rs1', version: 'latest' }, appliesTo: { pluginIds: ['plugin-b'] } },
        ]),
      );
      await waitFor(() => expect(service.ruleSet('rs1')).toBeDefined());
    });

    it('does not show the generic policy heading, since it is not a user-facing concept here', async () => {
      const service = new FakeLibraryService();

      render(PolicyEditor, {
        props: {
          service,
          policyName: 'ew-policy',
          policyMeta: { title: 'Engineering Wizard validation policy' },
          bindScope: { pluginIds: ['plugin-a'] },
        },
      });

      await screen.findByText('Nothing here yet.');
      expect(screen.queryByText('Engineering Wizard validation policy')).toBeNull();
    });
  });
});
