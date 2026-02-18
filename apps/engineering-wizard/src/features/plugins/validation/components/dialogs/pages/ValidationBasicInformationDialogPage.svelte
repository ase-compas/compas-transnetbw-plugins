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
</style>
