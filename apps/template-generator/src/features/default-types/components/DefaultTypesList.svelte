
<script lang="ts">
  import { onMount } from "svelte";
  import { DefaultTypesState } from "../state/default-types.state.svelte";
  import DataTypeFilter from "../../type-details/components/ui/DataTypeFilter.svelte";
  import OscdButton from "libs/oscd-component/src/oscd-button/OscdButton.svelte";
  import { DataTypeService } from "../../type-details/services/type.service";
  import OscdBasicDataTable from "libs/oscd-component/src/oscd-basic-data-table/OscdBasicDataTable.svelte";
  import OscdIconActionButton from "libs/oscd-component/src/oscd-icon-action-button/OscdIconActionButton.svelte";

  const defaultTypesState = new DefaultTypesState();

  interface Props {
    onCreateDefaultType?: () => void;
    onEditDefaultType?: (id: string) => void;
  }

  let { onCreateDefaultType = () => {}, onEditDefaultType = () => {} }: Props = $props();

  let query = $state('');

  const columns = [
    { header: 'Kind', key: 'kind' },
    { header: 'Instance', key: 'instance' },
    { header: 'Description', key: 'description' },
    { header: 'Version', key: 'version' },
  ];

  onMount(() => {
    defaultTypesState.load();
  });

</script>

<div class="toolbar">
  <DataTypeFilter
    bind:query 
    bind:dataTypeKind={defaultTypesState.kindFilter}
    bind:instance={defaultTypesState.instanceFilter}
    service={new DataTypeService(null, null)}/>
  <OscdButton variant="unelevated" callback={onCreateDefaultType}>
    New Default Type
  </OscdButton>
</div>


<OscdBasicDataTable
  items={defaultTypesState.filteredTypes}
  {columns}
  loading={defaultTypesState.loading}
  emptyText="No default types found."
  headerBg="rgba(0,0,0,0.1)"
  rowBg="#ffffff"
  hasActions
  onRowClick={(item) => onEditDefaultType(item.id)}
>
  {#snippet actions(item)}
    <OscdIconActionButton
        type="delete"
        fillColor="red"
        tooltip="Delete Default"
        onClick={() => console.warn("Delete default type: NOT IMPLEMENTED", item)} />
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