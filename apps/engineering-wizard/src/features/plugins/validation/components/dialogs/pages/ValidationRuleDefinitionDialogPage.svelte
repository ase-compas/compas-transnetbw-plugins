<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  export type ConditionKey =
    | 'contains'
    | 'notContains'
    | 'equals'
    | 'notEquals'
    | 'startsWith'
    | 'endsWith';

  export type CheckKey =
    | 'noSpecial'
    | 'noSpaces'
    | 'noLetters'
    | 'noNumbers'
    | 'noAccented'
    | 'noXmlCritical'
    | 'hasLetters'
    | 'hasNumbers';

  export type RuleUiState = {
    condition: ConditionKey;
    checks: Record<CheckKey, boolean>;
    specificText: string;
    message: string;
  };

  type Props = {
    initialCondition?: ConditionKey;
    initialChecks?: Partial<Record<CheckKey, boolean>>;
    initialSpecificText?: string;
    initialMessage?: string;
    checkPalette?: Partial<Record<ConditionKey, CheckKey[]>>;
  };

  const {
    initialCondition = 'notContains',
    initialChecks = {},
    initialSpecificText = '',
    initialMessage = '',
    checkPalette
  }: Props = $props();

  const CONDITIONS = [
    { key: 'contains', label: 'Contains' },
    { key: 'notContains', label: 'Does not contain' },
    { key: 'startsWith', label: 'Starts with' },
    { key: 'endsWith', label: 'Ends with' },
    { key: 'equals', label: 'Equals' },
    { key: 'notEquals', label: 'Does not equal' }
  ] as const;

  const ALL_CHECKS = [
    'noSpecial',
    'noSpaces',
    'noLetters',
    'noNumbers',
    'noAccented',
    'noXmlCritical',
    'hasLetters',
    'hasNumbers'
  ] as const satisfies readonly CheckKey[];

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

  const palette: Record<ConditionKey, CheckKey[]> = {
    ...DEFAULT_PALETTE,
    ...(checkPalette ?? {})
  };

  const makeChecks = (init: Partial<Record<CheckKey, boolean>>): Record<CheckKey, boolean> =>
    Object.fromEntries(ALL_CHECKS.map((k) => [k, !!init[k]])) as Record<CheckKey, boolean>;

  let ui: RuleUiState = $state({
    condition: initialCondition,
    checks: makeChecks(initialChecks),
    specificText: initialSpecificText,
    message: initialMessage
  });

  const availableChecks: CheckKey[] = $derived(palette[ui.condition] ?? []);

  $effect(() => {
    const allowed = new Set(availableChecks);
    const next = { ...ui.checks };
    let changed = false;

    for (const k of ALL_CHECKS) {
      if (!allowed.has(k) && next[k]) {
        next[k] = false;
        changed = true;
      }
    }

    if (changed) ui.checks = next;
  });

  export function getState(): RuleUiState {
    return { ...ui, checks: { ...ui.checks } };
  }

  export function setState(next: Partial<RuleUiState>): void {
    ui = {
      ...ui,
      ...next,
      checks: next.checks ? { ...ui.checks, ...next.checks } : ui.checks
    };
  }

  export function validate(): { ok: boolean; errors: string[] } {
    const errors: string[] = [];
    if (!ui.message.trim()) errors.push('Error message is required.');
    return { ok: errors.length === 0, errors };
  }

  export function toRuleModel(): unknown {
    return getState();
  }
</script>

<div class="rule-editor">
  <p class="rule-info">Define what the rule checks and the message shown if check fails</p>

  <Select bind:value={ui.condition} label="Condition" variant="outlined">
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
            <Checkbox bind:checked={ui.checks[key]} />
            <span>{CHECK_DEFS[key]}</span>
          </FormField>
        {/each}
      </div>
    {/if}

    <Textfield bind:value={ui.specificText} label="Specific text" variant="outlined" class="full" />
  </div>

  <Textfield bind:value={ui.message} label="Error Message" variant="outlined" class="full" />
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
