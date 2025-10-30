<script lang="ts">
  import { OscdAddCircleIcon } from '../../../../../libs/oscd-icons/src';

  export let plugins: LocalStoredPlugin[];
  export let searchTerm: string = '';

  import { OscdListItem, OscdPanel, OscdInput } from '../../../../../libs/oscd-component/src';
  import type { LocalStoredPlugin } from '../../services/plugin.service';

  function addPluginToProcess(plugin: LocalStoredPlugin) {
    // Placeholder function for adding a plugin
    console.log('Add plugin clicked', plugin);
  }
</script>

<OscdPanel backgroundColor="#DAE3E6">
  <div class="card-header" slot="header">
    <p class="header-info">Add External Plugins</p>
    <div class="search-input">
      <OscdInput
        label="Search Plugins"
        icon="search"
        variant="outlined"
        bind:value={searchTerm}
      />
    </div>
  </div>
  <div class="card-parent-content" slot="content">
    {#each plugins as plugin}
      <OscdListItem variant="secondary">
        <div class="card-item-content">
          <p class="plugin-name">{plugin.name}</p>
          <button
            class="plugin-add-btn"
            on:click={() => addPluginToProcess(plugin)}>
            <OscdAddCircleIcon svgStyles="fill: var(--brand);"></OscdAddCircleIcon>
          </button>
        </div>
      </OscdListItem>
    {/each}
  </div>
</OscdPanel>

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
