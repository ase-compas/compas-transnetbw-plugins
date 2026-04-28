<script lang="ts">
  import WorkflowTitle from '../../components/shared/WorkflowTitle.svelte';
  import ProcessDetailStepper from '../../features/processes/components/steppers/ProcessDetailStepper.svelte';
  import WorkflowActions from '../../components/shared/WorkflowActions.svelte';
  import {
    engineeringProcessEditing,
    engineeringProcesses,
    selectedEngineeringProcess
  } from '../../features/processes/stores.svelte';
  import { enterFullscreenView } from '../../features/workflow/layout.svelte';
  import Button from '@smui/button';
  import ProcessValidationView from './ProcessValidation.view.svelte';
  import ProcessDefinitionView from './ProcessDefinition.view.svelte';
  import ProcessInfoBar from '../../components/shared/ProcessInfoBar.svelte';
  import PluginGroupsStepper from '../../components/shared/PluginGroupsStepper.svelte';
  import type { EditorStepIds } from '../../features/processes/editor/types';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import AddNewValidationDialog
    from '../../features/plugins/validation/components/dialogs/AddNewValidationDialog.svelte';
  import { addValidationToPluginInProcess, updateValidationInPluginInProcess, removeValidationFromPluginInProcess, updateProcessMetadata } from '../../features/processes/mutations.svelte';
  import { saveProcess } from '../../features/processes/repository.svelte';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import type { Plugin, Process, XPathValidation } from '@oscd-transnet-plugins/shared';
  import { OscdConfirmDialog, OscdVersionBumpDialog, OscdDiscardChangesDialog } from '@oscd-transnet-plugins/oscd-component';
  import { onMount } from 'svelte';
  import type { VersionBump } from '@oscd-transnet-plugins/shared';

  const STEP_IDS: EditorStepIds[] = ['process-definition', 'validator-configuration'];

  let currentStepIndex = $state(0);
  let currentStepId = $derived(STEP_IDS[currentStepIndex] ?? STEP_IDS[0]);
  let isAtFirstStep = $derived(currentStepIndex === 0);
  let isAtLastStep = $derived(currentStepIndex === STEP_IDS.length - 1);

  let pluginGroups = $derived(selectedEngineeringProcess.process?.pluginGroups ?? []);
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

  // Snapshot taken when edit mode opens — used to detect actual changes.
  let entrySnapshot: string | null = null;

  onMount(() => {
    const proc = selectedEngineeringProcess.process;
    entrySnapshot = proc ? JSON.stringify($state.snapshot(proc)) : null;
    return enterFullscreenView();
  });

  function hasChanges(): boolean {
    const proc = selectedEngineeringProcess.process;
    if (!proc) return false;
    return JSON.stringify($state.snapshot(proc)) !== entrySnapshot;
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

  let saving = $state(false);

  function restoreSnapshot() {
    if (!entrySnapshot) return;
    try {
      const original = JSON.parse(entrySnapshot) as Process;
      const idx = engineeringProcesses.processes.findIndex((p) => p.id === original.id);
      if (idx !== -1) {
        engineeringProcesses.processes[idx] = original;
      }
    } catch { /* ignore parse errors */ }
  }

  function leaveEditMode() {
    engineeringProcessEditing.isEditing = false;
    selectedEngineeringProcess.process = null;
  }

  async function exitEditing() {
    const proc = selectedEngineeringProcess.process;
    if (proc && hasChanges()) {
      const result = await openDialog(OscdDiscardChangesDialog, {
        message: 'You have unsaved changes. If you go back now, they will be lost.',
      });
      if (result?.type !== 'confirm') return;
      restoreSnapshot();
    }
    leaveEditMode();
  }

  /** Called by the Done button — skips the "save or discard?" prompt, goes straight to version bump. */
  async function handleDone() {
    const proc = selectedEngineeringProcess.process;
    if (proc && hasChanges()) {
      const versionResult = await openDialog(OscdVersionBumpDialog, {
        currentVersion: proc.version || '1.0.0',
      });
      if (versionResult?.type !== 'confirm') return;

      const bump = versionResult.data as VersionBump;
      saving = true;
      try {
        await saveProcess(proc, bump);
        toastService.success('Process saved', `"${proc.name}" was saved to the database.`);
      } catch {
        toastService.error('Save failed', `"${proc.name}" could not be saved to the database.`);
        return;
      } finally {
        saving = false;
      }
    }
    leaveEditMode();
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
    }
  }

  async function handleEditValidationClick(entry: XPathValidation, index: number) {
    const proc = selectedEngineeringProcess.process;
    const pl = selectedPlugin;
    if (!pl || !proc) return;

    const result = await openDialog(AddNewValidationDialog, {
      plugin: pl,
      process: proc,
      initialValidation: { ...entry },
    });

    if (result?.type === 'confirm') {
      updateValidationInPluginInProcess(proc.id, pl.id, index, result.data);
    }
  }

  async function handleDeleteValidationClick(entry: XPathValidation, index: number) {
    const proc = selectedEngineeringProcess.process;
    const pl = selectedPlugin;
    if (!pl || !proc) return;

    const result = await openDialog(OscdConfirmDialog, {
      title: 'Remove validation',
      message: `Are you sure you want to remove "${entry.title}"? This cannot be undone.`,
      confirmActionText: 'Remove',
      confirmActionColor: 'danger',
    });

    if (result?.type !== 'confirm') return;

    removeValidationFromPluginInProcess(proc.id, pl.id, index);
  }

</script>
<div class="edit-view">
  <div class="stepper">
    <WorkflowTitle onClick={exitEditing} />

    <ProcessDetailStepper currentId={currentStepId} visited={visitedSteps} onSelect={handleStepSelect} />

    <WorkflowActions
      onGoToPreviousStep={goToPreviousStep}
      onGoToNextStep={goToNextStep}
      onDone={handleDone}

      isAtFirstStep={isAtFirstStep}
      isAtLastStep={isAtLastStep}
      doneDisabled={saving}
    />
  </div>

  <div class="step-content">
    {#if currentStepId === 'process-definition'}
      {#if selectedEngineeringProcess.process}
        {@const proc = selectedEngineeringProcess.process}
        <ProcessInfoBar
          name={proc.name ?? ''}
          processId={proc.id}
          version={proc.version}
          current={true}
          description={proc.description ?? ''}
          nameInvalid={proc.name?.trim().length === 0}
          onNameChange={(v) => updateProcessMetadata(proc.id, { name: v })}
          onDescriptionChange={(v) => updateProcessMetadata(proc.id, { description: v })}
        />
      {/if}
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
          style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
          onclick={handleAddValidationClick}
          disabled={!selectedEngineeringProcess.process || !selectedPlugin}
          aria-label="Add validation"
        >
          ADD NEW VALIDATION
        </Button>
      </div>
      <ProcessValidationView
        {selectedPlugin}
        onEditEntry={handleEditValidationClick}
        onDeleteEntry={handleDeleteValidationClick}
      />
    {/if}
  </div>
</div>

<style>
  * { font-family: 'Roboto', sans-serif; }

  .edit-view {
    /*
     * Controls the max-height of the plugin panels.
     * Increase this value if panels still overflow (accounts for stepper + info bar + OpenSCD chrome).
     */
    --oscd-panel-max-height: calc(100vh - 24rem);
  }

  .step-content {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background-color: var(--primary-base);
    flex-shrink: 0;
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
