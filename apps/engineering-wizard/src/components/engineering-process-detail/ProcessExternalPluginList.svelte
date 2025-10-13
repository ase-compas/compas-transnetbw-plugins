<script lang="ts">
  export let pluginNames: string[];

  import { OscdCardItem, OscdCardParent, OscdInput } from '../../../../../libs/oscd-component/src';
  let tst: string;
</script>

<OscdCardParent backgroundColor="#DAE3E6">
  <div class="card-header" slot="header">
    <p class="header-info">Add External Plugins</p>
    <div class="search-input">
      <OscdInput
        label="Search Plugins"
        icon="search"
        variant="outlined"
        bind:value={tst}
      />
    </div>
  </div>
  <div class="card-content" slot="content">
    {#each pluginNames as name}
      <OscdCardItem variant="secondary">
        <p class="plugin-name">{name}</p>
      </OscdCardItem>
    {/each}
  </div>
</OscdCardParent>
<style>
  .card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
  }

  .header-info {
    font-weight: 500;
    color: var(--brand);
    font-size: 24px;
    margin: 0;
  }

  .search-input {
    max-width: 500px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .plugin-name {
    margin: 0;
    font-weight: 500;
    color: var(--brand);
  }
</style>
