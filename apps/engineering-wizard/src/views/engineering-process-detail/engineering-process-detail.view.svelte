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

  export let proc: Process | null = null;

  type StepId = 'process-definition' | 'validator-configuration';
  const STEPS: StepId[] = ['process-definition', 'validator-configuration'];

  const dispatch = createEventDispatcher<{
    back: void;
    start: Process;
    next: void;
    previous: void;
  }>();

  let isEditMode = false;

  let step = 0;
  let currentId: StepId = STEPS[0];
  $: currentId = STEPS[step];
  $: atFirst = step === 0;
  $: atLast = step === STEPS.length - 1;

  $: breadcrumbs = getBreadcrumbs(proc, { edit: isEditMode });

  let pluginGroups: PluginGroup[] = [];
  $: pluginGroups = getPluginGroups(proc);

  let visited: StepId[] = [];

  function onCrumbClick(e: CustomEvent<{ index: number }>) {
    if (e.detail.index !== 0) return;
    editorTabsVisible.set(true);
    dispatch('back');
  }

  function start() {
    if (proc) dispatch('start', proc);
  }

  function enterEditMode() {
    isEditMode = true;
    editorTabsVisible.set(false);
    step = 0;
    visited = [];
  }

  function exitWorkflow() {
    isEditMode = false;
    editorTabsVisible.set(true);
    dispatch('back');
  }

  function selectStep(e: CustomEvent<StepId>) {
    const idx = STEPS.indexOf(e.detail);
    if (idx !== -1) step = idx;
  }

  function markVisited(id: StepId) {
    if (!visited.includes(id)) visited = [...visited, id];
  }

  function next() {
    if (atLast) return;
    markVisited(currentId);
    step += 1;
    dispatch('next');
  }

  function prev() {
    if (atFirst) return;
    step -= 1;
    dispatch('previous');
  }
</script>

<div class="page-content">
  {#if isEditMode}
    <div class="stepper">
      <WorkflowBack on:back={exitWorkflow} />

      <ProcessStepper {currentId} {visited} on:select={selectStep} />

      <div class="stepper-navigation">
        <button
          type="button"
          class="btn btn--back"
          on:click={prev}
          disabled={atFirst}
          aria-label="Previous step"
        >
          Back
        </button>

        <button
          type="button"
          class="btn btn--next"
          on:click={next}
          disabled={atLast}
          aria-label="Next step"
        >
          Next
        </button>
      </div>
    </div>

    <div class="step-content">
      {#if currentId === 'process-definition'}
        <OscdBreadcrumbs {breadcrumbs} activeIndex={1} on:click={onCrumbClick} />
        <ProcessDefinition {pluginGroups} />
      {:else}
        <div>Text b</div>
      {/if}
    </div>
  {:else}
    <div class="step-content">
      <div class="header">
        <OscdBreadcrumbs {breadcrumbs} activeIndex={1} on:click={onCrumbClick} />

        <Button
          variant="raised"
          style="--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)"
          on:click={start}
          disabled={!proc}
          aria-label="Start process"
        >
          START PROCESS
        </Button>
      </div>

      <ProcessPluginGroupsView {pluginGroups} on:editRequested={enterEditMode} />
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
