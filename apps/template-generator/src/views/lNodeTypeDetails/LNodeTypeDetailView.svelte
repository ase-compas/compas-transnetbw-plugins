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
  import NewDataObjectType from "../../lib/components/dialogs/CreateDialogs/NewDataObjectType.svelte";
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  export let doc: XMLDocument;

  const service = getLNodeTypeService();
  const isCreateMode = $route.path[0] === 'new';

  const lNodeTypeId = $route.meta.lNodeTypeId;
  const lnClass = $route.meta.lnClass;

  let logicalNodeType: LNodeType | null;
  let referenceDataTypes: ReferencedTypes;
  let markedItemIds = new Set<string>();

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
    refs: buildDOItems(dataObjects, markedItemIds, {canSelect: isEditMode}),
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
    //TODO: Implement save logic
    isDirty = false;
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
