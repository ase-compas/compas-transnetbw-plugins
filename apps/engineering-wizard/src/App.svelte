<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail/engineering-process-detail.view.svelte';
  import EngineeringWorkflowDialog from './views/engineering-workflow-dialog.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';
  import { DialogHost, openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import 'svelte-material-ui/bare.css';
  import { getPluginsForProcess, getProcesses } from './services/engineering-process.svelte.ts';
  import { selectedProcessState } from './services/engineering-process.svelte';

  interface Props {
    doc: XMLDocument | undefined;
    editCount?: any;
    host: HTMLElement;
  }

  let { doc, editCount = -1, host }: Props = $props();

  onMount(async () => {
    await getProcesses();
  });

  function startProcess(process: Process) {
    if (!selectedProcessState.process) {
      selectedProcessState.process = process;
    }
    const plugins = getPluginsForProcess(selectedProcessState.process);
    openDialog(EngineeringWorkflowDialog, { doc, editCount, host, plugins });
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
