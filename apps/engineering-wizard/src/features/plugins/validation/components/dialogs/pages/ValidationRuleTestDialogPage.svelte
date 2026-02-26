<script lang="ts">
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';
  import CircularProgress from '@smui/circular-progress';
  import { documentStore } from '../../../../../../documentStore.svelte';
  import {
    validateWithContent,
    type ValidationResult,
  } from '../../../../../../services/validationService';
  import { validationEditor } from '../../../validationEditorStore.svelte';

  let xmlContent = $state(
    documentStore.doc ? new XMLSerializer().serializeToString(documentStore.doc) : '',
  );

  let result = $state<ValidationResult | null>(null);
  let isLoading = $state(false);
  let errorMessage = $state<string | null>(null);

  async function runValidation() {
    if (!xmlContent.trim()) return;
    isLoading = true;
    errorMessage = null;
    result = null;
    try {
      result = await validateWithContent(validationEditor.entry, xmlContent);
    } catch (e) {
      errorMessage = String(e);
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="test-validate">
  <p class="test-validate__hint">
    The loaded XML document is pre-filled below. Edit it if needed, then run the validation to test
    your rule.
  </p>

  <Textfield
    textarea
    bind:value={xmlContent}
    label="XML Document"
    variant="outlined"
    style="width: 100%"
    input$rows={12}
    input$style="font-family: monospace; font-size: 0.9rem; line-height: 1.5;"
  />

  {#if !xmlContent.trim()}
    <p class="test-validate__no-doc">No document loaded. Paste XML content above to test.</p>
  {/if}

  <div class="test-validate__actions">
    <Button
      variant="raised"
      style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
      onclick={runValidation}
      disabled={isLoading || !xmlContent.trim()}
    >
      {#if isLoading}
        <CircularProgress
          style="height: 18px; width: 18px; margin-right: 8px; --mdc-circular-progress-bar-color: var(--white);"
          indeterminate
        />
      {/if}
      {isLoading ? 'Validating…' : 'Run Validation'}
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
          {#each result.errors as err (err.xpath + err.message)}
            <li class="result__error-item">
              <span class="result__error-message">{err.message}</span>
              {#if err.xpath}
                <code class="result__error-xpath">{err.xpath}</code>
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
  }

  .test-validate__hint {
    margin: 0;
  }

  .test-validate__no-doc {
    margin: 0;
    font-size: 0.875rem;
    color: #6b9197;
    font-style: italic;
  }

  .test-validate__actions {
    display: flex;
    align-items: center;
  }

  :global(.test-validate__actions .smui-button) {
    flex: 0 0 auto;
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
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
  }

  .result__value {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
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
    font-size: 0.8rem;
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

  .result__error-message {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: #b33a3a;
  }

  .result__error-xpath {
    font-size: 0.8rem;
    color: #6b9197;
    background: #fbe8e8;
    padding: 1px 4px;
    border-radius: 3px;
    align-self: flex-start;
  }
</style>
