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
    OscdFilterBuilder,
    OscdInput,
    OscdLoadingSpinner
  } from '@oscd-transnet-plugins/oscd-component';
  import { Subject } from 'rxjs';
  import { catchError, finalize, switchMap, take, tap, debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
  import { from, of } from 'rxjs';
  import {
    FileSearchResult,
    VersionEditorFileService,
    VersionEditorStore
  } from '@oscd-transnet-plugins/oscd-history-viewer';
  import type { SearchParams } from '@oscd-transnet-plugins/oscd-history-viewer';
  import { Label } from '@smui/button';
  import { OscdCancelIcon } from '@oscd-transnet-plugins/oscd-icons';
  import {onMount} from "svelte";
  import {_, locale} from 'svelte-i18n';
  import "svelte-material-ui/bare.css"
  import "../public/material-icon.css"
  import "../public/global.css"
  import "../public/smui.css"
  import type { FilterDefinition } from '../../../libs/oscd-component/src/oscd-filter-builder/types';

  const versionEditorDataService = VersionEditorFileService.getInstance();

  let rowData: FileSearchResult[] = [];
  let historyData: FileSearchResult[] = [];
  let currentSelectFile: FileSearchResult = $state();

  const searchTrigger$ = new Subject<void>();
  const search$ = searchTrigger$.pipe(
    debounceTime(150),
    map(() => convertFilterToSearchParams(filterDefinitions)),
    distinctUntilChanged(
      (a, b) => JSON.stringify(a) === JSON.stringify(b)
    ),
    tap(() => {
      loadingDone = false;
    }),
    switchMap(searchParams =>
      versionEditorDataService.searchFiles(searchParams).pipe(
        tap((data: FileSearchResult[]) => {
          rowData = [...data];
          dataStore.updateData(data);
        }),
        finalize(() => {
          loadingDone = true;
        })
      )
    )
  );

  interface Props {
    dataStore?: any;
    historyStore?: any;
  }

  let { dataStore = new VersionEditorStore(), historyStore = new VersionEditorStore() }: Props = $props();

  let loadingDone = $state(true);
  let dialogOpen = $state(false);
  let searchText = $state('');

  //loading quickfix for css to load
  let loading = $state(true);

  onMount(() => {
    const sub = search$.subscribe();


    setTimeout(() => {
      loading = false;
      // initial search
      searchTrigger$.next();
    }, 1000)

    return () => sub.unsubscribe();
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
    { headerName: $_('uuid'), field: 'uuid', numeric: false, filter: false, filterType: 'text', sortable: false },
    { headerName: $_('filename'), field: 'filename', numeric: false, filter: false, filterType: 'text', sortable: true },
    { headerName: $_('type'), field: 'type', numeric: false, filter: false, filterType: 'text', sortable: true },
    { headerName: $_('author'), field: 'author', numeric: false, filter: false, filterType: 'text', sortable: true },
    {
      headerName: $_('date'),
      field: 'date',
      numeric: false,
      filter: false,
      filterType: 'text',
      sortable: true,
      valueFormatter: formatDate
    },
    { headerName: $_('version'), field: 'version', numeric: false, filter: false, filterType: 'text', sortable: true },
    columnDefsActions
  ]);

  let modalColumnDef = $derived([
    ...columnDefs,
    { headerName: 'Comment', field: 'comment', numeric: false, filter: false, filterType: 'text', sortable: true },
  ]);

  const rowActions = [
    {
      icon: 'edit',
      tooltip: 'Edit',
      callback: (row) => openDoc(row),
      disabled: (row) => !row.available
    },
    {
      icon: 'find-in-page',
      tooltip: 'Find in page',
      callback: (row) => getHistoryByUuid(row),
      disabled: () => false
    },
    {
      icon: 'download',
      tooltip: 'Download',
      callback: (row) => downloadBlob(row),
      disabled: (row) => !row.available
    }
  ];

  const historyRowActions = [
    {
      icon: 'download',
      tooltip: 'Download',
      callback: (row) => downloadBlob(row),
      disabled: (row) => !row.available }
  ];

  let filterDefinitions: FilterDefinition[] = $state([
    {
      key: "type",
      label: "Type",
      type: "select",
      options: [
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
    {
      key: "author",
      label: "Author",
      type: "text"
    },
    {
      key: "from",
      label: "Date from",
      type: "date"
    },
    {
      key: "to",
      label: "Date to",
      type: "date"
    }
  ]);

  function downloadBlob(row: FileSearchResult) {
    console.log('Download file: ', row);
    versionEditorDataService.downloadSclData(row.uuid, row.type, row.version)
      .pipe(
        take(1),
        tap((data: Blob) => {
          const url = window['URL'].createObjectURL(data);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${row.filename}.${row.type.toLowerCase()}`;
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window['URL'].revokeObjectURL(url);
        })
      )
      .subscribe();
  }

  function convertFilterToSearchParams(filters: FilterDefinition[]): SearchParams {
    const searchParams: SearchParams = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };

    // Map filter values to searchParams
    filters.forEach((filter) => {
      if (filter.value && filter.key in searchParams) {
        searchParams[filter.key] = filter.value;
      }
    });

    // Include searchText in filename search
    if (searchText && searchText.trim() !== '') {
      searchParams.filename = searchText.trim();
    }

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

<div class="oscd-app">

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
    <div class="search-filter" style="display: flex; flex-direction: column; gap: 1rem;">
      <OscdInput
        bind:value={searchText}
        oninput={() => searchTrigger$.next()}
        icon="search"
        label="Search name..."
        variant="outlined"
        styles="background: var(--oscd-base2,#fff); max-width: 650px;"/>

      <OscdFilterBuilder bind:filters={filterDefinitions} onfiltersChanged={() => searchTrigger$.next()}/>
    </div>
    <div class="table-container">
      <h3 style="margin-bottom: 1rem;">{$_('versionTable.heading')}</h3>
      <OscdDataTable {columnDefs}
                     store={dataStore}
                     {loadingDone}
                     {rowActions}
                     searchInputLabel={$_('search')}/>
    </div>
  </div>
{/if}
</div>
<style lang="css" global>
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
    margin-top: 1rem;
    height: 100%;
  }
</style>
