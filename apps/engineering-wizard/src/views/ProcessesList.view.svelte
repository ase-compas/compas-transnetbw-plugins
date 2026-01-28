<script lang="ts">
  import Textfield from '@smui/textfield';
  import type { Process } from '@oscd-transnet-plugins/shared';

  import { OscdBasicDataTable } from '../../../../libs/oscd-component/src';
  import {
    OscdInfoIcon
  } from '../../../../libs/oscd-icons/src';

  import Button from '@smui/button';
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

  type ProcessRow = Process & { displayName: string };

  const { handleStart, handleView, handleEdit, handleAddNew, docName }: Props = $props();

  let searchQuery = $state('');

  const processes = $derived(engineeringProcesses.processes ?? []);

  const rows = $derived<ProcessRow[]>(
    processes.map((p) => ({
      ...p,
      displayName: p.name || p.id,
    }))
  );

  const normalizedQuery = $derived(searchQuery.trim().toLowerCase());

  const filteredRows = $derived(
    normalizedQuery
      ? rows.filter((p) => p.displayName.toLowerCase().includes(normalizedQuery))
      : rows
  );

  const columns = [
    { key: 'displayName', header: 'Name', bold: true },
    { key: 'description', header: 'Description' }
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
  {#if runningProc}
    <div class="process-banner">
      <div class="process-banner__info">
        <OscdInfoIcon />
        <span>{bannerText}</span>
      </div>
      <button type="button" class="banner-continue" onclick={continueRunning}>
        CONTINUE
      </button>
    </div>
  {/if}

  <div class="process-toolbar">
    <Textfield bind:value={searchQuery} variant="outlined" label="Search Processes" />
    <Button
      class="mdc-button--raised"
      style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
      onclick={handleAddNew}
      aria-label="Start process"
    >
      ADD NEW PROCESS
    </Button>
  </div>

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
        onclick={(e) => { e.stopPropagation(); handleEdit(item); }}
        aria-label="Edit process"
        class="mdc-button--raised"
        style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
      >
        Edit
      </Button>

      {#if isRunningRow(item)}
        <Button
          type="button"
          aria-label="Start process"
          onclick={(e) => { e.stopPropagation(); handleStart(item); }}
          class="mdc-button--raised"
          style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
        >
         Continue
        </Button>
      {:else}
        <Button
          type="button"
          aria-label="Start process"
          onclick={(e) => { e.stopPropagation(); handleStart(item); }}
          class="mdc-button--raised"
          style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
        >
         Start
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

  .process-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
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
    background-color: var(--primary-base);
  }

  .process-banner__info {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .process-banner span {
    font-family: 'Roboto', sans-serif;
    color: var(--white);
    font-weight: 500;
  }

  .banner-continue {
    border: none;
    cursor: pointer;
    padding: 8px 14px;
    background: var(--white);
    color: var(--primary-base);
    border-radius: 4px;
    font-weight: 600;
  }
</style>
