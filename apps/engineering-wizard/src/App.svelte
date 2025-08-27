<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail/engineering-process-detail.view.svelte';
  import EngineeringWorkflow from './views/engineering-workflow.view.svelte';
  import type { Process, Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';

  export let doc: XMLDocument | undefined;
  export let editCount = -1;
  export let host: HTMLElement;

  let processes: Process[] = [];
  let selected: Process | null = null;
  let running: Process | null = null;
  let loading = true;
  let errorMsg = '';

  const SRC = new URL('./assets/processes.xml', import.meta.url).href;
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

    controller?.abort();
    controller = new AbortController();

    try {
      const res = await fetch(SRC, { cache: 'no-cache', signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const text = await res.text();
      const xml = new DOMParser().parseFromString(text, 'application/xml');

      if (xml.querySelector('parsererror')) throw new Error('Invalid XML file format.');
      processes = parseProcessesFromXml(xml);
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return;
      processes = [];
      errorMsg = (e as Error).message || 'Failed to load processes.';
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadXml();
    return () => controller?.abort();
  });

  function startProcess(proc: Process) {
    running = proc;
    selected = null;
  }

  function handleView(e: CustomEvent<Process>) {
    selected = e.detail;
  }

  function handleStart(e: CustomEvent<Process>) {
    startProcess(e.detail);
  }

  function goBack() {
    selected = null;
  }

  function exitWorkflow() {
    running = null;
    selected = null;
  }
</script>

{#if running}
  <EngineeringWorkflow
    {doc}
    {editCount}
    {host}
    plugins={running.plugins}
    on:exit={exitWorkflow}
  />
{:else if selected}
  <EngineeringProcessDetail proc={selected} on:back={goBack} on:start={handleStart} />
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
