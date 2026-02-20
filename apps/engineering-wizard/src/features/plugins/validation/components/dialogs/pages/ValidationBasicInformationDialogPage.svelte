<script lang="ts">
  import Textfield from '@smui/textfield';
  import type { XPathValidation } from '@oscd-transnet-plugins/shared';
  import XMLContextSelector from '../../XMLContextSelector.svelte';
  import { OscdInput } from '@oscd-transnet-plugins/oscd-component';

  interface Props {
    validationEntry: XPathValidation;
  }

  let { validationEntry = $bindable() }: Props = $props();
</script>

<div class="validation-form">
  <section class="validation-form__section">
    <OscdInput
      label="Rule Name"
      placeholder="Rule Name"
      variant="outlined"
      bind:value={validationEntry.title}
      required
    />

    <Textfield textarea bind:value={validationEntry.description} label="Description" />
  </section>

  <section class="validation-form__section">
    <p class="validation-form__hint">
      Select the XML location where this rule should be applied.
    </p>

    <XMLContextSelector bind:value={validationEntry.context} />

    <div class="validation-form__preview-box">
      <span class="validation-form__preview-label">Live XPath Preview</span>
      <pre class="validation-form__preview-value">{validationEntry.context || 'SCL//'}</pre>
    </div>
  </section>
</div>

<style>
  .validation-form {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 1rem 0;
  }

  .validation-form__section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .validation-form__hint {
    margin: 0;
  }

  .validation-form__preview-box {
    background: #DAE3E6;
    border-radius: 5px;
    padding: 0.75rem 1rem;
  }

  .validation-form__preview-label {
    font-size: 0.95em;
    font-family: 'Roboto', sans-serif;
    color: #6B9197;
    margin-bottom: 0.5em;
    display: block;
  }

  .validation-form__preview-value {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    color: #1a2b34;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }
</style>
