<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail/engineering-process-detail.view.svelte';
  import EngineeringWorkflowDialog from './views/engineering-workflow-dialog.svelte';
  import type { Process, Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';
  import { onMount, onDestroy } from 'svelte';
  import { DialogHost } from '../../../libs/oscd-services/src/dialog';
  import { openDialog, updateDialogProps } from '../../../libs/oscd-services/src/dialog';
  import 'svelte-material-ui/bare.css';
  import { selectedProcessState } from './stores/process-store.svelte';

  interface Props {
    doc: XMLDocument | undefined;
    editCount?: any;
    host: HTMLElement;
  }

  let { doc, editCount = -1, host }: Props = $props();
  let processes: Process[] = $state([]);
  let loading = $state(true);
  let errorMsg = $state('');

  const SOURCE_URL = new URL('./assets/processes.xml', import.meta.url).href;
  const txt = (el: Element | null | undefined) => el?.textContent?.trim() ?? '';

  const parsePlugin = (pl: Element): Plugin => ({
    id:   txt(pl.querySelector('id')),
    name: txt(pl.querySelector('name')),
    src:  txt(pl.querySelector('src')),
  });

  const parseProcessesFromXml = (xml: XMLDocument): Process[] =>
    Array.from(xml.querySelectorAll('process')).map((p) => {
      const groups = Array.from(p.querySelectorAll('plugins-sequence > group'));

      const pluginGroups: PluginGroup[] | undefined = groups.length
        ? groups.map((g) => ({
          title: txt(g.querySelector(':scope > title')),
          plugins: Array.from(g.querySelectorAll(':scope > plugin')).map(parsePlugin),
        }))
        : undefined;

      const flatPlugins: Plugin[] = pluginGroups
        ? pluginGroups.flatMap((g) => g.plugins)
        : Array.from(p.querySelectorAll('plugins-sequence > plugin')).map(parsePlugin);

      return {
        id:          txt(p.querySelector(':scope > id')),
        version:     txt(p.querySelector(':scope > version')),
        name:        txt(p.querySelector(':scope > name')),
        description: txt(p.querySelector(':scope > description')),
        plugins:     flatPlugins,
        pluginGroups,
      };
    });

  let controller: AbortController | null = null;

  async function loadXml() {
    loading = true;
    errorMsg = '';

    const current = new AbortController();
    controller?.abort();
    controller = current;

    try {
      const res = await fetch(SOURCE_URL, { cache: 'no-cache', signal: current.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const text = await res.text();
      const xml = new DOMParser().parseFromString(text, 'application/xml');

      if (xml.querySelector('parsererror')) throw new Error('Invalid XML file format.');
      if (current !== controller) return;
      processes = parseProcessesFromXml(xml);
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return;
      processes = [];
      errorMsg = (e as Error).message || 'Failed to load processes.';
    } finally {
      if (current === controller) loading = false;
    }
  }

  onMount(loadXml);
  onDestroy(() => controller?.abort());

  function startProcess(process: Process) {
    if(!selectedProcessState.process){
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

  $effect(() => {
    console.log("selected process PLUGINS", selectedProcessState.process);
  })

  function goBack() {
    selectedProcessState.process = null;
  }
</script>

<DialogHost />

{#if selectedProcessState.process}
  <EngineeringProcessDetail handleBack={goBack} handleStart={startProcess} />
{:else}
  <EngineeringProcessesList
    {processes}
    {loading}
    {errorMsg}
    handleView={handleView}
    handleStart={startProcess}
  />
{/if}
