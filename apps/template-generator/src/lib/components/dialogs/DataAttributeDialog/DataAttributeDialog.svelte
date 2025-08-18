<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component'
  import { Content } from '@smui/dialog';
  import {
    DataAttributeTypeService,
    EnumTypeService,
    getDataAttributeTypeService, getEnumTypeService,
    getOscdDefaultTypeService
  } from '../../../services';
  import { BDA, DAType, EnumType } from '../../../domain';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { buildDATypeItems, buildDBAItems, buildEnumTypeItems } from '../../../utils/itemBuilder';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { OscdDefaultTypeService } from '../../../services/oscdDefaultType.service';
  import { ReferenceAssignmentService } from '../../../services/referenceAssignment.service';
  import { ItemDropOnItemEventDetail, TBoardItemContext } from '../../tboard/types';

  const dataAttributeService: DataAttributeTypeService = getDataAttributeTypeService();
  const defaultTypeService: OscdDefaultTypeService = getOscdDefaultTypeService();
  const enumTypeService: EnumTypeService = getEnumTypeService();
  const refAssignmentService = new ReferenceAssignmentService(
    null,
    dataAttributeService,
    enumTypeService,
    defaultTypeService,
  )

  type DataTypes = {
    dataAttributeTypes: DAType[];
    enumTypes: EnumType[];
  };

  const dispatch = createEventDispatcher();

  // ===== Props =====
  export let open = false;
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;

  // ===== State =====
  let refDataAttributeType: DAType | null = null;
  let dataTypes: DataTypes | null = null;

  let markedItems: Set<string> = new Set<string>();
  let data = null;

  let isDirty = false;

  // ===== Derived =====
  const isCreateMode = () => mode === 'create';
  const isViewMode = () => mode === 'view';
  const isEditMode = () => mode === 'edit' || isCreateMode();

  $: columns = getColumns(isEditMode());
  $: if (open) init();
  $: if (!open) markedItems.clear();

  $: data = {
    refs: buildDBAItems(
      refDataAttributeType.basicDataAttributes,
      markedItems,
      (item: BDA) => ({ canSelect: isEditMode(), acceptDrop: (source: TBoardItemContext) => acceptDropDaItems(source, item) })
    ),
    datypes: buildDATypeItems(dataTypes.dataAttributeTypes),
    enumtypes: buildEnumTypeItems(dataTypes.enumTypes),
  };

  function init() {
    validateProps();
    loadData();
  }

  function loadData() {
    if(isCreateMode()) {
      //refDataAttributeType = defaultTypeService.createDataAttributeWithDefaults(typeId, cdc)
      // TODO: Implement creation logic for new Data Attribute Type
      isDirty = true;
    } else {
      refDataAttributeType = dataAttributeService.findById(typeId);
    }

    dataTypes = isViewMode()
    ? dataAttributeService.findReferencedTypesById(typeId, Array.from(markedItems))
    : getCompatibleDataTypes(markedItems);
  }


  function getCompatibleDataTypes(markedItems: Set<string>): DataTypes {
    const filteredBDAs = markedItems.size === 0
      ? refDataAttributeType.basicDataAttributes
      : refDataAttributeType.basicDataAttributes.filter(bda => markedItems.has(bda.name));

   return refAssignmentService.getAssignableTypesForDAType(filteredBDAs);
  }

  function acceptDropDaItems(source: TBoardItemContext, target: BDA) {
    if(source.columnId === 'enumtypes' && target.bType === 'Enum') {
      return true;
    } else if (source.columnId === 'datypes' && target.bType === 'Struct') {
      return true;
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

  function validateProps() {
    if (mode === 'create' && (!typeId)) {
      throw new Error('Type ID is required in create mode');
    } else if ((mode === 'edit' || mode === 'view') && !typeId) {
      throw new Error('Type ID is required');
    }
  }

  function handleConfirm() {
    if(isDirty) {
      dataAttributeService.createOrUpdate(refDataAttributeType);
      isDirty = false;
    }
    closeDialog('confirm');
  }

  function handleCancel() {
    closeDialog('cancel');
  }


  function handleItemDrop({ source, target }: ItemDropOnItemEventDetail) {
    if (!source || !target) return;
    setAttributeTypeReference(target.itemId, source.itemId, source.columnId);
    isDirty = true;
  }

  function setAttributeTypeReference(dataAttributeName: string, targetReference: string, sourceColumnId: string) {
    if (!refDataAttributeType) return;

    refDataAttributeType = {
      ...refDataAttributeType,
      basicDataAttributes: refDataAttributeType.basicDataAttributes.map(item =>
        item.name === dataAttributeName
          ? { ...item, type: targetReference }
          : item
      )
    };
  }
</script>

<OscdBaseDialog
  bind:open
  title={`Data Attribute Type: ${refDataAttributeType?.id ?? '------'}`}
  confirmActionText="Save"
  cancelActionText="Cancel"
  maxWidth="calc(100vw - 2rem)"
  width="2024px"
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
