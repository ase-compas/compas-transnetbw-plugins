<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import InfoBox from '../../InfoBox.svelte';

  import {
    ELEMENT_OPTIONS,
    ELEMENT_CHECK_TYPES,
    getElementContext,
    type RuleUiState,
  } from '../../../validationRuleUi';

  interface Props {
    ruleUi: RuleUiState;
  }

  let { ruleUi = $bindable() }: Props = $props();

  const showCount = $derived(
    ELEMENT_CHECK_TYPES.find((t) => t.key === ruleUi.elementCheckType)?.hasCount ?? false,
  );
</script>

<div class="element-editor__section">
  <Select bind:value={ruleUi.elementName} label="Element" variant="outlined">
    {#each ELEMENT_OPTIONS as el}
      <Option value={el}>{el}</Option>
    {/each}
  </Select>

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
</div>

<style>
  .element-editor__section {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #b2c7cb;
    border-radius: 5px;
    gap: 1rem;
  }

  .check-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .check-row :global(.check-select) {
    flex: 1;
  }
</style>
