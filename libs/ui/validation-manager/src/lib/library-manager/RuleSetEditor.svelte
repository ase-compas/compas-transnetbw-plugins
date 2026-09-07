<script lang="ts">
  import {
    RuleSetManager,
    emptyRuleDraft,
    type ResourceMetadata,
    type RuleDraft,
    type ValidationLibraryService,
  } from '@oscd-transnet-plugins/api-compas-validation-library';
  import RuleEditorWizard from '../rule-editor/RuleEditorWizard.svelte';
  import ModalShell from '../ui/ModalShell.svelte';
  import Button from '../ui/Button.svelte';
  import Spinner from '../ui/Spinner.svelte';
  import type { RuleTestRunner } from '../rule-editor/types';
  import { deriveResourceName } from '../catalogue/naming';
  import {
    OscdArrowBackIcon,
    OscdEditIcon,
    OscdDeleteIcon,
  } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    service: ValidationLibraryService;
    ruleSetName: string;
    /** Used only the first time a rule is added to a not-yet-existing rule set. */
    ruleSetMeta: ResourceMetadata;
    /** Serialized SCL document rules can be test-run against in the editor. */
    sclDocument?: string;
    /** Executes an unsaved rule against the document. Omitted disables testing. */
    onTest?: RuleTestRunner;
    onBack?: () => void;
  }

  const { service, ruleSetName, ruleSetMeta, sclDocument, onTest, onBack }: Props =
    $props();

  const manager = new RuleSetManager(service);

  let rules = $state<RuleDraft[]>([]);
  let loading = $state(true);
  let hasLoadedOnce = false;
  let error = $state<string | undefined>(undefined);
  let busy = $state(false);
  /** undefined = list view, otherwise the rule currently being created/edited. */
  let editing = $state<RuleDraft | undefined>(undefined);

  async function reload() {
    // Only show the full "Loading…" replacement on the very first load; a
    // background refresh after a mutation should keep the existing list
    // mounted (avoids DOM churn/flicker and losing focus mid-interaction).
    if (!hasLoadedOnce) loading = true;
    error = undefined;
    try {
      rules = await manager.listRules(ruleSetName);
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to load rules.';
    } finally {
      loading = false;
      hasLoadedOnce = true;
    }
  }

  // Reload whenever the caller switches which rule set is being edited (e.g.
  // navigating between rule sets bound to a policy without unmounting).
  $effect(() => {
    // Track ruleSetName explicitly so switching rule sets resets the
    // "first load" flag and shows the loading state for the new context.
    if (ruleSetName) hasLoadedOnce = false;
    void reload();
  });

  function startCreate() {
    editing = emptyRuleDraft();
  }

  function startEdit(rule: RuleDraft) {
    editing = { ...rule };
  }

  async function save(draft: RuleDraft) {
    busy = true;
    try {
      const name = draft.name ?? deriveResourceName(draft.title, rules.map((r) => r.name ?? ''));
      await manager.saveRule(ruleSetName, name, draft, ruleSetMeta);
      editing = undefined;
      await reload();
    } finally {
      busy = false;
    }
  }

  async function remove(rule: RuleDraft) {
    if (!rule.name) return;
    busy = true;
    try {
      await manager.removeRule(ruleSetName, rule.name);
      await reload();
    } finally {
      busy = false;
    }
  }
</script>

<section class="rule-set-editor">
  <header>
    {#if onBack}
      <Button variant="text" onclick={onBack} ariaLabel="Back to policy">
        <OscdArrowBackIcon svgStyles="fill: var(--primary-base, #37474f); width: 16px; height: 16px;" />
        <span>Back</span>
      </Button>
    {/if}
    <h3>{ruleSetMeta.title}</h3>
  </header>

  {#if error}
    <p class="rule-set-editor-error" role="alert">{error}</p>
  {/if}

  {#if editing}
    {#key editing.name ?? '__new__'}
      <ModalShell
        title={editing.name ? `Edit rule` : `Add rule to ${ruleSetMeta.title}`}
        onClose={() => (editing = undefined)}
      >
        <RuleEditorWizard
          draft={editing}
          {busy}
          {sclDocument}
          {onTest}
          onSave={save}
          onCancel={() => (editing = undefined)}
        />
      </ModalShell>
    {/key}
  {/if}

  {#if loading}
    <div class="rule-set-editor-loading">
      <Spinner color="var(--primary-base, #37474f)" />
      <span>Loading rules&hellip;</span>
    </div>
  {:else}
    <ul class="rule-list">
      {#each rules as rule (rule.name)}
        <li>
          <div class="rule-list-info">
            <strong>{rule.title}</strong>
            <span class="rule-severity">{rule.severity}</span>
            {#if rule.description}<p>{rule.description}</p>{/if}
          </div>
          <div class="rule-list-actions">
            <Button variant="outlined" onclick={() => startEdit(rule)} disabled={busy}>
              <OscdEditIcon svgStyles="fill: var(--primary-base, #37474f); width: 16px; height: 16px;" />
              <span>Edit</span>
            </Button>
            <Button variant="outlined" onclick={() => remove(rule)} disabled={busy}>
              <OscdDeleteIcon svgStyles="fill: var(--primary-base, #37474f); width: 16px; height: 16px;" />
              <span>Remove</span>
            </Button>
          </div>
        </li>
      {:else}
        <li class="rule-list-empty">No rules in this rule set yet.</li>
      {/each}
    </ul>
    <Button variant="unelevated" onclick={startCreate} disabled={busy}>
      <span>+ Add rule</span>
    </Button>
  {/if}
</section>

<style>
  .rule-set-editor {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }

  .rule-set-editor header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .rule-set-editor header h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--base00, #37474f);
  }

  .rule-set-editor-loading {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--base01, #607d8b);
    font-size: var(--ew-font-size-body, 0.875rem);
    padding: 0.5rem 0;
  }

  .rule-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .rule-list li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    border: 1px solid var(--base2, #cfd8dc);
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background: var(--white, #ffffff);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .rule-list li:hover {
    border-color: var(--base0, #90a4ae);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .rule-list-info strong {
    color: var(--base00, #37474f);
    font-weight: var(--ew-font-weight-medium, 500);
  }

  .rule-list-info p {
    margin: 0.25rem 0 0;
    font-size: var(--ew-font-size-small, 0.75rem);
    color: var(--base01, #607d8b);
  }

  .rule-severity {
    font-size: var(--ew-font-size-small, 0.75rem);
    color: var(--base01, #607d8b);
    margin-left: 0.5rem;
  }

  .rule-list-actions {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .rule-list-empty {
    color: var(--base01, #607d8b);
    border: none;
    padding: 0.5rem 0;
    font-size: var(--ew-font-size-body, 0.875rem);
  }

  .rule-set-editor-error {
    color: var(--primary-base, #37474f);
    font-size: var(--ew-font-size-small, 0.75rem);
    margin: 0;
  }
</style>
