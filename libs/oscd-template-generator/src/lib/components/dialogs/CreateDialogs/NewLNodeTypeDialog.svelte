<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { getDefaultTypeService, getLNodeTypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { DataTypeKind } from '../../../domain';

  const service = getLNodeTypeService();
  const defaultTypeService = getDefaultTypeService();

  interface Props {
    open?: boolean;
  }

  let { open = $bindable(false) }: Props = $props();

  const handleConfirm = (id: string, optionId: string, createFromDefault?: boolean) => {
    closeDialog('confirm', { id, lnClass: optionId, createFromDefault: createFromDefault ? createFromDefault : false });
  };

</script>

<GenericCreateDialog
  bind:open
  dialogTitle="Create Logical Node Type"
  confirmText="Create"
  idLabel="Logical Node ID"
  autocompleteLabel="Logical Node Class"
  getOptions={() => service.getTypeOptions()}
  typeKind={DataTypeKind.LNodeType}
  showCreateFromDefault={true}
  checkDefaultAvailable={async (instanceType) => {
    const result = await defaultTypeService.getDefault({instanceType, kind: DataTypeKind.LNodeType});
    return !!result;
  }}
  onConfirm={handleConfirm}
/>
