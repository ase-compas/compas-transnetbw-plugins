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
    <Option value="" disabled selected>Select element</Option>
    {#each ELEMENT_OPTIONS as el}
      <Option value={el}>{el}</Option>
    {/each}
  </Select>

  <Select bind:value={ruleUi.elementCheckType} label="Check" variant="outlined">
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
      style="width: 120px"
    />
  {/if}
</div>

{#if ruleUi.elementName}
  <InfoBox title="Auto-derived context">
    {#snippet children()}
      <code class="element-editor__context-value">{getElementContext(ruleUi.elementName)}</code>
      <span class="element-editor__context-note">
        The assertion <code>count({ruleUi.elementName})</code> is evaluated on each matched parent element.
      </span>
    {/snippet}
  </InfoBox>
{/if}

<style>
  .element-editor__section {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #b2c7cb;
    border-radius: 5px;
    gap: 1rem;
  }

  .element-editor__context-value {
    font-size: 0.95rem;
    color: var(--primary-base, #2e6975);
    background: transparent;
    padding: 0;
  }

  .element-editor__context-note {
    color: var(--base01, #586e75);
    font-size: 0.8rem;
  }

  .element-editor__context-note code {
    background: #dae3e6;
    padding: 0 3px;
    border-radius: 3px;
  }
</style>
