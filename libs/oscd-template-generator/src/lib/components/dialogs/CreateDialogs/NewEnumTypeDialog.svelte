<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { getEnumTypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { DataTypeKind } from '../../../domain';

  const service = getEnumTypeService();

  interface Props {
    open?: boolean;
  }

  let { open = $bindable(false) }: Props = $props();

  const handleConfirm = (id: string, optionId: string) => {
    closeDialog('confirm', { id, instanceType: optionId});
  };

</script>

<GenericCreateDialog
  bind:open
  dialogTitle="Create Enum Type"
  confirmText="Next"
  idLabel="Enum Type ID"
  autocompleteLabel="Enum Instance"
  getOptions={() => service.getTypeOptions()}
  typeKind={DataTypeKind.EnumType}
  onConfirm={handleConfirm}
/>
