<script lang="ts">

  import { OscdCheckIcon, OscdErrorIcon, OscdWarningIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    number: number;
    active?: boolean;
    visited?: boolean;
    status?: 'check' | 'warning' | 'error';
  }

  const { number, active = false, visited = false, status }: Props = $props();
</script>

<div class="step-circle {active ? 'active' : ''} {visited ? 'visited' : ''}">
  {#if visited && status}
    {#if status === 'check'}
      <OscdCheckIcon />
    {:else if status === 'error'}
      <OscdErrorIcon />
    {:else if status === 'warning'}
      <OscdWarningIcon />
    {/if}
  {:else}
    {number}
  {/if}
</div>

<style>
  .step-circle {
    width: 2rem;
    height: 2rem;
    font-size: 0.8rem;
    font-family: Arial, sans-serif;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: background-color 0.2s ease;
    background-color: rgb(from var(--base0) r g b / 0.8);
    color: white;
  }

  .step-circle.active {
    background-color: var(--bright-yellow);
    color: var(--primary-base);
  }

  .step-circle.visited {
    background-color: var(--white);
    color: var(--primary-base);
  }
</style>
