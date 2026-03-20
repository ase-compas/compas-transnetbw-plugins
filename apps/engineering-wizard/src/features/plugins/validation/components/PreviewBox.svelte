<script lang="ts">
  interface Props { label: string; value: string }
  let { label, value }: Props = $props();
</script>

<div class="preview-box">
  <span class="preview-box__label">{label}</span>
  <pre class="preview-box__value">{value}</pre>
</div>

<style>
  .preview-box {
    background: #dae3e6;
    border-radius: 5px;
    padding: 0.75rem 1rem;
  }

  .preview-box__label {
    font-size: 0.95em;
    color: var(--base01, #586e75);
    margin-bottom: 0.5em;
    display: block;
  }

  .preview-box__value {
    margin: 0;
    color: var(--base03, #002b36);
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }
</style>
