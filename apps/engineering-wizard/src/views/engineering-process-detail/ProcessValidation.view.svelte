<script lang="ts">
  import type { Plugin, PluginGroup, XPathValidation } from '@oscd-transnet-plugins/shared';
  import { OscdDeleteIcon, OscdPlayCircleIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { OscdBasicDataTable } from '@oscd-transnet-plugins/oscd-component';
  import { validateEntry } from '../../services/validationService';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';

  interface Props {
    pluginGroups?: PluginGroup[];
    selectedPlugin?: Plugin | null;
  }

  let { pluginGroups = [], selectedPlugin = null }: Props = $props();

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
    headerBg="#DAE3E6"
    rowBg="#ffffff"
    getRowId={(item, i) => `${item.processId}:${item.pluginId}:${item.title}:${i}`}
  >
    {#snippet actions({ item })}
      <button
        type="button"
        class="action-btn"
        title="Run validation"
        onclick={() => handleValidate(item)}
      >
        <OscdPlayCircleIcon svgStyles="fill: #1565C0" />
      </button>
      <button
        type="button"
        class="action-btn"
        title="Remove"
      >
        <OscdDeleteIcon svgStyles="fill: #FF203A" />
      </button>
    {/snippet}
  </OscdBasicDataTable>
{/if}

<style>
  .action-btn {
    background: transparent;
    border: none;
    padding: 4px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }
</style>
