<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail/engineering-process-detail.view.svelte';
  import EngineeringWorkflowDialog from './views/engineering-workflow-dialog.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';
  import { DialogHost, openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import 'svelte-material-ui/bare.css';
  import { getPluginsForProcess, getProcesses, setInternalPlugins } from './services/engineering-process.svelte.ts';
  import { selectedProcessState } from './services/engineering-process.svelte';

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

  const plugin = plugins[1];

  onMount(async () => {
    await getProcesses();
    setInternalPlugins(plugins)
  });

  $effect(() => {
    console.log("from app: ", doc, editCount)
  })

  function startProcess(process: Process) {
    if (!selectedProcessState.process) {
      selectedProcessState.process = process;
    }
    const plugins = getPluginsForProcess(selectedProcessState.process);
    openDialog(EngineeringWorkflowDialog, { doc, editCount, host, plugins, nsdoc, docId, docName, docs, locale, oscdApi });
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

