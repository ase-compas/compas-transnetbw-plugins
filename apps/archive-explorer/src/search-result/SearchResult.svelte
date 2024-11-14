<script lang="ts">
  import { ArchiveSearchResult } from '@oscd-transnet-plugins/oscd-archive-explorer';
  import { writable } from 'svelte/store';
  import { OscdDataTable } from '@oscd-transnet-plugins/oscd-component';
  import { OscdFindInPageIcon, OscdInventory2Icon } from '@oscd-transnet-plugins/oscd-icons';

  export let data = [] as ArchiveSearchResult[];

  const dataStore = { store: writable(data) as writable<ArchiveSearchResult[]> };

  const columnDefs = [
    { headerName: 'Name', field: 'name', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Type', field: 'type', numeric: false, filter: true, filterType: 'text', sortable: true },
    {
      headerName: 'Content type',
      field: 'contentType',
      numeric: false,
      filter: true,
      filterType: 'text',
      sortable: true
    },
    { headerName: 'Approver', field: 'approver', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Author', field: 'author', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Modifed', field: 'modifiedAt', numeric: false, filter: true, filterType: 'text', sortable: true },
    {
      headerName: 'Note',
      field: 'note',
      numeric: false,
      filter: true,
      filterType: 'text',
      sortable: true
    },
    { headerName: 'Version', field: 'version', numeric: false, filter: true, filterType: 'text', sortable: true },
    {
      headerName: 'UUID',
      field: 'uuid',
      numeric: false,
      filter: true,
      filterType: 'text',
      sortable: false,
      cellStyle: 'font-weight: bold;',
      headerStyle: 'font-weight: bold;'
    },
    {
      headerName: '',
      field: 'actions',
      numeric: false,
      filter: false,
      filterType: 'text',
      minWidth: '100px',
      sortable: false
    }
  ];

  const rowActions = [
    {
      iconComponent: OscdFindInPageIcon,
      iconStyles: 'fill: unset; margin: unset;',
      callback: (row) => console.log(row),
      disabled: () => false
    },
    {
      iconComponent: OscdInventory2Icon,
      iconStyles: 'fill: unset; margin: unset;',
      callback: (row) => console.log(row),
      disabled: (row) => false
    }
  ];
</script>

<div class="result-container">
  <div class="content">
    <!--    <div class="uuid">-->
    <!--      <strong>UUID: {searchResult.uuid}</strong>-->
    <!--    </div>-->

    <OscdDataTable {columnDefs} store={dataStore} loadingDone="{true}" {rowActions}></OscdDataTable>
  </div>
</div>

<style>

  .uuid {
    margin-bottom: 2rem;
  }

  .result-container .content {
  }
</style>
