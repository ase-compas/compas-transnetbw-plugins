<script lang="ts">
  import { IEnumTypeService } from '../../services/enum-type.service';
  import { getEnumTypeService } from '../../services';
  import { type EnumTypeDetails } from '../../domain';
  import { onMount } from 'svelte';
  import EnumTypeDetailsView from '../enumType/EnumTypeDetailsView.svelte';

  let enumTypeService: IEnumTypeService = getEnumTypeService();

  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId;
  export let instanceTypeId: string | null = null;

  let isDirty: boolean = false;
  let isCreateMode = () => mode === 'create';
  let enumType: EnumTypeDetails = null;

  onMount(() => {
    loadData();
  })

  function loadData() {
    if(isCreateMode()) {
      enumTypeService.getDefaultType(instanceTypeId)
        .then(result => {
          result.id = typeId;
          enumType = result
        });
    } else {
      enumTypeService.getTypeById(typeId)
        .then(result => enumType = result);
    }
  }
</script>

<div style="max-width: 900px; margin: auto; background: white; padding: 20px; border: 1px solid #e4e4e4; border-radius: 8px">
  <EnumTypeDetailsView
    {enumType}
    isDirty={isDirty}
    on:change={e => console.log(e.detail)}/>
</div>
