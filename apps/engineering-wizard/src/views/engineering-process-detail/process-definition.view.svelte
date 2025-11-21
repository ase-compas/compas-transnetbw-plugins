<script lang="ts">
  import PluginEditorPanel from '../../components/engineering-process-detail/PluginEditorPanel.svelte';
  import { onMount } from 'svelte';
  import { OscdCompareArrowsIcon } from '../../../../../libs/oscd-icons/src';
  import { loadEditorPluginNamesFromLocalStorage } from '../../services/plugin.service';
  import type { LocalStoredPlugin, PluginGroup, Process } from '@oscd-transnet-plugins/shared';
  import PluginExternalPanel from '../../components/engineering-process-detail/PluginExternalPanel.svelte';
  import { compasPluginsStore } from '../../services/engineering-process.svelte';

  type Props = {
    pluginGroups?: PluginGroup[];
  };

  let {
    pluginGroups = [],
  }: Props = $props();

  let searchTerm = $state('');
</script>

<div class="process-definition-view">
  <PluginEditorPanel
    {pluginGroups}
  />

  {#if compasPluginsStore.compasPlugins.length}
    <div class="drag-and-drop-info">
      <OscdCompareArrowsIcon svgStyles="fill: #6B9197"></OscdCompareArrowsIcon>
      <p>SELECT OR DRAG & DROP PLUGINS</p>
    </div>

    <PluginExternalPanel bind:searchTerm />
  {/if}
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
