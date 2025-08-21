<script lang="ts">
  import { route } from '../../lib/stores';
  import { OscdBreadcrumbs, OscdButton, OscdConfirmDialog, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import { onMount } from 'svelte';
  import { DataTypes, LNodeTypeDetails } from '../../lib/domain';
  import DataTypeDialog from '../../lib/components/dialogs/DataTypeDialog/DataTypeDialog.svelte';
  import DataAttributeDialog from '../../lib/components/dialogs/DataAttributeDialog/DataAttributeDialog.svelte';
  import TBoard from '../../lib/components/tboard/TBoard.svelte';
  import {
    getDataObjectTypeService,
    getLNodeTypeService,
  } from '../../lib/services';
  import { createBreadcrumbs } from './lNodeTypeDetailsUtils';
  import { getColumns } from './columns.config';
  import { TBoardItemContext } from '../../lib/components/tboard/types';
  import { buildDATypeItems, buildDOItems, buildDOTypeItems, buildEnumTypeItems } from '../../lib/utils/itemBuilder';
  import NewDataObjectType from "../../lib/components/dialogs/CreateDialogs/NewDataObjectType.svelte";
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { loadLNodeType, loadTypes} from "./dataLoader";

  export let doc: XMLDocument;

  // Service instances
  const lNodeTypeService = getLNodeTypeService();
  const dataObjectService = getDataObjectTypeService();

  // State
  let logicalNodeType: LNodeTypeDetails | null = null;
  let dataTypes: DataTypes = { dataObjectTypes: [], dataAttributeTypes: [], enumTypes: [] };
  let markedItemIds = new Set<string>();
  let isDirty = false;

  // Mode management
  $: mode = $route.path[0] === 'new' ? 'create' : (isEditMode ? 'edit' : 'view');
  $: isEditMode = false;
  $: isEditMode, refreshAll()
  $: if(!isEditMode) {
    handleUnsavedChanges()
  }

  // Initial load and doc change
  $: if (doc) refreshAll();

  function refreshAll() {
    const nodeId = $route.meta.lNodeTypeId;
    const lnClass = $route.meta.lnClass;
    if(mode === 'create') {
      isEditMode = true;
      isDirty = true;
    }
    logicalNodeType = loadLNodeType(mode, nodeId, lnClass);
    dataTypes = loadTypes(mode, nodeId, logicalNodeType.lnClass, Array.from(markedItemIds));
  }

  // Derived data
  $: dataObjects = logicalNodeType?.dataObjects ?? [];
  $: columns = getColumns(isEditMode);
  $: breadcrumbs = createBreadcrumbs($route, logicalNodeType);
  $: data = {
    refs: buildDOItems(dataObjects, markedItemIds, item => ({ canSelect: isEditMode, acceptDrop: (target: TBoardItemContext) => acceptDrop(item.name, target) })),
    dotypes: buildDOTypeItems(dataTypes?.dataObjectTypes, { canEdit: true }),
    datypes: buildDATypeItems(dataTypes?.dataAttributeTypes, { canEdit: true }),
    enumtypes: buildEnumTypeItems(dataTypes?.enumTypes, { canEdit: true })
  };

  // UI Helpers
  function acceptDrop(name: string, target: TBoardItemContext): boolean {
    if (!logicalNodeType) return false;
    const lnClassValue = logicalNodeType.lnClass;
    const targetDataObjectType = dataObjectService.findById(target.itemId);
    return dataObjectService.canReferenceToType(lnClassValue, name, targetDataObjectType?.cdc);
  }

  function handleToggleMark(itemId: string, marked: boolean) {
    marked ? markedItemIds.add(itemId) : markedItemIds.delete(itemId);
    dataTypes = loadTypes(mode, logicalNodeType.id, logicalNodeType.lnClass, Array.from(markedItemIds));
  }

  function handleItemDrop({ source, target }: { source: TBoardItemContext; target: TBoardItemContext }) {
    if (!source || !target) return;
    if (source.columnId === 'dotypes' && target.columnId === 'refs') {
      setDataObjectTypeReference(target.itemId, source.itemId);
    }
  }

  function setDataObjectTypeReference(dataObjectName: string, typeId: string) {
    if (!logicalNodeType) return;
    logicalNodeType = {
      ...logicalNodeType,
      dataObjects: logicalNodeType.dataObjects.map(doItem =>
        doItem.name === dataObjectName ? { ...doItem, type: typeId, metadata: { ...doItem.metadata, isConfigured: true } } : doItem
      )
    };
    isDirty = true;
  }

  function handleSaveChanges() {
    if (!logicalNodeType) return;
    const updateLNodeType: LNodeTypeDetails = {
      ...logicalNodeType,
      dataObjects: logicalNodeType.dataObjects.filter(doItem => doItem.metadata.isConfigured || doItem.metadata.isMandatory),
    };
    lNodeTypeService.saveLNodeType(updateLNodeType);
    isDirty = false;
    if( $route.path[0] === 'new') {
      navigateToView(logicalNodeType)
    }
  }

  function navigateToView(lNodeType: LNodeTypeDetails) {
    route.set({ path: ['view'], meta: { lNodeTypeId: lNodeType.id, lnClass: lNodeType.lnClass } });
  }

  async function handleUnsavedChanges() {
    if (isDirty) {
      const result = await openDialog(OscdConfirmDialog, {
        title: 'Unsaved Changes',
        message: 'You have unsaved changes. Do you want to save them?',
        confirmActionText: 'Save',
        cancelActionText: 'Discard',
      });
      if (result.type === 'confirm') {
        handleSaveChanges();
      } else {
        // Reset dirty state without saving
        refreshAll()
        isDirty = false;
      }
    }
  }

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

  async function handleBreadcrumbClick({index}) {
    if (isDirty) {
      await handleUnsavedChanges();
    }
    if (index === 0) route.set({ path: ['overview'] });
  }

  // ===== Dialog Handlers =====

  function openCreateDOTypeDialog() {
    openDialog(NewDataObjectType).then(result => {
      if (result.type === 'confirm') {
        openEditDOTypeDialog(result.data.id, result.data.cdc, 'create')
      }
    });
  }

  function openEditDOTypeDialog(typeId: string, cdc: string | null = null, mode: 'edit' | 'view' | 'create') {
    openDialog(DataTypeDialog, {
      typeId,
      cdc,
      mode
    })
  }

  function openEditDATypeDialog(typeId: string, mode: 'edit' | 'view' | 'create') {
    openDialog(DataAttributeDialog, {
      typeId: typeId,
      mode: mode,
    });
  }
</script>

<div class="oscd-details">
  <!-- START: Toolbar -->
  <div class="oscd-details-toolbar">
    <OscdBreadcrumbs activeIndex={1} {breadcrumbs} on:click={e => handleBreadcrumbClick(e.detail)} />

    <div class="oscd-details-toolbar-right">

      <OscdSwitch
        bind:checked={isEditMode}
        id="edit-mode-switch"
        label="Edit Mode"
        labelStyle="font-weight: bold; text-transform: uppercase; color: var(--mdc-theme-primary);"
      />

      <OscdButton
        disabled={!isDirty} callback={handleSaveChanges} variant="unelevated">
        SAVE CHANGES
      </OscdButton>
    </div>
  </div>
  <!-- END: Toolbar -->

  <div class="oscd-details-board">
    <TBoard
      {columns}
      {data}
      on:columnActionClick={e => handleActionClick(e.detail)}
      on:itemEdit={e => handleOnEdit(e.detail)}
      on:itemMarkChange={({detail: {itemId, marked}}) => handleToggleMark(itemId, marked)}
      on:itemDrop={e => handleItemDrop(e.detail)}
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
  }
</style>
