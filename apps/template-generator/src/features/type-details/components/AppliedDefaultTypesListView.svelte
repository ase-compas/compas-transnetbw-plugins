<script lang="ts">
  import type { DocState } from '../../../shared/states/doc.state.svelte';
  import AppliedDefaultGroupRow from './AppliedDefaultGroupRow.svelte';
  import Card from '@smui/card';
  import Button from '@smui/button';
  import CircularProgress from '@smui/circular-progress';
  import { OscdBox } from '@oscd-transnet-plugins/oscd-component';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import type {
    AppliedDefaultUpgradeTarget,
    DataTypeService,
  } from '../services/type.service';
  import { ApplyDefaultsListState } from '../state/apply-defaults-list.state.svelte';
  import type { AppliedDefaultVersionRow } from '../state/apply-defaults-list.state.svelte';
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';

  interface Props {
    docState: DocState;
    service: DataTypeService;
  }

  let { docState, service }: Props = $props();
  const listState = new ApplyDefaultsListState();

  const upgradeAllButtonProps = $derived({
    disabled: listState.outdatedVersionCount === 0,
  });

  const upgradeSelectedButtonProps = $derived({
    disabled: listState.selectedOutdatedCount === 0,
  });

  const hasSelectedOutdated = $derived(listState.selectedOutdatedCount > 0);

  function getOutdatedRows(): AppliedDefaultVersionRow[] {
    return listState.groups.flatMap((group) =>
      group.versions.filter((version) => version.selectable)
    );
  }

  function getSelectedOutdatedRows(): AppliedDefaultVersionRow[] {
    return listState.groups.flatMap((group) =>
      group.versions.filter((version) => version.selectable && version.checked)
    );
  }

  function toUpgradeTargets(rows: AppliedDefaultVersionRow[]): AppliedDefaultUpgradeTarget[] {
    return rows.map((row) => ({
      key: row.key,
      version: row.version,
      rootId: row.rootId,
    }));
  }

  async function runUpgradeBatch(sourceRows: AppliedDefaultVersionRow[]) {
    if (!docState?.doc || sourceRows.length === 0) {
      return;
    }

    const targets = toUpgradeTargets(sourceRows);

    try {
      const upgradedCount = await service.upgradeAppliedDefaultsBatch(targets);
      if (upgradedCount === 0) {
        toastService.info('Already up to date', 'No outdated defaults to update.');
        return;
      }

      toastService.success(
        'Defaults updated',
        `Updated ${upgradedCount} default version${upgradedCount === 1 ? '' : 's'}.`
      );
    } catch (error) {
      console.error('Failed to update applied defaults:', error);
      toastService.error('Update failed', 'Could not update applied defaults. Please try again.');
    }
  }

  async function prepareUpgradeAllOutdated() {
    const rows = getOutdatedRows();
    await runUpgradeBatch(rows);
  }

  async function prepareUpgradeSelected() {
    const rows = getSelectedOutdatedRows();
    await runUpgradeBatch(rows);
  }

  async function prepareUpgradeGroup(groupId: string) {
    const group = listState.groups.find((item) => item.id === groupId);
    if (!group) {
      return;
    }

    const rows = group.versions.filter((row) => row.selectable);
    await runUpgradeBatch(rows);
  }

  async function prepareUpgradeVersion(versionId: string) {
    for (const group of listState.groups) {
      const version = group.versions.find((row) => row.id === versionId);
      if (!version) {
        continue;
      }

      await runUpgradeBatch([version]);
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
          Update All Outdated ({listState.outdatedVersionCount})
        </Button>
        <Button
          variant={hasSelectedOutdated ? 'unelevated' : 'outlined'}
          {...upgradeSelectedButtonProps}
          onclick={prepareUpgradeSelected}
        >
          Update Selected ({listState.selectedOutdatedCount})
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
