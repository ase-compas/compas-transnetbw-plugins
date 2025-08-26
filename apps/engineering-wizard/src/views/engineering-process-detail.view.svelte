<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';
  import { OscdBreadcrumbs } from '../../../../libs/oscd-component/src';
  import Button from '@smui/button';
  import { setEditorTabsVisibility } from '../services/engineering-workflow.service';
  import ProcessStepper from '../components/process-detail/ProcessStepper.svelte';
  import PluginGroups from '../components/process-detail/PluginGroups.svelte';
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
    <ProcessStepper on:back={exitWorkflow} on:next={nextStep} on:previous={previousStep} />
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
</style>
