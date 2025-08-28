<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { PluginGroup, Process } from 'libs/shared/src';
  import { OscdBreadcrumbs } from '../../../../../libs/oscd-component/src';
  import Button from '@smui/button';
  import ProcessStepper from '../../components/engineering-process-detail/ProcessStepper.svelte';
  import WorkflowBack from '../../components/engineering-workflow/WorkflowBack.svelte';
  import ProcessPluginGroupsView from '../../components/engineering-process-detail/ProcessPluginGroupsView.svelte';
  import { getBreadcrumbs, getPluginGroups } from '../../services/engineering-process-detail.service';
  import { editorTabsVisible } from '../../stores/editor-tabs.store';
  import ProcessDefinition from './process-definition.view.svelte';

  export let currentProcess: Process | null = null;

  type StepId = 'process-definition' | 'validator-configuration';
  const STEP_IDS: StepId[] = ['process-definition', 'validator-configuration'];

  const dispatch = createEventDispatcher();

  let isEditing = false;

  let currentStepIndex = 0;
  let currentStepId: StepId = STEP_IDS[0];
  $: currentStepId = STEP_IDS[currentStepIndex];
  $: isAtFirstStep = currentStepIndex === 0;
  $: isAtLastStep = currentStepIndex === STEP_IDS.length - 1;

  $: breadcrumbs = getBreadcrumbs(currentProcess, { edit: isEditing });

  let pluginGroups: PluginGroup[] = [];
  $: pluginGroups = getPluginGroups(currentProcess);

  let visitedSteps: StepId[] = [];

  function handleBreadcrumbClick(e: CustomEvent<{ index: number }>) {
    if (e.detail.index !== 0) return;
    editorTabsVisible.set(true);
    dispatch('back');
  }

  function startProcess() {
    if (currentProcess) dispatch('start', currentProcess);
  }

  function startEditing() {
    isEditing = true;
    editorTabsVisible.set(false);
    currentStepIndex = 0;
    visitedSteps = [];
  }

  function exitEditing() {
    isEditing = false;
    editorTabsVisible.set(true);
    dispatch('back');
  }

  function handleStepSelect(e: CustomEvent<StepId>) {
    const idx = STEP_IDS.indexOf(e.detail);
    if (idx !== -1) currentStepIndex = idx;
  }

  function markStepVisited(id: StepId) {
    if (!visitedSteps.includes(id)) visitedSteps = [...visitedSteps, id];
  }

  function goToNextStep() {
    if (isAtLastStep) return;
    markStepVisited(currentStepId);
    currentStepIndex += 1;
    dispatch('next');
  }

  function goToPreviousStep() {
    if (isAtFirstStep) return;
    currentStepIndex -= 1;
    dispatch('previous');
  }

  function handleAddValidationClick() {
    alert('Add New Validation clicked!');
  }
</script>

<div class="page-content">
  {#if isEditing}
    <div class="stepper">
      <WorkflowBack on:back={exitEditing} />

      <ProcessStepper currentId={currentStepId} visited={visitedSteps} on:select={handleStepSelect} />

      <div class="stepper-navigation">
        <button
          type="button"
          class="btn btn--back"
          on:click={goToPreviousStep}
          disabled={isAtFirstStep}
          aria-label="Previous step"
        >
          Back
        </button>

        <button
          type="button"
          class="btn btn--next"
          on:click={goToNextStep}
          disabled={isAtLastStep}
          aria-label="Next step"
        >
          Next
        </button>
      </div>
    </div>

    <div class="step-content">
      {#if currentStepId === 'process-definition'}
        <div class="header">
          <OscdBreadcrumbs {breadcrumbs} activeIndex={1} on:click={handleBreadcrumbClick} />
        </div>
        <ProcessDefinition {pluginGroups} />
      {:else}
        <div class="header">
          <OscdBreadcrumbs {breadcrumbs} activeIndex={2} on:click={handleBreadcrumbClick} />

          <Button
            variant="raised"
            style="--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)"
            on:click={handleAddValidationClick}
            disabled={!currentProcess}
            aria-label="Add validation"
          >
            ADD NEW VALIDATION
          </Button>
        </div>

        <div class="validation-groups" role="list" aria-label="Validation groups">
          {#each pluginGroups as group}
            <div class="validation-groups__group">
              <span class="validation-groups__group-title">{group.title}</span>
              {#each group.plugins as plugin, idx}
                <div class="validation-groups__plugin" aria-current={idx === 0 ? 'true' : undefined}>
                  <span>{plugin.name}</span>
                </div>
              {/each}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {:else}
    <div class="step-content">
      <div class="header">
        <OscdBreadcrumbs {breadcrumbs} activeIndex={1} on:click={handleBreadcrumbClick} />

        <Button
          variant="raised"
          style="--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)"
          on:click={startProcess}
          disabled={!currentProcess}
          aria-label="Start process"
        >
          START PROCESS
        </Button>
      </div>

      <ProcessPluginGroupsView {pluginGroups} on:editRequested={startEditing} />
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
    gap: 1rem;
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

  .validation-groups {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .validation-groups__group-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    padding: 0 8px;
    color: var(--on-brand);
  }

  .validation-groups__group {
    display: flex;
    gap: 0.2rem;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 4px;
    background-color: var(--brand);
  }

  .validation-groups__plugin {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: var(--brand);
    padding: 6px;
    background-color: white;
    border-radius: 6px;
    width: fit-content;
    min-width: 2rem;
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
