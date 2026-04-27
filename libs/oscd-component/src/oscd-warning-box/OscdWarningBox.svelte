<script lang="ts">
  import { OscdWarningIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    children?: import('svelte').Snippet;
    message?: string;
  }

  let { children, message }: Props = $props();
</script>

<div class="warning-container">
  <div class="warning-text">
    <OscdWarningIcon fill="#B45309;" />
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
  .warning-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    background-color: #fffbeb;
    border: 1px solid #fcd34d;
    padding: 1rem;
    border-radius: 4px;
  }

  .warning-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .content {
    margin: 0;
  }

  .content :global(p) {
    margin: 0;
  }
</style>
