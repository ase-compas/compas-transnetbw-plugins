<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { OscdTooltip } from '../../../../../libs/oscd-component/src';
  import { OscdCheckIcon, OscdErrorIcon, OscdWarningIcon } from '../../../../../libs/oscd-icons/src';
  import StepCircle from './StepCircle.svelte';

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
          aria-current={item.id === currentId ? 'step' : undefined}
          class="step-button"
        >
          <StepCircle
            number={i + 1}
            active={item.id === currentId}
            visited={visited.includes(item.id) && item.id !== currentId}
            status={status[item.id]}
          />
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

  .step-line {
    width: 56px;
    height: 1px;
    background-color: #6B9197;
  }

  .step-button {
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

