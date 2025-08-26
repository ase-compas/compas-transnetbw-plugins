<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import StepperRow from '../shared/StepperRow.svelte';

  const dispatch = createEventDispatcher();

  const items = [
    { id: 'process-definition', label: 'Process Definition' },
    { id: 'validator-configuration', label: 'Validator Configuration' },
  ];

  export let currentId: string | null = null;
  export let visited: string[] = [];

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
