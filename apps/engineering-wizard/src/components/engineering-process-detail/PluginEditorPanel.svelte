<script lang="ts">
  import Button from '@smui/button';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdRemoveIcon } from '../../../../../libs/oscd-icons/src';
  import PluginBasePanel from './PluginBasePanel.svelte';
  import {
    addGroupToProcessStore,
    updateGroupsOfProcessStore,
    removeAllPluginsFromProcessStore,
    removePluginFromProcessStore,
    selectedProcessState,
  } from '../../services/engineering-process.svelte';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';

  interface Props {
    pluginGroups?: PluginGroup[];
  }

  let {
    pluginGroups = [],
  }: Props = $props();

  async function handleRemoveAll() {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Remove all entries?',
      message: 'This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.',
      confirmActionText: 'Remove All',
      cancelActionText: 'Cancel',
      confirmActionColor: 'danger'
    });

    if(result.type === 'confirm') {
      removeAllPluginsFromProcessStore(selectedProcessState.process.id);
    }
  }

  function handleRemoveOne(pluginId: string) {
    removePluginFromProcessStore(selectedProcessState.process.id, pluginId);
  }

  function handleAddGroup(name: string, position: number) {
    addGroupToProcessStore(selectedProcessState.process.id, name, position);
  }

  function handleUpdateGroups(updatedGroups: PluginGroup[]) {
    updateGroupsOfProcessStore(selectedProcessState.process.id, updatedGroups)
  }

  let showRemoveAll = $derived(pluginGroups.flatMap(g => g.plugins).length > 0)

</script>

<PluginBasePanel
  {pluginGroups}
  {headerAction}
  {itemAction}

  onAddGroup={(name, position) => handleAddGroup(name, position)}
  onUpdateGroups={(updatedGroups) => handleUpdateGroups(updatedGroups)}
/>

{#snippet headerAction()}
  {#if showRemoveAll}
    <Button
      style="background-color: #FF203A"
      variant="raised"
      aria-label="Remove all plugins"
      onclick={handleRemoveAll}
    >
      REMOVE ALL
    </Button>
  {/if}
{/snippet}

{#snippet itemAction({ plugin, groupIndex, pluginIndex })}
  <button
    type="button"
    class="plugin-list__removeBtn"
    aria-label={`Remove ${plugin.name}`}
    onclick={() => handleRemoveOne(plugin.id)}
  >
    <OscdRemoveIcon svgStyles="fill: #FF203A" />
  </button>
{/snippet}

<style>
  .plugin-list__removeBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border-radius: 0.375rem;
  }

  .plugin-list__removeBtn:hover {
    opacity: 0.9;
  }

  .plugin-list__removeBtn:focus-visible {
    outline: 2px solid var(--danger);
    outline-offset: 2px;
  }
</style>
