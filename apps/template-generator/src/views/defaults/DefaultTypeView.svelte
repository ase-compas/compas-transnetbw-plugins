<script lang="ts">
  import { onMount } from 'svelte';
  import type { IDefaultService } from '@oscd-transnet-plugins/oscd-template-generator';
  import { DataTypeKind, getDefaultTypeService, route } from '@oscd-transnet-plugins/oscd-template-generator';
  import {
    OscdBasicDataTable,
    OscdBreadcrumbs,
    OscdConfirmDialog,
    OscdIconActionButton
  } from '@oscd-transnet-plugins/oscd-component';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  type DefaultTypeRow = {
    id: string;
    type: DataTypeKind;
    instance: string;
    version?: string;
    root: string;
    description: string;
    subtypes: number;
  }

  let defaultTypeService: IDefaultService = getDefaultTypeService();
  let data: DefaultTypeRow[] = $state([]);
  let errorMsg = $state('');
  let loading = $state(true);

  const columns = [
    { header: 'Type', key: 'type' },
    { header: 'Instance', key: 'instance' },
    { header: 'Root-ID', key: 'root' },
    { header: 'Version', key: 'version' },
    { header: 'Sub-Types', key: 'subtypes' }
  ];

  onMount(() => {
    loadDefaultTypes();
  });

  // sort data by type: LNodeType > DOType > DAType > EnumType and then by instance name
  let sortedData: DefaultTypeRow[] = $derived.by(() => [...data].sort((a, b) => {
      const typeOrder = [DataTypeKind.LNodeType, DataTypeKind.DOType, DataTypeKind.DAType, DataTypeKind.EnumType];
      const typeComparison = typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
      if (typeComparison !== 0) {
        return typeComparison;
      }
      return a.instance.localeCompare(b.instance);
    })
  );

  async function loadDefaultTypes() {
    loading = true;
    try {
      const defaultType = await defaultTypeService.getAllDefaults();
      data = defaultType.map(defaultTypeConfig => ({
        id: defaultTypeConfig.rootType.kind + ':' + defaultTypeConfig.rootType.instanceType,
        description: defaultTypeConfig.description,
        type: defaultTypeConfig.key.kind,
        instance: defaultTypeConfig.key.instanceType,
        version: defaultTypeConfig.version,
        root: defaultTypeConfig.rootType.id,
        subtypes: defaultTypeConfig.referencedTypes.length
      }));
    } catch (error) {
      console.error('Error loading default types:', error);
      data = [];
      errorMsg = error?.message;
    }

    loading = false;
  }

  function handleOnDelete(event: {item: DefaultTypeRow}) {
    const { item } = event;
    openDialog(OscdConfirmDialog, {
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete the default type "${item.type}:${item.instance}"? This action cannot be undone.`,
      confirmActionText: 'Delete',
      cancelActionText: 'Cancel',
      color: 'red'
    }).then(result => {
      if (result.type === 'confirm') {
        defaultTypeService.clearDefault({ kind: item.type, instanceType: item.instance });
        data = data.filter(i => i.id !== item.id); // remove cleared item from table
      }
    });
  }

</script>

<div style="margin-bottom: 1rem;">
  <OscdBreadcrumbs
    color='var(--primary-base)'
    breadcrumbs={[
      { label: 'Logical Node Types', enabled: true },
      { label: 'Default Types', enabled: false },
    ]}
    activeIndex={1}
    handleClick={(idx) => {
      if (idx === 0) route.set({path: ["overview"]});
    }}
  />
</div>


<OscdBasicDataTable
  items={sortedData}
  {columns}
  {loading}
  emptyText="No default types found."
  headerBg="#DAE3E6"
  rowBg="#ffffff"
  hasActions
>
  {#snippet actions(item)}
    <OscdIconActionButton type="delete" fillColor="red" tooltip="Delete Default" onClick={() => handleOnDelete(item)} />
  {/snippet}
</OscdBasicDataTable>
