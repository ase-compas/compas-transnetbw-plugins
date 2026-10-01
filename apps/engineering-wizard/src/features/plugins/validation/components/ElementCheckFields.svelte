<script lang="ts">
  import Textfield from '@smui/textfield';

  import { ELEMENT_CHECK_TYPES, type RuleUiState } from '../validationRuleUi';
  import ValidationSelectField from './ValidationSelectField.svelte';

  interface Props {
    ruleUi: RuleUiState;
  }

  let { ruleUi = $bindable() }: Props = $props();

  const showCount = $derived(
    ELEMENT_CHECK_TYPES.find((t) => t.key === ruleUi.elementCheckType)?.hasCount ?? false,
  );
</script>

<div class="check-row">
  <ValidationSelectField
    class="check-select"
    bind:value={ruleUi.elementCheckType}
    label="Check"
    options={ELEMENT_CHECK_TYPES.map((check) => ({
      value: check.key,
      label: check.label,
    }))}
  />

  {#if showCount}
    <Textfield
      type="number"
      bind:value={ruleUi.elementCount}
      label="Count"
      variant="outlined"
      style="width: 120px; flex-shrink: 0"
    />
  {/if}
</div>

<style>
  .check-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .check-row :global(.check-select) {
    flex: 1;
  }
</style>
