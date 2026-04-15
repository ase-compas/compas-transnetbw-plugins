<script lang="ts">
  import { TypeKind, type InstanceDetails } from "../../../../shared/model";
  import OscdBaseDialog from "../../../../../../../libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte";
  import { closeDialog } from "@oscd-transnet-plugins/oscd-services/dialog";
  import InstanceAutocomplete from "../ui/InstanceAutocomplete.svelte";
  import type { DataTypeService } from "../../services/type.service";

    interface Props {
        open?: boolean;
        typeKind: TypeKind;
        service: DataTypeService
    }

    let {
        open = $bindable(false),
        typeKind,
        service
    }: Props = $props();

    let selectedInstance: InstanceDetails | undefined = $state(undefined);

    let valid = $derived(!!selectedInstance);

</script>

<OscdBaseDialog
    title="Choose Instance Type"
    confirmActionText='Create'
    maxWidth="800px"
    bind:open
    onConfirm={() => closeDialog('confirm', selectedInstance)}
    onCancel={() => closeDialog('cancel')}
    onClose={() => closeDialog('exit')}
    confirmDisabled={!valid}
  >
    {#snippet content()}
        <div style="padding: 1rem;" >
            <p>This type has no instance information. Please select an instance type. Existing references will stay, but configured members will be lost.</p>
            <InstanceAutocomplete
                {typeKind}
                bind:value={selectedInstance}
                required
                {service}
            />
        </div>
      {/snippet}
  </OscdBaseDialog>
