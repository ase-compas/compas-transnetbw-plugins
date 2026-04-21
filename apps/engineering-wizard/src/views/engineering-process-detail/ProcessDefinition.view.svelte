<script lang="ts">
  import PluginEditorPanel from '../../features/processes/components/panels/PluginEditorPanel.svelte';
  import { OscdCompareArrowsIcon } from '@oscd-transnet-plugins/oscd-icons';
  import type { Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';
  import PluginExternalPanel from '../../features/processes/components/panels/PluginExternalPanel.svelte';
  import { selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import {
    addPluginToProcess,
    removePluginFromProcess,
    removeAllPluginsFromProcess,
    addGroupToProcess,
    updateGroupsOfProcess,
  } from '../../features/processes/mutations.svelte';
  import { getFilteredCorePlugins } from '../../features/plugins/filteredPlugins.svelte';

  type Props = { pluginGroups?: PluginGroup[] };
  let { pluginGroups = [] }: Props = $props();

  let searchTerm = $state('');
  let filteredPlugins = $derived(getFilteredCorePlugins(searchTerm));

  function procId() { return selectedEngineeringProcess.process?.id ?? ''; }
</script>

<div class="process-definition-view">
  <PluginEditorPanel
    {pluginGroups}
    onRemoveOne={(id) => removePluginFromProcess(procId(), id)}
    onRemoveAll={() => removeAllPluginsFromProcess(procId())}
    onAddGroup={(name, pos) => addGroupToProcess(procId(), name, pos)}
    onUpdateGroups={(groups) => updateGroupsOfProcess(procId(), groups)}
  />

  <div class="drag-and-drop-info">
    <OscdCompareArrowsIcon svgStyles="fill: #6B9197" />
    <p>SELECT OR DRAG &amp; DROP PLUGINS</p>
  </div>

  <PluginExternalPanel
    plugins={filteredPlugins}
    bind:searchTerm
    onAddPlugin={(p) => addPluginToProcess(procId(), p)}
  />
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
