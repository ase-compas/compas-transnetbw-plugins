<script lang="ts">
  import type { Plugin, PluginGroup, XPathValidation } from '@oscd-transnet-plugins/shared';
  import { OscdDeleteIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import { OscdBasicDataTable } from '@oscd-transnet-plugins/oscd-component';
  import { validateScl } from '../../services/simpleValidation';

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

  async function validateSclHandler() {
    return validateScl();
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
        class="delete-btn"
        title="Remove"
      >
        <OscdDeleteIcon svgStyles="fill: #FF203A" />
      </button>
    {/snippet}
  </OscdBasicDataTable>
{/if}

  <button
    type="button"
    class="validate-btn"
    onclick={validateSclHandler}
  >
    Test COMPAS Validation
  </button>

<style>
  .delete-btn {
    background: transparent;
    border: none;
    padding: 4px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }
</style>
