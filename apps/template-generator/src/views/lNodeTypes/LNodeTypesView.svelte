<script lang="ts">
  // ===== Imports =====
  import { OscdInput, OscdButton } from '@oscd-transnet-plugins/oscd-component';
  import NewLNodeTypeDialog from '../../lib/components/dialogs/CreateDialogs/NewLNodeTypeDialog.svelte';
  import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import IconButton from '@smui/icon-button';
  import LogicalNodeTypeRow from '../../lib/components/tables/LogicalNodeTypeRow.svelte';
  import { createEventDispatcher } from 'svelte';
  import { getLNodeTypeService } from '../../lib/services';
  import { type Route, route } from "../../lib/stores";
  import { LNodeType } from '../../lib/domain';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  export let doc: XMLDocument;

  // ===== Store and Service Instances =====
  const dispatch = createEventDispatcher();
  const lNodeTypeService = getLNodeTypeService();

  // ===== State =====
  let nodeSearchTerm = '';
  let sort: 'id' | 'lnClass' = 'id';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  let items: LNodeType[] = [];
  let isLoading = false;

  $: if(doc) {
    items = lNodeTypeService.findAll();
  }

  // ===== Derived Values =====

  let filteredAndSortedItems: LNodeType[] = [];
  $: filteredAndSortedItems = items
    .filter(node => node.id.toLowerCase().includes(nodeSearchTerm.toLowerCase()))
    .sort((a, b) => {
      const aVal = a[sort];
      const bVal = b[sort];
      return sortDirection === 'ascending'
        ? (aVal > bVal ? 1 : -1)
        : (aVal < bVal ? 1 : -1);
    });

  // ===== Handlers =====
  const handleDuplicate = (lNodeTypeId: string) => {
    lNodeTypeService.duplicate(lNodeTypeId);
  };

  const handleDelete = (lNodeTypeId: string) => {
    lNodeTypeService.delete(lNodeTypeId);
  };

  const handleNodeClick = (lNodeTypeId: string) => {
    route.set({
      path: ['view'],
      meta: {
       lNodeTypeId: lNodeTypeId
      }
    } as Route);
  };

  function openCreateDialog() {
    openDialog(NewLNodeTypeDialog).then(result => {
      if (result.type === 'confirm') {
        handleDialogCreate(result.data);
      }
    });
  }

  function handleDialogCreate({id, lnClass}) {
    route.set({
      path: ['new'],
      meta: {
        lNodeTypeId: id,
        lnClass: lnClass
      }
    } as Route)
  }
</script>

<div class="logical-nodes-overview">

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
          node={{name: node.id, class: node.lnClass, references: node.dataObjects.length}}
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
