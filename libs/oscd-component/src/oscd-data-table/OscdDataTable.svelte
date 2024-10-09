<DataTable table$aria-label="People list" style="max-width: 100%; width: 100%;">
  <Head>
    <Row>
      {#each columnDefs as col}
        <Cell>
          <div class="custom-cell-container">
          <span>{col.headerName}</span>
          {#if col.filter}
            {#if col.filterType === 'text'}
              <input
                type="text"
                placeholder={`Search ${col.headerName}`}
                bind:value={filters[col.field]}
                on:input={() => filterTable()}
              />
            {/if}
            {#if col.filterType === 'number'}
              <input
                type="number"
                placeholder={`Search ${col.headerName}`}
                bind:value={filters[col.field]}
                on:input={() => filterTable()}
              />
            {/if}
          {/if}
          </div>
        </Cell>
      {/each}
    </Row>
  </Head>
  <Body>
  {#each $filteredData as row}
    <Row>
      {#each columnDefs as col}
        <Cell numeric={col.numeric}>
          {row[col.field]}
        </Cell>
      {/each}
    </Row>
  {/each}
  </Body>
</DataTable>

<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import { writable } from 'svelte/store';

  const columnDefs = [
    { headerName: 'Name', field: 'name', numeric: false, filter: false, filterType: 'text' },
    { headerName: 'Favorite Color', field: 'color', numeric: false, filter: true, filterType: 'text' },
    { headerName: 'Favorite Number', field: 'number', numeric: true, filter: true, filterType: 'number' }
  ];

  const rowData = [
    { name: 'Steve', color: 'Red', number: 45 },
    { name: 'Sharon', color: 'Purple', number: 5 },
    { name: 'Rodney', color: 'Orange', number: 32 },
    { name: 'Mack', color: 'Blue', number: 12 },
  ];

  let filters = {
    name: '',
    color: '',
    number: ''
  };

  let filteredData = writable(rowData);

  let filterEnabled = false;

  function filterTable() {
    const filtered = rowData.filter(row => {
      return columnDefs.every(col => {
        const filterValue = filters[col.field];
        const fieldValue = row[col.field];

        if (!filterValue) {
          return true;
        }

        if (col.filterType === 'number') {
          return fieldValue == filterValue;
        }

        return fieldValue.toString().toLowerCase().includes(filterValue.toLowerCase());
      });
    });

    filteredData.set(filtered);
  }

  filteredData.set(rowData);
</script>

<style lang="css">
  .custom-cell-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  table {
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

  button {
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }

  button:hover {
    background-color: #0056b3;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    table {
      font-size: 0.8rem;
    }

    input[type="text"], input[type="number"] {
      font-size: 0.85rem;
    }

    button {
      font-size: 0.8rem;
    }
  }


</style>
