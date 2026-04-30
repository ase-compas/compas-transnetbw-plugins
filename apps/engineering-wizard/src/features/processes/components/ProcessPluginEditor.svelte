<script lang="ts">
  import type { Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdCompareArrowsIcon } from '@oscd-transnet-plugins/oscd-icons';
  import PluginEditorPanel from './panels/PluginEditorPanel.svelte';
  import PluginExternalPanel from './panels/PluginExternalPanel.svelte';
  import { getFilteredCorePlugins } from '../../plugins/filteredPlugins.svelte';

  interface Props {
    pluginGroups?: PluginGroup[];
    onRemoveOne: (pluginId: string) => void;
    onRemoveAll: () => void;
    onAddGroup: (name: string, position: number) => void;
    onUpdateGroups: (updatedGroups: PluginGroup[]) => void;
    onAddPlugin: (plugin: Plugin, groupTitle?: string) => void;
  }

  let {
    pluginGroups = [],
    onRemoveOne,
    onRemoveAll,
    onAddGroup,
    onUpdateGroups,
    onAddPlugin,
  }: Props = $props();

  let searchTerm = $state('');
  let filteredPlugins = $derived(getFilteredCorePlugins(searchTerm));

  let addedPluginIds = $derived(
    new Set(pluginGroups.flatMap((g) => g.plugins ?? []).map((p) => p.id))
  );
  let availablePlugins = $derived(filteredPlugins.filter((p) => !addedPluginIds.has(p.id)));

  let selectedGroupTitle = $state<string | null>(null);
</script>

<div class="plugin-editor-row">
  <PluginEditorPanel
    {pluginGroups}
    bind:selectedGroupTitle
    {onRemoveOne}
    {onRemoveAll}
    {onAddGroup}
    {onUpdateGroups}
  />

  <div class="arrows-col">
    <OscdCompareArrowsIcon svgStyles="fill: #6B9197" />
    <p>Select or drag &amp; drop plugins</p>
  </div>

  <PluginExternalPanel
    plugins={availablePlugins}
    bind:searchTerm
    {selectedGroupTitle}
    onAddPlugin={(plugin) => onAddPlugin(plugin, selectedGroupTitle ?? undefined)}
  />
</div>

<style>
  .plugin-editor-row {
    display: flex;
    flex-direction: row;
    flex: 1;
    min-height: 0;
    align-items: stretch;
    gap: 16px;

    /*
     * Override OscdPanel defaults to use flex-based width distribution.
     * Panel max-height is controlled per-view via --oscd-panel-max-height
     * (set on the parent .page / .edit-view so the user can easily adjust it).
     */
    --oscd-panel-width: auto;
  }

  /* Make OscdPanel roots flex items that fill available height */
  .plugin-editor-row > :global(.panel-parent) {
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
    color: #6B9197;
    margin: 0;
    text-align: center;
  }
</style>

