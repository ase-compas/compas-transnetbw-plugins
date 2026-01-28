<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';

  import type { Plugin, PluginGroup, Process } from '@oscd-transnet-plugins/shared';

  import { OscdCompareArrowsIcon, OscdRemoveIcon } from '@oscd-transnet-plugins/oscd-icons';
  import PluginBasePanel from '../features/processes/components/panels/PluginBasePanel.svelte';

  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { OscdConfirmDialog } from '@oscd-transnet-plugins/oscd-component';
  import PluginExternalPanel from '../features/processes/components/panels/PluginExternalPanel.svelte';
  import { corePlugins, engineeringProcessEditing } from '../features/processes/stores.svelte';
  import { createPluginId } from '../features/plugins/id';
  import { addProcess } from '../features/processes/mutations.svelte';

  interface Props {
    handleCancel: () => void;
    handleSaved: (process: Process) => void;
  }

  let { handleCancel, handleSaved }: Props = $props();

  let name = $state('');
  let description = $state('');
  let version = $state('1.0.0');

  let procId = $state('');
  let idTouched = $state(false);

  let pluginGroups = $state<PluginGroup[]>([{ title: 'Ungrouped', plugins: [] }]);

  let searchTerm = $state('');

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  $effect(() => {
    if (!idTouched) procId = slugify(name);
  });

  function allProcessPluginIds(groups: PluginGroup[]): Set<string> {
    const ids = new Set<string>();
    for (const g of groups ?? []) for (const p of g.plugins ?? []) ids.add(p.id);
    return ids;
  }

  function uniquePluginId(base: string, groups: PluginGroup[]): string {
    const existing = allProcessPluginIds(groups);
    if (!existing.has(base)) return base;

    let i = 2;
    let candidate = `${base}-${i}`;
    while (existing.has(candidate)) {
      i += 1;
      candidate = `${base}-${i}`;
    }
    return candidate;
  }

  function ensureGroup(title = 'Ungrouped') {
    let group = pluginGroups.find(g => g.title === title);
    if (!group) {
      group = { title, plugins: [] };
      pluginGroups = [...pluginGroups, group];
    }
    group.plugins ??= [];
    return group;
  }

  function normalizePluginIds(groups: PluginGroup[]): PluginGroup[] {
    const result: PluginGroup[] = [];
    const seen = new Set<string>();

    for (const g of groups ?? []) {
      const plugins: Plugin[] = [];
      for (const p of g.plugins ?? []) {
        let id = p.id;
        if (seen.has(id)) {
          id = uniquePluginId(id, result.concat([{ ...g, plugins }]));
        }
        seen.add(id);
        plugins.push({ ...p, id });
      }
      result.push({ ...g, plugins });
    }
    return result;
  }

  function addPluginToDraft(plugin: Plugin, groupTitle = 'Ungrouped') {
    const group = ensureGroup(groupTitle);
    const id = uniquePluginId(plugin.id, pluginGroups);
    group.plugins.push({ ...plugin, id });
    pluginGroups = [...pluginGroups];
  }

  async function handleRemoveAll() {
    const result = await openDialog(OscdConfirmDialog, {
      title: 'Remove all entries?',
      message:
        'This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.',
      confirmActionText: 'Remove All',
      cancelActionText: 'Cancel',
      confirmActionColor: 'danger'
    });

    if (result.type !== 'confirm') return;
    for (const g of pluginGroups) (g.plugins ??= []).length = 0;
    pluginGroups = [...pluginGroups];
  }

  function handleRemoveOne(pluginId: string) {
    for (let gi = 0; gi < pluginGroups.length; gi += 1) {
      const g = pluginGroups[gi];
      const idx = (g.plugins ?? []).findIndex(p => p.id === pluginId);
      if (idx === -1) continue;

      g.plugins.splice(idx, 1);

      if (g.plugins.length === 0) {
        pluginGroups.splice(gi, 1);
      }

      pluginGroups = [...pluginGroups];
      return;
    }
  }

  function handleAddGroup(title: string, position?: number) {
    const t = title.trim();
    if (!t) return;
    if (pluginGroups.some(g => g.title === t)) return;

    const newGroup: PluginGroup = { title: t, plugins: [] };

    if (position === undefined) {
      pluginGroups = [...pluginGroups, newGroup];
      return;
    }

    const idx = Math.max(0, position - 1);
    const next = [...pluginGroups];
    next.splice(idx, 0, newGroup);
    pluginGroups = next;
  }

  function handleUpdateGroups(updated: PluginGroup[]) {
    pluginGroups = normalizePluginIds(updated);
  }

  let showRemoveAll = $derived(pluginGroups.flatMap(g => g.plugins ?? []).length > 0);

  let filteredPlugins = $derived.by(() => {
    const term = searchTerm.toLowerCase().trim();

    const allPlugins = (corePlugins.plugins ?? []).map((p) => ({
      id: createPluginId(p.name),
      name: p.name,
      src: p.src,
      type: 'internal'
    })) as Plugin[];

    if (!term) return allPlugins;
    return allPlugins.filter(p => p.name.toLowerCase().includes(term));
  });

  let canSave = $derived(Boolean(name.trim()));

  function save() {
    if (!canSave) return;

    const draft: Process = {
      id: procId.trim() || slugify(name) || 'process',
      version: version.trim() || '1.0.0',
      name: name.trim(),
      description: description.trim(),
      pluginGroups: $state.snapshot(pluginGroups) as PluginGroup[]
    };

    const created = addProcess(draft);

    engineeringProcessEditing.isEditing = false;

    handleSaved(created);
  }

  function cancel() {
    engineeringProcessEditing.isEditing = false;
    handleCancel();
  }

  onMount(() => {
    engineeringProcessEditing.isEditing = true;
  });

  onDestroy(() => {
    engineeringProcessEditing.isEditing = false;
  });
