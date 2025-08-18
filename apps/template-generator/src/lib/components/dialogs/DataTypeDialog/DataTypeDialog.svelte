<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component'
  import { Content } from '@smui/dialog';
  import {
    DataAttributeTypeService,
    DataObjectTypeService, EnumTypeService, getDataAttributeTypeService,
    getDataObjectTypeService, getEnumTypeService,
    getOscdDefaultTypeService
  } from '../../../services';
  import { DA, DOType, type DataTypes, SDO } from '../../../domain';
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
  import {ItemDropOnItemEventDetail, TBoardItemContext, TData} from "../../tboard/types";
  import { ReferenceAssignmentService } from '../../../services/referenceAssignment.service';

  // ===== Services =====
  const dataObjectTypeService: DataObjectTypeService = getDataObjectTypeService();
  const dataAttributeService: DataAttributeTypeService = getDataAttributeTypeService()
  const enumTypeService: EnumTypeService = getEnumTypeService();
  const oscdDefaultTypeService = getOscdDefaultTypeService();
  const refAssignmentService = new ReferenceAssignmentService(
    dataObjectTypeService,
    dataAttributeService,
    enumTypeService,
    oscdDefaultTypeService
  )

  // ===== Props =====
  export let open = false;
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let cdc: string | null = null;

  // ===== State =====
  let referencedDataTypes: DataTypes | null = null;
  let dataObjectType: DOType | null = null;

  let markedItems: Set<string> = new Set<string>();
  let data: TData | null = null;

  let isDirty = false;

  // ===== Derived =====
  const isCreateMode = () => mode === 'create';
  const isViewMode = () => mode === 'view';
  const isEditMode = () => mode === 'edit' || isCreateMode();

  $: columns = getColumns(isEditMode());
  $: if (open) init();
  $: if (!open) markedItems.clear();

  $: {
    const daItems = buildDAItems(
      dataObjectType?.dataAttributes ?? [],
      markedItems,
      (item: DA) => ({
        canSelect: isEditMode(),
        acceptDrop: (source: TBoardItemContext) => acceptDropDaItems(source, item)
      })
    );

    const sdoItems = buildSDOItems(
      dataObjectType?.subDataObjects ?? [],
      markedItems,
      (item: SDO) => ({
        canSelect: isEditMode(),
        acceptDrop: (source: TBoardItemContext) => acceptDropSDOItems(source, item)
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
    if(isCreateMode()) {
      dataObjectType = oscdDefaultTypeService.createDataObjectWithDefaults(typeId, cdc)
      isDirty = true;
    } else {
      dataObjectType = dataObjectTypeService.findById(typeId);
    }

    referencedDataTypes = isViewMode()
      ? dataObjectTypeService.findReferencedTypesById(typeId, Array.from(markedItems))
      : getCompatibleDataTypes(dataObjectType.cdc, markedItems);
  }

  function getCompatibleDataTypes(cdc, markedItems): DataTypes {
    const filteredSDOs = dataObjectType.subDataObjects.filter(sdo => markedItems.size === 0 || markedItems.has(sdo.name));
    const filteredDAs = dataObjectType.dataAttributes.filter(da => markedItems.size === 0 || markedItems.has(da.name));
    return refAssignmentService.getAssignableTypesForDOType(filteredSDOs, filteredDAs, cdc)
  }

  function acceptDropDaItems(source: TBoardItemContext, target: DA) {
    const cdc = dataObjectType.cdc
    if(source.columnId === 'enumtypes' && target.bType === 'Enum') {
      const enumType = enumTypeService.findById(source.itemId);
      return refAssignmentService.canAssignEnumTypeToDAReference(target, enumType, cdc);
    } else if (source.columnId === 'datypes' && target.bType === 'Struct') {
      const daType = dataAttributeService.findById(source.itemId)
      return refAssignmentService.canAssignDATypeToDAReference(target, daType, cdc);
    } else {
      return false;
    }
  }

  function acceptDropSDOItems(source: TBoardItemContext, target: SDO) {
    if (source.columnId === 'dotypes') {
      const doType = dataObjectTypeService.findById(source.itemId);
      return refAssignmentService.canAssignDOTypeToSDOReference(target, doType, dataObjectType.cdc)
    } else {
      return false;
    }
  }

  function handleOnMark({ itemId }) {
    if (markedItems.has(itemId)) {
      markedItems.delete(itemId);
    } else {
      markedItems.add(itemId);
    }
    markedItems = new Set<string>(markedItems);
    loadData();
  }

  function handleConfirm() {
    closeDialog('confirm');
    if(isDirty) {
      dataObjectTypeService.createOrUpdate(dataObjectType);
      isDirty = false;
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
    if (!source || !target) return;
    setAttributeTypeReference(target.itemId, source.itemId, source.columnId);
    isDirty = true;
  }

  function setAttributeTypeReference(dataAttributeName: string, targetReference: string, sourceColumnId: string) {
    if (!dataObjectType) return;

    const key =  sourceColumnId === 'dotypes' ? 'subDataObjects' : 'dataAttributes' ;
    dataObjectType = {
      ...dataObjectType,
      [key]: dataObjectType[key].map(item =>
        item.name === dataAttributeName
          ? { ...item, type: targetReference }
          : item
      )
    };
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
      on:itemDrop={e => handleItemDrop(e.detail)}
    />
  </Content>
</OscdBaseDialog>
