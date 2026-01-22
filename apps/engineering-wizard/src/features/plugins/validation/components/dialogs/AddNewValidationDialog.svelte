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

  let validationEntry = $state<ValidationEntry>({
    severity: 'error',
    title: '',
    context: '',
    assert: '',
    processId: process.id,
    pluginId: plugin.id
  } as ValidationEntry);

  const cancel = () => closeDialog('cancel');

  function saveValidation() {
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
>
  {#snippet content()}
    <div class="add-validation-form">
      <OscdInput
        label="Name"
        placeholder="{plugin.name} Validation"
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