</script>

<div class="page">
  <div class="topbar">
    <div class="topbar__left">
      <h2 class="title">Create new process</h2>
    </div>

    <div class="topbar__actions">
      <Button
        variant="outlined"
        style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
        onclick={cancel}
      >
        CANCEL
      </Button>

      <Button
        variant="raised"
        style="--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)"
        onclick={save}
        disabled={!canSave}
      >
        SAVE
      </Button>
    </div>
  </div>

  <div class="form">
    <Textfield variant="outlined" label="Process name" bind:value={name} />

    <Textfield
      variant="outlined"
      label="Process id"
      bind:value={procId}
      on:input={() => (idTouched = true)}
    />

    <Textfield variant="outlined" label="Version" bind:value={version} />

    <Textfield variant="outlined" label="Description" bind:value={description} />
  </div>

  <div class="process-definition-view">
    <PluginBasePanel
      {pluginGroups}
      title="Process"
      {headerAction}
      {itemAction}
      onAddGroup={(name, position) => handleAddGroup(name, position)}
      onUpdateGroups={(updatedGroups) => handleUpdateGroups(updatedGroups)}
    />

    <div class="drag-and-drop-info">
      <OscdCompareArrowsIcon svgStyles="fill: #6B9197" />
      <p>SELECT OR DRAG &amp; DROP PLUGINS</p>
    </div>

    <PluginExternalPanel
      plugins={filteredPlugins}
      bind:searchTerm
      onAddPlugin={(p) => addPluginToDraft(p, 'Ungrouped')}
    />
  </div>
</div>

{#snippet headerAction()}
  {#if showRemoveAll}
    <Button
      style="background-color: #FF203A"
      variant="raised"
      aria-label="Remove all plugins"
      onclick={handleRemoveAll}
    >
      REMOVE ALL
    </Button>
  {/if}
{/snippet}

{#snippet itemAction({ plugin })}
  <button
    type="button"
    class="plugin-list__removeBtn"
    aria-label={`Remove ${plugin.name}`}
    onclick={() => handleRemoveOne(plugin.id)}
  >
    <OscdRemoveIcon svgStyles="fill: #FF203A" />
  </button>
{/snippet}

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
    align-items: end;
  }

  .process-definition-view {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .drag-and-drop-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    gap: 12px;
    min-width: 240px;
  }

  .drag-and-drop-info p{
    color: #6B9197;
    font-weight: 500;
    margin: 0;
  }

  .plugin-list__removeBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border-radius: 0.375rem;
  }

  .plugin-list__removeBtn:hover {
    opacity: 0.9;
  }
</style>
