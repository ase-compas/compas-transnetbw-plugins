<script lang="ts">
  import Button, { Icon, Label } from '@smui/button';
  import { OscdUploadIcon, OscdDownloadIcon } from '@oscd-transnet-plugins/oscd-icons';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { engineeringProcesses, engineeringProcessesStatus } from '../stores.svelte';
  import { getPersistedProcesses, saveProcess } from '../repository.svelte';
  import { addProcess } from '../mutations.svelte';
  import { downloadProcessExport, importProcessFiles } from '../processJson';
  import { classifyProcessImport } from '../processImport';
  import { ProcessVersionConflictError } from '../process.service';

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
      const persisted = await getPersistedProcesses(
        new Set(processes.map(({ id }) => id)),
      );
      let imported = 0;
      let alreadyPresent = 0;
      const conflicts: { name: string; reason: string }[] = [];
      for (const process of processes) {
        try {
          const local = engineeringProcesses.processes.find(({ id }) => id === process.id);
          const remote = persisted.get(process.id);
          const existing = [local, remote].filter((entry): entry is Process => entry !== undefined);
          const decision = classifyProcessImport(process, existing);
          if (decision.status === 'already-present') {
            alreadyPresent++;
            continue;
          }
          if (decision.status === 'conflict') {
            conflicts.push({
              name: `${process.name} (ID "${process.id}")`,
              reason: decision.reason,
            });
            continue;
          }
          const version = await saveProcess(process);
          const saved = { ...process, version };
          persisted.set(process.id, saved);
          addProcess(saved);
          imported++;
        } catch (error) {
          const issue = {
            name: `${process.name} (ID "${process.id}")`,
            reason: error instanceof Error ? error.message : String(error),
          };
          if (error instanceof ProcessVersionConflictError) conflicts.push(issue);
          else failures.push(issue);
        }
      }
      const summary = `${imported} imported; ${alreadyPresent} already present; ${conflicts.length} conflicting; ${failures.length} failed.`;
      if (conflicts.length || failures.length) {
        const detail = [
          summary,
          ...conflicts.map(({ name, reason }) => `Conflict: ${name}: ${reason} Existing processes were not changed.`),
          ...failures.map(({ name, reason }) => `Failed: "${name}": ${reason}`),
        ].join(' ');
        if (imported || alreadyPresent || conflicts.length) {
          toastService.warn('Process import completed with issues', detail, 15_000);
        } else {
          toastService.error('Import failed', detail, 15_000);
        }
      } else {
        toastService.success('Process import complete', summary);
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
