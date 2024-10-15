<script lang="ts">
  import SearchFilter from './features/search-filter/SearchFilter.svelte';
  import { OscdDataTable } from '@oscd-transnet-plugins/oscd-component';
  import Card from '@smui/card';
  import { tap, take, finalize } from 'rxjs/operators';
  import {
    SearchParams,
    VersionEditorFileService,
    VersionEditorStore
  } from '@oscd-transnet-plugins/oscd-version-editor';

  const versionEditorDataService = VersionEditorFileService.getInstance();

  let rowData = [];

  export let dataStore = new VersionEditorStore();
  let loadingDone = true;

  const columnDefs = [
    { headerName: 'Filename', field: 'filename', numeric: false, filter: true, filterType: 'text' },
    { headerName: 'Type', field: 'type', numeric: false, filter: true, filterType: 'text' },
    { headerName: 'Author', field: 'author', numeric: false, filter: true, filterType: 'text' },
    { headerName: 'Date', field: 'date', numeric: false, filter: true, filterType: 'text', valueFormatter: formatDate  },
    { headerName: 'Version', field: 'version', numeric: false, filter: true, filterType: 'text' },
    { headerName: '', field: 'actions', numeric: false, filter: false, filterType: 'text', minWidth: '100px' }
  ];

  const rowActions = [
    { icon: 'find_in_page', callback: (row) => getHistoryByUuid(row.uuid) },
    { icon: 'download', callback: (row) => console.log(row) }
  ];

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  function search(searchParams: SearchParams) {
    loadingDone = false;
    versionEditorDataService.searchFiles(searchParams)
      .pipe(
        take(1),
        tap((data: any) => {
          rowData = [...data];
          dataStore.updateData(data);
        }),
        finalize(() => {
          loadingDone = true;
        })
      )
      .subscribe();
  }

  function getHistoryByUuid(uuid: string) {
    versionEditorDataService.getHistoryFiles(uuid)
      .pipe(
        take(1),
        tap((data: any) => {
          console.log(data);
        })
      )
      .subscribe();
  }

</script>

<div class="version-editor-container">
  <div class="search-filter">
    <SearchFilter searchParamsCallback={search} />
  </div>
  <div class="table-container">
    <Card style="padding: 1rem; width: 100%; height: 100%;">
      <h3 style="margin-bottom: 1rem;">Version Table</h3>
      <OscdDataTable {columnDefs} store={dataStore} {loadingDone} {rowActions}/>
    </Card>
  </div>
</div>

<style lang="css">
  @import "/global.css";
  @import '/material-icon.css';
  @import '/smui.css';

  .version-editor-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .search-filter {
    width: 100%;
    height: auto;
  }

  .table-container {
    height: 100%;
    padding: 1rem;
  }
</style>
