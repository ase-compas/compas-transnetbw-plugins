<script lang="ts">
  import { route } from '../../lib/stores';
  import {OscdBreadcrumbs, OscdButton, OscdConfirmDialog, OscdSwitch} from '@oscd-transnet-plugins/oscd-component';
  import { onMount } from 'svelte';
  import {DO, LNodeType, DataTypes} from '../../lib/domain';
  import DataTypeDialog from '../../lib/components/dialogs/DataTypeDialog/DataTypeDialog.svelte';
  import DataAttributeDialog from '../../lib/components/dialogs/DataAttributeDialog/DataAttributeDialog.svelte';
  import TBoard from '../../lib/components/tboard/TBoard.svelte';
  import {getDataObjectTypeService, getLNodeTypeService} from '../../lib/services';
  import { createBreadcrumbs, createNewLNodeType } from './lNodeTypeDetailsUtils';
  import { getColumns } from './columns.config';
  import {TBoardItemContext, TColumnConfig, TData, TItem} from '../../lib/components/tboard/types';
  import { buildDATypeItems, buildDOItems, buildDOTypeItems, buildEnumTypeItems } from '../../lib/utils/itemBuilder';
  import NewDataObjectType from "../../lib/components/dialogs/CreateDialogs/NewDataObjectType.svelte";
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import {initDataLoaders, loadCompatibleTypesById, loadLogicalNodeType, loadReferencedTypesById} from "./dataLoader";
  import {OscdDefaultTypeService} from "../../lib/services/oscdDefaultType.service";

  export let doc: XMLDocument;

  const lNodeTypeService = getLNodeTypeService();
  const dataObjectService = getDataObjectTypeService();
  const oscdDefaultTypeService = new OscdDefaultTypeService();

  $: isCreateMode = $route.path[0] === 'new';

  const lNodeTypeId = $route.meta.lNodeTypeId;
  const lnClass = $route.meta.lnClass;

  let logicalNodeType: LNodeType | null;
  let dataTypes: DataTypes;
  $: dataTypes
  let markedItemIds = new Set<string>();

  $: isEditMode = false;
  let isDirty = false;

  // ===== Lifecycle =====
  onMount(init);

  function init() {
    initDataLoaders();
    refreshLogicalNodeType();
  }

  function refreshLogicalNodeType() {
    if(isCreateMode) {
      logicalNodeType = createNewLNodeType(lNodeTypeId, lnClass, oscdDefaultTypeService.getDefaultLogicalNodeType(lnClass));
      isEditMode = true;
    } else {
      logicalNodeType = loadLogicalNodeType(lNodeTypeId);
    }
  }

  function refreshDataTypes() {
    if (!logicalNodeType) return;

    dataTypes = isEditMode
    ? loadCompatibleTypesById(logicalNodeType, markedItemIds)
    : loadReferencedTypesById(logicalNodeType.id, markedItemIds);
  }

  $: if (doc) init();
  $: isEditMode, refreshDataTypes();
  $: dataObjects = logicalNodeType?.dataObjects ?? [];
  $: if(!isEditMode) {
    handleUnsavedChanges();
  }

  let data: TData = {};
  $: data = {
    refs: isEditMode ? dataObjects.map(mapDOItem) : buildDOItems(dataObjects, markedItemIds, {canSelect: isEditMode}),
    dotypes: buildDOTypeItems(dataTypes?.dataObjectTypes, { canEdit: true }),
    datypes: buildDATypeItems(dataTypes?.dataAttributeTypes, { canEdit: true }),
    enumtypes: buildEnumTypeItems(dataTypes?.enumTypes, { canEdit: true })
  };

  let columns: TColumnConfig[] = [];
  $: columns = getColumns(isEditMode);
  $: breadcrumbs = createBreadcrumbs($route, logicalNodeType);

  // ===== UI Helpers =====
  function mapDOItem(dataObject: DO): TItem {
    return {
      id: dataObject.name,
      title: dataObject.name,
      subtitle: dataObject.type,

      marked: markedItemIds.has(dataObject.name),
      selected: false,
      canEdit: false,
      canMark: true,
      canSelect: isEditMode,

      acceptDrop: (target: TItem) => acceptDrop(dataObject.name, target)
    };
  }

  function acceptDrop(name, target: TItem): boolean {
    const lnClassValue = logicalNodeType.lnClass;
    const targetDataObjectType = dataObjectService.findById(target.id);
    return dataObjectService.canReferenceToType(lnClassValue, name, targetDataObjectType.cdc)
  }

  function handleToggleMark(itemId: string, marked: boolean) {
    marked ? markedItemIds.add(itemId) : markedItemIds.delete(itemId);
    refreshDataTypes();
  }

  function handleItemDrop({ source, target }: { source: TBoardItemContext; target: TBoardItemContext }) {
    if (!source || !target) return;

    if (source.columnId === 'dotypes' && target.columnId === 'refs') {
      setDataObjectTypeReference(target.itemId, source.itemId)
    }
  }

  function setDataObjectTypeReference(dataObjectName: string, typeId: string) {
    if (!logicalNodeType) return;

    logicalNodeType = {
      ...logicalNodeType,
      dataObjects: logicalNodeType.dataObjects.map(doItem =>
        doItem.name === dataObjectName ? { ...doItem, type: typeId } : doItem
      )
    };
    isDirty = true;
  }

  function handleSaveChanges() {
    lNodeTypeService.createOrUpdate(logicalNodeType)
    isDirty = false;
    isCreateMode = false;
  }

  function handleUnsavedChanges() {
    if (isDirty) {
      openDialog(OscdConfirmDialog, {
        title: 'Unsaved Changes',
        message: 'You have unsaved changes. Do you want to save them?',
        confirmActionText: 'Save',
        cancelActionText: 'Discard',
      }).then(result => {
        if (result.type === 'confirm') {
          handleSaveChanges();
        } else {
          // Reset dirty state without saving
          refreshLogicalNodeType();
          refreshDataTypes();
          isDirty = false;
        }
      });
    }
  }

  function handleActionClick({ columnId }) {
    if (columnId === 'dotypes') {
      openCreateDOTypeDialog()
    } else if (columnId === 'datypes') {
      alert('New DA Type');
    } else if (columnId === 'enumtypes') {
      alert('New ENUM TYPE');
    }
  }

  function handleOnEdit({ columnId, itemId }) {
    if (columnId === 'dotypes') {
      openEditDOTypeDialog(itemId, isEditMode ? 'edit' : 'view');
    } else if (columnId === 'datypes') {
      openEditDATypeDialog(itemId)
    } else if (columnId === 'enumtypes') {
    }
  }

  function handleBreadcrumbClick(event) {
    const { index } = event.detail;
    if (index === 0) route.set({ path: ['overview'] });
  }

  // ===== Dialog Handlers =====

  function openCreateDOTypeDialog() {
    openDialog(NewDataObjectType).then(result => {
      if (result.type === 'confirm') {
        openEditDOTypeDialog(result.data.id, 'create')
      }
    });
  }

  function openEditDOTypeDialog(typeId, mode) {
    openDialog(DataTypeDialog, {
      typeId: typeId,
      mode
    })
  }

  function openEditDATypeDialog(typeId) {
    openDialog(DataAttributeDialog, {
      typeId: typeId,
      isEditMode: isEditMode,
    });
  }
</script>

<div class="oscd-details">
  <!-- START: Toolbar -->
  <div class="oscd-details-toolbar">
    <OscdBreadcrumbs activeIndex={1} {breadcrumbs} on:click={handleBreadcrumbClick} />

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
