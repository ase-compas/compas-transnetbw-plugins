<script lang="ts">
  import Textfield from '@smui/textfield';
  import type { XPathValidation } from '@oscd-transnet-plugins/shared';
  import XMLContextSelector from '../../XMLContextSelector.svelte';
  import { OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import type { RuleUiState } from '../../../validationRuleUi';
  import PreviewBox from '../../PreviewBox.svelte';
  import InfoBox from '../../InfoBox.svelte';

  interface Props {
    validationEntry: XPathValidation;
    ruleUi: RuleUiState;
  }

  let { validationEntry = $bindable(), ruleUi = $bindable() }: Props = $props();
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
      What kind of check does this rule perform?
    </p>

    <div class="mode-switcher">
      <button
        type="button"
        class="mode-btn"
        class:mode-btn--active={ruleUi.mode === 'attribute'}
        onclick={() => (ruleUi.mode = 'attribute')}
      >
        Attribute check
      </button>
      <button
        type="button"
        class="mode-btn"
        class:mode-btn--active={ruleUi.mode === 'element'}
        onclick={() => (ruleUi.mode = 'element')}
      >
        Element check
      </button>
    </div>

    {#if ruleUi.mode === 'attribute'}
      <p class="validation-form__hint">
        Select the XML location where this rule should be applied.
      </p>

      <XMLContextSelector bind:value={validationEntry.context} />

      <PreviewBox label="Live XPath Preview" value={validationEntry.context || 'SCL//'} />
    {:else}
      <InfoBox title="No context selection needed">
        {#snippet children()}
          <span class="info-box__body">
            Element checks are evaluated globally against the document. The context is derived automatically from the element type you select in the next step.
          </span>
        {/snippet}
      </InfoBox>
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
    display: flex;
    gap: 0;
    border: 1px solid #b2c7cb;
    border-radius: 5px;
    overflow: hidden;
    align-self: flex-start;
  }

  .mode-btn {
    padding: 0.5rem 1.25rem;
    background: var(--base3, #f4f7f8);
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--base03, #002b36);
    transition: background 0.15s, color 0.15s;
  }

  .mode-btn + .mode-btn {
    border-left: 1px solid #b2c7cb;
  }

  .mode-btn--active {
    background: var(--primary-base, #2e6975);
    color: var(--white, #fff);
  }

  .mode-btn:not(.mode-btn--active):hover {
    background: var(--base3, #dae3e6);
  }

  .info-box__body {
    color: var(--base01, #586e75);
    line-height: 1.5;
  }
</style>
