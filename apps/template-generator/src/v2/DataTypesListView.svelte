<script lang="ts">
  import { onMount } from 'svelte';
  import { TypeKind, type SimpleDataType } from './model';
  import { getDataTypeService } from './type.service';
  import { pluginStore } from '@oscd-transnet-plugins/oscd-template-generator';
  import {
    OscdBasicDataTable,
    OscdIconActionButton,
  } from '@oscd-transnet-plugins/oscd-component';
  import {
    createDataTypeWorkflow,
    deleteDataTypeWorkflow,
    duplicateDataType,
    renameDataTypeWorkflow,
  } from './type.workflows';
  import { sortSimpleDataTypes } from './type.utils';
  import OscdButton from 'libs/oscd-component/src/oscd-button/OscdButton.svelte';
  import { setHomeTitle } from '@oscd-transnet-plugins/oscd-services/drawer';
  import { openTypeDetailsDrawer } from './type-details.drawer';
  import DataTypeFilter from './DataTypeFilter.svelte';
  import { getIdSettingsState } from './id-format-settings/id-format-settings.state.svelte';

  const service = getDataTypeService();

  let dataTypes = $state<SimpleDataType[]>([]);
  let error = $state<string | null>(null);
  let loading = $state(false);
  let query = $state<string>('');
  let dataTypeKind = $state<TypeKind | undefined>(TypeKind.LNodeType);
  let instance = $state<string | undefined>(undefined);
  let suspendedReloadDepth = 0;
  let hasPendingReload = false;

  const sortedDataTypes = $derived.by(() => {
    return sortSimpleDataTypes(dataTypes);
  });

  function loadDataTypes() {
    loading = true;
    error = null;
    try {
      dataTypes = service.list({
        query,
        typeKind: dataTypeKind,
        instanceType: instance,
      });
    } catch (err) {
      console.error('Error loading data types:', err);
      error = err instanceof Error ? err.message : String(err);
    } finally {
      loading = false;
    }
  }

  async function renameType(type: SimpleDataType) {
    await renameDataTypeWorkflow(type, service);
  }

  function duplicateType(type: SimpleDataType) {
    duplicateDataType(type, service);
  }

  async function deleteType(type: SimpleDataType) {
    await deleteDataTypeWorkflow(type, service);
  }

  async function openTypeDetails(type: SimpleDataType) {
    setHomeTitle('Type ' + type.id);
    suspendedReloadDepth += 1;
    try {
      await openTypeDetailsDrawer(type.id);
    } finally {
      suspendedReloadDepth = Math.max(0, suspendedReloadDepth - 1);
      if (hasPendingReload || suspendedReloadDepth === 0) {
        hasPendingReload = false;
        loadDataTypes();
      }
    }
  }

  async function createLNodeType() {
    const createResult = await createDataTypeWorkflow(TypeKind.LNodeType);
    if (!createResult) {
      return;
    }
  }

  $effect(() => {
    if (
      query !== undefined ||
      dataTypeKind !== undefined ||
      instance !== undefined
    ) {
      loadDataTypes();
    }
  });

  onMount(() => {
    getIdSettingsState().load();
    loadDataTypes();
    const unsubscribe = pluginStore.updates.subscribe(() => {
      if (suspendedReloadDepth > 0) {
        hasPendingReload = true;
        return;
      }

      loadDataTypes();
    });
    return () => unsubscribe();
  });
</script>

<div class="toolbar">
  <DataTypeFilter bind:query bind:dataTypeKind bind:instance />

  <OscdButton variant="unelevated" callback={createLNodeType}>
    ADD NEW LNODE TYPE
  </OscdButton>
</div>

<OscdBasicDataTable
  {loading}
  errorMsg={error}
  emptyText="No data types found."
  items={sortedDataTypes}
  onRowClick={(dataType) => openTypeDetails(dataType)}
  columns={[
    { key: 'id', header: 'Name' },
    { key: 'typeKind', header: 'Type Kind' },
    { key: 'instanceType', header: 'Instance Type' },
    { key: 'references', header: 'References' },
  ]}
>
  {#snippet actions({ item })}
    <OscdIconActionButton
      tooltip="Rename"
      type="edit"
      onClick={() => renameType(item)}
    />
    <OscdIconActionButton
      tooltip="Duplicate"
      type="duplicate"
      onClick={() => duplicateType(item)}
    />
    <OscdIconActionButton
      tooltip="Delete"
      type="delete"
      fillColor="red"
      onClick={() => deleteType(item)}
    />
  {/snippet}
</OscdBasicDataTable>

<style>
  .toolbar {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
</style>
