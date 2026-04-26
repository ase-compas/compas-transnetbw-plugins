<script lang="ts">
  import { OscdBreadcrumbs } from '@oscd-transnet-plugins/oscd-component';
  import Button from '@smui/button';
  import PluginViewPanel from '../../features/processes/components/panels/PluginViewPanel.svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { buildProcessBreadcrumbs } from '../../features/processes/ui/breadcrumbs';
  import { engineeringProcessEditing, selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { editorTabs } from '../../features/workflow/layout.svelte';
  import ProcessEditView from './ProcessEdit.view.svelte';

  interface Props {
    handleStart: (process: Process) => void;
  }

  let {
    handleStart,
  }: Props = $props();


  let breadcrumbs = $derived(buildProcessBreadcrumbs(selectedEngineeringProcess.process, { edit: engineeringProcessEditing.isEditing }));
  let pluginGroups = $derived(selectedEngineeringProcess.process?.pluginGroups ?? []);

  function handleBreadcrumbClick(index: number) {
    if (index !== 0) return;
    editorTabs.visible = true;
    selectedEngineeringProcess.process = null;
  }

  function startEditing() {
    engineeringProcessEditing.isEditing = true;
  }
</script>

<div class="page-content">
  {#if engineeringProcessEditing.isEditing}
    <ProcessEditView></ProcessEditView>
  {:else}
    <div class="step-content">
      <div class="header">
        <OscdBreadcrumbs {breadcrumbs} activeIndex={1} handleClick={handleBreadcrumbClick} />

        <Button
          variant="raised"
          style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
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
    display: flex;
    flex-direction: column;
  }

  .step-content {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    /*
     * Controls the max-height of the plugin panel in the view (read-only) mode.
     * Adjust to fit your OpenSCD header height.
     */
    --oscd-panel-max-height: calc(100vh - 14rem);
    --oscd-panel-width: auto;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .header :global(button) {
    margin-left: auto;
  }
</style>
