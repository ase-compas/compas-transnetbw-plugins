<script lang="ts">
  import { OscdButton, OscdDataTable, OscdDialog, OscdFilterBox } from '@oscd-transnet-plugins/oscd-component';
  import Card from '@smui/card';
  import { finalize, take, tap } from 'rxjs/operators';
  import {
    FileSearchResult,
    SearchParams,
    VersionEditorFileService,
    VersionEditorStore
  } from '@oscd-transnet-plugins/oscd-history-viewer';
  import { Icon, Label } from '@smui/button';
  import { ActiveFilter, FilterType } from '../../../libs/oscd-component/src/oscd-filter-box/interfaces';

  const versionEditorDataService = VersionEditorFileService.getInstance();

  let rowData: FileSearchResult[] = [];
  let historyData: FileSearchResult[] = [];
  let currentSelectFile: FileSearchResult;

  export let dataStore = new VersionEditorStore();
  export let historyStore = new VersionEditorStore();

  let loadingDone = true;
  let dialogOpen = false;

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  const columnDefs = [
    { headerName: 'UUID', field: 'uuid', numeric: false, filter: true, filterType: 'text', sortable: false },
    { headerName: 'Filename', field: 'filename', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Type', field: 'type', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Author', field: 'author', numeric: false, filter: true, filterType: 'text', sortable: true },
    {
      headerName: 'Date',
      field: 'date',
      numeric: false,
      filter: true,
      filterType: 'text',
      sortable: true,
      valueFormatter: formatDate
    },
    { headerName: 'Version', field: 'version', numeric: false, filter: true, filterType: 'text', sortable: true },
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
    { icon: 'find_in_page', callback: (row) => getHistoryByUuid(row), disabled: () => false },
    { icon: 'download', callback: (row) => downloadBlob(row), disabled: (row) => !row.available }
  ];

  const historyRowActions = [
    { icon: 'download', callback: (row) => downloadBlob(row), disabled: (row) => !row.available }
  ];

  const filterTypes: FilterType[] = [
    {
      id: 1,
      label: 'Filename',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 2,
      label: 'UUID',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 3,
      label: 'Type',
      inputType: {
        id: 2, type: 'select', validatorFn: () => true, options: [
          { value: 'SSD', label: 'SSD' },
          { value: 'IID', label: 'IID' },
          { value: 'ICD', label: 'ICD' },
          { value: 'SCD', label: 'SCD' },
          { value: 'CID', label: 'CID' },
          { value: 'SED', label: 'SED' },
          { value: 'ISD', label: 'ISD' },
          { value: 'STD', label: 'STD' }
        ]
      },
      allowedOperations: ['=']
    },
    {
      id: 4,
      label: 'Author',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 5,
      label: 'From',
      inputType: { id: 3, type: 'timepicker', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 5,
      label: 'To',
      inputType: { id: 3, type: 'timepicker', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    }
  ];

  let filtersToSearch: ActiveFilter[] = [];

  function downloadBlob(row: FileSearchResult) {
    console.log('Download file: ', row);
    versionEditorDataService.downloadSclData(row.uuid, row.type, row.version)
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
        })
      )
      .subscribe();
  }

  function search() {
    const searchParams = convertFilterToSearchParams(filtersToSearch);
    console.log('Search with params: ', searchParams);
    loadingDone = false;
    versionEditorDataService.searchFiles(searchParams)
      .pipe(
        take(1),
        tap((data: FileSearchResult[]) => {
          rowData = [...data];
          dataStore.updateData(data);
        }),
        finalize(() => {
          loadingDone = true;
        })
      )
      .subscribe();
  }

  function convertFilterToSearchParams(filters: ActiveFilter[]): SearchParams {
    const searchParams: SearchParams = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    console.log('Convert filter to search params: ', filters);
    filters.forEach((filter) => {
      console.log("KEY:", filter.key);
      if (filter.key === 'from' ||
        filter.key === 'to') {
        searchParams[filter.key]  = new Date(filter.value).toISOString();
      } else {
        searchParams[filter.key] = filter.value;
      }
    });
    return searchParams;
  }

  function getHistoryByUuid(row: FileSearchResult) {
    currentSelectFile = row;
    versionEditorDataService.getHistoryFiles(row.uuid)
      .pipe(
        take(1),
        tap((data: FileSearchResult[]) => {
          dialogOpen = true;
          historyData = [...data];
          historyStore.updateData(data);
        })
      )
      .subscribe();
  }

  function onDialogClose(result: any) {
    console.log('Dialog closed with result: ', result);
    dialogOpen = false;
  }
</script>

<div class="version-editor-container">
  <OscdDialog bind:open="{dialogOpen}">
    <h3 slot="title">Version History of file {currentSelectFile?.filename}</h3>
    <div slot="content">
      <OscdDataTable {columnDefs} store={historyStore} {loadingDone} rowActions={historyRowActions} />
    </div>
    <div slot="actions">
      <OscdButton callback={onDialogClose}>
        <Icon class="material-icons">done</Icon>
        <Label>Done</Label>
      </OscdButton>
    </div>
  </OscdDialog>
  <div class="search-filter">
    <OscdFilterBox {filterTypes} bind:activeFilters={filtersToSearch}>
      <OscdButton slot="filter-controls" variant="raised" callback={search}>
        <Icon class="material-icons">search</Icon>
        <Label>Search</Label>
      </OscdButton>
    </OscdFilterBox>
  </div>
  <div class="table-container">
    <Card style="padding: 1rem; width: 100%; height: 100%;">
      <h3 style="margin-bottom: 1rem;">Version Table</h3>
      <OscdDataTable {columnDefs} store={dataStore} {loadingDone} {rowActions} />
    </Card>
  </div>
</div>

<style lang="css" global>
  @import "/global.css";
  @import "/material-icon.css";
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
