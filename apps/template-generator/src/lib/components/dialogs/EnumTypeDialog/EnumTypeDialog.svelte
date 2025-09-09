<script lang="ts">
import { OscdBaseDialog, OscdInput } from '@oscd-transnet-plugins/oscd-component';
import { Content } from '@smui/dialog';
import { EnumTypeDetails } from '../../../domain';
import { EnumTypeService, getEnumTypeService } from '../../../services';
import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
import { IEnumTypeService } from '../../../services/enum-type.service';
import EnumListItem from './EnumListItem.svelte';
import { flip } from 'svelte/animate'

let enumTypeService: IEnumTypeService = getEnumTypeService();

export let open = false;
export let mode: 'view' | 'edit' | 'create' = 'view';
export let typeId;
export let instanceTypeId: string | null = null;

let isCreateMode = () => mode === 'create';

let searchQuery = '';
let enumType: EnumTypeDetails;
let listItems: { id: string; label: string, selected: boolean }[] = [];
$: filteredList = listItems.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase())) ?? [];

if(open) init();

function init() {
  validateProps();
  loadData();
}

function loadData() {
  if(isCreateMode()) {
    enumTypeService.getDefaultType(instanceTypeId)
      .then(result => {
        result.id = typeId;
        enumType = result;
        listItems = enumType.children.map(enumValue => ({id: enumValue.attributes.literalValue, label: enumValue.name, selected: true}))
      });
  } else {
    enumTypeService.getTypeById(typeId)
      .then(result => {
        enumType = result
        listItems = enumType.children.map(enumValue => ({id: enumValue.attributes.literalValue, label: enumValue.name, selected: enumValue.meta.isConfigured}))
      });
  }
}

function handleConfirm() {
  const configuredChildren = listItems
    .filter(item => item.selected)
    .map(item => enumType.children.find(child => child.attributes.literalValue === item.id))
    .filter(item => item !== undefined);

  enumTypeService.createOrUpdateType({
    ...enumType,
    instanceType: instanceTypeId,
    children: configuredChildren,
  })
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
  confirmActionText="Save"
  cancelActionText="Cancel"
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
      <ul class="enum-list">
        {#each filteredList as item (item.id)}
          <li animate:flip={{duration: 200}}>
            <EnumListItem
              id={item.id}
              label={item.label}
              selected={item.selected}
              showCheckbox={true}
              on:toggle={(e) => item.selected = e.detail.selected}
            />
          </li>
        {/each}
      </ul>
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
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .enum-list {
    overflow-y: auto;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

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
