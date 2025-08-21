<script lang="ts">
  import GenericCreateDialog from './GenericCreateDialog.svelte';
  import { lnClassDescriptions } from '../../../../data/lnClassDescriptions';
  import { getLNodeTypeService } from '../../../services';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  const service = getLNodeTypeService();

  export let open = false;
  let isIdTaken;

  const options = lnClassDescriptions.map(item => ({
    title: item.lnClass,
    subtitle: item.description,
  }));

  const handleConfirm = (id: string, selected) => {
    closeDialog('confirm', { id, lnClass: selected.title });
  };

</script>

<GenericCreateDialog
  bind:open
  dialogTitle="Create Logical Node Type"
  confirmText="Create"
  idLabel="Logical Node ID"
  autocompleteLabel="Logical Node Class"
  {options}
  checkIdTaken={id => service.isLNodeIdTaken(id)}
  onConfirm={handleConfirm}
/>
