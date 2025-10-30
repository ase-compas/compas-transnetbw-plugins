<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import TextField from "@smui/textfield";
  import Autocomplete from "@smui-extra/autocomplete";
  import { tick } from 'svelte';

  // --- Types ---
  export interface Option {
    id: string;
    description?: string;
  }

  export interface ChangeEventDetail {
    id: string;
    selectedItem: Option | null;
    valid: boolean;
  }

  // --- Props ---

  let options: Option[] = $state([]);

  interface Props {
    id?: string;
    selectedItem?: Option | null;
    valid?: boolean;
    idLabel?: string;
    autocompleteLabel?: string;
    getOptions?: () => Promise<any[]>;
    mapOption?: (data: any) => Option;
    isIdTakenFn?: (id: string) => Promise<boolean>;
  }

  let {
    id = $bindable(""),
    selectedItem = $bindable(null),
    valid = $bindable(false),
    idLabel = "Enter ID",
    autocompleteLabel = "Select",
    getOptions = async () => [],
    mapOption = (data) => data,
    isIdTakenFn = async (id: string) => false
  }: Props = $props();


  let getOptionLabel: (opt: Option) => string = (opt) => opt?.id ?? '';

  // --- State ---
  let idTouched: boolean = $state(false);

  let isIdValid: boolean = $state(false);
  let isIdTaken: boolean = $state(false);
  let isIdTakenLoading = $state(false);
  let isFormValid: boolean = $state(false);

  onMount(() => {
    getOptions().then(data => {
      options = data.map(mapOption);
    });
  })


  function validateId(id: string): boolean {
    return /^[^\s]+$/.test(id);
  }

  async function validateIdTaken(id: string, selectedItem) {
    isIdTakenLoading = true;
    const currentId = id;
    const taken = await isIdTakenFn(id);
    // Only update if the id hasn't changed since the check started
    if (currentId === id) {
      isIdTaken = taken;
      isIdTakenLoading = false;
      updateFormValid(selectedItem);
    }
  }

  function updateFormValid(selectedItem) {
    isIdValid = validateId(id);
    isFormValid = isIdValid && !isIdTaken && id && selectedItem !== null;
  }




  // --- Events ---
  const dispatch = createEventDispatcher();

  let idTextField = $state();

  export function focus() {
     idTextField?.focus?.();
  }

  function handleSubmit(event: Event) {
    event.preventDefault();
    if (isFormValid) {
      dispatch('submit', { id, selectedItem });
    }
  }
  $effect(() => {
    if (id) {
      isIdValid = validateId(id);
      updateFormValid(selectedItem);
      validateIdTaken(id, selectedItem);
    } else {
      isIdTaken = false;
      isIdTakenLoading = false;
      updateFormValid(selectedItem);
    }
  });

  $effect(() => {
    valid = isFormValid;
  });

  $effect(() => {
    dispatch('change', { id, selectedItem, valid });
  });
</script>

<form onsubmit={handleSubmit}>
  <TextField
    bind:this={idTextField}
    label={idLabel}
    bind:value={id}
    required
    style="width: 100%;"
    invalid={idTouched && (!isIdValid || isIdTaken)}
    on:input={() => (idTouched = true)}
  >
    {#snippet helper()}
      
        {#if idTouched && !isIdValid}
          <span style="color: var(--mdc-theme-error, #b71c1c);">
            Invalid ID
          </span>
        {:else if idTouched && isIdTaken}
          <span style="color: var(--mdc-theme-error, #b71c1c);">
            This ID is already taken.
          </span>
        {/if}
      
      {/snippet}
  </TextField>

  <Autocomplete
    label={autocompleteLabel}
    bind:value={selectedItem}
    {options}
    {getOptionLabel}
    textfield$required
    menu$style="max-height: 500px;"
  >
    {#snippet match({ match })}
      
        <div class="custom-item">
          <div class="title">{match.id}</div>
          {#if match.id}
            <div class="subtitle">{match.description}</div>
          {/if}
        </div>
      
      {/snippet}
  </Autocomplete>
  <button type="submit" style="display: none"></button>
</form>

<style>
  .title {
    font-weight: bold;
  }

  .subtitle {
    font-size: 0.85rem;
    color: gray;
  }
</style>
