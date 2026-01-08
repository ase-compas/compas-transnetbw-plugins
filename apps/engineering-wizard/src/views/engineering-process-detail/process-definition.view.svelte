<script lang="ts">
  import PluginEditorPanel from '../../components/engineering-process-detail/PluginEditorPanel.svelte';
  import { OscdCompareArrowsIcon } from '../../../../../libs/oscd-icons/src';
  import { createPluginId } from '../../services/plugin.service';
  import type { Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';
  import PluginExternalPanel from '../../components/engineering-process-detail/PluginExternalPanel.svelte';
  import { corePluginsState } from '../../services/engineering-process.svelte';

  type Props = {
    pluginGroups?: PluginGroup[];
  };

  let {
    pluginGroups = [],
  }: Props = $props();

  let searchTerm = $state('');
  let filteredPlugins = $derived.by(() => {
    const compasPlugins = corePluginsState.plugins;
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
</script>

<div class="process-definition-view">
  <PluginEditorPanel
    {pluginGroups}
  />

  <div class="drag-and-drop-info">
    <OscdCompareArrowsIcon svgStyles="fill: #6B9197"></OscdCompareArrowsIcon>
    <p>SELECT OR DRAG & DROP PLUGINS</p>
  </div>

  <PluginExternalPanel plugins={filteredPlugins} bind:searchTerm />
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
