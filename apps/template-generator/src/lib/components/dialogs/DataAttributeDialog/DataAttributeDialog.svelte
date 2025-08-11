<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component'
  import { Content } from '@smui/dialog';
  import { DataAttributeTypeService, getDataAttributeTypeService } from '../../../services';
  import { BDA, DAType, DataTypes } from '../../../domain';
  import { getColumns } from './columns.config';
  import TBoard from '../../tboard/TBoard.svelte';
  import { buildDATypeItems, buildDBAItems, buildEnumTypeItems } from '../../../utils/itemBuilder';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  const dataAttributeService: DataAttributeTypeService = getDataAttributeTypeService();

  const dispatch = createEventDispatcher();

  // ===== Props =====
  export let open = false;
  export let isEditMode: boolean = false;
  export let typeId: string;

  let dataAttributeType: DAType | null = null;
  let basicDataAttributes: BDA[] = [];

  let markedItem: Set<string> = new Set<string>();
  let referencedDataTypes: DataTypes | null;

  function loadData() {
    dataAttributeType = dataAttributeService.findById(typeId);
    basicDataAttributes = dataAttributeType.basicDataAttributes;

    referencedDataTypes = dataAttributeService.findReferencedTypesById(typeId, Array.from(markedItem));
  }

  $: columns = getColumns(isEditMode);

  $: if (open) {
    loadData();
  }

  $: if (!open) {
    markedItem.clear();
  }

  $: data = {
    refs: buildDBAItems(basicDataAttributes, markedItem, { canSelect: isEditMode }),
    datypes: buildDATypeItems(referencedDataTypes?.dataAttributeTypes),
    enumtypes: buildEnumTypeItems(referencedDataTypes?.enumTypes)
  };

  function handleOnMark({ itemId }) {
    if (markedItem.has(itemId)) {
      markedItem.delete(itemId);
    } else {
      markedItem.add(itemId);
    }
    markedItem = new Set<string>(markedItem);
    loadData();
  }

  function handleConfirm() {
    closeDialog('confirm');
  }

  function handleCancel() {
    closeDialog('cancel');
  }
</script>

<OscdBaseDialog
  bind:open
  title={`Data Attribute Type: ${dataAttributeType?.id ?? '------'}`}
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
    />
  </Content>
</OscdBaseDialog>
