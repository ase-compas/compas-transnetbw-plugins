<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import Dialog, { Actions, Content, Title } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import TextField from '@smui/textfield';
  import Autocomplete from '@smui-extra/autocomplete';
  import {lnClassDescriptions} from '../../../data/lnClassDescriptions.ts'

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
  $: isValid = idIsValid && id && selectedLnClass !== null;

  $: if (!open) {
    resetFormValues();
  }

  // ===== Event Handlers =====
  const handleCreate = () => {
    dispatch('success', { id: id, lnClass: selectedLnClass.title });
    open = false;
  };

  const handleCancel = () => {
    dispatch('abort');
    open = false;
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
  <Dialog
    bind:open
    selection
    aria-labelledby="lnclass-title"
    aria-describedby="lnclass-description"
    surface$style="width: 700px; max-width:90vw; height: 100vh;"

  >
    <Title id="lnclass-title"><h3 style="margin: 0; padding: 0;">Create Logical Node Type</h3></Title>
    <Content id="dialog-ln-content" style="padding: 1rem;" fullscreen={true}>
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
        menu$style="max-height: 400px;"
      >
        <svelte:fragment slot="match" let:match>
          <div class="custom-item">
            <div class="title">{match.title}</div>
            <div class="subtitle">{match.subtitle}</div>
          </div>
        </svelte:fragment>
      </Autocomplete>

    </Content>
    <Actions>
      <Button action="none" on:click={handleCancel}>
        <Label>Cancel</Label>
      </Button>
      <Button action="all" on:click={handleCreate} variant="raised" disabled="{!isValid}">
        <Label>Create</Label>
      </Button>
    </Actions>
  </Dialog>
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
