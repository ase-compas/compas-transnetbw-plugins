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
    type IDoTypeService
  } from '../../../services';
  import { createEditorStore, createObjectReferenceStore, pluginStore } from '../../../stores';
  import { type CloseReason } from '@oscd-transnet-plugins/oscd-services/drawer';
  import {
  applyDefaultWarningNotification,
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems,
    openCreateDataAttributeTypeDialog,
    openCreateDataObjectTypeDialog,
    openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer,
    openDataEnumTypeDrawer,
    openDataObjectTypeDrawer,
    openReferencedTypeDrawer, setDefaultTypeErrorNotification, setDefaultTypeSuccessNotification, setTypeAsDefaultWithConfirmation,
    setTypeAsDefaultWithConfirmationForBasicType
  } from '../../../utils';

  // ===== Types =====
  import {
    type BasicType,
    type BasicTypes,
    DataTypeKind,
    type DOTypeDetails,
    type Mode,
    type ObjectReferenceDetails
  } from '../../../domain';
  import { type ItemDropOnItemEventDetail, type TBoardItemContext } from '../../tboard/types';
  import TypeHeader from '../../TypeHeader.svelte';

  // ===== Services =====
  const doTypeService: IDoTypeService = getDOTypeService();
  const dataTypeService: IDataTypeService = getDataTypeService();
  const defaultTypeService: IDefaultService = getDefaultTypeService();

  // ===== Props =====
  interface Props {
    mode?: Mode;
    typeId: string;
    cdc?: string | null;
  }

  let { mode = 'view', typeId = $bindable(), cdc = $bindable(null) }: Props = $props();

  // ===== Stores =====
  const refStore = createObjectReferenceStore(async () => dataObjectType.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  const editorStore = createEditorStore({onSave: async () => saveChanges(), onDiscard: async () => refStore.reset(), initialMode: mode});
  const { canEdit, isEditModeSwitchState, dirty } = editorStore;

  // ===== State =====
  let dataObjectType: DOTypeDetails | null = $state(null);
  let dataTypes: BasicTypes = $state({
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: [],
  });

  // ===== Lifecycle =====
  onMount(() => {
    validateProps()

    // Subscribe to doc changes to reload data
    const unsubscribe = pluginStore.updates.subscribe(async () => {
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
    if (reason === 'save' && $isDirty) {
      await editorStore.save();
      return true;
    }

    return await editorStore.confirmLeave();
  };

  async function loadData() {
    if(editorStore.isCreateMode()) {
      await editorStore.switchMode('edit');
      await doTypeService.createOrUpdateType({id: typeId, instanceType: cdc, children: []})
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

    try {
      const success = await setTypeAsDefaultWithConfirmationForBasicType(defaultTypeService, dataTypeService, type);
      if(success) setDefaultTypeSuccessNotification(type.id, type.typeKind, type.instanceType)
    } catch (e) {
      console.error(e);
      setDefaultTypeErrorNotification(type.id, e?.message ?? "")
    }
  }

  async function handleApplyDefaults(detail) {
    const {itemId} = detail;
    try {
      const defaultRootId = await dataTypeService.applyDefaultType(DataTypeKind.DOType, typeId, itemId);
      refStore.setTypeReference(itemId, defaultRootId);
    } catch (e) {
      applyDefaultWarningNotification(e?.message)
    }
  }

  async function handleClickSetAsDefault() {
    try {
      const success = await setTypeAsDefaultWithConfirmation(defaultTypeService, dataTypeService, DataTypeKind.DOType, cdc, typeId);
      if (success) setDefaultTypeSuccessNotification(typeId, DataTypeKind.DOType, cdc)
    } catch (e) {
      setDefaultTypeErrorNotification(typeId, e?.message)
    }
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


  let referenceDataObjects = $derived(
    getDisplayReferenceItems($refStore, $canEdit, acceptDrop)
  );

  $effect(() => {
    if (dataObjectType) {
      loadTypes(
        editorStore.getCanEdit(),
        dataObjectType.id,
        dataObjectType.cdc,
        $markedItemIds
      ).then((types) => (dataTypes = types));
    }
  });
  let boardData = $derived({
    refs: referenceDataObjects,
    dataObjectTypes: getDisplayDataTypeItems(dataTypes.dataObjectTypes, true),
    dataAttributeTypes: getDisplayDataTypeItems(dataTypes.dataAttributeTypes, true),
    enumTypes: getDisplayDataTypeItems(dataTypes.enumTypes, true),
  });

  let columns = $derived(getColumns($canEdit));

  $effect(() => {
    if ($isDirty) editorStore.makeDirty();
    else editorStore.makeClean();
  });
</script>


<TypeHeader
  {typeId}
  type={DataTypeKind.DOType}
  instanceType={dataObjectType?.cdc}
  setAsDefaultDisabled={$dirty}
  bind:isEditMode={$isEditModeSwitchState}
  onModeChange={e => handleModeChange(e)}
  onClickDefault={() => handleClickSetAsDefault()}
/>
<TBoard
  {columns}
  data={boardData}
  onItemMarkChange={(e) => handleOnMark(e)}
  onItemSelectChange={(e) => handleOnSelect(e)}
  onItemDrop={(e) => handleItemDrop(e)}
  onItemEdit={({ itemId, columnId }) => handleOnEdit(itemId, columnId)}
  onItemReferenceClick={({ itemId}) => handleOnReferenceClick(itemId)}
  onItemUnlink={({ itemId }) => refStore.removeTypeReference(itemId)}
  onColumnActionClick={({ columnId }) => handleActionClick({ columnId })}
  onItemSetDefault={({itemId, columnId})  => handleOnSetAsDefault(itemId, columnId)}
  onItemApplyDefaults={e => handleApplyDefaults(e)}
/>
