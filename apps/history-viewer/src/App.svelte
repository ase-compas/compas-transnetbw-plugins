<script module>
  import { setupTranslation } from '@oscd-transnet-plugins/oscd-localization';
  import de from './i18n/de.json';
  import en from './i18n/en.json';

  setupTranslation({ en, de });
</script>

<script lang="ts">
  import {
    OscdButton,
    OscdConfirmDialog,
    OscdDataTable,
    OscdDialog,
    OscdFilterTab,
    OscdToastHost,
  } from '@oscd-transnet-plugins/oscd-component';
  import { firstValueFrom } from 'rxjs';
  import {
    FileSearchResult,
    VersionEditorFileService,
    VersionEditorStore,
  } from '@oscd-transnet-plugins/oscd-history-viewer';
  import type { SearchParams } from '@oscd-transnet-plugins/oscd-history-viewer';
  import { Label } from '@smui/button';
  import { OscdCancelIcon, OscdRefreshIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { onMount } from 'svelte';
  import { _, locale } from 'svelte-i18n';
  import 'svelte-material-ui/bare.css';
  import '../public/material-icon.css';
  import '../public/global.css';
  import '../public/smui.css';
  import type { FilterDefinition } from '../../../libs/oscd-component/src/oscd-filter-builder/types';
  import { DialogHost, openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { ArchiveExplorerService } from '@oscd-transnet-plugins/oscd-archive-explorer';
  import { untrack } from 'svelte';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    docName?: string;
    docId?: string;
    host?: HTMLElement;
    locale?: string;
    dataStore?: VersionEditorStore;
    historyStore?: VersionEditorStore;
    dev?: boolean;
  }

  let {
    doc,
    editCount = -1,
    docId,
    docName: currentDocName,
    dataStore = new VersionEditorStore(),
    historyStore = new VersionEditorStore(),
  }: Props = $props();

  const service = VersionEditorFileService.getInstance();
  const archiveService = ArchiveExplorerService.getInstance();

  let loadingDone = $state(true);
  let historyLoadingDone = $state(true);
  let dialogOpen = $state(false);
  let searchText = $state('');
  let currentSelectFile = $state<FileSearchResult | undefined>(undefined);

  let filterDefinitions: FilterDefinition[] = $state([
    { key: 'uuid', label: 'UUID', type: 'text' },
    {
      key: 'type',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'SSD', label: 'SSD' },
        { value: 'IID', label: 'IID' },
        { value: 'ICD', label: 'ICD' },
        { value: 'SCD', label: 'SCD' },
        { value: 'CID', label: 'CID' },
        { value: 'SED', label: 'SED' },
        { value: 'ISD', label: 'ISD' },
        { value: 'STD', label: 'STD' },
      ],
    },
    { key: 'author', label: 'Author', type: 'text' },
    { key: 'from', label: 'Date from', type: 'date' },
    { key: 'to', label: 'Date to', type: 'date' },
  ]);

  // --- Column definitions ---------------------------------------------------

  const columnDefsActions = {
    headerName: '',
    field: 'actions',
    numeric: false,
    filter: false,
    filterType: 'text',
    minWidth: '100px',
    sortable: false,
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
      valueFormatter: formatDate,
    },
    { headerName: $_('version'), field: 'version', numeric: false, filter: false, filterType: 'text', sortable: true },
    columnDefsActions,
  ]);

  let modalColumnDef = $derived([
    ...columnDefs,
    { headerName: 'Comment', field: 'comment', numeric: false, filter: false, filterType: 'text', sortable: true },
  ]);

  const rowActions: any[] = [
    { icon: 'edit', tooltip: 'Open', callback: (row) => openDoc(row), disabled: (row) => !row.available },
    { icon: 'find-in-page', tooltip: 'View History', callback: (row) => openHistoryDialog(row), disabled: () => false },
    { icon: 'download', tooltip: 'Download', callback: (row) => downloadBlob(row), disabled: (row) => !row.available },
    { icon: 'delete', tooltip: 'Delete', callback: (row) => deleteFile(row), disabled: () => false },
    { icon: 'archive', tooltip: 'Archive', callback: (row) => archiveFile(row), disabled: () => false },
  ];

  const historyRowActions: any[] = [
    { icon: 'download', tooltip: 'Download', callback: (row) => downloadBlob(row), disabled: (row) => !row.available },
  ];

  // --- Data loading ---------------------------------------------------------

  let searchTimer: ReturnType<typeof setTimeout>;

  onMount(() => {
    loadData();

    // Re-fetch the list whenever any document is saved to the CoMPAS backend.
    // 'doc-saved' is a CustomEvent<void> dispatched by CompasSave with
    // { bubbles: true, composed: true }, so it propagates up to window.
    const onDocSaved = () => scheduleSearch(800);
    window.addEventListener('doc-saved', onDocSaved);

    return () => {
      clearTimeout(searchTimer);
      window.removeEventListener('doc-saved', onDocSaved);
    };
  });

  // Auto-refresh when CoMPAS increments editCount (e.g. after a save).
  // untrack() prevents prevEditCount mutation from creating a reactive loop.
  let prevEditCount = editCount;
  $effect(() => {
    const current = editCount;
    untrack(() => {
      if (current !== prevEditCount) {
        prevEditCount = current;
        scheduleSearch(500);
      }
    });
  });

  function scheduleSearch(delay = 200) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => loadData(), delay);
  }

  async function loadData() {
    if (!loadingDone) return;
    loadingDone = false;
    try {
      const params = buildSearchParams();
      const data = await service.searchFiles(params);
      dataStore.updateData(data.filter(item => !item.deleted));
    } catch (err) {
      console.error('Failed to load resources:', err);
      toastService.error('Load Failed', 'Could not load the resource list.');
    } finally {
      loadingDone = true;
    }
  }

  function buildSearchParams(): SearchParams {
    const params: SearchParams = { uuid: null, filename: null, author: null, type: null, name: null, from: null, to: null };

    for (const filter of filterDefinitions) {
      if (filter.key in params && filter.type !== 'date' && filter.value) {
        params[filter.key as keyof SearchParams] = filter.value;
      } else if (filter.type === 'date' && filter.value) {
        const d = new Date(filter.value);
        if (filter.key === 'from') {
          params.from = d.toISOString();
        } else if (filter.key === 'to') {
          d.setHours(23, 59, 59, 999);
          params.to = d.toISOString();
        }
      }
    }

    if (searchText.trim()) {
      params.filename = searchText.trim();
    }

    return params;
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  // --- Actions --------------------------------------------------------------

  async function deleteFile(row: FileSearchResult) {
    const isCurrentlyOpen = !!docId && row.uuid === docId;

    const result = await openDialog(OscdConfirmDialog, {
      title: 'Confirm Deletion',
      message: isCurrentlyOpen
        ? `"${row.filename}" is currently open in the editor.\n\nDeleting it will remove it from CoMPAS. The document will stay open locally but its CoMPAS link will be cleared — you will be prompted to save it as a new entry next time.`
        : `Are you sure you want to delete the resource "${row.filename} (${row.uuid})"? This action cannot be undone.`,
      confirmActionText: 'Delete',
      cancelActionText: 'Cancel',
      confirmActionColor: 'danger',
    });
    if (result.type !== 'confirm') return;

    try {
      await service.deleteResource(row.type, row.uuid);
      toastService.success('Deleted resource', `Resource "${row.filename}" has been deleted.`);

      if (isCurrentlyOpen && doc) {
        // Dispatch open-doc without a docId so CoMPAS clears its UUID reference.
        // CompasExistsIn will see docId='' → existInCompas=false → shows "new document"
        // form instead of PATCH/MINOR/MAJOR on the next save attempt.
        const fallbackDocName = currentDocName ?? `${row.filename}.${row.type}`;
        window.document.getElementsByTagName('open-scd')[0]?.dispatchEvent(
          new CustomEvent('open-doc', {
            bubbles: true,
            composed: true,
            detail: { localFile: true, doc, docName: fallbackDocName, docId: '' },
          }),
        );
        toastService.warn(
          'CoMPAS link cleared',
          `"${row.filename}" was deleted. The document is still open locally and can be saved as a new CoMPAS entry.`,
        );
      }

      loadData();
    } catch (err) {
      console.error(`Failed to delete resource "${row.filename}":`, err);
      toastService.error('Deletion failed', `Failed to delete resource "${row.filename}".`);
    }
  }

  async function archiveFile(row: FileSearchResult) {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Confirm Archiving',
      message: `Archive latest version "${row.filename}" (v${row.version})? This keeps the file in History and does not delete it.`,
      confirmActionText: 'Archive',
      cancelActionText: 'Cancel',
    });
    if (result.type !== 'confirm') return;

    try {
      await firstValueFrom(archiveService.archiveSclFile(row.uuid, row.version));
      toastService.success('Archived resource', `Resource "${row.filename}" has been archived.`);
      loadData();
    } catch (err) {
      console.error(`Failed to archive resource "${row.filename}":`, err);
      const errResponse = (err as any)?.response;
      const message = errResponse?.errorMessages?.[0]?.message ?? `Failed to archive resource "${row.filename}".`;
      toastService.error('Archiving failed', message);
    }
  }

  async function downloadBlob(row: FileSearchResult) {
    try {
      const blob = await service.downloadSclData(row.uuid, row.type, row.version);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${row.filename}.${row.type}`;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(`Failed to download "${row.filename}":`, err);
      toastService.error('Download failed', `Could not download "${row.filename}".`);
    }
  }

  async function openHistoryDialog(row: FileSearchResult) {
    currentSelectFile = row;
    historyLoadingDone = false;
    dialogOpen = true;
    try {
      const data = await service.getHistoryFiles(row.uuid);
      historyStore.updateData(data);
    } catch (err) {
      console.error(`Failed to load history for "${row.filename}":`, err);
      toastService.error('History failed', `Could not load history for "${row.filename}".`);
    } finally {
      historyLoadingDone = true;
    }
  }

  function onCloseDialog() {
    dialogOpen = false;
  }

  async function openDoc(row: FileSearchResult) {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Open File',
      message: `Do you want to open "${row.filename}"?\n\nAny unsaved changes in your current project will be lost.`,
      confirmActionText: 'Open',
      cancelActionText: 'Cancel',
    });
    if (result.type !== 'confirm') return;

    try {
      const blob = await service.downloadSclData(row.uuid, row.type, row.version);
      const text = await blob.text();
      const docName = `${row.filename}.${row.type}`;
      const xmlDoc = new DOMParser().parseFromString(text, 'application/xml');

      // docId (CoMPAS UUID) is required so CompasSave shows the version-bump
      // dialog (PATCH/MINOR/MAJOR) instead of the "add as new document" form.
      window.document.getElementsByTagName('open-scd')[0]?.dispatchEvent(
        new CustomEvent('open-doc', {
          bubbles: true,
          composed: true,
          detail: { localFile: false, doc: xmlDoc, docName, docId: row.uuid },
        }),
      );
    } catch (err) {
      console.error(`Failed to open "${row.filename}":`, err);
      toastService.error('Open failed', `Could not open "${row.filename}".`);
    }
  }
</script>

<div class="oscd-app">
  <div class="version-editor-container">
    <OscdDialog bind:open={dialogOpen} onClose={onCloseDialog}>
      {#snippet title()}
        <h3>{$_('versionHistory.title', { values: { filename: currentSelectFile?.filename } })}</h3>
      {/snippet}
      {#snippet content()}
        <OscdDataTable
          columnDefs={modalColumnDef}
          store={historyStore}
          loadingDone={historyLoadingDone}
          rowActions={historyRowActions}
          searchInputLabel={$_('search')}
        />
      {/snippet}
      {#snippet actions()}
        <OscdButton callback={onCloseDialog} variant="raised">
          <OscdCancelIcon />
          <Label>{$_('done')}</Label>
        </OscdButton>
      {/snippet}
    </OscdDialog>

    <div class="search-filter">
      <OscdFilterTab
        bind:filters={filterDefinitions}
        bind:searchText={searchText}
        searchLabel="Search file name..."
        onFilterChange={() => scheduleSearch()}
        onSearchInput={() => scheduleSearch()}
      />
    </div>

    <div class="toolbar">
      <OscdButton callback={() => loadData()} variant="outlined" disabled={!loadingDone}>
        <OscdRefreshIcon />
        <Label>Refresh</Label>
      </OscdButton>
    </div>

    <div class="table-container">
      <OscdDataTable
        emptyText="No resources found."
        {columnDefs}
        store={dataStore}
        {loadingDone}
        {rowActions}
        searchInputLabel={$_('search')}
      />
    </div>
  </div>
</div>

<OscdToastHost />
<DialogHost />

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

  .toolbar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }

  .table-container {
    margin-top: 0.5rem;
    height: 100%;
  }
</style>
