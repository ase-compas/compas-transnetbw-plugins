<script lang="ts">
  // Types
  // Components
  // Services & utils
  import {
    type BasicType,
    type BasicTypes,
    canAssignTypeToObjectReference,
    createEditorStore,
    createObjectReferenceStore,
    DataTypeKind,
    getAlertService,
    getDataTypeService,
    getDefaultTypeService,
    getDisplayDataTypeItems,
    getDisplayReferenceItems,
    getLNodeTypeService,
    type IDataTypeService,
    type IDefaultService,
    type ILNodeTypeService,
    type LNodeTypeDetails,
    type Mode,
    type  ObjectReferenceDetails,
    openCreateDataAttributeTypeDialog,
    openCreateDataObjectTypeDialog,
    openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer,
    openDataEnumTypeDrawer,
    openDataObjectTypeDrawer,
    openReferencedTypeDrawer,
    pluginStore,
    route,
    SetDefaultButton,
    setTypeAsDefaultWithConfirmation,
    setTypeAsDefaultWithConfirmationForBasicType,
    TBoard,
    type TBoardItemContext
  } from '@oscd-transnet-plugins/oscd-template-generator';
  import { OscdBreadcrumbs, OscdButton, OscdSwitch, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import { loadLNodeType, loadTypes } from './dataLoader';
  import { getColumns } from './columns.config';
  import { createBreadcrumbs } from './lNodeTypeDetailsUtils';
  import { onMount } from 'svelte';
  import { OscdAlertService } from '@oscd-transnet-plugins/oscd-services/alert';

  // -----------------------------
  // Service instances
  // -----------------------------
  const lNodeTypeService: ILNodeTypeService = getLNodeTypeService();
  const dataTypeService: IDataTypeService = getDataTypeService()
  const defaultTypeService: IDefaultService = getDefaultTypeService();
  const alertService: OscdAlertService = getAlertService();

  // -----------------------------
  // Stores
  // -----------------------------
  const refStore = createObjectReferenceStore(async () => logicalNodeType.children);
  const { markedItems, configuredItems, isDirty: refStoreIsDirty } = refStore;

  const editorStore = createEditorStore({ onSave: async () => handleSaveChanges(), onDiscard: async () => refStore.reset()});
  const { canEdit, isEditModeSwitchState, mode, dirty, isSavable } = editorStore;

  // -----------------------------
  // Component state
  // -----------------------------
  let created = $state(false);
  let lNodeTypeId: string = $state('');
  let lnClass: string = $state('');
  let logicalNodeType: LNodeTypeDetails | null = $state(null);
  let dataTypes: BasicTypes = $state({
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: []
  });

  onMount(() => {
    setModeFromPath();

    lNodeTypeId = $route?.meta?.lNodeTypeId;
    lnClass = $route?.meta?.lnClass;

    const unsub = pluginStore.updates.subscribe(s => {
      $dirty ? loadDataTypes([]) : loadLogicalNodeType(lNodeTypeId, lnClass)
    })

    return () => {
      unsub();
    }
  });

  // -----------------------------
  // Reactive statements
  // -----------------------------
  // Determine mode based on route and edit state


  function setModeFromPath() {
    const mode: Mode = $route?.path[0] === 'create' ? 'create' : ($route?.path[0] === 'edit' ? 'edit' : 'view');
    created = mode !== 'create';
    editorStore.switchMode(mode);
  }


  // -----------------------------
  // Loaders
  // -----------------------------
  async function loadLogicalNodeType(lNodeTypeId: string, lnClass?: string) {
    lNodeTypeId = lNodeTypeId;
    lnClass = lnClass;
    if ($mode === "create") {
      try {
        await editorStore.switchMode("edit")
        await lNodeTypeService.createOrUpdateType({id: lNodeTypeId, instanceType: lnClass, children: []})
        console.log("created new LNodeType with id:", lNodeTypeId);
      } catch (e) {
        console.error(e);
      }
      return;
    }
    logicalNodeType = await loadLNodeType($mode, lNodeTypeId, lnClass);
    await refStore.reload();
  }

  async function loadDataTypes(markedItems) {
    if (!logicalNodeType) return;
    loadTypes($mode, logicalNodeType.id, logicalNodeType.lnClass, markedItems.map(i => i.name))
      .then(types => dataTypes = types);
  }

  // -----------------------------
  // Event Handlers
  // -----------------------------
  function handleToggleMark(itemId: string) {
    refStore.toggleMarked(itemId);
  }

  function handleToggleSelect({ itemId }) {
    refStore.toggleConfigured(itemId);
  }

  function handleItemDrop({ source, target }: { source: TBoardItemContext; target: TBoardItemContext }) {
    if (!source || !target) return;
    if (source.columnId === 'doTypes' && target.columnId === 'refs') {
      refStore.setTypeReference(target.itemId, source.itemId);
    }
  }

  function handleSaveChanges() {
    if (!logicalNodeType) return;

    let newDos = $configuredItems.map(item => ({
      name: item.name,
      typeRef: item.typeRef
    }));

    lNodeTypeService.createOrUpdateType({
      id: logicalNodeType.id,
      instanceType: logicalNodeType.lnClass,
      children: newDos
    })
    refStore.commit();
  }

  // Dialog handlers
  function handleActionClick({ columnId }) {
   if (columnId === 'doTypes') {
     openCreateDataObjectTypeDialog();
    } else if (columnId === 'daTypes') {
     openCreateDataAttributeTypeDialog();
    } else if (columnId === 'enumTypes') {
     openCreateEnumTypeDialog();
    }
  }

  function handleOnEdit(itemId: string, columnId: string) {
    const openMode: Mode = canEdit ? 'edit' : 'view';
    if (columnId === 'doTypes') {
      openDataObjectTypeDrawer(openMode, itemId);
    } else if (columnId === 'daTypes') {
      openDataAttributeTypeDrawer(openMode, itemId);
    } else if (columnId === 'enumTypes') {
      openDataEnumTypeDrawer(openMode, itemId)
    }
  }

  async function handleOnSetAsDefault(itemId: string, columnId: string) {
    let types: BasicType[];
    if (columnId === 'doTypes') {
      types = dataTypes.dataObjectTypes;
    } else if (columnId === 'daTypes') {
      types = dataTypes.dataAttributeTypes;
    } else if (columnId === 'enumTypes') {
      types = dataTypes.enumTypes;
    } else {
      return;
    }
    const type = types.find(t => t.id === itemId);
    if(!type) return;

    try {
      await setTypeAsDefaultWithConfirmationForBasicType(defaultTypeService, dataTypeService, type)
    } catch (e) {
      console.error(e);
      alertService.error(e.message);
    }
  }

  async function handleClickOnSetAsDefault() {
    if(!logicalNodeType) return;
    await setTypeAsDefaultWithConfirmation(defaultTypeService, dataTypeService, DataTypeKind.LNodeType, logicalNodeType.lnClass, logicalNodeType.id);
  }

  async function handleBreadcrumbClick({ index }) {
    const ok = await editorStore.confirmLeave();
    if(!ok) return;
    if (index === 0) route.set({ path: ['overview'] });
  }

  /** Handle edit mode toggle with unsaved changes check */
  async function onEditModeChange(isEditMode) {
    const ok = await editorStore.switchMode(isEditMode ? 'edit' : 'view');
    if(ok) await loadLogicalNodeType(lNodeTypeId, lnClass);
  }

  function handleOnUnlink({ itemId }) {
    refStore.removeTypeReference(itemId);
  }

  function handleOnReferenceClick({itemId}) {
    const ref = $refStore.find(i => i.name === itemId);
    openReferencedTypeDrawer(ref, 'view')
  }

  async function handleApplyDefaults(detail) {
    const { itemId } = detail;
    try {
      const defaultRootId = await dataTypeService.applyDefaultType(DataTypeKind.LNodeType, lNodeTypeId, itemId)
      refStore.setTypeReference(itemId, defaultRootId);
    } catch (e: any) {
      alertService.error(e.message);
    }
    // Set the reference to the newly created to reflect the change in the UI
  }

  // -----------------------------
  // Utils
  // -----------------------------
  function acceptDrop(source: TBoardItemContext, target: ObjectReferenceDetails): boolean {
    const sourceType: BasicType = dataTypes.dataObjectTypes.find(type => type.id === source.itemId);
    return canAssignTypeToObjectReference(target, sourceType)
  }

  $effect(() => {
    if ($refStoreIsDirty) editorStore.makeDirty();
    else editorStore.makeClean();
  });

  // Breadcrumbs
  let breadcrumbs = $derived(createBreadcrumbs($mode === 'create', logicalNodeType));
  let referenceDataObjects = $derived(
    getDisplayReferenceItems($refStore, $canEdit, acceptDrop)
  );
  // Board data configuration
  let boardData = $derived({
    refs: referenceDataObjects,
    doTypes: getDisplayDataTypeItems(dataTypes.dataObjectTypes, true),
    daTypes: getDisplayDataTypeItems(dataTypes.dataAttributeTypes, true),
    enumTypes: getDisplayDataTypeItems(dataTypes.enumTypes, true),
  });

  let columns = $derived(getColumns($canEdit)); // Board column configuration

  $effect(() => {
    if (logicalNodeType) loadDataTypes($markedItems);
  }); // load dataTypes when logicalNodeType or markedItems change
</script>

<div class="oscd-details">
  <!-- START: Toolbar -->
  <div class="oscd-details-toolbar">
    <OscdBreadcrumbs activeIndex={1} {breadcrumbs} on:click={e => handleBreadcrumbClick(e.detail)} />

    <div class="oscd-details-toolbar-right">

      {#if $dirty}
        <OscdTooltip content="Save first to set as default" side="bottom" hoverDelay={300}>
          <SetDefaultButton onClick={() => handleClickOnSetAsDefault()} disabled={$dirty}/>
        </OscdTooltip>
      {:else}
        <SetDefaultButton onClick={() => handleClickOnSetAsDefault()} />
      {/if}

      <OscdSwitch
        bind:checked={$isEditModeSwitchState}
        onChange={e => onEditModeChange(e)}
        preventToggleOnClick={true}
        id="edit-mode-switch"
        label="Edit Mode"
        labelStyle="font-weight: bold; text-transform: uppercase; color: var(--mdc-theme-primary);"
      />

      <OscdButton
        disabled={!$isSavable} callback={() => editorStore.save()} variant="unelevated">
        SAVE CHANGES
      </OscdButton>
    </div>
  </div>
  <!-- END: Toolbar -->

  <div class="oscd-details-board">
    <TBoard
      {columns}
      data={boardData}
      onColumnActionClick={e => handleActionClick(e)}
      onItemEdit={({itemId, columnId}) => handleOnEdit(itemId, columnId)}
      onItemMarkChange={({itemId}) => handleToggleMark(itemId)}
      onItemSelectChange={e => handleToggleSelect(e)}
      onItemDrop={e => handleItemDrop(e)}
      onItemApplyDefaults={e => handleApplyDefaults(e)}
      onItemUnlink={e => handleOnUnlink(e)}
      onItemReferenceClick={e => handleOnReferenceClick(e)}
      onItemSetDefault={({itemId, columnId})  => handleOnSetAsDefault(itemId, columnId)}
    />
  </div>
</div>


<style>
  .oscd-details-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 1.5rem 0;
  }

  .oscd-details-toolbar-right {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .oscd-details-board {
    display: flex;
    gap: 2rem;
    height: calc(100vh - 200px);
  }
</style>
