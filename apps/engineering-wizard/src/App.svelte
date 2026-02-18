<script lang="ts">
  import ProcessesListView from './views/ProcessesList.view.svelte';
  import ProcessDetailView from './views/engineering-process-detail/ProcessDetail.view.svelte';
  import WorkflowDialog from './features/workflow/components/dialogs/WorkflowDialog.svelte';
  import AddProcessView from './views/AddProcess.view.svelte';
  import { getXPathRules, type Process } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';
  import { DialogHost, openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import 'svelte-material-ui/bare.css';
  import { OscdConfirmDialog, OscdToastHost } from '@oscd-transnet-plugins/oscd-component';
  import { loadEngineeringProcesses } from './features/processes/repository.svelte';
  import { readEngineeringWorkflowState, writeEngineeringWorkflowState } from './features/workflow/document-state';
  import {
    engineeringProcessEditing,
    engineeringProcesses,
    runningEngineeringProcess,
    selectedEngineeringProcess
  } from './features/processes/stores.svelte';
  import { setRunningProcess } from './features/processes/mutations.svelte';
  import { getPluginsForProcess } from './features/processes/selectors';

  interface Plugin {
    src: string;
  }

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    host?: HTMLElement;
    plugins?: Plugin[];
    docId?: string;
    pluginId?: string;
    docName?: string;
    nsdoc?: any;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: any;
  }

  let {
    doc,
    editCount,
    plugins,
    nsdoc,
    docName,
    docId,
    docs,
    locale,
    oscdApi,
    host
  }: Props = $props();

  let isCreatingProcess = $state(false);

  onMount(async () => {
    await loadEngineeringProcesses();

    try {
      if (doc) {
        const { processId, lastPluginId } = readEngineeringWorkflowState(doc);
        if (processId) {
          const match = (engineeringProcesses.processes ?? []).find(p => p.id === processId);
          if (match) {
            setRunningProcess(match, lastPluginId ?? null);
          }
        }
      }
    } catch (e) {

    }
  });

  async function startProcess(process: Process) {
    const running = runningEngineeringProcess.process;

    if (running && running.id !== process.id) {
      const result = await openDialog(OscdConfirmDialog as any, {
        title: 'Do you want to start a new process?',
        message: 'Starting a new process will stop the current running process. Any unsaved progress will be lost.',
        confirmActionText: 'Start New Process',
        cancelActionText: 'Cancel',
      });

      if(result.type === 'cancel') {
        return;
      }

      setRunningProcess(process, null);
      if (doc && host) writeEngineeringWorkflowState(doc, host, { processId: process.id, lastPluginId: null });
    } else if (!running) {
      setRunningProcess(process, null);
      if (doc && host) writeEngineeringWorkflowState(doc, host, { processId: process.id, lastPluginId: null });
    } else {
      if (doc && host) writeEngineeringWorkflowState(doc, host, { processId: process.id });
    }

    if (!selectedEngineeringProcess.process || selectedEngineeringProcess.process.id !== process.id) {
      selectedEngineeringProcess.process = process;
    }

    const plugins = getPluginsForProcess(selectedEngineeringProcess.process);
    openDialog(WorkflowDialog as any, { doc, editCount, host, plugins, nsdoc, docId, docName, docs, locale, oscdApi });
  }

  $effect(() => {
    updateDialogProps({ editCount, doc });
  });

  function handleView(process: Process) {
    selectedEngineeringProcess.process = process;
  }

  function handleEdit(process: Process) {
    engineeringProcessEditing.isEditing = true;
    selectedEngineeringProcess.process = process;
  }

  function goBack() {
    selectedEngineeringProcess.process = null;
  }

  function addNewProcess() {
    engineeringProcessEditing.isEditing = false;
    selectedEngineeringProcess.process = null;
    isCreatingProcess = true;
  }

  function cancelCreate() {
    engineeringProcessEditing.isEditing = false;
    isCreatingProcess = false;
  }

  function handleCreated(proc: Process) {
    isCreatingProcess = false;
    selectedEngineeringProcess.process = proc;
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/material-icon.css" />
</svelte:head>

<DialogHost />

{#if isCreatingProcess}
  <AddProcessView handleCancel={cancelCreate} handleSaved={handleCreated} />
{:else if selectedEngineeringProcess.process}
  <ProcessDetailView handleBack={goBack} handleStart={startProcess} />
{:else}
  <ProcessesListView
    handleView={handleView}
    handleEdit={handleEdit}
    handleStart={startProcess}
    handleAddNew={addNewProcess}
    docName={docName}
  />
{/if}
<OscdToastHost />
<style>
</style>
