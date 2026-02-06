<script lang="ts">
  import Textfield from '@smui/textfield';
  import OscdInput from '../../../../../../../../../libs/oscd-component/src/oscd-input/OscdInput.svelte';
  import type { XPathValidation } from '@oscd-transnet-plugins/shared';
  import XMLContextSelector from '../../XMLContextSelector.svelte';

  interface Props {
    validationEntry: XPathValidation;
  }

  let { validationEntry = $bindable() }: Props = $props();
</script>

<div class="validation-form">
  <section class="validation-form__section">
    <p class="validation-form__hint">
      Provide a clear name and description to identify this validation rule.
    </p>

    <div class="validation-form__field">
      <OscdInput
        label="Rule Name"
        placeholder="Rule Name"
        variant="outlined"
        bind:value={validationEntry.title}
        required
      />
    </div>

    <div class="validation-form__field">
      <Textfield textarea bind:value={validationEntry.description} label="Description" />
    </div>
  </section>

  <section class="validation-form__section">
    <p class="validation-form__hint">
      Select the XML location where this rule should be applied.
    </p>

    <div class="validation-form__field">
      <XMLContextSelector />
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

  .validation-form__field {
    display: flex;
    flex-direction: column;
  }
</style>
