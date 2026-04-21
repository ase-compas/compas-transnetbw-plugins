<script lang="ts">
  import { TypeKind } from '../../../../shared/model';
  import OscdBaseDialog from '../../../../../../../libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
  import CreateTypeForm, {
    type CreateTypeFormSubmitDetails,
  } from '../ui/CreateTypeForm.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { getIdSettingsState } from '../../../id-format-settings/id-format-settings.state.svelte.js';
  import type { DataTypeService } from '../../services/type.service';
  import type { GenerateIdResult } from '../ui/CreateTypeForm.svelte';

  const idSettingsState = getIdSettingsState();

  interface Props {
    open?: boolean;
    typeKind: TypeKind;
    service: DataTypeService; 
  }

  let { open = $bindable(false), typeKind, service }: Props = $props();

  let valid = $state<boolean>(false);
  let formDetails = $state<CreateTypeFormSubmitDetails | null>(null);

  const title = $derived(`Create ${TypeKind.toTypeKindLabel(typeKind)}`);

  function handleFormChange(details: CreateTypeFormSubmitDetails): void {
    formDetails = details;
    valid = details.valid;
  }

  function handleFormSubmit(details: CreateTypeFormSubmitDetails): void {
    handleFormChange(details);
    if (details.valid) {
      handleCreate();
    }
  }

  function handleCreate() {
    if (!formDetails?.valid) {
      return;
    }

    closeDialog('confirm', formDetails);
  }

  function handleClose() {
    closeDialog('exit');
  }

  function generateTypeId(instance: string): GenerateIdResult {
    return idSettingsState.generateIdWithResult(typeKind, { instance });
  }
</script>

<OscdBaseDialog
  {title}
  confirmActionText="Create"
  maxWidth="800px"
  bind:open
  onConfirm={handleCreate}
  onCancel={handleClose}
  onClose={handleClose}
  confirmDisabled={!valid}
>
  {#snippet content()}
    <div style="padding: 1rem;">
      <CreateTypeForm
        {typeKind}
        showCreateFromDefaultOption={typeKind === TypeKind.LNodeType}
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
        generateId={generateTypeId}
        {service}
      />
    </div>
  {/snippet}
</OscdBaseDialog>
