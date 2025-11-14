<script lang="ts">
  import OscdChevronRightIcon from '../../../oscd-icons/src/oscd-chevron-right-icon/OscdChevronRightIcon.svelte';

  export interface Breadcrumb {
    label: string;
    secondaryLabel?: string;
    enabled?: boolean;
  }

  interface Props {
    breadcrumbs?: Breadcrumb[];
    activeIndex?: number;
    handleClick?: (index: number) => void;
  }

  let {
    breadcrumbs = [],
    activeIndex = 0,
    handleClick,
  }: Props = $props();

  const handleCrumbClick = (index: number) => {
    const crumb = breadcrumbs[index];

    if (!crumb?.enabled || index === activeIndex) return;

    handleClick?.(index);
  };
</script>

<nav class="oscd-breadcrumbs" aria-label="Breadcrumb">
  {#each breadcrumbs as crumb, index}
    <div class="breadcrumb-wrapper">
      <button
        type="button"
        class="breadcrumb"
        class:br-disabled={!crumb.enabled}
        class:br-active={index === activeIndex}
        onclick={() => handleCrumbClick(index)}
        aria-current={index === activeIndex ? 'page' : undefined}
      >
        <span class="label">{crumb.label}</span>
        {#if crumb.secondaryLabel}
          <span class="secondary-label">{crumb.secondaryLabel}</span>
        {/if}
      </button>

      {#if index < breadcrumbs.length - 1}
        <OscdChevronRightIcon svgStyles="fill: #004552" />
      {/if}
    </div>
  {/each}
</nav>

<style>
  .oscd-breadcrumbs {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .breadcrumb-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .breadcrumb {
    display: flex;
    align-items: baseline;
    font-size: 1.3rem;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
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
    opacity: 0.6;
    font-weight: 500;
  }

  .br-disabled {
    cursor: default;
    pointer-events: none;
  }

  .br-active {
    font-weight: 700;
  }
</style>
