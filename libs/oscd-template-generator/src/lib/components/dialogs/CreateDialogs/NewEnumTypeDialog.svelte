<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { getEnumTypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  const service = getEnumTypeService();

  export let open = false;

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
  isIdTaken={(id) => service.isEnumIdTaken(id)}
  onConfirm={handleConfirm}
/>
