<script lang="ts">
  import type { DocState } from '../../../shared/states/doc.state.svelte';
  import AppliedDefaultGroupRow from './AppliedDefaultGroupRow.svelte';
  import Card from '@smui/card';
  import Button from '@smui/button';
  import CircularProgress from '@smui/circular-progress';
  import { OscdBox } from '@oscd-transnet-plugins/oscd-component';
  import { ApplyDefaultsListState } from '../state/apply-defaults-list.state.svelte';
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';

  interface Props {
    docState: DocState;
  }

  let { docState }: Props = $props();
  const listState = new ApplyDefaultsListState();

  const upgradeAllButtonProps = $derived({
    disabled: listState.outdatedVersionCount === 0,
  });

  const upgradeSelectedButtonProps = $derived({
    disabled: listState.selectedOutdatedCount === 0,
  });

  const hasSelectedOutdated = $derived(listState.selectedOutdatedCount > 0);

  function prepareUpgradeAllOutdated() {
    const payload = listState.getAllOutdatedUpgradeInfos();
    void payload;
  }

  function prepareUpgradeSelected() {
    const payload = listState.getSelectedUpgradeInfos();
    void payload;
  }

  function prepareUpgradeGroup(groupId: string) {
    const group = listState.groups.find((item) => item.id === groupId);
    if (!group) {
      return;
    }

    const payload = group.versions
      .filter((row) => row.selectable)
      .map((row) => ({ key: row.key, version: row.version }));
    void payload;
  }

  function prepareUpgradeVersion(versionId: string) {
    for (const group of listState.groups) {
      const version = group.versions.find((row) => row.id === versionId);
      if (!version) {
        continue;
      }

      const payload = [{ key: version.key, version: version.version }];
      void payload;
      return;
    }
  }

  $effect(() => {
    // reload on edits
    if (docState && docState.doc && docState.editCount > -1) {
      void listState.load(docState.doc);
    }
  });
</script>

<div class="applied-defaults-list-view">
  <Card padded variant="outlined">
    <div class="action-header">
      <div class="action-buttons">
        <Button
          variant="outlined"
          {...upgradeAllButtonProps}
          onclick={prepareUpgradeAllOutdated}
        >
          Upgrade All Outdated ({listState.outdatedVersionCount})
        </Button>
        <Button
          variant={hasSelectedOutdated ? 'unelevated' : 'outlined'}
          {...upgradeSelectedButtonProps}
          onclick={prepareUpgradeSelected}
        >
          Upgrade Selected ({listState.selectedOutdatedCount})
        </Button>
        <Button
          variant="outlined"
          {...upgradeSelectedButtonProps}
          onclick={() => listState.clearSelection()}
        >
          Clear Selection
        </Button>
      </div>
      <FormField align="end">
        {#snippet label()}
          <span>Show Outdated Only</span>
        {/snippet}
        <Switch bind:checked={listState.showOutdatedOnly} />
      </FormField>
    </div>
  </Card>

  <div class="applied-defaults-list">
    {#if listState.loading}
      <Card padded variant="outlined">
        <div class="loading-state">
          <CircularProgress style="height: 24px; width: 24px;" indeterminate />
          <span>Loading applied defaults...</span>
        </div>
      </Card>
    {:else if listState.error}
      <Card padded variant="outlined">
        <OscdBox type="error" message={listState.error} />
      </Card>
    {:else if listState.filteredGroups.length === 0}
      <Card padded variant="outlined">No applied defaults found.</Card>
    {:else}
      {#each listState.filteredGroups as group (group.id)}
        <AppliedDefaultGroupRow
          {group}
          onToggleGroupSelection={(groupId) => listState.toggleGroup(groupId)}
          onToggleGroupExpanded={(groupId) =>
            listState.toggleGroupExpanded(groupId)}
          onToggleVersionSelection={(versionId) =>
            listState.toggleVersion(versionId)}
          onUpgradeGroup={prepareUpgradeGroup}
          onUpgradeVersion={prepareUpgradeVersion}
        />
      {/each}
    {/if}
  </div>
</div>

<style>
  .action-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
  }

  .applied-defaults-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .loading-state {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
