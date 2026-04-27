<script lang="ts">
  import { OscdButton } from '@oscd-transnet-plugins/oscd-component';
  import { Label } from '@smui/button';
  import { OscdWandStarsIcon } from '@oscd-transnet-plugins/oscd-icons';
  import type { Snippet } from 'svelte';


  interface Props {
    title: string;
    subtitle?: string | null;
    actionLabel?: string | null;
    actionIcon?: string | null;
    actionDisabled?: boolean;
    hasAction?: boolean;
    botAction?: Snippet;

    onAction?: () => void;
  }

  let {
    title,
    subtitle = null,
    actionLabel = null,
    actionIcon = null,
    actionDisabled = false,
    hasAction = false,
    botAction,

    onAction = () => {},
  }: Props = $props();

  const isWandStarsIcon = $derived(
    actionIcon === 'wand-stars' ||
      actionIcon === 'wand_stars' ||
      actionLabel === 'Apply All Default Types'
  );
</script>

<div class="header-container">
  <div class="title-bar">
    <h3 class="title-main">
      {title}
      {#if subtitle}
        <span class="title-secondary">{subtitle}</span>
      {/if}
    </h3>

    <div class:invisible={!hasAction || !actionLabel}>
      <OscdButton
        callback={onAction}
        backgroundColor="white"
        disabled={actionDisabled}
      >
        {#if isWandStarsIcon}
          <span class="action-icon" aria-hidden="true">
            <OscdWandStarsIcon svgStyles="width: 20px; height: 20px; fill: currentColor;" />
          </span>
          <Label>{actionLabel}</Label>
        {:else}
          {actionLabel}
        {/if}
      </OscdButton>
    </div>
  </div>

  <div class="search-container">
    {@render botAction?.()}
  </div>
</div>



<style>
  .header-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-main {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--mdc-theme-primary);
  }

  .title-secondary {
    opacity: 0.6;
    font-weight: 500;
    margin-left: 0.5rem;
  }

  .search-container {
    transition: visibility 0.2s ease;
    display: flex;
    align-items: center;
    height: 70px;
  }

  .invisible {
    visibility: hidden;
  }

  .action-icon {
    display: inline-flex;
    align-items: center;
    margin-right: 0.25rem;
  }
</style>
