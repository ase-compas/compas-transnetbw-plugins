<script lang="ts">
  interface Props { label: string; value: string }
  let { label, value }: Props = $props();

  const isEmpty = $derived(!value?.trim());
</script>

<div class="preview-box">
  <span class="preview-box__label">{label}</span>
  {#if isEmpty}
    <p class="preview-box__empty">No preview generated yet — provide input first.</p>
  {:else}
    <pre class="preview-box__value">{value}</pre>
  {/if}
</div>

<style>
  .preview-box {
    background: #ffffff;
    border: 1px solid #dae3e6;
    border-radius: 5px;
    padding: 0.75rem 1rem;
  }

  .preview-box__label {
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--base01, #586e75);
    margin-bottom: 0.5em;
    display: block;
  }

  .preview-box__value {
    margin: 0;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--base03, #002b36);
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }

  .preview-box__empty {
    margin: 0;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--base1, #93a1a1);
    font-style: italic;
  }
</style>
