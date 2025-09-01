<script lang="ts">
  import { onMount } from 'svelte';
  import { createObjectReferenceStore, route } from '../../lib/stores';
  import { OscdBreadcrumbs, OscdButton, OscdConfirmDialog, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  // Components
  import TBoard from '../../lib/components/tboard/TBoard.svelte';
  import DataTypeDialog from '../../lib/components/dialogs/DataTypeDialog/DataTypeDialog.svelte';
  import DataAttributeDialog from '../../lib/components/dialogs/DataAttributeDialog/DataAttributeDialog.svelte';
  import NewDataObjectType from '../../lib/components/dialogs/CreateDialogs/NewDataObjectType.svelte';

  // Services & utils
  import {
    DataObjectTypeService,
    getDataObjectTypeService,
    getLNodeTypeServiceV2, ILNodeTypeV2Service
  } from '../../lib/services';
  import { loadLNodeType, loadTypes } from './dataLoader';
  import { mapDataTypeToItem } from '../../lib/mappers';
  import { getColumns } from './columns.config';
  import { createBreadcrumbs } from './lNodeTypeDetailsUtils';
  import { getDisplayReferenceItems } from '../../lib/utils/objectReferenceUtils';

  // Types
  import type { TBoardItemContext, TItem } from '../../lib/components/tboard/types';
  import type { DataTypes, LNodeTypeDetailsV2, ObjectReferenceDetails } from '../../lib/domain/core.model';

  // -----------------------------
  // Service instances
  // -----------------------------
  const lNodeTypeService: ILNodeTypeV2Service = getLNodeTypeServiceV2();
  const dataObjectService: DataObjectTypeService = getDataObjectTypeService();

  // -----------------------------
  // Stores
  // -----------------------------
  const refStore = createObjectReferenceStore(async () => logicalNodeType.children);
  const { markedItems, configuredItems, isDirty } = refStore;

  // -----------------------------
  // Component state
  // -----------------------------
  let logicalNodeType: LNodeTypeDetailsV2 | null = null;
  let dataTypes: DataTypes = {
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: []
  };

  let isEditMode = false;

  // -----------------------------
  // Reactive statements
  // -----------------------------
  // Determine mode based on route and edit state
  $: mode = $route.path[0] === 'new' ? 'create' : (isEditMode ? 'edit' : 'view');
  $: isDirtyState = $isDirty || mode === 'create';

  // Breadcrumbs
  $: breadcrumbs = createBreadcrumbs($route, logicalNodeType);

  // Reference data objects (filtered, mapped, sorted)
  let referenceDataObjects: TItem[] = [];
  $: referenceDataObjects = getDisplayReferenceItems($refStore, isEditMode, acceptDrop);

  // Board data configuration
  $: boardData = {
    refs: referenceDataObjects,
    doTypes: dataTypes.dataObjectTypes.map(type => mapDataTypeToItem(type, true, type.cdc, type.children.length)),
    daTypes: dataTypes.dataAttributeTypes.map(type => mapDataTypeToItem(type, true, undefined, type.children.length)),
    enumTypes: dataTypes.enumTypes.map(type => mapDataTypeToItem(type, true, undefined, type.values.length)),
  };

  $: columns = getColumns(isEditMode); // Board column configuration

  // -----------------------------
  // Loaders
  // -----------------------------
  async function loadData() {
    const nodeId = $route.meta.lNodeTypeId;
    const lnClass = $route.meta.lnClass;

    if (mode === 'create') {
      isEditMode = true;
    }

    logicalNodeType = await loadLNodeType(mode, nodeId, lnClass);
    await refStore.reload();
  }

  // Load data types when marked items change
  $: if (logicalNodeType) {
    loadTypes(mode, logicalNodeType.id, logicalNodeType.lnClass, $markedItems.map(i => i.name))
      .then(types => dataTypes = types);
  }

  // -----------------------------
  // Lifecycle
  // -----------------------------
  onMount(() => {
    loadData();
  });

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

    loadData();

    if ($route.path[0] === 'new') {
      navigateToView(logicalNodeType);
    }
  }

  /** Handle unsaved changes with optional reset */
  async function handleUnsavedChanges(resetOnDiscard = false) {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Unsaved Changes',
      message: 'You have unsaved changes. Do you want to save them?',
      confirmActionText: 'Save',
      cancelActionText: 'Discard'
    });
    if (result.type === 'confirm') {
      handleSaveChanges();
    } else if (resetOnDiscard) {
      refStore.reset();
    }
  }

  // Dialog handlers
  function handleActionClick({ columnId }) {
   if (columnId === 'doTypes') {
      openCreateDOTypeDialog();
    } else if (columnId === 'daTypes') {
      alert('New DA Type');
    } else if (columnId === 'enumTypes') {
      alert('New ENUM TYPE');
    }
  }

  function handleOnEdit({ columnId, itemId }) {
    if (columnId === 'doTypes') {
      openEditDOTypeDialog(itemId, null, isEditMode ? 'edit' : 'view');
    } else if (columnId === 'daTypes') {
      openEditDATypeDialog(itemId, isEditMode ? 'edit' : 'view');
    } else if (columnId === 'enumTypes') {
    }
  }

  async function handleBreadcrumbClick({ index }) {
    if (isDirtyState) {
      await handleUnsavedChanges();
    }
    if (index === 0) route.set({ path: ['overview'] });
  }

  /** Handle edit mode toggle with unsaved changes check */
  async function onEditModeChange(e) {
    if(isEditMode && isDirtyState) {
      await handleUnsavedChanges(true);
    }
  }

  function handleOnUnlink({ itemId }) {
    refStore.removeTypeReference(itemId);
  }

  // -----------------------------
  // Dialog Handlers
  // -----------------------------
  function openCreateDOTypeDialog() {
    openDialog(NewDataObjectType).then(result => {
      if (result.type === 'confirm') {
        openEditDOTypeDialog(result.data.id, result.data.cdc, 'create');
      }
    });
  }

  function openEditDOTypeDialog(typeId: string, cdc: string | null = null, mode: 'edit' | 'view' | 'create') {
    openDialog(DataTypeDialog, { typeId, cdc, mode });
  }

  function openEditDATypeDialog(typeId: string, mode: 'edit' | 'view' | 'create') {
    openDialog(DataAttributeDialog, { typeId, mode });
  }

  // -----------------------------
  // Utils
  // -----------------------------
  function navigateToView(lNodeType: LNodeTypeDetailsV2) {
    route.set({ path: ['view'], meta: { lNodeTypeId: lNodeType.id, lnClass: lNodeType.lnClass } });
  }

  function acceptDrop(source: TBoardItemContext, target: ObjectReferenceDetails): boolean {
    const doType = dataObjectService.findById(source.itemId);
    if (!doType) return false;
    return target.meta.requiresReference && doType.cdc === target.meta.objectType;
  }
</script>

<div class="oscd-details">
  <!-- START: Toolbar -->
  <div class="oscd-details-toolbar">
    <OscdBreadcrumbs activeIndex={1} {breadcrumbs} on:click={e => handleBreadcrumbClick(e.detail)} />

    <div class="oscd-details-toolbar-right">

      <OscdSwitch
        bind:checked={isEditMode}
        on:change={onEditModeChange}
        id="edit-mode-switch"
        label="Edit Mode"
        labelStyle="font-weight: bold; text-transform: uppercase; color: var(--mdc-theme-primary);"
      />

      <OscdButton
        disabled={!isDirtyState} callback={handleSaveChanges} variant="unelevated">
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
      on:itemEdit={e => handleOnEdit(e.detail)}
      on:itemMarkChange={({detail: {itemId}}) => handleToggleMark(itemId)}
      on:itemSelectChange={e => handleToggleSelect(e.detail)}
      on:itemDrop={e => handleItemDrop(e.detail)}
      on:itemApplyDefaults={e => console.log(e.detail)}
      on:itemUnlink={e => handleOnUnlink(e.detail)}
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
