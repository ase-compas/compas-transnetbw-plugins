<script lang="ts">
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { closeDialog, openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { ItemDropOnItemEventDetail, type TBoardItemContext, TItem } from '../../tboard/types';
  import {
    type BasicType,
    BasicTypes,
    DataTypeKind,
    DOTypeDetails,
    type ObjectReferenceDetails
  } from '../../../domain';
  import { IDoTypeService } from '../../../services/do-type.service';
  import { getDOTypeService } from '../../../services';
  import { createObjectReferenceStore } from '../../../stores';
  import {
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems
  } from '../../../utils/typeBoardUtils';
  import { onMount } from 'svelte';
  import { CloseReason } from '../../../stores/drawerStackStore';
  import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
  import {
    openCreateDataAttributeTypeDialog, openCreateDataObjectTypeDialog, openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer,
    openDataEnumTypeDrawer,
    openDataObjectTypeDrawer,
    openReferencedTypeDrawer
  } from '../../../utils/typeViewUtils';

  // ===== Services =====
  const doTypeService: IDoTypeService = getDOTypeService();

  // ===== Props =====
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let cdc: string | null = null;

  export const canClose = async (reason: CloseReason): Promise<boolean> => {
    if($isDirty && (reason !== 'save')) {
      await handleUnsavedChanges()
    } else if (reason === 'save') {
      await handleConfirm();
    }
   return true;
  }

  async function handleUnsavedChanges(resetOnDiscard = false) {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Unsaved Changes',
      message: 'You have unsaved changes. Do you want to save them?',
      confirmActionText: 'Save',
      cancelActionText: 'Discard'
    });
    if (result.type === 'confirm') {
      handleConfirm();
    } else if (resetOnDiscard) {
      refStore.reset();
    }
  }


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

  onMount(() => {
    init()
  })

  $: columns = getColumns(isEditMode());

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

  function handleItemDrop({ source, target }: ItemDropOnItemEventDetail) {
    if(!source || !target) return;
    refStore.setTypeReference(target.itemId, source.itemId)
  }

  function handleOnEdit(itemId: string, columnId: string) {
    if (columnId === 'dataObjectTypes') {
      openDataObjectTypeDrawer('edit', itemId);
    } else if (columnId === 'dataAttributeTypes') {
      openDataAttributeTypeDrawer('edit', itemId);
    } else if (columnId === 'enumTypes') {
      openDataEnumTypeDrawer('edit', itemId);
    }
  }

  function handleOnReferenceClick(itemId: string) {
    const ref = $refStore.find(child => child.name === itemId);
    openReferencedTypeDrawer(ref, 'edit');
  }

  function handleActionClick({ columnId }) {
    if (columnId === 'dataObjectTypes') {
      openCreateDataObjectTypeDialog();
    } else if (columnId === 'dataAttributeTypes') {
      openCreateDataAttributeTypeDialog();
    } else if (columnId === 'enumTypes') {
      openCreateEnumTypeDialog();
    }
  }

  function acceptDrop(source: TBoardItemContext, target: ObjectReferenceDetails): boolean {
    const sourceType: BasicType = dataTypes[source.columnId].find(type => type.id === source.itemId);
    return canAssignTypeToObjectReference(target, sourceType)
  }
</script>


<TBoard
  {columns}
  data={boardData}
  on:itemMarkChange={e => handleOnMark(e.detail)}
  on:itemSelectChange={e => handleOnSelect(e.detail)}
  on:itemDrop={e => handleItemDrop(e.detail)}
  on:itemEdit={({detail: {itemId, columnId}}) => handleOnEdit(itemId, columnId)}
  on:itemReferenceClick={({detail: {itemId}}) => handleOnReferenceClick(itemId)}
  on:columnActionClick={({detail: {columnId}}) => handleActionClick({columnId})}
/>
