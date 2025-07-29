<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import BaseDialog from './BaseDialog.svelte';
  import { Content } from '@smui/dialog';
  import { OscdListBoard } from '@oscd-transnet-plugins/oscd-component';
  import {
    DataAttributeTypeService,
    getDataAttributeTypeService,
  } from '../../services';
  import {DAType, BDA, ReferencedTypes, EnumType } from '../../domain';

  const dataAttributeService: DataAttributeTypeService = getDataAttributeTypeService();

  const dispatch = createEventDispatcher();

  // ===== Props =====
  export let open = false;
  export let isEditMode: boolean = false;
  export let typeId: string;

  let dataAttributeType: DAType | null = null;
  let basicDataAttributes: BDA[] = [];

  let dataAttributeTypes: DAType[] = [];
  let enumTypes: EnumType[] = [];


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
    dataAttributeType = dataAttributeService.findById(typeId);
    console.log(dataAttributeType);
    basicDataAttributes = dataAttributeType.basicDataAttributes;


    let referencedDataTypes: ReferencedTypes = dataAttributeService.findReferencedTypesById(typeId);
    dataAttributeTypes = referencedDataTypes.dataAttributeTypes;
    enumTypes = referencedDataTypes.enumTypes;
  }

  $: if (open) {
    loadData();
  }

  $: boardSettings = [
    {
      id: 'ref-data-types',
      title: 'Data Object Structure',
      items: basicDataAttributes,
      showSearch: false,
      canMark: false,
      canEdit: true,
      getItemTitle: (item) => item.name,
      getItemReferences: (item) => null,
      getItemState: (item) => 'default'
    },
    {
      id: 'attribute-data-types',
      title: 'Attribute Data Types (BDA)',
      items: dataAttributeTypes,
      showSearch: true,
      canMark: false,
      canEdit: true,
      getItemTitle: (item) => item.id,
      getItemReferences: (item) => null,
      getItemState: (item) => 'default'
    },
    {
      id: 'enum-types',
      title: 'Enum Types',
      items: enumTypes,
      showSearch: true,
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
  title="Data Attribute Type: ------"
  confirmActionText="Save"
  cancelActionText="Cancel"
  maxWidth="calc(100vw - 2rem)"
  width="100%"
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}>
  <Content slot="content">
    <OscdListBoard
      on:actionClick={(e) => console.info('Action Click:', e.detail)}
      on:itemEdit={(e) => console.info('Item Edit:', e.detail)}
      on:itemMark={(e) => console.info('Item Mark:', e.detail)}
      settings={boardSettings}
    />
  </Content>
</BaseDialog>
