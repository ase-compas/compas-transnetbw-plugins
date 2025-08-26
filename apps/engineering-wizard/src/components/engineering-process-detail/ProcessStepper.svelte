<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import StepperRow from '../shared/StepperRow.svelte';

  const dispatch = createEventDispatcher();

  const items = [
    { id: 'process-definition', label: 'Process Definition' },
    { id: 'validator-configuration', label: 'Validator Configuration' },
  ];

  const onSelect = (e: CustomEvent<string>) => dispatch('select', e.detail);
</script>

<StepperRow
  items={items}
  visited={[]}
  currentId={null}
  status={{}}
  tooltipMap={{}}
  on:select={onSelect}
/>
