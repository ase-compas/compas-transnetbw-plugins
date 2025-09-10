<script lang="ts">
  import { onMount } from 'svelte';

  // ===== Components =====
  import TBoard from '../../tboard/TBoard.svelte';

  // ===== Services & Utils =====
  import { getColumns } from './columns.config';
  import { createObjectReferenceStore } from '../../../stores';
  import { CloseReason } from '../../../stores/drawerStackStore';
  import {
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems
  } from '../../../utils/typeBoardUtils';
  import {
    confirmUnsavedChanges,
    openCreateDataAttributeTypeDialog,
    openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer,
    openDataEnumTypeDrawer,
    openReferencedTypeDrawer
  } from '../../../utils/overlayUitils';

  // ===== Types =====
  import type { ItemDropOnItemEventDetail, TBoardItemContext, TItem } from '../../tboard/types';
  import type { BasicType, BasicTypes, ObjectReferenceDetails, DATypeDetails } from '../../../domain';
  import type { IDaTypeService } from '../../../services/da-type.service';
  import { getDATypeService } from '../../../services';

  // ===== Services =====
  const daTypeService: IDaTypeService = getDATypeService();

  // ===== Props =====
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let instanceType: string | null = null;

  // ===== Stores =====
  const refStore = createObjectReferenceStore(async () => dataAttributeTypes.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  // ===== State =====
  let dataAttributeTypes: DATypeDetails | null = null;
  let dataTypes: BasicTypes = {
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: [],
  };

  // ===== Derived =====
  const isCreateMode = () => mode === 'create';
  const isEditMode = () => mode === 'edit' || isCreateMode();

  let referenceDataObjects: TItem[] = [];
  $: referenceDataObjects = getDisplayReferenceItems($refStore, isEditMode(), acceptDrop);

  $: boardData = {
    refs: referenceDataObjects,
    dataObjectTypes: getDisplayDataTypeItems(dataTypes.dataObjectTypes, true),
    dataAttributeTypes: getDisplayDataTypeItems(dataTypes.dataAttributeTypes, true),
    enumTypes: getDisplayDataTypeItems(dataTypes.enumTypes, true),
  };

  $: columns = getColumns(isEditMode());

  // ===== Lifecycle =====
  onMount(() => init());

  // ===== Dialog Close Guard =====
  export const canClose = async (reason: CloseReason): Promise<boolean> => {
    if ($isDirty && reason !== 'save') {
      const { action } = await confirmUnsavedChanges();
      if (action === 'save') handleConfirm();
      else if (action === 'cancel') return false;
    } else if (reason === 'save') {
      await handleConfirm();
    }
    return true;
  };

  // ===== Initialization =====
  function init() {
    validateProps();
    loadData();
  }

  async function loadData() {
    dataAttributeTypes = await loadDAType(isCreateMode(), typeId, instanceType);
    await refStore.reload();
  }

  $: if (dataAttributeTypes) {
    loadTypes(isEditMode(), dataAttributeTypes.id, dataAttributeTypes.instanceType, $markedItemIds)
      .then(types => dataTypes = types);
  }

  async function loadDAType(isCreateMode: boolean, typeId: string, instanceType: string | null) {
    if (isCreateMode) {
      const defaultType = await daTypeService.getDefaultType(instanceType);
      defaultType.id = typeId;
      return defaultType;
    } else {
      return await daTypeService.getTypeById(typeId);
    }
  }

  async function loadTypes(isEditMode: boolean, typeId: string, instanceType: string, childNameFilter: string[]) {
    return isEditMode
      ? await daTypeService.getAssignableTypes(instanceType, childNameFilter)
      : await daTypeService.getReferencedTypes(typeId, childNameFilter);
  }

  // ===== Event Handlers =====
  function handleOnMark({ itemId }) {
    refStore.toggleMarked(itemId);
  }

  function handleOnSelect({ itemId }) {
    refStore.toggleConfigured(itemId);
  }

  function handleConfirm() {
    if ($isDirty) {
      daTypeService.createOrUpdateType({
        id: dataAttributeTypes.id,
        instanceType: dataAttributeTypes.instanceType,
        children: $configuredItems.map(item => ({ name: item.name, typeRef: item?.typeRef })),
      });
    }
  }

  function handleOnEdit(itemId: string, columnId: string) {
    if (columnId === 'dataAttributeTypes') openDataAttributeTypeDrawer('edit', itemId);
    else if (columnId === 'enumTypes') openDataEnumTypeDrawer('edit', itemId);
  }

  function handleOnReferenceClick(itemId: string) {
    const ref = $refStore.find(child => child.name === itemId);
    openReferencedTypeDrawer(ref, 'edit');
  }

  function handleActionClick({ columnId }) {
    if (columnId === 'dataAttributeTypes') openCreateDataAttributeTypeDialog();
    else if (columnId === 'enumTypes') openCreateEnumTypeDialog();
  }

  function handleItemDrop({ source, target }: ItemDropOnItemEventDetail) {
    if (!source || !target) return;
    refStore.setTypeReference(target.itemId, source.itemId);
  }

  // ===== Helpers =====
  function acceptDrop(source: TBoardItemContext, target: ObjectReferenceDetails): boolean {
    const sourceType: BasicType = dataTypes[source.columnId].find(type => type.id === source.itemId);
    return canAssignTypeToObjectReference(target, sourceType);
  }

  function validateProps() {
    if (mode === 'create' && (!typeId || !instanceType)) {
      throw new Error('Type ID and instanceType are required in create mode');
    } else if ((mode === 'edit' || mode === 'view') && !typeId) {
      throw new Error('Type ID is required');
    }
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
