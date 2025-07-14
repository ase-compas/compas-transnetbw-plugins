<script lang="ts">
  // ===== Imports =====
  import { OscdInput, OscdButton } from '@oscd-transnet-plugins/oscd-component';
  import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import IconButton from '@smui/icon-button';
  import LogicalNodeTypeRow from './LogicalNodeTypeRow.svelte';
  import { createEventDispatcher } from 'svelte';
  import { templateService, type SimpleLogicalNodeTypeListItem } from "@oscd-transnet-plugins/oscd-template-generator";
  import { selectedLNodeTypeId, host } from "../../lib/stores";

  export let doc: XMLDocument;

  // ===== Store and Service Instances =====
  const dispatch = createEventDispatcher();

  // ===== State =====
  let nodeSearchTerm = '';
  let sort: 'id' | 'lnClass' = 'id';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  let items: SimpleLogicalNodeTypeListItem[] = [];
  let isLoading = false;


  $: init(doc)
  const init = (xmlDocument: XMLDocument) => {
    items = templateService.getAllLogicalNodeTypes(xmlDocument)
  }

  // ===== Derived Values =====

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
    templateService.duplicateLogicalNodeType(doc, $host, lNodeTypeId);
  };

  const handleDelete = (lNodeTypeId: string) => {
    templateService.deleteLogicalNodeType(doc, $host, lNodeTypeId);
  };

  const handleNodeClick = (lNodeTypeId: string) => {
    selectedLNodeTypeId.set(lNodeTypeId);
  };

  const handleAddNewTemplate = () => {
    console.log('Add New Template');
  };
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
    <OscdButton variant="unelevated" on:click={handleAddNewTemplate}>
      ADD NEW TEMPLATE
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
          <Cell sortable={false} style="background: rgba(0,0,0,0.1"></Cell> <!-- Action buttons column -->
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
            No logical nodes found.
          </td>
        </tr>
      {/if}

      {#each filteredAndSortedItems as node}
        <LogicalNodeTypeRow
          node={{name: node.id, class: node.lnClass, references: node.references}}
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
