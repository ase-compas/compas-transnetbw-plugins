<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  import {
    ALL_CHECKS,
    CONDITIONS,
    CHECK_DEFS,
    DEFAULT_PALETTE,
    type RuleUiState,
  } from '../validationRuleUi';

  interface Props {
    ruleUi: RuleUiState;
  }

  let { ruleUi = $bindable() }: Props = $props();

  const availableChecks = $derived(DEFAULT_PALETTE[ruleUi.condition] ?? []);

  $effect(() => {
    const allowed = new Set(availableChecks);
    for (const k of ALL_CHECKS) {
      if (!allowed.has(k) && ruleUi.checks[k]) ruleUi.checks[k] = false;
    }
  });
</script>

<Textfield
  bind:value={ruleUi.attribute}
  label="Attribute"
  variant="outlined"
  placeholder="@name"
  class="rule-editor__full"
/>

<Select bind:value={ruleUi.condition} label="Condition" variant="outlined">
  <Option value="" disabled selected>Condition</Option>
  {#each CONDITIONS as c (c.key)}
    <Option value={c.key}>{c.label}</Option>
  {/each}
</Select>

<div class="attr-editor__section">
  {#if availableChecks.length === 0}
    <div>No checks available for this condition.</div>
  {:else}
    <div class="attr-editor__checks">
      {#each availableChecks as key (key)}
        <FormField>
          <Checkbox bind:checked={ruleUi.checks[key]} />
          <span>{CHECK_DEFS[key]}</span>
        </FormField>
      {/each}
    </div>
  {/if}

  <Textfield
    bind:value={ruleUi.specificText}
    label="Specific text"
    variant="outlined"
    class="rule-editor__full"
  />
</div>

<style>
  .attr-editor__section {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #b2c7cb;
    border-radius: 5px;
    gap: 1rem;
  }

  .attr-editor__checks {
    display: grid;
    grid-template-columns: repeat(2, minmax(240px, 1fr));
    gap: 0.25rem 1rem;
    align-items: center;
  }
</style>
