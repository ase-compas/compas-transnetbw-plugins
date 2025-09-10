<script lang="ts">
  import { IEnumTypeService } from '../../services/enum-type.service';
  import { getEnumTypeService } from '../../services';
  import { type EnumTypeDetails } from '../../domain';
  import { onMount } from 'svelte';
  import EnumTypeDetailsView from '../enumType/EnumTypeDetailsView.svelte';
  import { CloseReason } from '../../stores/drawerStackStore';
  import { confirmUnsavedChanges } from '../../utils/overlayUitils';

  let enumTypeService: IEnumTypeService = getEnumTypeService();

  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId;
  export let instanceTypeId: string | null = null;

  let isDirty: boolean = false;
  let isCreateMode = () => mode === 'create';
  let enumType: EnumTypeDetails = null;
  let configurationState: {id: string, selected: boolean}[] = [];

  onMount(() => {
    loadData();
  })

  function loadData() {
    if(isCreateMode()) {
      enumTypeService.getDefaultType(instanceTypeId)
        .then(result => {
          result.id = typeId;
          result.instanceType = instanceTypeId
          result.children.forEach(i => i.meta.isConfigured = true)
          enumType = result
        });
    } else {
      enumTypeService.getTypeById(typeId)
        .then(result => enumType = result);
    }
  }

  function saveChanges() {
    if(isDirty || isCreateMode()) {
      enumTypeService.createOrUpdateType({
        id: enumType.id,
        instanceType: enumType.instanceType,
        children: configurationState.filter(i => i.selected).map(i => ({
          name: i.id
        }))
      })
    }
  }

  function handleChange(event) {
    isDirty = event.detail.isDirty;
    configurationState = event.detail.updatedItems;
  }

  // ===== Dialog Close Guard =====
  export const canClose = async (reason: CloseReason): Promise<boolean> => {
    if (isDirty && reason !== 'save') {
      const { action } = await confirmUnsavedChanges();
      if (action === 'save') saveChanges();
      else if (action === 'cancel') return false;
    } else if (reason === 'save') {
      await saveChanges();
    }
    return true;
  };
</script>

<div style="max-width: 900px; margin: auto; background: white; padding: 20px; border: 1px solid #e4e4e4; border-radius: 8px">
  <EnumTypeDetailsView
    {enumType}
    isDirty={isDirty}
    on:change={e => handleChange(e)}/>
</div>
