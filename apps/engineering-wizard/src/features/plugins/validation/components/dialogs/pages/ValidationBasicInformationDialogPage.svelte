<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';
  import XMLContextSelector from '../../XMLContextSelector.svelte';
  import FormBlock from '../../FormBlock.svelte';
  import FormBlockGroup from '../../FormBlockGroup.svelte';
  import {
    validationEditor,
    splitElementPath,
    joinElementPath,
  } from '../../../validationEditorStore.svelte';

  // The selector edits one path; in element mode its last node is the checked child.
  let selectedPath = $state(
    validationEditor.ruleUi.mode === 'element'
      ? joinElementPath(validationEditor.entry.context, validationEditor.ruleUi.elementName)
      : validationEditor.entry.context,
  );

  $effect(() => {
    if (validationEditor.ruleUi.mode === 'element') {
      const { context, elementName } = splitElementPath(selectedPath);
      if (validationEditor.entry.context !== context) validationEditor.entry.context = context;
      if (validationEditor.ruleUi.elementName !== elementName) {
        validationEditor.ruleUi.elementName = elementName;
      }
    } else if (validationEditor.entry.context !== selectedPath) {
      validationEditor.entry.context = selectedPath;
    }
  });

  const isTitleEmpty = $derived(!validationEditor.entry.title?.trim());
</script>

{#snippet ruleNameHelper()}
  <HelperText validationMsg>Rule Name is required.</HelperText>
{/snippet}

<div class="validation-form">
  <FormBlock label="Provide a clear name and description to identify this validation rule.">
    <Textfield
      variant="outlined"
      label="Rule Name"
      placeholder="Rule Name"
      style="width: 100%"
      bind:value={validationEditor.entry.title}
      invalid={isTitleEmpty}
      helper={ruleNameHelper}
    />
    <Textfield textarea bind:value={validationEditor.entry.description} label="Description" />
  </FormBlock>

  <FormBlockGroup>
    <FormBlock bold label="What kind of check does this rule perform?">
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
    </FormBlock>

    <FormBlock
      bold
      label={validationEditor.ruleUi.mode === 'attribute'
        ? 'Select the node this rule checks.'
        : 'Select the element this rule checks. Its parent node becomes the rule context.'}
    >
      <XMLContextSelector
        bind:value={selectedPath}
        allowCustomElements={validationEditor.ruleUi.mode === 'element'}
      />
    </FormBlock>
  </FormBlockGroup>
</div>

<style>
  /* 1.25rem between the top-level blocks */
  .validation-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1rem 0;
  }

  .mode-radio-group {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    --mdc-theme-secondary: var(--oscd-plugin-brand);
  }
</style>
