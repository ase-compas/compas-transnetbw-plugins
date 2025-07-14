<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export interface Breadcrumb {
    label: string;
    secondaryLabel?: string;
    enabled?: boolean;
  }

  export let breadcrumbs: Breadcrumb[] = [];
  export let activeIndex: number = 0;

  const dispatch = createEventDispatcher();


  const handleClick = (index: number) => {
    if (breadcrumbs[index].enabled && index !== activeIndex) {
      dispatch('click', { index });
    }
  };
</script>

<div class="oscd-breadcrumbs">
  {#each breadcrumbs as crumb, i}
    <div class="breadcrumb-wrapper">
      <span
        class="breadcrumb {crumb.enabled ? '' : 'br-disabled'} {i === activeIndex ? 'br-active' : ''}"
        on:click={() => handleClick(i)}
        aria-current={i === activeIndex ? 'page' : undefined}
      >
        <span class="label">{crumb.label}</span>
        {#if crumb.secondaryLabel}
          <span class="secondary-label">{crumb.secondaryLabel}</span>
        {/if}
      </span>

      {#if i < breadcrumbs.length - 1}
        <span class="material-icons separator">chevron_right</span>
      {/if}
    </div>
  {/each}
</div>

<style>
  .oscd-breadcrumbs {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .breadcrumb-wrapper {
    display: flex;
    align-items: center;
  }

  .breadcrumb {
    cursor: pointer;
    border: none;
    font-size: 1.3rem;
    display: flex;
    align-items: baseline;
    color: var(--mdc-theme-primary);
    gap: 0.3rem;
  }

  .breadcrumb:not(.br-disabled):not(.br-active) {
    opacity: 0.8;
  }

  .breadcrumb:not(.br-disabled):not(.br-active):hover .label {
    text-decoration: underline;
  }

  .label,
  .secondary-label {
    line-height: 1.4;
  }

  .secondary-label {
    font-size: 1em;
    color: var(--mdc-theme-primary);
    opacity: 0.6;
  }

  .secondary-label, .br-active {
    font-weight: 500;
  }

  .br-disabled {
    cursor: default;
    pointer-events: none;
  }

  .br-active {
    font-weight: bold;
  }

  .separator {
    font-size: 1.1rem;
    color: var(--mdc-theme-primary);
    opacity: 0.7;
    margin: 0 0.25rem;
    display: flex;
    align-items: center;
  }
</style>
