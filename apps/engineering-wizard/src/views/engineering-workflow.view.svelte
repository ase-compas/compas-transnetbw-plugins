<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import WorkflowBack from '../components/engineering-workflow/WorkflowBack.svelte';
  import WorkflowStepper from '../components/engineering-workflow/WorkflowStepper.svelte';
  import type { ViewPlugin } from '../types/view-plugin';
  import { ensureCustomElementDefined, preloadAllPlugins } from '../services/engineering-workflow.service';
  import { editorTabsVisible } from '../stores/editor-tabs.store';

  interface Props {
    doc: XMLDocument | undefined;
    editCount?: any;
    host: HTMLElement;
    plugins?: ViewPlugin[];
  }

  let {
    doc,
    editCount = -1,
    host,
    plugins = []
  }: Props = $props();

  type Status = 'check' | 'warning' | 'error';
  const STATUSES: Status[] = ['check', 'warning', 'error'];

  let tagName: string | null = $state(null);
  let visited: string[] = $state([]);
  let pluginStatus: Record<string, Status> = $state({});

  const dispatch = createEventDispatcher<{ exit: void }>();

  async function selectPlugin(plugin?: ViewPlugin) {
    if (!plugin) return;
    await ensureCustomElementDefined(plugin);
    tagName = plugin.id;

    if (!visited.includes(plugin.id)) {
      visited = [...visited, plugin.id];
      const idx = plugins.findIndex((p) => p.id === plugin.id);
      pluginStatus = { ...pluginStatus, [plugin.id]: STATUSES[idx % STATUSES.length] };
    }
  }

  let currentIndex = $derived(tagName ? plugins.findIndex((p) => p.id === tagName) : -1);

  function advance(step: number) {
    if (!plugins.length) return;
    const next = currentIndex < 0 ? 0 : (currentIndex + step + plugins.length) % plugins.length;
    selectPlugin(plugins[next]);
  }

  function nextPlugin()     { advance(1); }
  function previousPlugin() { advance(-1); }

  function setProps(node: HTMLElement, props: any) {
    Object.assign(node, props);
    return { update: (p: any) => Object.assign(node, p) };
  }

  $effect(() => {
    if (plugins.length && (currentIndex === -1 || !plugins.some((p) => p.id === tagName))) {
      selectPlugin(plugins[0]);
    }
  });

  onMount(() => {
    if (plugins.length) preloadAllPlugins(plugins).catch(console.error);
    editorTabsVisible.set(false);
  });

  onDestroy(() => {
    editorTabsVisible.set(true);
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
    on:select={(e) => selectPlugin(e.detail)}
  />

  <div class="stepper-navigation">
    <button type="button" onclick={previousPlugin} class="back-button" aria-label="Previous plugin" disabled={!plugins.length}>Back</button>
    <button type="button" onclick={nextPlugin}     class="next-button" aria-label="Next plugin"      disabled={!plugins.length}>Next</button>
  </div>
</div>

{#if tagName}
  <div class="plugin-container">
    <svelte:element this={tagName} use:setProps={{ doc, editCount }} />
  </div>
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
    background-color: var(--primary-base);
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
    color: var(--primary-base);
  }

  .plugin-container {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
</style>
