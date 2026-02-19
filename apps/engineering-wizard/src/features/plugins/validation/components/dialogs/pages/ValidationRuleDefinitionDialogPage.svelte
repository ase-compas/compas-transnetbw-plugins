<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  import type { XPathValidation } from '@oscd-transnet-plugins/shared';
  import { ALL_CHECKS, type CheckKey, type ConditionKey, type RuleUiState } from '../../../validationRuleUi';
  import { buildAssertionExpression } from '../../../xpathBuilder';

  interface Props {
    validationEntry: XPathValidation;
    ruleUi: RuleUiState;
  }

  let { validationEntry = $bindable(), ruleUi = $bindable() }: Props = $props();

  const CONDITIONS = [
    { key: 'contains', label: 'Contains' },
    { key: 'notContains', label: 'Does not contain' },
    { key: 'startsWith', label: 'Starts with' },
    { key: 'endsWith', label: 'Ends with' },
    { key: 'equals', label: 'Equals' },
    { key: 'notEquals', label: 'Does not equal' }
  ] as const;

  const CHECK_DEFS: Record<CheckKey, string> = {
    noSpecial: 'No special characters',
    noSpaces: 'No blank spaces',
    noLetters: 'No letters',
    noNumbers: 'No numbers',
    noAccented: 'No accented characters',
    noXmlCritical: `No XML critical characters (<, >, &, ", ')`,
    hasLetters: 'Must contain letters',
    hasNumbers: 'Must contain numbers'
  };

  const DEFAULT_PALETTE: Record<ConditionKey, CheckKey[]> = {
    notContains: ['noSpecial', 'noSpaces', 'noLetters', 'noNumbers', 'noAccented', 'noXmlCritical'],
    contains: ['hasLetters', 'hasNumbers', 'noXmlCritical'],
    equals: ['noXmlCritical'],
    notEquals: ['noXmlCritical'],
    startsWith: ['noXmlCritical'],
    endsWith: ['noXmlCritical']
  };

  const availableChecks = $derived(DEFAULT_PALETTE[ruleUi.condition] ?? []);

  $effect(() => {
    const allowed = new Set(availableChecks);
    for (const k of ALL_CHECKS) {
      if (!allowed.has(k) && ruleUi.checks[k]) ruleUi.checks[k] = false;
    }
  });

  $effect(() => {
    validationEntry.message = ruleUi.message;
    validationEntry.assert = buildAssertionExpression(ruleUi);
  });
</script>

<div class="rule-editor">
  <p class="rule-info">Define what the rule checks and the message shown if check fails</p>

  <Textfield bind:value={ruleUi.attribute} label="Attribute" variant="outlined" placeholder="@name" class="rule-editor__full" />

  <Select bind:value={ruleUi.condition} label="Condition" variant="outlined">
    <Option value="" disabled selected>Condition</Option>
    {#each CONDITIONS as c (c.key)}
      <Option value={c.key}>{c.label}</Option>
    {/each}
  </Select>

  <div class="rule-editor__section">
    {#if availableChecks.length === 0}
      <div>No checks available for this condition.</div>
    {:else}
      <div class="rule-editor__checks">
        {#each availableChecks as key (key)}
          <FormField>
            <Checkbox bind:checked={ruleUi.checks[key]} />
            <span>{CHECK_DEFS[key]}</span>
          </FormField>
        {/each}
      </div>
    {/if}

    <Textfield bind:value={ruleUi.specificText} label="Specific text" variant="outlined" class="rule-editor__full" />
  </div>

  <Textfield textarea bind:value={ruleUi.message} label="Error Message" variant="outlined"/>

  <div class="rule-editor__assert-box">
    <span class="rule-editor__assert-label">Live Code Preview</span>
    <pre class="rule-editor__assert-value">{validationEntry.assert}</pre>
  </div>
</div>

<style>
  .rule-editor {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1.5rem;
  }

  .rule-info {
    margin: 0;
  }

  .rule-editor__section {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #b2c7cb;
    border-radius: 5px;
    gap: 1rem;
  }

  .rule-editor__checks {
    display: grid;
    grid-template-columns: repeat(2, minmax(240px, 1fr));
    gap: 0.25rem 1rem;
    align-items: center;
  }

  .rule-editor__assert-box {
    background: #DAE3E6;
    border-radius: 5px;
    padding: 0.75rem 1rem;
  }

  .rule-editor__assert-label {
    font-size: 0.95em;
    font-family: 'Roboto', sans-serif;
    color: #6B9197;
    margin-bottom: 0.5em;
  }

  .rule-editor__assert-value {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    color: #1a2b34;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }
</style>
