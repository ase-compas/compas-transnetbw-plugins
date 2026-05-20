<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import { buildAssertionExpression, parentOfPath } from '../../../xpathBuilder';
  import { validationEditor } from '../../../validationEditorStore.svelte';

  import AttributeRuleEditor from '../../AttributeRuleEditor.svelte';
  import ElementRuleEditor from '../../ElementRuleEditor.svelte';
  import PreviewBox from '../../PreviewBox.svelte';

  const rulePreview = $derived.by(() => {
    const { mode, elementPath } = validationEditor.ruleUi;
    const assert = validationEditor.entry.assert?.trim();

    if (mode === 'element') {
      if (!elementPath) return '';
      return `Element:   ${elementPath}\nAssertion: ${assert || '—'}`;
    }

    const ctx = validationEditor.entry.context?.trim();
    if (!ctx && !assert) return '';
    return `Context:   ${ctx || '—'}\nAssertion: ${assert || '—'}`;
  });

  $effect(() => {
    validationEditor.entry.message = validationEditor.ruleUi.message;

    if (validationEditor.ruleUi.mode === 'element') {
      validationEditor.entry.context = parentOfPath(validationEditor.ruleUi.elementPath);
    }

    validationEditor.entry.assert = buildAssertionExpression(validationEditor.ruleUi);
  });
</script>

<div class="rule-editor">
  <p class="rule-info">Define what the rule checks and the message shown if it fails</p>

  {#if validationEditor.ruleUi.mode === 'attribute'}
    <AttributeRuleEditor bind:ruleUi={validationEditor.ruleUi} context={validationEditor.entry.context} />
  {:else}
    <ElementRuleEditor bind:ruleUi={validationEditor.ruleUi} />
  {/if}

  <div class="field-wrap">
    <Textfield
      textarea
      bind:value={validationEditor.ruleUi.message}
      label="Error Message"
      variant="outlined"
      invalid={!validationEditor.ruleUi.message?.trim()}
    >
      {#snippet helper()}<HelperText validationMsg>Error Message is required.</HelperText>{/snippet}
    </Textfield>
  </div>

  <PreviewBox label="Rule Preview" value={rulePreview} />
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

  /* Groups field + helper-line so parent gap doesn't inflate spacing */
  .field-wrap {
    display: flex;
    flex-direction: column;
  }
</style>
