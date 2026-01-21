<script lang="ts">
  import OscdBaseDialog from '../../../../../../../../libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
  import OscdInput from '../../../../../../../../libs/oscd-component/src/oscd-input/OscdInput.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import type { Plugin, Process } from '@oscd-transnet-plugins/shared';
  import { addValidationEntry } from '../../mutations.svelte';
  import type { ValidationEntry } from '../../types';

  interface Props {
    open: boolean;
    plugin: Plugin;
    process: Process;
  }

  let {
    open = $bindable(false),
    plugin,
    process
  }: Props = $props();

  let name = $state<string>('');
  let xml = $state<string>('');

  let valid = $derived(Boolean(name.trim()) && Boolean(xml.trim()));

  const cancel = () => closeDialog('cancel');

  function saveValidation() {
    const validationEntry: ValidationEntry = {
      name: name.trim(),
      description: undefined,
      xml: xml.trim(),
      pluginId: plugin.id,
      processId: process.id
    }
    addValidationEntry(validationEntry);

    closeDialog('confirm', validationEntry);
  }

</script>

<OscdBaseDialog
  title="Add validation for {plugin.name}"
  confirmActionText="Add"
  maxWidth="600px"
  maxheight="600px"
  bind:open
  onConfirm={saveValidation}
  onCancel={cancel}
  onClose={cancel}
  confirmDisabled={!valid}
>
  {#snippet content()}
    <div class="add-validation-form">
      <OscdInput
        label="Name"
        placeholder="{plugin.name} Validation"
        variant="outlined"
        bind:value={name}
        required
      />

      <Textfield textarea bind:value={xml} label="XML">
        {#snippet helper()}
          <HelperText>Validation XML</HelperText>
        {/snippet}
      </Textfield>
    </div>
  {/snippet}
</OscdBaseDialog>

<style>
  .add-validation-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
</style>
