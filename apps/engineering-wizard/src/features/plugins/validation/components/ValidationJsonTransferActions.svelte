<script lang="ts">
  import Button, { Group, GroupItem } from '@smui/button';
  import type { Plugin, Process, XPathValidation } from '@oscd-transnet-plugins/shared';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { addValidationsToPluginInProcess } from '../../../processes/mutations.svelte';
  import { importValidationFiles, createValidationExportFileName, downloadValidationExport } from '../validationJson';

  interface Props {
    process: Process | null;
    plugin: Plugin | null;
    selectedValidations?: XPathValidation[];
  }

  let { process, plugin, selectedValidations = [] }: Props = $props();

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

<Group variant="outlined" aria-label="Validation JSON transfer">
  <Button
    tag="button"
    use={[GroupItem]}
    variant="outlined"
    onclick={selectImportFile}
    disabled={!process || !plugin || importing}
  >
    Import JSON
  </Button>
  <Button
    tag="button"
    use={[GroupItem]}
    variant="outlined"
    onclick={exportSelected}
    disabled={!exportPlugin}
  >
    Export selected ({selectedValidations.length})
  </Button>
</Group>
<input
  bind:this={fileInput}
  class="visually-hidden"
  type="file"
  accept="application/json,.json"
  multiple
  onchange={importValidations}
/>

<style>
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
