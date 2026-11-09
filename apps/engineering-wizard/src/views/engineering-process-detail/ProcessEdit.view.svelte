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
  import Button, { Icon, Label } from '@smui/button';
  import { OscdCloseIcon, OscdDeleteIcon } from '@oscd-transnet-plugins/oscd-icons';
  import ProcessValidationView from './ProcessValidation.view.svelte';
  import ProcessDefinitionView from './ProcessDefinition.view.svelte';
  import ProcessInfoBar from '../../components/shared/ProcessInfoBar.svelte';
  import SearchInput from '../../components/shared/SearchInput.svelte';
  import PluginGroupsStepper from '../../components/shared/PluginGroupsStepper.svelte';
  import type { EditorStepIds } from '../../features/processes/editor/types';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import AddNewValidationDialog
    from '../../features/plugins/validation/components/dialogs/AddNewValidationDialog.svelte';
  import ValidationJsonTransferActions
    from '../../features/plugins/validation/components/ValidationJsonTransferActions.svelte';
  import { addProcess, addValidationToPluginInProcess, updateValidationInPluginInProcess, removeValidationFromPluginInProcess, updateProcessMetadata } from '../../features/processes/mutations.svelte';
  import { saveProcess } from '../../features/processes/repository.svelte';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import type { Plugin, Process, XPathValidation, VersionBump } from '@oscd-transnet-plugins/shared';
  import { OscdConfirmDialog, OscdVersionBumpDialog, OscdDiscardChangesDialog } from '@oscd-transnet-plugins/oscd-component';
  import { onMount } from 'svelte';

  const STEP_IDS: EditorStepIds[] = ['process-definition', 'validator-configuration'];

  interface Props {
    creating?: boolean;
    onReturnToList: () => void | Promise<void>;
  }

  const { creating = false, onReturnToList }: Props = $props();

  let currentStepIndex = $state(0);
  let compactStepper = $state(false);
  let currentStepId = $derived(STEP_IDS[currentStepIndex] ?? STEP_IDS[0]);
  let isAtFirstStep = $derived(currentStepIndex === 0);
  let isAtLastStep = $derived(currentStepIndex === STEP_IDS.length - 1);

  let pluginGroups = $derived(selectedEngineeringProcess.process?.pluginGroups ?? []);
  let processNameInvalid = $derived(
    !selectedEngineeringProcess.process?.name?.trim(),
  );
  let selectedPluginId: string | null = $state(null);
  let selectedValidations = $state<XPathValidation[]>([]);
  let validationSearchQuery = $state('');

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
  const normalizedValidationQuery = $derived(validationSearchQuery.trim().toLowerCase());
  const filteredValidations = $derived(
    (selectedPlugin?.validations ?? []).filter((entry) =>
      [entry.title, entry.context, entry.assert].some((value) =>
        value.toLowerCase().includes(normalizedValidationQuery),
      ),
    ),
  );
  const visibleSelectedValidations = $derived(
    filteredValidations.filter((entry) => selectedValidations.includes(entry)),
  );

  // Snapshot taken when edit mode opens — used to detect actual changes.
  let entrySnapshot: string | null = $state(null);
  let idTouched = $state(false);
  const doneLabel = $derived(creating ? 'Create' : 'Save');

  const slugify = (value: string) =>
    value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  function changeName(name: string) {
    const proc = selectedEngineeringProcess.process;
    if (!proc) return;
    updateProcessMetadata(proc.id, { name });
    if (creating && !idTouched) proc.id = slugify(name);
  }

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
    if (saving) return;
    if (isAtLastStep) return;
    markStepVisited(currentStepId);
    handleStepSelect(STEP_IDS[currentStepIndex + 1]);
  }

  function goToPreviousStep() {
    if (saving) return;
    if (isAtFirstStep) return;
    handleStepSelect(STEP_IDS[currentStepIndex - 1]);
  }

  let saving = $state(false);

  function restoreSnapshot() {
    if (creating || !entrySnapshot) return;
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

  // Route first; refresh runs in the background so the UI never waits on the fetch.
  function returnToProcessList() {
    leaveEditMode();
    void onReturnToList();
  }

  async function exitEditing() {
    if (saving) return;
    const proc = selectedEngineeringProcess.process;
    if (proc && hasChanges()) {
      const result = await openDialog(OscdDiscardChangesDialog, {
        message: 'You have unsaved changes. If you go back now, they will be lost.',
      });
      if (result?.type !== 'confirm') return;
      restoreSnapshot();
    }
    returnToProcessList();
  }

  async function handleDone() {
    if (saving) return;
    const proc = selectedEngineeringProcess.process;
    if (!proc?.name?.trim()) {
      toastService.error('Process name required', 'Enter a process name before saving.');
      return;
    }
    saving = true;
    try {
      if (creating || hasChanges()) {
        let bump: VersionBump | undefined;
        if (creating) {
          const baseId = proc.id.trim() || slugify(proc.name) || 'process';
          const existingIds = new Set(engineeringProcesses.processes.map((p) => p.id));
          let resolvedId = baseId;
          if (existingIds.has(baseId)) {
            let n = 2;
            while (existingIds.has(`${baseId}-${n}`)) n++;
            resolvedId = `${baseId}-${n}`;
            const collision = await openDialog(OscdConfirmDialog, {
              title: 'Process ID already in use',
              message: `A process with ID "${baseId}" already exists. Use "${resolvedId}" instead?`,
              confirmActionText: 'Use suggested ID',
              cancelActionText: 'Cancel',
            });
            if (collision?.type !== 'confirm') return;
          }
          proc.id = resolvedId;
          proc.name = proc.name.trim();
          proc.description = proc.description?.trim() ?? '';
        } else {
          const versionResult = await openDialog(OscdVersionBumpDialog, {
            currentVersion: proc.version || '1.0.0',
          });
          if (versionResult?.type !== 'confirm') return;
          bump = versionResult.data as VersionBump;
        }

        const version = await saveProcess(proc, bump);
        if (creating) addProcess({ ...$state.snapshot(proc), version });
        toastService.success('Process saved', `"${proc.name}" was saved to the database.`);
      }
      returnToProcessList();
    } catch {
      toastService.error('Save failed', `"${proc.name}" could not be saved to the database.`);
    } finally {
      saving = false;
    }
  }

  function handleStepSelect(stepId: EditorStepIds) {
    if (saving) return;
    const idx = STEP_IDS.indexOf(stepId);
    if (idx === -1 || idx === currentStepIndex) return;
    selectedValidations = [];
    validationSearchQuery = '';
    currentStepIndex = idx;
  }

  function markStepVisited(id: EditorStepIds) {
    if (!visitedSteps.includes(id)) visitedSteps = [...visitedSteps, id];
  }

  function onSelectPlugin(plugin: Plugin) {
    if (selectedPluginId === plugin.id) return;
    selectedValidations = [];
    validationSearchQuery = '';
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
      const wasSelected = selectedValidations.includes(entry);
      updateValidationInPluginInProcess(proc.id, pl.id, index, result.data);
      const updatedEntry = pl.validations?.[index];
      if (wasSelected && updatedEntry) {
        selectedValidations = selectedValidations.map((selected) => selected === entry ? updatedEntry : selected);
      }
    }
  }

  async function handleDuplicateValidationClick(entry: XPathValidation) {
    const proc = selectedEngineeringProcess.process;
    const pl = selectedPlugin;
    if (!pl || !proc) return;

    const base = entry.title.replace(/ \(copy(?: \d+)?\)$/, '');
    const existing = new Set((pl.validations ?? []).map((v) => v.title));
    let title = `${base} (copy)`;
    for (let n = 2; existing.has(title); n++) title = `${base} (copy ${n})`;

    const copy = { ...$state.snapshot(entry), title };
    addValidationToPluginInProcess(proc.id, pl.id, copy);

    const index = (pl.validations?.length ?? 1) - 1;
    await handleEditValidationClick(copy, index);
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
    selectedValidations = selectedValidations.filter((selected) => selected !== entry);
  }

  async function handleDeleteSelectedValidations() {
    const proc = selectedEngineeringProcess.process;
    const pl = selectedPlugin;
    const entries = visibleSelectedValidations;
    if (!proc || !pl || entries.length === 0) return;

    const result = await openDialog(OscdConfirmDialog, {
      title: 'Remove validations',
      message: `Are you sure you want to remove ${entries.length} selected validations? This cannot be undone.`,
      confirmActionText: 'Remove',
      confirmActionColor: 'danger',
    });
    if (result?.type !== 'confirm') return;

    const indexes = entries
      .map((entry) => (pl.validations ?? []).indexOf(entry))
      .filter((index) => index >= 0)
      .sort((a, b) => b - a);
    for (const index of indexes) {
      removeValidationFromPluginInProcess(proc.id, pl.id, index);
    }
    selectedValidations = selectedValidations.filter((selected) => !entries.includes(selected));
  }

  function fitEditorViewport(anchor: HTMLDivElement) {
    function update() {
      const bounds = anchor.getBoundingClientRect();
      compactStepper = bounds.width <= 820;
      anchor.style.setProperty('--editor-top', `${Math.max(0, bounds.top)}px`);
      anchor.style.setProperty('--editor-left', `${Math.max(0, bounds.left)}px`);
      anchor.style.setProperty('--editor-right', `${Math.max(0, window.innerWidth - bounds.right)}px`);
    }

    const observer = new ResizeObserver(update);
    let ancestor: Element | null = anchor;
    while (ancestor) {
      observer.observe(ancestor, { box: 'border-box' });
      const root = ancestor.getRootNode();
      ancestor = ancestor.parentElement ?? (root instanceof ShadowRoot ? root.host : null);
    }
    window.addEventListener('resize', update);
    update();
    const frame = requestAnimationFrame(update);
    return {
      destroy() {
        observer.disconnect();
        window.removeEventListener('resize', update);
        cancelAnimationFrame(frame);
      },
    };
  }

