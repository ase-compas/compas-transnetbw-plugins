<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Button from '@smui/button';
  import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';
  import { OscdCompareArrowsIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
  import PluginEditorPanel from '../features/processes/components/panels/PluginEditorPanel.svelte';
  import PluginExternalPanel from '../features/processes/components/panels/PluginExternalPanel.svelte';
  import { engineeringProcessEditing, engineeringProcesses } from '../features/processes/stores.svelte';
  import { addProcess } from '../features/processes/mutations.svelte';
  import { saveProcess } from '../features/processes/repository.svelte';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { getFilteredCorePlugins } from '../features/plugins/filteredPlugins.svelte';
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
  let searchTerm = $state('');
  let pluginGroups = $state<PluginGroup[]>([{ title: 'Ungrouped', plugins: [] }]);
  let saving = $state(false);

  let canSave = $derived(Boolean(name.trim()));
  let filteredPlugins = $derived(getFilteredCorePlugins(searchTerm));

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
      >CANCEL</Button>
      <Button
        variant="raised"
        style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
        onclick={save}
        disabled={!canSave || saving}
      >{saving ? 'SAVING…' : 'SAVE'}</Button>
    </div>
  </div>

  <div class="form">
    <div class="field">
      <Textfield variant="outlined" label="Process name" bind:value={name} invalid={nameInvalid}>
        {#snippet helper()}<HelperText validationMsg>Process name is required.</HelperText>{/snippet}
      </Textfield>
    </div>
    <div class="field">
      <Textfield variant="outlined" label="Process id" bind:value={procId} oninput={() => (idTouched = true)} />
    </div>
    <div class="field">
      <Textfield variant="outlined" label="Version" value="1.0.0" disabled />
    </div>
    <div class="field">
      <Textfield variant="outlined" label="Description" bind:value={description} />
    </div>
  </div>

  <div class="process-definition-view">
    <PluginEditorPanel
      {pluginGroups}
      onRemoveOne={(id) => { pluginGroups = removePluginFromGroups(pluginGroups, id); }}
      onRemoveAll={() => { pluginGroups = removeAllPluginsFromGroups(); }}
      onAddGroup={(name, pos) => { pluginGroups = addGroupToGroups(pluginGroups, name, pos); }}
      onUpdateGroups={(updated) => { pluginGroups = updated; }}
    />

    <div class="drag-and-drop-info">
      <OscdCompareArrowsIcon svgStyles="fill: #6B9197" />
      <p>SELECT OR DRAG &amp; DROP PLUGINS</p>
    </div>

    <PluginExternalPanel
      plugins={filteredPlugins}
      bind:searchTerm
      onAddPlugin={(p) => { pluginGroups = addPluginToGroups(pluginGroups, p); }}
    />
  </div>
</div>

<style>
  * { font-family: 'Roboto', sans-serif; }

  .page {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .title {
    margin: 0;
    color: var(--primary-base);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .topbar__actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .form {
    display: grid;
    grid-template-columns: 1fr 1fr 160px 1fr;
    gap: 12px;
    align-items: start;
  }

  .field { min-width: 0; }

  .field :global(.mdc-text-field) { width: 100%; }

  .process-definition-view {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .drag-and-drop-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    gap: 12px;
    min-width: 240px;
  }

  .drag-and-drop-info p {
    color: #6B9197;
    font-weight: 500;
    margin: 0;
  }
</style>
