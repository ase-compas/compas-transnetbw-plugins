<script lang="ts">
  import Textfield from '@smui/textfield';
  import { OscdListItem, OscdPanel } from '../../../../../libs/oscd-component/src';
  import { OscdAddCircleIcon } from '../../../../../libs/oscd-icons/src';
  import { OscdDragIndicatorIcon } from '@oscd-transnet-plugins/oscd-icons';
  import type { Plugin } from '@oscd-transnet-plugins/shared';
  import {
    dragHandle,
    dragHandleZone,
    SHADOW_ITEM_MARKER_PROPERTY_NAME,
    TRIGGERS
  } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

  interface Props {
    plugins: Plugin[];
    searchTerm?: string;

    /** Called when user clicks the + button */
    onAddPlugin?: (plugin: Plugin) => void;
  }

  let {
    plugins = [],
    searchTerm = $bindable(''),
    onAddPlugin = () => {}
  }: Props = $props();

  const handleDNDFinalize = (event) => {
    // keep list stable (same as your current panel)
    plugins = event.detail.items;
  };

  /**
   * Create a shadow element so the actual plugin never leaves this list.
   */
  const handleDNDConsider = (e) => {
    const { trigger, id } = e.detail.info;

    if (trigger === TRIGGERS.DRAG_STARTED) {
      const idx = plugins.findIndex(i => i.id === id);
      if (idx < 0) return;

      const newId = `${id}_copy`;

      // remove previous shadow items then insert a fresh copy at drag start index
      e.detail.items = e.detail.items.filter(item => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME]);
      e.detail.items.splice(idx, 0, { ...plugins[idx], id: newId });

      plugins = e.detail.items;
    } else {
      plugins = [...plugins];
    }
  };

  function handleAddClick(plugin: Plugin) {
    // If user clicks add on a *_copy item, map back to original id
    const originalId = plugin.id.endsWith('_copy') ? plugin.id.slice(0, -5) : plugin.id;

    // Prefer the original plugin object if it exists in the list
    const original = plugins.find(p => p.id === originalId) ?? { ...plugin, id: originalId };

    onAddPlugin(original);
  }
</script>

<OscdPanel backgroundColor="#DAE3E6" {header} {content} />

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
      <div data-id={plugin.id} animate:flip={{ duration: 100 }}>
        <OscdListItem variant="secondary">
          <div class="card-item-content">
            <div class="card-item-content__left">
              <div use:dragHandle aria-label="drag-handle">
                <OscdDragIndicatorIcon />
              </div>
              <p class="plugin-name">{plugin.name}</p>
            </div>

            <button
              class="plugin-add-btn"
              onclick={() => handleAddClick(plugin)}
              aria-label={`Add ${plugin.name}`}
            >
              <OscdAddCircleIcon svgStyles="fill: var(--brand);" />
            </button>
          </div>
        </OscdListItem>
      </div>
    {/each}
  </div>
{/snippet}

<style>
  .card-header { display:flex; justify-content:space-between; align-items:center; gap:8px; }
  .header-info { font-weight:500; color:var(--brand); font-size:1.25rem; margin:0; }
  .search-input { max-width:500px; }
  .card-parent-content { display:flex; flex-direction:column; gap:4px; }
  .card-item-content { display:flex; justify-content:space-between; align-items:center; gap:8px; width:100%; }
  .card-item-content__left { display:flex; align-items:center; gap:0.5rem; }
  .plugin-name { margin:0; font-weight:500; color:var(--brand); }
  .plugin-add-btn { display:inline-flex; align-items:center; justify-content:center; background:transparent; border:0; padding:0; margin:0; cursor:pointer; border-radius:0.375rem; }
</style>
