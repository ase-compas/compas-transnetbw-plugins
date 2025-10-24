<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import CreateTypeForm from '../../forms/CreateTypeForm.svelte';
  import { TypeOption } from '../../../domain';
  import { onMount } from 'svelte';

  // ===== Props =====
  export let open: boolean = false;
  export let dialogTitle: string;
  export let confirmText: string = 'Confirm';
  export let idLabel: string = 'ID';
  export let autocompleteLabel: string = 'Select Option';

  export let getOptions: () => Promise<TypeOption[]> = async () => [];
  export let isIdTaken: (id: string) => Promise<boolean> = async () => false;
  export let onConfirm: (id: string, selected: any, createFromDefault?: boolean) => void;
  export let checkDefaultAvailable: (instanceType: string) => Promise<boolean> = async () => false;
  export let showCreateFromDefault: boolean = false;

  let id;
  let valid = false;
  let selectedItem;
  let createFromDefault;
  let formEl;

  // ===== Event Handlers =====
  const handleCreate = () => {
    onConfirm(id, selectedItem.id, createFromDefault);
  };

  const handleCancel = () => {
    closeDialog('cancel');
  };

  const handleClose = () => {
    closeDialog('close');
  };

  onMount(() => {
    setTimeout(() => {
      formEl.focus();
    }, 300)
  })

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
    on:close={handleClose}
    confirmDisabled={!valid}
  >
    <div style="padding: 1rem;" slot="content">
      <CreateTypeForm
        bind:this={formEl}
        {idLabel}
        {autocompleteLabel}
        getOptions={getOptions}
        isIdTakenFn={isIdTaken}
        bind:id
        bind:selectedItem
        bind:createFromDefault
        bind:valid
        on:submit={handleCreate}
        showCreateFromDefault={showCreateFromDefault}
        checkDefaultAvailable={checkDefaultAvailable}
      />
    </div>
  </OscdBaseDialog>
</div>
