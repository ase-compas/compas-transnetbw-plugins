<script lang="ts">
  import { onMount } from 'svelte';
  import WorkflowBack from '../components/engineering-workflow/WorkflowBack.svelte';
  import type { ViewPlugin } from '../types/view-plugin';
  import { ensureCustomElementDefined, preloadAllPlugins } from '../services/engineering-workflow.service';
  import { editorTabsVisible } from '../stores/editor-tabs.store';
  import PluginHost from '../components/shared/PluginHost.svelte';
  import { selectedEngineeringProcessState, runningEngineeringProcessState, setLastSelectedPluginId } from '../services/engineering-process.svelte';
  import PluginGroupsStepper from '../components/engineering-process-detail/PluginGroupsStepper.svelte';

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

  let selectedPlugin = $state<{ plugin: ViewPlugin | null }>({ plugin: null });
  let visited: string[] = $state([]);
  let pluginStatus: Record<string, Status> = $state({});

  let hasPlugins = $derived(plugins.length > 0);

  let currentIndex = $derived(
    selectedPlugin.plugin && hasPlugins
      ? plugins.findIndex((p) => p.id === selectedPlugin.plugin!.id)
      : -1,
  );

  let pluginGroups = $derived(selectedEngineeringProcessState.process.pluginGroups);

  let selectedGroupIndex: number | null = $state(null);
  let selectedPluginIndex: number | null = $state(null);

  function findGroupAndPluginIndexById(id: string): {
    groupIndex: number | null;
    pluginIndex: number | null;
  } {
    if (!pluginGroups?.length) return { groupIndex: null, pluginIndex: null };
    for (let gi = 0; gi < pluginGroups.length; gi++) {
      const group = pluginGroups[gi];
      const pi = group.plugins?.findIndex((plg) => plg.id === id) ?? -1;
      if (pi >= 0) return { groupIndex: gi, pluginIndex: pi };
    }
    return { groupIndex: null, pluginIndex: null };
  }

  async function selectPlugin(plugin?: ViewPlugin) {
    if (!plugin) return;

    await ensureCustomElementDefined(plugin);

    selectedPlugin.plugin = plugin;

    const { groupIndex, pluginIndex } = findGroupAndPluginIndexById(plugin.id);
    selectedGroupIndex = groupIndex;
    selectedPluginIndex = pluginIndex;

    // persist last selected plugin id for resume
    setLastSelectedPluginId(plugin.id);

    if (!visited.includes(plugin.id)) {
      visited = [...visited, plugin.id];

      const index = plugins.findIndex((p) => p.id === plugin.id);
      if (index !== -1) {
        const status = STATUSES[index % STATUSES.length];
        pluginStatus = { ...pluginStatus, [plugin.id]: status };
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

  // When opening the workflow, restore selection from running state if available
  $effect(() => {
    if (!hasPlugins) return;

    const lastId = runningEngineeringProcessState.lastSelectedPluginId;
    if (!lastId) return;

    // If already selected and matches, nothing to do
    if (selectedPlugin.plugin?.id === lastId) return;

    const match = findGroupAndPluginIndexById(lastId);
    if (match.groupIndex !== null && match.pluginIndex !== null) {
      selectedGroupIndex = match.groupIndex;
      selectedPluginIndex = match.pluginIndex;
      const plugin = plugins.find((p) => p.id === lastId);
      if (plugin) {
        void selectPlugin(plugin);
        return;
      }
    }

    // Fallback if the stored plugin doesn't exist anymore
    if (currentIndex === -1 && plugins.length) {
      void selectPlugin(plugins[0]);
    }
  });

  $effect(() => {
    if (selectedGroupIndex === null || selectedPluginIndex === null) return;
    const group = pluginGroups?.[selectedGroupIndex];
    const pluginMeta = group?.plugins?.[selectedPluginIndex];
    if (!pluginMeta) return;

    const plugin = plugins.find((p) => p.id === pluginMeta.id);
    if (plugin && selectedPlugin.plugin?.id !== plugin.id) {
      void selectPlugin(plugin);
    }
  });

  $effect(() => {
    if (!hasPlugins) {
      selectedPlugin.plugin = null;
      visited = [];
      pluginStatus = {};
      selectedGroupIndex = null;
      selectedPluginIndex = null;
      return;
    }

    if (currentIndex === -1) {
      if (!runningEngineeringProcessState.lastSelectedPluginId) {
        void selectPlugin(plugins[0]);
      }
    }
  });

  onMount(() => {
    if (plugins.length) {
      preloadAllPlugins(plugins).catch(console.error);
    }

    editorTabsVisible.set(false);
    return () => editorTabsVisible.set(true);
  });

  function exitWorkflow() {
    editorTabsVisible.set(true);
    onExit?.();
  }
</script>

<div class="stepper">
  <WorkflowBack onBack={exitWorkflow} />

  <PluginGroupsStepper
    {pluginGroups}
    expandedGroupBackground="var(--primary-base)"
    expandedGroupBorderColor="white"
    bind:selectedGroupIndex
    bind:selectedPluginIndex
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
      <svelte:element
        this={selectedPlugin.plugin.id}
        use:setProps={{ doc, editCount, docs, nsdoc, docName, docId, locale, oscdApi, host }}
      />
    {/if}
  </div>
{/if}

<style>
  * {
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }

  .stepper {
    background-color: var(--primary-base);
    --brand: var(--primary-base);
    --on-brand: #fff;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
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
