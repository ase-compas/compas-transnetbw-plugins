<script lang="ts">
  import Select from '../../ui/Select.svelte';
  import TextField from '../../ui/TextField.svelte';
  import { ELEMENT_CHECK_TYPES, type RuleUiState } from '../utils/validationRuleUi';

  interface Props {
    ruleUi: RuleUiState;
  }

  let { ruleUi = $bindable() }: Props = $props();

  const showCount = $derived(
    ELEMENT_CHECK_TYPES.find((t) => t.key === ruleUi.elementCheckType)?.hasCount ?? false,
  );

  const checkOptions = $derived(
    ELEMENT_CHECK_TYPES.map((t) => ({ value: t.key, label: t.label })),
  );
</script>

<div class="check-row">
  <div class="check-select">
    <Select bind:value={ruleUi.elementCheckType} label="Check" options={checkOptions} />
  </div>

  {#if showCount}
    <div class="check-count">
      <TextField bind:value={ruleUi.elementCount} type="number" label="Count" />
    </div>
  {/if}
</div>

<style>
  .check-row {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .check-select {
    flex: 1;
  }

  .check-count {
    flex-shrink: 0;
    width: 120px;
  }
</style>
