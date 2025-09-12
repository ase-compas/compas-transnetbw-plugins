<script lang="ts">
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import Autocomplete from "@smui-extra/autocomplete";
  import { DataTypeKind } from '../../domain';
  import { onMount } from 'svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';


  export let type: DataTypeKind;
  export let text: string | undefined = undefined;
  export let open: boolean = false;

  let selectedItem = null;
  let options = [];
  let getOptionLabel: (opt) => string = (opt) => opt?.id ?? '';


  $: isValid = selectedItem !== null;

  onMount(() => {
    switch (type) {
      case DataTypeKind.LNodeType:
        import('../../services').then(({ getLNodeTypeService }) => {
          const service = getLNodeTypeService();
          service.getTypeOptions().then(data => options = data);
        });
        break;
      case DataTypeKind.DOType:
        import('../../services').then(({ getDOTypeService }) => {
          const service = getDOTypeService();
          service.getTypeOptions().then(data => options = data);
        });
        break;
      case DataTypeKind.DAType:
        import('../../services').then(({ getDATypeService }) => {
          const service = getDATypeService();
          service.getTypeOptions().then(data => options = data);
        });
        break;
      case DataTypeKind.EnumType:
        import('../../services').then(({ getEnumTypeService }) => {
          const service = getEnumTypeService();
          service.getTypeOptions().then(data => options = data);
        });
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
  on:confirm={handleConfirm}
  confirmDisabled={!isValid}
>
  <div slot="content">
    <p>{text}</p>

    <Autocomplete
      label={`Select ${typeToInstanceText(type)}`}
      bind:value={selectedItem}
      {options}
      {getOptionLabel}
      textfield$required
      menu$style="max-height: 500px;"
    >
      <svelte:fragment slot="match" let:match>
        <div class="custom-item">
          <div class="title">{match.id}</div>
          {#if match.id}
            <div class="subtitle">{match.description}</div>
          {/if}
        </div>
      </svelte:fragment>
    </Autocomplete>
  </div>


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
