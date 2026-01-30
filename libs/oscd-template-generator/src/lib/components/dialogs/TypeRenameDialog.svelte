<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import { DataTypeKind, getIdGeneratorService, TypeIdInput } from '@oscd-transnet-plugins/oscd-template-generator';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { onMount } from 'svelte';

  interface Props {
    // The ID of the type to rename
    typeId: string;
    // The kind of the type to rename
    typeKind: DataTypeKind;

    // Whether the dialog is open
    open?: boolean;
  }

  let inputEl;

  let { open = $bindable(false), typeId, typeKind }: Props = $props();

  let valid: boolean = $state(false)

  onMount(async() => {
    setTimeout(() => {
      inputEl.select();
    }, 200)
  })

  function handleRename() {
    if (!valid) return;
    closeDialog('confirm', { newTypeId: typeId });
  }

  function handleCancel() {
    closeDialog('exit');
  }

  function handleClose ()  {
    closeDialog('exit');
  }
</script>


<OscdBaseDialog
  bind:open
  title="Rename Type"
  confirmActionText="Rename"
  confirmActionColor="primary"
  cancelActionText="Cancel"
  maxWidth="500px"
  height="auto"
  confirmDisabled={!valid}
  onConfirm={handleRename}
  onCancel={handleCancel}
  onClose={handleClose}
  >

  {#snippet content()}
    <p style="margin-top: 1rem">
      Please enter a new ID for the type. All references to the old ID will be updated accordingly.
    </p>
    <form onsubmit={e => { e.preventDefault(); handleRename(); }}>
      <TypeIdInput
        bind:typeId={typeId}
        bind:valid={valid}
        bind:this={inputEl}
        {typeKind}
        idLabel="New Type ID"
        showErrorsOnInput={true}
        canGenerateId={false}
      />
      <button type="submit" style="display: none">submit</button>
    </form>
  {/snippet}

</OscdBaseDialog>

