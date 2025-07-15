<script lang="ts">
  import { selectedLNodeTypeId } from '../../lib/stores';
  import { OscdBreadcrumbs, OscdButton, OscdSwitch, OscdCardList } from '@oscd-transnet-plugins/oscd-component';
  import { templateService } from '@oscd-transnet-plugins/oscd-template-generator';

  // ===== Parameters =====

  export let doc: XMLDocument;

  // ===== State =====

  let logicalNodeType = templateService.getLogicalNodeTypeById(doc, $selectedLNodeTypeId);
  let isDirty = false; // Track if there are unsaved changes
  let isEditMode = false; // Track if the view is in edit mode

  let items = [
    'DataType1',
    'DataType2',
    'DataType3',
    'DataType4',
    'DataType5'
  ]; // Example items, replace with actual data types

  let breadcrumbs = [
    { label: 'Logical Nodes Types', enabled: true },
    { label: 'Current-LN', secondaryLabel: logicalNodeType.lnClass, enabled: false }
  ];

  // ===== Handlers =====

  const handleBreadcrumbClick = (event) => {
    const { index } = event.detail;
    if (index === 0) {
      selectedLNodeTypeId.set(null);
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

</script>

<div class="oscd-details">

  <!-- START: Toolbar -->
  <div class="oscd-details-toolbar">
    <OscdBreadcrumbs {breadcrumbs} activeIndex={1} on:click={handleBreadcrumbClick} />

    <div class="oscd-details-toolbar-right">

      <OscdSwitch
        label="Edit Mode"
        bind:checked={isEditMode}
        id="edit-mode-switch"
        labelStyle="font-weight: bold; text-transform: uppercase; color: var(--mdc-theme-primary);"
      />


      <OscdButton
        variant="unelevated" on:click={handleSaveChanges} disabled={!isDirty}>
        SAVE CHANGES
      </OscdButton>
    </div>
  </div>
  <!-- END: Toolbar -->

  <!-- START: Board -->
  <div class="oscd-details-board">
    <OscdCardList
      title="Reference Data Types"
      showSearch={true}
      actionText="ADD NEW"
    >

      <div slot="default" let:searchQuery>
        {#each items.filter(i => i.toLowerCase().includes(searchQuery.toLowerCase())) as item}
          <div class="p-3 bg-gray-100 rounded shadow">{item}</div>
        {/each}
      </div>

    </OscdCardList>
    <OscdCardList
      title="Reference Data Types"
      showSearch={true}
      actionText="ADD NEW"
    >

      <div slot="default" let:searchQuery>
        {#each items.filter(i => i.toLowerCase().includes(searchQuery.toLowerCase())) as item}
          <div class="p-3 bg-gray-100 rounded shadow">{item}</div>
        {/each}
      </div>

    </OscdCardList>
    <OscdCardList
      title="Reference Data Types"
      showSearch={true}
      actionText="ADD NEW"
    >

      <div slot="default" let:searchQuery>
        {#each items.filter(i => i.toLowerCase().includes(searchQuery.toLowerCase())) as item}
          <div class="p-3 bg-gray-100 rounded shadow">{item}</div>
        {/each}
      </div>

    </OscdCardList>
    <OscdCardList
      title="Reference Data Types"
      showSearch={true}
      actionText="ADD NEW"
    >

      <div slot="default" let:searchQuery>
        {#each items.filter(i => i.toLowerCase().includes(searchQuery.toLowerCase())) as item}
          <div class="p-3 bg-gray-100 rounded shadow">{item}</div>
        {/each}
      </div>

    </OscdCardList>

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
