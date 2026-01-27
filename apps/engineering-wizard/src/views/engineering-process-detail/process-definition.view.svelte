<script lang="ts">
  import PluginEditorPanel from '../../features/processes/components/panels/PluginEditorPanel.svelte';
  import { OscdCompareArrowsIcon } from '../../../../../libs/oscd-icons/src';
  import type { Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';
  import PluginExternalPanel from '../../features/processes/components/panels/PluginExternalPanel.svelte';
  import { corePlugins, selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { createPluginId } from '../../features/plugins/id';
  import { addPluginToProcess } from '../../features/processes/mutations.svelte';

  type Props = {
    pluginGroups?: PluginGroup[];
  };

  let {
    pluginGroups = [],
  }: Props = $props();

  let searchTerm = $state('');
  let filteredPlugins = $derived.by(() => {
    const compasPlugins = corePlugins.plugins;
    const allPlugins = compasPlugins.map((compasPlugin) => ({
    id: createPluginId(compasPlugin.name),
    name: compasPlugin.name,
    src: compasPlugin.src,
    type: 'internal'
  })) as Plugin[];

  const term = searchTerm.toLowerCase().trim();

  if (!term) return allPlugins;

  return allPlugins.filter((plugin) =>
    plugin.name.toLowerCase().includes(term)
  );
});

  function addPlugin(plugin: Plugin) {
    const processId = selectedEngineeringProcess.process.id;
    addPluginToProcess(processId, plugin);
  }
</script>

<div class="process-definition-view">
  <PluginEditorPanel
    {pluginGroups}
  />

  <div class="drag-and-drop-info">
    <OscdCompareArrowsIcon svgStyles="fill: #6B9197"></OscdCompareArrowsIcon>
    <p>SELECT OR DRAG & DROP PLUGINS</p>
  </div>

  <PluginExternalPanel plugins={filteredPlugins} bind:searchTerm onAddPlugin={addPlugin} />
</div>

<style>
  .process-definition-view {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
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
