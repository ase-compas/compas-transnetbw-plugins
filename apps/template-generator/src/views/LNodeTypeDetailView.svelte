<script lang="ts">
  import { route } from '../lib/stores';
  import { OscdBreadcrumbs, OscdButton, OscdListBoard, OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import { templateService } from '@oscd-transnet-plugins/oscd-template-generator';
  import { onMount } from 'svelte';

  // ===== Parameters =====

  export let doc: XMLDocument;

  // ===== State =====
  let lNodeTypeId = $route.meta.lNodeTypeId;


  let logicalNodeType = templateService.getLogicalNodeTypeById(doc, lNodeTypeId);
  let isDirty = false; // Track if there are unsaved changes
  let isEditMode = false; // Track if the view is in edit mode


  // State: Tracks marked items per list
  let markedSets: Set<any>[] = [];

  onMount(() => {
    markedSets = [new Set(), new Set(), new Set(), new Set()]; // initialize marked sets for each list
  });


  let rawLogicalNode = $route.path[0] === 'view' ? templateService.getLogicalNodeTypeByIdWithChildren(doc, lNodeTypeId) : [];
  let rawDOTypes = templateService.getAllDOTypes(doc);
  let rawDATypes = templateService.getAllDATypes(doc);
  let rawEnumTypes = templateService.getAllEnumTypes(doc);

  let dataObjectItems = rawLogicalNode.children ?? [];

  $: filteredDataObjectItems = rawDOTypes.filter(doType => {
    const marked = markedSets[0];
    const references = marked?.size > 0
      ? Array.from(marked)
      : dataObjectItems;

    return references.some(item => item.type === doType.id);
  });

  $: filteredDATypes = rawDATypes.filter(dataType => {
    const marked = markedSets[1];
    const markedDataTypes = marked?.size > 0 ? Array.from(marked) : filteredDataObjectItems;

    // Collect all Enum-type references from selected DOType children
    const referencedIds = markedDataTypes
      .flatMap(dt => dt.children ?? [])
      .map(child => child.type);

    return referencedIds.includes(dataType.id);
  });

  $: filteredEnumTypes = rawEnumTypes.filter(enumType => {
    const marked = markedSets[1];
    const markedDataTypes = marked?.size > 0 ? Array.from(marked) : filteredDataObjectItems;

    // Collect all Enum-type references from selected DOType children
    const referencedEnumIds = markedDataTypes
      .flatMap(dt => dt.children ?? [])
      .filter(child => child.bType === 'Enum')
      .map(child => child.type);

    return referencedEnumIds.includes(enumType.id);
  });


  let items = ['Boolean', 'Integer'];

  $: boardSettings = [
    {
      id: 'ref-data-types',
      title: 'Reference Data Types',
      showSearch: false,
      items: dataObjectItems,
      canMark: true,
      canEdit: true,
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
      canMark: true,
      items: filteredDataObjectItems,
      getItemState: (item) => markedSets[1]?.has(item) ? 'marked' : 'default',
      getItemTitle: (item) => item.cdc,
      getItemSubtitle: (item) => item.id,
      getItemReferences: null
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
      getItemReferences: null
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

  let breadcrumbs = [
    { label: 'Logical Node Types', enabled: true },
    $route.path[0] === 'view' ? { label: 'Current-LN', secondaryLabel: logicalNodeType.lnClass, enabled: false } :
      { label: 'New Logical Node Type', secondaryLabel: $route.meta.lnClass, enabled: false }
  ];

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
    <OscdListBoard
      on:actionClick={(e) => console.info('Action Click:', e.detail)}
      on:itemEdit={(e) => console.info('Item Edit:', e.detail)}
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
