<script lang="ts">
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail.view.svelte';
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

  const parseProcessesFromXml = (xml: XMLDocument): Process[] =>
    Array.from(xml.getElementsByTagName('process')).map((p) => {
      const groupEls = Array.from(p.querySelectorAll('plugins-sequence > group'));

      let pluginGroups: PluginGroup[] | undefined;
      let flatPlugins: Plugin[] = [];

      if (groupEls.length) {
        pluginGroups = groupEls.map((g) => {
          const title = txt(g.querySelector(':scope > title'));
          const plugins: Plugin[] = Array.from(
            g.querySelectorAll(':scope > plugin')
          ).map((pl) => ({
            id:   txt(pl.querySelector('id')),
            name: txt(pl.querySelector('name')),
            src:  txt(pl.querySelector('src')),
          }));
          return { title, plugins };
        });

        flatPlugins = pluginGroups.flatMap((g) => g.plugins);
      } else {
        flatPlugins = Array.from(
          p.querySelectorAll('plugins-sequence > plugin')
        ).map((pl) => ({
          id:   txt(pl.querySelector('id')),
          name: txt(pl.querySelector('name')),
          src:  txt(pl.querySelector('src')),
        }));
      }

      return {
        id:          txt(p.querySelector(':scope > id')),
        version:     txt(p.querySelector(':scope > version')),
        name:        txt(p.querySelector(':scope > name')),
        description: txt(p.querySelector(':scope > description')),
        plugins: flatPlugins,
        pluginGroups,
      };
    });

  async function loadXml() {
    loading   = true;
    errorMsg  = '';
    try {
      const res = await fetch(SRC, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const xml = new DOMParser().parseFromString(await res.text(), 'application/xml');
      if (xml.querySelector('parsererror')) throw new Error('Invalid XML file format.');
      processes = parseProcessesFromXml(xml);
    } catch (e) {
      processes = [];
      errorMsg  = (e as Error).message || 'Failed to load processes.';
    } finally {
      loading = false;
    }
  }

  onMount(loadXml);

  function startProcess(proc: Process) {
    running  = proc;
    selected = null;
  }

  function onView(e: CustomEvent<Process>)  {
    selected = e.detail;
  }

  function onStart(e: CustomEvent<Process>) {
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
  <EngineeringProcessDetail proc={selected} on:back={goBack} on:start={onStart} />
{:else}
  <EngineeringProcessesList
    {processes}
    {loading}
    {errorMsg}
    on:view={onView}
    on:start={onStart}
  />
{/if}
