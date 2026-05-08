<script lang="ts">
  import { Icon } from '@smui/common';

  interface Props {
    children?: import('svelte').Snippet;
    message?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    size?: 'default' | 'compact';
  }

  let { children, message, type = 'warning', size = 'default' }: Props = $props();

  const icons = {
    success: 'check_circle',
    error: 'error',
    info: 'info',
    warning: 'warning',
  } as const;

  const colors = {
    success: 'var(--oscd-status-success, #4CAF50)',
    error: 'var(--oscd-status-error, #F44336)',
    info: 'var(--oscd-status-info, #2196F3)',
    warning: 'var(--oscd-status-warning, #FF9800)',
  } as const;
</script>

<div class="box-container" class:compact={size === 'compact'} style="--color: {colors[type]}">
  <div class="box-content">
    <div class="icon">
      <Icon class="material-icons">{icons[type]}</Icon>
    </div>

    <div class="content">
      {#if message}
        <p>{message}</p>
      {:else if children}
        {@render children()}
      {/if}
    </div>
  </div>
</div>

<style>
  .box-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    background-color: color-mix(in srgb, var(--color) 12%, white);
    border: 1px solid color-mix(in srgb, var(--color) 45%, white);
    border-left: 4px solid var(--color);
    padding: 1rem;
    border-radius: 4px;
  }

  .box-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icon {
    color: var(--color);
    display: flex;
    align-items: center;
  }

  .content {
    margin: 0;
  }

  .content :global(p) {
    margin: 0;
  }

  .box-container.compact {
    gap: 0.25rem;
    padding: 0.5rem 0.75rem;
    border-left-width: 3px;
  }

  .box-container.compact :global(.icon) {
    font-size: 1rem;
  }

  .box-container.compact .content {
    font-size: 0.85rem;
  }

  .box-container.compact .box-content {
    gap: 0.35rem;
  }
</style>
