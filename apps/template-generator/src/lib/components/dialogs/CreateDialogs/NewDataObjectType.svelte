<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { getDOTypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  const service = getDOTypeService();
  export let open = false;

  let options = [{title: '', subtitle: ''}];

  service.getTypeOptions().then(data => {
    options = data.map(item => ({
      title: item.id,
      subtitle: item.description
    }));
  })

  const handleConfirm = (id: string, selected) => {
    closeDialog('confirm', { id, cdc: selected.title });
  };

</script>

<GenericCreateDialog
  bind:open
  dialogTitle="Create New Data Object Type"
  confirmText="Next"
  idLabel="ID"
  autocompleteLabel="Common Data Class (cdc)"
  {options}
  checkIdTaken={async (id) => await service.isDOIdTaken(id)}
  onConfirm={handleConfirm}
/>
