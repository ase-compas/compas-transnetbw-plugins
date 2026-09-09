<script lang="ts">
  import { type RuleUiState } from '../validationRuleUi';
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
</script>

<SchemaNameField
  bind:value={ruleUi.attribute}
  options={attrOptions}
  label="Attribute"
  placeholder="@name"
  requiredMessage="Attribute is required."
/>
