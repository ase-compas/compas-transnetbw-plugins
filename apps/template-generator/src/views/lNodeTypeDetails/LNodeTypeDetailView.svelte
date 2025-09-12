<script lang="ts">
  import { createObjectReferenceStore, route } from '../../lib/stores';
  import { OscdBreadcrumbs, OscdButton, OscdConfirmDialog, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  // Components
  import TBoard from '../../lib/components/tboard/TBoard.svelte';

  // Services & utils
  import { getLNodeTypeService, ILNodeTypeService } from '../../lib/services';
  import { loadLNodeType, loadTypes } from './dataLoader';
  import { getColumns } from './columns.config';
  import { createBreadcrumbs } from './lNodeTypeDetailsUtils';
  import {
    canAssignTypeToObjectReference,
    getDisplayDataTypeItems,
    getDisplayReferenceItems
  } from '../../lib/utils/typeBoardUtils';

  // Types
  import type { TBoardItemContext, TItem } from '../../lib/components/tboard/types';
  import type { BasicType, BasicTypes, LNodeTypeDetails, ObjectReferenceDetails } from '../../lib/domain';
  import {
    confirmUnsavedChanges,
    openCreateDataAttributeTypeDialog, openCreateDataObjectTypeDialog, openCreateEnumTypeDialog,
    openDataAttributeTypeDrawer, openDataEnumTypeDrawer,
    openDataObjectTypeDrawer,
    openReferencedTypeDrawer
  } from '../../lib/utils/overlayUitils';

  export let doc: XMLDocument;

  // -----------------------------
  // Service instances
  // -----------------------------
  const lNodeTypeService: ILNodeTypeService = getLNodeTypeService();

  // -----------------------------
  // Stores
  // -----------------------------
  const refStore = createObjectReferenceStore(async () => logicalNodeType.children);
  const { markedItems, configuredItems, isDirty } = refStore;

  // -----------------------------
  // Component state
  // -----------------------------
  let logicalNodeType: LNodeTypeDetails | null = null;
  let dataTypes: BasicTypes = {
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: []
  };

  let canEdit = false;

  // -----------------------------
  // Reactive statements
  // -----------------------------
  // Determine mode based on route and edit state
  type Mode = 'view' | 'edit' | 'create';
  let mode: Mode = 'view';
  const isCreateMode = () => mode === 'create';

  route.subscribe(route => {
    const path = route.path[0];
    if (path === 'create') {
      mode = 'create';
      canEdit = true;
    } else if (path === 'edit') {
      mode = 'edit';
      canEdit = true;
    } else {
      mode = 'view';
      canEdit = false;
    }
  })

  $: isSaveable = $isDirty || mode === 'create';

  // Breadcrumbs
  $: breadcrumbs = createBreadcrumbs(mode === 'create', logicalNodeType);

  // Reference data objects (filtered, mapped, sorted)
  let referenceDataObjects: TItem[] = [];
  $: referenceDataObjects = getDisplayReferenceItems($refStore, canEdit, acceptDrop);

  // Board data configuration
  $: boardData = {
    refs: referenceDataObjects,
    doTypes: getDisplayDataTypeItems(dataTypes.dataObjectTypes, canEdit),
    daTypes: getDisplayDataTypeItems(dataTypes.dataAttributeTypes, canEdit),
    enumTypes: getDisplayDataTypeItems(dataTypes.enumTypes, canEdit),
  };

  $: columns = getColumns(canEdit); // Board column configuration

  // -----------------------------
  // Loaders
  // -----------------------------
  async function loadLogicalNodeType() {
    if($isDirty) return;
    const { lNodeTypeId, lnClass } = $route.meta;
    logicalNodeType = await loadLNodeType(mode, lNodeTypeId, lnClass);
    await refStore.reload();
  }

  async function loadDataTypes() {
    if (!logicalNodeType) return;
    const loadMode: Mode = isCreateMode() ? 'create' : (canEdit ? 'edit' : 'view');
    loadTypes(loadMode, logicalNodeType.id, logicalNodeType.lnClass, $markedItems.map(i => i.name))
      .then(types => dataTypes = types);
  }

  // -----------------------------
  // Lifecycle
  // -----------------------------
  $: if (doc && $route.meta) {
    loadLogicalNodeType();
  }

  let debounceTimeout;
  $: if(logicalNodeType && (doc || $markedItems || mode || canEdit)) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      loadDataTypes();
    }, 50);
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

    if (isCreateMode()) {
      switchToEditMode(logicalNodeType);
    }
  }

  /** Handle unsaved changes with optional reset */
  async function handleUnsavedChanges(resetOnDiscard = false) {
    const {action} = await confirmUnsavedChanges();
    if (action === 'save') {
      handleSaveChanges();
    } else if (action === 'discard' && resetOnDiscard) {
      refStore.reset();
    }
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
    if (isSaveable) {
      await handleUnsavedChanges();
    }
    if (index === 0) route.set({ path: ['overview'] });
  }

  /** Handle edit mode toggle with unsaved changes check */
  async function onEditModeChange(e) {
    if(canEdit && isSaveable) {
      await handleUnsavedChanges(true);
    }
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
  function switchToEditMode(lNodeType: LNodeTypeDetails) {
    route.set({ path: ['edit'], meta: { lNodeTypeId: lNodeType.id, lnClass: lNodeType.lnClass } });
  }

  function acceptDrop(source: TBoardItemContext, target: ObjectReferenceDetails): boolean {
    const sourceType: BasicType = dataTypes.dataObjectTypes.find(type => type.id === source.itemId);
    return canAssignTypeToObjectReference(target, sourceType)
  }
</script>

<div class="oscd-details">
  <!-- START: Toolbar -->
  <div class="oscd-details-toolbar">
    <OscdBreadcrumbs activeIndex={1} {breadcrumbs} on:click={e => handleBreadcrumbClick(e.detail)} />

    <div class="oscd-details-toolbar-right">

      <OscdSwitch
        bind:checked={canEdit}
        on:change={onEditModeChange}
        id="edit-mode-switch"
        label="Edit Mode"
        labelStyle="font-weight: bold; text-transform: uppercase; color: var(--mdc-theme-primary);"
      />

      <OscdButton
        disabled={!isSaveable} callback={handleSaveChanges} variant="unelevated">
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
