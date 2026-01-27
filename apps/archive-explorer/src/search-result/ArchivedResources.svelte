<script lang="ts">
  import { ArchiveSearchResult } from '@oscd-transnet-plugins/oscd-archive-explorer';
  import { OscdExpansionPanel } from '@oscd-transnet-plugins/oscd-component';
  import ResourceHistory from './resource-history/ResourceHistory.svelte';

  interface Props {
    searchResults?: ArchiveSearchResult[];
    noResourcesLabel?: string;
  }

  let { searchResults = [], noResourcesLabel = "No resources found." }: Props = $props();
</script>

<div class="result-container">
  <div class="content">
    {#if searchResults.length}
      {#each searchResults as searchResult (searchResult.uuid)}
        <OscdExpansionPanel title={searchResult.name} open={true}>
          {#snippet content()}
                    <span >
              <ResourceHistory {searchResult} />
            </span>
                  {/snippet}
        </OscdExpansionPanel>
        <br>
      {/each}
    {:else}
      <i>{noResourcesLabel}</i>
    {/if}
  </div>
</div>

<style lang="css">

</style>
