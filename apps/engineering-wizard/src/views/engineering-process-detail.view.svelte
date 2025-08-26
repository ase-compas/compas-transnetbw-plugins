<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';
  import { OscdBreadcrumbs } from '../../../../libs/oscd-component/src';
  import Button from '@smui/button';
  import { setEditorTabsVisibility } from '../services/engineering-workflow.service';
  import ProcessStepper from '../components/engineering-process-detail/ProcessStepper.svelte';
  import WorkflowBack from '../components/engineering-workflow/WorkflowBack.svelte';
  import PluginGroups from '../components/engineering-process-detail/PluginGroups.svelte';
  import { getBreadcrumbs, getPluginGroups } from '../services/engineering-process-detail.service';

  export let proc: Process | null = null;

  const dispatch = createEventDispatcher();
  let editorTabsVisible = true;

  function onCrumbClick(e: CustomEvent<{ index: number }>) {
    if (e.detail.index === 0) dispatch("back");
  }

  function start() {
    if (proc) dispatch("start", proc);
  }

  $: breadcrumbs = getBreadcrumbs(proc);

  let pluginGroups: PluginGroup[] = [];
  $: pluginGroups = getPluginGroups(proc);

  function enterEditMode() {
    editorTabsVisible = false;
    setEditorTabsVisibility(false);
  }

  function exitWorkflow() {
    setEditorTabsVisibility(true);
    editorTabsVisible = true;
    dispatch("back");
  }

  const nextStep = () => dispatch("next");
  const previousStep = () => dispatch("previous");
</script>

<div class="page-content">
  {#if !editorTabsVisible}
    <div class="stepper">
      <WorkflowBack on:back={exitWorkflow} />

      <ProcessStepper />

      <div class="stepper-navigation">
        <button type="button" on:click={previousStep} class="btn btn--back" aria-label="Previous step">Back</button>
        <button type="button" on:click={nextStep} class="btn btn--next" aria-label="Next step">Next</button>
      </div>
    </div>
  {/if}

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

  <PluginGroups {pluginGroups} on:edit={enterEditMode} />
</div>

<style>
  * {
    font-family: 'Roboto', sans-serif;
  }

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
  }

  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background-color: #004552;
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

  .btn--back {
    color: #ffffff;
    background-color: #6b9197;
  }

  .btn--next {
    background-color: #ffffff;
    color: var(--brand);
  }
</style>
