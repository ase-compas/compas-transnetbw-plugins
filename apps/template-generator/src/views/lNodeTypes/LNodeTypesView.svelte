<script lang="ts">
  // ===== Imports =====
  import { OscdButton, OscdFilterTab } from '@oscd-transnet-plugins/oscd-component';
  import {
    type BasicType,
    DataTypeKind,
    getDataTypeService,
    getLNodeTypeService,
    handleDeleteTypeWorkflow,
    handleRenameTypeWorkflow,
    type IDataTypeService,
    type ILNodeTypeService,
    LogicalNodeTypeRow,
    type Mode,
    NewLNodeTypeDialog,
    pluginStore,
    type Route,
    route
  } from '@oscd-transnet-plugins/oscd-template-generator';
  import DataTable, { Body, Cell, Head, Label, Row, SortValue } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import IconButton from '@smui/icon-button';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { onMount } from 'svelte';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import type { FilterDefinition } from '../../../../../libs/oscd-component/src/oscd-filter-builder/types';
  import { lnClassDescriptions } from '../../../../../libs/oscd-template-generator/src/lib/data/lnClassDescriptions';

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
      .filter(node => {
        // if a filter value is selected, only show nodes of that class
        const classFilter = filters.find(f => f.key === 'class');
        if (classFilter?.value) {
          return node.instanceType === classFilter.value;
        }
        return true;
      })
      .filter(node =>
        node.id.toLowerCase().includes(searchTerm) ||
        (node.instanceType?.toLowerCase().includes(searchTerm))
      )
      .sort((a, b) => {
        const aVal = a[sort];
        const bVal = b[sort];
        return sortDirection === 'ascending'
          ? (aVal > bVal ? 1 : -1)
          : (aVal < bVal ? 1 : -1);
      });
  });

  let filters: FilterDefinition[] = $state([
      {
        key: 'class',
        type: 'select',
        label: 'LnClass',
        options: lnClassDescriptions.map(c => ({ value: c.lnClass, label: c.lnClass }))
      }
  ]);

  onMount(() => {
    const unsubscribe = pluginStore.updates.subscribe(() => {
      loadItems();
    });

    return () => unsubscribe();
  })

  async function loadItems() {
    try {
      items = await lNodeTypeService.getAllTypes();
    } catch (e) {
      console.error('Error loading logical node types:', e);
    }
  }

  // ===== Handlers =====
  async function handleDuplicate(lNodeTypeId: string) {
    try {
      await lNodeTypeService.duplicateType(lNodeTypeId);

      toastService.success(
        "Duplicated",
        `Logical Node Type "${lNodeTypeId}" was duplicated successfully.`
      );
    } catch (e) {
      console.error(`Error duplicating LNodeType "${lNodeTypeId}": ${e}`);

      toastService.error(
        "Duplicate Failed",
        `Could not duplicate Logical Node Type "${lNodeTypeId}".`
      );
    }
  }

  async function handleDelete(lNodeTypeId: string) {
    const success = await handleDeleteTypeWorkflow(DataTypeKind.LNodeType, lNodeTypeId);
    if (!success) return;
    items = items.filter(item => item.id !== lNodeTypeId);
  }

  async function handleRename(lNodeTypeId: string) {
    await handleRenameTypeWorkflow(DataTypeKind.LNodeType, lNodeTypeId);
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
        setTimeout(() => navigateToLNodeTypeDetail('edit', id, lnClass), 300);
      } catch (e) {
        console.error(`Error creating LNodeType from default: ${e}`);
      }
    } else {
      navigateToLNodeTypeDetail('create', id, lnClass);
    }
  }

  function navigateToLNodeTypeDetail(mode: Mode, lNodeTypeId: string, lnClass?: string) {
    route.set({ path: [mode], meta: { lNodeTypeId: lNodeTypeId, lnClass: lnClass } } as Route);
  }

</script>

<div class="logical-nodes-overview">
  <OscdButton callback={() => route.set({path: ["defaults"]})}>Default Types</OscdButton>

  <!-- Toolbar for search and add new template button -->
  <div class="overview-toolbar">
    <div class="toolbar-left">
      <OscdFilterTab
        searchLabel="Search Logical Node Types"
        bind:searchText={nodeSearchTerm}
        bind:filters
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
            <Label><strong>LnClass</strong></Label>
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
          onRename={() => handleRename(node.id)}
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
    align-items: end;
    margin-bottom: 16px;
  }

  .toolbar-left {
    max-width: 500px;
    flex: 1;
  }
</style>
