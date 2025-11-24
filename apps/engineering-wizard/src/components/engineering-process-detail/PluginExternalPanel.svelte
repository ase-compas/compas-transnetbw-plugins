<script lang="ts">
  import { OscdAddCircleIcon } from '../../../../../libs/oscd-icons/src';
  import type { Plugin } from '@oscd-transnet-plugins/shared';

  import { OscdListItem, OscdPanel } from '../../../../../libs/oscd-component/src';
  import { addPluginToProcessStore, selectedProcessState } from '../../services/engineering-process.svelte';
  import Textfield from '@smui/textfield';

  interface Props {
    plugins: Plugin[];
    searchTerm?: string;
  }

  let {
    plugins = [],
    searchTerm = $bindable(''),
  }: Props = $props();

  function addPluginToProcess(plugin: Plugin, processId: string) {
    addPluginToProcessStore(processId, plugin);
  }
</script>

<OscdPanel backgroundColor="#DAE3E6" {header} {content}></OscdPanel>

{#snippet header()}
  <div class="card-header">
    <p class="header-info">Add External Plugins</p>
    <div class="search-input">
      <Textfield
        variant="outlined"
        label="Search Plugins"
        bind:value={searchTerm}
      />
    </div>
  </div>
{/snippet}

{#snippet content()}
  <div class="card-parent-content">
    {#each plugins as plugin}
      <OscdListItem variant="secondary">
        <div class="card-item-content">
          <p class="plugin-name">{plugin.name}</p>
          <button
            class="plugin-add-btn"
            onclick={() => addPluginToProcess(plugin, selectedProcessState.process.id)}
          >
            <OscdAddCircleIcon svgStyles="fill: var(--brand);"></OscdAddCircleIcon>
          </button>
        </div>
      </OscdListItem>
    {/each}
  </div>
{/snippet}
<style>
  .card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .header-info {
    font-weight: 500;
    color: var(--brand);
    font-size: 1.25rem;
    margin: 0;
  }

  .search-input {
    max-width: 500px;
  }

  .card-parent-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .card-item-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  .plugin-name {
    margin: 0;
    font-weight: 500;
    color: var(--brand);
  }

  .plugin-add-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border-radius: 0.375rem;
  }
</style>
