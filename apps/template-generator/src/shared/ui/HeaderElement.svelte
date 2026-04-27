<script lang="ts">
  import type { Snippet } from "svelte";


  interface Props {
    label?: string;
    textOnly?: boolean;
    children?: Snippet;
  }

  let { label, textOnly = false, children }: Props = $props();

  let hasLabel = $derived(!!label);
</script>

<div class="header-element" class:no-label={!hasLabel}>
  {#if hasLabel}
    <div class="label">{label}</div>
  {/if}
  <div class="content" class:text-only={textOnly}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<style>
  .header-element {
    display: flex;
    flex-direction: column;
    row-gap: 0.3rem;
  }

  .header-element.no-label {
    justify-content: center;
  }

  .label {
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    font-size: 0.82rem;
    line-height: 1.2;
    font-weight: 600;
    color: #6f8c95;
    letter-spacing: 0.02em;
  }

  .content {
    display: flex;
    align-items: flex-start;
    line-height: 1.2;
  }

  .content.text-only {
    font-size: 1.10rem;
    line-height: 1.10;
    font-weight: 400;
    color: var(--primary,);
    letter-spacing: 0.004em;
  }
</style>
