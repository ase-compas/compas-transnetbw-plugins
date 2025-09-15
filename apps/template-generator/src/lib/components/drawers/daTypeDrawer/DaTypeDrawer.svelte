<script lang="ts">
  import { onMount } from 'svelte';

  // ===== Components =====
  import TBoard from '../../tboard/TBoard.svelte';

  // ===== Services & Utils =====
  import { getColumns } from './columns.config';
  import { createObjectReferenceStore, doc } from '../../../stores';
  import { CloseReason } from '../../../stores/drawerStackStore';
  import {
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems
  } from '../../../utils/typeBoardUtils';
  import {
    openCreateDataAttributeTypeDialog,
    openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer,
    openDataEnumTypeDrawer,
    openReferencedTypeDrawer
  } from '../../../utils/overlayUitils';

  // ===== Types =====
  import type { ItemDropOnItemEventDetail, TBoardItemContext, TItem } from '../../tboard/types';
  import { BasicType, BasicTypes, ObjectReferenceDetails, DATypeDetails, DataTypeKind } from '../../../domain';
  import type { IDaTypeService } from '../../../services/da-type.service';
  import { getDATypeService } from '../../../services';
  import TypeHeader from '../../../TypeHeader.svelte';
  import { createEditorStore } from '../../../stores/editorStore';

  // ===== Services =====
  const daTypeService: IDaTypeService = getDATypeService();

  // ===== Props =====
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let instanceType: string | null = null;

  // ===== Stores =====
  const refStore = createObjectReferenceStore(async () => dataAttributeTypes.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  const editorStore = createEditorStore({
    onSave: async () => saveChanges(),
    onDiscard: async () => refStore.reset(),
    initialMode: mode,
  });
  const { canEdit } = editorStore;

  // ===== State =====
  let dataAttributeTypes: DATypeDetails | null = null;
  let dataTypes: BasicTypes = {
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: [],
  };

  let referenceDataObjects: TItem[] = [];
  $: referenceDataObjects = getDisplayReferenceItems($refStore, editorStore.getCanEdit(), acceptDrop);

  $: boardData = {
    refs: referenceDataObjects,
    dataObjectTypes: getDisplayDataTypeItems(dataTypes.dataObjectTypes, true),
    dataAttributeTypes: getDisplayDataTypeItems(dataTypes.dataAttributeTypes, true),
    enumTypes: getDisplayDataTypeItems(dataTypes.enumTypes, true),
  };

  $: columns = getColumns($canEdit);
  $: $isDirty ? editorStore.makeDirty() : editorStore.makeClean();


  // ===== Lifecycle =====
  onMount(() => {
    init()

    // Subscribe to doc changes to reload data
    const unsubscribe = doc.subscribe(async () => {
      if ($isDirty) {
        // ensure async function is awaited
        dataTypes = await loadTypes(editorStore.getCanEdit(), typeId, instanceType, $markedItemIds);
      } else {
        await loadData();
      }
    });

    return () => unsubscribe();
  });

  // ===== Dialog Close Guard =====
  export const canClose = async (reason: CloseReason): Promise<boolean> => {
    if (reason === 'save') {
      await editorStore.save();
      return true;
    }

    return await editorStore.close();
  };

  // ===== Initialization =====
  function init() {
    validateProps();
    loadData();
  }

  async function loadData() {
    const result = await loadDAType(editorStore.isCreateMode(), typeId, instanceType);
    if (!result?.instanceType || result.instanceType === '') mode = 'view'
    dataAttributeTypes = result;
    await refStore.reload();
  }

  $: if (dataAttributeTypes) {
    loadTypes(editorStore.getCanEdit(), dataAttributeTypes.id, dataAttributeTypes.instanceType, $markedItemIds)
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

  function saveChanges() {
    daTypeService.createOrUpdateType({
      id: dataAttributeTypes.id,
      instanceType: dataAttributeTypes.instanceType,
      children: $configuredItems.map(item => ({ name: item.name, typeRef: item?.typeRef })),
    });
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

  function handleModeChange(newMode: 'view' | 'edit') {
    editorStore.switchMode(newMode);
    loadData();
  }
</script>

<TypeHeader
  {typeId}
  type={DataTypeKind.DAType}
  instanceType={dataAttributeTypes?.instanceType}
  isEditMode={$canEdit}
  on:modeChange={e => handleModeChange(e.detail)}
  on:instanceTypeChange={(e) => {
    instanceType = e.detail;
    editorStore.switchMode('create');
    init();
    }
  }
/>
<TBoard
  {columns}
  data={boardData}
  on:itemMarkChange={e => handleOnMark(e.detail)}
  on:itemSelectChange={e => handleOnSelect(e.detail)}
  on:itemDrop={e => handleItemDrop(e.detail)}
  on:columnActionClick={e => handleActionClick(e.detail)}
  on:itemEdit={e => handleOnEdit(e.detail.itemId, e.detail.columnId)}
  on:itemReferenceClick={e => handleOnReferenceClick(e.detail.itemId)}
  on:itemUnlink={({ detail: { itemId }}) => refStore.removeTypeReference(itemId)}
/>
