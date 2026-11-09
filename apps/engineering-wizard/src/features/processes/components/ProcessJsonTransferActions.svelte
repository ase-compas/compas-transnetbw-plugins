<script lang="ts">
  import Button, { Icon, Label } from '@smui/button';
  import { OscdUploadIcon, OscdDownloadIcon } from '@oscd-transnet-plugins/oscd-icons';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { engineeringProcesses, engineeringProcessesStatus } from '../stores.svelte';
  import { listPersistedProcessIds, saveProcess } from '../repository.svelte';
  import { addProcess } from '../mutations.svelte';
  import { downloadProcessExport, importProcessFiles } from '../processJson';

  let { action, selectedProcesses = [] }: {
    action: 'import' | 'export';
    selectedProcesses?: Process[];
  } = $props();
  let fileInput = $state<HTMLInputElement>();
  let importing = $state(false);

  function exportSelected() {
    try {
      downloadProcessExport(selectedProcesses);
    } catch (error) {
      toastService.error('Export failed', error instanceof Error ? error.message : String(error));
    }
  }

  async function importProcesses(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    input.value = '';
    if (!files.length || importing) return;
    importing = true;
    try {
      const { processes, failures } = await importProcessFiles(files);
      const persistedIds = processes.length > 0
        ? await listPersistedProcessIds()
        : new Set<string>();
      let imported = 0;
      for (const process of processes) {
        try {
          if (persistedIds.has(process.id) || engineeringProcesses.processes.some(({ id }) => id === process.id)) {
            throw new Error(`Process id "${process.id}" already exists. Existing processes are not overwritten.`);
          }
          const version = await saveProcess(process);
          persistedIds.add(process.id);
          addProcess({ ...process, version });
          imported++;
        } catch (error) {
          failures.push({
            name: process.name,
            reason: error instanceof Error ? error.message : String(error),
          });
        }
      }
      const summary = `${imported} process${imported === 1 ? '' : 'es'} imported.`;
      if (failures.length) {
        const detail = `${summary} Could not import: ${failures.map(({ name, reason }) => `"${name}": ${reason}`).join('; ')}`;
        if (imported) toastService.warn('Some processes could not be imported', detail, 15_000);
        else toastService.error('Import failed', detail, 15_000);
      } else {
        toastService.success('Processes imported', summary);
      }
    } catch (error) {
      toastService.error('Import failed', error instanceof Error ? error.message : String(error));
    } finally {
      importing = false;
    }
  }
</script>

<div class="ew-table-actions">
  {#if action === 'import'}
    <Button
      tag="button"
      variant="unelevated"
      class="ew-table-action ew-table-action--labeled"
      style="--mdc-theme-primary: var(--oscd-plugin-surface); --mdc-theme-on-primary: var(--oscd-plugin-brand); border: 0;"
      onclick={() => fileInput?.click()}
      disabled={importing || engineeringProcessesStatus.loading || !!engineeringProcessesStatus.error}
    >
      <Icon><OscdDownloadIcon svgStyles="fill: currentColor; width: 20px; height: 20px;" /></Icon>
      <Label>Import</Label>
    </Button>
  {:else}
    <Button
      tag="button"
      variant="unelevated"
      class="ew-table-action ew-table-action--labeled"
      style="--mdc-theme-primary: var(--oscd-plugin-surface); --mdc-theme-on-primary: var(--oscd-plugin-brand); border: 0;"
      onclick={exportSelected}
      disabled={selectedProcesses.length === 0}
    >
      <Icon><OscdUploadIcon svgStyles="fill: currentColor; width: 20px; height: 20px;" /></Icon>
      <Label>Export</Label>
    </Button>
  {/if}

</div>
{#if action === 'import'}
  <input
    bind:this={fileInput}
    hidden
    aria-label="Import processes JSON files"
    type="file"
    accept="application/json,.json"
    multiple
    onchange={importProcesses}
  />
{/if}

<style>
  .ew-table-actions :global(.ew-table-action:not(:disabled)) {
    cursor: pointer;
  }

  .ew-table-actions :global(.ew-table-action:disabled) {
    color: var(--oscd-plugin-text-muted);
    opacity: 0.5;
    cursor: default;
  }
</style>
