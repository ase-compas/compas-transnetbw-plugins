<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';

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

  // When the context node changes, clear the attribute if it is no longer valid.
  $effect(() => {
    if (ruleUi.attribute && !attrOptions.includes(ruleUi.attribute)) {
      ruleUi.attribute = '';
    }
  });
</script>

{#if attrOptions.length > 0}
  <Select bind:value={ruleUi.attribute} label="Attribute" variant="outlined">
    <Option value="">Select attribute</Option>
    {#each attrOptions as attr (attr)}
      <Option value={attr}>{attr}</Option>
    {/each}
  </Select>
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


