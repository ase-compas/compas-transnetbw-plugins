<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  import type { XPathValidation } from '@oscd-transnet-plugins/shared';
  import { ALL_CHECKS, type CheckKey, type ConditionKey, type ElementCheckType, type RuleUiState } from '../../../validationRuleUi';
  import { buildAssertionExpression } from '../../../xpathBuilder';

  interface Props {
    validationEntry: XPathValidation;
    ruleUi: RuleUiState;
  }

  let { validationEntry = $bindable(), ruleUi = $bindable() }: Props = $props();

  const CONDITIONS = [
    { key: 'contains',    label: 'Contains' },
    { key: 'notContains', label: 'Does not contain' },
    { key: 'startsWith',  label: 'Starts with' },
    { key: 'endsWith',    label: 'Ends with' },
    { key: 'equals',      label: 'Equals' },
    { key: 'notEquals',   label: 'Does not equal' },
  ] as const;

  const ELEMENT_CHECK_TYPES: { key: ElementCheckType; label: string; hasCount: boolean }[] = [
    { key: 'exists',    label: 'Must exist',         hasCount: false },
    { key: 'notExists', label: 'Must not exist',     hasCount: false },
    { key: 'exactly',   label: 'Exactly N',          hasCount: true  },
    { key: 'atLeast',   label: 'At least N',         hasCount: true  },
    { key: 'atMost',    label: 'At most N',          hasCount: true  },
  ];

  const ELEMENT_OPTIONS = [
    'Substation',
    'VoltageLevel',
    'Bay',
    'ConductingEquipment',
    'Terminal',
    'ConnectivityNode',
  ];

  // For each element, the correct parent context to evaluate count() assertions on.
  // e.g. to assert count(Substation) > 0 you must select //SCL as context.
  const ELEMENT_PARENT_CONTEXT: Record<string, string> = {
    Substation:          '//SCL',
    VoltageLevel:        '//SCL/Substation',
    Bay:                 '//SCL/Substation/VoltageLevel',
    ConductingEquipment: '//SCL/Substation/VoltageLevel/Bay',
    Terminal:            '//SCL/Substation/VoltageLevel/Bay/ConductingEquipment',
    ConnectivityNode:    '//SCL/Substation/VoltageLevel/Bay',
  };

  const CHECK_DEFS: Record<CheckKey, string> = {
    noSpecial:    'No special characters',
    noSpaces:     'No blank spaces',
    noLetters:    'No letters',
    noNumbers:    'No numbers',
    noAccented:   'No accented characters',
    noXmlCritical:`No XML critical characters (<, >, &, ", ')`,
    hasLetters:   'Must contain letters',
    hasNumbers:   'Must contain numbers',
  };

  const DEFAULT_PALETTE: Record<ConditionKey, CheckKey[]> = {
    notContains: ['noSpecial', 'noSpaces', 'noLetters', 'noNumbers', 'noAccented', 'noXmlCritical'],
    contains:    ['hasLetters', 'hasNumbers', 'noXmlCritical'],
    equals:      ['noXmlCritical'],
    notEquals:   ['noXmlCritical'],
    startsWith:  ['noXmlCritical'],
    endsWith:    ['noXmlCritical'],
  };

  const availableChecks = $derived(DEFAULT_PALETTE[ruleUi.condition] ?? []);

  const showCount = $derived(
    ELEMENT_CHECK_TYPES.find((t) => t.key === ruleUi.elementCheckType)?.hasCount ?? false
  );

  $effect(() => {
    const allowed = new Set(availableChecks);
    for (const k of ALL_CHECKS) {
      if (!allowed.has(k) && ruleUi.checks[k]) ruleUi.checks[k] = false;
    }
  });

  $effect(() => {
    validationEntry.message = ruleUi.message;
    validationEntry.assert = buildAssertionExpression(ruleUi);

    if (ruleUi.mode === 'element' && ruleUi.elementName) {
      const derivedContext = ELEMENT_PARENT_CONTEXT[ruleUi.elementName];
      if (derivedContext) validationEntry.context = derivedContext;
    }
  });
</script>

<div class="rule-editor">
  <p class="rule-info">Define what the rule checks and the message shown if it fails</p>

  <div class="mode-switcher">
    <button
      type="button"
      class="mode-btn"
      class:mode-btn--active={ruleUi.mode === 'attribute'}
      onclick={() => (ruleUi.mode = 'attribute')}
    >
      Attribute check
    </button>
    <button
      type="button"
      class="mode-btn"
      class:mode-btn--active={ruleUi.mode === 'element'}
      onclick={() => (ruleUi.mode = 'element')}
    >
      Element check
    </button>
  </div>

  {#if ruleUi.mode === 'attribute'}
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

      <Textfield
        bind:value={ruleUi.specificText}
        label="Specific text"
        variant="outlined"
        class="rule-editor__full"
      />
    </div>

  {:else}
    <div class="rule-editor__section">
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

    {#if ruleUi.elementName && ELEMENT_PARENT_CONTEXT[ruleUi.elementName]}
      <div class="inferred-context">
        <span class="inferred-context__label">Auto-derived context</span>
        <code class="inferred-context__value">{ELEMENT_PARENT_CONTEXT[ruleUi.elementName]}</code>
        <span class="inferred-context__note">
          The assertion <code>count({ruleUi.elementName})</code> is evaluated on each matched parent element.
        </span>
      </div>
    {/if}
  {/if}

  <Textfield textarea bind:value={ruleUi.message} label="Error Message" variant="outlined" />

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

  .mode-switcher {
    display: flex;
    gap: 0;
    border: 1px solid #b2c7cb;
    border-radius: 5px;
    overflow: hidden;
    align-self: flex-start;
  }

  .mode-btn {
    padding: 0.5rem 1.25rem;
    background: var(--base3, #f4f7f8);
    border: none;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: #1a2b34;
    transition: background 0.15s, color 0.15s;
  }

  .mode-btn + .mode-btn {
    border-left: 1px solid #b2c7cb;
  }

  .mode-btn--active {
    background: var(--primary-base, #2e6975);
    color: #fff;
  }

  .mode-btn:not(.mode-btn--active):hover {
    background: #dae3e6;
  }

  /* Sections */
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

  /* Element mode */
  .inferred-context {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.75rem 1rem;
    background: #e8f4f6;
    border: 1px solid #b2c7cb;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
  }

  .inferred-context__label {
    font-weight: 600;
    color: #1a2b34;
  }

  .inferred-context__value {
    font-size: 0.95rem;
    color: var(--primary-base, #2e6975);
    background: transparent;
    padding: 0;
  }

  .inferred-context__note {
    color: #6b9197;
    font-size: 0.8rem;
  }

  .inferred-context__note code {
    background: #dae3e6;
    padding: 0 3px;
    border-radius: 3px;
  }

  /* Assert preview */
  .rule-editor__assert-box {
    background: #dae3e6;
    border-radius: 5px;
    padding: 0.75rem 1rem;
  }

  .rule-editor__assert-label {
    font-size: 0.95em;
    font-family: 'Roboto', sans-serif;
    color: #6b9197;
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
