<script lang="ts">
  import { createObjectReferenceStore, route, doc as docStore} from '@oscd-transnet-plugins/oscd-template-generator';
  import { OscdBreadcrumbs, OscdButton, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';

  // Components
  import  { TBoard } from '@oscd-transnet-plugins/oscd-template-generator';

  // Services & utils
  import { getLNodeTypeService } from '@oscd-transnet-plugins/oscd-template-generator';
  import type { ILNodeTypeService } from '@oscd-transnet-plugins/oscd-template-generator';
  import { loadLNodeType, loadTypes } from './dataLoader';
  import { getColumns } from './columns.config';
  import { createBreadcrumbs } from './lNodeTypeDetailsUtils';
  import {
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems
  } from '@oscd-transnet-plugins/oscd-template-generator';

  // Types
  import type { TBoardItemContext, TItem } from '@oscd-transnet-plugins/oscd-template-generator';
  import type { BasicType, BasicTypes, LNodeTypeDetails, Mode, ObjectReferenceDetails } from '@oscd-transnet-plugins/oscd-template-generator';
  import {
    openCreateDataAttributeTypeDialog, openCreateDataObjectTypeDialog, openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer, openDataEnumTypeDrawer,
    openDataObjectTypeDrawer,
    openReferencedTypeDrawer
  } from '@oscd-transnet-plugins/oscd-template-generator';
  import { createEditorStore } from '@oscd-transnet-plugins/oscd-template-generator';
  import { onMount } from 'svelte';

  // -----------------------------
  // Service instances
  // -----------------------------
  const lNodeTypeService: ILNodeTypeService = getLNodeTypeService();

  // -----------------------------
  // Stores
  // -----------------------------
  const refStore = createObjectReferenceStore(async () => logicalNodeType.children);
  const { markedItems, configuredItems, isDirty: refStoreIsDirty } = refStore;

  const editorStore = createEditorStore({ onSave: async () => handleSaveChanges(), onDiscard: async () => refStore.reset(), initialMode: 'view' });
  const { canEdit, isEditModeSwitchState, mode, dirty, isSavable } = editorStore;

  // -----------------------------
  // Component state
  // -----------------------------
  let lNodeTypeId: string;
  let lnClass: string;
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

    const unsubscribeDoc = docStore.subscribe(_ => {
      $dirty ? loadDataTypes([]) : loadLogicalNodeType(lNodeTypeId, lnClass)
    })

    return () => {
      unsubscribeDoc();
    }
  });

  // -----------------------------
  // Reactive statements
  // -----------------------------
  // Determine mode based on route and edit state


  function setModeFromPath() {
    const mode: Mode = $route?.path[0] === 'create' ? 'create' : ($route?.path[0] === 'edit' ? 'edit' : 'view');
    editorStore.switchMode(mode);
  }



  // Reference data objects (filtered, mapped, sorted)
  // -----------------------------
  // Loaders
  // -----------------------------
  async function loadLogicalNodeType(lNodeTypeId: string, lnClass?: string) {
    logicalNodeType = await loadLNodeType($mode, lNodeTypeId, lnClass);
    lNodeTypeId = logicalNodeType.id;
    lnClass = logicalNodeType.lnClass;
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

      <OscdSwitch
        bind:checked={$isEditModeSwitchState}
        on:change={e => onEditModeChange(e.detail)}
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
      on:columnActionClick={e => handleActionClick(e.detail)}
      on:itemEdit={({detail: {itemId, columnId}}) => handleOnEdit(itemId, columnId)}
      on:itemMarkChange={({detail: {itemId}}) => handleToggleMark(itemId)}
      on:itemSelectChange={e => handleToggleSelect(e.detail)}
      on:itemDrop={e => handleItemDrop(e.detail)}
      on:itemApplyDefaults={e => console.log(e.detail)}
      on:itemUnlink={e => handleOnUnlink(e.detail)}
      on:itemReferenceClick={e => handleOnReferenceClick(e.detail)}
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
