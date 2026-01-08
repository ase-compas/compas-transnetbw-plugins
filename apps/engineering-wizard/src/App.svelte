<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail/engineering-process-detail.view.svelte';
  import EngineeringWorkflowDialog from './views/engineering-workflow-dialog.svelte';
  import AddNewProcess from './views/add-new-process/add-new-process.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';
  import { DialogHost, openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import 'svelte-material-ui/bare.css';
  import {
    getPluginsForProcess,
    getProcesses, isEngineeringProcessEditingState, runningEngineeringProcessState,
    selectedEngineeringProcessState,
    setRunningProcess
  } from './services/engineering-process.svelte.ts';
  import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';

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
    await getProcesses();
  });

  async function startProcess(process: Process) {
    const running = runningEngineeringProcessState.process;

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

      // New process confirmed: reset running state
      setRunningProcess(process, null);
    } else if (!running) {
      // No running process: set it now
      setRunningProcess(process, null);
    }

    if (!selectedEngineeringProcessState.process) {
      selectedEngineeringProcessState.process = process;
    }

    const plugins = getPluginsForProcess(selectedEngineeringProcessState.process);
    openDialog(EngineeringWorkflowDialog as any, { doc, editCount, host, plugins, nsdoc, docId, docName, docs, locale, oscdApi });
  }

  $effect(() => {
    updateDialogProps({ editCount, doc });
  });

  function handleView(process: Process) {
    selectedEngineeringProcessState.process = process;
  }

  function goBack() {
    selectedEngineeringProcessState.process = null;
  }

  function addNewProcess() {
    isEngineeringProcessEditingState.isEditing = false;
    selectedEngineeringProcessState.process = null;
    isCreatingProcess = true;
  }

  function cancelCreate() {
    isEngineeringProcessEditingState.isEditing = false;
    isCreatingProcess = false;
  }

  function handleCreated(proc: Process) {
    isCreatingProcess = false;
    selectedEngineeringProcessState.process = proc;
  }
</script>

<DialogHost />

{#if isCreatingProcess}
  <AddNewProcess handleCancel={cancelCreate} handleSaved={handleCreated} />
{:else if selectedEngineeringProcessState.process}
  <EngineeringProcessDetail handleBack={goBack} handleStart={startProcess} />
{:else}
  <EngineeringProcessesList
    handleView={handleView}
    handleStart={startProcess}
    handleAddNew={addNewProcess}
  />
{/if}
