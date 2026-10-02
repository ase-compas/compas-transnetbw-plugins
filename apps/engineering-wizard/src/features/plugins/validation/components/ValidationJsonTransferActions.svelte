<script lang="ts">
  import Button, { Group, GroupItem } from '@smui/button';
  import type { Plugin, Process } from '@oscd-transnet-plugins/shared';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { addValidationsToPluginInProcess } from '../../../processes/mutations.svelte';
  import {
    MAX_VALIDATION_IMPORT_BYTES,
    parseValidationImportJson,
  } from '../validationJson';
  import ExportValidationsDialog from './dialogs/ExportValidationsDialog.svelte';

  interface Props {
    process: Process | null;
    plugin: Plugin | null;
  }

  let { process, plugin }: Props = $props();

  let fileInput = $state<HTMLInputElement>();
  let exportDialogOpen = $state(false);

  function selectImportFile() {
    fileInput?.click();
  }

  async function importValidations(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    input.value = '';
    if (files.length === 0 || !process || !plugin) return;

    const activeProcess = process;
    const activePlugin = plugin;
    try {
      const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
      if (totalBytes > MAX_VALIDATION_IMPORT_BYTES) {
        throw new Error('The selected files exceed the combined 5 MB import limit.');
      }

      const imported = (await Promise.all(
        files.map(async (file) => {
          try {
            return parseValidationImportJson(
              await file.text(),
              activeProcess.id,
              activePlugin.id,
            );
          } catch (error) {
            const detail = error instanceof Error ? error.message : String(error);
            throw new Error(`"${file.name}": ${detail}`);
          }
        }),
      )).flat();

      addValidationsToPluginInProcess(
        activeProcess.id,
        activePlugin.id,
        imported,
      );
      toastService.success(
        'Validations imported',
        `${imported.length} validation${imported.length === 1 ? '' : 's'} from ${files.length} file${files.length === 1 ? '' : 's'} added to "${activePlugin.name}".`,
      );
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      toastService.error('Import failed', detail);
    }
  }
</script>

<Group variant="outlined" aria-label="Validation JSON transfer">
  <Button
    use={[GroupItem]}
    variant="outlined"
    onclick={selectImportFile}
    disabled={!process || !plugin}
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
