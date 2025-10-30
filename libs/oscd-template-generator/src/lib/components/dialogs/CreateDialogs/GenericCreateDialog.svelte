<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import CreateTypeForm from '../../forms/CreateTypeForm.svelte';
  import type { TypeOption } from '../../../domain';
  import { onMount } from 'svelte';

  // ===== Props =====


  interface Props {
    open?: boolean;
    dialogTitle: string;
    confirmText?: string;
    idLabel?: string;
    autocompleteLabel?: string;
    getOptions?: () => Promise<TypeOption[]>;
    isIdTaken?: (id: string) => Promise<boolean>;
    onConfirm: (id: string, selected: any) => void;
  }

  let {
    open = $bindable(false),
    dialogTitle,
    confirmText = 'Confirm',
    idLabel = 'ID',
    autocompleteLabel = 'Select Option',
    getOptions = async () => [],
    isIdTaken = async () => false,
    onConfirm
  }: Props = $props();

  let id = $state();
  let valid = $state(false);
  let selectedItem = $state();
  let formEl = $state();

  // ===== Event Handlers =====
  const handleCreate = () => {
    onConfirm(id, selectedItem.id);
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
    {#snippet content()}
        <div style="padding: 1rem;" >
        <CreateTypeForm
          bind:this={formEl}
          {idLabel}
          {autocompleteLabel}
          getOptions={getOptions}
          isIdTakenFn={isIdTaken}
          bind:id
          bind:selectedItem
          bind:valid
          on:submit={handleCreate}
        />
      </div>
      {/snippet}
  </OscdBaseDialog>
</div>
