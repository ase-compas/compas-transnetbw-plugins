<script lang="ts">
  import { OscdAddCircleIcon } from '../../../../../libs/oscd-icons/src';

  export let pluginNames: string[];
  export let searchTerm: string = '';

  import { OscdCardItem, OscdCardParent, OscdInput } from '../../../../../libs/oscd-component/src';
</script>

<OscdCardParent backgroundColor="#DAE3E6">
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
    {#each pluginNames as name}
      <OscdCardItem variant="secondary">
        <div class="card-item-content">
          <p class="plugin-name">{name}</p>
          <OscdAddCircleIcon svgStyles="fill: var(--brand);"></OscdAddCircleIcon>
        </div>
      </OscdCardItem>
    {/each}
  </div>
</OscdCardParent>

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
</style>
