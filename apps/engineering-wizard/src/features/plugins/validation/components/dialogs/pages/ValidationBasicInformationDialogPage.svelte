<script lang="ts">
  import Textfield from '@smui/textfield';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';
  import XMLContextSelector from '../../XMLContextSelector.svelte';
  import { OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import PreviewBox from '../../PreviewBox.svelte';
  import { validationEditor } from '../../../validationEditorStore.svelte';

  const modes = ['attribute', 'element'] as const;
</script>

<div class="validation-form">
  <section class="validation-form__section">
    <OscdInput
      label="Rule Name"
      placeholder="Rule Name"
      variant="outlined"
      bind:value={validationEditor.entry.title}
      invalid={!validationEditor.entry.title?.trim()}
    />

    <Textfield textarea bind:value={validationEditor.entry.description} label="Description" />
  </section>

  <section class="validation-form__section">
    <p class="validation-form__hint">
      What kind of check does this rule perform?
    </p>

    <div class="mode-radio-group">
      <FormField>
        <Radio
          bind:group={validationEditor.ruleUi.mode}
          value="attribute"
          touch
        />
        {#snippet label()}Attribute check{/snippet}
      </FormField>
      <FormField>
        <Radio
          bind:group={validationEditor.ruleUi.mode}
          value="element"
          touch
        />
        {#snippet label()}Element check{/snippet}
      </FormField>
    </div>

    {#if validationEditor.ruleUi.mode === 'attribute'}
      <p class="validation-form__hint">
        Select the XML location where this rule should be applied.
      </p>

      <XMLContextSelector bind:value={validationEditor.entry.context} />

      <PreviewBox label="XPath context preview" value={validationEditor.entry.context} />
    {:else}
      <PreviewBox label="Auto-derived context" value='//SCL' />
    {/if}
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

  .mode-radio-group {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    --mdc-theme-secondary: var(--primary-base);
  }
</style>
