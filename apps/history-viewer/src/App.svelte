<script module>
  import { setupTranslation } from '@oscd-transnet-plugins/oscd-localization';
  import de from './i18n/de.json';
  import en from './i18n/en.json';

  setupTranslation({
    en,
    de,
  });
</script>
<script lang="ts">
  import {
    OscdButton,
    OscdDataTable,
    OscdDialog,
    OscdFilterBox,
    OscdLoadingSpinner
  } from '@oscd-transnet-plugins/oscd-component';
  import Card from '@smui/card';
  import { catchError, finalize, switchMap, take, tap } from 'rxjs/operators';
  import { from, of } from 'rxjs';
  import {
    FileSearchResult,
    VersionEditorFileService,
    VersionEditorStore
  } from '@oscd-transnet-plugins/oscd-history-viewer';
  import type { SearchParams } from '@oscd-transnet-plugins/oscd-history-viewer';
  import { Label } from '@smui/button';
  import type { ActiveFilter, FilterType } from '@oscd-transnet-plugins/oscd-component'
  import { OscdCancelIcon, OscdSearchIcon } from '@oscd-transnet-plugins/oscd-icons';
  import {onMount} from "svelte";
  import {_, locale} from 'svelte-i18n';
  import "svelte-material-ui/bare.css"
  import "../public/material-icon.css"
  import "../public/global.css"
  import "../public/smui.css"

  const versionEditorDataService = VersionEditorFileService.getInstance();

  let rowData: FileSearchResult[] = [];
  let historyData: FileSearchResult[] = [];
  let currentSelectFile: FileSearchResult = $state();

  interface Props {
    dataStore?: any;
    historyStore?: any;
  }

  let { dataStore = new VersionEditorStore(), historyStore = new VersionEditorStore() }: Props = $props();

  let loadingDone = $state(true);
  let dialogOpen = $state(false);

  //loading quickfix for css to load
  let loading = $state(true);

  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 1000)
  });

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  const columnDefsActions = {
    headerName: '',
    field: 'actions',
    numeric: false,
    filter: false,
    filterType: 'text',
    minWidth: '100px',
    sortable: false
  };

  let columnDefs = $derived([
    { headerName: $_('uuid'), field: 'uuid', numeric: false, filter: true, filterType: 'text', sortable: false },
    { headerName: $_('filename'), field: 'filename', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('type'), field: 'type', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('author'), field: 'author', numeric: false, filter: true, filterType: 'text', sortable: true },
    {
      headerName: $_('date'),
      field: 'date',
      numeric: false,
      filter: true,
      filterType: 'text',
      sortable: true,
      valueFormatter: formatDate
    },
    { headerName: $_('version'), field: 'version', numeric: false, filter: true, filterType: 'text', sortable: true },
    columnDefsActions
  ]);

  let modalColumnDef = $derived([
    ...columnDefs,
    { headerName: 'Comment', field: 'comment', numeric: false, filter: true, filterType: 'text', sortable: true },
  ]);

  const rowActions = [
    {
      icon: 'edit',
      callback: (row) => openDoc(row),
      disabled: (row) => !row.available
    },
    { icon: 'find-in-page', callback: (row) => getHistoryByUuid(row), disabled: () => false },
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

  let filtersToSearch: ActiveFilter[] = $state([]);

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
    filters.filter((f) => !f.disabled).forEach((filter) => {
      console.log('KEY:', filter.key);
      if (filter.key === 'from' ||
        filter.key === 'to') {
        searchParams[filter.key] = new Date(filter.value).toISOString();
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

  function onCloseDialog(result: any) {
    console.log('Dialog closed with result: ', result);
    dialogOpen = false;
  }

  function openDoc(row: FileSearchResult) {
    if (!confirm('Open the selected file?\n\n Please make sure you save all changes on your current project.')) {
      return;
    }

    let url = '';

    versionEditorDataService.downloadSclData(row.uuid, row.type, row.version)
      .pipe(
        take(1),
        tap((data: Blob) => {
          url = window['URL'].createObjectURL(data);
        }),
        switchMap(() => from(fetch(url).then(response => {
            if (response.status === 200) {
              return response.text();
            }

            throw new Error(`Failed to load ${row.filename}: ${response.status} ${response.statusText}`);
          }))
        ),
        take(1),
        catchError(err => {
          alert(err);
          console.error(err);
          return of(undefined);
        }),
        tap((text: string | undefined) => {
          if (!text) {
            return;
          }

          const docName = row.filename;
          const doc = new DOMParser().parseFromString(text, 'application/xml');

          window.document.getElementsByTagName('open-scd')[0]?.dispatchEvent(new CustomEvent('open-doc', {
            bubbles: true,
            composed: true,
            detail: { localFile: false, doc, docName }
          }));
        }),
        finalize(() => url && window['URL'].revokeObjectURL(url))
      ).subscribe();
  }
</script>

{#if loading}
  <OscdLoadingSpinner loadingDone={!loading} />
{:else}
  <div class="version-editor-container">
    <OscdDialog bind:open={dialogOpen} onClose={onCloseDialog}>
      {#snippet title()}
            <h3 >{$_('versionHistory.title', { values: { filename: currentSelectFile?.filename } })}</h3>
          {/snippet}
      {#snippet content()}
            <div >
          <OscdDataTable columnDefs={modalColumnDef}
                         store={historyStore}
                         {loadingDone}
                         rowActions={historyRowActions}
                         searchInputLabel={$_('search')} />
        </div>
          {/snippet}
      {#snippet actions()}
            <div >
          <OscdButton callback={onCloseDialog} variant="raised">
            <OscdCancelIcon />
            <Label>{$_('done')}</Label>
          </OscdButton>
        </div>
          {/snippet}
    </OscdDialog>
    <div class="search-filter">
      {#snippet filterControls()}
        <OscdButton variant="raised" callback={search}>
          <OscdSearchIcon />
          <Label>{$_('search')}</Label>
        </OscdButton>
      {/snippet}

      <OscdFilterBox
        {filterControls}
        {filterTypes}
        bind:activeFilters={filtersToSearch}
        addFilterLabel={$_('add_filter')}
        selectFilterLabel={$_('filter_types')}
      />
    </div>
    <div class="table-container">
      <Card style="padding: 1rem; width: 100%; height: 100%;">
        <h3 style="margin-bottom: 1rem;">{$_('versionTable.heading')}</h3>
        <OscdDataTable {columnDefs}
                       store={dataStore}
                       {loadingDone}
                       {rowActions}
                       searchInputLabel={$_('search')}/>
      </Card>
    </div>
  </div>
{/if}
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
