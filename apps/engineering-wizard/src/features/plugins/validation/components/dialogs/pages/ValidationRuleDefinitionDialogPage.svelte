<script lang="ts">
  import Textfield from '@smui/textfield';
  import { getElementContext } from '../../../validationRuleUi';
  import { buildAssertionExpression } from '../../../xpathBuilder';
  import { validationEditor } from '../../../validationEditorStore.svelte';

  import AttributeRuleEditor from '../../AttributeRuleEditor.svelte';
  import ElementRuleEditor from '../../ElementRuleEditor.svelte';
  import PreviewBox from '../../PreviewBox.svelte';

  $effect(() => {
    validationEditor.entry.message = validationEditor.ruleUi.message;
    validationEditor.entry.assert = buildAssertionExpression(validationEditor.ruleUi);

    if (validationEditor.ruleUi.mode === 'element' && validationEditor.ruleUi.elementName) {
      validationEditor.entry.context = getElementContext(validationEditor.ruleUi.elementName);
    }
  });
</script>

<div class="rule-editor">
  <p class="rule-info">Define what the rule checks and the message shown if it fails</p>

  {#if validationEditor.ruleUi.mode === 'attribute'}
    <AttributeRuleEditor bind:ruleUi={validationEditor.ruleUi} />
  {:else}
    <ElementRuleEditor bind:ruleUi={validationEditor.ruleUi} />
  {/if}

  <Textfield
    textarea
    bind:value={validationEditor.ruleUi.message}
    label="Error Message"
    variant="outlined"
    invalid={!validationEditor.ruleUi.message?.trim()}
  />

  <PreviewBox label="Live Code Preview" value={validationEditor.entry.assert} />
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
