<script lang="ts">
  import { OscdButton } from '@oscd-transnet-plugins/oscd-component';
  import type { Snippet } from 'svelte';


  interface Props {
    title: string;
    subtitle?: string | null;
    actionLabel?: string | null;
    hasAction?: boolean;
    botAction?: Snippet;

    onAction?: () => void;
  }

  let {
    title,
    subtitle = null,
    actionLabel = null,
    hasAction = false,
    botAction,

    onAction = () => {},
  }: Props = $props();
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
      >
        {actionLabel}
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
</style>
