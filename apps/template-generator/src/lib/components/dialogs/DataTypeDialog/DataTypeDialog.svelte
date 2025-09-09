<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component'
  import { Content } from '@smui/dialog';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { ItemDropOnItemEventDetail, type TBoardItemContext, TItem } from '../../tboard/types';
  import { type BasicType, BasicTypes, DOTypeDetails, type ObjectReferenceDetails } from '../../../domain';
  import { IDoTypeService } from '../../../services/do-type.service';
  import { getDOTypeService } from '../../../services';
  import { createObjectReferenceStore } from '../../../stores';
  import {
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems
  } from '../../../utils/typeBoardUtils';
  import { mapDataTypeToItem } from '../../../mappers';
  import { openCreateDataAttributeTypeDialog } from '../../../utils/typeViewUtils';

  // ===== Services =====
  const doTypeService: IDoTypeService = getDOTypeService();

  // ===== Props =====
  export let open = false;
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let cdc: string | null = null;

  // ===== Stores ======
  const refStore = createObjectReferenceStore(async () => dataObjectType.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  // ===== State =====
  let dataObjectType: DOTypeDetails | null = null;
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
    dataObjectTypes: getDisplayDataTypeItems(dataTypes.dataObjectTypes, true),
    dataAttributeTypes: getDisplayDataTypeItems(dataTypes.dataAttributeTypes, true),
    enumTypes: getDisplayDataTypeItems(dataTypes.enumTypes, true),
  }

  $: columns = getColumns(isEditMode());
  $: if (open) init();

  function init() {
    validateProps();
    loadData();
  }

  async function loadData() {
      dataObjectType = await loadDOType(isCreateMode(), typeId, cdc);
      await refStore.reload();
  }

  $: if(dataObjectType) {
    loadTypes(isEditMode(), dataObjectType.id, dataObjectType.cdc, $markedItemIds).then(types => dataTypes = types);
  }

  async function loadDOType(isCreateMode: boolean, typeId: string, cdc: string | null) {
    if(isCreateMode) {
      const defaultType = await doTypeService.getDefaultType(cdc);
      defaultType.id = typeId;
      return defaultType;
    } else {
     return await doTypeService.getTypeById(typeId);
    }
  }

  async function loadTypes(isEditMode: boolean, typeId: string, cdc: string, childNameFilter: string[]) {
    return isEditMode
      ? await doTypeService.getAssignableTypes(cdc, childNameFilter)
      : await doTypeService.getReferencedTypes(typeId, childNameFilter)
  }


  function handleOnMark({ itemId }) {
    refStore.toggleMarked(itemId);
  }

  function handleOnSelect({ itemId }) {
    refStore.toggleConfigured(itemId);
  }

  function handleConfirm() {
    if($isDirty) {
     doTypeService.createOrUpdateType({
       id: dataObjectType.id,
       instanceType: dataObjectType.cdc,
       children: $configuredItems.map(item => ({ name: item.name, typeRef: item?.typeRef }))
     })
    }
    closeDialog('confirm');
  }

  function handleCancel() {
    closeDialog('cancel');
  }

  function validateProps() {
    if (mode === 'create' && (!typeId || !cdc)) {
      throw new Error('Type ID and CDC are required in create mode');
    } else if ((mode === 'edit' || mode === 'view') && !typeId) {
      throw new Error('Type ID is required');
    }
  }

  function handleActionClick({ columnId }) {
    if (columnId === 'dataObjectTypes') {
      openCreateDataAttributeTypeDialog();
    } else if (columnId === 'dataAttributeTypes') {
      openCreateDataAttributeTypeDialog();
    } else if (columnId === 'enumTypes') {
      openCreateDataAttributeTypeDialog();
    }
  }

  function handleItemDrop({ source, target }: ItemDropOnItemEventDetail) {
    if(!source || !target) return;
    refStore.setTypeReference(target.itemId, source.itemId)
  }

  function acceptDrop(source: TBoardItemContext, target: ObjectReferenceDetails): boolean {
    const sourceType: BasicType = dataTypes[source.columnId].find(type => type.id === source.itemId);
    return canAssignTypeToObjectReference(target, sourceType)
  }
</script>

<OscdBaseDialog
  bind:open
  title={`Data Object Type: ${dataObjectType?.id ?? '------'}`}
  confirmActionText="Save"
  cancelActionText="Cancel"
  maxWidth="calc(100vw - 2rem)"
  width="calc(100vw - 10rem)"
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}>
  on:columnActionClick={e => handleActionClick(e.detail)}
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
