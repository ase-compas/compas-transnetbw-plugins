<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import { buildAssertionExpression } from '../../../xpathBuilder';
  import {
    validationEditor,
    parseAssertionToRuleUi,
    isExpertXPathParseable,
  } from '../../../validationEditorStore.svelte';

  import AttributeRuleEditor from '../../AttributeRuleEditor.svelte';
  import ElementRuleEditor from '../../ElementRuleEditor.svelte';
  import PreviewBox from '../../PreviewBox.svelte';
  import ToggleSwitch from '../../ToggleSwitch.svelte';

  const rulePreview = $derived.by(() => {
    const { mode, elementPath, expertMode, expertXPath } = validationEditor.ruleUi;
    const assert = validationEditor.entry.assert?.trim();

    if (expertMode) {
      const ctx = validationEditor.entry.context?.trim();
      return `Context:   ${ctx || '—'}\nAssertion: ${expertXPath || '—'}`;
    }

    if (mode === 'element') {
      if (!elementPath) return '';
      return `Element:   ${elementPath}\nAssertion: ${assert || '—'}`;
    }

    const ctx = validationEditor.entry.context?.trim();
    if (!ctx && !assert) return '';
    return `Context:   ${ctx || '—'}\nAssertion: ${assert || '—'}`;
  });

  function enterExpertMode() {
    // Only seed from the form builder on first entry. Once the user has typed
    // a custom XPath, preserve it across mode toggles (per user requirement).
    if (!validationEditor.ruleUi.expertXPath.trim()) {
      validationEditor.ruleUi.expertXPath = buildAssertionExpression(validationEditor.ruleUi);
    }
    validationEditor.ruleUi.expertMode = true;
  }

  function exitExpertMode() {
    const xpath = validationEditor.ruleUi.expertXPath.trim();
    // Preserve expertXPath in memory — user can switch back without losing their work.
    if (isExpertXPathParseable(xpath, validationEditor.ruleUi.message, validationEditor.entry.context)) {
      const parsed = parseAssertionToRuleUi(
        xpath,
        validationEditor.ruleUi.message,
        validationEditor.entry.context,
      );
      // Keep expertXPath so toggling back to expert mode restores their input
      validationEditor.ruleUi = {
        ...parsed,
        expertMode: false,
        expertXPath: validationEditor.ruleUi.expertXPath,
      };
    } else {
      // XPath can't be represented in the form builder — silently fall back.
      // Form fields keep their previous values; expertXPath stays for when they return.
      validationEditor.ruleUi.expertMode = false;
    }
  }

  function handleExpertClick() {
    if (!validationEditor.ruleUi.expertMode) {
      enterExpertMode();
    } else {
      exitExpertMode();
    }
  }
</script>

<div class="rule-editor">
  <div class="rule-editor__header">
    <p class="rule-info">Define what the rule checks and the message shown if it fails</p>

    <div class="expert-toggle-row">
      <span class="expert-toggle-row__label">Expert mode</span>
      <ToggleSwitch checked={validationEditor.ruleUi.expertMode} onclick={handleExpertClick} />
    </div>
  </div>

  {#if validationEditor.ruleUi.expertMode}
    <div class="expert-editor">
      <label class="expert-editor__label" for="expert-xpath-input">
        XPath assertion
        <span class="expert-editor__hint">
          Written relative to the context node selected on the previous page.
          Example: <code>normalize-space(@name) = 'Bay1'</code>
        </span>
      </label>
      <textarea
        id="expert-xpath-input"
        class="expert-editor__textarea"
        bind:value={validationEditor.ruleUi.expertXPath}
        placeholder="e.g. normalize-space(@name) = 'Bay1'"
        rows="4"
        spellcheck="false"
      ></textarea>
    </div>
  {:else if validationEditor.ruleUi.mode === 'attribute'}
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

  .rule-editor__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .rule-info {
    margin: 0;
    flex: 1;
  }

  .expert-toggle-row {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
  }

  .expert-toggle-row__label {
    font-size: var(--ew-font-size-small);
    font-weight: var(--ew-font-weight-medium);
    color: var(--base01);
    user-select: none;
    line-height: 1;
  }

  .field-wrap {
    display: flex;
    flex-direction: column;
  }

  /* Expert mode textarea */
  .expert-editor {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .expert-editor__label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: var(--ew-font-size-body);
    font-weight: var(--ew-font-weight-medium);
    color: var(--base03);
  }

  .expert-editor__hint {
    font-size: var(--ew-font-size-small);
    font-weight: var(--ew-font-weight-normal);
    color: var(--base01);
  }

  .expert-editor__hint code {
    font-family: monospace;
    background: var(--base3);
    padding: 1px 4px;
    border-radius: 3px;
  }

  .expert-editor__textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 0.625rem 0.75rem;
    font-family: monospace;
    font-size: var(--ew-font-size-body);
    line-height: 1.5;
    color: var(--base03);
    background: var(--white);
    border: 1px solid #b2c7cb;
    border-radius: 4px;
    resize: vertical;
    outline: none;
    transition: border-color 0.15s;
  }

  .expert-editor__textarea:focus {
    border-color: var(--primary-base);
  }
</style>
