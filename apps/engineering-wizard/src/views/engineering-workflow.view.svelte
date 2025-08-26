<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import WorkflowBack from '../components/engineering-workflow/WorkflowBack.svelte';
  import WorkflowStepper from '../components/engineering-workflow/WorkflowStepper.svelte';
  import type { ViewPlugin } from '../types/view-plugin';
  import {
    ensureCustomElementDefined,
    preloadAllPlugins,
  } from '../services/engineering-workflow.service';
  import { editorTabsVisible } from '../stores/editor-tabs.store';

  export let doc: XMLDocument | undefined;
  export let editCount = -1;
  export let host: HTMLElement;
  export let plugins: ViewPlugin[] = [];

  let tagName: string | null = null;
  let visited: string[] = [];

  const statuses: ('check' | 'warning' | 'error')[] = ['check', 'warning', 'error'];
  let pluginStatus: Record<string, 'check' | 'warning' | 'error'> = {};

  const dispatch = createEventDispatcher<any>();

  async function loadPlugin(plugin: ViewPlugin) {
    await ensureCustomElementDefined(plugin);

    tagName = plugin.id;

    if (!visited.includes(plugin.id)) {
      visited = [...visited, plugin.id];
      const idx = plugins.findIndex(p => p.id === plugin.id);
      pluginStatus = {
        ...pluginStatus,
        [plugin.id]: statuses[idx % statuses.length],
      };
    }
  }

  function nextPlugin()     { advance(+1); }
  function previousPlugin() { advance(-1); }
  function advance(step: number) {
    const idx = plugins.findIndex(p => p.id === tagName);
    loadPlugin(plugins[(idx + step + plugins.length) % plugins.length]);
  }

  function setProps(node: HTMLElement, props: any) {
    Object.assign(node, props);
    return { update: (p: any) => Object.assign(node, p) };
  }

  $: tooltipText = plugins.reduce<Record<string, string>>((map, p) => {
    const status = pluginStatus[p.id];
    map[p.id] = status ?? '';
    return map;
  }, {});

  onMount(() => {
    if (plugins.length) {
      preloadAllPlugins(plugins).catch(console.error);
      loadPlugin(plugins[0]);
    }
    editorTabsVisible.set(false);
  });

  function exitWorkflow() {
    editorTabsVisible.set(true);
    dispatch('exit');
  }
</script>

<div class="stepper">
  <WorkflowBack on:back={exitWorkflow} />

  <WorkflowStepper
    {plugins}
    visited={visited}
    currentId={tagName}
    {pluginStatus}
    on:select={(e) => loadPlugin(e.detail)}
  />

  <div class="stepper-navigation">
    <button on:click={previousPlugin} class="back-button">Back</button>
    <button on:click={nextPlugin}     class="next-button">Next</button>
  </div>
</div>

{#if tagName}
  <svelte:element this={tagName} use:setProps={{ doc, editCount }} />
{/if}

<style>
  * {
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }

  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background-color: #004552;
  }

  .stepper-navigation {
    display: flex;
    gap: 0.8rem;
    justify-self: end;
  }

  .back-button,
  .next-button {
    height: 36px;
    width: 70px;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }

  .back-button {
    color: white;
    background-color: #6B9197;
  }

  .next-button {
    background-color: white;
    color: #004552;
  }
</style>
