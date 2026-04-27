<script lang="ts">

  import { OscdCheckIcon, OscdErrorIcon, OscdWarningIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    number: number;
    active?: boolean;
    visited?: boolean;
    selected?: boolean;
    status?: 'check' | 'warning' | 'error';
  }

  const { number, active = false, visited = false, selected = false, status }: Props = $props();
</script>

<div class="step-circle {active ? 'active' : ''} {visited ? 'visited' : ''} {selected ? 'selected' : ''}">
  {#if selected}
    <OscdCheckIcon svgStyles="fill: var(--primary-base); width: 0.875rem; height: 0.875rem;" />
  {:else if visited && status}
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
    width: 1.375rem;
    height: 1.375rem;
    font-size: 0.65rem;
    font-family: Arial, sans-serif;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-weight: 600;
    flex-shrink: 0;
    transition: background-color 0.2s ease;
    background-color: rgb(from var(--base0) r g b / 0.8);
    color: white;
  }

  .step-circle.active {
    background-color: #D9D800;
    color: var(--primary-base);
  }

  .step-circle.visited {
    background-color: var(--white);
    color: var(--primary-base);
  }

  .step-circle.selected {
    background-color: var(--white);
    color: var(--primary-base);
  }
</style>
