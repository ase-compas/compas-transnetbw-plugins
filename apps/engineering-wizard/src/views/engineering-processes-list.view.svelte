<script lang="ts">
  import Textfield from '@smui/textfield';
  import type { Process } from '@oscd-transnet-plugins/shared';

  import { OscdBasicDataTable } from '../../../../libs/oscd-component/src';
  import {
    OscdInfoIcon,
    OscdPlayCircleIcon,
    OscdVisibilityIcon,
  } from '../../../../libs/oscd-icons/src';

  import {
    engineeringProcessesErrorState,
    engineeringProcessesState,
    isEngineeringProcessesLoadingState,
    runningEngineeringProcessState,
  } from '../services/engineering-process.svelte';

  interface Props {
    handleStart: (process: Process) => void;
    handleView: (process: Process) => void;
    handleAddNew: () => void;
    docName?: string;
  }

  type ProcessRow = Process & { displayName: string };

  const { handleStart, handleView, handleAddNew, docName }: Props = $props();

  let searchQuery = $state('');

  const processes = $derived(engineeringProcessesState.processes ?? []);

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
    { key: 'displayName', header: 'Name' },
    { key: 'description', header: 'Description' },
  ] as const;

  const runningProc = $derived(runningEngineeringProcessState.process);
  const runningProcName = $derived(runningProc?.name || runningProc?.id || '');
  const lastSelectedPluginId = $derived(runningEngineeringProcessState.lastSelectedPluginId);

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
    <button type="button" class="primary" onclick={handleAddNew}>
      ADD NEW PROCESS
    </button>
  </div>

  <OscdBasicDataTable
    items={filteredRows}
    {columns}
    loading={isEngineeringProcessesLoadingState.loading}
    errorMsg={engineeringProcessesErrorState.error}
    emptyText="No processes available."
    hasActions
    headerBg="#DAE3E6"
    rowBg="#ffffff"
  >
    {#snippet actions({ item })}
      <button
        type="button"
        class="icon"
        aria-label="View process"
        onclick={() => handleView(item)}
      >
        <OscdVisibilityIcon svgStyles="fill: #002B37; width: 100%; height: 100%;" />
      </button>

      {#if isRunningRow(item)}
        <button
          type="button"
          class="icon"
          aria-label="Start process"
          onclick={() => handleStart(item)}
        >
          <OscdPlayCircleIcon svgStyles="fill: #002B37; width: 100%; height: 100%;" />
        </button>
      {:else}
        <button
          type="button"
          class="icon"
          aria-label="Start process"
          onclick={() => handleStart(item)}
        >
          <OscdPlayCircleIcon svgStyles="fill: #002B37; width: 100%; height: 100%;" />
        </button>
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

  .icon {
    border: none;
    cursor: pointer;
    padding: 0;
    background: none;
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  .icon:last-child {
    margin-right: 0;
  }

  .banner-continue {
    border: none;
    cursor: pointer;
    padding: 8px 14px;
    background: #ffffff;
    color: #004552;
    border-radius: 4px;
    font-weight: 600;
  }

  .primary {
    border: none;
    cursor: pointer;
    padding: 8px 14px;
    background: #004552;
    color: #fff;
    border-radius: 4px;
    font-weight: 600;
  }
</style>
