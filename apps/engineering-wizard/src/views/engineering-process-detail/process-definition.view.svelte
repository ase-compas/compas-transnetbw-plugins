<script lang="ts">
  import ProcessPluginGroupsEditor from '../../components/engineering-process-detail/ProcessPluginGroupsEditor.svelte';
  import { PluginGroup, Process } from 'libs/shared/src';
  import { onMount } from 'svelte';
  import ProcessExternalPluginList from '../../components/engineering-process-detail/ProcessExternalPluginList.svelte';

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
    // const pluginsStr = localStorage.getItem('plugins');
    // try {
    //   const plugins = pluginsStr ? JSON.parse(pluginsStr) : [];
    //   pluginNames = (Array.isArray(plugins) ? plugins : [])
    //     .filter(p => p?.kind === 'editor')
    //     .map(p => p?.name);
    // } catch (err) {
    //   console.error('Invalid JSON in localStorage key "plugins"', err);
    //   pluginNames = [];
    // }
  });
</script>

<div class="process-definition-view">
  <ProcessPluginGroupsEditor
    {pluginGroups}
    on:removeAllPlugins={(e) => console.log('remove all plugins', e)}
    on:removePlugin={(e) => console.log('remove one', e.detail)}
  />

  {#if pluginNames.length}
    <ProcessExternalPluginList pluginNames={filteredPluginNames} bind:searchTerm />
  {/if}

<!--  <div class="plugin-list">-->
<!--    <OscdCardItem variant="secondary" text="test"></OscdCardItem>-->
<!--    <OscdCardItem variant="secondary" text="test1"></OscdCardItem>-->
<!--    <OscdCardItem variant="secondary" text="test2"></OscdCardItem>-->
<!--  </div>-->
</div>


<style>
  .process-definition-view {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
