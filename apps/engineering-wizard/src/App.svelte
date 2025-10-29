<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail/engineering-process-detail.view.svelte';
  import EngineeringWorkflowDialog from './views/engineering-workflow-dialog.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';
  import { DialogHost } from '../../../libs/oscd-services/src/dialog';
  import { openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import {
    getProcesses,
    processesLoadingStore,
    processesErrorStore,
    processesStore
  } from './services/engineering-process.service';

  export let doc: XMLDocument | undefined;
  export let editCount = -1;
  export let host: HTMLElement;

  let processes: Process[] = [];
  let selectedProcess: Process | null = null;
  let loading = true;
  let errorMsg = '';

  $: processes = $processesStore;
  $: loading = $processesLoadingStore;
  $: errorMsg = $processesErrorStore;

  onMount(() => {
    getProcesses();
  });

  function startProcess(proc: Process) {
    openDialog(EngineeringWorkflowDialog, { doc, editCount, host, plugins: proc.plugins });
    selectedProcess = null;
  }

  $: updateDialogProps({ editCount, doc });

  function handleView(e: CustomEvent<Process>) {
    selectedProcess = e.detail;
  }

  function handleStart(e: CustomEvent<Process>) {
    startProcess(e.detail);
  }

  function goBack() {
    selectedProcess = null;
  }
</script>

<DialogHost />

{#if selectedProcess}
  <EngineeringProcessDetail {selectedProcess} on:back={goBack} on:start={handleStart} />
{:else}
  <EngineeringProcessesList
    {processes}
    {loading}
    {errorMsg}
    on:view={handleView}
    on:start={handleStart}
  />
{/if}

<style>
  @import '/material-icon.css';
</style>
