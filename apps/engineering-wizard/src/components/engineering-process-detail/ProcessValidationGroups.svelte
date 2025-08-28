<script lang="ts">
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { createEventDispatcher } from 'svelte';

  export let pluginGroups: PluginGroup[] = [];
  const dispatch = createEventDispatcher();
</script>

<div class="validation-groups" role="list" aria-label="Validation groups">
  {#each pluginGroups as group}
    <div class="validation-groups__group">
      <span class="validation-groups__group-title">{group.title}</span>
      {#each group.plugins as plugin, idx}
        <div class="validation-groups__plugin" aria-current={idx === 0 ? 'true' : undefined}>
          <span>{plugin.name}</span>
        </div>
      {/each}
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
    color: var(--on-brand);
  }

  .validation-groups__group {
    display: flex;
    gap: 0.2rem;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 4px;
    background-color: var(--brand);
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