</script>
<div class="editor-viewport" use:fitEditorViewport>
<div class="edit-view">
  <div class="stepper" class:compact={compactStepper}>
    <WorkflowTitle onClick={exitEditing} />

    <ProcessDetailStepper currentId={currentStepId} visited={visitedSteps} onSelect={handleStepSelect} />

  </div>

  <div class="step-content" inert={saving} aria-busy={saving}>
    {#if currentStepId === 'process-definition'}
      {#if selectedEngineeringProcess.process}
        {@const proc = selectedEngineeringProcess.process}
        <ProcessInfoBar
          name={proc.name ?? ''}
          processId={proc.id}
          version={proc.version}
          current={true}
          description={proc.description ?? ''}
          nameInvalid={processNameInvalid}
          disabled={saving}
          processIdDisabled={!creating}
          onNameChange={changeName}
          onDescriptionChange={(v) => updateProcessMetadata(proc.id, { description: v })}
          onProcessIdChange={(v) => { if (creating) { proc.id = v; idTouched = true; } }}
        />
      {/if}
      <ProcessDefinitionView {pluginGroups} />
    {:else if currentStepId === 'validator-configuration'}
      {#if selectedEngineeringProcess.process}
        {@const proc = selectedEngineeringProcess.process}
        <ProcessInfoBar
          name={proc.name ?? ''}
          processId={proc.id}
          version={proc.version}
          current={true}
          description={proc.description ?? ''}
          disabled={true}
        />
      {/if}
      <div class="header">
        <PluginGroupsStepper
          {pluginGroups}
          selectPlugin={onSelectPlugin}
          bind:selectedGroupIndex
          bind:selectedPluginIndex
        />
        <div class="validation-actions">
          <ValidationJsonTransferActions
            action="import"
            process={selectedEngineeringProcess.process}
            plugin={selectedPlugin}
          />
          <Button
            tag="button"
            variant="raised"
            style="--mdc-theme-primary: var(--oscd-plugin-action); --mdc-theme-on-primary: var(--oscd-plugin-on-action)"
            onclick={handleAddValidationClick}
            disabled={!selectedEngineeringProcess.process || !selectedPlugin}
            aria-label="Add validation"
          >
            Add new validation
          </Button>
              </div>
            </div>
            {#if selectedPlugin}
        <div class="ew-table-section">
          <div class="ew-table-toolbar" role="toolbar" aria-label="Validation rules table controls">
            <SearchInput bind:value={validationSearchQuery} label="Search Rules" />
            <div class="ew-table-toolbar__selection">
              <span role="status">
                {#if visibleSelectedValidations.length > 0}
                  {visibleSelectedValidations.length} selected
                {:else}
                  {filteredValidations.length} {filteredValidations.length === 1 ? 'rule' : 'rules'}
                {/if}
              </span>
              <ValidationJsonTransferActions
                action="export"
                process={selectedEngineeringProcess.process}
                plugin={selectedPlugin}
                selectedValidations={visibleSelectedValidations}
              />
              <Button
                tag="button"
                variant="raised"
                style="--mdc-theme-primary: var(--oscd-plugin-error); --mdc-theme-on-primary: white;"
                onclick={handleDeleteSelectedValidations}
                disabled={visibleSelectedValidations.length === 0}
              >
                <Icon><OscdDeleteIcon svgStyles="fill: currentColor; width: 18px; height: 18px;" /></Icon>
                <Label>Delete</Label>
              </Button>
            </div>
          </div>
          <ProcessValidationView
            {selectedPlugin}
            visibleEntries={filteredValidations}
            {selectedValidations}
            onSelectionChange={(entries) => { selectedValidations = entries; }}
            onEditEntry={handleEditValidationClick}
            onDeleteEntry={handleDeleteValidationClick}
            onDuplicateEntry={handleDuplicateValidationClick}
          />
        </div>
      {/if}
    {/if}
  </div>
  <div class="bottom-bar" role="toolbar" aria-label="Process editor actions">
    <Button
      tag="button"
      onclick={exitEditing}
      disabled={saving}
      style="--mdc-theme-primary: white; color: white;"
    >
      <Icon><OscdCloseIcon svgStyles="fill: currentColor; width: 20px; height: 20px;" /></Icon>
      <Label>Discard Changes</Label>
    </Button>
    <WorkflowActions
      onGoToPreviousStep={goToPreviousStep}
      onGoToNextStep={goToNextStep}
      onDone={handleDone}
      {isAtFirstStep}
      {isAtLastStep}
      previousDisabled={saving}
      nextDisabled={saving || isAtLastStep}
      doneDisabled={saving || processNameInvalid}
      {doneLabel}
    />
  </div>
</div>
</div>

<style>
  * { font-family: var(--ew-font-family, 'Roboto', sans-serif); }

  .edit-view {
    --editor-bottom-bar-height: 48px;
    --oscd-panel-max-height: 100%;
    position: fixed;
    inset: var(--editor-top) var(--editor-right) 0 var(--editor-left);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--oscd-plugin-surface);
  }

  .step-content {
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
  }

  .step-content > :global(.info-bar) {
    flex-shrink: 0;
  }

  .step-content > .ew-table-section {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
  }

  .ew-table-section > .ew-table-toolbar {
    flex-shrink: 0;
  }

  .ew-table-section > :global(.oscd-basic-table) {
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
  }

  .ew-table-section :global(.mdc-data-table) {
    min-height: 0;
  }

  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;
    background-color: var(--oscd-plugin-ew-primary-bg);
    flex-shrink: 0;
  }

  .stepper > :global(.btn-engineering-wizard_title) {
    justify-self: start;
  }

  .stepper.compact {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto;
    box-sizing: border-box;
    padding: 4px 12px;
    row-gap: 2px;
  }

  .stepper.compact > :global(.btn-engineering-wizard_title) {
    justify-self: center;
    font-size: var(--ew-font-size-body);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding-bottom: 16px;
  }

  .validation-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .bottom-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    gap: 12px;
    box-sizing: border-box;
    height: var(--editor-bottom-bar-height);
    padding: 6px 24px;
    background-color: var(--oscd-plugin-ew-primary-bg);
  }

  .bottom-bar :global(.stepper-actions) {
    margin-left: auto;
  }

</style>
