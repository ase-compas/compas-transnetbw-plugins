<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';

  import { ELEMENT_CHECK_TYPES, type RuleUiState } from '../validationRuleUi';

  interface Props {
    ruleUi: RuleUiState;
  }

  let { ruleUi = $bindable() }: Props = $props();

  const showCount = $derived(
    ELEMENT_CHECK_TYPES.find((t) => t.key === ruleUi.elementCheckType)?.hasCount ?? false,
  );
</script>

<div class="check-row">
  <Select class="check-select" bind:value={ruleUi.elementCheckType} label="Check" variant="outlined">
    {#each ELEMENT_CHECK_TYPES as t (t.key)}
      <Option value={t.key}>{t.label}</Option>
    {/each}
  </Select>

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
