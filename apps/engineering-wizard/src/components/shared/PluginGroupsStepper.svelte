<script lang="ts">
  import type { PluginGroup, Plugin } from '@oscd-transnet-plugins/shared';
  import type { RuleResult } from '../../services/validationStatusStore.svelte';
  import ValidationBadgePopover from './ValidationBadgePopover.svelte';

  // When a group has more plugins than this, truncate with "…"
  const MAX_PLUGINS_BEFORE_TRUNCATE = 4;

  type PluginChip =
    | { type: 'plugin'; plugin: Plugin; pluginIndex: number }
    | { type: 'ellipsis' };

  interface Props {
    pluginGroups?: PluginGroup[];
    selectedGroupIndex?: number | null;
    selectedPluginIndex?: number | null;
    expandedGroupBackground?: string;
    expandedGroupBorderColor?: string;
    selectPlugin?: (plugin: Plugin) => void;
    validationStatuses?: Record<string, RuleResult[]>;
  }

  let {
    pluginGroups = [],
    selectedGroupIndex = $bindable<number>(0),
    selectedPluginIndex = $bindable<number>(0),
    expandedGroupBackground = 'var(--primary-base)',
    expandedGroupBorderColor = 'var(--primary-base)',
    selectPlugin,
    validationStatuses = {},
  }: Props = $props();

  // Normalize the incoming indices into valid, clamped values without mutating state.
  let resolvedGroupIndex = $derived.by(() => {
    if (!pluginGroups?.length) return null;

    let groupIdx = selectedGroupIndex ?? 0;
    if (groupIdx < 0 || groupIdx >= pluginGroups.length) groupIdx = 0;

    const group = pluginGroups[groupIdx];
    if (!group?.plugins?.length) {
      const withPlugins = pluginGroups.findIndex((g) => g?.plugins?.length);
      return withPlugins === -1 ? groupIdx : withPlugins;
    }

    return groupIdx;
  });

  let resolvedPluginIndex = $derived.by(() => {
    if (resolvedGroupIndex === null) return null;
    const group = pluginGroups[resolvedGroupIndex];
    if (!group?.plugins?.length) return null;
    const pluginIdx = selectedPluginIndex ?? 0;
    return pluginIdx < 0 || pluginIdx >= group.plugins.length ? 0 : pluginIdx;
  });

  let resolvedPlugin = $derived(
    resolvedGroupIndex !== null && resolvedPluginIndex !== null
      ? pluginGroups[resolvedGroupIndex]?.plugins?.[resolvedPluginIndex] ?? null
      : null,
  );

  // Notify the parent whenever the resolved selection changes.
  $effect(() => {
    const plugin = resolvedPlugin;
    if (plugin) selectPlugin?.(plugin);
  });

  function onSelectGroup(groupIndex: number) {
    const group = pluginGroups[groupIndex];
    selectedGroupIndex = groupIndex;
    selectedPluginIndex = group?.plugins?.length ? 0 : null;
  }

  function onSelectPlugin(groupIndex: number, pluginIndex: number) {
    selectedGroupIndex = groupIndex;
    selectedPluginIndex = pluginIndex;
    // Call selectPlugin directly to handle the case where the resolved plugin
    // reference hasn't changed (same object) and the $effect would not re-fire.
    const plugin = pluginGroups[groupIndex]?.plugins?.[pluginIndex];
    if (plugin) selectPlugin?.(plugin);
  }

  function failureCount(pluginId: string): number {
    return (validationStatuses[pluginId] ?? []).filter((r) => !r.passed).length;
  }

  /**
   * Returns the visible set of plugin chips for an expanded group.
   * When there are more than MAX_PLUGINS_BEFORE_TRUNCATE plugins, only the
   * first, the active, and the last two are shown — separated by "…" chips.
   */
  function visiblePluginChips(plugins: Plugin[], activeIndex: number): PluginChip[] {
    if (plugins.length <= MAX_PLUGINS_BEFORE_TRUNCATE) {
      return plugins.map((plugin, i) => ({ type: 'plugin' as const, plugin, pluginIndex: i }));
    }

    const n = plugins.length;
    // Always show first plugin and last two; also show the active plugin.
    const visibleSet = new Set([0, n - 2, n - 1]);
    if (activeIndex >= 0) visibleSet.add(activeIndex);

    const sortedIndices = [...visibleSet].sort((a, b) => a - b);
    const chips: PluginChip[] = [];
    let prev = -1;

    for (const idx of sortedIndices) {
      if (prev !== -1 && idx > prev + 1) {
        chips.push({ type: 'ellipsis' });
      }
      chips.push({ type: 'plugin' as const, plugin: plugins[idx], pluginIndex: idx });
      prev = idx;
    }

    return chips;
  }
</script>

<div
  class="validation-groups"
  style={`--expanded-group-bg:${expandedGroupBackground}; --expanded-group-border:${expandedGroupBorderColor};`}
>
  {#each pluginGroups as group, groupIndex}
    <div class="validation-groups__group" class:expanded={groupIndex === resolvedGroupIndex}>
      <button
        type="button"
        class="validation-groups__group-title"
        onclick={() => onSelectGroup(groupIndex)}
      >
        {group.title}
      </button>

      {#if groupIndex === resolvedGroupIndex}
        {#each visiblePluginChips(group.plugins, resolvedPluginIndex ?? -1) as chip}
          {#if chip.type === 'ellipsis'}
            <span class="validation-groups__ellipsis" aria-hidden="true">…</span>
          {:else}
            <button
              type="button"
              class="validation-groups__plugin"
              class:active={chip.pluginIndex === resolvedPluginIndex}
              onclick={() => onSelectPlugin(groupIndex, chip.pluginIndex)}
            >
              <span>{chip.plugin.name}</span>
              {#if failureCount(chip.plugin.id) > 0}
                <ValidationBadgePopover
                  rules={validationStatuses[chip.plugin.id] ?? []}
                  active={chip.pluginIndex === selectedPluginIndex}
                />
              {/if}
            </button>
          {/if}
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

    --expanded-group-bg: var(--primary-base);
    --expanded-group-border: var(--primary-base);
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
    min-height: 36px;
    padding: 0 8px;
    margin: 0;

    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--primary-base);
    cursor: pointer;
    user-select: none;

    background: transparent;
    border: none;

    border-radius: 2px;
  }

  .validation-groups__group.expanded .validation-groups__group-title {
    background-color: var(--primary-base);
    color: var(--white);
  }

  .validation-groups__plugin {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--primary-base);
    padding: 6px 0.5rem;
    min-height: 36px;
    background-color: white;
    border-radius: 2px;

    width: fit-content;
    min-width: 2rem;
    cursor: pointer;

    margin: 0;
    border: none;
    overflow: visible;
  }

  .validation-groups__plugin.active {
    background-color: #d9d800;
  }

  .validation-groups__ellipsis {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 36px;
    padding: 0 0.2rem;
    color: rgba(255, 255, 255, 0.7);
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
    user-select: none;
    pointer-events: none;
    flex-shrink: 0;
  }
</style>
