<script lang="ts">
  import type { PluginGroup, Plugin } from '@oscd-transnet-plugins/shared';

  interface Props {
    pluginGroups?: PluginGroup[];
    selectedGroupIndex?: number | null;
    selectedPluginIndex?: number | null;
    expandedGroupBackground?: string;
    expandedGroupBorderColor?: string;
    selectPlugin?: (plugin: Plugin) => void;
  }

  let {
    pluginGroups = [],
    selectedGroupIndex = $bindable<number | null>(null),
    selectedPluginIndex = $bindable<number | null>(null),
    expandedGroupBackground = 'var(--brand)',
    expandedGroupBorderColor = 'var(--brand)',
    selectPlugin
  }: Props = $props();

  $effect(() => {
    if (!pluginGroups?.length) {
      selectedGroupIndex = null;
      selectedPluginIndex = null;
      return;
    }

    if (selectedGroupIndex === null || selectedGroupIndex >= pluginGroups.length) {
      selectedGroupIndex = 0;
    }

    const group = pluginGroups[selectedGroupIndex];

    if (!group?.plugins?.length) {
      selectedPluginIndex = null;
      return;
    }

    if (selectedPluginIndex === null || selectedPluginIndex >= group.plugins.length) {
      selectedPluginIndex = 0;
    }
  });

  function onSelectGroup(groupIndex: number) {
    const group = pluginGroups[groupIndex];
    selectedGroupIndex = groupIndex;
    selectedPluginIndex = group?.plugins?.length ? 0 : null;

    const plugin = group.plugins[0];
    if (plugin) {
      selectPlugin(plugin);
    }
  }

  function onSelectPlugin(groupIndex: number, pluginIndex: number) {
    selectedGroupIndex = groupIndex;
    selectedPluginIndex = pluginIndex;

    const plugin = pluginGroups[groupIndex].plugins[pluginIndex];
    if (plugin) {
      selectPlugin(plugin);
    }
  }
</script>

<div
  class="validation-groups"
  style={`--expanded-group-bg:${expandedGroupBackground}; --expanded-group-border:${expandedGroupBorderColor};`}
>
  {#each pluginGroups as group, groupIndex}
    <div class="validation-groups__group" class:expanded={groupIndex === selectedGroupIndex}>
      <button
        type="button"
        class="validation-groups__group-title"
        onclick={() => onSelectGroup(groupIndex)}
      >
        {group.title}
      </button>

      {#if groupIndex === selectedGroupIndex}
        {#each group.plugins as plugin, pluginIndex}
          <button
            type="button"
            class="validation-groups__plugin"
            class:active={pluginIndex === selectedPluginIndex}
            onclick={() => onSelectPlugin(groupIndex, pluginIndex)}
          >
            <span>{plugin.name}</span>
          </button>
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

    --expanded-group-bg: var(--brand);
    --expanded-group-border: var(--brand);
  }

  .validation-groups__group {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 4px;

    background-color: white;
    border: 2px solid transparent;
  }

  .validation-groups__group.expanded {
    background-color: var(--expanded-group-bg);
    border-color: var(--expanded-group-border);
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

    border-radius: 2px;
  }

  .validation-groups__group.expanded .validation-groups__group-title {
    background-color: var(--brand);
    color: var(--on-brand);
  }

  .validation-groups__plugin {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    color: var(--brand);
    padding: 6px 1rem;
    background-color: white;
    border-radius: 2px;

    width: fit-content;
    min-width: 2rem;
    cursor: pointer;

    margin: 0;
    border: none;
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  .validation-groups__plugin.active {
    background-color: #d9d800;
  }
</style>
