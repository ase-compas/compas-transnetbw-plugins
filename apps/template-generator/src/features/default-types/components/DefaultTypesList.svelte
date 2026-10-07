<script lang="ts">
  import { onMount } from 'svelte';
  import { DefaultTypesState } from '../state/default-types.state.svelte';
  import DataTypeFilter from '../../type-details/components/ui/DataTypeFilter.svelte';
  import { OscdButton, OscdBasicDataTable, OscdIconActionButton } from '@oscd-transnet-plugins/oscd-component';
  import { DataTypeService } from '../../type-details/services/type.service';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
  import { untrack } from 'svelte';
  import OscdWarningIcon from 'libs/oscd-icons/src/oscd-warning-icon/OscdWarningIcon.svelte';
  import { deleteDefaultTypeWorkflow } from '../default-types.workflows';

  const defaultTypesState = new DefaultTypesState();

  interface Props {
    onCreateDefaultType?: () => void;
    onEditDefaultType?: (id: string) => void;
  }

  let { onCreateDefaultType = () => {}, onEditDefaultType = () => {} }: Props =
    $props();

  const filterService = new DataTypeService(
    null as unknown as XMLDocument,
    null as unknown as HTMLElement,
  );

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
    service={filterService}
  />
  <OscdButton variant="unelevated" callback={onCreateDefaultType}>
    New Default Type
  </OscdButton>
</div>
<div class="warning">
  <OscdWarningIcon size="15px" />
  Default types are generic and do not consider underlying enumeration variants due to IEC 61850 limitations. You can leave specific parameters undefined and configure them after application.

</div>

<OscdBasicDataTable
  items={defaultTypesState.filteredTypes}
  {columns}
  loading={defaultTypesState.loading || defaultTypesState.deleting}
  emptyText="No default types found."
  rowBg="#ffffff"
  hasActions
  onRowClick={(item) => onEditDefaultType(item.id)}
>
  {#snippet actions({ item })}
    <div class="actions-cell">
      <OscdIconActionButton
        tooltip="Delete"
        type="delete"
        fillColor="red"
        onClick={() => deleteDefaultTypeWorkflow(item, defaultTypesState)}
      />
    </div>
  {/snippet}
</OscdBasicDataTable>

<style>
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .warning {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--primary);
    font-size: var(--tg-font-size-small);
    border-radius: 4px;
    background-color: #D9D800;
    padding: 0.2rem;
    width: fit-content;
  }

  .actions-cell {
    display: flex;
    justify-content: flex-end;
  }
</style>
