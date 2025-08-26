<script lang="ts">
  import { OscdTooltip } from '../../../../../libs/oscd-component/src';
  import { OscdCheckIcon, OscdErrorIcon, OscdWarningIcon } from '../../../../../libs/oscd-icons/src';
  import type { ViewPlugin } from '../../types/view-plugin';
  import { createEventDispatcher } from 'svelte';

  export let plugins: ViewPlugin[] = [];
  export let visited: string[] = [];
  export let currentId: string | null = null;
  export let pluginStatus: Record<string, 'check' | 'warning' | 'error'> = {};

  const dispatch = createEventDispatcher<{ select: ViewPlugin }>();

  $: tooltipText = plugins.reduce<Record<string, string>>((map, p) => {
    const status = pluginStatus[p.id];
    map[p.id] = status ?? '';
    return map;
  }, {});
</script>

<div class="plugin-steps">
  {#each plugins as plugin, i}
    <div class="plugin-step">
      <OscdTooltip content={tooltipText[plugin.id]} side="bottom">
        <button
          on:click={() => dispatch('select', plugin)}
          class:not-visited={!visited.includes(plugin.id)}
          class:current={plugin.id === currentId}
          class:visited={visited.includes(plugin.id) && plugin.id !== currentId}
        >
          {#if visited.includes(plugin.id) && plugin.id !== currentId}
            {#if pluginStatus[plugin.id] === 'check'}
              <OscdCheckIcon />
            {:else if pluginStatus[plugin.id] === 'error'}
              <OscdErrorIcon />
            {:else}
              <OscdWarningIcon />
            {/if}
          {:else}
            {i + 1}
          {/if}
        </button>
      </OscdTooltip>
      <p>{plugin.name}</p>
    </div>

    {#if i < plugins.length - 1}
      <div class="plugin-step-line"></div>
    {/if}
  {/each}
</div>

<style>
  .plugin-steps {
    display: flex;
    gap: 0.5rem;
    justify-self: center;
    align-items: center;
  }

  .plugin-step {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 0.8rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  .plugin-step :global(button) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .plugin-step-line {
    width: 56px;
    height: 1px;
    background-color: #6B9197;
  }

  .plugin-step :global(button) {
    width: 2rem;
    height: 2rem;
    border: 1px solid transparent;
    border-radius: 50%;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  .plugin-step :global(button.not-visited) {
    background-color: #6B9197;
    color: #ffffff;
  }

  .plugin-step :global(button.current) {
    background-color: #D9D800;
    color: #004552;
  }

  .plugin-step :global(button.visited) {
    background-color: #ffffff;
    color: #004552;
  }
</style>

