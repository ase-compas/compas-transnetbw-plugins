<script lang="ts">
  import HelperText from '@smui/textfield/helper-text';
  import Textfield from '@smui/textfield';
  import OscdInput from '../../../../../../../../../libs/oscd-component/src/oscd-input/OscdInput.svelte';
  import type { XPathValidation } from '@oscd-transnet-plugins/shared';

  interface Props {
    validationEntry: XPathValidation;
  }

  let { validationEntry = $bindable() }: Props = $props();
</script>

<div class="add-validation-form">
  <OscdInput
    label="Name"
    placeholder="Validation"
    variant="outlined"
    bind:value={validationEntry.title}
    required
  />

  <Textfield textarea bind:value={validationEntry.context} label="Context">
    {#snippet helper()}
      <HelperText>Context</HelperText>
    {/snippet}
  </Textfield>

  <Textfield textarea bind:value={validationEntry.assert} label="assertion XML">
    {#snippet helper()}
      <HelperText>Assert</HelperText>
    {/snippet}
  </Textfield>

  <Textfield textarea bind:value={validationEntry.message} label="Message">
    {#snippet helper()}
      <HelperText>Message</HelperText>
    {/snippet}
  </Textfield>
</div>

<style>
  .add-validation-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
</style>
