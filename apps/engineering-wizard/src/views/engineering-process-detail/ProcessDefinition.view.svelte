<script lang="ts">
  import PluginEditorPanel from '../../features/processes/components/panels/PluginEditorPanel.svelte';
  import { OscdCompareArrowsIcon } from '@oscd-transnet-plugins/oscd-icons';
  import type { Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';
  import PluginExternalPanel from '../../features/processes/components/panels/PluginExternalPanel.svelte';
  import { corePlugins, selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { createPluginId } from '../../features/plugins/id';
  import { addPluginToProcess } from '../../features/processes/mutations.svelte';

  type Props = {
    pluginGroups?: PluginGroup[];
  };

  let { pluginGroups = [] }: Props = $props();

  let searchTerm = $state('');

  let filteredPlugins = $derived.by(() => {
    const allPlugins = (corePlugins.plugins ?? []).map((p) => ({
      id: createPluginId(p.name),
      name: p.name,
      src: p.src,
      type: 'internal',
    })) as Plugin[];

    const term = searchTerm.toLowerCase().trim();
    if (!term) return allPlugins;
    return allPlugins.filter((p) => p.name.toLowerCase().includes(term));
  });

  function addPlugin(plugin: Plugin) {
    const proc = selectedEngineeringProcess.process;
    if (!proc) return;
    addPluginToProcess(proc.id, plugin);
  }
</script>

<div class="process-definition-view">
  <PluginEditorPanel {pluginGroups} />

  <div class="drag-and-drop-info">
    <OscdCompareArrowsIcon svgStyles="fill: #6B9197" />
    <p>SELECT OR DRAG &amp; DROP PLUGINS</p>
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

  .drag-and-drop-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    gap: 12px;
  }

  .drag-and-drop-info p {
    color: #6B9197;
    font-weight: 500;
  }
</style>
