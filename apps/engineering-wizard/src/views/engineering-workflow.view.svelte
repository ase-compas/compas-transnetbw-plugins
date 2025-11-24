<script lang="ts">
  import { onMount } from 'svelte';
  import WorkflowBack from '../components/engineering-workflow/WorkflowBack.svelte';
  import WorkflowStepper from '../components/engineering-workflow/WorkflowStepper.svelte';
  import type { ViewPlugin } from '../types/view-plugin';
  import {
    ensureCustomElementDefined,
    preloadAllPlugins,
  } from '../services/engineering-workflow.service';
  import { editorTabsVisible } from '../stores/editor-tabs.store';
  import PluginHost from '../components/shared/PluginHost.svelte';

  type Status = 'check' | 'warning' | 'error';
  const STATUSES: readonly Status[] = ['check', 'warning', 'error'] as const;

  interface Props {
    doc: XMLDocument | undefined;
    editCount?: any;
    host: HTMLElement;
    plugins?: ViewPlugin[];
    docName?: string;
    docId?: string;
    nsdoc?: any;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: any;
    onExit?: () => void;
  }

  let {
    doc,
    editCount = -1,
    nsdoc,
    docName,
    docId,
    docs,
    locale,
    oscdApi,
    host,
    plugins = [],
    onExit,
  }: Props = $props();

  let tagName: string | null = $state(null);
  let selectedPlugin= $state<{plugin: ViewPlugin | null}>({ plugin: null });
  let visited: string[] = $state([]);
  let pluginStatus: Record<string, Status> = $state({});

  let hasPlugins = $derived(plugins.length > 0);

  let currentIndex = $derived(
    selectedPlugin.plugin && hasPlugins ? plugins.findIndex((p) => p.id === selectedPlugin.plugin.id) : -1,
  );

  async function selectPlugin(plugin?: ViewPlugin) {
    if (!plugin) return;

    await ensureCustomElementDefined(plugin);

    const { id } = plugin;
    tagName = id;
    selectedPlugin.plugin = plugin;

    if (!visited.includes(id)) {
      visited = [...visited, id];

      const index = plugins.findIndex((p) => p.id === id);
      if (index !== -1) {
        const status = STATUSES[index % STATUSES.length];
        pluginStatus = { ...pluginStatus, [id]: status };
      }
    }
  }

  function advance(step: number) {
    if (!hasPlugins) return;

    const baseIndex = currentIndex < 0 ? 0 : currentIndex;
    const nextIndex = (baseIndex + step + plugins.length) % plugins.length;

    void selectPlugin(plugins[nextIndex]);
  }

  const nextPlugin = () => advance(1);
  const previousPlugin = () => advance(-1);

  function setProps(node: HTMLElement, props: Record<string, unknown>) {
    Object.assign(node, props);

    return {
      update(newProps: Record<string, unknown>) {
        Object.assign(node, newProps);
      },
    };
  }

  $effect(() => {
    if (!hasPlugins) {
      selectedPlugin.plugin = null;
      tagName = null;
      visited = [];
      pluginStatus = {};
      return;
    }

    if (currentIndex === -1) {
      void selectPlugin(plugins[0]);
    }
  });

  onMount(() => {
    if (plugins.length) {
      preloadAllPlugins(plugins).catch(console.error);
    }

    editorTabsVisible.set(false);

    return () => {
      editorTabsVisible.set(true);
    };
  });

  function exitWorkflow() {
    editorTabsVisible.set(true);
    onExit();
  }
</script>

<div class="stepper">
  <WorkflowBack onBack={exitWorkflow} />

  <WorkflowStepper
    {plugins}
    {visited}
    currentId={selectedPlugin?.plugin?.id ?? null}
    {pluginStatus}
    onSelect={selectPlugin}
  />

  <div class="stepper-navigation">
    <button
      type="button"
      class="back-button"
      onclick={previousPlugin}
      aria-label="Previous plugin"
      disabled={!hasPlugins}
    >
      Back
    </button>

    <button
      type="button"
      class="next-button"
      onclick={nextPlugin}
      aria-label="Next plugin"
      disabled={!hasPlugins}
    >
      Next
    </button>
  </div>
</div>

{#if selectedPlugin.plugin}
  <div class="plugin-container">
    {#if selectedPlugin.plugin.type === 'internal'}
      <!-- render internal plugin -->
      <PluginHost
        plugin={selectedPlugin.plugin}
        doc={doc}
        {editCount}
        {plugins}
        {nsdoc}
        {docName}
        {docId}
        {docs}
        {locale}
        {oscdApi}
      />
    {:else}
      <!-- render external plugin -->
      <svelte:element this={selectedPlugin.plugin.id} use:setProps={{ doc, editCount }} />
    {/if}
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
    margin: 0;
  }

  .back-button {
    color: white;
    background-color: #6b9197;
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
