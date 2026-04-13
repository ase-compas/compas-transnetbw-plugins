<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import { OscdSmartSelect } from '@oscd-transnet-plugins/oscd-component';

  import {
    CONDITIONS,
    type RuleUiState,
  } from '../validationRuleUi';
  import { getElementAttrs } from '../scl-schema';

  interface Props {
    ruleUi: RuleUiState;
    /** XPath context path, e.g. "//SCL/Substation/VoltageLevel/Bay" */
    context?: string;
  }

  let { ruleUi = $bindable(), context = '//SCL' }: Props = $props();

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

<Textfield
  bind:value={ruleUi.specificText}
  label="Specific text"
  variant="outlined"
  class="rule-editor__full"
/>


