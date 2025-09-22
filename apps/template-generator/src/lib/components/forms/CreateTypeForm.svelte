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
  export let id: string = "";
  export let selectedItem: Option | null = null;
  export let valid: boolean = false;

  export let idLabel: string = "Enter ID";
  export let autocompleteLabel: string = "Select";
  let options: Option[] = [];

  export let getOptions: () => Promise<any[]> = async () => [];
  export let mapOption: (data: any) => Option = (data) => data;
  export let isIdTakenFn : (id: string) => Promise<boolean> = async (id: string) => false;


  let getOptionLabel: (opt: Option) => string = (opt) => opt?.id ?? '';

  // --- State ---
  let idTouched: boolean = false;

  let isIdValid: boolean = false;
  let isIdTaken: boolean = false;
  let isIdTakenLoading = false;
  let isFormValid: boolean = false;

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

  $: if (id) {
    isIdValid = validateId(id);
    validateIdTaken(id, selectedItem);
  } else {
    isIdTaken = false;
    isIdTakenLoading = false;
    updateFormValid(selectedItem);
  }

  $: valid = isFormValid;

  $: dispatch('change', { id, selectedItem, valid });

  // --- Events ---
  const dispatch = createEventDispatcher();

  let idTextField;

  export function focus() {
     idTextField?.focus?.();
  }

  function handleSubmit(event: Event) {
    event.preventDefault();
    if (isFormValid) {
      dispatch('submit', { id, selectedItem });
    }
  }
</script>

<form on:submit={handleSubmit}>
  <TextField
    bind:this={idTextField}
    label={idLabel}
    bind:value={id}
    required
    style="width: 100%;"
    invalid={idTouched && (!isIdValid || isIdTaken)}
    on:input={() => (idTouched = true)}
  >
    <svelte:fragment slot="helper">
      {#if idTouched && !isIdValid}
        <span style="color: var(--mdc-theme-error, #b71c1c);">
          Invalid ID
        </span>
      {:else if idTouched && isIdTaken}
        <span style="color: var(--mdc-theme-error, #b71c1c);">
          This ID is already taken.
        </span>
      {/if}
    </svelte:fragment>
  </TextField>

  <Autocomplete
    label={autocompleteLabel}
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
