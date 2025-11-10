<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { OscdTooltip } from '../../../../../libs/oscd-component/src';
  import { OscdCheckIcon, OscdErrorIcon, OscdWarningIcon } from '../../../../../libs/oscd-icons/src';

  export type StepItem = { id: string; label: string };

  interface Props {
    items?: StepItem[];
    visited?: string[];
    currentId?: string | null;
    status?: Record<string, 'check' | 'warning' | 'error'>;
    tooltipMap?: Record<string, string>;
    onSelect?: (itemId: string) => void;
  }

  let {
    items = [],
    visited = [],
    currentId = null,
    status = {},
    tooltipMap = {},
    onSelect
  }: Props = $props();
</script>

<div class="steps">
  {#each items as item, i}
    <div class="step">
      <OscdTooltip content={tooltipMap[item.id] ?? ''} side="bottom">
        <button
          onclick={() => onSelect(item.id)}
          class:not-visited={!visited.includes(item.id)}
          class:current={item.id === currentId}
          class:visited={visited.includes(item.id) && item.id !== currentId}
          aria-current={item.id === currentId ? 'step' : undefined}
        >
          {#if visited.includes(item.id) && item.id !== currentId}
            {#if status[item.id] === 'check'}
              <OscdCheckIcon />
            {:else if status[item.id] === 'error'}
              <OscdErrorIcon />
            {:else if status[item.id] === 'warning'}
              <OscdWarningIcon />
            {:else}
              {i + 1}
            {/if}
          {:else}
            {i + 1}
          {/if}
        </button>
      </OscdTooltip>
      <p>{item.label}</p>
    </div>

    {#if i < items.length - 1}
      <div class="step-line" aria-hidden="true"></div>
    {/if}
  {/each}
</div>

<style>
  .steps {
    display: flex;
    gap: 0.5rem;
    justify-self: center;
    align-items: center;
  }

  .step {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 0.8rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  .step :global(button) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .step-line {
    width: 56px;
    height: 1px;
    background-color: #6B9197;
  }

  .step :global(button) {
    width: 2rem;
    height: 2rem;
    border: 1px solid transparent;
    border-radius: 50%;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  .step :global(button.not-visited) {
    background-color: #6B9197;
    color: #ffffff;
  }

  .step :global(button.current) {
    background-color: #D9D800;
    color: #004552;
  }

  .step :global(button.visited) {
    background-color: #ffffff;
    color: #004552;
  }
</style>

