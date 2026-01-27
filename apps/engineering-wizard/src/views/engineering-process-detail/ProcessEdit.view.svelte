<script lang="ts">
  import WorkflowTitle from '../../components/shared/WorkflowTitle.svelte';
  import ProcessDetailStepper from '../../features/processes/components/steppers/ProcessDetailStepper.svelte';
  import WorkflowActions from '../../components/shared/WorkflowActions.svelte';
  import {
    engineeringProcessEditing,
    engineeringProcesses,
    selectedEngineeringProcess
  } from '../../features/processes/stores.svelte';
  import { editorTabs } from '../../features/workflow/layout.svelte';
  import Button from '@smui/button';
  import ProcessValidationView from './ProcessValidation.view.svelte';
  import ProcessDefinitionView from './ProcessDefinition.view.svelte';
  import PluginGroupsStepper from '../../components/shared/PluginGroupsStepper.svelte';
  import type { EditorStepIds } from '../../features/processes/editor/types';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import AddNewValidationDialog
    from '../../features/plugins/validation/components/dialogs/AddNewValidationDialog.svelte';
  import { addValidationToPluginInProcess } from '../../features/processes/mutations.svelte';
  import type { Plugin } from '@oscd-transnet-plugins/shared';
  import { onMount } from 'svelte';

  const STEP_IDS: EditorStepIds[] = ['process-definition', 'validator-configuration'];

  let currentStepIndex = $state(0);
  let currentStepId = $derived(STEP_IDS[currentStepIndex] ?? STEP_IDS[0]);
  let isAtFirstStep = $derived(currentStepIndex === 0);
  let isAtLastStep = $derived(currentStepIndex === STEP_IDS.length - 1);

  let pluginGroups = $derived(selectedEngineeringProcess.process.pluginGroups);
  let selectedPluginId: string | null = $state(null);

  let visitedSteps: EditorStepIds[] = $state([]);

  let selectedGroupIndex: number | null = $state(null);
  let selectedPluginIndex: number | null = $state(null);

  let selectedPlugin = $derived.by(() => {
    const proc = selectedEngineeringProcess.process;
    const id = selectedPluginId;
    if (!proc || !id) return null;

    return proc.pluginGroups
      ?.flatMap((g) => g.plugins ?? [])
      .find((p) => p.id === id) ?? null;
  });

  onMount(() => {
    editorTabs.visible = false;
    return () => {
      editorTabs.visible = true;
    };
  });

  function handleBreadcrumbClick(index: number) {
    if (index !== 0) return;
    editorTabs.visible = true;
    selectedEngineeringProcess.process = null;
  }

  function goToNextStep() {
    if (isAtLastStep) return;
    markStepVisited(currentStepId);
    currentStepIndex += 1;
  }

  function goToPreviousStep() {
    if (isAtFirstStep) return;
    currentStepIndex -= 1;
  }

  function exitEditing() {
    engineeringProcessEditing.isEditing = false;
    editorTabs.visible = true;
    selectedEngineeringProcess.process = null;
  }

  function handleStepSelect(stepId: EditorStepIds) {
    const idx = STEP_IDS.indexOf(stepId);
    if (idx !== -1) currentStepIndex = idx;
  }

  function markStepVisited(id: EditorStepIds) {
    if (!visitedSteps.includes(id)) visitedSteps = [...visitedSteps, id];
  }

  function onSelectPlugin(plugin: Plugin) {
    selectedPluginId = plugin.id;
  }

  async function handleAddValidationClick() {
    const proc = selectedEngineeringProcess.process;
    const pl = selectedPlugin;
    if (!pl || !proc) return;

    const result = await openDialog(AddNewValidationDialog, { plugin: pl, process: proc });

    if (result?.type === 'confirm') {
      addValidationToPluginInProcess(proc.id, pl.id, result.data);

      selectedEngineeringProcess.process =
        engineeringProcesses.processes?.find((p) => p.id === proc.id) ?? null;
    }
  }

</script>
<div class="stepper">
  <WorkflowTitle onClick={exitEditing} />

  <ProcessDetailStepper currentId={currentStepId} visited={visitedSteps} onSelect={handleStepSelect} />

  <WorkflowActions
    onGoToPreviousStep={goToPreviousStep}
    onGoToNextStep={goToNextStep}
    onDone={exitEditing}

    isAtFirstStep={isAtFirstStep}
    isAtLastStep={isAtLastStep}
  />
</div>

<div class="step-content">
  {#if currentStepId === 'process-definition'}
    <ProcessDefinitionView {pluginGroups} />
  {:else if currentStepId === 'validator-configuration'}
    <div class="header">
      <PluginGroupsStepper
        {pluginGroups}
        selectPlugin={onSelectPlugin}
        bind:selectedGroupIndex
        bind:selectedPluginIndex
      />
      <Button
        variant="raised"
        style="--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)"
        onclick={handleAddValidationClick}
        disabled={!selectedEngineeringProcess.process || !selectedPlugin}
        aria-label="Add validation"
      >
        ADD NEW VALIDATION
      </Button>
    </div>
    <ProcessValidationView
      {selectedPlugin}
      {pluginGroups}
      activeBreadcrumbIndex={2}
      on:addValidation={handleAddValidationClick}
      on:breadcrumbClick={handleBreadcrumbClick}
    />
  {/if}
</div>

<style>
  * { font-family: 'Roboto', sans-serif; }

  .step-content { padding: 1.5rem 1.5rem; }

  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background-color: var(--brand);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .header Button {
    margin-left: auto;
  }
</style>
