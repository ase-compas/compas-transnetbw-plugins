<script lang="ts">
  import { ArchiveSearchResult } from '@oscd-transnet-plugins/oscd-archive-explorer';
  import { OscdExpansionPanel } from '@oscd-transnet-plugins/oscd-component';
  import ResourceHistory from './resource-history/ResourceHistory.svelte';

  export let searchResults: ArchiveSearchResult[] = [];
</script>

<div class="result-container">
  <div class="content">
    {#if searchResults.length}
      {#each searchResults as searchResult (searchResult.uuid)}
        <OscdExpansionPanel title="{searchResult.name}">
          <span slot="content">
            <ResourceHistory {searchResult} />
          </span>
        </OscdExpansionPanel>
        <br>
      {/each}
    {:else}
      <i>No resources found.</i>
    {/if}
  </div>
</div>

<style lang="css">

</style>
