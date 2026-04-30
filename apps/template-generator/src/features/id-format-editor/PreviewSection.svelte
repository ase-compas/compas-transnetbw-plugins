<script>
  import Card from '@smui/card';
  import { getIdFormatEditorState } from './format-editor.state.svelte.ts';

  const state = getIdFormatEditorState();
</script>

<Card padded>
  <h3>Preview</h3>
  {#if state.previewIds.length === 0}
    <p>No ID format defined.</p>
  {:else}
    <ul>
      {#each state.previewIds as previewId}
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
