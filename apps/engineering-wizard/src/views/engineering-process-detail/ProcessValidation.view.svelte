<script lang="ts">
  import type { Plugin, PluginGroup, XPathValidation } from '@oscd-transnet-plugins/shared';
  import { OscdDeleteIcon, OscdEditIcon, OscdPlayCircleIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { OscdBasicDataTable } from '@oscd-transnet-plugins/oscd-component';
  import { validateEntry } from '../../services/validationService';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';

  interface Props {
    pluginGroups?: PluginGroup[];
    selectedPlugin?: Plugin | null;
    onEditEntry?: (item: XPathValidation, index: number) => void;
  }

  let { pluginGroups = [], selectedPlugin = null, onEditEntry }: Props = $props();

  const validationEntries = $derived.by(() => {
    const procId = selectedEngineeringProcess?.process?.id;
    const pluginId = selectedPlugin?.id;
    if (!procId || !pluginId) return [] as XPathValidation[];

    return (selectedPlugin?.validations ?? []).filter(
      (v) => v.processId === procId && v.pluginId === pluginId
    );
  });

  const columns = [
    { key: 'title', header: 'Name', bold: true, width: '220px' },
    { key: 'context', header: 'Scope' },
    { key: 'assert', header: 'Condition' },
  ] as const;

  function onDelete(index: number) {
    const entry = validationEntries[index];
    console.log('delete validation entry', entry);
  }

  async function handleValidate(entry: XPathValidation) {
    try {
      const result = await validateEntry(entry);
      if (result.valid) {
        toastService.success('Validation passed', `"${entry.title}" passed successfully`);
      } else {
        const errorSummary = result.errors.map((e) => e.message).join('; ');
        toastService.error('Validation failed', errorSummary || `"${entry.title}" failed`);
      }
      console.log('Validation result for', entry.title, ':', result);
    } catch (err) {
      toastService.error('Validation error', String(err));
      console.error('Validation error:', err);
    }
  }
</script>

{#if selectedPlugin}
  <OscdBasicDataTable
    items={validationEntries}
    {columns}
    emptyText={`No validations configured for "${selectedPlugin.name}" yet.`}
    hasActions
    headerBg="var(--base3)"
    rowBg="var(--white)"
    getRowId={(item, i) => `${item.processId}:${item.pluginId}:${item.title}:${i}`}
  >
    {#snippet actions({ item })}
      <button
        type="button"
        class="action-btn action-btn--run"
        title="Run validation"
        aria-label="Run validation"
        onclick={() => handleValidate(item)}
      >
        <OscdPlayCircleIcon svgStyles="fill: var(--blue)" />
      </button>
      <button
        type="button"
        class="action-btn action-btn--edit"
        title="Edit"
        aria-label="Edit validation"
        onclick={() => {
          const index = validationEntries.indexOf(item);
          onEditEntry?.(item, index);
        }}
      >
        <OscdEditIcon svgStyles="fill: var(--primary-base)" />
      </button>
      <button
        type="button"
        class="action-btn action-btn--delete"
        title="Remove"
        aria-label="Remove validation"
      >
        <OscdDeleteIcon svgStyles="fill: var(--red)" />
      </button>
    {/snippet}
  </OscdBasicDataTable>
{/if}

<style>
  .action-btn {
    background: transparent;
    border: none;
    border-radius: 4px;
    padding: 0.25rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    transition: background-color 0.15s ease;
  }

  .action-btn:hover {
    background-color: var(--base3);
  }

  .action-btn:focus-visible {
    outline: 2px solid var(--primary-base);
    outline-offset: 2px;
  }
</style>
