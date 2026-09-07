<script lang="ts">
  import type { CatalogueEntry } from '@oscd-transnet-plugins/api-compas-validation-library';
  import {
    OscdDeleteIcon,
    OscdOpenInNewIcon,
  } from '@oscd-transnet-plugins/oscd-icons';
  import Button from '../ui/Button.svelte';
  import TextField from '../ui/TextField.svelte';
  import Spinner from '../ui/Spinner.svelte';

  interface Props {
    entries: CatalogueEntry[];
    loading?: boolean;
    busy?: boolean;
    /** Label shown per entry when it can't be resolved to a nicer title. */
    itemLabel?: (entry: CatalogueEntry) => string;
    /** Names currently checked, for binding an entry (e.g. rule sets into a policy). */
    checkedNames?: string[];
    onToggleChecked?: (name: string) => void;
    /** Opens an entry for editing (e.g. drilling into a rule set's rules). */
    onOpen?: (name: string) => void;
    onDelete?: (name: string) => void | Promise<void>;
    createLabel: string;
    onCreate: (title: string, description: string) => void | Promise<void>;
  }

  const {
    entries,
    loading = false,
    busy = false,
    itemLabel = (entry) => entry.name,
    checkedNames,
    onToggleChecked,
    onOpen,
    onDelete,
    createLabel,
    onCreate,
  }: Props = $props();

  let creating = $state(false);
  let newTitle = $state('');
  let newDescription = $state('');
  let error = $state<string | undefined>(undefined);

  function isChecked(name: string): boolean {
    return checkedNames?.includes(name) ?? false;
  }

  async function submitCreate(event: SubmitEvent) {
    event.preventDefault();
    error = undefined;
    if (!newTitle.trim()) {
      error = 'Title is required.';
      return;
    }
    try {
      await onCreate(newTitle.trim(), newDescription.trim());
      newTitle = '';
      newDescription = '';
      creating = false;
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to create.';
    }
  }

  function cancelCreate() {
    creating = false;
    newTitle = '';
    newDescription = '';
    error = undefined;
  }
</script>

<div class="catalogue-browser">
  {#if loading}
    <div class="catalogue-loading">
      <Spinner color="var(--primary-base, #37474f)" />
      <span>Loading&hellip;</span>
    </div>
  {:else}
    <ul class="catalogue-list">
      {#each entries as entry (entry.name)}
        <li class="catalogue-item">
          {#if onToggleChecked}
            <label class="catalogue-checkbox">
              <input
                type="checkbox"
                checked={isChecked(entry.name)}
                disabled={busy}
                onchange={() => onToggleChecked(entry.name)}
              />
            </label>
          {/if}
          <div class="catalogue-item-info">
            <strong>{itemLabel(entry)}</strong>
            {#if entry.description}<p>{entry.description}</p>{/if}
          </div>
          <div class="catalogue-item-actions">
            {#if onOpen}
              <Button variant="outlined" onclick={() => onOpen(entry.name)} disabled={busy}>
                <OscdOpenInNewIcon svgStyles="fill: var(--primary-base, #37474f); width: 16px; height: 16px;" />
                <span>Open</span>
              </Button>
            {/if}
            {#if onDelete}
              <Button variant="outlined" onclick={() => onDelete(entry.name)} disabled={busy}>
                <OscdDeleteIcon svgStyles="fill: var(--primary-base, #37474f); width: 16px; height: 16px;" />
                <span>Delete</span>
              </Button>
            {/if}
          </div>
        </li>
      {:else}
        <li class="catalogue-list-empty">Nothing here yet.</li>
      {/each}
    </ul>
  {/if}

  {#if creating}
    <form class="catalogue-create-form" onsubmit={submitCreate}>
      <TextField bind:value={newTitle} label="Title" disabled={busy} invalid={!!error} />
      <TextField bind:value={newDescription} label="Description" disabled={busy} />
      {#if error}
        <p class="catalogue-create-error" role="alert">{error}</p>
      {/if}
      <div class="catalogue-create-actions">
        <Button variant="text" type="button" onclick={cancelCreate} disabled={busy}>Cancel</Button>
        <Button variant="unelevated" type="submit" disabled={busy}>Create</Button>
      </div>
    </form>
  {:else}
    <Button variant="unelevated" onclick={() => (creating = true)} disabled={busy}>
      <span>{createLabel}</span>
    </Button>
  {/if}
</div>

<style>
  .catalogue-browser {
    font-family: var(--ew-font-family, 'Inter', sans-serif);
  }

  .catalogue-loading {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--base01, #607d8b);
    font-size: var(--ew-font-size-body, 0.875rem);
    padding: 0.5rem 0;
  }

  .catalogue-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .catalogue-item {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    border: 1px solid var(--base2, #cfd8dc);
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background: var(--white, #ffffff);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .catalogue-item:hover {
    border-color: var(--base0, #90a4ae);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .catalogue-item-info {
    flex: 1;
    min-width: 0;
  }

  .catalogue-item-info strong {
    color: var(--base00, #37474f);
    font-weight: var(--ew-font-weight-medium, 500);
  }

  .catalogue-item-info p {
    margin: 0.25rem 0 0;
    font-size: var(--ew-font-size-small, 0.75rem);
    color: var(--base01, #607d8b);
  }

  .catalogue-item-actions {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .catalogue-list-empty {
    color: var(--base01, #607d8b);
    border: none;
    padding: 0.5rem 0;
    font-size: var(--ew-font-size-body, 0.875rem);
  }

  .catalogue-create-form {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 0.75rem;
    padding: 1rem;
    border: 1px solid var(--base2, #cfd8dc);
    border-radius: 6px;
    background: var(--base3, #eceff1);
  }

  .catalogue-create-error {
    color: var(--primary-base, #37474f);
    font-size: var(--ew-font-size-small, 0.75rem);
    margin: -0.5rem 0 0.5rem;
  }

  .catalogue-create-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }
</style>
