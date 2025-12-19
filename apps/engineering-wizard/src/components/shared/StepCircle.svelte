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
    background-color: #6B9197;
    color: white;
  }

  .step-circle.active {
    background-color: #D9D800;
    color: #004552;
  }

  .step-circle.visited {
    background-color: #ffffff;
    color: #004552;
  }
</style>
