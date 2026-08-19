<script lang="ts">
  import { OscdLinkOffIcon, OscdRefreshIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    message?: string;
    onRetry?: () => void;
  }

  let { message = 'Failed to load the plugin.', onRetry }: Props = $props();
</script>

<div class="plugin-error">
  <OscdLinkOffIcon svgStyles="fill: var(--red); width: 32px; height: 32px;" />
  <span class="message">{message}</span>
  {#if onRetry}
    <button type="button" class="retry-btn" onclick={onRetry}>
      <OscdRefreshIcon svgStyles="fill: #fff; width: 14px; height: 14px;" />
      <span>Retry</span>
    </button>
  {/if}
</div>

<style>
  .plugin-error {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
  }

  .message {
    max-width: 32rem;
    font-size: 1rem;
    color: #333;
  }

  .retry-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: var(--primary-base, #4a7a7f);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
  }

  .retry-btn:hover {
    filter: brightness(1.1);
  }
</style>
