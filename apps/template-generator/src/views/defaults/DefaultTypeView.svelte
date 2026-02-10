<script lang="ts">
  import { onMount } from 'svelte';
  import type { IDefaultService } from '@oscd-transnet-plugins/oscd-template-generator';
  import { DataTypeKind, getDefaultTypeService, route } from '@oscd-transnet-plugins/oscd-template-generator';
  import {
    OscdBasicDataTable,
    OscdButton,
    OscdConfirmDialog, OscdFilterTab,
    OscdIconActionButton
  } from '@oscd-transnet-plugins/oscd-component';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import type { FilterDefinition } from '../../../../../libs/oscd-component/src/oscd-filter-builder/types';

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
  let searchText = $state('');
  let filters: FilterDefinition[] = $state([
      { key: "type", type: 'select', label: 'Data Type ', options: [
          { label: 'LNodeType', value: DataTypeKind.LNodeType },
          { label: 'DOType', value: DataTypeKind.DOType },
          { label: 'DAType', value: DataTypeKind.DAType },
          { label: 'EnumType', value: DataTypeKind.EnumType }
        ]},
  ]);

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

  // reactive sorted & filtered data
  let sortedData: DefaultTypeRow[] = $derived.by(() => {
    // apply search filter
    let filtered = data.filter(item => {
      // free-text search on root or instance
      const matchesSearch = searchText
        ? item.root.toLowerCase().includes(searchText.toLowerCase()) ||
        item.instance.toLowerCase().includes(searchText.toLowerCase())
        : true;

      // apply selected filters
      const matchesFilters = filters.every(f => {
        if (!f.value) return true; // no filter applied
        return item[f.key] === f.value;
      });

      return matchesSearch && matchesFilters;
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

<OscdButton callback={() => {route.set({path: ['overview']})}}>&lt; Back To Overview</OscdButton>
<h1>Default Types</h1>

<div style="margin-bottom: 1rem;">
  <OscdFilterTab
    bind:searchText
    bind:filters
    searchLabel="Search ID or instance..."
  />
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
