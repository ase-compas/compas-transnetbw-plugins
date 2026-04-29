<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Button from '@smui/button';
  import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
  import ProcessInfoBar from '../components/shared/ProcessInfoBar.svelte';
  import ProcessPluginEditor from '../features/processes/components/ProcessPluginEditor.svelte';
  import { engineeringProcessEditing, engineeringProcesses } from '../features/processes/stores.svelte';
  import { addProcess } from '../features/processes/mutations.svelte';
  import { saveProcess } from '../features/processes/repository.svelte';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import {
    addPluginToGroups,
    removePluginFromGroups,
    removeAllPluginsFromGroups,
    addGroupToGroups,
  } from '../features/processes/pluginGroupOps';

  interface Props {
    handleCancel: () => void;
    handleSaved: (process: Process) => void;
  }

  let { handleCancel, handleSaved }: Props = $props();

  let name = $state('');
  let nameInvalid = $derived(name.trim().length === 0);
  let description = $state('');
  let procId = $state('');
  let idTouched = $state(false);
  let pluginGroups = $state<PluginGroup[]>([{ title: 'Ungrouped', plugins: [] }]);
  let saving = $state(false);

  let canSave = $derived(Boolean(name.trim()));

  const slugify = (s: string) =>
    s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  $effect(() => { if (!idTouched) procId = slugify(name); });

  async function save() {
    if (!canSave || saving) return;

    const baseId = procId.trim() || slugify(name) || 'process';
    const existingIds = new Set((engineeringProcesses.processes ?? []).map((p) => p.id));
    let resolvedId = baseId;

    if (existingIds.has(baseId)) {
      let i = 2;
      let suggested = `${baseId}-${i}`;
      while (existingIds.has(suggested)) { i++; suggested = `${baseId}-${i}`; }

      const collision = await openDialog(OscdConfirmDialog, {
        title: 'Process ID already in use',
        message: `A process with ID "${baseId}" already exists. Use "${suggested}" instead?`,
        confirmActionText: 'Use suggested ID',
        cancelActionText: 'Cancel',
      });

      if (collision?.type !== 'confirm') return;
      resolvedId = suggested;
      procId = suggested;
    }

    const created = addProcess({
      id: resolvedId,
      version: '1.0.0',
      name: name.trim(),
      description: description.trim(),
      pluginGroups: $state.snapshot(pluginGroups) as PluginGroup[],
    });

    engineeringProcessEditing.isEditing = false;
    saving = true;
    try {
      await saveProcess(created);
      toastService.success('Process saved', `"${created.name}" was saved to the database.`);
    } catch {
      toastService.error('Save failed', `"${created.name}" was added locally but could not be saved to the database.`);
    } finally {
      saving = false;
    }

    handleSaved(created);
  }

  function cancel() {
    engineeringProcessEditing.isEditing = false;
    handleCancel();
  }

  onMount(() => { engineeringProcessEditing.isEditing = true; });
  onDestroy(() => { engineeringProcessEditing.isEditing = false; });
</script>

<div class="page">
  <div class="topbar">
    <h2 class="title">Create new process</h2>
    <div class="topbar__actions">
      <Button
        variant="outlined"
        style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
        onclick={cancel}
      >Cancel</Button>
      <Button
        variant="raised"
        style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
        onclick={save}
        disabled={!canSave || saving}
      >{saving ? 'Saving…' : 'Save'}</Button>
    </div>
  </div>

  <ProcessInfoBar
    {name}
    processId={procId}
    version="1.0.0"
    current={true}
    {description}
    {nameInvalid}
    processIdDisabled={false}
    onNameChange={(v) => (name = v)}
    onDescriptionChange={(v) => (description = v)}
    onProcessIdChange={(v) => { procId = v; idTouched = true; }}
  />

  <ProcessPluginEditor
    {pluginGroups}
    onRemoveOne={(id) => { pluginGroups = removePluginFromGroups(pluginGroups, id); }}
    onRemoveAll={() => { pluginGroups = removeAllPluginsFromGroups(pluginGroups); }}
    onAddGroup={(name, pos) => { pluginGroups = addGroupToGroups(pluginGroups, name, pos); }}
    onUpdateGroups={(updated) => { pluginGroups = updated; }}
    onAddPlugin={(p, groupTitle) => { pluginGroups = addPluginToGroups(pluginGroups, p, groupTitle); }}
  />
</div>

<style>
  * { font-family: 'Roboto', sans-serif; }

  .page {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    /*
     * Controls the max-height of the plugin panels.
     * Increase this value if panels still overflow (accounts for page chrome + OpenSCD header/tabs).
     */
    --oscd-panel-max-height: calc(100vh - 23rem);
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-shrink: 0;
  }

  .title {
    margin: 0;
    color: var(--primary-base);
    font-size: var(--ew-font-size-heading, 1.125rem);
    font-weight: var(--ew-font-weight-heading, 600);
  }

  .topbar__actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
</style>

