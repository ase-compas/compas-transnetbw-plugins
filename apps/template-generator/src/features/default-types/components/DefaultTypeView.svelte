<script lang="ts">
  import { onMount } from 'svelte';
  import {
    OscdBasicDataTable,
    OscdIconActionButton
  } from '@oscd-transnet-plugins/oscd-component';
  import DataTypeFilter from '../../type-details/components/ui/DataTypeFilter.svelte';
  import { TypeKind } from '../../../shared/model';

  type DefaultTypeRow = {
    id: string;
    instance: string;
    version?: string;
    root: string;
    description: string;
    subtypes: number;
  }

  let data: DefaultTypeRow[] = $state([]);
  let errorMsg = $state('');
  let loading = $state(true);
  let query = $state('');
  let typeKind = $state<TypeKind | undefined>(undefined);
  let instance = $state<string | undefined>(undefined);

  const columns = [
    { header: 'Type', key: 'type' },
    { header: 'Instance', key: 'instance' },
    { header: 'Root-ID', key: 'root' },
    { header: 'Version', key: 'version' },
    { header: 'Sub-Types', key: 'subtypes' }
  ];

  onMount(() => {
  });


  function handleOnDelete(event: {item: DefaultTypeRow}) {
  }

</script>

<div class="container">
  <DataTypeFilter bind:query bind:dataTypeKind={typeKind} bind:instance />

<OscdBasicDataTable
  items={[]}
  {columns}
  {loading}
  emptyText="No default types found."
  headerBg="rgba(0,0,0,0.1)"
  rowBg="#ffffff"
  hasActions
>
  {#snippet actions(item)}
    <OscdIconActionButton type="delete" fillColor="red" tooltip="Delete Default" onClick={() => handleOnDelete(item)} />
  {/snippet}
</OscdBasicDataTable>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>