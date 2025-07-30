<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import BaseDialog from './BaseDialog.svelte';
  import { Content } from '@smui/dialog';
  import { OscdListBoard } from '@oscd-transnet-plugins/oscd-component';
  import { DataObjectTypeService, getDataObjectTypeService } from '../../services';
  import { DA, DAType, DOType, EnumType, ReferencedTypes } from '../../domain';

  const dataObjectTypeService: DataObjectTypeService = getDataObjectTypeService();

  const dispatch = createEventDispatcher();

  // ===== Props =====
  export let open = false;
  export let isEditMode: boolean = false;
  export let typeId: string;
  let dataObjectType: DOType | null = null;
  let dataAttributes: DA[] = [];

  let dataObjectTypes: DOType[] = [];
  let dataAttributeTypes: DAType[] = [];
  let enumTypes: EnumType[] = [];
  let markedItem: Set<string> = new Set<string>();


  let boardData = [];
  // Specifications:
  // This component supports 3 views: view, edit, and create. Edit and create a basically the same.
  // The board displays Data Object Types and its possible values to assign to (in the three other columns)
  // The left column shows the Configured Data Object Types, so its sub elements that are Data Attributes DA or SDOs
  // For every view it should display all required and not required attributes (depending on the cdc and the DAs name)
  // All SDOs have a type reference and DAs if bType=struct and bType=enum have a type reference as well.
  // This reference should be shown accordingly
  // The reference tables should view following elements:
  // View mode. only the referenced types
  // Edit and create: all possible types that can be assigned to the Data Object Type

  function loadData() {
    dataObjectType = dataObjectTypeService.findById(typeId);
    dataAttributes = dataObjectType.dataAttributes


    let referencedDataTypes: ReferencedTypes = dataObjectTypeService.findReferencedTypesById(typeId, Array.from(markedItem));
    dataObjectTypes = referencedDataTypes.dataObjectTypes;
    dataAttributeTypes = referencedDataTypes.dataAttributeTypes;
    enumTypes = referencedDataTypes.enumTypes;
  }

  $: if (open) {
    loadData();
  }

  $: if(!open) {
    markedItem.clear();
  }


  function handleOnMark({ item }) {
    const name = item.name;
    if (markedItem.has(name)) {
      markedItem.delete(name);
    } else {
      markedItem.add(name);
    }
    markedItem = new Set<string>(markedItem);
    loadData()
  }

  $: boardSettings = [
    {
      id: 'ref-data-types',
      title: 'Data Object Structure',
      showSearch: false,
      items: dataAttributes,
      canMark: true,
      canEdit: true,
      getItemTitle: (item) => item.name,
      getItemSubtitle: (item) => item.type,
      getItemReferences: (item) => null,
      getItemState: (item) => markedItem.has(item.name) ? 'marked' : 'default'
    },
    {
      id: 'object-data-types',
      title: 'Data Object Types (SDO)',
      actionText: 'CREATE & ASSIGN',
      showSearch: true,
      items: dataObjectTypes,
      canMark: false,
      canEdit: true,
      getItemTitle: (item) => item.id,
      getItemSubtitle: (item) => item.type,
      getItemReferences: (item) => null,
      getItemState: (item) => 'default'
    },
    {
      id: 'attribute-data-types',
      title: 'Attribute Data Types',
      actionText: 'ADD NEW',
      showSearch: true,
      items: dataAttributeTypes,
      canMark: false,
      canEdit: false,
      getItemTitle: (item) => item.id,
      getItemReferences: (item) => null,
      getItemState: (item) => 'default'
    },
    {
      id: 'enum-types',
      title: 'Enum Types',
      actionText: 'ADD NEW',
      showSearch: true,
      items: enumTypes,
      canEdit: false,
      canMark: false,
      getItemTitle: (item) => item.id,
      getItemReferences: (item) => null,
      getItemState: (item) => 'default'
    }
  ];

  function handleConfirm() {
    dispatch('confirm');
  }

  function handleCancel() {
    dispatch('cancel');
  }
</script>


<BaseDialog
  bind:open
  title={`Data Object Type: ${dataObjectType?.id ?? '------'}`}
  confirmActionText="Save"
  cancelActionText="Cancel"
  maxWidth="calc(100vw - 2rem)"
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}>
  <Content slot="content">
    <OscdListBoard
      on:actionClick={(e) => console.info('Action Click:', e.detail)}
      on:itemEdit={(e) => console.info('Item Edit:', e.detail)}
      on:itemMark={(e) => handleOnMark(e.detail)}
      settings={boardSettings}
    />
  </Content>
</BaseDialog>
