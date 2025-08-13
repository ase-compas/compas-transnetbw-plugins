<script lang="ts">
  import { onMount } from 'svelte';
  import TextField from '@smui/textfield';
  import Autocomplete from '@smui-extra/autocomplete';
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  // ===== Props =====
  export let open: boolean = false;
  export let dialogTitle: string;
  export let confirmText: string = 'Confirm';
  export let idLabel: string = 'ID';
  export let autocompleteLabel: string = 'Select Option';
  export let options: { title: string; subtitle?: string }[] = [];
  export let checkIdTaken: (id: string) => boolean;
  export let onConfirm: (id: string, selected: any) => void;

  // ===== State Variables =====
  let id: string = '';
  let selectedItem = null;
  let idTouched = false;

  // ===== Computed Variables =====
  $: idIsValid = /^[^\s]+$/.test(id); // No whitespace
  $: isIdTaken = id ? checkIdTaken(id) : false;
  $: isValid = idIsValid && !isIdTaken && id && selectedItem !== null;

  $: if (!open) resetFormValues();

  // ===== Event Handlers =====
  const handleCreate = () => {
    onConfirm(id, selectedItem);
  };

  const handleCancel = () => {
    closeDialog('cancel');
  };

  // ===== Util Functions =====
  const getOptionLabel = (item) => item?.title ?? '';
  const resetFormValues = () => {
    id = '';
    selectedItem = null;
    idTouched = false;
  };
</script>

<div class="generic-create-dialog">
  <OscdBaseDialog
    title={dialogTitle}
    confirmActionText={confirmText}
    maxWidth="800px"
    bind:open
    on:confirm={handleCreate}
    on:cancel={handleCancel}
    confirmDisabled={!isValid}
  >
    <div style="padding: 1rem;" slot="content">
      <TextField
        label={idLabel}
        bind:value={id}
        required
        style="width: 100%;"
        invalid={idTouched && !idIsValid}
        on:input={() => (idTouched = true)}
      >
        <svelte:fragment slot="helper">
          {#if idTouched && !idIsValid}
            <span style="color: var(--mdc-theme-error, #b71c1c);">ID must not contain whitespace.</span>
          {:else if idTouched && isIdTaken}
            <span style="color: var(--mdc-theme-error, #b71c1c);">This ID is already taken.</span>
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
            <div class="title">{match.title}</div>
            <div class="subtitle">{match.subtitle}</div>
          </div>
        </svelte:fragment>
      </Autocomplete>
    </div>
  </OscdBaseDialog>
</div>

<style>
  .title {
    font-weight: bold;
  }

  .subtitle {
    font-size: 0.85rem;
    color: gray;
  }
</style>
