<script lang="ts">
  import StepperRow from '../shared/StepperRow.svelte';
  import type { ViewPlugin } from '../../types/view-plugin';

  interface Props {
    plugins?: ViewPlugin[];
    visited?: string[];
    currentId?: string | null;
    pluginStatus?: Record<string, 'check' | 'warning' | 'error'>;
    onSelect?: (plugin: ViewPlugin) => void;
  }

  let {
    plugins = [],
    visited = [],
    currentId = null,
    pluginStatus = {},
    onSelect
  }: Props = $props();

  let tooltipText = $derived(plugins.reduce<Record<string, string>>((map, p) => {
    const status = pluginStatus[p.id];
    map[p.id] = status ?? '';
    return map;
  }, {}));

  const onStepperRowSelect = (itemId: string) => {
    const selected = plugins.find(p => p.id === itemId);
    if (selected) {
      onSelect(selected);
    }
  };
</script>

<StepperRow
  items={plugins.map(p => ({ id: p.id, label: p.name }))}
  visited={visited}
  currentId={currentId}
  status={pluginStatus}
  tooltipMap={tooltipText}
  onSelect={onStepperRowSelect}
/>
