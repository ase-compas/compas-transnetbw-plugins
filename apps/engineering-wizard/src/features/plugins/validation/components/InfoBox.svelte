<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props { title?: string; children: Snippet }
  let { title, children }: Props = $props();
</script>

<div class="info-box">
  {#if title}<span class="info-box__title">{title}</span>{/if}
  {@render children()}
</div>

<style>
  .info-box {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.75rem 1rem;
    background: #e8f4f6;
    border: 1px solid #b2c7cb;
    border-radius: 5px;
    font-size: 0.875rem;
  }

  .info-box__title {
    font-weight: 600;
    color: var(--base03, #002b36);
  }
</style>
