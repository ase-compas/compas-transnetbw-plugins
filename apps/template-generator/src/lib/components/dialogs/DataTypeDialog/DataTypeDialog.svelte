<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import BaseDialog from '../BaseDialog.svelte';
  import { Content } from '@smui/dialog';
  import { DataObjectTypeService, getDataObjectTypeService } from '../../../services';
  import { DA, DOType, type ReferencedTypes } from '../../../domain';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { buildDAItems, buildDATypeItems, buildDOTypeItems, buildEnumTypeItems } from '../../../utils/itemBuilder';

  const dataObjectTypeService: DataObjectTypeService = getDataObjectTypeService();

  const dispatch = createEventDispatcher();

  // ===== Props =====
  export let open = false;
  export let isEditMode: boolean = false;
  export let typeId: string;
  let referencedDataTypes: ReferencedTypes | null = null;
  let dataObjectType: DOType | null = null;
  let dataAttributes: DA[] = [];

  let markedItem: Set<string> = new Set<string>();


  function loadData() {
    dataObjectType = dataObjectTypeService.findById(typeId);
    dataAttributes = dataObjectType.dataAttributes;
    referencedDataTypes = dataObjectTypeService.findReferencedTypesById(typeId, Array.from(markedItem));
  }

  $: columns = getColumns(isEditMode);

  $: if (open) {
    loadData();
  }

  $: if (!open) {
    markedItem.clear();
  }

  $: data = {
    refs: buildDAItems(dataAttributes, markedItem),
    dotypes: buildDOTypeItems(referencedDataTypes?.dataObjectTypes),
    datypes: buildDATypeItems(referencedDataTypes?.dataAttributeTypes),
    enumtypes: buildEnumTypeItems(referencedDataTypes?.enumTypes)
  };


  function handleOnMark({ itemId }) {
    if (markedItem.has(itemId)) {
      markedItem.delete(itemId);
    } else {
      markedItem.add(itemId);
    }
    markedItem = new Set<string>(markedItem);
    loadData();
  }

  function handleConfirm() {
    dispatch('confirm');
  }

  function handleCancel() {
    dispatch('cancel');
  }
</script>


<BaseDialog
  bind:open
  title={`Data Object Type: ${dataObjectType?.id ?? '------'}`}
  confirmActionText="Save"
  cancelActionText="Cancel"
  maxWidth="calc(100vw - 2rem)"
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}>
  <Content slot="content">

    <TBoard
      {columns}
      {data}
      on:itemMarkChange={e => handleOnMark(e.detail)}
    />
  </Content>
</BaseDialog>
