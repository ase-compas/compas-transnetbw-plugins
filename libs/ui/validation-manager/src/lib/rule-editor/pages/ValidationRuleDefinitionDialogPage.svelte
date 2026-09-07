<script lang="ts">
  import { buildAssertionExpression } from '../utils/xpathBuilder';
  import {
    validationEditor,
    parseAssertionToRuleUi,
    isExpertXPathParseable,
  } from '../store/ruleEditorStore.svelte';

  import TextField from '../../ui/TextField.svelte';
  import AttributeRuleEditor from '../editors/AttributeRuleEditor.svelte';
  import AttributeCheckFields from '../fields/AttributeCheckFields.svelte';
  import ElementRuleEditor from '../editors/ElementRuleEditor.svelte';
  import ElementCheckFields from '../fields/ElementCheckFields.svelte';
  import PreviewBox from '../viewer/PreviewBox.svelte';
  import ToggleSwitch from '../form/ToggleSwitch.svelte';
  import FormBlock from '../form/FormBlock.svelte';

  const isMessageEmpty = $derived(!validationEditor.ruleUi.message?.trim());

  const rulePreview = $derived.by(() => {
    const { mode, elementName, expertMode, expertXPath } = validationEditor.ruleUi;
    const assert = validationEditor.entry.assertion?.trim();
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

    <div class="field-wrap">
      <TextField
        bind:value={validationEditor.ruleUi.message}
        textarea
        label="Error Message"
        invalid={isMessageEmpty}
        ariaLabel="Error Message"
      >
        {#snippet helper()}
          {#if isMessageEmpty}Error Message is required.{/if}
        {/snippet}
      </TextField>
    </div>
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

  .field-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  :global(.field-wrap .field-input) {
    width: 100%;
  }

  .expert-toggle-row {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
  }

  .expert-toggle-row__label {
    font-size: var(--ew-font-size-small, 0.75rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--base01, #607d8b);
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
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--base03, #263238);
  }

  .expert-editor__hint {
    font-size: var(--ew-font-size-small, 0.75rem);
    font-weight: var(--ew-font-weight-normal, 400);
    color: var(--base01, #607d8b);
  }

  .expert-editor__hint code {
    font-family: monospace;
    background: var(--base3, #eceff1);
    padding: 1px 4px;
    border-radius: 3px;
  }

  .expert-editor__textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 0.625rem 0.75rem;
    font-family: monospace;
    font-size: var(--ew-font-size-body, 0.875rem);
    line-height: 1.5;
    color: var(--base03, #263238);
    background: var(--white, #ffffff);
    border: 1px solid #b2c7cb;
    border-radius: 4px;
    resize: vertical;
    outline: none;
    transition: border-color 0.15s;
  }

  .expert-editor__textarea:focus {
    border-color: var(--primary-base, #37474f);
  }
</style>
