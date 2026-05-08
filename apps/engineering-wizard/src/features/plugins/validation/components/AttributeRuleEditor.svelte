<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

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
  <div class="field-wrap">
    <Select
      bind:value={ruleUi.attribute}
      label="Attribute"
      variant="outlined"
      invalid={!ruleUi.attribute?.trim()}
      helperText$validationMsg
    >
      <Option value="">Select attribute</Option>
      {#each attrOptions as attr (attr)}
        <Option value={attr}>{attr}</Option>
      {/each}
      {#snippet helperText()}Attribute is required.{/snippet}
    </Select>
  </div>
{:else}
  <div class="field-wrap">
    <Textfield
      bind:value={ruleUi.attribute}
      label="Attribute"
      variant="outlined"
      placeholder="@name"
      invalid={!ruleUi.attribute?.trim()}
      class="rule-editor__full"
    >
      {#snippet helper()}<HelperText validationMsg>Attribute is required.</HelperText>{/snippet}
    </Textfield>
  </div>
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

<style>
  /* Groups the SMUI field + its helper-line sibling so the parent flex gap
     doesn't insert extra space between the input and its helper text. */
  .field-wrap {
    display: flex;
    flex-direction: column;
  }
</style>


