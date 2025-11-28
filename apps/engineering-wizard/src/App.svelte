<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail/engineering-process-detail.view.svelte';
  import EngineeringWorkflowDialog from './views/engineering-workflow-dialog.svelte';
  import AddNewProcess from './views/add-new-process/add-new-process.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';
  import { DialogHost, openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import 'svelte-material-ui/bare.css';
  import { getPluginsForProcess, getProcesses } from './services/engineering-process.svelte.ts';
  import { processEditModeState, selectedProcessState } from './services/engineering-process.svelte';

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

  function startProcess(process: Process) {
    if (!selectedProcessState.process) {
      selectedProcessState.process = process;
    }
    const plugins = getPluginsForProcess(selectedProcessState.process);
    openDialog(EngineeringWorkflowDialog, { doc, editCount, host, plugins, nsdoc, docId, docName, docs, locale, oscdApi });
  }

  $effect(() => {
    updateDialogProps({ editCount, doc });
  });

  function handleView(process: Process) {
    selectedProcessState.process = process;
  }

  function goBack() {
    selectedProcessState.process = null;
  }

  function addNewProcess() {
    processEditModeState.isEditing = false;
    selectedProcessState.process = null;
    isCreatingProcess = true;
  }

  function cancelCreate() {
    processEditModeState.isEditing = false;
    isCreatingProcess = false;
  }

  function handleCreated(proc: Process) {
    isCreatingProcess = false;
    selectedProcessState.process = proc;
  }
</script>

<DialogHost />

{#if isCreatingProcess}
  <AddNewProcess handleCancel={cancelCreate} handleSaved={handleCreated} />
{:else if selectedProcessState.process}
  <EngineeringProcessDetail handleBack={goBack} handleStart={startProcess} />
{:else}
  <EngineeringProcessesList
    handleView={handleView}
    handleStart={startProcess}
    handleAddNew={addNewProcess}
  />
{/if}
