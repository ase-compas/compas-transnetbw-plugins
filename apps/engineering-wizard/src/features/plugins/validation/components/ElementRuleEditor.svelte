<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Textfield from '@smui/textfield';
  import { OscdChevronRightIcon } from '@oscd-transnet-plugins/oscd-icons';

  import { ELEMENT_CHECK_TYPES, type RuleUiState } from '../validationRuleUi';
  import { getChildElements } from '../scl-schema';
  import { lastNodeFromContext } from '../xpathBuilder';
  import SchemaNameField from './SchemaNameField.svelte';

  interface Props {
    ruleUi: RuleUiState;
    context?: string;
  }

  let { ruleUi = $bindable(), context = '//SCL' }: Props = $props();

  const contextNode = $derived(lastNodeFromContext(context));
  const childOptions = $derived(getChildElements(contextNode));

  const showCount = $derived(
    ELEMENT_CHECK_TYPES.find((t) => t.key === ruleUi.elementCheckType)?.hasCount ?? false,
  );
</script>

{#if ruleUi.elementName?.trim()}
  <div class="path-preview">
    <span>{contextNode}</span>
    <OscdChevronRightIcon svgStyles="fill: #B2C7CB; width: 16px; height: 16px;" />
    <span class="path-preview__target">{ruleUi.elementName}</span>
  </div>
{/if}

<SchemaNameField
  bind:value={ruleUi.elementName}
  options={childOptions}
  label="Child element"
  placeholder="ChildElement"
  requiredMessage="Child element is required."
/>

<div class="check-row">
  <Select class="check-select" bind:value={ruleUi.elementCheckType} label="Check" variant="outlined">
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
      style="width: 120px; flex-shrink: 0"
    />
  {/if}
</div>

<style>
  .path-preview {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: var(--ew-font-size-small);
    color: var(--base01);
  }

  .path-preview__target {
    font-weight: var(--ew-font-weight-medium);
    color: var(--base03);
  }

  .check-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .check-row :global(.check-select) {
    flex: 1;
  }
</style>
