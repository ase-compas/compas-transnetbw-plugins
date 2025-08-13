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
  import {ItemDropOnItemEventDetail, TBoardItemContext, TData} from "../../tboard/types";
  import { cdcData } from '../../../../data/nsdToJson/testNsdJson';

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
        acceptDrop: (target: TBoardItemContext) => (item.bType === 'Enum' && target.columnId === 'enumtypes') || (item.bType === 'Struct' && target.columnId === 'datypes')
      })
    );

    const sdoItems = buildSDOItems(
      dataObjectType?.subDataObjects ?? [],
      markedItems,
      (item: SDO) => ({
        canSelect: isEditMode(),
        acceptDrop: (target: TBoardItemContext) => target.columnId === 'dotypes' && dataObjectTypeService.canSdoReferenceToType(dataObjectType.cdc, item.name, target.itemId)
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
      : getCompatibleDataTypes(cdc, markedItems);
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

  function getCompatibleDataTypes(cdc, markedItems): DataTypes {
    return {
      dataObjectTypes: getCompatibleObjectTypes(dataObjectType.cdc, markedItems),
      dataAttributeTypes: dataAttributeService.findAll(),
      enumTypes: enumTypeService.findAll()
    }
  }

  function getCompatibleObjectTypes(cdc: string, markedItems: Set<string>): DOType[] {
    const cdcStandard = cdcData[cdc]

    if(!cdcStandard) return dataObjectTypeService.findAll();

    let subDataObjects: SDO[] = dataObjectType.subDataObjects;
    if (markedItems.size !== 0) subDataObjects = subDataObjects.filter(sdo => markedItems.has(sdo.name));

    const cdcs: string[] = Array.from(new Set(subDataObjects
      .map(sdo => cdcStandard[sdo.name].type)));

    return dataObjectTypeService.findAllByCdc(cdcs);
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
