<script lang="ts">
  import SearchFilter from './features/search-filter/SearchFilter.svelte';
  import { OscdDataTable } from '@oscd-transnet-plugins/oscd-component';
  import Card from '@smui/card';
</script>

  <div class="version-editor-container">
    <div class="search-filter">
      <SearchFilter />
    </div>
    <div class="table-container">
      <Card style="padding: 1rem; width: 100%; height: 100%;">
        <h3 style="margin-bottom: 1rem;">Version Table</h3>
        <OscdDataTable />
      </Card>
    </div>
  </div>

<style lang="css">
  .version-editor-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .search-filter {
    width: 100%;
    height: auto;
  }

  .table-container {
    height: 100%;
    padding: 1rem;
  }


</style>
