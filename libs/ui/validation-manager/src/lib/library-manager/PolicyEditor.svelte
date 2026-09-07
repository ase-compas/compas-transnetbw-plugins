<script lang="ts">
  import {
    PolicyManager,
    createRuleSet,
    listRuleSets,
    type CatalogueEntry,
    type PolicyScope,
    type ResourceMetadata,
    type ValidationLibraryService,
    type ValidationPolicyContent,
  } from '@oscd-transnet-plugins/api-compas-validation-library';
  import CatalogueBrowser from '../catalogue/CatalogueBrowser.svelte';
  import RuleSetEditor from './RuleSetEditor.svelte';
  import type { RuleTestRunner } from '../rule-editor/types';
  import { deriveResourceName } from '../catalogue/naming';

  interface Props {
    service: ValidationLibraryService;
    policyName: string;
    /** Used only the first time a rule set is bound to a not-yet-existing policy. */
    policyMeta: ResourceMetadata;
    /**
     * Restricts which bindings this editor shows/creates to those matching
     * this exact scope (e.g. one plugin within the Engineering Wizard).
     *
     * When given, the picker only ever shows/creates rule packs already
     * bound under this exact scope - not the whole system's rule sets - so a
     * consumer with several scopes (e.g. one per plugin) never sees another
     * scope's rule packs and can't accidentally bind an unrelated one.
     * New rule packs are bound to this scope automatically on creation.
     * Omit to manage unscoped bindings (SCL Quality Guard's catalogue mode,
     * where a rule set simply always applies and any of them can be bound).
     *
     * The same rule set can be bound multiple times to one policy under
     * different scopes without one overwriting another.
     */
    bindScope?: PolicyScope;
    /** Serialized SCL document rules can be test-run against in the editor. */
    sclDocument?: string;
    /** Executes an unsaved rule against the document. Omitted disables testing. */
    onTest?: RuleTestRunner;
  }

  const { service, policyName, policyMeta, bindScope, sclDocument, onTest }: Props = $props();

  const policyManager = new PolicyManager(service);
  const scoped = bindScope !== undefined;

  let allRuleSets = $state<CatalogueEntry[]>([]);
  let policy = $state<ValidationPolicyContent | undefined>(undefined);
  let loading = $state(true);
  let hasLoadedOnce = false;
  let busy = $state(false);
  let error = $state<string | undefined>(undefined);
  let openRuleSet = $state<string | undefined>(undefined);

  /** True when two scopes describe the same restriction (order-independent). */
  function sameScope(a: PolicyScope | undefined, b: PolicyScope | undefined): boolean {
    const norm = (s: PolicyScope | undefined) =>
      JSON.stringify({
        pluginIds: [...(s?.pluginIds ?? [])].sort(),
        sclFileTypes: [...(s?.sclFileTypes ?? [])].sort(),
      });
    return norm(a) === norm(b);
  }

  const boundNames = $derived(
    (policy?.ruleSets ?? [])
      .filter((binding) => sameScope(binding.appliesTo, bindScope))
      .map((binding) => binding.ref.name),
  );

  /**
   * Entries the catalogue browser shows. In scoped mode this is restricted to
   * rule packs already bound under `bindScope` - browsing/binding one of the
   * system's other, unrelated rule sets makes no sense for a consumer with
   * exactly one scope per rule pack owner (e.g. one per Engineering Wizard
   * plugin). Unscoped mode keeps the full catalogue so any rule set can be
   * bound (SCL Quality Guard combines several reusable ones per policy).
   */
  const visibleRuleSets = $derived(
    scoped ? allRuleSets.filter((entry) => boundNames.includes(entry.name)) : allRuleSets,
  );

  async function reload() {
    // Only show the full "Loading…" replacement on the very first load; a
    // background refresh after a mutation should keep the existing list
    // mounted (avoids DOM churn/flicker and losing focus mid-interaction).
    if (!hasLoadedOnce) loading = true;
    error = undefined;
    try {
      [allRuleSets, policy] = await Promise.all([listRuleSets(service), policyManager.load(policyName)]);
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to load the policy.';
    } finally {
      loading = false;
      hasLoadedOnce = true;
    }
  }

  $effect(() => {
    void reload();
  });

  async function createAndBind(title: string, description: string) {
    const name = deriveResourceName(
      title,
      allRuleSets.map((entry) => entry.name),
    );
    const meta: ResourceMetadata = description ? { title, description } : { title };
    await createRuleSet(service, name, meta);
    await policyManager.bindRuleSet(policyName, { ruleSetName: name, appliesTo: bindScope }, policyMeta);
    await reload();
  }

  async function toggleBind(ruleSetName: string) {
    busy = true;
    error = undefined;
    try {
      if (boundNames.includes(ruleSetName)) {
        await policyManager.unbindRuleSet(policyName, ruleSetName, bindScope);
      } else {
        await policyManager.bindRuleSet(policyName, { ruleSetName, appliesTo: bindScope }, policyMeta);
      }
      await reload();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to update the policy.';
    } finally {
      busy = false;
    }
  }

  /** Removes a rule pack from this scope (unbinds it; does not delete it). */
  async function removeFromScope(ruleSetName: string) {
    busy = true;
    error = undefined;
    try {
      await policyManager.unbindRuleSet(policyName, ruleSetName, bindScope);
      if (openRuleSet === ruleSetName) openRuleSet = undefined;
      await reload();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to update the policy.';
    } finally {
      busy = false;
    }
  }

  function ruleSetMetaFor(name: string): ResourceMetadata {
    const entry = allRuleSets.find((r) => r.name === name);
    return { title: entry?.name ?? name, ...(entry?.description ? { description: entry.description } : {}) };
  }
</script>

<section class="policy-editor">
  {#if !scoped}
    <h3>{policyMeta.title}</h3>
    {#if policyMeta.description}<p class="policy-description">{policyMeta.description}</p>{/if}
  {/if}

  {#if error}
    <p class="policy-editor-error" role="alert">{error}</p>
  {/if}

  {#if openRuleSet}
    <RuleSetEditor
      {service}
      ruleSetName={openRuleSet}
      ruleSetMeta={ruleSetMetaFor(openRuleSet)}
      {sclDocument}
      {onTest}
      onBack={() => (openRuleSet = undefined)}
    />
  {:else}
    <p class="hint">
      {#if scoped}
        Rule packs applied here. Add as many as needed - each groups a set of related rules.
      {:else}
        Check the rule sets this policy should apply. A rule set can be bound to several
        policies at once.
      {/if}
    </p>
    <CatalogueBrowser
      entries={visibleRuleSets}
      {loading}
      {busy}
      checkedNames={scoped ? undefined : boundNames}
      onToggleChecked={scoped ? undefined : toggleBind}
      onOpen={(name) => (openRuleSet = name)}
      onDelete={scoped ? removeFromScope : undefined}
      createLabel={scoped ? '+ New rule pack' : '+ New rule set'}
      onCreate={createAndBind}
    />
  {/if}
</section>

<style>
  .policy-editor {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }

  .policy-editor h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--base00, #37474f);
  }

  .policy-description {
    color: var(--base01, #607d8b);
    font-size: var(--ew-font-size-small, 0.75rem);
    margin: -0.5rem 0 0;
  }

  .hint {
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--base01, #607d8b);
    margin: 0;
  }

  .policy-editor-error {
    color: var(--primary-base, #37474f);
    font-size: var(--ew-font-size-small, 0.75rem);
    margin: 0;
  }
</style>
