<script lang="ts">
  import { onMount } from 'svelte';
  import TextField from '@smui/textfield';
  import Autocomplete from '@smui-extra/autocomplete';
  import BaseDialog from './BaseDialog.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';


  // ===== Parameters =====

  export let open: boolean = false;

  // ===== State Variables =====
  let id: string = '';
  let selectedLnClass = null;
  let idTouched = false;

  let options = [];

  onMount(async () => {

  });

  // ===== Computed Variables =====
  $: idIsValid = /^[^\s]+$/.test(id); // No whitespace
  $: isValid = idIsValid

  $: if (!open) {
    resetFormValues();
  }

  // ===== Event Handlers =====
  const handleCreate = () => {
    closeDialog('confirm', { id: id, cdc: 'SPS' });
  };

  const handleCancel = () => {
    closeDialog('cancel');
  };

  // ===== Util Functions =====

  const getOptionLabel = (item) => item?.title ?? '';

  const resetFormValues = () => {
    id = '';
    selectedLnClass = null;
    idTouched = false;
  };
</script>


<div class="oscd-new-lnode-type-dialog">
  <BaseDialog
    title="Create New Data Object Type"
  confirmActionText="Next"
    maxWidth="800px"
    bind:open
    on:confirm={handleCreate}
    on:cancel={handleCancel}
    confirmDisabled={!isValid}
  >

  <div style="padding: 1rem;" slot="content">
    <TextField
      label="ID"
      bind:value={id}
      required
      style="width: 100%;"
      invalid={idTouched && !idIsValid}
      on:input={() => idTouched = true}
    >
      <svelte:fragment slot="helper">
        {#if idTouched && !idIsValid}
          <span style="color: var(--mdc-theme-error, #b71c1c);">ID must not contain whitespace.</span>
        {:else if idTouched}
          <span style="color: var(--mdc-theme-error, #b71c1c);">This ID is already taken.</span>
        {/if}
      </svelte:fragment>
    </TextField>

    <Autocomplete
      label="Common Data Class (cdc)"
      bind:value={selectedLnClass}
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
  </BaseDialog>
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
