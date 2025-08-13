<script lang="ts">
  import { ArchiveExplorerService, ArchiveSearchResult } from '@oscd-transnet-plugins/oscd-archive-explorer';
  import { onMount } from 'svelte';
  import { catchError, of, take, tap } from 'rxjs';
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
    { headerName: 'Modifed', field: 'modifiedAt', numeric: false, filter: true, filterType: 'text', sortable: true, valueFormatter: formatDate },
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
      icon: 'download',
      callback: (row) => downloadByUUIDAndVersion(row),
      disabled: () => false
    }
  ];

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

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

  function downloadByUUIDAndVersion(row: ArchiveSearchResult) {
    let resourceGuid: string;

    if(row.fields && row.fields.length) {
      resourceGuid = row.fields.find(field => field.key === 'SOURCE_RESOURCE_ID')?.value;
    }

    archiveExplorerService.findByUUIDAndVersion(resourceGuid, row.type, row.version)
      .pipe(
        take(1),
        tap((data: Blob) => {
          const url = window['URL'].createObjectURL(data);
          const a = document.createElement('a');
          a.href = url;
          a.download = row.filename;
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window['URL'].revokeObjectURL(url);
        }),
        catchError(err => {
          console.error(err);
          alert(err);
          return of(undefined);
        })
      )
      .subscribe();
  }
</script>

<OscdDataTable {columnDefs} store={dataStore} {loadingDone} {rowActions}></OscdDataTable>

<style lang="css">

</style>
