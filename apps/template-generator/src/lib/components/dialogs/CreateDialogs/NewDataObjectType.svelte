<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { cdcDescriptions } from '../../../../data/cdcDescriptions';
  import { getDataObjectTypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  const service = getDataObjectTypeService();
  export let open = false;

  const options = cdcDescriptions.map(item => ({
    title: item.name,
    subtitle: item.description,
  }));

  const handleConfirm = (id: string, selected) => {
    closeDialog('confirm', { id, cdc: selected });
  };

</script>

<GenericCreateDialog
  bind:open
  dialogTitle="Create New Data Object Type"
  confirmText="Next"
  idLabel="ID"
  autocompleteLabel="Common Data Class (cdc)"
  {options}
  checkIdTaken={id => service.isIdTaken(id)}
  onConfirm={handleConfirm}
/>
