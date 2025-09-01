<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component'
  import { Content } from '@smui/dialog';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { ItemDropOnItemEventDetail, TItem } from '../../tboard/types';
  import { DataTypes, DATypeDetailsV2 } from '../../../domain/core.model';
  import { getDATypeV2Service } from '../../../services';
  import { createObjectReferenceStore } from '../../../stores';
  import { getDisplayReferenceItems } from '../../../utils/objectReferenceUtils';
  import { mapDataTypeToItem } from '../../../mappers';
  import { IDATypeV2Service } from '../../../services/da-type-v2.service';

  // ===== Services =====
  const daTypeService: IDATypeV2Service = getDATypeV2Service();

  // ===== Props =====
  export let open = false;
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let cdc: string | null = null;

  // ===== Stores ======
  const refStore = createObjectReferenceStore(async () => dataObjectType.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  // ===== State =====
  let dataObjectType: DATypeDetailsV2 | null = null;
  let dataTypes: DataTypes = {
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: []
  };

  // ===== Derived =====
  const isCreateMode = () => mode === 'create';
  const isViewMode = () => mode === 'view';
  const isEditMode = () => mode === 'edit' || isCreateMode();

  let referenceDataObjects: TItem[] = [];
  $: referenceDataObjects = getDisplayReferenceItems($refStore, isEditMode(), undefined)

  $: boardData = {
    refs: referenceDataObjects,
    daTypes: dataTypes.dataAttributeTypes.map(type => mapDataTypeToItem(type, true, undefined, type.children.length)),
    enumTypes: dataTypes.enumTypes.map(type => mapDataTypeToItem(type, true, undefined, type.values.length))
  }

  $: columns = getColumns(isEditMode());
  $: if (open) init();



  function init() {
    validateProps();
    loadData();
  }

  async function loadData() {
    dataObjectType = await loadDOType(isCreateMode(), typeId, cdc);
    await refStore.reload();

    dataTypes = await loadTypes(isEditMode(), dataObjectType.id, undefined, []);
  }

  $: if(dataObjectType) {
    loadTypes(isEditMode(), dataObjectType.id, undefined, $markedItemIds).then(types => dataTypes = types);
  }

  async function loadDOType(isCreateMode: boolean, typeId: string, cdc: string | null) {
    return isCreateMode
      ? await daTypeService.getDefaultType(cdc)
      : await daTypeService.getTypeById(typeId);
  }

  async function loadTypes(isEditMode: boolean, typeId: string, cdc: string, childNameFilter: string[]) {
    return isEditMode
      ? await daTypeService.getAssignableTypes(cdc, childNameFilter)
      : await daTypeService.getReferencedTypes(typeId, childNameFilter)
  }


  function handleOnMark({ itemId }) {
    refStore.toggleMarked(itemId);
  }

  function handleOnSelect({ itemId }) {
    refStore.toggleConfigured(itemId);
  }



  function handleConfirm() {
    closeDialog('confirm');
    if(isDirty) {
    }
  }

  function handleCancel() {
    closeDialog('cancel');
  }

  function validateProps() {
    if (mode === 'create' && (!typeId )) {
      throw new Error('Type ID is required in create mode');
    } else if ((mode === 'edit' || mode === 'view') && !typeId) {
      throw new Error('Type ID is required');
    }
  }

  function handleItemDrop({ source, target }: ItemDropOnItemEventDetail) {
    if (!source || !target) return;
    refStore.setTypeReference(source.itemId, target.item.id)
  }
</script>

<OscdBaseDialog
  bind:open
  title={`Data Object Type: ${dataObjectType?.id ?? '------'}`}
  confirmActionText="Save"
  cancelActionText="Cancel"
  maxWidth="calc(100vw - 2rem)"
  width="calc(100vw - 10rem)"
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}>
  <Content slot="content">

    <TBoard
      {columns}
      data={boardData}
      on:itemMarkChange={e => handleOnMark(e.detail)}
      on:itemSelectChange={e => handleOnSelect(e.detail)}
      on:itemDrop={e => handleItemDrop(e.detail)}
    />
  </Content>
</OscdBaseDialog>
