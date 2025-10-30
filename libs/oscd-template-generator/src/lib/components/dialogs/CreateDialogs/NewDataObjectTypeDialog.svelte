<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { getDOTypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  const service = getDOTypeService();
  interface Props {
    open?: boolean;
  }

  let { open = $bindable(false) }: Props = $props();

  const handleConfirm = (id: string, optionId: string) => {
    closeDialog('confirm', { id, cdc: optionId });
  };

</script>

<GenericCreateDialog
  bind:open
  dialogTitle="Create New Data Object Type"
  confirmText="Next"
  idLabel="ID"
  autocompleteLabel="Common Data Class (cdc)"
  getOptions={() => service.getTypeOptions()}
  isIdTaken={(id) => service.isDOIdTaken(id)}
  onConfirm={handleConfirm}
/>
