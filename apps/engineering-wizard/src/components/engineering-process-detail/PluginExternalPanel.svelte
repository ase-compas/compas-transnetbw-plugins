<script lang="ts">
  import { OscdAddCircleIcon } from '../../../../../libs/oscd-icons/src';
  import type { Plugin } from '@oscd-transnet-plugins/shared';

  import { OscdListItem, OscdPanel } from '../../../../../libs/oscd-component/src';
  import { addPluginToProcessStore, selectedEngineeringProcessState } from '../../services/engineering-process.svelte';
  import Textfield from '@smui/textfield';
  import { OscdDragIndicatorIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { dragHandle, dragHandleZone, SHADOW_ITEM_MARKER_PROPERTY_NAME, TRIGGERS } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

  interface Props {
    plugins: Plugin[];
    searchTerm?: string;
  }

  let {
    plugins = [],
    searchTerm = $bindable(''),
  }: Props = $props();

  function addPluginToProcess(plugin: Plugin, processId: string) {
    addPluginToProcessStore(processId, plugin);
  }

  const handleDNDFinalize = (event) => {
    plugins = event.detail.items;
  };

  /**
   * Handles the consider event for the drag-and-drop zone.
   * Create a shadow element so the actual plugin never leaves this list.
   * @param e
   */
  const handleDNDConsider = (e) => {
    const { detail } = e;
    const { trigger, id } = detail.info;

    if (trigger === TRIGGERS.DRAG_STARTED) {
      const idx = plugins.findIndex(i => i.id === id);
      const newId = `${id}_copy`;
      e.detail.items = e.detail.items.filter(item => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME]);
      e.detail.items.splice(idx, 0, { ...plugins[idx], id: newId });
      plugins = e.detail.items;
    } else {
      plugins = [...plugins];
    }
  }
</script>

<OscdPanel backgroundColor="#DAE3E6" {header} {content}></OscdPanel>

{#snippet header()}
  <div class="card-header">
    <p class="header-info">Add External Plugins</p>
    <div class="search-input">
      <Textfield
        variant="outlined"
        label="Search Plugins"
        bind:value={searchTerm}
      />
    </div>
  </div>
{/snippet}

{#snippet content()}
  <div
    class="card-parent-content"
    use:dragHandleZone={{
      items: plugins,
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: true
    }}
    onconsider={handleDNDConsider}
    onfinalize={handleDNDFinalize}
  >
    {#each plugins as plugin (plugin.id)}
      <div
        data-id={plugin.id}
        animate:flip={{duration: 100}}
      >
        <OscdListItem variant="secondary">
          <div class="card-item-content">

            <div class="card-item-content__left">
              <div use:dragHandle aria-label="drag-handle">
                <OscdDragIndicatorIcon/>
              </div>

              <p class="plugin-name">{plugin.name}</p>
            </div>
            <button
              class="plugin-add-btn"
              onclick={() => addPluginToProcess(plugin, selectedEngineeringProcessState.process.id)}
            >
              <OscdAddCircleIcon svgStyles="fill: var(--brand);"></OscdAddCircleIcon>
            </button>
          </div>
        </OscdListItem>
      </div>
    {/each}
  </div>
{/snippet}
<style>
  .card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .header-info {
    font-weight: 500;
    color: var(--brand);
    font-size: 1.25rem;
    margin: 0;
  }

  .search-input {
    max-width: 500px;
  }

  .card-parent-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .card-item-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  .card-item-content__left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .plugin-name {
    margin: 0;
    font-weight: 500;
    color: var(--brand);
  }

  .plugin-add-btn {
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
</style>
