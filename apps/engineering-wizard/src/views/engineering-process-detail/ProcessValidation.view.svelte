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
          class="icon-button"
          title="Run validation"
          aria-label="Run validation"
          onclick={() => handleValidate(item)}
        >
          <OscdPlayCircleIcon svgStyles="fill: var(--primary-base); width: 18px; height: 18px;" />
        </button>
        <button
          type="button"
          class="icon-button"
          title="Edit"
          aria-label="Edit validation"
          onclick={() => {
            const index = validationEntries.indexOf(item);
            onEditEntry?.(item, index);
          }}
        >
          <OscdEditIcon svgStyles="fill: var(--primary-base); width: 18px; height: 18px;" />
        </button>
        <button
          type="button"
          class="icon-button"
          title="Remove"
          aria-label="Remove validation"
          onclick={() => {
            const index = validationEntries.indexOf(item);
            onDeleteEntry?.(item, index);
          }}
        >
          <OscdDeleteIcon svgStyles="fill: #FF203A; width: 18px; height: 18px;" />
        </button>
      </div>
    {/snippet}
  </OscdBasicDataTable>
{/if}

<style>
  .actions-cell {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
  }

  .icon-button {
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 4px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: background-color 0.15s ease;
  }

  .icon-button:hover {
    background-color: #f2f2f2;
  }

  .icon-button:focus-visible {
    outline: 2px solid var(--primary-base);
    outline-offset: 2px;
  }
</style>
