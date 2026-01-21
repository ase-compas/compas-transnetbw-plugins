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
    selectedGroupIndex = $bindable<number>(0),
    selectedPluginIndex = $bindable<number>(0),
    expandedGroupBackground = 'var(--brand)',
    expandedGroupBorderColor = 'var(--brand)',
    selectPlugin
  }: Props = $props();

  let lastSelectedPluginId: string | null = null;

  $effect(() => {
    if (!pluginGroups?.length) {
      selectedGroupIndex = null;
      selectedPluginIndex = null;
      lastSelectedPluginId = null;
      return;
    }

    let groupIdx = selectedGroupIndex ?? 0;
    if (groupIdx < 0 || groupIdx >= pluginGroups.length) groupIdx = 0;

    let group = pluginGroups[groupIdx];
    if (!group?.plugins?.length) {
      const withPluginsIndex = pluginGroups.findIndex((g) => g?.plugins?.length);
      if (withPluginsIndex === -1) {
        selectedGroupIndex = groupIdx;
        selectedPluginIndex = null;
        lastSelectedPluginId = null;
        return;
      }
      groupIdx = withPluginsIndex;
      group = pluginGroups[groupIdx];
      selectedGroupIndex = groupIdx;
      selectedPluginIndex = 0;
    }

    let pluginIdx = selectedPluginIndex ?? 0;
    if (pluginIdx < 0 || pluginIdx >= (group.plugins?.length ?? 0)) pluginIdx = 0;
    selectedGroupIndex = groupIdx;
    selectedPluginIndex = pluginIdx;

    const plugin = group.plugins?.[pluginIdx];
    if (plugin && plugin.id !== lastSelectedPluginId) {
      lastSelectedPluginId = plugin.id;
      selectPlugin?.(plugin);
    }
  });

  function onSelectGroup(groupIndex: number) {
    const group = pluginGroups[groupIndex];
    selectedGroupIndex = groupIndex;
    selectedPluginIndex = group?.plugins?.length ? 0 : null;

    const plugin = group?.plugins?.[0];
    if (plugin) {
      lastSelectedPluginId = plugin.id;
      selectPlugin?.(plugin);
    } else {
      lastSelectedPluginId = null;
    }
  }

  function onSelectPlugin(groupIndex: number, pluginIndex: number) {
    selectedGroupIndex = groupIndex;
    selectedPluginIndex = pluginIndex;

    const plugin = pluginGroups[groupIndex]?.plugins?.[pluginIndex];
    if (plugin) {
      lastSelectedPluginId = plugin.id;
      selectPlugin?.(plugin);
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
