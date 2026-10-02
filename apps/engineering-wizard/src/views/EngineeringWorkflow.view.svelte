<script lang="ts">
  import { onMount } from 'svelte';
  import type { Plugin } from '@oscd-transnet-plugins/shared';
  import type { ViewPlugin } from '../features/workflow/viewPlugin';
  import PluginHost from '../features/workflow/components/plugins/PluginHost.svelte';
  import PluginGroupsStepper from '../components/shared/PluginGroupsStepper.svelte';
  import WorkflowTitle from '../components/shared/WorkflowTitle.svelte';
  import WorkflowActions from '../components/shared/WorkflowActions.svelte';
  import { selectedEngineeringProcess } from '../features/processes/stores.svelte';
  import { readEngineeringWorkflowState } from '../features/workflow/document-state';
  import { setLastSelectedPluginId } from '../features/processes/mutations.svelte';
  import { enterFullscreenView } from '../features/workflow/layout.svelte';
  import { runningEngineeringProcess } from '../features/processes/stores.svelte';
  import {
    validationCoordinator,
    type PluginValidationView,
  } from '../services/validationCoordinator.svelte';

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

  let selectedPlugin: ViewPlugin | null = $state(null);

  let hasPlugins = $derived(plugins.length > 0);

  let currentIndex = $derived(
    selectedPlugin && hasPlugins ? plugins.findIndex((p) => p.id === selectedPlugin!.id) : -1,
  );

  let pluginGroups = $derived(selectedEngineeringProcess.process?.pluginGroups ?? []);

  let pluginValidationViews = $derived.by(() => {
    const processId = runningEngineeringProcess.process?.id;
    if (!processId) return {} as Record<string, PluginValidationView>;
    const result: Record<string, PluginValidationView> = {};
    for (const plugin of plugins) {
      result[plugin.id] = validationCoordinator.getPluginView(processId, plugin);
    }
    return result;
  });

  let selectedGroupIndex: number | null = $state(null);
  let selectedPluginIndex: number | null = $state(null);

  function findGroupAndPluginIndexById(id: string): { groupIndex: number | null; pluginIndex: number | null } {
    if (!pluginGroups?.length) return { groupIndex: null, pluginIndex: null };

    for (let groupIndex = 0; groupIndex < pluginGroups.length; groupIndex++) {
      const group = pluginGroups[groupIndex];
      const pluginIndex = group.plugins?.findIndex((plg) => plg.id === id) ?? -1;
      if (pluginIndex >= 0) return { groupIndex, pluginIndex };
    }

    return { groupIndex: null, pluginIndex: null };
  }

  // Selection is a state switch; PluginHost loads the selected plugin lazily.
  function onSelectPlugin(plugin?: Plugin) {
    if (!plugin) return;

    const viewPlugin = plugins.find((candidate) => candidate.id === plugin.id);
    if (!viewPlugin) return;

    if (selectedPlugin?.id === viewPlugin.id) return;

    selectedPlugin = viewPlugin;

    const { groupIndex, pluginIndex } = findGroupAndPluginIndexById(viewPlugin.id);
    selectedGroupIndex = groupIndex;
    selectedPluginIndex = pluginIndex;

    setLastSelectedPluginId(viewPlugin.id);
  }

  function advance(step: number) {
    if (!hasPlugins) return;

    const baseIndex = currentIndex >= 0 ? currentIndex : (step > 0 ? 0 : plugins.length - 1);
    const nextIndexUnbounded = baseIndex + step;

    let nextIndex = nextIndexUnbounded;
    if (nextIndexUnbounded < 0) nextIndex = 0;
    else if (nextIndexUnbounded >= plugins.length) nextIndex = plugins.length - 1;

    if (nextIndex !== currentIndex) {
      onSelectPlugin(plugins[nextIndex]);
    }
  }

  const nextPlugin = () => advance(1);
  const previousPlugin = () => advance(-1);

  onMount(() => {
    let initialPluginId: string | null = runningEngineeringProcess.lastSelectedPluginId;
    if (!initialPluginId && doc) {
      try {
        const { lastPluginId } = readEngineeringWorkflowState(doc);
        initialPluginId = lastPluginId;
      } catch (e) {
        console.warn('[EngineeringWizard] Failed to read initial plugin state:', e);
      }
    }

    const initialPlugin = plugins.find(p => p.id === initialPluginId) ?? plugins[0];
    if (initialPlugin) {
      const { groupIndex, pluginIndex } = findGroupAndPluginIndexById(initialPlugin.id);
      selectedGroupIndex = groupIndex;
      selectedPluginIndex = pluginIndex;
      onSelectPlugin(initialPlugin);
    }

    return enterFullscreenView();
  });

  function exitWorkflow() {
    onExit?.();
  }
</script>

<div class="stepper">
  <WorkflowTitle onClick={exitWorkflow} />

  <PluginGroupsStepper
    selectPlugin={onSelectPlugin}
    {pluginGroups}
    expandedGroupBackground="var(--primary-base)"
    expandedGroupBorderColor="white"
    bind:selectedGroupIndex
    bind:selectedPluginIndex
    validationViews={pluginValidationViews}
    autoSelect={false}
  />

  <WorkflowActions
    onGoToPreviousStep={previousPlugin}
    onGoToNextStep={nextPlugin}
    onDone={exitWorkflow}
    isAtFirstStep={currentIndex <= 0}
    isAtLastStep={currentIndex === plugins.length - 1}
  />
</div>

{#if selectedPlugin}
  <div class="plugin-container">
    <PluginHost
      plugin={selectedPlugin}
      {doc}
      {editCount}
      {plugins}
      {nsdoc}
      {docName}
      {docId}
      {docs}
      {locale}
      {oscdApi}
      {host}
    />
  </div>
{/if}

<style>
  * {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
  }

  .stepper {
    background-color: var(--primary-base);
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
