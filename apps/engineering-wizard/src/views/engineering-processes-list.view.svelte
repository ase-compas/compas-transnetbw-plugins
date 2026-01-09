<script lang="ts">
  import { OscdBasicDataTable } from '../../../../libs/oscd-component/src';
  import Textfield from '@smui/textfield';
  import { OscdInfoIcon, OscdPlayCircleIcon, OscdVisibilityIcon } from '../../../../libs/oscd-icons/src';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { engineeringProcessesErrorState, isEngineeringProcessesLoadingState, engineeringProcessesState, runningEngineeringProcessState } from '../services/engineering-process.svelte';

  interface Props {
    handleStart: (process: Process) => void;
    handleView: (process: Process) => void;
    handleAddNew: () => void;
    docName?: string;
  }

  let {
    handleStart,
    handleView,
    handleAddNew,
    docName
  }: Props = $props();

  let searchQuery = $state('');

  let searchLower = $derived(searchQuery.trim().toLowerCase());
  let rows = $derived((engineeringProcessesState.processes ?? []).map((p) => ({ ...p, displayName: p.name || p.id })));
  let filteredRows = $derived(searchLower
    ? rows.filter((p) => (p.displayName ?? '').toLowerCase().includes(searchLower))
    : rows);

  const columns: { key: string; header: string }[] = [
    { key: 'displayName', header: 'Name' },
    { key: 'description', header: 'Description' },
  ];

  const runningProc = $derived(runningEngineeringProcessState.process);
  const runningProcName = $derived(runningProc?.name || runningProc?.id || '');
  const lastSelectedPluginId = $derived(runningEngineeringProcessState.lastSelectedPluginId);

  function getLastSelectedPluginName(proc: Process | null, id: string | null): string {
    if (!id || !proc?.pluginGroups?.length) return '';
    for (const g of proc.pluginGroups) {
      const pl = g.plugins?.find((p) => p.id === id);
      if (pl) return pl.name || pl.id;
    }
    return '';
  }

  const lastSelectedPluginName = $derived(getLastSelectedPluginName(runningProc, lastSelectedPluginId));

  const bannerText = $derived(
    `A process “${runningProcName}” has already been started${docName ? ` for the ${docName}` : ''}${lastSelectedPluginName ? ` at “${lastSelectedPluginName}”` : ''}. Would you like to continue where you left off?`
  );

  function continueRunning() {
    if (runningProc) handleStart(runningProc);
  }

  function isRunningRow(item: Process): boolean {
    return !!(runningProc && item?.id === runningProc.id);
  }
</script>

<div class="processes">
  {#if runningProc}
    <div class="process-banner">
      <div class="process-banner__info">
        <OscdInfoIcon />
        <span>{bannerText}</span>
      </div>
      <button
        type="button"
        class="banner-continue"
        onclick={continueRunning}
      >
        CONTINUE
      </button>
    </div>
  {/if}

  <div class="process-toolbar">
    <Textfield
      bind:value={searchQuery}
      variant="outlined"
      label="Search Processes"
    />
    <button
      type="button"
      class="primary"
      onclick={handleAddNew}
    >
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
            class="continue-btn"
            aria-label="Continue process"
            onclick={() => handleStart(item)}
          >
            Continue
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
    padding: 0 16px;
    height: 36px;
    min-width: 110px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    color: #004552;
    border-radius: 4px;
    font-weight: 600;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  }

  .continue-btn {
    border: none;
    cursor: pointer;
    padding: 6px 12px;
    background: #004552;
    color: #fff;
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
