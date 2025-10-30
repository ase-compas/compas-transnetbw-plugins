<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import StepperRow from '../shared/StepperRow.svelte';

  const dispatch = createEventDispatcher();

  const items = [
    { id: 'process-definition', label: 'Process Definition' },
    { id: 'validator-configuration', label: 'Validator Configuration' },
  ];

  interface Props {
    currentId?: string | null;
    visited?: string[];
  }

  let { currentId = null, visited = [] }: Props = $props();

  const onSelect = (e: CustomEvent<string>) => dispatch('select', e.detail);
</script>

<StepperRow
  items={items}
  visited={visited}
  currentId={currentId}
  status={{}}
  tooltipMap={{}}
  on:select={onSelect}
/>
