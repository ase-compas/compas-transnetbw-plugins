<script lang="ts">
  import type { Plugin, XPathValidation } from '@oscd-transnet-plugins/shared';
  import { OscdControlPointDuplicateIcon, OscdDeleteIcon, OscdEditIcon, OscdPlayCircleIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { OscdBasicDataTable } from '@oscd-transnet-plugins/oscd-component';
  import { validateEntry, type ValidationError } from '../../services/validationService';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { onDestroy } from 'svelte';

  function formatToastDetail(errors: ValidationError[], userMessage: string): string {
    if (errors.length === 0) return '';
    const msg = userMessage.trim();
    const parts = errors.map((e) => {
      const message = msg.length > 0 ? msg : e.message;
      const note = msg.length > 0 && e.message.startsWith('No context nodes found')
        ? 'No context nodes found'
        : undefined;
      return note ? `${message} (${note})` : message;
    });
    return [...new Set(parts)].join('; ');
  }

  interface Props {
    selectedPlugin?: Plugin | null;
    onEditEntry?: (item: XPathValidation, index: number) => void;
    onDeleteEntry?: (item: XPathValidation, index: number) => void;
    onDuplicateEntry?: (item: XPathValidation, index: number) => void;
    selectedValidations?: readonly XPathValidation[];
    onSelectionChange?: (entries: XPathValidation[]) => void;
    visibleEntries?: XPathValidation[];
  }

  let { selectedPlugin = null, onEditEntry, onDeleteEntry, onDuplicateEntry, selectedValidations = [], onSelectionChange, visibleEntries }: Props = $props();

  const validationEntries = $derived(selectedPlugin?.validations ?? []);
  const validationIds = new WeakMap<XPathValidation, number>();
  let nextValidationId = 0;

  function getValidationId(entry: XPathValidation): number {
    let id = validationIds.get(entry);
    if (id === undefined) {
      id = nextValidationId++;
      validationIds.set(entry, id);
    }
    return id;
  }

  let highlightedRowIds = $state<number[]>([]);
  let previousPlugin: Plugin | null = null;
  let previousIds = new Set<string | number>();
  let highlightTimeout: ReturnType<typeof setTimeout> | undefined;

  $effect(() => {
    const entries = validationEntries;
    const ids = entries.map((entry) => entry.id ?? getValidationId(entry));
    const changedPlugin = selectedPlugin !== previousPlugin;
    const added = changedPlugin ? [] : entries.filter((_, index) => !previousIds.has(ids[index]));
    previousPlugin = selectedPlugin;
    previousIds = new Set(ids);

    if (changedPlugin || added.length > 0) {
      clearTimeout(highlightTimeout);
      highlightedRowIds = added.map(getValidationId);
      if (added.length > 0) {
        highlightTimeout = setTimeout(() => { highlightedRowIds = []; }, 1600);
      }
    }
  });

  onDestroy(() => clearTimeout(highlightTimeout));

  function selectValidations(ids: (string | number)[]) {
    const selectedIds = new Set(ids);
    onSelectionChange?.(validationEntries.filter((entry) => selectedIds.has(getValidationId(entry))));
  }

  const columns = [
    { key: 'title', header: 'Name', bold: true, width: 'min(22cqw, 252px)', tooltip: true },
    { key: 'context', header: 'Scope', width: 'min(28cqw, 392px)', tooltip: true },
    { key: 'assert', header: 'Condition', tooltip: true },
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
    scrollable
    tableAriaLabel="Validation rules"
    items={visibleEntries ?? validationEntries}
    {columns}
    tableLayout="fixed"
    actionsWidth="192px"
    emptyText={validationEntries.length === 0
      ? `No validations configured for "${selectedPlugin.name}" yet.`
      : 'No matching validation rules.'}
    hasActions
    headerBg="var(--oscd-plugin-surface-muted)"
    rowBg="var(--oscd-plugin-surface)"
    getRowId={getValidationId}
    {highlightedRowIds}
    selectable
    bind:selectedRowIds={() => selectedValidations.map(getValidationId), selectValidations}
    getSelectionLabel={(item) => `Select validation ${item.title}`}
  >
    {#snippet actions({ item })}
      <div class="ew-table-actions">
        <button
          type="button"
          class="ew-table-action"
          title="Run validation"
          aria-label="Run validation"
          onclick={() => handleValidate(item)}
        >
          <OscdPlayCircleIcon svgStyles="fill: currentColor;" />
        </button>
        <button
          type="button"
          class="ew-table-action"
          title="Edit"
          aria-label="Edit validation"
          onclick={() => {
            const index = validationEntries.indexOf(item);
            onEditEntry?.(item, index);
          }}
        >
          <OscdEditIcon svgStyles="fill: currentColor;" />
        </button>
        <button
          type="button"
          class="ew-table-action"
          title="Duplicate"
          aria-label="Duplicate validation"
          onclick={() => {
            const index = validationEntries.indexOf(item);
            onDuplicateEntry?.(item, index);
          }}
        >
          <OscdControlPointDuplicateIcon svgStyles="fill: currentColor;" />
        </button>
        <button
          type="button"
          class="ew-table-action ew-table-action--danger"
          title="Remove"
          aria-label="Remove validation"
          onclick={() => {
            const index = validationEntries.indexOf(item);
            onDeleteEntry?.(item, index);
          }}
        >
          <OscdDeleteIcon svgStyles="fill: currentColor;" />
        </button>
      </div>
    {/snippet}
  </OscdBasicDataTable>
{/if}
