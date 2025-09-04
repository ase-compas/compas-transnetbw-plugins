<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component'
  import { Content } from '@smui/dialog';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { ItemDropOnItemEventDetail, type TBoardItemContext, TItem } from '../../tboard/types';
  import { type BasicType, BasicTypes, DATypeDetails, type ObjectReferenceDetails } from '../../../domain';
  import { getDATypeService } from '../../../services';
  import { createObjectReferenceStore } from '../../../stores';
  import { canAssignTypeToObjectReference, getDisplayReferenceItems } from '../../../utils/objectReferenceUtils';
  import { mapDataTypeToItem } from '../../../mappers';
  import { IDaTypeService } from '../../../services/da-type.service';

  // ===== Services =====
  const daTypeService: IDaTypeService = getDATypeService();

  // ===== Props =====
  export let open = false;
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let cdc: string | null = null;

  // ===== Stores ======
  const refStore = createObjectReferenceStore(async () => dataAttributeType.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  // ===== State =====
  let dataAttributeType: DATypeDetails | null = null;
  let dataTypes: BasicTypes = {
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: []
  };

  // ===== Derived =====
  const isCreateMode = () => mode === 'create';
  const isViewMode = () => mode === 'view';
  const isEditMode = () => mode === 'edit' || isCreateMode();

  let referenceDataObjects: TItem[] = [];
  $: referenceDataObjects = getDisplayReferenceItems($refStore, isEditMode(), acceptDrop)

  $: boardData = {
    refs: referenceDataObjects,
    dataAttributeTypes: dataTypes.dataAttributeTypes.map(type => mapDataTypeToItem(type, true)),
    enumTypes: dataTypes.enumTypes.map(type => mapDataTypeToItem(type, true))
  }

  $: columns = getColumns(isEditMode());
  $: if (open) init();



  function init() {
    validateProps();
    loadData();
  }

  async function loadData() {
    dataAttributeType = await loadDOType(isCreateMode(), typeId, cdc);
    await refStore.reload();

    dataTypes = await loadTypes(isEditMode(), dataAttributeType.id, cdc, []);
  }

  $: if(dataAttributeType) {
    loadTypes(isEditMode(), dataAttributeType.id, cdc, $markedItemIds).then(types => dataTypes = types);
  }

  async function loadDOType(isCreateMode: boolean, typeId: string, cdc: string | null) {
    if (isCreateMode) {
      const type = await daTypeService.getDefaultType(cdc)
      type.id = typeId;
      return type
    } else {
     return await daTypeService.getTypeById(typeId);
    }
  }

  async function loadTypes(isEditMode: boolean, typeId: string, cdc: string, childNameFilter: string[]) {
    return isEditMode
      ? await daTypeService.getAssignableTypes(cdc, childNameFilter)
      : await daTypeService.getReferencedTypes(typeId, childNameFilter)
  }


  function handleOnMark({ itemId }) {
    refStore.toggleMarked(itemId);
  }

  function handleOnSelect({ itemId }) {
    refStore.toggleConfigured(itemId);
  }

  function handleConfirm() {
    closeDialog('confirm');
    if($isDirty) {
      daTypeService.createOrUpdateType({
        id: dataAttributeType.id,
        instanceType: cdc ,
        children: $configuredItems.map(item => ({ name: item.name, typeRef: item?.typeRef }))
      })
    }
  }

  function handleCancel() {
    closeDialog('cancel');
  }

  function validateProps() {
    if (mode === 'create' && (!typeId )) {
      throw new Error('Type ID is required in create mode');
    } else if ((mode === 'edit' || mode === 'view') && !typeId) {
      throw new Error('Type ID is required');
    }
  }

  function handleItemDrop({ source, target }: ItemDropOnItemEventDetail) {
    if(!source || !target) return;
    refStore.setTypeReference(target.itemId, source.item.id)
  }

  function acceptDrop(source: TBoardItemContext, target: ObjectReferenceDetails): boolean {
    const sourceType: BasicType = dataTypes[source.columnId].find(type => type.id === source.itemId);
    return canAssignTypeToObjectReference(target, sourceType)
  }
</script>

<OscdBaseDialog
  bind:open
  title={`Data Object Type: ${dataAttributeType?.id ?? '------'}`}
  confirmActionText="Save"
  cancelActionText="Cancel"
  maxWidth="calc(100vw - 2rem)"
  width="calc(100vw - 10rem)"
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}>
  <Content slot="content">

    <TBoard
      {columns}
      data={boardData}
      on:itemMarkChange={e => handleOnMark(e.detail)}
      on:itemSelectChange={e => handleOnSelect(e.detail)}
      on:itemDrop={e => handleItemDrop(e.detail)}
    />
  </Content>
</OscdBaseDialog>
