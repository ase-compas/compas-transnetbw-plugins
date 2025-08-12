<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component'
  import { Content } from '@smui/dialog';
  import {
    DataAttributeTypeService,
    DataObjectTypeService, EnumTypeService, getDataAttributeTypeService,
    getDataObjectTypeService, getEnumTypeService,
    getOscdDefaultTypeService
  } from '../../../services';
  import {DA, DOType, type DataTypes, SDO} from '../../../domain';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import {
    buildDAItems,
    buildDATypeItems,
    buildDOTypeItems,
    buildEnumTypeItems,
    buildSDOItems
  } from '../../../utils/itemBuilder';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import {TBoardItemContext, TData} from "../../tboard/types";

  // ===== Services =====
  const dataObjectTypeService: DataObjectTypeService = getDataObjectTypeService();
  const dataAttributeService: DataAttributeTypeService = getDataAttributeTypeService()
  const enumTypeService: EnumTypeService = getEnumTypeService();
  const oscdDefaultTypeService = getOscdDefaultTypeService();

  const dispatch = createEventDispatcher();

  // ===== Props =====
  export let open = false;
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let cdc: string | null = null;

  // ===== State =====
  let referencedDataTypes: DataTypes | null = null;
  let dataObjectType: DOType | null = null;

  let markedItem: Set<string> = new Set<string>();
  let data: TData | null = null;

  // ===== Derived =====
  const isCreateMode = () => mode === 'create';
  const isViewMode = () => mode === 'view';
  const isEditMode = () => mode === 'edit' || isCreateMode();

  $: columns = getColumns(isEditMode());
  $: if (open) init();
  $: if (!open) markedItem.clear();

  $: {
    const daItems = buildDAItems(
      dataObjectType?.dataAttributes ?? [],
      markedItem,
      (item: DA) => ({
        canSelect: isEditMode(),
        acceptDrop: (target: TBoardItemContext) => (item.bType === 'Enum' && target.columnId === 'enumtypes') || (item.bType === 'Struct' && target.columnId === 'datypes')
      })
    );

    const sdoItems = buildSDOItems(
      dataObjectType?.subDataObjects ?? [],
      markedItem,
      (_) => ({
        canSelect: isEditMode(),
        acceptDrop: (target: TBoardItemContext) => target.columnId === 'dotypes'
      })
    );

    data = {
      refs: [...daItems, ...sdoItems],
      dotypes: buildDOTypeItems(referencedDataTypes?.dataObjectTypes ?? []),
      datypes: buildDATypeItems(referencedDataTypes?.dataAttributeTypes ?? []),
      enumtypes: buildEnumTypeItems(referencedDataTypes?.enumTypes ?? [])
    };
  }

  function init() {
    validateProps();
    loadData();
  }

  function loadData() {
    dataObjectType = isCreateMode()
      ? oscdDefaultTypeService.createDataObjectWithDefaults(typeId, cdc)
      : dataObjectTypeService.findById(typeId);

    referencedDataTypes = isViewMode()
      ? dataObjectTypeService.findReferencedTypesById(typeId, Array.from(markedItem))
      : getAllDataTypes();
  }

  function handleOnMark({ itemId }) {
    if (markedItem.has(itemId)) {
      markedItem.delete(itemId);
    } else {
      markedItem.add(itemId);
    }
    markedItem = new Set<string>(markedItem);
    loadData();
  }

  function getAllDataTypes(): DataTypes {
    return {
      dataObjectTypes: dataObjectTypeService.findAll(),
      dataAttributeTypes: dataAttributeService.findAll(),
      enumTypes: enumTypeService.findAll()
    }
  }

  function handleConfirm() {
    closeDialog('confirm');
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
</script>


<OscdBaseDialog
  bind:open
  title={`Data Object Type: ${dataObjectType?.id ?? '------'}`}
  confirmActionText="Save"
  cancelActionText="Cancel"
  maxWidth="calc(100vw - 2rem)"
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}>
  <Content slot="content">

    <TBoard
      {columns}
      {data}
      on:itemMarkChange={e => handleOnMark(e.detail)}
    />
  </Content>
</OscdBaseDialog>
