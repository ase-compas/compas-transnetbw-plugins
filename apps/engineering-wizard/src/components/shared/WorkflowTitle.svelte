<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    onClick?: () => void;
    processName?: string;
  }

  const { onClick, processName }: Props = $props();
  const titleText = $derived(
    processName ? `Engineering Wizard / ${processName}` : 'Engineering Wizard',
  );

  let button: HTMLButtonElement;
  let fullTitle: HTMLSpanElement;
  let compact = $state(false);

  onMount(() => {
    const update = () => {
      compact = button.clientWidth < fullTitle.offsetWidth;
    };
    const observer = new ResizeObserver(update);
    observer.observe(button);
    observer.observe(fullTitle);
    update();

    return () => observer.disconnect();
  });
</script>

<button
  bind:this={button}
  class="btn-engineering-wizard_title"
  onclick={onClick}
  title={titleText}
>
  <span
    bind:this={fullTitle}
    class="full-title"
    class:hidden={compact && !!processName}
    aria-hidden={compact && !!processName}
  >{titleText}</span>
  {#if compact && processName}
    <span class="compact-title">{processName}</span>
  {/if}
</button>

<style>
  .btn-engineering-wizard_title  {
    position: relative;
    min-width: 0;
    flex: 0 1 auto;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    color: var(--oscd-plugin-on-brand);
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-heading, 1.125rem);
    font-weight: var(--ew-font-weight-heading, 600);
  }

  .full-title {
    display: block;
    width: max-content;
  }

  /* Keep the full width measurable so collapsing the title cannot toggle it back. */
  .full-title.hidden {
    visibility: hidden;
  }

  .compact-title {
    position: absolute;
    inset: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
