<script lang="ts">
import { OscdBaseDialog, OscdDraggableList, OscdInput } from '@oscd-transnet-plugins/oscd-component';
import { Content } from '@smui/dialog';
import { EnumType } from '../../../domain';
import { EnumTypeService, getEnumTypeService } from '../../../services';
import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

let enumTypeService: EnumTypeService = getEnumTypeService();

export let open = false;
export let typeId;

let searchQuery = '';
let enumType: EnumType;
let listItems: { id: number; label: string }[] = [];
$: listItems = enumType.values
  .map(enumValue => ({id: enumValue.ord, label: enumValue.value}))
  .filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()));

if(open) init();

function init() {
  validateProps();
  loadData();
}

function loadData() {
  enumType = enumTypeService.findById(typeId)
}

function handleConfirm() {
  closeDialog('confirm');
}

function handleCancel() {
  closeDialog('cancel');
}

function validateProps() {
  if (!typeId) {
    throw new Error('Type ID and CDC are required in create mode');
  }
}

</script>

<OscdBaseDialog
  bind:open
  title={`Enum Type: ${enumType?.id ?? '------'}`}
  confirmActionText="Close"
  cancelActionText=""
  maxWidth="30vw"
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}>
  <Content slot="content">

    <OscdInput
      bind:value={searchQuery}
      icon="search"
      label="Search..."
      variant="outlined"/>


    <OscdDraggableList
      canDrag={false}
      items={listItems}
    />

  </Content>
</OscdBaseDialog>
