<script lang="ts">
  import { SvelteUIProvider } from '@svelteuidev/core';
  import SearchFilter from './features/search-filter/SearchFilter.svelte';
</script>

<SvelteUIProvider themeObserver="light">
  <div class="version-editor-container">
    <div class="search-filter">
      <SearchFilter />
    </div>
    <div class="table-container">
      <h1>Table</h1>
    </div>
  </div>
</SvelteUIProvider>

<style lang="css">
  .version-editor-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .search-filter {
    width: 100%;
    height: 100%;
  }

  .table-container {

  }


</style>
