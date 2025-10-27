<script lang="ts">
  import { onMount } from 'svelte';
  import TBoard from '../../tboard/TBoard.svelte';

  // ===== Services & Utilities =====
  import { getColumns } from './columns.config';
  import {
    getDataTypeService,
    getDefaultTypeService,
    getDOTypeService,
    type IDataTypeService,
    type IDefaultService,
    IDoTypeService
  } from '../../../services';
  import { createEditorStore, createObjectReferenceStore, doc } from '../../../stores';
  import { CloseReason } from '@oscd-transnet-plugins/oscd-services/drawer';
  import {
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems,
    openCreateDataAttributeTypeDialog,
    openCreateDataObjectTypeDialog,
    openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer,
    openDataEnumTypeDrawer,
    openDataObjectTypeDrawer,
    openReferencedTypeDrawer, setTypeAsDefaultWithConfirmation,
    setTypeAsDefaultWithConfirmationForBasicType
  } from '../../../utils';

  // ===== Types =====
  import {
    type BasicType,
    BasicTypes,
    DataTypeKind,
    DOTypeDetails,
    Mode,
    type ObjectReferenceDetails
  } from '../../../domain';
  import { ItemDropOnItemEventDetail, type TBoardItemContext, TItem } from '../../tboard/types';
  import TypeHeader from '../../TypeHeader.svelte';

  // ===== Services =====
  const doTypeService: IDoTypeService = getDOTypeService();
  const dataTypeService: IDataTypeService = getDataTypeService();
  const defaultTypeService: IDefaultService = getDefaultTypeService();

  // ===== Props =====
  export let mode: Mode = 'view';
  export let typeId: string;
  export let cdc: string | null = null;

  // ===== Stores =====
  const refStore = createObjectReferenceStore(async () => dataObjectType.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  const editorStore = createEditorStore({onSave: async () => saveChanges(), onDiscard: async () => refStore.reset(), initialMode: mode});
  const { canEdit, isEditModeSwitchState, dirty } = editorStore;

  // ===== State =====
  let dataObjectType: DOTypeDetails | null = null;
  let dataTypes: BasicTypes = {
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: [],
  };
  let referenceDataObjects: TItem[] = [];

  $: referenceDataObjects = getDisplayReferenceItems($refStore, $canEdit, acceptDrop);

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
    validateProps()

    // Subscribe to doc changes to reload data
    const unsubscribe = doc.subscribe(async () => {
      if ($isDirty) {
        // ensure async function is awaited
        dataTypes = await loadTypes(editorStore.getCanEdit(), typeId, cdc, $markedItemIds);
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

    return await editorStore.confirmLeave();
  };

  async function loadData() {
    if(editorStore.isCreateMode()) {
      doTypeService.createOrUpdateType({id: typeId, instanceType: cdc, children: []})
      editorStore.switchMode('edit');
      return
    }
    dataObjectType = await loadDOType(editorStore.isCreateMode(), typeId, cdc);
    typeId = dataObjectType.id;
    cdc = dataObjectType.cdc;
    await refStore.reload();
  }

  async function loadDOType(isCreateMode: boolean, typeId: string, cdc: string | null) {
    if (isCreateMode) {
      const defaultType = await doTypeService.getDefaultType(cdc);
      defaultType.id = typeId;
      return defaultType;
    }
    return await doTypeService.getTypeById(typeId);
  }

  $: if (dataObjectType) {
    loadTypes(editorStore.getCanEdit(), dataObjectType.id, dataObjectType.cdc, $markedItemIds)
      .then((types) => (dataTypes = types));
  }

  async function loadTypes(isEditMode: boolean, typeId: string, cdc: string, childNameFilter: string[]) {
    return isEditMode
      ? await doTypeService.getAssignableTypes(cdc, childNameFilter)
      : await doTypeService.getReferencedTypes(typeId, childNameFilter);
  }

  // ===== Save =====
  function saveChanges() {
      doTypeService.createOrUpdateType({
        id: dataObjectType.id,
        instanceType: dataObjectType.cdc,
        children: $configuredItems.map((item) => ({
          name: item.name,
          typeRef: item?.typeRef,
        })),
      });
  }

  // ===== Validation =====
  function validateProps() {
    if (mode === 'create' && (!typeId || !cdc)) {
      throw new Error('Type ID and CDC are required in create mode');
    } else if ((mode === 'edit' || mode === 'view') && !typeId) {
      throw new Error('Type ID is required');
    }
  }

  // ===== Event Handlers =====
  function handleOnMark({ itemId }) {
    refStore.toggleMarked(itemId);
  }

  function handleOnSelect({ itemId }) {
    refStore.toggleConfigured(itemId);
  }

  function handleItemDrop({ source, target }: ItemDropOnItemEventDetail) {
    if (!source || !target) return;
    refStore.setTypeReference(target.itemId, source.itemId);
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

  async function handleOnSetAsDefault(itemId: string, columnId: string) {
    let types: BasicType[];
    if (columnId === 'dataObjectTypes') {
      types = dataTypes.dataObjectTypes;
    } else if (columnId === 'dataAttributeTypes') {
      types = dataTypes.dataAttributeTypes;
    } else if (columnId === 'enumTypes') {
      types = dataTypes.enumTypes;
    } else {
      return;
    }
    const type = types.find(t => t.id === itemId);
    if(!type) return;

    await setTypeAsDefaultWithConfirmationForBasicType(defaultTypeService, dataTypeService, type);
  }

  function handleApplyDefaults(detail) {
    const {itemId} = detail;
    dataTypeService.applyDefaultType(DataTypeKind.DOType, typeId, itemId);
  }

  function handleClickSetAsDefault() {
    setTypeAsDefaultWithConfirmation(defaultTypeService, dataTypeService, DataTypeKind.DOType, cdc, typeId);
  }

  function handleOnReferenceClick(itemId: string) {
    const ref = $refStore.find((child) => child.name === itemId);
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

  async function handleModeChange(newMode: 'view' | 'edit') {
    const ok = await editorStore.switchMode(newMode);
    if(ok) await loadData();
  }

  // ===== Helpers =====
  function acceptDrop(source: TBoardItemContext, target: ObjectReferenceDetails): boolean {
    const sourceType: BasicType = dataTypes[source.columnId].find(
      (type) => type.id === source.itemId
    );
    return canAssignTypeToObjectReference(target, sourceType);
  }
</script>


<TypeHeader
  {typeId}
  type={DataTypeKind.DOType}
  instanceType={dataObjectType?.cdc}
  setAsDefaultDisabled={$dirty}
  bind:isEditMode={$isEditModeSwitchState}
  on:modeChange={e => handleModeChange(e.detail)}
  on:clickDefault={() => handleClickSetAsDefault()}
/>
<TBoard
  {columns}
  data={boardData}
  on:itemMarkChange={(e) => handleOnMark(e.detail)}
  on:itemSelectChange={(e) => handleOnSelect(e.detail)}
  on:itemDrop={(e) => handleItemDrop(e.detail)}
  on:itemEdit={({ detail: { itemId, columnId } }) => handleOnEdit(itemId, columnId)}
  on:itemReferenceClick={({ detail: { itemId } }) => handleOnReferenceClick(itemId)}
  on:itemUnlink={({ detail: { itemId }}) => refStore.removeTypeReference(itemId)}
  on:columnActionClick={({ detail: { columnId } }) => handleActionClick({ columnId })}
  on:itemSetDefault={({detail: {itemId, columnId}})  => handleOnSetAsDefault(itemId, columnId)}
  on:itemApplyDefaults={e => handleApplyDefaults(e.detail)}
/>
