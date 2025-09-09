<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { getLNodeTypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  const service = getLNodeTypeService();

  export let open = false;

  const handleConfirm = (id: string, optionId: string) => {
    closeDialog('confirm', { id, lnClass: optionId});
  };

</script>

<GenericCreateDialog
  bind:open
  dialogTitle="Create Logical Node Type"
  confirmText="Create"
  idLabel="Logical Node ID"
  autocompleteLabel="Logical Node Class"
  getOptions={() => service.getTypeOptions()}
  isIdTaken={(id) => service.isLNodeIdTaken(id)}
  onConfirm={handleConfirm}
/>
