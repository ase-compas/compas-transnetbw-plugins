<script lang="ts">
  import { OscdBreadcrumbs } from '../../../../../libs/oscd-component/src';
  import Button from '@smui/button';
  import ProcessDetailStepper from '../../components/engineering-process-detail/ProcessDetailStepper.svelte';
  import WorkflowBack from '../../components/engineering-workflow/WorkflowBack.svelte';
  import PluginViewPanel from '../../components/engineering-process-detail/PluginViewPanel.svelte';
  import { editorTabsVisible } from '../../stores/editor-tabs.store';
  import ProcessDefinition from './process-definition.view.svelte';
  import ProcessValidationGroups from '../../components/engineering-process-detail/ProcessValidationGroups.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { buildProcessBreadcrumbs } from '../../components/engineering-process-detail/breadcrumbs.util';
  import { processEditModeState, selectedProcessState } from '../../services/engineering-process.svelte';

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

  let breadcrumbs = $derived(buildProcessBreadcrumbs(selectedProcessState.process, { edit: processEditModeState.isEditing }));

  let pluginGroups = $derived(selectedProcessState.process.pluginGroups);

  let visitedSteps: StepId[] = $state([]);

  function handleBreadcrumbClick(index: number) {
    if (index !== 0) return;
    editorTabsVisible.set(true);
    selectedProcessState.process = null;
  }

  function startEditing() {
    console.log("EDITING");
    processEditModeState.isEditing = true;
    editorTabsVisible.set(false);
    currentStepIndex = 0;
    visitedSteps = [];
  }

  function exitEditing() {
    processEditModeState.isEditing = false;
    editorTabsVisible.set(true);
    selectedProcessState.process = null;
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
  {#if processEditModeState.isEditing}
    <div class="stepper">
      <WorkflowBack onBack={exitEditing} />

      <ProcessDetailStepper currentId={currentStepId} visited={visitedSteps} onSelect={handleStepSelect} />

      <div class="stepper-navigation">
        <button
          type="button"
          class="btn btn--back"
          onclick={goToPreviousStep}
          disabled={isAtFirstStep}
          aria-label="Previous step"
        >
          Back
        </button>

        <button
          type="button"
          class="btn btn--next"
          onclick={goToNextStep}
          disabled={isAtLastStep}
          aria-label="Next step"
        >
          Next
        </button>
      </div>
    </div>

    <div class="step-content">
      {#if currentStepId === 'process-definition'}
        <ProcessDefinition {pluginGroups} />
      {:else if currentStepId === 'validator-configuration'}
          <Button
            variant="raised"
            style="--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)"
            onclick={handleAddValidationClick}
            disabled={!selectedProcessState.process}
            aria-label="Add validation"
          >
            ADD NEW VALIDATION
          </Button>
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
          onclick={() => handleStart(selectedProcessState.process)}
          disabled={!selectedProcessState.process}
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

  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background-color: var(--brand);
  }

  .stepper-navigation {
    display: flex;
    gap: 0.8rem;
    justify-self: end;
  }

  .btn {
    height: 36px;
    min-width: 70px;
    padding: 0 12px;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn[disabled] { opacity: 0.6; cursor: default; }
  .btn--back { color: #ffffff; background-color: #6b9197; }
  .btn--next { background-color: #ffffff; color: var(--brand); }

  .step-content { padding: 1rem 2rem; }
</style>
