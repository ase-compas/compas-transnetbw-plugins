<script lang="ts">
  import { onMount } from 'svelte';
  import { DataTypeKind, getDefaultTypeService } from '@oscd-transnet-plugins/oscd-template-generator';
  import {
    OscdBasicDataTable,
    OscdButton,
    OscdConfirmDialog,
    OscdIconActionButton
  } from '@oscd-transnet-plugins/oscd-component';
  import type { IDefaultService } from '@oscd-transnet-plugins/oscd-template-generator';
  import { route } from "@oscd-transnet-plugins/oscd-template-generator";
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
  let data: DefaultTypeRow[] = []
  let errorMsg = '';

  let loading = true;

  const columns = [
    { header: 'Type', key: 'type'},
    { header: 'Instance', key: 'instance'},
    { header: 'Version', key: 'version'},
    { header: 'Root-ID', key: 'root'},
    { header: 'Description', key: 'description'},
    { header: 'Sub-Types', key: 'subtypes'}
  ];

  onMount(() => {
    loadDefaultTypes();
  });

  async function loadDefaultTypes() {
    loading = true;
    try {
      const defaultType = await defaultTypeService.getAllDefaults();
      data = defaultType.map(cfg => ({
        id: cfg.rootType.kind + ":" + cfg.rootType.instanceType,
        description: cfg.description,
        type: cfg.key.kind,
        instance: cfg.key.instanceType,
        version: cfg.version,
        root: cfg.rootType.id,
        subtypes: cfg.referencedTypes.length
      }));
    } catch (error) {
      console.error("Error loading default types:", error);
      data = [];
      errorMsg = error?.message;
    }

    loading = false;
  }

  function handleOnDelete(item: DefaultTypeRow) {
    openDialog(OscdConfirmDialog, {
        title: 'Confirm Deletion',
        message: `Are you sure you want to delete the default type "${item.type}:${item.instance}"? This action cannot be undone.`,
        confirmActionText: 'Delete',
        cancelActionText: 'Cancel',
        color: 'red'
      }).then(result => {
        if (result.type === 'confirm') {
          defaultTypeService.clearDefault({kind: item.type, instanceType: item.instance});
          data = data.filter(i => i.id !== item.id); // remove cleared item from table
        }
      })
  }

</script>

<h1>Default Types</h1>
<OscdButton callback={() => {route.set({path: ['overview']})}}>&lt; Back To Overview</OscdButton>

<OscdBasicDataTable
  items={data}
  {columns}
  {loading}
  emptyText="No default types found."
  headerBg="#DAE3E6"
  rowBg="#ffffff"
  hasActions
>
  <svelte:fragment slot="actions" let:item>
    <OscdIconActionButton type="delete" fillColor="red" tooltip="Delete Default" onClick={() => handleOnDelete(item)}/>
  </svelte:fragment>
</OscdBasicDataTable>
