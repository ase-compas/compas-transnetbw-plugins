<script lang="ts">
import { OscdBaseDialog, OscdDraggableList, OscdInput } from '@oscd-transnet-plugins/oscd-component';
import { Content } from '@smui/dialog';
import { EnumType, EnumTypeDetails } from '../../../domain';
import { EnumTypeService, getEnumTypeService } from '../../../services';
import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import { IEnumTypeService } from '../../../services/enum-type.service';

let enumTypeService: IEnumTypeService = getEnumTypeService();

export let open = false;
export let typeId;

let searchQuery = '';
let enumType: EnumTypeDetails;
let listItems: { id: string; label: string }[] = [];
$: listItems = enumType?.children
  .map(enumValue => ({id: enumValue.attributes.ord, label: enumValue.attributes.label}))
  .filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase())) ?? [];

if(open) init();

function init() {
  validateProps();
  loadData();
}

function loadData() {
  enumTypeService.getTypeById(typeId)
    .then(result => enumType = result);
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
  maxWidth="35vw"
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}>
  <Content slot="content">

    <OscdInput
      bind:value={searchQuery}
      icon="search"
      label="Search..."
      variant="outlined"/>

    {#if listItems && listItems.length > 0}
    <OscdDraggableList
      canDrag={false}
      items={listItems}
    />
    {:else}
      <div class="no-results">
        {#if searchQuery}
          <p>No results for "{searchQuery}".</p>
        {:else}
          <p>No values available.</p>
        {/if}
      </div>
    {/if}

  </Content>
</OscdBaseDialog>


<style lang="css">
  .no-results {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
  }

  .no-results p {
    margin: 0;
  }
</style>
