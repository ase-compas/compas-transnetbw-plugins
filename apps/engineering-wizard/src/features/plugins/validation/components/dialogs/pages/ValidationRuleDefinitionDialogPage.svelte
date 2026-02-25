<script lang="ts">
  import Textfield from '@smui/textfield';

  import type { XPathValidation } from '@oscd-transnet-plugins/shared';
  import { getElementContext, type RuleUiState } from '../../../validationRuleUi';
  import { buildAssertionExpression } from '../../../xpathBuilder';

  import AttributeRuleEditor from './AttributeRuleEditor.svelte';
  import ElementRuleEditor from './ElementRuleEditor.svelte';
  import PreviewBox from '../../PreviewBox.svelte';

  interface Props {
    validationEntry: XPathValidation;
    ruleUi: RuleUiState;
  }

  let { validationEntry = $bindable(), ruleUi = $bindable() }: Props = $props();

  $effect(() => {
    validationEntry.message = ruleUi.message;
    validationEntry.assert = buildAssertionExpression(ruleUi);

    if (ruleUi.mode === 'element' && ruleUi.elementName) {
      validationEntry.context = getElementContext(ruleUi.elementName);
    }
  });
</script>

<div class="rule-editor">
  <p class="rule-info">Define what the rule checks and the message shown if it fails</p>

  {#if ruleUi.mode === 'attribute'}
    <AttributeRuleEditor bind:ruleUi />
  {:else}
    <ElementRuleEditor bind:ruleUi />
  {/if}

  <Textfield textarea bind:value={ruleUi.message} label="Error Message" variant="outlined" />

  <PreviewBox label="Live Code Preview" value={validationEntry.assert} />
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
</style>
