<script lang="ts">
  import Button, { Icon, Label } from '@smui/button';
  import { OscdDownloadIcon, OscdUploadIcon } from '@oscd-transnet-plugins/oscd-icons';
  import type { Plugin, Process, XPathValidation } from '@oscd-transnet-plugins/shared';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { addValidationsToPluginInProcess } from '../../../processes/mutations.svelte';
  import { importValidationFiles, createValidationExportFileName, downloadValidationExport } from '../validationJson';

  interface Props {
    action: 'import' | 'export';
    process: Process | null;
    plugin: Plugin | null;
    selectedValidations?: XPathValidation[];
  }

  let { action, process, plugin, selectedValidations = [] }: Props = $props();

  let fileInput = $state<HTMLInputElement>();
  let importing = $state(false);
  const exportPlugin = $derived(
    process && selectedValidations.length > 0 ? plugin : null,
  );

  function selectImportFile() {
    fileInput?.click();
  }

  function exportSelected() {
    if (!exportPlugin) return;
    try {
      downloadValidationExport(createValidationExportFileName(exportPlugin.name), selectedValidations);
    } catch (error) {
      toastService.error('Export failed', error instanceof Error ? error.message : String(error));
    }
  }

  async function importValidations(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    input.value = '';
    if (files.length === 0 || !process || !plugin || importing) return;

    const activeProcess = process;
    const activePlugin = plugin;
    importing = true;
    try {
      const { validations, importedFiles, failures } =
        await importValidationFiles(files);

      addValidationsToPluginInProcess(
        activeProcess.id,
        activePlugin.id,
        validations,
      );
      const summary =
        `${importedFiles} of ${files.length} file${files.length === 1 ? '' : 's'} successfully imported; ` +
        `${validations.length} validation${validations.length === 1 ? '' : 's'} added to "${activePlugin.name}".`;

      if (failures.length > 0) {
        const detail = `${summary} Could not import: ${failures
          .map(({ name, reason }) => `"${name}": ${reason}`)
          .join('; ')}`;
        if (importedFiles > 0) {
          toastService.warn('Some files could not be imported', detail, 15_000);
        } else {
          toastService.error('Import failed', detail, 15_000);
        }
      } else {
        toastService.success('Validations imported', summary);
      }
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      toastService.error('Import failed', detail);
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
      onclick={selectImportFile}
      disabled={!process || !plugin || importing}
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
      disabled={!exportPlugin}
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
    aria-label="Import validation JSON files"
    type="file"
    accept="application/json,.json"
    multiple
    onchange={importValidations}
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
