<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { getDOTypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { DataTypeKind } from '../../../domain';

  const service = getDOTypeService();
  interface Props {
    open?: boolean;

    defaultTypeId?: string;
    defaultInstance?: string;
  }

  let { open = $bindable(false), defaultInstance, defaultTypeId }: Props = $props();

  const handleConfirm = (id: string, optionId: string) => {
    closeDialog('confirm', { id, cdc: optionId });
  };

</script>

<GenericCreateDialog
  bind:open
  {defaultInstance}
  {defaultTypeId}
  dialogTitle="Create New Data Object Type"
  confirmText="Next"
  idLabel="ID"
  autocompleteLabel="Common Data Class (cdc)"
  getOptions={() => service.getTypeOptions()}
  typeKind={DataTypeKind.DOType}
  onConfirm={handleConfirm}
/>
