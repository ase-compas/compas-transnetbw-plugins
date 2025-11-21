<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail/engineering-process-detail.view.svelte';
  import EngineeringWorkflowDialog from './views/engineering-workflow-dialog.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';
  import { DialogHost, openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import 'svelte-material-ui/bare.css';
  import {
    compasPluginsStore,
    getPluginsForProcess,
    getProcesses,
    processesFromXmlStore
  } from './services/engineering-process.svelte.ts';
  import { selectedProcessState } from './services/engineering-process.svelte';
  import PluginHost from './components/shared/PluginHost.svelte';
  import { derived } from 'svelte/store';

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
    host: HTMLElement;
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

  // const plugin = plugins[0];

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

{#each processesFromXmlStore.processes as process}
  <p>{process.name}</p>

{/each}

{#each compasPluginsStore.compasPlugins as plugin}
  <p>{plugin.name}</p>
{/each}
<!--<DialogHost />-->

<!--{#if selectedProcessState.process}-->
<!--  <EngineeringProcessDetail handleBack={goBack} handleStart={startProcess} />-->
<!--{:else}-->
<!--  <EngineeringProcessesList-->
<!--    handleView={handleView}-->
<!--    handleStart={startProcess}-->
<!--  />-->
<!--{/if}-->

<!--<PluginHost-->
<!--  {plugin}-->
<!--  {doc}-->
<!--  {editCount}-->
<!--  {plugins}-->
<!--  {nsdoc}-->
<!--  {docName}-->
<!--  {docId}-->
<!--  {docs}-->
<!--  {locale}-->
<!--  {oscdApi}-->
<!--/>-->
