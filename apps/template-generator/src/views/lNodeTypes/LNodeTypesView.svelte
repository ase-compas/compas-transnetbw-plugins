<script lang="ts">
  // ===== Imports =====
  import { OscdButton, OscdConfirmDialog, OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import {
    type BasicType,
    DataTypeKind,
    doc,
    getDataTypeService,
    getLNodeTypeService,
    type IDataTypeService,
    type ILNodeTypeService,
    LogicalNodeTypeRow, type Mode,
    NewLNodeTypeDialog, pluginStateStore,
    type Route,
    route
  } from '@oscd-transnet-plugins/oscd-template-generator';
  import DataTable, { Body, Cell, Head, Label, Row, SortValue } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import IconButton from '@smui/icon-button';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  // ===== Store and Service Instances =====
  const lNodeTypeService: ILNodeTypeService = getLNodeTypeService();
  const dataTypeService: IDataTypeService = getDataTypeService();

  // ===== State =====
  let nodeSearchTerm = $state('');
  let sort: 'id' | 'lnClass' = $state('id');
  let sortDirection: Lowercase<keyof typeof SortValue> = $state('ascending');
  let items: BasicType[] = $state([]);
  let isLoading = false;

  // ===== Derived State =====
  let filteredAndSortedItems = $derived.by(() => {
    const searchTerm = nodeSearchTerm.toLowerCase();
    return items
      .filter((node) => node.id.toLowerCase().includes(searchTerm))
      .sort((a, b) => {
        const aVal = a[sort];
        const bVal = b[sort];
        return sortDirection === 'ascending'
          ? (aVal > bVal ? 1 : -1)
          : (aVal < bVal ? 1 : -1);
      });
  });

  // load data on doc change
  $effect(() => {
    if (pluginStateStore.pluginState.doc) {
      console.log("loading")
      loadItems();
    }
  });

  async function loadItems() {
    try {
      items = await lNodeTypeService.getAllTypes();
    } catch (e) {
      console.error('Error loading logical node types:', e);
    }
  }

  // ===== Handlers =====
  function handleDuplicate(lNodeTypeId: string) {
    try {
      lNodeTypeService.duplicateType(lNodeTypeId);
    } catch (e) {
      console.error(`Error duplicating LNodeType "${lNodeTypeId}": ${e}`);
    }
  }

  async function handleDelete(lNodeTypeId: string) {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Confirm Delete Logical Node Type',
      message: `Are you sure you want to delete the logical node type "${lNodeTypeId}"? This action cannot be undone.`,
      confirmActionText: 'Delete',
      cancelActionText: 'Cancel',
      color: 'red'
    });

    if (result.type !== 'confirm') return;

    try {
      await lNodeTypeService.deleteTypeById(lNodeTypeId);
      items = items.filter(item => item.id !== lNodeTypeId);
    } catch (e) {
      console.error(`Error deleting LNodeType "${lNodeTypeId}": ${e}`);
    }
  }

  function handleNodeClick(lNodeTypeId: string) {
    navigateToLNodeTypeDetail('view', lNodeTypeId);
  }

  async function openCreateDialog() {
    const result = await openDialog(NewLNodeTypeDialog);
    if (result.type === 'confirm') {
      await handleDialogCreate(result.data);
    }
  }

  async function handleDialogCreate({ id, lnClass, createFromDefault }) {
    if (createFromDefault) {
      try {
        await dataTypeService.createDefaultType(DataTypeKind.LNodeType, lnClass, id);
        setTimeout(() => navigateToLNodeTypeDetail('edit', id, lnClass), 50);
      } catch (e) {
        console.error(`Error creating LNodeType from default: ${e}`);
      }
    } else {
      navigateToLNodeTypeDetail('create', id, lnClass);
    }
  }

  async function navigateToLNodeTypeDetail(mode: Mode, lNodeTypeId: string, lnClass?: string) {
    route.set({ path: [mode], meta: { lNodeTypeId: lNodeTypeId, lnClass: lnClass } } as Route);
  }

</script>

<div class="logical-nodes-overview">
  <OscdButton callback={() => route.set({path: ["defaults"]})}>Default Types</OscdButton>

  <!-- Toolbar for search and add new template button -->
  <div class="overview-toolbar">
    <div class="toolbar-left">
      <OscdInput
        label="Search Logical Node Types"
        icon="search"
        variant="outlined"
        bind:value={nodeSearchTerm}
      />
    </div>
    <OscdButton variant="unelevated" callback={openCreateDialog}>
      ADD NEW LNODE TYPE
    </OscdButton>
  </div>

  <!-- DataTable for displaying logical nodes -->
  <div class="logical-nodes-list">
    <DataTable
      sortable
      bind:sort
      bind:sortDirection
      table$aria-label="Logical Node List"
      style="width: 100%;"
    >
      <Head>
        <Row>
          <Cell columnId="id" style="width: 100%; min-width: 150px; background: rgba(0, 0, 0, 0.1);">
            <Label><strong>Name</strong></Label>
            <IconButton class="material-icons">arrow_drop_up</IconButton>
          </Cell>
          <Cell columnId="lnClass" style="min-width: 200px; background: rgba(0, 0, 0, 0.1);">
            <Label><strong>Class</strong></Label>
            <IconButton class="material-icons">arrow_drop_up</IconButton>
          </Cell>
          <Cell columnId="references" sortable={false} style="background: rgba(0, 0, 0, 0.1);">
            <Label><strong>References</strong></Label>
          </Cell>
          <Cell sortable={false} style="background: rgba(0,0,0,0.1)"></Cell> <!-- Action buttons column -->
        </Row>
      </Head>

      <!-- Loading Progress Bar -->
      {#if isLoading}
        <tr>
          <td colspan="4" style="padding: 0;">
            <LinearProgress indeterminate aria-label="Data is being loaded..." style="width: 100%;" />
          </td>
        </tr>
      {/if}

      <Body>
      {#if filteredAndSortedItems.length === 0}
        <tr>
          <td colspan="4" style="text-align: center; color: #888; padding: 32px;">
            No logical node types found.
          </td>
        </tr>
      {/if}

      {#each filteredAndSortedItems as node (node.id)}
        <LogicalNodeTypeRow
          node={{name: node.id, class: node.instanceType, references: node.references}}
          onDuplicate={() => handleDuplicate(node.id)}
          onDelete={() => handleDelete(node.id)}
          onClick={() => handleNodeClick(node.id)}
        />
      {/each}
      </Body>
    </DataTable>
  </div>
</div>

<style>
  .overview-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .toolbar-left {
    max-width: 500px;
    flex: 1;
  }
</style>
