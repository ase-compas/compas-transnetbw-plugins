<script lang="ts">
  import { createObjectReferenceStore, route } from '../../lib/stores';
  import { OscdBreadcrumbs, OscdButton, OscdConfirmDialog, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import { DataTypes, DODetails, LNodeTypeDetails } from '../../lib/domain';
  import DataTypeDialog from '../../lib/components/dialogs/DataTypeDialog/DataTypeDialog.svelte';
  import DataAttributeDialog from '../../lib/components/dialogs/DataAttributeDialog/DataAttributeDialog.svelte';
  import TBoard from '../../lib/components/tboard/TBoard.svelte';
  import { getDataObjectTypeService, getLNodeTypeService } from '../../lib/services';
  import { getColumns } from './columns.config';
  import { TBoardItemContext, TItem } from '../../lib/components/tboard/types';
  import NewDataObjectType from '../../lib/components/dialogs/CreateDialogs/NewDataObjectType.svelte';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { loadLNodeType, loadTypes } from './dataLoader';
  import { onMount } from 'svelte';
  import { mapDATypeToTItem, mapDOTypeToTItem, mapEnumTypeToTItem } from '../../lib/mappers';
  import { createBreadcrumbs } from './lNodeTypeDetailsUtils';

  // Service instances
  const lNodeTypeService = getLNodeTypeService();
  const dataObjectService = getDataObjectTypeService();

  const refStore = createObjectReferenceStore(async () => {
    return logicalNodeType.dataObjects.map(doObj => ({
      ...doObj,
      id: doObj.name,
      mandatory: doObj.metadata.isMandatory,
      selected: doObj.metadata.isConfigured,
      marked: false
    }));
  });

  const { markedItems, selectedItems, isDirty } = refStore;

  // State
  let logicalNodeType: LNodeTypeDetails | null = null;
  let dataTypes: DataTypes = { dataObjectTypes: [], dataAttributeTypes: [], enumTypes: [] };

  // Mode management
  let isEditMode = false;
  $: mode = $route.path[0] === 'new' ? 'create' : (isEditMode ? 'edit' : 'view');
  $: isDirtyState = $isDirty || mode === 'create';

  function loadData() {
    const nodeId = $route.meta.lNodeTypeId;
    const lnClass = $route.meta.lnClass;
    if (mode === 'create') {
      isEditMode = true;
    }
    logicalNodeType = loadLNodeType(mode, nodeId, lnClass);
    refStore.reload();

    dataTypes = loadTypes(mode, logicalNodeType.id, logicalNodeType.lnClass, []);
  }

  $: breadcrumbs = createBreadcrumbs($route, logicalNodeType);

  // Load Data Types when marked items change
  $: if (logicalNodeType) {
    dataTypes = loadTypes(mode, logicalNodeType.id, logicalNodeType.lnClass, $markedItems.map(i => i.id));
  }


  // Determine which data objects to show based on mode
  let referenceDataObjects: TItem[] = [];
  $: referenceDataObjects = $refStore
    .filter(item => isEditMode || item.selected)
    .map(item => ({
      id: item.id,
      title: item.id,
      subtitle: item.type,
      isMandatory: item.mandatory,
      selected: item.selected || item.mandatory,
      marked: item.marked,
      canEdit: false,
      canSelect: isEditMode,
      canMark: true,
      canDelete: true,
      badgeText: item.cdc,
      canUnlink: isEditMode && !item.mandatory && (item.type !== null && item.type !== ''),
      canApplyDefaults: isEditMode,
      errorMessage: 'Type reference is needed',
      error: (item.selected || item.mandatory) && (item.type === null || item.type === ''),
      acceptDrop: acceptDrop
        ? (target: TBoardItemContext) => acceptDrop(target, item)
        : undefined
    }))
    .sort((a, b) => {
      const groupA = a.isMandatory ? 0 : (a.selected ? 1 : 2);
      const groupB = b.isMandatory ? 0 : (b.selected ? 1 : 2);
      if (groupA !== groupB) return groupA - groupB;
      return a.title.localeCompare(b.title);
    });

  $: boardData = {
    refs: referenceDataObjects,
    doTypes: dataTypes.dataObjectTypes.map(type => mapDOTypeToTItem(type, true)),
    daTypes: dataTypes.dataAttributeTypes.map(type => mapDATypeToTItem(type, true)),
    enumTypes: dataTypes.enumTypes.map(type => mapEnumTypeToTItem(type, true))
  }

// Board configuration
  $: columns = getColumns(isEditMode);

  onMount(() => {
    loadData();
  });

  function handleToggleMark(itemId: string) {
    refStore.toggleMarked(itemId);
  }

  function handleToggleSelect({ itemId }) {
    refStore.toggleSelected(itemId);
  }

  function handleItemDrop({ source, target }: { source: TBoardItemContext; target: TBoardItemContext }) {
    if (!source || !target) return;
    if (source.columnId === 'doTypes' && target.columnId === 'refs') {
      refStore.setReferenceType(target.itemId, source.itemId);
    }
  }

  function handleSaveChanges() {
    if (!logicalNodeType) return;

    let newDos = $selectedItems.map(item => ({
      name: item.id,
      type: item.type
    }));

    lNodeTypeService.saveLNodeType({
      ...logicalNodeType,
      dataObjects: newDos
    });

    loadData();

    if ($route.path[0] === 'new') {
      navigateToView(logicalNodeType);
    }
  }

  function navigateToView(lNodeType: LNodeTypeDetails) {
    route.set({ path: ['view'], meta: { lNodeTypeId: lNodeType.id, lnClass: lNodeType.lnClass } });
  }

  async function handleUnsavedChanges() {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Unsaved Changes',
      message: 'You have unsaved changes. Do you want to save them?',
      confirmActionText: 'Save',
      cancelActionText: 'Discard'
    });
    if (result.type === 'confirm') {
      handleSaveChanges();
    }
  }

  // Dialog handlers
  function handleActionClick({ columnId }) {
    if (columnId === 'dotypes') {
      openCreateDOTypeDialog();
    } else if (columnId === 'datypes') {
      alert('New DA Type');
    } else if (columnId === 'enumtypes') {
      alert('New ENUM TYPE');
    }
  }

  function handleOnEdit({ columnId, itemId }) {
    if (columnId === 'dotypes') {
      openEditDOTypeDialog(itemId, null, isEditMode ? 'edit' : 'view');
    } else if (columnId === 'datypes') {
      openEditDATypeDialog(itemId, isEditMode ? 'edit' : 'view');
    } else if (columnId === 'enumtypes') {
    }
  }

  async function handleBreadcrumbClick({ index }) {
    if (isDirtyState) {
      await handleUnsavedChanges();
    }
    if (index === 0) route.set({ path: ['overview'] });
  }

  function onEditModeChange(e) {
  }

  function handleOnUnlink({ itemId }) {
    refStore.removeReferenceType(itemId);
  }

  // ===== Dialog Handlers =====

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

  function acceptDrop(source: TBoardItemContext, target: DODetails): boolean {
    const doType = dataObjectService.findById(source.itemId);
    if (!doType) return false;
    return doType.cdc === target.cdc;
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
      on:itemMarkChange={({detail: {itemId, marked}}) => handleToggleMark(itemId, marked)}
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
