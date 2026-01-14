<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import CreateTypeForm from '../../forms/CreateTypeForm.svelte';
  import type { DataTypeKind, TypeOption } from '../../../domain';
  import type { ChangeEventDetails } from '../../forms/types';

  // ===== Props =====
  interface Props {
    open?: boolean;
    dialogTitle: string;
    confirmText?: string;
    idLabel?: string;
    autocompleteLabel?: string;
    typeKind: DataTypeKind;

    defaultTypeId?: string;
    defaultInstance?: string;

    getOptions?: () => Promise<TypeOption[]>;
    onConfirm: (id: string, selected: any, createFromDefault?: boolean) => void;
    checkDefaultAvailable?: (instanceType: string) => Promise<boolean>;
    showCreateFromDefault?: boolean;
  }

  let {
    open = $bindable(false),
    dialogTitle,
    confirmText = 'Confirm',
    idLabel = 'ID',
    autocompleteLabel = 'Select Option',
    typeKind,

    defaultInstance,
    defaultTypeId,

    getOptions = async () => [],
    onConfirm,
    checkDefaultAvailable =  async () => false,
    showCreateFromDefault = false
  }: Props = $props();

  let formState = $state<ChangeEventDetails | undefined>();

  let valid = $derived.by(() => {
    return formState?.valid ?? false;
  });

  function updateState(details: ChangeEventDetails) {
    formState = details;
  }

  // ===== Event Handlers =====
  function handleCreate() {
    if(!formState) return;
    if(!formState.valid) return;
    onConfirm(formState.id, formState.selectedItem.id, formState.createFromDefault);
  }

  function handleCancel() {
    closeDialog('cancel');
  }

  function handleClose ()  {
    closeDialog('exit');
  }

  // ===== Util Functions =====
</script>

<div class="generic-create-dialog">
  <OscdBaseDialog
    title={dialogTitle}
    confirmActionText={confirmText}
    maxWidth="800px"
    bind:open
    onConfirm={handleCreate}
    onCancel={handleCancel}
    onClose={handleClose}
    confirmDisabled={!valid}
  >
    {#snippet content()}
        <div style="padding: 1rem;" >
        <CreateTypeForm
          {idLabel}
          typeKind={typeKind}

          {defaultInstance}
          {defaultTypeId}

          {autocompleteLabel}
          getOptions={getOptions}

          allowCreateFromDefault={showCreateFromDefault}
          isDefaultAvailable={checkDefaultAvailable}

          onSubmit={handleCreate}
          onChange={updateState}
        />
      </div>
      {/snippet}
  </OscdBaseDialog>
</div>
