<script>
  import Card from '@smui/card';
  import { getIdFormatEditorState } from './format-editor.state.svelte';

  const state = getIdFormatEditorState();
</script>

<Card class="id-builder-card">
  <h3>Preview</h3>
  {#if state.previewIds.length === 0}
    <p>No ID format defined.</p>
  {:else}
    <ul>
      {#each state.previewIds as previewId, index}
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
