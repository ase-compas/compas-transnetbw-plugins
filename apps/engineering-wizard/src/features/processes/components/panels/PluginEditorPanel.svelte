<script lang="ts">
  import Button from '@smui/button';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdRemoveIcon } from '@oscd-transnet-plugins/oscd-icons';
  import PluginBasePanel from './PluginBasePanel.svelte';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';

  interface Props {
    pluginGroups?: PluginGroup[];
    selectedGroupTitle?: string | null;
    onRemoveOne: (pluginId: string) => void;
    onRemoveAll: () => void;
    onAddGroup: (name: string, position: number) => void;
    onUpdateGroups: (updatedGroups: PluginGroup[]) => void;
  }

  let { pluginGroups = [], selectedGroupTitle = $bindable<string | null>(null), onRemoveOne, onRemoveAll, onAddGroup, onUpdateGroups }: Props = $props();

  let showRemoveAll = $derived(pluginGroups.flatMap((g) => g.plugins ?? []).length > 0);

  async function handleRemoveAll() {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Remove all entries?',
      message: 'This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.',
      confirmActionText: 'Remove All',
      cancelActionText: 'Cancel',
      confirmActionColor: 'danger',
    });
    if (result.type === 'confirm') onRemoveAll();
  }
</script>

<PluginBasePanel
  {pluginGroups}
  bind:selectedGroupTitle
  {headerAction}
  {itemAction}
  {onAddGroup}
  onUpdateGroups={onUpdateGroups}
/>

{#snippet headerAction()}
  {#if showRemoveAll}
    <Button
      variant="raised"
      style="background-color: #FF203A"
      aria-label="Remove all plugins"
      onclick={handleRemoveAll}
    >
      Remove all
    </Button>
  {/if}
{/snippet}

{#snippet itemAction({ plugin })}
  <button
    type="button"
    class="plugin-list__removeBtn"
    aria-label={`Remove ${plugin.name}`}
    onclick={() => onRemoveOne(plugin.id)}
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

  .plugin-list__removeBtn:hover { opacity: 0.9; }

  .plugin-list__removeBtn:focus-visible {
    outline: 2px solid var(--danger);
    outline-offset: 2px;
  }
</style>

