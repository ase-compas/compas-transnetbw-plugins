<script lang="ts">
  import TextField from '../../ui/TextField.svelte';
  import Select from '../../ui/Select.svelte';
  import RadioGroup from '../../ui/RadioGroup.svelte';
  import XMLContextSelector from '../editors/XMLContextSelector.svelte';
  import FormBlock from '../form/FormBlock.svelte';
  import FormBlockGroup from '../form/FormBlockGroup.svelte';
  import { validationEditor } from '../store/ruleEditorStore.svelte';
  import { SEVERITY_LEVELS } from '../utils/validationRuleUi';

  const isTitleEmpty = $derived(!validationEditor.entry.title?.trim());

  const severityOptions = SEVERITY_LEVELS.map((l) => ({ value: l.value, label: l.label }));
  const modeOptions = [
    { value: 'attribute', label: 'Attribute check' },
    { value: 'element', label: 'Element check' },
  ];
</script>

<div class="validation-form">
  <FormBlock label="Provide a clear name and description to identify this validation rule.">
    <TextField
      bind:value={validationEditor.entry.title}
      label="Rule Name"
      invalid={isTitleEmpty}
      ariaLabel="Rule Name"
    >
      {#snippet helper()}
        {#if isTitleEmpty}Rule Name is required.{/if}
      {/snippet}
    </TextField>

    <TextField
      bind:value={validationEditor.entry.description}
      textarea
      label="Description"
    />

    <Select
      bind:value={validationEditor.entry.severity}
      label="Severity"
      options={severityOptions}
    />
  </FormBlock>

  <FormBlockGroup>
    <FormBlock bold label="What kind of check does this rule perform?">
      <RadioGroup bind:value={validationEditor.ruleUi.mode} options={modeOptions} />
    </FormBlock>

    <FormBlock
      bold
      label={validationEditor.ruleUi.mode === 'attribute'
        ? 'Select the node this rule checks.'
        : "Select the parent node — you'll pick which child element to check next."}
    >
      <XMLContextSelector bind:value={validationEditor.entry.context} />
    </FormBlock>
  </FormBlockGroup>
</div>

<style>
  .validation-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;
  }
</style>
