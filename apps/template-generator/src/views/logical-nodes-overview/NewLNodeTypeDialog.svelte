<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import Dialog, { Actions, Content, Title } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import TextField from '@smui/textfield';
  import Autocomplete from '@smui-extra/autocomplete';

  // ===== Parameters =====

  export let open: boolean = false;

  // ===== State Variables =====
  let id: string = '';
  let selectedLnClass = null;

  const dispatch = createEventDispatcher();

  let options = [];


  onMount(async () => {
    const response = await fetch('../../../public/data/lnClass-descriptions.json');
    if (response.ok) {
      const data = await response.json();
      options = data.map(item => ({
        title: item.lnClass,
        subtitle: item.description
      }));

    } else {
      console.error('Failed to load data:', response.statusText);
    }
  });

  // ===== Computed Variables =====
  $: isValid = id && selectedLnClass !== null;

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
  };
</script>


<div class="oscd-new-lnode-type-dialog">
  <Dialog
    bind:open
    selection
    aria-labelledby="lnclass-title"
    aria-describedby="lnclass-description"
    surface$style="width: 100vw; height: 100vh;"
  >
    <Title id="lnclass-title"><h3 style="margin: 0; padding: 0;">Create Logical Node Type</h3></Title>
    <Content id="dialog-ln-content" style="padding: 1rem;">
      <TextField
        label="Logical Node ID"
        bind:value={id}
        required
        style="width: 100%;"
      />

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
