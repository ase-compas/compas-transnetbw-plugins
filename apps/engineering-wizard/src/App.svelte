<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail/engineering-process-detail.view.svelte';
  import EngineeringWorkflowDialog from './views/engineering-workflow-dialog.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';
  import { DialogHost, openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import 'svelte-material-ui/bare.css';
  import { selectedProcessState } from './stores/process-store.svelte';
  import { getProcesses, processesStore, processesLoadingStore, processesErrorStore } from './services/engineering-process.svelte.ts';

  interface Props {
    doc: XMLDocument | undefined;
    editCount?: any;
    host: HTMLElement;
  }

  let { doc, editCount = -1, host }: Props = $props();

  onMount(() => {
    getProcesses().catch((e) => {
      console.error('Failed to load processes', e);
    });
  });

  function startProcess(process: Process) {
    if (!selectedProcessState.process) {
      selectedProcessState.process = process;
    }
    openDialog(EngineeringWorkflowDialog, { doc, editCount, host, plugins: selectedProcessState.process.plugins });
    selectedProcessState.process = null;
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
</script>

<DialogHost />

{#if selectedProcessState.process}
  <EngineeringProcessDetail handleBack={goBack} handleStart={startProcess} />
{:else}
  <EngineeringProcessesList
    handleView={handleView}
    handleStart={startProcess}
  />
{/if}
