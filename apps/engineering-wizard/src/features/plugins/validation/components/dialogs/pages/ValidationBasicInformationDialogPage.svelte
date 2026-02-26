<script lang="ts">
  import Textfield from '@smui/textfield';
  import SegmentedButton, { Label, Segment } from '@smui/segmented-button';
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
      required
    />

    <Textfield textarea bind:value={validationEditor.entry.description} label="Description" />
  </section>

  <section class="validation-form__section">
    <p class="validation-form__hint">
      What kind of check does this rule perform?
    </p>

    <div class="mode-switcher">
    <SegmentedButton
      segments={modes}
      singleSelect
      bind:selected={validationEditor.ruleUi.mode}
    >
      {#snippet segment(seg)}
        <Segment segment={seg}>
          <Label>{seg === 'attribute' ? 'Attribute check' : 'Element check'}</Label>
        </Segment>
      {/snippet}
    </SegmentedButton>
    </div>

    {#if validationEditor.ruleUi.mode === 'attribute'}
      <p class="validation-form__hint">
        Select the XML location where this rule should be applied.
      </p>

      <XMLContextSelector bind:value={validationEditor.entry.context} />

      <PreviewBox label="XPath context preview" value={validationEditor.entry.context || 'SCL//'} />
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

  .mode-switcher {
    --mdc-segmented-button-selected-container-fill-color: var(--primary-base);
    --mdc-segmented-button-selected-ink-color: var(--white);
  }

  .info-box__body {
    color: var(--base01, #586e75);
    line-height: 1.5;
  }
</style>
