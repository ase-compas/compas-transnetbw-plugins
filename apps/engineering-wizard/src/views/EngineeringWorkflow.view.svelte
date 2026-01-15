<script lang="ts">
  import { onMount } from 'svelte';
  import type { ViewPlugin } from '../features/workflow/viewPlugin';
  import PluginHost from '../features/workflow/components/plugins/PluginHost.svelte';
  import PluginGroupsStepper from '../components/shared/PluginGroupsStepper.svelte';
  import WorkflowTitle from '../components/shared/WorkflowTitle.svelte';
  import WorkflowActions from '../components/shared/WorkflowActions.svelte';
  import { runningEngineeringProcess, selectedEngineeringProcess } from '../features/processes/stores.svelte';
  import { ensureCustomElementDefined, preloadAllPlugins } from '../features/workflow/external-elements';
  import { readEngineeringWorkflowState, writeEngineeringWorkflowState } from '../features/workflow/document-state';
  import { setLastSelectedPluginId } from '../features/processes/mutations.svelte';
  import { editorTabs } from '../features/workflow/layout.svelte';

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

  let pluginGroups = $derived(selectedEngineeringProcess.process.pluginGroups);

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

  async function onSelectPlugin(plugin?: ViewPlugin) {
    if (!plugin) return;

    await ensureCustomElementDefined(plugin);

    selectedPlugin.plugin = plugin;

    const { groupIndex, pluginIndex } = findGroupAndPluginIndexById(plugin.id);
    selectedGroupIndex = groupIndex;
    selectedPluginIndex = pluginIndex;

    try {
      if (doc && host) writeEngineeringWorkflowState(doc, host, { lastPluginId: plugin.id });
    } catch (e) { }

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

    void onSelectPlugin(plugins[nextIndex]);
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

  onMount(() => {
    if (plugins.length) {
      preloadAllPlugins(plugins).catch(console.error);
    }

    editorTabs.visible = false;
    return () => {
      editorTabs.visible = true;
    };
  });

  function exitWorkflow() {
    editorTabs.visible = true;
    onExit?.();
  }
</script>

<div class="stepper">
  <WorkflowTitle onClick={exitWorkflow}/>

  <PluginGroupsStepper
    selectPlugin={onSelectPlugin}
    {pluginGroups}
    expandedGroupBackground="var(--primary-base)"
    expandedGroupBorderColor="white"
    bind:selectedGroupIndex
    bind:selectedPluginIndex
  />

  <WorkflowActions
    onGoToPreviousStep={previousPlugin}
    onGoToNextStep={nextPlugin}
    onDone={exitWorkflow}

    isAtFirstStep={!hasPlugins}
    isAtLastStep={!hasPlugins}
  />
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

  .plugin-container {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
</style>
