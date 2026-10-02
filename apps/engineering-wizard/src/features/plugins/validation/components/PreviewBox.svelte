<script lang="ts">
  import InfoBox from './InfoBox.svelte';

  interface Props { label: string; value: string }
  let { label, value }: Props = $props();

  const isEmpty = $derived(!value?.trim());
</script>

<InfoBox>
  <span class="preview-box__label">{label}</span>
  {#if isEmpty}
    <p class="preview-box__empty">No preview generated yet — provide input first.</p>
  {:else}
    <pre class="preview-box__value">{value}</pre>
  {/if}
</InfoBox>

<style>
  .preview-box__label {
    color: var(--base01, #586e75);
    margin-bottom: 0.5em;
    display: block;
  }

  .preview-box__value {
    margin: 0;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }

  .preview-box__empty {
    margin: 0;
    color: var(--base1, #93a1a1);
    font-style: italic;
  }
</style>
