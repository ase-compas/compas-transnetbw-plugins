<script lang="ts">
  import ProcessPluginGroupsEditor from '../../components/engineering-process-detail/ProcessPluginGroupsEditor.svelte';
  import { onMount } from 'svelte';
  import ProcessExternalPluginList from '../../components/engineering-process-detail/ProcessExternalPluginList.svelte';
  import { OscdCompareArrowsIcon } from '../../../../../libs/oscd-icons/src';
  import { loadEditorPluginNamesFromLocalStorage, type LocalStoredPlugin } from '../../services/plugin.service';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';

  export let pluginGroups: PluginGroup[] = [];

  let localStoredPlugins: LocalStoredPlugin[] = [];
  let searchTerm: string = '';
  $: filteredPlugins = (localStoredPlugins || []).filter(plugin => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return true;
    return plugin.name.toLowerCase().includes(q);
  });

  onMount(() => {
    localStoredPlugins = loadEditorPluginNamesFromLocalStorage();
  });
</script>

<div class="process-definition-view">
  <ProcessPluginGroupsEditor
    {pluginGroups}
    on:removeAllPlugins={(e) => console.log('remove all plugins', e)}
    on:removePlugin={(e) => console.log('remove one', e.detail)}
  />

  {#if localStoredPlugins.length}
    <div class="drag-and-drop-info">
      <OscdCompareArrowsIcon svgStyles="fill: #6B9197"></OscdCompareArrowsIcon>
      <p>SELECT OR DRAG & DROP PLUGINS</p>
    </div>

    <ProcessExternalPluginList plugins={filteredPlugins} bind:searchTerm />
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
