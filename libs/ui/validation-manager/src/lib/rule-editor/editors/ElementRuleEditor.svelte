<script lang="ts">
  import { OscdChevronRightIcon } from '@oscd-transnet-plugins/oscd-icons';

  import { type RuleUiState } from '../utils/validationRuleUi';
  import { getChildElements } from '../utils/scl-schema';
  import { lastNodeFromContext } from '../utils/xpathBuilder';
  import SchemaNameField from './SchemaNameField.svelte';
  import InfoBox from '../viewer/InfoBox.svelte';

  interface Props {
    ruleUi: RuleUiState;
    context?: string;
  }

  let { ruleUi = $bindable(), context = '//SCL' }: Props = $props();

  const contextNode = $derived(lastNodeFromContext(context));
  const childOptions = $derived(getChildElements(contextNode));
</script>

{#if ruleUi.elementName?.trim()}
  <InfoBox>
    <div class="path-preview">
      <span>{contextNode}</span>
      <OscdChevronRightIcon svgStyles="fill: #B2C7CB; width: 16px; height: 16px;" />
      <span class="path-preview__target">{ruleUi.elementName}</span>
    </div>
  </InfoBox>
{/if}

<SchemaNameField
  bind:value={ruleUi.elementName}
  options={childOptions}
  label="Child element"
  placeholder="ChildElement"
  requiredMessage="Child element is required."
/>

<style>
  .path-preview {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    color: var(--base01);
  }

  .path-preview__target {
    font-weight: var(--ew-font-weight-medium);
    color: var(--base03);
  }
</style>
