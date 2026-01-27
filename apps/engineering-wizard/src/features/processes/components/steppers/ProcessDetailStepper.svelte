<script lang="ts">
  import StepperRow from './StepperRow.svelte';

  const items = [
    {
      id: 'process-definition',
      label: 'Process Definition'
    },
    {
      id: 'validator-configuration',
      label: 'Validator Configuration'
    },
  ];

  interface Props {
    currentId?: string | null;
    visited?: string[];
    onSelect?: (itemId: string) => void;
  }

  let {
    currentId = null,
    visited = [],
    onSelect,
  }: Props = $props();

</script>

<StepperRow
  items={items}
  visited={visited}
  currentId={currentId}
  status={{}}
  tooltipMap={{}}
  onSelect={onSelect}
/>
