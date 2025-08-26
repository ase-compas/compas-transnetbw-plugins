<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';
  import { OscdBreadcrumbs } from '../../../../libs/oscd-component/src';
  import Button from '@smui/button';
  import { setEditorTabsVisibility } from '../services/engineering-workflow.service';
  import WorkflowBack from '../components/engineering-workflow/WorkflowBack.svelte';

  export let proc: Process | null = null;

  const dispatch = createEventDispatcher();
  let editorTabsVisible = true;

  function onCrumbClick(e: CustomEvent<{ index: number }>) {
    if (e.detail.index === 0) dispatch("back");
  }

  function start() {
    if (proc) dispatch("start", proc);
  }

  $: breadcrumbs = [
    { label: "Engineering-Wizard", enabled: true },
    { label: proc?.name ?? "—", enabled: false }
  ];

  let pluginGroups: PluginGroup[] = [];
  $: pluginGroups =
    proc?.pluginGroups?.length
      ? (proc.pluginGroups as PluginGroup[])
      : [{ title: "Process", plugins: proc?.plugins ?? [] }];

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
      <div class="steps">
        <div class="step">
            <button
              on:click={() => console.log("STEP 1 CLICKED")}
              class:not-visited={true}
            >
                1
            </button>
          <p>Process Definition</p>
        </div>

        <div class="plugin-step-line"></div>

        <div class="step">
          <button
            on:click={() => console.log("STEP 2 CLICKED")}
            class:not-visited={true}
          >
            2
          </button>
          <p>Validator Configuration</p>
        </div>
      </div>

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

  <div class="plugins-list">
    <div class="plugins-list__header">
      <p>Process</p>
      <Button
        variant="raised"
        style="--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)"
        aria-label="Edit process"
        on:click={enterEditMode}
      >
        EDIT
      </Button>
    </div>

    {#each pluginGroups as group, i}
      <div class="plugin">
        <div class="plugin__group-title">
          <span class="plugin__index">{i + 1}.</span>
          <span class="plugin__title">{group.title}</span>
        </div>

        <div class="plugin__items">
          {#each group.plugins as plugin}
            <div class="plugin-item">
              <span class="plugin-item__name">{plugin.name}</span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
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

  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background-color: #004552;
  }

  .steps {
    display: flex;
    gap: 0.5rem;
    justify-self: center;
    align-items: center;
  }

  .stepper-navigation {
    display: flex;
    gap: 0.8rem;
    justify-self: end;
  }

  .step {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 0.8rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  .step :global(button) {
    width: 2rem;
    height: 2rem;
    border: 1px solid transparent;
    border-radius: 50%;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  .step :global(button.not-visited) {
    background-color: #6B9197;
    color: #ffffff;
  }

  .plugin-step-line {
    width: 56px;
    height: 1px;
    background-color: #6B9197;
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

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .plugins-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 33vw;
    max-width: 640px;
    border-radius: 4px;
    padding: 24px;
    background-color: var(--brand);
  }

  .plugins-list__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .plugins-list__header p {
    font-weight: 500;
    color: var(--on-brand);
    font-size: 24px;
    margin: 0;
  }

  .plugin {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .plugin__group-title {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .plugin__index,
  .plugins-list p {
    font-weight: 500;
    color: var(--on-brand);
  }

  .plugin__title {
    font-weight: 500;
    color: #dae3e6;
  }

  .plugin__items {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .plugin-item {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px;
    background-color: #ffffff;
    border-radius: 4px;
  }

  .plugin-item__name {
    font-weight: 500;
    color: var(--brand);
  }
</style>
