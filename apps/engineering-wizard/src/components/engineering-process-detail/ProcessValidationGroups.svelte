<script lang="ts">
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';

  export let pluginGroups: PluginGroup[] = [];

  let selectedIdx: number | null = null;
  $: if (pluginGroups?.length && (selectedIdx == null || selectedIdx >= pluginGroups.length)) {
    selectedIdx = 0;
  }
</script>

<div class="validation-groups" role="list" aria-label="Validation groups">
  {#each pluginGroups as group, gIdx}
    <div class="validation-groups__group" class:expanded={gIdx === selectedIdx}>
      <button
        style="font-weight: 600"
        type="button"
        class="validation-groups__group-title"
        aria-expanded={gIdx === selectedIdx}
        on:click={() => (selectedIdx = gIdx)}
      >
        {group.title}
      </button>

      {#if gIdx === selectedIdx}
        {#each group.plugins as plugin, idx}
          <div class="validation-groups__plugin" aria-current={idx === 0 ? 'true' : undefined}>
            <span>{plugin.name}</span>
          </div>
        {/each}
      {/if}
    </div>
  {/each}
</div>

<style>
  .validation-groups {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .validation-groups__group-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    padding: 0 8px;
    margin: 0;
    color: var(--brand);
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .validation-groups__group {
    display: flex;
    gap: 0.2rem;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 4px;
    background-color: white;
  }

  .validation-groups__group.expanded {
    background-color: var(--brand);
  }
  .validation-groups__group.expanded .validation-groups__group-title {
    color: var(--on-brand);
  }

  .validation-groups__plugin {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: var(--brand);
    padding: 6px;
    background-color: white;
    border-radius: 6px;
    width: fit-content;
    min-width: 2rem;
  }
</style>
