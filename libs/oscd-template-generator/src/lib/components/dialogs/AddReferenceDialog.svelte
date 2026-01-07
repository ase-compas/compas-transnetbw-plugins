<script lang=ts>
  import Radio from '@smui/radio';
  import FormField from "@smui/form-field";
  import OscdBaseDialog from "libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte";
  import { getDataTypeService, getDefaultTypeService } from '../../services';
  import Autocomplete from '@smui-extra/autocomplete';
  import CreateTypeForm from '../forms/CreateTypeForm.svelte';
  import { onMount } from 'svelte';
  import OscdInfoIcon from 'libs/oscd-icons/src/oscd-info-icon/OscdInfoIcon.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import type { ChangeEventDetails } from '../forms/types';

  type Mode = 'select' | 'create'

  interface Item {
    id: string
  }

  const service = getDataTypeService();
  const defaultTypeService = getDefaultTypeService();

  let {
    open = $bindable(false),
    typeKind,
    instanceType,
    objTypeKind,
    objInstanceType,
    itemId
  } = $props();

  let selectAutocompleteEl: HTMLElement = $state();

  let mode: Mode  = $state('select');
  let selectedItem = $state<Item>();
  let loading = $state(true)
  let options = $state([]);
  let selectNotAvailable = $derived(options.length === 0)
  let formState = $state<ChangeEventDetails | undefined>();

onMount(async () => {
    if (mode !== 'select') return;

    loading = true;
    try {
      const types = await service.getAssignableTypes(typeKind, instanceType, [itemId]);
      options = [
        ...types.lNodeTypes,
        ...types.dataObjectTypes,
        ...types.dataAttributeTypes,
        ...types.enumTypes
      ].map((type) => ({ id: type.id }));

      // auto-switch to create if no options
      if (options.length === 0) {
        mode = 'create';
        return;
      }

      // focus autocomplete
      setTimeout(() => selectAutocompleteEl?.focus(), 350);
    } catch (err) {
      console.error('Error fetching types:', err);
    } finally {
      loading = false;
    }
  });

  function handleConfirm() {
    let result = {};
    if (mode === 'select') {
      result =  {
        id: selectedItem.id,
        instanceType: objInstanceType,
        mode: mode
      }
    } else if (mode === 'create') {
      result = {
        id: formState.id,
        instanceType: formState.selectedItem.id,
        createFromDefault: formState.createFromDefault,
        mode: mode
      }
    }

    closeDialog('confirm', result)
  }

  function updateState(details: ChangeEventDetails) {
    formState = details;
  }

  // ===== Event Handlers =====
  function handleCreate() {
    if(!formState || !formState.valid) return;
    handleConfirm();
  }
</script>

<div class="generic-create-dialog">
  <OscdBaseDialog
    title="Add Reference"
    confirmActionText="ok"
    maxWidth="800px"
    bind:open
    onCancel={() => closeDialog('cancel')}
    onClose={() => closeDialog('exit')}
    onConfirm={(() => handleConfirm())}
    confirmDisabled={mode === 'select' ? !selectedItem : !(formState?.valid)}
  >
    {#snippet content()}
      <div style="padding: 1rem;" >
        <div class="referencing-mode-radios">
          <div class="radio-demo">

            <FormField>
              <Radio bind:group={mode} value="select" touch disabled={selectNotAvailable}/>
              {#snippet label()}
                  Select
              {/snippet}
            </FormField>
            <FormField>
              <Radio bind:group={mode} value="create" touch />
              {#snippet label()}
                  Create
              {/snippet}
            </FormField>
          </div>
        </div>

        {#if selectNotAvailable}
          <p class="info-text">
            <OscdInfoIcon svgStyles="fill: #555;"/> No compatible DataTypes available for this object.
            Create a new DataType to continue.
          </p>
        {/if}

        {#if mode === 'select' && !loading}
          <Autocomplete
            bind:this={selectAutocompleteEl}
            label="Select Type"
            bind:value={selectedItem}
            {options}
            getOptionLabel={o => o?.id ?? ''}
          >
            {#snippet match(item)}
              <div>{item.id}</div>
            {/snippet}
          </Autocomplete>

        {:else if mode === 'create'}
          <CreateTypeForm
            idLabel = "Type ID"
            autocompleteLabel="Instance Type"

            typeKind={objTypeKind}
            getOptions={() => service.getTypeOptions(objTypeKind)}

            defaultInstance={objInstanceType}
            typeSelectionDisabled={!!objInstanceType}

            allowCreateFromDefault={false}
            isDefaultAvailable={async (instanceType) => {
                const result = await defaultTypeService.getDefault({instanceType, kind: objTypeKind});
                return !!result;
            }}

            onSubmit={handleCreate}
            onChange={updateState}
          />
        {:else}
          unknown mode: {mode}
        {/if}
      </div>
      {/snippet}
  </OscdBaseDialog>
</div>

<style>
    .info-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #555;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
</style>

