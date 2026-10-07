<script lang="ts">
  import Button, { Icon } from '@smui/button';
  import Card from '@smui/card';
  import Checkbox from '@smui/checkbox';

  import { OscdBadge } from '@oscd-transnet-plugins/oscd-component';
  import FormField from '@smui/form-field';
  import AppliedDefaultVersionRow from './AppliedDefaultVersionRow.svelte';
  import type { AppliedDefaultGroupRow as AppliedDefaultGroup } from '../state/apply-defaults-list.state.svelte';
  import { OscdInputCircleIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    group: AppliedDefaultGroup;
    onToggleGroupSelection: (groupId: string) => void;
    onToggleGroupExpanded: (groupId: string) => void;
    onToggleVersionSelection: (versionId: string) => void;
    onUpgradeGroup: (groupId: string) => void;
    onUpgradeVersion: (versionId: string) => void;
  }

  let {
    group,
    onToggleGroupSelection,
    onToggleGroupExpanded,
    onToggleVersionSelection,
    onUpgradeGroup,
    onUpgradeVersion,
  }: Props = $props();

  type BadgeType = 'success' | 'error' | 'warning';

  const statusBadge = $derived.by(() => {
    if (group.status === 'current') {
      return { type: 'success' as BadgeType, label: 'Current' };
    }

    if (group.status === 'outdated') {
      return { type: 'error' as BadgeType, label: 'Outdated' };
    }

    return { type: 'warning' as BadgeType, label: 'Unavailable' };
  });

  const updateButtonProps = $derived({
    disabled: group.outdatedCount === 0,
  });
</script>

<Card padded variant="outlined">
  <div class="applied-default-group__header">
    <div class="applied-default-group__header__left">
      <FormField>
        <Checkbox
          checked={group.checked}
          indeterminate={group.indeterminate}
          disabled={group.outdatedCount === 0}
          onchange={() => onToggleGroupSelection(group.id)}
        />
        {#snippet label()}
          <span class="applied-default-group__key">{group.label}</span>
        {/snippet}
      </FormField>
      <OscdBadge
        type={statusBadge.type}
        label={statusBadge.label}
        size="small"
      />
    </div>
    <div class="applied-default-group__header__right">
      <span>Versions: {group.versionCount}</span>
      <span>Outdated: {group.outdatedCount}</span>
      <span>Latest: {group.latestVersion ?? '-'}</span>
      <Button
        variant="outlined"
        onclick={() => onToggleGroupExpanded(group.id)}
      >
        {group.showVersions ? 'Hide Versions' : 'Show Versions'}
      </Button>
      <Button
        variant="outlined"
        {...updateButtonProps}
        onclick={() => onUpgradeGroup(group.id)}
      >
        <Icon>
          <OscdInputCircleIcon
            svgStyles="fill: currentColor; width: 18px; height: 18px; margin: 0;"
          />
        </Icon>
        Update Outdated
      </Button>
    </div>
  </div>

  {#if group.showVersions}
    <div class="applied-default-group__versions">
      <div class="applied-default-group__separator"></div>
      {#each group.versions as version (version.id)}
        <AppliedDefaultVersionRow
          row={version}
          onToggleSelection={onToggleVersionSelection}
          onUpgrade={onUpgradeVersion}
        />
      {/each}
    </div>
  {/if}
</Card>

<style>
  .applied-default-group__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .applied-default-group__header__left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .applied-default-group__header__right {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .applied-default-group__separator {
    height: 1px;
    background-color: #e0e0e0;
    margin: 0.5rem 0;
  }

  .applied-default-group__versions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .applied-default-group__key {
    font-size: var(--tg-font-size-body);
    font-weight: var(--tg-font-weight-heading);
  }
</style>
