<script lang="ts">
  import { onDestroy } from 'svelte';
  import SearchInput from '../components/shared/SearchInput.svelte';
  import ProcessJsonTransferActions from '../features/processes/components/ProcessJsonTransferActions.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';

  import { OscdBasicDataTable, OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
  import { OscdInfoIcon, OscdPlayCircleIcon, OscdArrowForwardIcon, OscdDeleteIcon, OscdControlPointDuplicateIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';

  import Button, { Label, Icon } from '@smui/button';

  import {
    engineeringProcesses,
    engineeringProcessesStatus,
    runningEngineeringProcess
  } from '../features/processes/stores.svelte';
  import { addProcess } from '../features/processes/mutations.svelte';
  import { deleteProcess, saveProcess } from '../features/processes/repository.svelte';

  interface Props {
    handleStart: (process: Process) => void;
    handleView: (process: Process) => void;
    handleEdit: (process: Process) => void;
    handleAddNew: () => void;
    handleDeleted?: (process: Process) => void;
    docName?: string;
  }

  type ProcessRow = Process & { displayName: string; validationCount: number };

  const { handleStart, handleView, handleEdit, handleAddNew, handleDeleted, docName }: Props = $props();

  let selectedRowIds = $state<(string | number)[]>([]);
  let deleting = $state(false);
  const processes = $derived(engineeringProcesses.processes ?? []);

  async function handleDeleteClick(items: Process[]) {
    if (deleting || items.length === 0) return;
    deleting = true;
    try {
      const single = items.length === 1;
      const result = await openDialog(OscdConfirmDialog, {
        title: single ? 'Delete process' : 'Delete processes',
        message: single
          ? `Are you sure you want to delete the process "${items[0].name || items[0].id}"? This action cannot be undone.`
          : `Are you sure you want to delete ${items.length} selected processes? This action cannot be undone.`,
        confirmActionText: 'Delete',
        confirmActionColor: 'danger',
      });

      if (result?.type !== 'confirm') return;

      const deleted: Process[] = [];
      const failed: Process[] = [];
      for (const item of items) {
        try {
          await deleteProcess(item);
          deleted.push(item);
        } catch {
          failed.push(item);
        }
      }
      const deletedIds = new Set(deleted.map((item) => item.id));
      selectedRowIds = selectedRowIds.filter((id) => !deletedIds.has(String(id)));
      for (const item of deleted) handleDeleted?.(item);
      if (deleted.length > 0) {
        toastService.success(
          single ? 'Process deleted' : 'Processes deleted',
          single ? `"${items[0].name || items[0].id}" was deleted.` : `${deleted.length} processes were deleted.`,
        );
      }
      if (failed.length > 0) {
        toastService.error('Delete failed', `${failed.map((item) => `"${item.name || item.id}"`).join(', ')} could not be deleted.`);
      }
    } finally {
      deleting = false;
    }
  }

  let duplicating = $state(false);
  let active = true;
  onDestroy(() => { active = false; });

  async function handleDuplicateClick(item: Process) {
    if (duplicating) return;
    duplicating = true;
    try {
      const baseId = item.id.replace(/-copy(?:-\d+)?$/, '');
      const baseName = (item.name || item.id).replace(/ \(copy(?: \d+)?\)$/, '');
      const ids = new Set(processes.map((p) => p.id));
      const names = new Set(processes.map((p) => p.name));
      let id = `${baseId}-copy`;
      let name = `${baseName} (copy)`;
      for (let n = 2; ids.has(id) || names.has(name); n++) {
        id = `${baseId}-copy-${n}`;
        name = `${baseName} (copy ${n})`;
      }
      const draft: Process = { ...($state.snapshot(item) as Process), id, name, version: '1.0.0' };
      const version = await saveProcess(draft);
      const created = addProcess({ ...draft, version });
      toastService.success('Process duplicated', `"${created.name}" was created.`);
      if (active) handleEdit(created);
    } catch {
      toastService.error('Duplicate failed', `"${item.name || item.id}" could not be duplicated.`);
    } finally {
      duplicating = false;
    }
  }

  let searchQuery = $state('');

  const rows = $derived<ProcessRow[]>(
    processes.map((p) => ({
      ...p,
      displayName: p.name || p.id,
      validationCount: (p.pluginGroups ?? [])
        .flatMap((g) => g.plugins ?? [])
        .reduce((sum, plugin) => sum + (plugin.validations?.length ?? 0), 0),
    }))
  );

  const normalizedQuery = $derived(searchQuery.trim().toLowerCase());

  const filteredRows = $derived(
    normalizedQuery
      ? rows.filter((p) => p.displayName.toLowerCase().includes(normalizedQuery))
      : rows
  );
  const visibleSelectedProcesses = $derived(
    filteredRows.filter((process) => selectedRowIds.includes(process.id)),
  );

  const columns = [
    { key: 'displayName', header: 'Name', bold: true, width: 'min(22cqw, 252px)', tooltip: true },
    { key: 'description', header: 'Description', tooltip: true },
    { key: 'version', header: 'Version', width: '96px', tooltip: true },
    { key: 'validationCount', header: 'Validations', width: '112px' },
  ] as const;

  const runningProc = $derived(runningEngineeringProcess.process);
  const runningProcName = $derived(runningProc?.name || runningProc?.id || '');
  const lastSelectedPluginId = $derived(runningEngineeringProcess.lastSelectedPluginId);

  function getLastSelectedPluginName(proc: Process | null, pluginId: string | null): string {
    if (!pluginId) return '';

    for (const group of proc?.pluginGroups ?? []) {
      const found = group.plugins?.find((p) => p.id === pluginId);
      if (found) return found.name || found.id;
    }

    return '';
  }

  const lastSelectedPluginName = $derived(
    getLastSelectedPluginName(runningProc, lastSelectedPluginId)
  );

  function buildBannerText(): string {
    const base = `A process “${runningProcName}” has already been started`;

    const parts = [
      docName ? ` for the ${docName}` : '',
      lastSelectedPluginName ? ` at “${lastSelectedPluginName}”` : '',
    ];

    return `${base}${parts.join('')}. Would you like to continue where you left off?`;
  }

  const bannerText = $derived(buildBannerText());

  function continueRunning() {
    if (runningProc) handleStart(runningProc);
  }

  function isRunningRow(item: Process): boolean {
    return !!runningProc && item?.id === runningProc.id;
  }
</script>

<div class="processes ew-table-section">
  <div class="process-toolbar">
    <h1 class="processes__header">Processes</h1>
    <div class="process-toolbar__actions">
      <ProcessJsonTransferActions action="import" />
      <Button
        variant="raised"
        style="--mdc-theme-primary: var(--oscd-plugin-action); --mdc-theme-on-primary: var(--oscd-plugin-on-action)"
        onclick={handleAddNew}
        aria-label="Start process"
      >
        Add new process
      </Button>
    </div>
  </div>

  {#if runningProc}
    <div class="process-banner">
      <div class="process-banner__info">
        <OscdInfoIcon svgStyles="fill: var(--oscd-plugin-on-brand); width: 20px; height: 20px;" />
        <span>{bannerText}</span>
      </div>
      <Button
        type="button"
        variant="unelevated"
        style="--mdc-theme-primary: var(--oscd-plugin-surface); --mdc-theme-on-primary: var(--oscd-plugin-text);"
        onclick={continueRunning}>
        <Icon><OscdArrowForwardIcon svgStyles="fill: var(--oscd-plugin-text); width: 18px; height: 18px;" /></Icon>
        <Label>Continue</Label>
      </Button>
    </div>
  {/if}

  <div class="ew-table-toolbar" role="toolbar" aria-label="Processes table controls">
    <SearchInput bind:value={searchQuery} label="Search Processes" />
    <div class="ew-table-toolbar__selection">
      <span role="status">
        {#if visibleSelectedProcesses.length > 0}
          {visibleSelectedProcesses.length} selected
        {:else}
          {filteredRows.length} {filteredRows.length === 1 ? 'process' : 'processes'}
        {/if}
      </span>
      <ProcessJsonTransferActions action="export" selectedProcesses={visibleSelectedProcesses} />
      <Button
        tag="button"
        variant="raised"
        style="--mdc-theme-primary: var(--oscd-plugin-error); --mdc-theme-on-primary: white;"
        onclick={() => handleDeleteClick(visibleSelectedProcesses)}
        disabled={deleting || visibleSelectedProcesses.length === 0}
      >
        <Icon><OscdDeleteIcon svgStyles="fill: currentColor; width: 18px; height: 18px;" /></Icon>
        <Label>Delete</Label>
      </Button>
    </div>
  </div>

  <OscdBasicDataTable
    scrollable
    tableAriaLabel="Processes"
    items={filteredRows}
    {columns}
    tableLayout="fixed"
    actionsWidth="224px"
    loading={engineeringProcessesStatus.loading}
    errorMsg={engineeringProcessesStatus.error}
    emptyText="No processes available."
    hasActions
    headerBg="var(--oscd-plugin-surface-muted)"
    rowBg="var(--oscd-plugin-surface)"
    onRowClick={handleView}
    selectable
    bind:selectedRowIds
    selectionDisabled={deleting}
    getSelectionLabel={(item) => `Select process ${item.name || item.id}`}
  >
    {#snippet actions({ item })}
      {@const running = isRunningRow(item)}
      <div class="ew-table-actions">
        <Button
          type="button"
          variant="unelevated"
          class="ew-table-action ew-table-action--labeled"
          aria-label={running ? 'Continue process' : 'Start process'}
          onclick={(e) => { e.stopPropagation(); handleStart(item); }}
          style="--mdc-theme-primary: var(--oscd-plugin-surface); --mdc-theme-on-primary: var(--oscd-plugin-brand);"
        >
          {#if running}
            <Icon><OscdArrowForwardIcon svgStyles="fill: currentColor; width: 20px; height: 20px;" /></Icon>
          {:else}
            <Icon><OscdPlayCircleIcon svgStyles="fill: currentColor; width: 20px; height: 20px;" /></Icon>
          {/if}
          <Label>{running ? 'Continue' : 'Start'}</Label>
        </Button>
        <button
          type="button"
          class="ew-table-action"
          aria-label="Duplicate process"
          title="Duplicate process"
          disabled={duplicating}
          onclick={(e) => { e.stopPropagation(); handleDuplicateClick(item); }}
        >
          <OscdControlPointDuplicateIcon svgStyles="fill: currentColor; width: 20px; height: 20px;" />
        </button>
        <button
          type="button"
          class="ew-table-action ew-table-action--danger"
          aria-label="Delete process"
          title="Delete process"
          disabled={deleting}
          onclick={(e) => { e.stopPropagation(); handleDeleteClick([item]); }}
        >
          <OscdDeleteIcon svgStyles="fill: currentColor; width: 20px; height: 20px;" />
        </button>
      </div>
    {/snippet}
  </OscdBasicDataTable>
</div>

<style>
  .processes {
    margin-top: 16px;
    padding: 0 24px;
  }

  .processes__header {
    font-family: var(--ew-font-family, 'Inter', sans-serif);
    font-size: var(--ew-font-size-h1, 1.25rem);
    font-weight: var(--ew-font-weight-heading, 600);
    color: var(--oscd-plugin-text);
    margin: 0;
    white-space: nowrap;
  }

  .process-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    gap: 12px;
  }

  .process-toolbar__actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .process-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
    padding: 0 24px;
    margin-bottom: 24px;
    border-radius: 4px;
    background-color: var(--oscd-plugin-ew-info-bg);
  }

  .process-banner__info {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .process-banner__info > span {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--oscd-plugin-on-brand);
    font-weight: var(--ew-font-weight-medium, 500);
  }
</style>
