<script lang="ts">
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';

  export let pluginGroups: PluginGroup[] = [];

  let selectedIdx: number | null = null;
  let activePluginIdx: number | null = null;

  $: currentGroup = selectedIdx != null ? pluginGroups[selectedIdx] : null;
  $: currentPlugin =
    currentGroup && activePluginIdx != null ? currentGroup.plugins[activePluginIdx] : null;

  $: if (pluginGroups?.length && (selectedIdx == null || selectedIdx >= pluginGroups.length)) {
    selectedIdx = 0;
    activePluginIdx = pluginGroups[0]?.plugins?.length ? 0 : null;
  }

  function selectGroup(gIdx: number) {
    const group = pluginGroups[gIdx];
    const changed = gIdx !== selectedIdx;

    selectedIdx = gIdx;
    activePluginIdx = group?.plugins?.length ? 0 : null;

    console.log(changed ? 'Group selected:' : 'Group reselected:', group?.title);

    if (activePluginIdx != null) {
      const plugin = group.plugins[0];
      console.log('Active plugin changed:', { group: group?.title, plugin });
    } else {
      console.log('No plugins in selected group.');
    }
  }

  function selectPlugin(gIdx: number, pIdx: number) {
    const group = pluginGroups[gIdx];
    const plugin = group?.plugins?.[pIdx];

    console.log('Active plugin clicked:', { group: group?.title, plugin });
  }
</script>

<div class="validation-groups">
  {#each pluginGroups as group, gIdx}
    <div class="validation-groups__group" class:expanded={gIdx === selectedIdx}>
      <button
        type="button"
        class="validation-groups__group-title"
        aria-pressed={gIdx === selectedIdx}
        on:click={() => selectGroup(gIdx)}
      >
        {group.title}
      </button>

      {#if gIdx === selectedIdx}
        {#each group.plugins as plugin, idx}
          <button
            type="button"
            class="validation-groups__plugin"
            class:active={gIdx === selectedIdx && idx === activePluginIdx}
            on:click={() => selectPlugin(gIdx, idx)}
          >
            <span>{plugin.name}</span>
          </button>
        {/each}
      {/if}
    </div>
  {/each}
</div>
<!--<p>{currentGroup.title}</p>-->
<!--<p>{currentPlugin.name}</p>-->

<style>
  .validation-groups {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }
  .validation-groups__group {
    display: flex;
    align-items: center;
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
  .validation-groups__group-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    padding: 0 8px;
    margin: 0;
    color: var(--brand);
    cursor: pointer;
    user-select: none;
    background: transparent;
    border: none;
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }
  .validation-groups__plugin {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: var(--brand);
    padding: 6px 1rem;
    background-color: white;
    border-radius: 6px;
    width: fit-content;
    min-width: 2rem;
    cursor: pointer;
    margin: 0;
    border: none;
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }
  .validation-groups__plugin.active {
    background-color: #D9D800;
  }
</style>
