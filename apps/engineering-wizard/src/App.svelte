<script lang="ts">
  import ProcessesListView from './views/ProcessesList.view.svelte';
  import ProcessEditView from './views/engineering-process-detail/ProcessEdit.view.svelte';
  import WorkflowDialog from './features/workflow/components/dialogs/WorkflowDialog.svelte';
  import AddProcessView from './views/AddProcess.view.svelte';
  import { type Process } from '@oscd-transnet-plugins/shared';
  import { onMount, untrack } from 'svelte';
  import { DialogHost, openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import { OscdDiscardChangesDialog, OscdToastHost } from '@oscd-transnet-plugins/oscd-component';
  import {
    loadEngineeringProcesses,
    refreshEngineeringProcesses,
  } from './features/processes/repository.svelte';
  import { readEngineeringWorkflowState, writeEngineeringWorkflowState } from './features/workflow/document-state';
  import {
    engineeringProcessEditing,
    engineeringProcesses,
    runningEngineeringProcess,
    selectedEngineeringProcess
  } from './features/processes/stores.svelte';
  import { setRunningProcess } from './features/processes/mutations.svelte';
  import { getPluginsForProcess } from './features/processes/selectors';
  import { documentStore, updateDocumentStore } from './documentStore.svelte';
  import { validationCoordinator } from './services/validationCoordinator.svelte';

  import 'svelte-material-ui/bare.css';
  import "../public/material-icon.css"
  import "../public/smui.css"
  import "../public/global.css"

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    host?: HTMLElement;
    plugins?: { src: string }[];
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

  function restoreWorkflowState(document: XMLDocument | undefined) {
    if (!document) return;
    try {
      const { processId, lastPluginId } = readEngineeringWorkflowState(document);
      if (processId) {
        const match = engineeringProcesses.processes.find(p => p.id === processId);
        if (match) {
          setRunningProcess(match, lastPluginId ?? null);
        }
      }
    } catch (e) {
      console.warn('[EngineeringWizard] Failed to restore workflow state:', e);
    }
  }

  onMount(async () => {
    try {
      await loadEngineeringProcesses();
    } catch {
      // Status is already tracked in engineeringProcessesStatus.error
    }
    restoreWorkflowState(doc);
  });

  // Re-read persisted workflow state when the host swaps the document
  let previousDocRef: XMLDocument | undefined;
  $effect(() => {
    if (doc && doc !== previousDocRef) {
      previousDocRef = doc;
      restoreWorkflowState(doc);
    }
  });

  async function startProcess(process: Process) {
    const running = runningEngineeringProcess.process;
    const isNewProcess = !running || running.id !== process.id;

    if (running && isNewProcess) {
      const result = await openDialog(OscdDiscardChangesDialog as any, {
        title: 'Start new process?',
        message: 'Starting a new process will stop the current one. Any unsaved progress will be lost.',
        discardActionText: 'Start new process',
        cancelActionText: 'Cancel',
      });

      if (result?.type !== 'confirm') return;
    }

    if (isNewProcess) {
      setRunningProcess(process, null);
    }

    if (doc && host) {
      writeEngineeringWorkflowState(doc, host, {
        processId: process.id,
        ...(isNewProcess && { lastPluginId: null }),
      });
    }

    selectedEngineeringProcess.process = process;

    if (!selectedEngineeringProcess.process) return;
    if (doc) {
      validationCoordinator.runNow(selectedEngineeringProcess.process, doc);
    }
    const viewPlugins = getPluginsForProcess(selectedEngineeringProcess.process);
    await openDialog(WorkflowDialog as any, { doc, editCount, host, plugins: viewPlugins, nsdoc, docId, docName, docs, locale, oscdApi });
    if (doc && host) {
      writeEngineeringWorkflowState(doc, host, {
        lastPluginId: runningEngineeringProcess.lastSelectedPluginId,
      });
    }
    selectedEngineeringProcess.process = null;
  }

  $effect(() => {
    updateDialogProps({ editCount, doc });
    updateDocumentStore(doc ?? null, editCount);
  });

  $effect(() => {
    documentStore.revision;
    const document = documentStore.doc;
    untrack(() => {
      validationCoordinator.request(runningEngineeringProcess.process, document);
    });
  });

  function handleEdit(process: Process) {
    engineeringProcessEditing.isEditing = true;
    selectedEngineeringProcess.process = process;
  }

  async function refreshProcesses() {
    try {
      await refreshEngineeringProcesses();
      restoreWorkflowState(doc);
    } catch {
      // Status is already tracked in engineeringProcessesStatus.error
    }
  }

  function addNewProcess() {
    engineeringProcessEditing.isEditing = false;
    selectedEngineeringProcess.process = null;
    isCreatingProcess = true;
  }

  async function cancelCreate() {
    engineeringProcessEditing.isEditing = false;
    await refreshProcesses();
    isCreatingProcess = false;
  }

  async function handleCreated(_proc: Process) {
    await refreshProcesses();
    isCreatingProcess = false;
  }
</script>

<DialogHost />

<div class="app-root">
  {#if isCreatingProcess}
    <AddProcessView handleCancel={cancelCreate} handleSaved={handleCreated} />
  {:else if selectedEngineeringProcess.process && engineeringProcessEditing.isEditing}
    <ProcessEditView onReturnToList={refreshProcesses} />
  {:else}
    <ProcessesListView
      handleView={handleEdit}
      handleEdit={handleEdit}
      handleStart={startProcess}
      handleAddNew={addNewProcess}
      docName={docName}
    />
  {/if}
</div>
<OscdToastHost />
<style>
  .app-root {
    display: contents;
  }
</style>
