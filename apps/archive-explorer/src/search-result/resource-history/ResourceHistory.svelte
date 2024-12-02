<script lang="ts">
  import { ArchiveExplorerService, ArchiveSearchResult } from '@oscd-transnet-plugins/oscd-archive-explorer';
  import { onMount } from 'svelte';
  import { take, tap } from 'rxjs';
  import { OscdFindInPageIcon, OscdInventory2Icon } from '@oscd-transnet-plugins/oscd-icons';
  import { writable } from 'svelte/store';
  import { OscdDataTable } from '@oscd-transnet-plugins/oscd-component';

  export let searchResult: ArchiveSearchResult;

  const archiveExplorerService = ArchiveExplorerService.getInstance();
  const dataStore = { store: writable([]) as writable<ArchiveSearchResult[]> };
  let loadingDone = false;

  const columnDefs = [
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
      disabled: () => false
    }
  ];

  onMount(() => {
    if (!searchResult) {
      return;
    }

    archiveExplorerService.retrieveArchivedResourceHistory(searchResult.uuid)
      .pipe(
        take(1),
        tap(result => {
          dataStore.store.set(result);
          loadingDone = true;
        })
      ).subscribe();
  });
</script>

<OscdDataTable {columnDefs} store={dataStore} {loadingDone} {rowActions}></OscdDataTable>

<style lang="css">

</style>
