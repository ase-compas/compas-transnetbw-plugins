<script lang="ts">
  import Button, { Group, GroupItem } from '@smui/button';
  import type { Plugin, Process } from '@oscd-transnet-plugins/shared';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { addValidationsToPluginInProcess } from '../../../processes/mutations.svelte';
  import { importValidationFiles } from '../validationJson';
  import ExportValidationsDialog from './dialogs/ExportValidationsDialog.svelte';

  interface Props {
    process: Process | null;
    plugin: Plugin | null;
  }

  let { process, plugin }: Props = $props();

  let fileInput = $state<HTMLInputElement>();
  let exportDialogOpen = $state(false);
  let importing = $state(false);

  function selectImportFile() {
    fileInput?.click();
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
    use={[GroupItem]}
    variant="outlined"
    onclick={selectImportFile}
    disabled={!process || !plugin || importing}
  >
    Import JSON
  </Button>
  <Button
    use={[GroupItem]}
    variant="outlined"
    onclick={() => { exportDialogOpen = true; }}
    disabled={!process || !plugin}
  >
    Export JSON
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
<ExportValidationsDialog
  bind:open={exportDialogOpen}
  {process}
  {plugin}
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
