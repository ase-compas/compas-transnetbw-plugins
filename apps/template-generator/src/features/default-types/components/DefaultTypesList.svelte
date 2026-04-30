<script lang="ts">
  import { onMount } from 'svelte';
  import { DefaultTypesState } from '../state/default-types.state.svelte';
  import DataTypeFilter from '../../type-details/components/ui/DataTypeFilter.svelte';
  import { OscdButton, OscdBasicDataTable } from '@oscd-transnet-plugins/oscd-component';
  import { DataTypeService } from '../../type-details/services/type.service';
  // Note: DataTypeService is instantiated locally here. If this list grows to many instances,
  // consider lifting the service to a shared context to avoid redundant re-instantiation.
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { untrack } from 'svelte';

  const defaultTypesState = new DefaultTypesState();

  interface Props {
    onCreateDefaultType?: () => void;
    onEditDefaultType?: (id: string) => void;
  }

  let { onCreateDefaultType = () => {}, onEditDefaultType = () => {} }: Props =
    $props();

  const columns = [
    { header: 'Kind', key: 'kind' },
    { header: 'Instance', key: 'instance' },
    { header: 'Latest Version', key: 'version' },
    { header: 'Description', key: 'description' },
  ];

  $effect(() => {
    if (defaultTypesState.error !== null) {
      untrack(() =>
        toastService.error(
          'Loading Failed',
          'Failed to load default types. Please try again later.',
        ),
      );
    }
  });

  onMount(() => {
    defaultTypesState.load();
  });
</script>

<div class="toolbar">
  <DataTypeFilter
    queryLabel="Search by kind, instance, description, or version"
    bind:query={defaultTypesState.query}
    bind:dataTypeKind={defaultTypesState.kindFilter}
    bind:instance={defaultTypesState.instanceFilter}
    service={new DataTypeService(null, null)}
  />
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
></OscdBasicDataTable>

<style>
  .toolbar {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
</style>
