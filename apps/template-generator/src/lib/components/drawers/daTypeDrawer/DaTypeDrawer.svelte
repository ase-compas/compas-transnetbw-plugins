<script lang="ts">
  import { OscdBaseDialog, OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
  import { Content } from '@smui/dialog';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { closeDialog, openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { ItemDropOnItemEventDetail, type TBoardItemContext, TItem } from '../../tboard/types';
  import {
    type BasicType,
    BasicTypes,
    DataTypes,
    DATypeDetails,
    DOTypeDetails,
    type ObjectReferenceDetails
  } from '../../../domain';
  import { IDoTypeService } from '../../../services/do-type.service';
  import { getDATypeService, getDOTypeService } from '../../../services';
  import { createObjectReferenceStore } from '../../../stores';
  import {
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems
  } from '../../../utils/typeBoardUtils';
  import { mapDataTypeToItem } from '../../../mappers';
  import { onMount } from 'svelte';
  import { CloseReason } from '../../../stores/drawerStackStore';
  import {
    openCreateDataAttributeTypeDialog, openCreateDataObjectTypeDialog, openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer,
    openDataEnumTypeDrawer,
    openDataObjectTypeDrawer, openReferencedTypeDrawer
  } from '../../../utils/typeViewUtils';
  import { IDaTypeService } from '../../../services/da-type.service';

  // ===== Services =====
  const daTypeService: IDaTypeService = getDATypeService();

  // ===== Props =====
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let instanceType: string | null = null;
  export const canClose = async (reason: CloseReason): Promise<boolean> => {
    if($isDirty && (reason !== 'save')) {
      await handleUnsavedChanges()
    } else if (reason === 'save') {
      await handleConfirm();
    }
    return true;
  }

  // ===== Stores ======
  const refStore = createObjectReferenceStore(async () => dataAttributeTypes.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  // ===== State =====
  let dataAttributeTypes: DATypeDetails | null = null;
  let dataTypes: BasicTypes = {
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: []
  };


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
  onMount(() => {
    init()
  })

  function init() {
    validateProps();
    loadData();
  }

  async function loadData() {
      dataAttributeTypes = await loadDOType(isCreateMode(), typeId, instanceType);
      await refStore.reload();
  }

  $: if(dataAttributeTypes) {
    loadTypes(isEditMode(), dataAttributeTypes.id, dataAttributeTypes.instanceType, $markedItemIds).then(types => dataTypes = types);
  }

  async function loadDOType(isCreateMode: boolean, typeId: string, cdc: string | null) {
    if(isCreateMode) {
      const defaultType = await daTypeService.getDefaultType(cdc);
      defaultType.id = typeId;
      return defaultType;
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
    if($isDirty) {
     daTypeService.createOrUpdateType({
       id: dataAttributeTypes.id,
       instanceType: dataAttributeTypes.instanceType,
       children: $configuredItems.map(item => ({ name: item.name, typeRef: item?.typeRef }))
     })
    }
    closeDialog('confirm');
  }

  function handleCancel() {
    closeDialog('cancel');
  }

  function validateProps() {
    if (mode === 'create' && (!typeId || !instanceType)) {
      throw new Error('Type ID and CDC are required in create mode');
    } else if ((mode === 'edit' || mode === 'view') && !typeId) {
      throw new Error('Type ID is required');
    }
  }

  function handleOnEdit(itemId: string, columnId: string) {
    if (columnId === 'dataAttributeTypes') {
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
    if (columnId === 'dataAttributeTypes') {
      openCreateDataAttributeTypeDialog();
    } else if (columnId === 'enumTypes') {
      openCreateEnumTypeDialog();
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

    <TBoard
      {columns}
      data={boardData}
      on:itemMarkChange={e => handleOnMark(e.detail)}
      on:itemSelectChange={e => handleOnSelect(e.detail)}
      on:itemDrop={e => handleItemDrop(e.detail)}
      on:columnActionClick={e => handleActionClick(e.detail)}
      on:itemEdit={e => handleOnEdit(e.detail.itemId, e.detail.columnId)}
      on:itemReferenceClick={e => handleOnReferenceClick(e.detail.itemId)}
    />
