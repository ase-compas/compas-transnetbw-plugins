<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { getDATypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  const service = getDATypeService();

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
  dialogTitle="Create Data Attribute Type"
  confirmText="Next"
  idLabel="Data Attribute Type ID"
  autocompleteLabel="Data Attribute Instance"
  getOptions={() => service.getTypeOptions()}
  isIdTaken={(id) => service.isDAIdTaken(id)}
  onConfirm={handleConfirm}
/>
