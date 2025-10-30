<script lang="ts">
  import StepperRow from '../shared/StepperRow.svelte';
  import type { ViewPlugin } from '../../types/view-plugin';
  import { createEventDispatcher } from 'svelte';

  interface Props {
    plugins?: ViewPlugin[];
    visited?: string[];
    currentId?: string | null;
    pluginStatus?: Record<string, 'check' | 'warning' | 'error'>;
  }

  let {
    plugins = [],
    visited = [],
    currentId = null,
    pluginStatus = {}
  }: Props = $props();

  const dispatch = createEventDispatcher();

  let tooltipText = $derived(plugins.reduce<Record<string, string>>((map, p) => {
    const status = pluginStatus[p.id];
    map[p.id] = status ?? '';
    return map;
  }, {}));

  const onSelect = (e: CustomEvent<string>) => {
    const selected = plugins.find(p => p.id === e.detail);
    if (selected) dispatch('select', selected);
  };
</script>

<StepperRow
  items={plugins.map(p => ({ id: p.id, label: p.name }))}
  visited={visited}
  currentId={currentId}
  status={pluginStatus}
  tooltipMap={tooltipText}
  on:select={onSelect}
/>
