<script lang="ts">
  import ProcessPluginGroupsEditor from '../../components/engineering-process-detail/ProcessPluginGroupsEditor.svelte';
  import { PluginGroup, Process } from 'libs/shared/src';
  import { onMount } from 'svelte';
  import ProcessExternalPluginList from '../../components/engineering-process-detail/ProcessExternalPluginList.svelte';
  import { OscdCompareArrowsIcon } from '../../../../../libs/oscd-icons/src';

  export let pluginGroups: PluginGroup[] = [];
  export let proc: Process | null = null;

  let pluginNames: string[] = ['test', 'test2'];
  let searchTerm: string = '';
  $: filteredPluginNames = (pluginNames || []).filter(name => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return true;
    return name.toLowerCase().includes(q);
  });

  onMount(() => {
    const pluginsStr = localStorage.getItem('plugins');
    try {
      const plugins = pluginsStr ? JSON.parse(pluginsStr) : [];
      pluginNames = (Array.isArray(plugins) ? plugins : [])
        .filter(p => p?.kind === 'editor')
        .map(p => p?.name);
    } catch (err) {
      console.error('Invalid JSON in localStorage key "plugins"', err);
      pluginNames = [];
    }
  });
</script>

<div class="process-definition-view">
  <ProcessPluginGroupsEditor
    {pluginGroups}
    on:removeAllPlugins={(e) => console.log('remove all plugins', e)}
    on:removePlugin={(e) => console.log('remove one', e.detail)}
  />

  {#if pluginNames.length}
    <div class="drag-and-drop-info">
      <OscdCompareArrowsIcon svgStyles="fill: #6B9197"></OscdCompareArrowsIcon>
      <p>SELECT OR DRAG & DROP PLUGINS</p>
    </div>

    <ProcessExternalPluginList pluginNames={filteredPluginNames} bind:searchTerm />
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
