<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import { OscdSmartSelect } from '@oscd-transnet-plugins/oscd-component';

  import {
    ALL_CHECKS,
    CONDITIONS,
    CHECK_DEFS,
    DEFAULT_PALETTE,
    type RuleUiState,
  } from '../validationRuleUi';
  import { getElementAttrs } from '../scl-schema';

  interface Props {
    ruleUi: RuleUiState;
    /** XPath context path, e.g. "//SCL/Substation/VoltageLevel/Bay" */
    context?: string;
  }

  let { ruleUi = $bindable(), context = '//SCL' }: Props = $props();

  const availableChecks = $derived(DEFAULT_PALETTE[ruleUi.condition] ?? []);

  $effect(() => {
    const allowed = new Set(availableChecks);
    for (const k of ALL_CHECKS) {
      if (!allowed.has(k) && ruleUi.checks[k]) ruleUi.checks[k] = false;
    }
  });

  /** Extract the last element name from the context path. */
  function lastNodeFromContext(ctx: string): string {
    const parts = ctx.replace(/^\/\//, '').split('/').filter(Boolean);
    return parts[parts.length - 1] ?? 'SCL';
  }

  const contextNode = $derived(lastNodeFromContext(context));
  const attrOptions = $derived(getElementAttrs(contextNode));

  // OscdSmartSelect expects string | null; ruleUi.attribute is string ('' when empty).
  // Bridge: treat '' as null so the placeholder shows correctly and no stray X appears.
  let attrValue = $state<string | null>(ruleUi.attribute || null);

  $effect(() => {
    attrValue = ruleUi.attribute || null;
  });

  $effect(() => {
    const next = attrValue ?? '';
    if (next !== ruleUi.attribute) ruleUi.attribute = next;
  });

  // When the context node changes, the available attributes change.
  // Clear the selection if the current attribute is no longer valid.
  $effect(() => {
    if (attrValue !== null && !attrOptions.includes(attrValue)) {
      attrValue = null;
    }
  });
</script>

{#if attrOptions.length > 0}
  <OscdSmartSelect
    placeholder="Select attribute"
    clearable
    bind:value={attrValue}
    options={attrOptions}
  />
{:else}
  <Textfield
    bind:value={ruleUi.attribute}
    label="Attribute"
    variant="outlined"
    placeholder="@name"
    invalid={!ruleUi.attribute?.trim()}
    class="rule-editor__full"
  />
{/if}

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
