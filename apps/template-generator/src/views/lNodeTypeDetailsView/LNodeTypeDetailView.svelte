<script lang="ts">
  import { route } from '../../lib/stores';
  import { OscdBreadcrumbs, OscdButton, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import { onMount } from 'svelte';
  import { LNodeType, ReferencedTypes } from '../../lib/domain';
  import DataTypeDialog from '../../lib/components/dialogs/DataTypeDialog/DataTypeDialog.svelte';
  import DataAttributeDialog from '../../lib/components/dialogs/DataAttributeDialog/DataAttributeDialog.svelte';
  import TBoard from '../../lib/components/tboard/TBoard.svelte';
  import { getLNodeTypeService } from '../../lib/services';
  import { createBreadcrumbs, createNewLNodeType } from './utils';
  import { getColumns } from './columns.config';
  import { TColumnConfig, TData } from '../../lib/components/tboard/types';
  import { buildDATypeItems, buildDOItems, buildDOTypeItems, buildEnumTypeItems } from '../../lib/utils/itemBuilder';

  enum DialogType {
    DataObjectType,
    DataAttributeType,
    EnumType
  }

  export let doc: XMLDocument;

  const service = getLNodeTypeService();
  const isCreateMode = $route.path[0] === 'new';

  const lNodeTypeId = $route.meta.lNodeTypeId;
  const lnClass = $route.meta.lnClass;

  let logicalNodeType: LNodeType | null;
  let referenceDataTypes: ReferencedTypes;
  let markedItemIds = new Set<string>();

  let openDialogType: number | null = null;
  let dialogEditId: string | null = null;
  let isEditMode = false;
  let isDirty = false;

  onMount(init);

  function init() {
    if (isCreateMode) {
      logicalNodeType = createNewLNodeType(lNodeTypeId, lnClass);
    } else {
      logicalNodeType = service.findById(lNodeTypeId);
      referenceDataTypes = service.findReferencedTypesById(lNodeTypeId);
    }
  }

  $: if (doc) init();

  $: dataObjects = logicalNodeType?.dataObjects ?? [];

  let data: TData = {};
  $: data = {
    refs: buildDOItems(dataObjects, markedItemIds),
    dotypes: buildDOTypeItems(referenceDataTypes?.dataObjectTypes, { canEdit: true }),
    datypes: buildDATypeItems(referenceDataTypes?.dataAttributeTypes, { canEdit: true }),
    enumtypes: buildEnumTypeItems(referenceDataTypes?.enumTypes, { canEdit: true })
  };

  let columns: TColumnConfig[] = [];
  $: columns = getColumns(isEditMode);
  $: breadcrumbs = createBreadcrumbs($route, logicalNodeType);

  function handleToggleMark(itemId: string, marked: boolean) {
    marked ? markedItemIds.add(itemId) : markedItemIds.delete(itemId);
    const children = Array.from(markedItemIds);
    referenceDataTypes = service.findReferencedTypesById(lNodeTypeId, children);
  }

  function handleSaveChanges() {
    console.info('TODO: Save logic here');
    isDirty = false;
  }

  function handleActionClick({ columnId }) {
    if (columnId === 'dotypes') {
      alert('New DO Type');
      dialogEditId = null; // Reset dialog ID for new creation
    } else if (columnId === 'datypes') {
      alert('New DA Type');
      dialogEditId = null; // Reset dialog ID for new creation
    } else if (columnId === 'enumtypes') {
      alert('New ENUM TYPE');
    }
  }

  function handleOnEdit({ columnId, itemId }) {
    if (columnId === 'dotypes') {
      openDialogType = DialogType.DataObjectType;
    } else if (columnId === 'datypes') {
      openDialogType = DialogType.DataAttributeType;
    } else if (columnId === 'enumtypes') {
      openDialogType = DialogType.EnumType;
    }
    dialogEditId = itemId;
  }

  function handleBreadcrumbClick(event) {
    const { index } = event.detail;
    if (index === 0) route.set({ path: ['overview'] });
  }
</script>

<div class="oscd-details">

  <DataTypeDialog
    open={openDialogType === DialogType.DataObjectType}
    typeId={dialogEditId}
    isEditMode={isEditMode}
    on:confirm={(e) => {
      console.info('Data Object Type Dialog Confirmed:', e.detail);
      openDialogType = null; // Close dialog
      isDirty = true; // Mark as dirty
    }}
    on:cancel={(e) => {
      console.info('Data Object Type Dialog Cancelled');
      openDialogType = null; // Close dialog
    }}
  />

  <DataAttributeDialog
    open={openDialogType === DialogType.DataAttributeType}
    typeId={dialogEditId}
    isEditMode={isEditMode}
    on:confirm={(e) => {
      console.info('Data Object Type Dialog Confirmed:', e.detail);
      openDialogType = null; // Close dialog
      isDirty = true; // Mark as dirty
    }}
    on:cancel={(e) => {
      console.info('Data Object Type Dialog Cancelled');
      openDialogType = null; // Close dialog
    }}
  />


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
        disabled={!isDirty} on:click={handleSaveChanges} variant="unelevated">
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
