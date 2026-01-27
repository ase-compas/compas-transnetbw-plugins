<script lang="ts">
  import { OscdBreadcrumbs } from '../../../../../libs/oscd-component/src';
  import Button from '@smui/button';
  import ProcessDetailStepper from '../../features/processes/components/steppers/ProcessDetailStepper.svelte';
  import PluginViewPanel from '../../features/processes/components/panels/PluginViewPanel.svelte';
  import ProcessDefinition from './process-definition.view.svelte';
  import ProcessValidation from '../../features/processes/components/validation/ProcessValidation.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { buildProcessBreadcrumbs } from '../../features/processes/ui/breadcrumbs';
  import WorkflowActions from '../../components/shared/WorkflowActions.svelte';
  import WorkflowTitle from '../../components/shared/WorkflowTitle.svelte';
  import { engineeringProcessEditing, selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { editorTabs } from '../../features/workflow/layout.svelte';

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

  let breadcrumbs = $derived(buildProcessBreadcrumbs(selectedEngineeringProcess.process, { edit: engineeringProcessEditing.isEditing }));
  let pluginGroups = $derived(selectedEngineeringProcess.process.pluginGroups);

  let visitedSteps: StepId[] = $state([]);

  function handleBreadcrumbClick(index: number) {
    if (index !== 0) return;
    editorTabs.visible = true;
    selectedEngineeringProcess.process = null;
  }

  function startEditing() {
    console.log("EDITING");
    engineeringProcessEditing.isEditing = true;
    editorTabs.visible = false;
    currentStepIndex = 0;
    visitedSteps = [];
  }

  function exitEditing() {
    engineeringProcessEditing.isEditing = false;
    editorTabs.visible = true;
    selectedEngineeringProcess.process = null;
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
  {#if engineeringProcessEditing.isEditing}
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
            disabled={!selectedEngineeringProcess.process}
            aria-label="Add validation"
          >
            ADD NEW VALIDATION
          </Button>
        </div>
        <ProcessValidation
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
          onclick={() => handleStart(selectedEngineeringProcess.process)}
          disabled={!selectedEngineeringProcess.process}
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
