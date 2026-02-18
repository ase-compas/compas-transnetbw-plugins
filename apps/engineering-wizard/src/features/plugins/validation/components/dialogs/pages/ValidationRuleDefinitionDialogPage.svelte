<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  import type { XPathValidation } from '@oscd-transnet-plugins/shared';
  import { ALL_CHECKS, type CheckKey, type ConditionKey, type RuleUiState } from '../../../validationRuleUi';

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

  function buildAssert(ui: RuleUiState): string {
    return 'custom text for now';
  }

  $effect(() => {
    validationEntry.message = ruleUi.message;
    validationEntry.assert = buildAssert(ruleUi);
  });
</script>

<div class="rule-editor">
  <p class="rule-info">Define what the rule checks and the message shown if check fails</p>

  <Select bind:value={ruleUi.condition} label="Condition" variant="outlined">
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

    <Textfield bind:value={ruleUi.specificText} label="Specific text" variant="outlined" class="full" />
  </div>

  <Textfield bind:value={ruleUi.message} label="Error Message" variant="outlined" class="full" />

  <Textfield value={validationEntry.assert} label="Generated XPath assert" variant="outlined" class="full" readonly />
</div>

<style>
  .rule-editor {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
  }

  .rule-info {
    margin: 0 0 1rem 0;
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
</style>
