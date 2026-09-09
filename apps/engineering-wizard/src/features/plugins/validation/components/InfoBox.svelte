<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="info-box">
  {@render children()}
</div>

<style>
  .info-box {
    background: #ffffff;
    border: 1px solid #dae3e6;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--base03, #002b36);
  }
</style>
