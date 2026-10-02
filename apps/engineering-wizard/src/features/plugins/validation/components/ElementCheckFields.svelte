<script lang="ts">
  import {
    ELEMENT_CHECK_TYPES,
    elementCheckTypeHasCount,
    isValidElementCount,
    type RuleUiState,
  } from '../validationRuleUi';
  import ValidationSelectField from './ValidationSelectField.svelte';

  interface Props {
    ruleUi: RuleUiState;
  }

  let { ruleUi = $bindable() }: Props = $props();

  const showCount = $derived(elementCheckTypeHasCount(ruleUi.elementCheckType));
  const countInvalid = $derived(showCount && !isValidElementCount(ruleUi.elementCount));
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
    <label class="count-field">
      <span class="count-field__label">Count</span>
      <input
        class="count-field__control"
        type="number"
        min="0"
        step="1"
        required
        aria-invalid={countInvalid}
        aria-describedby={countInvalid ? 'element-count-error' : undefined}
        bind:value={ruleUi.elementCount}
      />
      {#if countInvalid}
        <span id="element-count-error" class="count-field__error">
          Enter a whole number of 0 or more.
        </span>
      {/if}
    </label>
  {/if}
</div>

<style>
  .check-row {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .check-row :global(.check-select) {
    flex: 1;
  }

  .count-field {
    display: flex;
    flex: 0 0 120px;
    flex-direction: column;
    gap: 0.35rem;
    min-width: 0;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }

  .count-field__label {
    color: var(--base01);
    font-size: var(--ew-font-size-small, 0.75rem);
  }

  .count-field__control {
    width: 100%;
    min-height: 3.5rem;
    box-sizing: border-box;
    padding: 0 0.75rem;
    border: 1px solid #b2c7cb;
    border-radius: 4px;
    background: var(--white);
    color: var(--base03);
    font: inherit;
  }

  .count-field__control:focus {
    border-color: var(--primary-base);
    outline: 1px solid var(--primary-base);
  }

  .count-field__control[aria-invalid='true'] {
    border-color: var(--red);
  }

  .count-field__error {
    color: var(--red);
    font-size: var(--ew-font-size-small, 0.75rem);
  }
</style>
