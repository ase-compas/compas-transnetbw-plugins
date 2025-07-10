<script lang="ts">
  // ===== Imports =====
  import { OscdInput, OscdButton, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import IconButton from '@smui/icon-button';
  import LogicalNodeTypeRow from './LogicalNodeTypeRow.svelte';
  import { createEventDispatcher } from 'svelte';


  // ===== Types =====
  type LogicalNode = {
    name: string;
    class: string;
    references: number;
  };

  const dispatch = createEventDispatcher();

  // ===== State =====
  let nodeSearchTerm = '';
  let sort: 'name' | 'class' | 'references' = 'name'; // Sort by column with id 'name' by default else by 'sort' variable
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  let items: LogicalNode[] = [
    { name: 'Node Type 1', class: 'AXBE', references: 500 },
    { name: 'The abb', class: 'ZXBE', references: 2 },
    { name: 'alsf', class: 'YXBE', references: 4 },
    { name: 'was', class: 'AXBE', references: 100 },
    { name: 'Node Type 1', class: 'XBE', references: 3 },
    { name: 'Node Type 1', class: 'AXBE', references: 30 }
  ];
  let isLoading: boolean = false;

  // ===== Derived Values =====
  $: filteredAndSortedItems = [...items]
    .filter(node =>
      node.name.toLowerCase().includes(nodeSearchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sort];
      const bVal = b[sort];
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDirection === 'ascending'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      return sortDirection === 'ascending'
        ? Number(aVal) - Number(bVal)
        : Number(bVal) - Number(aVal);
    });


  // ===== Handlers =====
  const handleDuplicate = (node: LogicalNode) => {
    console.log('Duplicate Node', node);
  }

  const handleDelete = (node: LogicalNode) => {
    console.log('Delete Node', node);
  }

  const handleClickNode = (node: LogicalNode) => {
    console.log('Handle Click Node', node);
    dispatch('selectNode', node);

  }

  const handleAddNewTemplate = () => {
    console.log('Add New Template');
    // Logic to add a new template can be implemented here
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

    <OscdButton variant="unelevated" callback={handleAddNewTemplate}>
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
          <Cell columnId="name" style="width: 100%; min-width: 150px; background-color: rgba(0,0,0,0.1);">
            <Label><strong>Name</strong></Label>
            <IconButton class="material-icons test">arrow_drop_down</IconButton>
          </Cell>
          <Cell columnId="class" style="min-width: 200px; background-color: rgba(0,0,0,0.1);">
            <Label><strong>Class</strong></Label>
            <IconButton class="material-icons">arrow_drop_down</IconButton>
          </Cell>
          <Cell numeric columnId="references" sortable={false} style="background-color: rgba(0,0,0,0.1);">
            <Label><strong>References</strong></Label>
          </Cell>

          <!-- For action columns, we don't need a label, just an icon. -->
          <Cell sortable={false} style="background-color: rgba(0,0,0,0.1); min-width: 100px"></Cell>
        </Row>
      </Head>

      <!-- Loading Progress Bar -->
      {#if isLoading}
        <tr>
          <td colspan="4" style="padding:0;">
            <LinearProgress
              indeterminate
              aria-label="Data is being loaded..."
              style="width: 100%;"
            />
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
          {node}
          onDuplicate={handleDuplicate}
          onDelete={handleDelete}
          onClick={handleClickNode}
        />
      {/each}
      </Body>
    </DataTable>
  </div>
</div>

<style>
  .logical-nodes-overview {
    margin-top: 1rem;
  }

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
