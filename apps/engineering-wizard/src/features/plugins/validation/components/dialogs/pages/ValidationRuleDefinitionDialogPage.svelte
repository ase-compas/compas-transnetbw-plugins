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
  import AttributeCheckFields from '../../AttributeCheckFields.svelte';
  import ElementRuleEditor from '../../ElementRuleEditor.svelte';
  import ElementCheckFields from '../../ElementCheckFields.svelte';
  import PreviewBox from '../../PreviewBox.svelte';
  import ToggleSwitch from '../../ToggleSwitch.svelte';
  import FormBlock from '../../FormBlock.svelte';

  const isMessageEmpty = $derived(!validationEditor.ruleUi.message?.trim());

  const rulePreview = $derived.by(() => {
    const { mode, elementName, expertMode, expertXPath } = validationEditor.ruleUi;
    const assert = validationEditor.entry.assert?.trim();
    const ctx = validationEditor.entry.context?.trim();

    if (expertMode) {
      return `Context:   ${ctx || '—'}\nAssertion: ${expertXPath || '—'}`;
    }

    if (mode === 'element') {
      if (!elementName) return '';
      return `Context:   ${ctx || '—'}\nElement:   ${elementName}\nAssertion: ${assert || '—'}`;
    }

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
    if (isExpertXPathParseable(xpath, validationEditor.ruleUi.message)) {
      const parsed = parseAssertionToRuleUi(xpath, validationEditor.ruleUi.message);
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

{#snippet errorMessageHelper()}
  <HelperText validationMsg>Error Message is required.</HelperText>
{/snippet}

<div class="rule-editor">
  <FormBlock label="Define what the rule checks">
    {#snippet aside()}
      <div class="expert-toggle-row">
        <span class="expert-toggle-row__label">Expert mode</span>
        <ToggleSwitch checked={validationEditor.ruleUi.expertMode} onclick={handleExpertClick} />
      </div>
    {/snippet}

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
      <ElementRuleEditor bind:ruleUi={validationEditor.ruleUi} context={validationEditor.entry.context} />
    {/if}
  </FormBlock>

  <FormBlock bold label="Define the message to be shown if the rule fails">
    {#if !validationEditor.ruleUi.expertMode}
      {#if validationEditor.ruleUi.mode === 'attribute'}
        <AttributeCheckFields bind:ruleUi={validationEditor.ruleUi} />
      {:else}
        <ElementCheckFields bind:ruleUi={validationEditor.ruleUi} />
      {/if}
    {/if}

    <Textfield
      textarea
      bind:value={validationEditor.ruleUi.message}
      label="Error Message"
      variant="outlined"
      invalid={isMessageEmpty}
      helper={isMessageEmpty ? errorMessageHelper : undefined}
    />
  </FormBlock>

  <PreviewBox label="Rule Preview" value={rulePreview} />
</div>

<style>
  .rule-editor {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 2rem;
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
