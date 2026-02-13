<script>
import Card from '@smui/card';
import { getIdBuilderState } from './id-builder.state.svelte';

const idBuilderState = getIdBuilderState();

</script>


<Card class="id-builder-card">
  <h3>Preview</h3>
  {#if idBuilderState.previewIds.length === 0}
    <p>No ID format defined.</p>
  {:else}
    <ul>
      {#each idBuilderState.previewIds as previewId, index}
        <li>{previewId}</li>
      {/each}
    </ul>
  {/if}
</Card>


<style>
  li {
    overflow-wrap: break-word;
  }
</style>
