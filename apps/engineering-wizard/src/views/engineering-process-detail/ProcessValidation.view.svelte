<script lang="ts">
  import type { Plugin, XPathValidation } from '@oscd-transnet-plugins/shared';
  import { OscdDeleteIcon, OscdEditIcon, OscdPlayCircleIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { OscdBasicDataTable } from '@oscd-transnet-plugins/oscd-component';
  import { validateEntry, type ValidationError } from '../../services/validationService';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';

  function formatToastDetail(errors: ValidationError[], userMessage: string): string {
    if (errors.length === 0) return '';
    const msg = userMessage.trim();
    const parts = errors.map((e) => (msg.length > 0 ? msg : e.message));
    return [...new Set(parts)].join('; ');
  }

  interface Props {
    selectedPlugin?: Plugin | null;
    onEditEntry?: (item: XPathValidation, index: number) => void;
    onDeleteEntry?: (item: XPathValidation, index: number) => void;
  }

  let { selectedPlugin = null, onEditEntry, onDeleteEntry }: Props = $props();

  const validationEntries = $derived.by(() => {
    const procId = selectedEngineeringProcess?.process?.id;
    if (!procId || !selectedPlugin) return [] as XPathValidation[];

    return (selectedPlugin.validations ?? []).filter((v) => v.processId === procId);
  });

  const columns = [
    { key: 'title', header: 'Name', bold: true, width: '220px' },
    { key: 'context', header: 'Scope' },
    { key: 'assert', header: 'Condition' },
  ] as const;

  async function handleValidate(entry: XPathValidation) {
    try {
      const result = await validateEntry(entry);
      if (result.valid) {
        toastService.success('Validation passed', `"${entry.title}" passed successfully`);
      } else {
        const detail = formatToastDetail(result.errors, entry.message ?? '');
        toastService.error('Validation failed', detail || `"${entry.title}" failed`);
      }
    } catch (err) {
      toastService.error('Validation error', String(err));
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
      <div class="actions-cell">
        <button
          type="button"
          class="action-btn action-btn--run"
          title="Run validation"
          aria-label="Run validation"
          onclick={() => handleValidate(item)}
        >
          <OscdPlayCircleIcon svgStyles="fill: var(--primary-base)" />
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
          onclick={() => {
            const index = validationEntries.indexOf(item);
            onDeleteEntry?.(item, index);
          }}
        >
          <OscdDeleteIcon svgStyles="fill: var(--red)" />
        </button>
      </div>
    {/snippet}
  </OscdBasicDataTable>
{/if}

<style>
  .actions-cell {
    display: flex;
    justify-content: flex-end;
  }

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
