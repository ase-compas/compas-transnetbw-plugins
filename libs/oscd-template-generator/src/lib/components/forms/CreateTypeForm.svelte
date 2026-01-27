<script lang="ts">
  import { onMount } from 'svelte';
  import Autocomplete from '@smui-extra/autocomplete';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import type { ChangeEventDetails, Option } from './types';
  import TypeIdInput from '../ui/TypeIdInput.svelte';
  import type { DataTypeKind } from '../../domain';

  interface Props {
    // id settings
    idLabel?: string;
    typeKind: DataTypeKind

    // defaults
    defaultTypeId?: string,
    autoGenerateId?: (instance: string) => string,
    defaultInstance?: string,


    // auto complete settings
    autocompleteLabel?: string;
    getOptions?: () => Promise<Option[]>;

    // create from default settings
    allowCreateFromDefault?: boolean; // callbacks
    isDefaultAvailable?: (typeId: string) => Promise<boolean>;

    typeSelectionDisabled?: boolean;

    onChange?: (event: ChangeEventDetails) => void;
    onSubmit?: (event: ChangeEventDetails) => void;
  }

  let {
    idLabel = 'Enter Id',
    typeKind,

    defaultTypeId = '',
    defaultInstance,
    autoGenerateId,

    autocompleteLabel = 'Select Option',
    getOptions = async () => [],

    allowCreateFromDefault = false,
    isDefaultAvailable = async (_: string) => false,

    typeSelectionDisabled = false,

    onChange = (_: ChangeEventDetails) => {
    },
    onSubmit = (_: ChangeEventDetails) => {
    }
  }: Props = $props();

  let idInputEl = $state(undefined);
  let instanceTypeSelectEl = $state(undefined);

  // --- State ---
  let loading = $state<boolean>(false);
  let options = $state<Option[]>([]);

  // from fields
  let typeId = $state<string>(defaultTypeId);
  let selectedItem = $state<Option | undefined>(undefined);
  let createFromDefault = $state<boolean>(false);

  let isTypeIdValid = $state<boolean>(false);

  // form is valid
  let isFormValid = $derived<boolean>(isTypeIdValid && !!selectedItem);

  // default available for selected item
  let defaultAvailable = $state<boolean>(false);

  onMount(async () => {
    await loadOptions();
    focusElement()
  });

  async function loadOptions() {
    loading = true;
    try {
      const data = await getOptions();
      options = data;

      // preselect instance
      if(defaultInstance) {
        selectedItem = data.find(d => d.id === defaultInstance); // check if default is a valid option
      }

      loading = false;
    } catch (err) {
      console.error('Error loading options:', err);
    }
  }

  let getOptionLabel: (opt: Option) => string = (opt) => opt?.id ?? '';

  function handleSubmit(event: Event) {
    event.preventDefault();
    onSubmit({
      id: typeId,
      selectedItem: selectedItem,
      createFromDefault: createFromDefault,
      valid: isFormValid
    });
  }

  function focusElement() {
     setTimeout(() => {
      // if instance is selected, focus input
      if (selectedItem) {
        focusInput();
      } else {
        focusSelect();
      }
    }, 350) // delay focus to prevent other element to be focused later

  }

  function focusInput() {
    idInputEl?.focus();
  }

  function focusSelect() {
    instanceTypeSelectEl?.focus();
  }

  // dispatch if any input changes
  $effect(() => {
    onChange({
      id: typeId,
      selectedItem: selectedItem,
      createFromDefault: createFromDefault,
      valid: isFormValid
    });
  })

  // on select item change, check if default is available
  $effect(() => {
    if (!selectedItem) {
      defaultAvailable = false;
      return;
    }

    isDefaultAvailable(selectedItem.id).then((isAvailable) => {
      defaultAvailable = isAvailable;
    }).catch((err) => {
      defaultAvailable = false;
      console.error('Failed to check if default is available:', err);
    })
  });

  $effect(() => {
    if (selectedItem) {
      updateSuggestedId();
    }
  })

  function updateSuggestedId() {
    if (!selectedItem) return;
    if(autoGenerateId) {
      typeId = autoGenerateId(selectedItem.id);
    }
  }

</script>

<form onsubmit={handleSubmit}>

  {#if !loading}
    <Autocomplete
      label={autocompleteLabel}
      bind:value={selectedItem}
      bind:this={instanceTypeSelectEl}
      disabled={typeSelectionDisabled}
      {options}
      {getOptionLabel}
      textfield$required
      menu$style="max-height: 500px;">
      {#snippet match(item: Option)}
        <div class="custom-item">
          <div class="title">{item.id}</div>
          {#if item.id}
            <div class="subtitle">{item.description}</div>
          {/if}
        </div>
      {/snippet}
    </Autocomplete>
  {/if}

  <TypeIdInput
    bind:typeId={typeId}
    bind:valid={isTypeIdValid}
    bind:this={idInputEl}
    {typeKind}
    idLabel={idLabel}
    showErrorsOnInput={true}
    onGenerateId={() => updateSuggestedId()}
  />

  {#if allowCreateFromDefault && !!selectedItem}
    <div style="margin-top: 1em;">
      <FormField align="start">
        <Checkbox bind:checked={createFromDefault} disabled={!defaultAvailable} />
        {#snippet label()}
          <span>Create from Default</span>
          {#if !defaultAvailable}
            <span style="color: gray; font-size: 0.85rem;"> (No default available for this class)</span>
          {/if}
        {/snippet}
      </FormField>
    </div>
  {/if}

  <button type="submit" style="display: none" aria-label="submit button"></button>
</form>

<style>
  form {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }

  .title {
    font-weight: bold;
  }

  .subtitle {
    font-size: 0.85rem;
    color: gray;
  }
</style>
