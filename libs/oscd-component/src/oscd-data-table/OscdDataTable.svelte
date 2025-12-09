<DataTable
  table$aria-label={label}
  style="max-width: 100%; width: 100%;"
>
  <Head>
    <Row class="header-row">
      {#each columnDefs as col}
        <Cell onclick={() => col.sortable && sortColumnBy(col.field)} style={col.headerStyle}>
          <div class="custom-cell-container" style="min-width: {col.minWidth ?? 0}">
            <div class="cell-header">
              <span class="header-title">{col.headerName}</span>

              {#if col.sortable}
                {#if $sortColumn === col.field && $sortDirection !== null}
                  {#if $sortDirection === 'asc'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                         fill="currentColor">
                      <path d="M12 4l-8 8h16l-8-8z"></path>
                    </svg>
                  {:else if $sortDirection === 'desc'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                         fill="currentColor">
                      <path d="M12 20l8-8H4l8 8z"></path>
                    </svg>
                  {/if}
                {/if}
              {/if}
            </div>

            {#if col.filter}
              {#if col.filterType === 'text'}
                <input
                  type="text"
                  placeholder={`${searchInputLabel} ${col.headerName}`}
                  bind:value={filters[col.field]}
                  oninput={() => filterAndSortTable()}
                />
              {/if}
              {#if col.filterType === 'number'}
                <input
                  type="number"
                  placeholder={`${searchInputLabel} ${col.headerName}`}
                  bind:value={filters[col.field]}
                  oninput={() => filterAndSortTable()}
                />
              {/if}
            {/if}
          </div>
        </Cell>
      {/each}
    </Row>
  </Head>

  <Body>
  {#each $filteredData as row, index (index)}
    <Row>
      {#each columnDefs as col (col.field)}
        {#if col.field === 'actions'}
          <Cell>
            <div class="cell-actions">
              {#each rowActions as action}
                {#if action.iconComponent}
                  <OscdIconButton iconComponent={action.iconComponent} iconStyles={action.iconStyles} callback={() => action.callback(row)} disabled={action.disabled(row)} />
                {:else}
                  <OscdButton class="button" variant="raised" callback={() => action.callback(row)} disabled={action.disabled(row)}>
                    {#if action.icon === "add"}
                      <OscdAddIcon svgStyles="margin: unset" />
                    {:else if action.icon === "cancel"}
                      <OscdCancelIcon svgStyles="margin: unset" />
                    {:else if action.icon === "download"}
                      <OscdDownloadIcon svgStyles="margin: unset" />
                    {:else if action.icon === "find-in-page"}
                      <OscdFindInPageIcon svgStyles="margin: unset" />
                    {:else if action.icon === "remove"}
                      <OscdRemoveIcon svgStyles="margin: unset" />
                    {:else if action.icon === "edit"}
                      <OscdEditIcon svgStyles="margin: unset" />
                    {:else if action.icon === "delete"}
                      <OscdDeleteIcon svgStyles="margin: unset" />
                    {:else}
                      <OscdRefreshIcon svgStyles="margin: unset" />
                    {/if}
                  </OscdButton>
                {/if}
              {/each}
            </div>
          </Cell>
        {:else}
          <Cell numeric={col.numeric} style={col.cellStyle}>
            {#if col.cellRenderer}
              {@const CellRenderer = col.cellRenderer}
              <CellRenderer
                row={row}
                value={row[col.field]}
                col={col}
                {...(col.cellRendererProps ?? {})}
              />
            {:else if col.valueFormatter}
              {col.valueFormatter(row[col.field])}
            {:else}
              {row[col.field] ?? ''}
            {/if}
          </Cell>
        {/if}
      {/each}
    </Row>

  {/each}
  </Body>

  {#snippet progress()}
    <LinearProgress
      indeterminate
      bind:closed={loadingDone}
      aria-label="Data is being loaded..."

    />
  {/snippet}
</DataTable>

<script lang="ts">
  import { writable } from 'svelte/store';
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import type { RowAction } from './row-action.interface';
  import {
    OscdAddIcon,
    OscdCancelIcon,
    OscdDownloadIcon,
    OscdFindInPageIcon,
    OscdRefreshIcon,
    OscdRemoveIcon,
    OscdEditIcon,
    OscdDeleteIcon,
  } from "@oscd-transnet-plugins/oscd-icons";
  import { OscdButton, OscdIconButton } from '@oscd-transnet-plugins/oscd-component';
  import { v4 as uuidv4 } from 'uuid';

  interface Props {
    loadingDone?: boolean;
    label?: any;
    columnDefs?: any;
    rowData?: any;
    store: any;
    rowActions?: RowAction[];
    searchInputLabel?: string;
  }

  let {
    loadingDone = $bindable(true),
    label = uuidv4(),
    columnDefs = [],
    rowData = $bindable([]),
    store,
    rowActions = [],
    searchInputLabel = 'Search'
  }: Props = $props();

  let filters = $state({
    name: '',
    color: '',
    number: ''
  });

  let filteredData = writable<any[]>([]);
  let sortColumn = writable<string | null>(null);
  let sortDirection = writable<string | null>(null);  // Null bedeutet keine Sortierung

  store.store.subscribe(data => {
    rowData = [...data];
    filterAndSortTable();
  });

  function filterAndSortTable() {
    let filtered = rowData.filter(row => {
      return columnDefs.every(col => {
        const filterValue = filters[col.field];
        const fieldValue = col.filterValueGetter ? col.filterValueGetter(row) : row[col.field];
        if (!filterValue) {
          return true;
        }
        if (col.filterType === 'number') {
          return fieldValue == filterValue;
        }
        return fieldValue.toString().toLowerCase().includes(filterValue.toLowerCase());
      });
    });

    filtered = sortTable(filtered);
    filteredData.set(filtered);
  }

  function sortTable(data) {
    let columnToSort;
    let direction;

    sortColumn.subscribe(col => columnToSort = col);
    sortDirection.subscribe(dir => direction = dir);

    if (!columnToSort || !direction) {
      return data; // Keine Sortierung
    }

    return data.sort((a, b) => {
      let aValue = a[columnToSort];
      let bValue = b[columnToSort];

      if (aValue == null) aValue = '';
      if (bValue == null) bValue = '';

      if (direction === 'asc') {
        return aValue.toString().localeCompare(bValue.toString());
      } else {
        return bValue.toString().localeCompare(aValue.toString());
      }
    });
  }

  function sortColumnBy(colField) {
    sortColumn.update(currentCol => {
      if (currentCol === colField) {
        // Toggle through 'asc', 'desc', and null (no sort)
        sortDirection.update(currentDir => {
          if (currentDir === 'asc') return 'desc';
          if (currentDir === 'desc') return null;  // Third click, reset sort
          return 'asc'; // First click, set to ascending
        });
      } else {
        // New column, reset direction to ascending
        sortDirection.set('asc');
        return colField;
      }
      return colField;
    });

    filterAndSortTable();
  }

  // Initial data set
  filteredData.set(rowData);
</script>

<style lang="css">
  .custom-cell-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  /*
  .mdc-data-table {
    font-family: 'Roboto', sans-serif;
    border-collapse: collapse;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  thead {
    background-color: #f4f4f4;
    text-transform: uppercase;
    font-weight: bold;
    color: #333;
  }

  thead th {
    padding: 12px 15px;
    border-bottom: 2px solid #ddd;
    text-align: left;
    font-size: 0.85rem;
  }

  tbody tr {
    border-bottom: 1px solid #ddd;
    transition: background-color 0.3s ease;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  tbody td {
    padding: 12px 15px;
    text-align: left;
    font-size: 0.9rem;
    color: #555;
  }

  tbody td.numeric {
    text-align: right;
  }
  */

  input[type="text"], input[type="number"] {
    padding: 5px 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.9rem;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.2s ease;
  }

  input[type="text"]:focus, input[type="number"]:focus {
    border-color: #007bff;
    outline: none;
  }

  /*
  button {
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
  */

  .cell-actions {
    display: flex;
    height: 100%;
    justify-content: flex-end;
    gap: 0.5rem;
    align-items: center;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    /*
    table {
      font-size: 0.8rem;
    }
    */

    input[type="text"], input[type="number"] {
      font-size: 0.85rem;
    }

    /*
    button {
      font-size: 0.8rem;
    }
    */
  }

  svg {
    margin-left: 5px;
    width: 12px;
    height: 12px;
    fill: #333;
  }

  .header-title {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  /*
  .header-title svg {
    margin-left: 4px;
  }
  */

  .cell-header {
    display: flex;
    align-items: center;
  }
</style>
