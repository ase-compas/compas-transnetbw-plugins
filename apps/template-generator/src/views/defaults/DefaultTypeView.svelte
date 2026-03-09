<script lang="ts">
  import { onMount } from 'svelte';
  import type { IDefaultService } from '@oscd-transnet-plugins/oscd-template-generator';
  import { DataTypeKind, getDefaultTypeService, route } from '@oscd-transnet-plugins/oscd-template-generator';
  import {
    OscdBasicDataTable,
    OscdConfirmDialog,
    OscdIconActionButton
  } from '@oscd-transnet-plugins/oscd-component';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import DataTypeFilter from '../../v2/DataTypeFilter.svelte';
  import { TypeKind } from '../../v2/model';

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
    loadDefaultTypes();
  });

  function toDataTypeKind(v2TypeKind?: TypeKind): DataTypeKind | undefined {
    switch (v2TypeKind) {
      case TypeKind.LNodeType:
        return DataTypeKind.LNodeType;
      case TypeKind.DOType:
        return DataTypeKind.DOType;
      case TypeKind.DAType:
        return DataTypeKind.DAType;
      case TypeKind.EnumType:
        return DataTypeKind.EnumType;
      default:
        return undefined;
    }
  }

  // reactive sorted & filtered data
  let sortedData: DefaultTypeRow[] = $derived.by(() => {
    const selectedDataTypeKind = toDataTypeKind(typeKind);

    // apply search filter
    let filtered = data.filter(item => {
      // free-text search on root or instance
      const matchesSearch = query
        ? item.root.toLowerCase().includes(query.toLowerCase()) ||
        item.instance.toLowerCase().includes(query.toLowerCase())
        : true;

      const matchesTypeKind = selectedDataTypeKind ? item.type === selectedDataTypeKind : true;
      const matchesInstance = instance ? item.instance === instance : true;

      return matchesSearch && matchesTypeKind && matchesInstance;
    });

    // sort filtered data
    const typeOrder = [DataTypeKind.LNodeType, DataTypeKind.DOType, DataTypeKind.DAType, DataTypeKind.EnumType];
    filtered.sort((a, b) => {
      const typeComparison = typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
      if (typeComparison !== 0) return typeComparison;
      return a.instance.localeCompare(b.instance);
    });

    return filtered;
  });

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
  <DataTypeFilter bind:query bind:dataTypeKind={typeKind} bind:instance />
</div>

<OscdBasicDataTable
  items={sortedData}
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
