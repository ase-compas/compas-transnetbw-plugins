<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import TextField from '@smui/textfield';
  import Autocomplete from '@smui-extra/autocomplete';
  import {lnClassDescriptions} from '../../../data/lnClassDescriptions.ts'
  import { getLNodeTypeService, LNodeTypeService } from '../../services';
  import BaseDialog from './BaseDialog.svelte';

  const lNodeTypeService: LNodeTypeService = getLNodeTypeService();

  // ===== Parameters =====

  export let open: boolean = false;

  // ===== State Variables =====
  let id: string = '';
  let selectedLnClass = null;
  let idTouched = false;

  const dispatch = createEventDispatcher();

  let options = [];

  onMount(async () => {
      options = lnClassDescriptions.map(item => ({
      title: item.lnClass,
      subtitle: item.description
    }));
  });

  // ===== Computed Variables =====
  $: idIsValid = /^[^\s]+$/.test(id); // No whitespace
  $: isIdTaken = id ? lNodeTypeService.isIdTaken(id) : false;
  $: isValid = idIsValid && !isIdTaken && id && selectedLnClass !== null;

  $: if (!open) {
    resetFormValues();
  }

  // ===== Event Handlers =====
  const handleCreate = () => {
    dispatch('success', { id: id, lnClass: selectedLnClass.title });
  };

  const handleCancel = () => {
    dispatch('abort');
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
    title="Create Logical Node Type"
    confirmActionText="Create"
    maxWidth="800px"
    bind:open
    on:confirm={handleCreate}
    on:cancel={handleCancel}
    confirmDisabled={!isValid}
  >

  <div style="padding: 1rem;" slot="content">
    <TextField
      label="Logical Node ID"
      bind:value={id}
      required
      style="width: 100%;"
      {idIsValid}
      invalid={idTouched && !idIsValid}
      on:input={() => idTouched = true}
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
      label="Logical Node Class"
      bind:value={selectedLnClass}
      {options}
      {getOptionLabel}
      let:match
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
