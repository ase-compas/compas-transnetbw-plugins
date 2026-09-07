<script lang="ts">
  import { validationEditor } from '../store/ruleEditorStore.svelte';
  import XmlViewer from '../viewer/XmlViewer.svelte';
  import FormBlock from '../form/FormBlock.svelte';
  import Button from '../../ui/Button.svelte';
  import Spinner from '../../ui/Spinner.svelte';
  import type { RuleTestError, RuleTestResult, RuleTestRunner } from '../types';

  interface Props {
    /** Serialized SCL document the rule is tested against, if one is open. */
    sclDocument?: string;
    /** Executes the current draft against the document. */
    onTest?: RuleTestRunner;
  }

  const { sclDocument = '', onTest }: Props = $props();

  function resolveErrorDisplay(err: RuleTestError, userMessage: string) {
    const msg = userMessage.trim();
    const message = msg.length > 0 ? msg : err.message;
    const note =
      err.lineNumber === null && err.message.startsWith('No context nodes found')
        ? 'No context nodes found'
        : undefined;
    return { message, note };
  }

  const xmlContent = $derived(sclDocument);

  let result = $state<RuleTestResult | null>(null);
  let isLoading = $state(false);
  let errorMessage = $state<string | null>(null);

  const highlightLines = $derived(
    result?.errors?.map((e) => e.lineNumber).filter((l) => l != null) ?? [],
  );

  async function runValidation() {
    if (!xmlContent.trim() || !onTest) return;
    isLoading = true;
    errorMessage = null;
    result = null;
    try {
      result = await onTest($state.snapshot(validationEditor.entry), xmlContent);
    } catch (e) {
      console.error('[ValidationRuleTestDialog] Validation request failed', {
        context: validationEditor.entry.context,
        assertion: validationEditor.entry.assertion,
        error: e,
      });
      errorMessage = String(e);
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="test-validate">
  <FormBlock
    label="The loaded XML document is displayed below. Run the validation to test your rule against it."
  />

  {#if xmlContent.trim()}
    <XmlViewer value={xmlContent} {highlightLines} />
  {:else}
    <p class="test-validate__no-doc">No document loaded. Open a document to test your rule.</p>
  {/if}

  <div class="test-validate__actions">
    <Button
      variant="unelevated"
      onclick={runValidation}
      disabled={isLoading || !xmlContent.trim() || !onTest}
    >
      {#if isLoading}
        <Spinner size="16px" />
      {/if}
      <span>{isLoading ? 'Validating…' : 'Run Validation'}</span>
    </Button>
  </div>

  {#if errorMessage}
    <div class="result result--error">
      <span class="result__label">Request failed</span>
      <span class="result__value">{errorMessage}</span>
    </div>
  {:else if result}
    <div class="result" class:result--valid={result.valid} class:result--invalid={!result.valid}>
      <span class="result__label">{result.valid ? 'Rule passed' : 'Rule failed'}</span>

      {#if result.valid}
        <span class="result__value">The rule passed successfully for the provided document.</span>
      {:else}
        <ul class="result__errors">
          {#each result.errors as err (String(err.lineNumber) + err.message)}
            {@const display = resolveErrorDisplay(err, validationEditor.entry.message ?? '')}
            <li class="result__error-item">
              {#if err.lineNumber != null}
                <span class="result__error-line">Line {err.lineNumber}</span>
              {/if}
              <span class="result__error-message">{display.message}</span>
              {#if display.note}
                <span class="result__error-note">{display.note}</span>
              {/if}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/if}
</div>

<style>
  .test-validate {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1rem 0;
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
  }

  .test-validate__no-doc {
    margin: 0;
    font-size: var(--ew-font-size-body, 0.875rem);
    color: #6b9197;
    font-style: italic;
  }

  .test-validate__actions {
    display: flex;
    align-items: center;
  }

  .result {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: 1px solid #b2c7cb;
    background: #dae3e6;
  }

  .result__label {
    font-weight: 600;
    font-size: var(--ew-font-size-body, 0.875rem);
  }

  .result__value {
    font-size: var(--ew-font-size-body, 0.875rem);
    color: #1a2b34;
  }

  /* Passed */
  .result--valid {
    background: #e8f6ef;
    border-color: #6bbf8e;
  }

  .result--valid .result__label {
    color: #2d7a4f;
  }

  /* Failed */
  .result--invalid {
    background: #fdf0f0;
    border-color: #e08080;
  }

  .result--invalid .result__label {
    color: #b33a3a;
  }

  /* Request error */
  .result--error {
    background: #fff8e1;
    border-color: #f0c040;
  }

  .result--error .result__label {
    color: #7a5800;
  }

  .result--error .result__value {
    font-family: monospace;
    font-size: var(--ew-font-size-small, 0.75rem);
  }

  /* Error list */
  .result__errors {
    margin: 0;
    padding: 0 0 0 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .result__error-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .result__error-line {
    display: inline-block;
    align-self: flex-start;
    font-size: var(--ew-font-size-small, 0.75rem);
    font-family: monospace;
    font-weight: 600;
    color: #b33a3a;
    background: #fbe8e8;
    border: 1px solid #e08080;
    border-radius: 3px;
    padding: 1px 6px;
  }

  .result__error-message {
    font-size: var(--ew-font-size-body, 0.875rem);
    color: #b33a3a;
  }

  .result__error-note {
    font-size: var(--ew-font-size-small, 0.75rem);
    font-style: italic;
    color: #7a5800;
  }
</style>
