<script lang="ts">
  import {
    PolicyManager,
    listRuleSets,
    type CatalogueEntry,
    type ResourceMetadata,
    type ValidationLibraryService,
  } from '@oscd-transnet-plugins/api-compas-validation-library';
  import { OscdAddIcon, OscdCompareArrowsIcon, OscdRemoveIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { OscdListItem, OscdPanel } from '@oscd-transnet-plugins/oscd-component';
  import SearchInput from '../../../../components/shared/SearchInput.svelte';

  /**
   * Assigns *existing* rule sets (authored centrally - see
   * ValidationRuleLibrary.view.svelte) to one plugin, mirroring the
   * assigned/available two-panel pattern `ProcessPluginEditor` uses for
   * plugin assignment. Creating or editing rule sets/rules is intentionally
   * not possible here - that only happens in the central rule library.
   */
  interface Props {
    service: ValidationLibraryService;
    /** Fixed identity of the Engineering Wizard's single policy. */
    policyName: string;
    /** Used only the first time a rule set is bound to a not-yet-existing policy. */
    policyMeta: ResourceMetadata;
    pluginId: string;
    pluginName: string;
  }

  const { service, policyName, policyMeta, pluginId, pluginName }: Props = $props();

  const policyManager = new PolicyManager(service);

  /** Every rule set in the catalogue - the pool assignment picks from. */
  let allRuleSets = $state<CatalogueEntry[]>([]);
  /** Names bound to this exact plugin's scope. */
  let assignedNames = $state<string[]>([]);
  let loading = $state(true);
  let hasLoadedOnce = false;
  let busy = $state(false);
  let error = $state<string | undefined>(undefined);
  let searchTerm = $state('');

  /**
   * The Engineering Wizard only ever binds rule sets under a single-plugin
   * scope (`{ pluginIds: [pluginId] }`), so matching only needs to check for
   * that exact shape rather than a general order-independent scope compare.
   */
  function isBoundToPlugin(appliesTo: { pluginIds?: string[] } | undefined, id: string): boolean {
    const ids = appliesTo?.pluginIds ?? [];
    return ids.length === 1 && ids[0] === id;
  }

  async function reload() {
    // Only show the full "Loading…" replacement on the very first load for
    // this plugin; a background refresh after a mutation should keep the
    // existing lists mounted (avoids DOM churn/flicker).
    if (!hasLoadedOnce) loading = true;
    error = undefined;
    try {
      const [ruleSets, policy] = await Promise.all([
        listRuleSets(service),
        policyManager.load(policyName),
      ]);
      allRuleSets = ruleSets;
      assignedNames = (policy?.ruleSets ?? [])
        .filter((binding) => isBoundToPlugin(binding.appliesTo, pluginId))
        .map((binding) => binding.ref.name);
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to load rule sets.';
    } finally {
      loading = false;
      hasLoadedOnce = true;
    }
  }

  // Reload whenever the caller switches which plugin is being configured -
  // reset the "first load" flag so the new plugin's data shows a loading
  // state instead of briefly flashing the previous plugin's lists.
  $effect(() => {
    if (pluginId) hasLoadedOnce = false;
    void reload();
  });

  const assigned = $derived(allRuleSets.filter((rs) => assignedNames.includes(rs.name)));

  const normalizedSearch = $derived(searchTerm.trim().toLowerCase());
  const available = $derived(
    allRuleSets
      .filter((rs) => !assignedNames.includes(rs.name))
      .filter((rs) => !normalizedSearch || rs.name.toLowerCase().includes(normalizedSearch)),
  );

  async function assign(name: string) {
    busy = true;
    error = undefined;
    try {
      await policyManager.bindRuleSet(
        policyName,
        { ruleSetName: name, appliesTo: { pluginIds: [pluginId] } },
        policyMeta,
      );
      await reload();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to assign the rule set.';
    } finally {
      busy = false;
    }
  }

  async function unassign(name: string) {
    busy = true;
    error = undefined;
    try {
      await policyManager.unbindRuleSet(policyName, name, { pluginIds: [pluginId] });
      await reload();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to remove the rule set.';
    } finally {
      busy = false;
    }
  }
</script>

<div class="rule-assignment">
  <p class="rule-assignment-hint">
    Assign rule sets to <strong>{pluginName}</strong>. To create or edit rule sets and rules, use
    &ldquo;Manage validation rules&rdquo; on the processes screen.
  </p>

  {#if error}
    <p class="rule-assignment-error" role="alert">{error}</p>
  {/if}

  <div class="rule-assignment-row">
    <OscdPanel backgroundColor="#DAE3E6" header={assignedHeader} content={assignedContent} />

    <div class="arrows-col">
      <OscdCompareArrowsIcon svgStyles="fill: #6B9197" />
      <p>Select rule sets to assign</p>
    </div>

    <OscdPanel backgroundColor="#DAE3E6" header={availableHeader} content={availableContent} />
  </div>
</div>

{#snippet assignedHeader()}
  <p class="panel-header-title">Assigned rule sets</p>
{/snippet}

{#snippet assignedContent()}
  {#if loading}
    <p class="rule-list-status">Loading&hellip;</p>
  {:else}
    <div class="rule-list">
      {#each assigned as ruleSet (ruleSet.name)}
        <OscdListItem variant="secondary">
          <div class="rule-item">
            <p class="rule-name">{ruleSet.name}</p>
            <button
              type="button"
              class="rule-remove-btn"
              aria-label={`Remove ${ruleSet.name}`}
              onclick={() => unassign(ruleSet.name)}
              disabled={busy}
            >
              <OscdRemoveIcon svgStyles="fill: #FF203A" />
            </button>
          </div>
        </OscdListItem>
      {:else}
        <p class="rule-list-status">No rule sets assigned yet.</p>
      {/each}
    </div>
  {/if}
{/snippet}

{#snippet availableHeader()}
  <div class="card-header">
    <p class="panel-header-title">Available rule sets</p>
    <div class="search-input">
      <SearchInput bind:value={searchTerm} label="Search rule sets" />
    </div>
  </div>
{/snippet}

{#snippet availableContent()}
  {#if loading}
    <p class="rule-list-status">Loading&hellip;</p>
  {:else}
    <div class="rule-list">
      {#each available as ruleSet (ruleSet.name)}
        <OscdListItem variant="secondary">
          <div class="rule-item">
            <p class="rule-name">{ruleSet.name}</p>
            <button
              type="button"
              class="rule-add-btn"
              aria-label={`Assign ${ruleSet.name} to ${pluginName}`}
              onclick={() => assign(ruleSet.name)}
              disabled={busy}
            >
              <OscdAddIcon svgStyles="fill: #fff; width: 16px; height: 16px;" />
            </button>
          </div>
        </OscdListItem>
      {:else}
        <p class="rule-list-status">Nothing to assign.</p>
      {/each}
    </div>
  {/if}
{/snippet}

<style>
  .rule-assignment {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .rule-assignment-hint {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--primary-base);
    margin: 0;
  }

  .rule-assignment-error {
    color: #b3261e;
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-small, 0.75rem);
    margin: 0;
  }

  .rule-assignment-row {
    display: flex;
    flex-direction: row;
    flex: 1;
    min-height: 0;
    align-items: stretch;
    gap: 16px;
    --oscd-panel-width: auto;
  }

  .rule-assignment-row > :global(.panel-parent) {
    flex: 1 1 0;
    min-width: 0;
    height: var(--oscd-panel-max-height, calc(100vh - 14rem));
  }

  .arrows-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    min-width: 200px;
  }

  .arrows-col p {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: #6b9197;
    margin: 0;
    text-align: center;
  }

  .card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .panel-header-title {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-heading, 1.125rem);
    font-weight: 600;
    color: var(--primary-base);
    margin: 0;
  }

  .search-input {
    max-width: 500px;
  }

  .rule-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .rule-list-status {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--primary-base);
    margin: 0;
  }

  .rule-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  .rule-name {
    margin: 0;
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: 600;
    color: var(--primary-base);
  }

  .rule-add-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-base);
    border: 0;
    padding: 3px;
    margin: 0;
    cursor: pointer;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    transition: opacity 0.15s ease;
  }

  .rule-add-btn:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  .rule-remove-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border-radius: 0.375rem;
    flex-shrink: 0;
  }

  .rule-remove-btn:hover:not(:disabled) {
    opacity: 0.9;
  }

  .rule-remove-btn:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
</style>
