<script lang="ts">
  import SearchInput from '../../../../components/shared/SearchInput.svelte';
  import { OscdListItem, OscdPanel, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import { OscdAddIcon } from '@oscd-transnet-plugins/oscd-icons';
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
    selectedGroupTitle?: string | null;
    onAddPlugin?: (plugin: Plugin) => void;
  }

  let {
    plugins,
    searchTerm = $bindable(''),
    selectedGroupTitle = null,
    onAddPlugin = () => {}
  }: Props = $props();

  // Local copy for DND — avoids mutating a $derived prop which corrupts
  // Svelte 5's reactive graph and causes "Cannot read properties of undefined
  // (reading 'prev')" crashes.
  let localPlugins = $state<Plugin[]>([]);
  let isDragging = $state(false);

  // Sync from parent only when not mid-drag (drag has its own local mutations).
  $effect(() => {
    if (!isDragging) {
      localPlugins = [...plugins];
    }
  });

  const handleDNDConsider = (e: any) => {
    const { trigger, id } = e.detail.info;

    if (trigger === TRIGGERS.DRAG_STARTED) {
      isDragging = true;
      const idx = localPlugins.findIndex(i => i.id === id);
      if (idx < 0) return;

      const newId = `${id}_copy`;
      e.detail.items = e.detail.items.filter(
        (item: any) => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME]
      );
      e.detail.items.splice(idx, 0, { ...localPlugins[idx], id: newId });
    }

    localPlugins = e.detail.items;
  };

  const handleDNDFinalize = (e: any) => {
    localPlugins = e.detail.items;
    isDragging = false;
  };

  function normalizeOriginal(plugin: Plugin): Plugin {
    const originalId = plugin.id.endsWith('_copy') ? plugin.id.slice(0, -5) : plugin.id;
    return localPlugins.find(p => p.id === originalId) ?? { ...plugin, id: originalId };
  }

  function handleAddClick(plugin: Plugin) {
    onAddPlugin(normalizeOriginal(plugin));
  }

  /** Escape HTML special chars to safely embed a string in tooltip innerHTML content. */
  function escapeHtml(s: string): string {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  let addTooltip = $derived(
    selectedGroupTitle
      ? `Add to group &ldquo;${escapeHtml(selectedGroupTitle)}&rdquo;`
      : 'Select a group on the left panel first'
  );
</script>

<OscdPanel backgroundColor="#DAE3E6" {header} {content} />

{#snippet header()}
  <div class="card-header">
    <p class="header-info">Add External Plugins</p>
    <div class="search-input">
      <SearchInput bind:value={searchTerm} label="Search Plugins" />
    </div>
  </div>
{/snippet}

{#snippet content()}
  <div
    class="card-parent-content"
    use:dragHandleZone={{
      items: localPlugins,
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: true
    }}
    onconsider={handleDNDConsider}
    onfinalize={handleDNDFinalize}
  >
    {#each localPlugins as plugin (plugin.id)}
      <div data-id={plugin.id} animate:flip={{ duration: 100 }}>
        <OscdListItem variant="secondary">
          <div class="card-item-content">
            <div class="card-item-content__left">
              <div use:dragHandle aria-label="drag-handle">
                <OscdDragIndicatorIcon />
              </div>

              <p class="plugin-name">{plugin.name}</p>
            </div>

            <OscdTooltip content={addTooltip} side="left">
              <button
                class="plugin-add-btn"
                class:plugin-add-btn--active={!!selectedGroupTitle}
                onclick={() => handleAddClick(plugin)}
                disabled={!selectedGroupTitle}
                aria-label={selectedGroupTitle ? `Add ${plugin.name} to group ${selectedGroupTitle}` : `Add ${plugin.name} (select a group first)`}
              >
                <OscdAddIcon svgStyles="fill: #fff; width: 16px; height: 16px;" />
              </button>
            </OscdTooltip>
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
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-heading, 1.125rem);
    font-weight: var(--ew-font-weight-heading, 600);
    color: var(--primary-base);
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
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--primary-base);
  }

  .plugin-add-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--base1, #93a1a1);
    border: 0;
    padding: 3px;
    margin: 0;
    cursor: pointer;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    transition: background-color 0.15s ease, opacity 0.15s ease;
  }

  .plugin-add-btn--active {
    background: var(--primary-base);
    cursor: pointer;
  }

  .plugin-add-btn:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
</style>

