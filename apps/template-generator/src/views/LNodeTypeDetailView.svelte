<script lang="ts">
  import { Route, route } from '../lib/stores';
  import { OscdBreadcrumbs, OscdButton, OscdListBoard, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import { onMount } from 'svelte';
  import { getLNodeTypeService, LNodeTypeService } from '../lib/services';
  import { LNodeType, ReferencedTypes } from '../lib/domain';
  import { filterDATypes, filterDOTypes, filterEnumTypes, getReferences } from '../lib/utils/typeFiltering';
  import DataTypeDialog from '../lib/components/dialogs/DataTypeDialog.svelte';
  import DataAttributeDialog from '../lib/components/dialogs/DataAttributeDialog.svelte';

  enum DialogType {
    DataObjectType,
    DataAttributeType,
    EnumType
  }

  // ===== Parameters =====

  export let doc: XMLDocument;

  const lNodeTypeService: LNodeTypeService = getLNodeTypeService();

  // ===== State =====

  let lNodeTypeId: string;
  let logicalNodeType: LNodeType | null = null
  let referenceDataTypes: ReferencedTypes = {
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: []
  };

  let isDirty = false; // Track if there are unsaved changes
  let isEditMode = false; // Track if the view is in edit mode
  let isCreateMode = false; // Track if the view is in create mode
  let markedSets: Set<any>[] = []; // State: Tracks marked items per list
  // Dialog vars
  let openDialogType: DialogType | null = null; // Track which dialog is open
  let dialogEditId: string | null = null; // Track the ID of the item being edited in the dialog

  onMount(() => {
    lNodeTypeId = $route.meta.lNodeTypeId;
    if(isCreateMode){
        logicalNodeType = createNewLNodeType(lNodeTypeId, $route.meta.lnClass);
        isEditMode = true;
    } else {
      logicalNodeType = lNodeTypeService.findById(lNodeTypeId);
      referenceDataTypes = lNodeTypeService.findReferencedTypesById(lNodeTypeId);
    }
    // Initialize marked sets for each list
    markedSets = [new Set(), new Set(), new Set(), new Set()];
  });


  // Derived data
  $: isCreateMode = $route.path[0] === 'new';

  $: dataObjects = logicalNodeType?.dataObjects ?? [];

  $: selectedDOs = getReferences(markedSets[0], dataObjects ?? []);
  $: filteredDOTypes = filterDOTypes(referenceDataTypes.dataObjectTypes, selectedDOs);

  $: selectedDOTypes = getReferences(markedSets[1], filteredDOTypes);
  $: filteredDATypes = filterDATypes(referenceDataTypes.dataAttributeTypes, selectedDOTypes);
  $: filteredEnumTypes = filterEnumTypes(referenceDataTypes.enumTypes, selectedDOTypes);


  $: breadcrumbs = createBreadcrumbs($route, logicalNodeType);

    $: boardSettings = [
      {
        id: 'ref-data-types',
        title: 'Reference Data Types',
        showSearch: false,
        items: dataObjects,
        canMark: true,
        canEdit: false,
        getItemState: (item) => markedSets[0]?.has(item) ? 'marked' : 'default',
        getItemTitle: (item) => item.name,
        getItemSubtitle: (item) => item.type,
        getItemReferences: (item) => null
      },
      {
        id: 'object-data-types',
        title: 'Object Data Types',
        actionText: 'ADD NEW',
        showSearch: true,
        canEdit: true,
        canMark: false,
        items: filteredDOTypes,
        getItemState: (item) => markedSets[1]?.has(item) ? 'marked' : 'default',
        getItemTitle: (item) => item.cdc,
        getItemSubtitle: (item) => item.id,
        getItemReferences: (item) => item.dataAttributes.length
      },
      {
        id: 'attribute-data-types',
        title: 'Attribute Data Types',
        actionText: 'ADD NEW',
        showSearch: true,
        canEdit: true,
        items: filteredDATypes,
        getItemState: (item) => markedSets[2]?.has(item) ? 'marked' : 'default',
        getItemTitle: (item) => item.id,
        getItemSubtitle: null,
        getItemReferences: (item) => item.basicDataAttributes.length
      },
      {
        id: 'enum-types',
        title: 'Enum Types',
        actionText: 'ADD NEW',
        showSearch: true,
        canEdit: true,
        items: filteredEnumTypes,
        getItemState: (item) => markedSets[3]?.has(item) ? 'marked' : 'default',
        getItemTitle: (item) => item.id,
        getItemSubtitle: null,
        getItemReferences: (item) => item.values.length
      }
    ];

  function createNewLNodeType(id: string, lnClass: string): LNodeType {
    return {
      id: id,
      lnClass: lnClass,
      desc: '',
      dataObjects: [],
    };
  }

  function createBreadcrumbs(route: Route, lNodeType: LNodeType) {
    const base = { label: 'Logical Node Types', enabled: true };
    const isView = route.path[0] === 'view';

    const detail = isView
      ? { label: 'Current-LN', secondaryLabel: lNodeType?.lnClass ?? '', enabled: false }
      : { label: 'New Logical Node Type', secondaryLabel: route.meta?.lnClass ?? '', enabled: false };

    return [base, detail];
  }
  // ===== Handlers =====

  const handleBreadcrumbClick = (event) => {
    const { index } = event.detail;
    if (index === 0) {
      route.set({
        path: ['overview'],
      })
    } else {
      // Handle other breadcrumb clicks if needed
    }
  };

  const handleSaveChanges = () => {
    console.info('TODO: Implement save changes logic');
    if (isDirty) {
      isDirty = false; // Reset dirty state after saving
    }
  };

  const handleOnMark = ({ listIndex, listId, item, itemIndex }) => {
    const updatedSet = new Set(markedSets[listIndex]); // clone to preserve immutability
    if (updatedSet.has(item)) {
      updatedSet.delete(item);
    } else {
      updatedSet.add(item);
    }

    // Re-assign the entire array to trigger reactivity
    markedSets = [
      ...markedSets.slice(0, listIndex),
      updatedSet,
      ...markedSets.slice(listIndex + 1)
    ];
  };

  function handleActionClick({listId}) {
    if(listId === 'ref-data-types') {
      // nope
    } else if (listId === 'object-data-types') {
      openDialogType = DialogType.DataObjectType;
    } else if (listId === 'attribute-data-types') {
      openDialogType = DialogType.DataAttributeType;
    } else if (listId === 'enum-types') {
      openDialogType = DialogType.EnumType;
    }
  }

  function handleOnEdit({listIndex, listId, item, itemIndex}) {
    const id = item.id;
    if (listId === 'object-data-types') {
      openDialog(DialogType.DataObjectType, id);
    } else if (listId === 'attribute-data-types') {
      openDialog(DialogType.DataAttributeType, id);
    } else if (listId === 'enum-types') {
      //openDialogType = DialogType.EnumType;
      //TODO: To implement
    }
  }

  function openDialog(dialogType: DialogType, id: string) {
    dialogEditId = id;
    openDialogType = dialogType;
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
    <OscdListBoard
      on:actionClick={(e) => handleActionClick(e.detail)}
      on:itemEdit={(e) => handleOnEdit(e.detail)}
      on:itemMark={(e) => handleOnMark(e.detail)}
      settings={boardSettings}
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
