<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    label?: string;
    bold?: boolean;
    aside?: Snippet;
    children?: Snippet;
  }

  let { label, bold = false, aside, children }: Props = $props();
</script>

<div class="form-block">
  {#if label || aside}
    <div class="form-block__header">
      {#if label}
        <p class="form-block__label" class:form-block__label--bold={bold}>{label}</p>
      {/if}
      {@render aside?.()}
    </div>
  {/if}
  {@render children?.()}
</div>

<style>
  .form-block {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-block__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .form-block__label {
    margin: 0;
    font-size: var(--ew-font-size-body);
    color: var(--base01);
  }

  .form-block__header .form-block__label {
    flex: 1;
  }

  .form-block__label--bold {
    font-weight: var(--ew-font-weight-medium);
    color: var(--base00);
  }
</style>
