<script lang="ts">
  import PluginEditorPanel from '../../components/engineering-process-detail/PluginEditorPanel.svelte';
  import { onMount } from 'svelte';
  import { OscdCompareArrowsIcon } from '../../../../../libs/oscd-icons/src';
  import { loadEditorPluginNamesFromLocalStorage, type LocalStoredPlugin } from '../../services/plugin.service';
  import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';
  import PluginExternalPanel
    from '../../components/engineering-process-detail/PluginExternalPanel.svelte';

  type Props = {
    pluginGroups?: PluginGroup[];
    selectedProcess: Process;
  };

  let {
    pluginGroups = [],
    selectedProcess
  }: Props = $props();

  let localStoredPlugins = $state<LocalStoredPlugin[]>([]);
  let searchTerm = $state('');

  let filteredPlugins = $derived(
    (localStoredPlugins ?? []).filter((plugin) => {
      const q = searchTerm.trim().toLowerCase();
      if (!q) return true;
      return plugin.name.toLowerCase().includes(q);
    })
  );

  onMount(() => {
    localStoredPlugins = loadEditorPluginNamesFromLocalStorage();
  });
</script>

<div class="process-definition-view">
  <PluginEditorPanel
    {pluginGroups}
  />

  {#if localStoredPlugins.length}
    <div class="drag-and-drop-info">
      <OscdCompareArrowsIcon svgStyles="fill: #6B9197"></OscdCompareArrowsIcon>
      <p>SELECT OR DRAG & DROP PLUGINS</p>
    </div>

    <PluginExternalPanel plugins={filteredPlugins} {selectedProcess} bind:searchTerm />
  {/if}
</div>

<style>
  .process-definition-view {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .drag-and-drop-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    gap: 12px;
  }

  .drag-and-drop-info p{
    color: #6B9197;
    font-weight: 500;
  }
</style>
