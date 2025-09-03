<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import CreateTypeForm from '../../forms/CreateTypeForm.svelte';
  import { TypeOption } from '../../../domain';

  // ===== Props =====
  export let open: boolean = false;
  export let dialogTitle: string;
  export let confirmText: string = 'Confirm';
  export let idLabel: string = 'ID';
  export let autocompleteLabel: string = 'Select Option';

  export let getOptions: () => Promise<TypeOption[]> = async () => [];
  export let isIdTaken: (id: string) => Promise<boolean> = async () => false;

  export let onConfirm: (id: string, selected: any) => void;

  let id;
  let valid = false;
  let selectedItem;

  // ===== Event Handlers =====
  const handleCreate = () => {
    onConfirm(id, selectedItem.id);
  };

  const handleCancel = () => {
    closeDialog('cancel');
  };

  // ===== Util Functions =====
</script>

<div class="generic-create-dialog">
  <OscdBaseDialog
    title={dialogTitle}
    confirmActionText={confirmText}
    maxWidth="800px"
    bind:open
    on:confirm={handleCreate}
    on:cancel={handleCancel}
    confirmDisabled={!valid}
  >
    <div style="padding: 1rem;" slot="content">
      <CreateTypeForm
        {idLabel}
        {autocompleteLabel}
        getOptions={getOptions}
        isIdTakenFn={isIdTaken}
        bind:id
        bind:selectedItem
        bind:valid
      />
    </div>
  </OscdBaseDialog>
</div>
