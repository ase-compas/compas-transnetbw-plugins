<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="form-block-group">
  {@render children()}
</div>

<style>
  .form-block-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
