<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  import {
    CONDITIONS,
    type RuleUiState,
  } from '../validationRuleUi';
  import { getElementAttrs } from '../scl-schema';
  import { lastNodeFromContext } from '../xpathBuilder';
  import SchemaNameField from './SchemaNameField.svelte';

  interface Props {
    ruleUi: RuleUiState;
    /** XPath context path, e.g. "//SCL/Substation/VoltageLevel/Bay" */
    context?: string;
  }

  let { ruleUi = $bindable(), context = '//SCL' }: Props = $props();

  const contextNode = $derived(lastNodeFromContext(context));
  const attrOptions = $derived(getElementAttrs(contextNode));
  const isRegex = $derived(ruleUi.condition === 'matches' || ruleUi.condition === 'notMatches');
</script>

<SchemaNameField
  bind:value={ruleUi.attribute}
  options={attrOptions}
  label="Attribute"
  placeholder="@name"
  requiredMessage="Attribute is required."
/>

<Select bind:value={ruleUi.condition} label="Condition" variant="outlined">
  <Option value="" disabled selected>Condition</Option>
  {#each CONDITIONS as c (c.key)}
    <Option value={c.key}>{c.label}</Option>
  {/each}
</Select>

<Textfield
  bind:value={ruleUi.specificText}
  label={isRegex ? 'Pattern' : 'Specific text'}
  variant="outlined"
  class="rule-editor__full"
>
  {#if isRegex}
    {#snippet helper()}
      <HelperText>XPath <code>matches()</code> — use <code>^…$</code> to anchor the full value.</HelperText>
    {/snippet}
  {/if}
</Textfield>

