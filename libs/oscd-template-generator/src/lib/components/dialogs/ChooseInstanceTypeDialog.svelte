<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import Autocomplete from "@smui-extra/autocomplete";
  import { DataTypeKind } from '../../domain';
  import { onMount } from 'svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import {
    getDATypeService,
    getDOTypeService, getEnumTypeService,
    getLNodeTypeService,
    type IDoTypeService, type IEnumTypeService,
    type ILNodeTypeService
  } from '../../services';
  import type { IDaTypeService } from '../../services/da-type.service';

  interface Props {
    type: DataTypeKind;
    text?: string | undefined;
    open?: boolean;
  }

  let { type, text = undefined, open = $bindable(false) }: Props = $props();

  let selectedItem = $state(null);
  let options = $state([]);
  let getOptionLabel: (opt) => string = (opt) => opt?.id ?? '';

  let lNodeTypeService: ILNodeTypeService = getLNodeTypeService();
  let doTypeService: IDoTypeService = getDOTypeService();
  let daTypeService: IDaTypeService = getDATypeService();
  let enumTypeService: IEnumTypeService = getEnumTypeService();


  let isValid = $derived(selectedItem !== null);

  onMount(() => {
    switch (type) {
      case DataTypeKind.LNodeType:
          lNodeTypeService.getTypeOptions().then(data => options = data);
        break;
      case DataTypeKind.DOType:
          doTypeService.getTypeOptions().then(data => options = data);
        break;
      case DataTypeKind.DAType:
          daTypeService.getTypeOptions().then(data => options = data);
        break;
      case DataTypeKind.EnumType:
          enumTypeService.getTypeOptions().then(data => options = data);
        break;
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
  });

  function typeToInstanceText(type: DataTypeKind): string {
    switch (type) {
      case DataTypeKind.LNodeType:
        return "LnClass";
      case DataTypeKind.DOType:
        return "CDC";
      case DataTypeKind.DAType:
      case DataTypeKind.EnumType:
      default:
        return "Instance";
    }
  }

  function handleConfirm() {
    closeDialog('confirm', {instanceType: selectedItem.id});
  }

</script>


<OscdBaseDialog
  title={`Select ${typeToInstanceText(type)}`}
  maxWidth="800px"
  bind:open
  onConfirm={handleConfirm}
  confirmDisabled={!isValid}
>
  {#snippet content()}
    <div >
      <p>{text}</p>

      <Autocomplete
        label={`Select ${typeToInstanceText(type)}`}
        bind:value={selectedItem}
        {options}
        {getOptionLabel}
        textfield$required
        menu$style="max-height: 500px;"
      >
        {#snippet match(item)}

            <div class="custom-item">
              <div class="title">{item.id}</div>
              {#if item.id}
                <div class="subtitle">{item.description}</div>
              {/if}
            </div>

          {/snippet}
      </Autocomplete>
    </div>
  {/snippet}


</OscdBaseDialog>

<style>
  .title {
    font-weight: bold;
  }

  .subtitle {
    font-size: 0.85rem;
    color: gray;
  }
</style>
