<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component'
  import { Content } from '@smui/dialog';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { ItemDropOnItemEventDetail, TItem } from '../../tboard/types';
  import { DataTypes, DOTypeDetailsV2 } from '../../../domain/core.model';
  import { IDoTypeV2Service } from '../../../services/do-type-v2.service';
  import { getDOTypeV2Service } from '../../../services';
  import { createObjectReferenceStore } from '../../../stores';
  import { getDisplayReferenceItems } from '../../../utils/objectReferenceUtils';
  import { mapDataTypeToItem } from '../../../mappers';

  // ===== Services =====
  const doTypeService: IDoTypeV2Service = getDOTypeV2Service();

  // ===== Props =====
  export let open = false;
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let cdc: string | null = null;

  // ===== Stores ======
  const refStore = createObjectReferenceStore(async () => dataObjectType.children);
  const { markedItemIds, configuredItems, isDirty } = refStore;

  // ===== State =====
  let dataObjectType: DOTypeDetailsV2 | null = null;
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
    doTypes: dataTypes.dataObjectTypes.map(type => mapDataTypeToItem(type, true, type.cdc, type.children.length)),
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
  }

  $: if(dataObjectType) {
    loadTypes(isEditMode(), dataObjectType.id, dataObjectType.cdc, $markedItemIds).then(types => dataTypes = types);
  }

  async function loadDOType(isCreateMode: boolean, typeId: string, cdc: string | null) {
    return isCreateMode
      ? await doTypeService.getDefaultType(cdc)
      : await doTypeService.getTypeById(typeId);

  }

  async function loadTypes(isEditMode: boolean, typeId: string, cdc: string, childNameFilter: string[]) {
    return isEditMode
      ? await doTypeService.getAssignableTypes(cdc, childNameFilter)
      : await doTypeService.getReferencedTypes(typeId, childNameFilter)
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
    if (mode === 'create' && (!typeId || !cdc)) {
      throw new Error('Type ID and CDC are required in create mode');
    } else if ((mode === 'edit' || mode === 'view') && !typeId) {
      throw new Error('Type ID is required');
    }
  }

  function handleItemDrop({ source, target }: ItemDropOnItemEventDetail) {
    if (source && !target) refStore.setTypeReference(source.itemId, target.itemId)
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
