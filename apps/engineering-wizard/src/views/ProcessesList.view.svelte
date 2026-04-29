<script lang="ts">
  import SearchInput from '../components/shared/SearchInput.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';

  import { OscdBasicDataTable } from '@oscd-transnet-plugins/oscd-component';
  import { OscdInfoIcon, OscdEditIcon, OscdPlayCircleIcon, OscdArrowForwardIcon } from '@oscd-transnet-plugins/oscd-icons';

  import Button, { Label, Icon } from '@smui/button';
  import {
    engineeringProcesses,
    engineeringProcessesStatus,
    runningEngineeringProcess
  } from '../features/processes/stores.svelte';

  interface Props {
    handleStart: (process: Process) => void;
    handleView: (process: Process) => void;
    handleEdit: (process: Process) => void;
    handleAddNew: () => void;
    docName?: string;
  }

  type ProcessRow = Process & { displayName: string; validationCount: number };

  const { handleStart, handleView, handleEdit, handleAddNew, docName }: Props = $props();

  let searchQuery = $state('');

  const processes = $derived(engineeringProcesses.processes ?? []);

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

  const columns = [
    { key: 'displayName', header: 'Name', bold: true, width: '15%' },
    { key: 'description', header: 'Description', width: '50%' },
    { key: 'version', header: 'Version', width: '10%' },
    { key: 'validationCount', header: 'Validations', width: '15%' },
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

<div class="processes">
  <div class="process-toolbar">
    <h1 class="processes__header">Processes</h1>
    <div class="process-toolbar__right">
      <SearchInput bind:value={searchQuery} label="Search Processes" />
      <Button
        variant="raised"
        style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
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
        <OscdInfoIcon svgStyles="fill: var(--primary-base); width: 20px; height: 20px;" />
        <span>{bannerText}</span>
      </div>
      <Button
        type="button"
        variant="unelevated"
        style="--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base);"
        onclick={continueRunning}>
        <Icon><OscdArrowForwardIcon svgStyles="fill: var(--primary-base); width: 18px; height: 18px;" /></Icon>
        <Label>Continue</Label>
      </Button>
    </div>
  {/if}

  <OscdBasicDataTable
    items={filteredRows}
    {columns}
    loading={engineeringProcessesStatus.loading}
    errorMsg={engineeringProcessesStatus.error}
    emptyText="No processes available."
    hasActions
    headerBg="#DAE3E6"
    rowBg="#ffffff"
    onRowClick={handleView}
  >
    {#snippet actions({ item })}
      <Button
        type="button"
        variant="unelevated"
        onclick={(e) => { e.stopPropagation(); handleEdit(item); }}
        aria-label="Edit process"
        style="--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base); border: 1px solid #ccc;"
      >
        <Icon><OscdEditIcon svgStyles="fill: var(--primary-base)" /></Icon>
        <Label>Edit</Label>
      </Button>

      {#if isRunningRow(item)}
        <Button
          type="button"
          variant="unelevated"
          aria-label="Continue process"
          onclick={(e) => { e.stopPropagation(); handleStart(item); }}
          style="--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base); border: 1px solid #ccc;"
        >
          <Icon><OscdArrowForwardIcon svgStyles="fill: var(--primary-base); width: 18px; height: 18px;" /></Icon>
          <Label>Continue</Label>
        </Button>
      {:else}
        <Button
          type="button"
          variant="unelevated"
          aria-label="Start process"
          onclick={(e) => { e.stopPropagation(); handleStart(item); }}
          style="--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base); border: 1px solid #ccc;"
        >
          <Icon><OscdPlayCircleIcon svgStyles="fill: var(--primary-base)" /></Icon>
          <Label>Start</Label>
        </Button>
      {/if}
    {/snippet}
  </OscdBasicDataTable>
</div>

<style>
  .processes {
    margin-top: 16px;
    padding: 0 24px;
  }

  .processes__header {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-base);
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

  .process-toolbar__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
    background-color: #d9d800;
  }

  .process-banner__info {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .process-banner span {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    color: var(--primary-base);
    font-weight: var(--ew-font-weight-medium, 500);
  }
</style>
