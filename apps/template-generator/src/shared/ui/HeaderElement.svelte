<script lang="ts">
  import type { Snippet } from "svelte";


  interface Props {
    label?: string;
    textOnly?: boolean;
    contentLayout?: 'top' | 'center' | 'bottom';
    children?: Snippet;
  }

  let { label, textOnly = false, contentLayout = 'bottom', children }: Props = $props();

  let hasLabel = $derived(!!label);
</script>

<div class="header-element" class:no-label={!hasLabel}>
  {#if hasLabel}
    <div class="label">{label}</div>
  {/if}
  <div
    class="content"
    class:text-only={textOnly}
    class:align-top={contentLayout === 'top'}
    class:align-center={contentLayout === 'center'}
    class:align-bottom={contentLayout === 'bottom'}
  >
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
    height: 100%;
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
    flex: 1;
    line-height: 1.2;
  }

  .content.align-top {
    align-items: flex-start;
  }

  .content.align-center {
    align-items: center;
  }

  .content.align-bottom {
    align-items: flex-end;
  }

  .content.text-only {
    font-size: 1.10rem;
    line-height: 1.10;
    font-weight: 400;
    color: var(--primary,);
    letter-spacing: 0.004em;
  }
</style>
