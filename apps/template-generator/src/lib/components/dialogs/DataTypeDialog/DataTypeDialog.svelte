<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component'
  import { Content } from '@smui/dialog';
  import { DataObjectTypeService, getDataObjectTypeService } from '../../../services';
  import { DA, DOType, type DataTypes } from '../../../domain';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { buildDAItems, buildDATypeItems, buildDOTypeItems, buildEnumTypeItems } from '../../../utils/itemBuilder';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  const dataObjectTypeService: DataObjectTypeService = getDataObjectTypeService();

  const dispatch = createEventDispatcher();

  // ===== Props =====
  export let open = false;
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  let referencedDataTypes: DataTypes | null = null;
  let dataObjectType: DOType | null = null;
  let dataAttributes: DA[] = [];

  let markedItem: Set<string> = new Set<string>();


  let isEditMode: boolean = false;
  $: isEditMode = mode === 'edit' || mode === 'create';

  function loadData() {
    if (mode === 'create') return;
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
    refs: buildDAItems(dataAttributes, markedItem, { canSelect: isEditMode }),
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
    closeDialog('confirm');
  }

  function handleCancel() {
    closeDialog('cancel');
  }
</script>


<OscdBaseDialog
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
</OscdBaseDialog>
