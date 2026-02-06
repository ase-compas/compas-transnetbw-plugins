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

<div class="add-validation-form">
  <OscdInput
    label="Rule Name"
    placeholder="Rule Name"
    variant="outlined"
    bind:value={validationEntry.title}
    required
  />
  <Textfield textarea bind:value={validationEntry.description} label="Description" />
  <XMLContextSelector />
</div>

<style>
  .add-validation-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
</style>
