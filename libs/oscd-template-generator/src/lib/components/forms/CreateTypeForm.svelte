<script lang="ts">
  import { onMount } from 'svelte';
  import TextField from '@smui/textfield';
  import Autocomplete from '@smui-extra/autocomplete';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import HelperText from '@smui/textfield/helper-text';
  import CharacterCounter from '@smui/textfield/character-counter';
  import type { ChangeEventDetails, Option } from './types';

  interface Props {
    // id settings
    idLabel?: string;
    isIdTaken?: (id: string) => Promise<boolean>;

    // auto complete settings
    autocompleteLabel?: string;
    getOptions?: () => Promise<Option[]>;

    // create from default settings
    allowCreateFromDefault?: boolean; // callbacks
    isDefaultAvailable?: (typeId: string) => Promise<boolean>;

    onChange?: (_: ChangeEventDetails) => void;
    onSubmit?: (_: ChangeEventDetails) => void;
  }

  let {
    idLabel = 'Enter Id',
    isIdTaken = async (_: string) => false,

    autocompleteLabel = 'Select Option',
    getOptions = async () => [],

    allowCreateFromDefault = false,
    isDefaultAvailable = async (_: string) => false,

    onChange = (_: ChangeEventDetails) => {
    },
    onSubmit = (_: ChangeEventDetails) => {
    }
  }: Props = $props();

  // --- State ---
  let loading = $state<boolean>(false);
  let options = $state<Option[]>([]);

  // from fields
  let typeId = $state<string>('');
  let selectedItem = $state<Option | undefined>(undefined);
  let createFromDefault = $state<boolean>(false);

  // typeId validation state
  let typeIdTouched = $derived<boolean>(false);
  let isTypeIdRequiredValid = $derived<boolean>(typeId && typeId.trim().length > 0);
  let isTypeIdFormatValid = $derived<boolean>(/^\S+$/.test(typeId));
  let isTypeIdAvailable = $state<boolean>(false);
  let isTypeIdValid = $derived<boolean>(isTypeIdRequiredValid && isTypeIdFormatValid && isTypeIdAvailable);

  // form is valid
  let isFormValid = $derived<boolean>(isTypeIdValid && !!selectedItem);

  // default available for selected item
  let defaultAvailable = $state<boolean>(false);

  onMount(() => {
    loadOptions();
  });

  function loadOptions() {
    loading = true;
    getOptions().then((data) => {
      options = data;
      loading = false;
    }).catch((err) => {
      console.log('Error loading options:', err);
    });
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

  // check if typeId is taken available whenever it changes
  $effect(() => {
    if (!typeId) return;
    isIdTaken(typeId).then((isTaken) => {
      isTypeIdAvailable = !isTaken;
    }).catch((err) => {
      console.error('Failed to check if ID is taken:', err);
    })
  });

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

</script>

<form onsubmit={handleSubmit}>
  <TextField
    bind:value={typeId}
    label={idLabel}
    required
    style="width: 100%;"
    invalid={typeIdTouched && !isTypeIdValid}
    input$maxlength={64}
    onblur={() => typeIdTouched = true}
    >
    {#snippet helper()}
      <HelperText validationMsg persitent>
        {#if !isTypeIdRequiredValid}
          Please enter an ID.
        {:else if !isTypeIdFormatValid}
          ID must contain no spaces.
        {:else if !isTypeIdAvailable}
          That ID is already in use. Please choose a different one.
        {/if}
      </HelperText>
    <CharacterCounter>0 / 64</CharacterCounter>
    {/snippet}
  </TextField>

  {#if !loading}
    <Autocomplete
      label={autocompleteLabel}
      bind:value={selectedItem}
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
      {#snippet helper()}
        <span>hehe</span>
      {/snippet}
    </Autocomplete>
  {/if}

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
