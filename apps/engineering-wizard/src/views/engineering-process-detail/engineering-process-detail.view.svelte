<script lang="ts">
  import { OscdBreadcrumbs } from '../../../../../libs/oscd-component/src';
  import Button from '@smui/button';
  import ProcessDetailStepper from '../../components/engineering-process-detail/ProcessDetailStepper.svelte';
  import PluginViewPanel from '../../components/engineering-process-detail/PluginViewPanel.svelte';
  import { editorTabsVisible } from '../../stores/editor-tabs.store';
  import ProcessDefinition from './process-definition.view.svelte';
  import ProcessValidationGroups from '../../components/engineering-process-detail/ProcessValidationGroups.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { buildProcessBreadcrumbs } from '../../utils/breadcrumbs.util';
  import {
    isEngineeringProcessEditingState,
    selectedEngineeringProcessState
  } from '../../services/engineering-process.svelte';
  import WorkflowActions from '../../components/engineering-workflow/WorkflowActions.svelte';
  import WorkflowTitle from '../../components/engineering-workflow/WorkflowTitle.svelte';

  interface Props {
    handleStart: (process: Process) => void;
  }

  let {
    handleStart,
  }: Props = $props();

  type StepId = 'process-definition' | 'validator-configuration';
  const STEP_IDS: StepId[] = ['process-definition', 'validator-configuration'];

  let currentStepIndex = $state(0);
  let currentStepId = $derived(STEP_IDS[currentStepIndex] ?? STEP_IDS[0]);
  let isAtFirstStep = $derived(currentStepIndex === 0);
  let isAtLastStep = $derived(currentStepIndex === STEP_IDS.length - 1);

  let breadcrumbs = $derived(buildProcessBreadcrumbs(selectedEngineeringProcessState.process, { edit: isEngineeringProcessEditingState.isEditing }));
  let pluginGroups = $derived(selectedEngineeringProcessState.process.pluginGroups);

  let visitedSteps: StepId[] = $state([]);

  function handleBreadcrumbClick(index: number) {
    if (index !== 0) return;
    editorTabsVisible.set(true);
    selectedEngineeringProcessState.process = null;
  }

  function startEditing() {
    console.log("EDITING");
    isEngineeringProcessEditingState.isEditing = true;
    editorTabsVisible.set(false);
    currentStepIndex = 0;
    visitedSteps = [];
  }

  function exitEditing() {
    isEngineeringProcessEditingState.isEditing = false;
    editorTabsVisible.set(true);
    selectedEngineeringProcessState.process = null;
  }

  function handleStepSelect(stepId: StepId) {
    const idx = STEP_IDS.indexOf(stepId);
    if (idx !== -1) currentStepIndex = idx;
  }

  function markStepVisited(id: StepId) {
    if (!visitedSteps.includes(id)) visitedSteps = [...visitedSteps, id];
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

  function handleAddValidationClick() {
    alert('Add New Validation clicked!');
  }
</script>

<div class="page-content">
  {#if isEngineeringProcessEditingState.isEditing}
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
        <ProcessDefinition {pluginGroups} />
      {:else if currentStepId === 'validator-configuration'}
        <div class="header header--right">
          <Button
            variant="raised"
            style="--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)"
            onclick={handleAddValidationClick}
            disabled={!selectedEngineeringProcessState.process}
            aria-label="Add validation"
          >
            ADD NEW VALIDATION
          </Button>
        </div>
        <ProcessValidationGroups
          {pluginGroups}
          {breadcrumbs}
          activeBreadcrumbIndex={2}
          on:addValidation={handleAddValidationClick}
          on:breadcrumbClick={handleBreadcrumbClick}
        />
      {/if}
    </div>
  {:else}
    <div class="step-content">
      <div class="header">
        <OscdBreadcrumbs {breadcrumbs} activeIndex={1} handleClick={handleBreadcrumbClick} />

        <Button
          variant="raised"
          style="--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)"
          onclick={() => handleStart(selectedEngineeringProcessState.process)}
          disabled={!selectedEngineeringProcessState.process}
          aria-label="Start process"
        >
          START PROCESS
        </Button>
      </div>

      <PluginViewPanel {pluginGroups} requestEdit={startEditing} />
    </div>
  {/if}
</div>

<style>
  * { font-family: 'Roboto', sans-serif; }

  .page-content {
    --brand: #004552;
    --on-brand: #ffffff;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .header--right {
    justify-content: flex-end;
  }

  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background-color: var(--brand);
  }

  .step-content { padding: 1.5rem 1.5rem; }
</style>
