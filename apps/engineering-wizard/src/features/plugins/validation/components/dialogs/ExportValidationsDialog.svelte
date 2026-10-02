<script lang="ts">
  import Button, { Group, GroupItem } from '@smui/button';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import type { Plugin, Process, XPathValidation } from '@oscd-transnet-plugins/shared';
  import {
    createValidationExportFileName,
    downloadValidationExport,
  } from '../../validationJson';
  import { getValidationsForScope } from '../../../../processes/mutations.svelte';

  interface Props {
    open?: boolean;
    process: Process | null;
    plugin: Plugin | null;
  }

  let { open = $bindable(false), process, plugin }: Props = $props();
  let selectedRuleIndexes = $state<number[]>([]);

  const validations = $derived.by(() => {
    if (!process || !plugin) return [] as XPathValidation[];
    return getValidationsForScope(plugin.validations, process.id, plugin.id);
  });

  $effect(() => {
    if (open) selectedRuleIndexes = validations.map((_, index) => index);
  });

  function selectAll() {
    selectedRuleIndexes = validations.map((_, index) => index);
  }

  function deselectAll() {
    selectedRuleIndexes = [];
  }

  function exportSelected() {
    if (!process || !plugin) return;

    const selectedIndexSet = new Set(selectedRuleIndexes);
    const selected = validations.filter((_, index) => selectedIndexSet.has(index));
    try {
      downloadValidationExport(createValidationExportFileName(plugin.name), selected);
      open = false;
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      toastService.error('Export failed', detail);
    }
  }

  function close() {
    open = false;
  }
</script>

<OscdBaseDialog
  title="Export validations"
  confirmActionText="Export"
  maxWidth="640px"
  maxHeight="700px"
  bind:open
  onConfirm={exportSelected}
  onCancel={close}
  onClose={close}
  confirmDisabled={selectedRuleIndexes.length === 0}
>
  {#snippet content()}
    <div class="export-dialog">
      <p>Select the validation rules to export for "{plugin?.name ?? ''}".</p>

      {#if validations.length > 0}
        <div class="validation-list">
          {#each validations as validation, index (`${validation.title}:${index}`)}
            <FormField>
              <Checkbox bind:group={selectedRuleIndexes} value={index} />
              {#snippet label()}
                <span class="validation-name">{validation.title}</span>
                <span class="validation-context">{validation.context}</span>
              {/snippet}
            </FormField>
          {/each}
        </div>
      {:else}
        <p class="empty-state">No validation rules are available to export.</p>
      {/if}

      <div class="selection-actions">
        <span>{selectedRuleIndexes.length} of {validations.length} selected</span>
        <Group variant="text" aria-label="Validation rule selection">
          <Button use={[GroupItem]} onclick={selectAll} disabled={validations.length === 0}>
            Select all
          </Button>
          <Button use={[GroupItem]} onclick={deselectAll} disabled={selectedRuleIndexes.length === 0}>
            Deselect all
          </Button>
        </Group>
      </div>
    </div>
  {/snippet}
</OscdBaseDialog>

<style>
  .export-dialog {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    gap: 1.5rem;
  }

  .export-dialog p {
    margin: 0;
  }

  .selection-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
    flex-shrink: 0;
  }

  .validation-list {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.25rem;
    min-height: 0;
    overflow-y: auto;
  }

  .validation-list :global(.mdc-form-field) {
    align-items: flex-start;
    padding: 0.5rem;
    border-bottom: 1px solid var(--base3);
  }

  .validation-list :global(.mdc-form-field label) {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    padding-top: 0.25rem;
  }

  .validation-name {
    font-weight: 500;
  }

  .validation-context {
    color: var(--base1);
    font-family: monospace;
    font-size: 0.8rem;
  }

  .empty-state {
    color: var(--base1);
  }
</style>
