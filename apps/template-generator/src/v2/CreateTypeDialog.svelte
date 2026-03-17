<script lang="ts">
    import { TypeKind } from "./model";
  import OscdBaseDialog from "libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte";
  import CreateTypeForm, { type CreateTypeFormSubmitDetails } from "./CreateTypeForm.svelte";
  import { closeDialog } from "@oscd-transnet-plugins/oscd-services/dialog";
  import { getIdSettingsState } from "./id-format-settings/id-format-settings.state.svelte";

  const idSettingsState = getIdSettingsState();

    interface Props {
        open?: boolean;
        typeKind: TypeKind;
    }

    let {
        open = $bindable(false),
        typeKind
    }: Props = $props();

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


</script>

<OscdBaseDialog
    title={title}
    confirmActionText='Create'
    maxWidth="800px"
    bind:open
    onConfirm={handleCreate}
    onCancel={handleClose}
    onClose={handleClose}
    confirmDisabled={!valid}
  >
    {#snippet content()}
        <div style="padding: 1rem;" >
            <CreateTypeForm typeKind={typeKind}
                showCreateFromDefaultOption={typeKind === TypeKind.LNodeType}
                onChange={handleFormChange}
                onSubmit={handleFormSubmit}
                generateId={(instance) => idSettingsState.generateId(typeKind, { instance })}
            />
        </div>
      {/snippet}
  </OscdBaseDialog>