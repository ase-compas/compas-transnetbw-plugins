<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';
  import XMLContextSelector from '../../XMLContextSelector.svelte';
  import PreviewBox from '../../PreviewBox.svelte';
  import { validationEditor } from '../../../validationEditorStore.svelte';
</script>

<div class="validation-form">
  <!-- Block 1: identity — name + description -->
  <div class="form-block">
    <p class="form-block__intro">
      Provide a clear name and description to identify this validation rule.
    </p>
    <Textfield
      variant="outlined"
      label="Rule Name"
      placeholder="Rule Name"
      style="width: 100%"
      bind:value={validationEditor.entry.title}
      invalid={!validationEditor.entry.title?.trim()}
    >
      {#snippet helper()}<HelperText validationMsg>Rule Name is required.</HelperText>{/snippet}
    </Textfield>
    <Textfield textarea bind:value={validationEditor.entry.description} label="Description" />
  </div>

  <!-- Block 2: check type -->
  <div class="form-block">
    <p class="form-block__label">What kind of check does this rule perform?</p>
    <div class="mode-radio-group">
      <FormField>
        <Radio bind:group={validationEditor.ruleUi.mode} value="attribute" touch />
        {#snippet label()}Attribute check{/snippet}
      </FormField>
      <FormField>
        <Radio bind:group={validationEditor.ruleUi.mode} value="element" touch />
        {#snippet label()}Element check{/snippet}
      </FormField>
    </div>
  </div>

  <!-- Block 3: location selector + preview -->
  <div class="form-block">
    <p class="form-block__label">
      {#if validationEditor.ruleUi.mode === 'attribute'}
        Select the XML location where this rule should be applied.
      {:else}
        Select the element to check.
      {/if}
    </p>
    {#if validationEditor.ruleUi.mode === 'attribute'}
      <XMLContextSelector bind:value={validationEditor.entry.context} />
      <PreviewBox label="XPath context preview" value={validationEditor.entry.context} />
    {:else}
      <XMLContextSelector bind:value={validationEditor.ruleUi.elementPath} />
      <PreviewBox label="Element to check" value={validationEditor.ruleUi.elementPath} />
    {/if}
  </div>
</div>

<style>
  /* 2rem between the 3 top-level blocks */
  .validation-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;
  }

  /* 0.75rem between every item inside a block */
  .form-block {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .form-block__intro {
    margin: 0;
    font-size: var(--ew-font-size-body);
    color: var(--base01);
  }

  .form-block__label {
    margin: 0;
    font-size: var(--ew-font-size-body);
    font-weight: var(--ew-font-weight-medium);
    color: var(--base00);
  }

  .mode-radio-group {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    --mdc-theme-secondary: var(--primary-base);
  }
</style>
