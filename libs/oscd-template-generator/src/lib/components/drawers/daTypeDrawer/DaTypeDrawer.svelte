<script lang="ts">
  import { onMount } from 'svelte';

  // ===== Components =====
  import TBoard from '../../tboard/TBoard.svelte';

  // ===== Services & Utils =====
  import { getColumns } from './columns.config';
  import { createObjectReferenceStore, pluginStore } from '@oscd-transnet-plugins/oscd-template-generator';
  import type { CloseReason } from '@oscd-transnet-plugins/oscd-services/drawer';
  import {
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems,
    setTypeAsDefaultWithConfirmation,
    setTypeAsDefaultWithConfirmationForBasicType
  } from '../../../utils';
  import {
    openCreateDataAttributeTypeDialog,
    openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer,
    openDataEnumTypeDrawer,
    openReferencedTypeDrawer
  } from '../../../utils';

  // ===== Types =====
  import type { ItemDropOnItemEventDetail, TBoardItemContext, TItem } from '../../tboard/types';
  import {
    type BasicType,
    type BasicTypes,
    type ObjectReferenceDetails,
    type DATypeDetails,
    DataTypeKind,
    type Mode
  } from '../../../domain';
  import type { IDaTypeService } from '../../../services/da-type.service';
  import {
    getDataTypeService,
    getDATypeService,
    getDefaultTypeService,
    type IDataTypeService,
    type IDefaultService
  } from '../../../services';
  import TypeHeader from '../../TypeHeader.svelte';
  import { createEditorStore } from '../../../stores';

  // ===== Services =====
  const daTypeService: IDaTypeService = getDATypeService();
  const dataTypeService: IDataTypeService = getDataTypeService();
  const defaultTypeService: IDefaultService = getDefaultTypeService();

  // ===== Props =====
  interface Props {
    mode?: Mode
    typeId: string;
    instanceType?: string | null;
  }

  let { mode = 'view', typeId = $bindable(), instanceType = $bindable(null) }: Props = $props();

  // ===== Stores =====
  const refStore = createObjectReferenceStore(async () => dataAttributeTypes.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  const editorStore = createEditorStore({
    onSave: async () => saveChanges(),
    onDiscard: async () => refStore.reset(),
    initialMode: mode
  });
  const { canEdit, isEditModeSwitchState, dirty } = editorStore;

  // ===== State =====
  let dataAttributeTypes: DATypeDetails | null = $state(null);
  let dataTypes: BasicTypes = $state({
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: [],
  });




  // ===== Lifecycle =====
  onMount(() => {
    validateProps();

    // Subscribe to doc changes to reload data
    const unsubscribe = pluginStore.updates.subscribe(async () => {
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
    if (reason === 'save' && $isDirty) {
      await editorStore.save();
      return true;
    }

    return await editorStore.confirmLeave();
  };

  async function loadData() {
    if(editorStore.isCreateMode()) {
      await editorStore.switchMode('edit')
      await daTypeService.createOrUpdateType({id: typeId, instanceType: instanceType, children: []})
      return
    }
    const result = await loadDAType(editorStore.isCreateMode(), typeId, instanceType);
    typeId = result.id
    instanceType = result.instanceType;
    dataAttributeTypes = result;
    await refStore.reload();
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
    const openingMode: Mode = $canEdit ? 'edit' : 'view';
    if (columnId === 'dataAttributeTypes') openDataAttributeTypeDrawer(openingMode, itemId);
    else if (columnId === 'enumTypes') openDataEnumTypeDrawer(openingMode, itemId);
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

    await setTypeAsDefaultWithConfirmationForBasicType(defaultTypeService, dataTypeService, type)
  }

  async function handleApplyDefaults(detail) {
    const {itemId} = detail;
    const defaultRootId = await dataTypeService.applyDefaultType(DataTypeKind.DAType, typeId, itemId);
    refStore.setTypeReference(itemId, defaultRootId);
  }

  function handleClickSetAsDefault() {
    setTypeAsDefaultWithConfirmation(defaultTypeService, dataTypeService, DataTypeKind.DAType, instanceType, typeId);
  }

  function handleOnReferenceClick(itemId: string) {
    const ref = $refStore.find(child => child.name === itemId);
    openReferencedTypeDrawer(ref, 'view');
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

  async function handleModeChange(newMode: 'view' | 'edit') {
    const ok = await editorStore.switchMode(newMode);
    if (ok) await loadData();
  }
  let referenceDataObjects = $derived(
    getDisplayReferenceItems($refStore, editorStore.getCanEdit(), acceptDrop)
  );

  $effect(() => {
    if (dataAttributeTypes) {
      loadTypes(
        editorStore.getCanEdit(),
        dataAttributeTypes.id,
        dataAttributeTypes.instanceType,
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
  type={DataTypeKind.DAType}
  instanceType={dataAttributeTypes?.instanceType}
  setAsDefaultDisabled={$dirty}
  bind:isEditMode={$isEditModeSwitchState}
  onModeChange={e => handleModeChange(e)}
  onClickDefault={() => handleClickSetAsDefault()}
  onInstanceTypeChange={(e) => {
    instanceType = e;
    editorStore.switchMode('create');
    loadData();
    }
  }
/>
<TBoard
  {columns}
  data={boardData}
  onItemMarkChange={e => handleOnMark(e)}
  onItemSelectChange={e => handleOnSelect(e)}
  onItemDrop={e => handleItemDrop(e)}
  onColumnActionClick={e => handleActionClick(e)}
  onItemEdit={e => handleOnEdit(e.itemId, e.columnId)}
  onItemReferenceClick={e => handleOnReferenceClick(e.itemId)}
  onItemUnlink={({ itemId }) => refStore.removeTypeReference(itemId)}
  onItemSetDefault={({itemId, columnId})  => handleOnSetAsDefault(itemId, columnId)}
  onItemApplyDefaults={e => handleApplyDefaults(e)}
/>
