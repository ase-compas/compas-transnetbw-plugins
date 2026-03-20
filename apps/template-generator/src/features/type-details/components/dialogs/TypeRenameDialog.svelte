<script lang="ts">
  import { TypeKind, type InstanceDetails } from "../../../../shared/model";
  import { closeDialog } from "@oscd-transnet-plugins/oscd-services/dialog";
  import InstanceAutocomplete from "../ui/InstanceAutocomplete.svelte";
  import { OscdBaseDialog } from '@oscd-transnet-plugins/oscd-component';
  import TypeIdInput from '../ui/TypeIdInput.svelte';
  import { onMount } from 'svelte';

  interface Props {
    open?: boolean;
    typeId: string;
  }

  let {
    open = $bindable(false),
    typeId
  }: Props = $props();


  let value: string = $state(typeId);
  let valid: boolean = $state(false);
  let inputEl: TypeIdInput;

  onMount(() => {
    // auto select
    setTimeout(() =>{
      inputEl.select();
    }, 250)
  })


</script>

<OscdBaseDialog
  title="Rename Type"
  confirmActionText='Rename'
  maxWidth="800px"
  bind:open
  onConfirm={() => {closeDialog('confirm', {value: value})}}
  onCancel={() => closeDialog('cancel')}
  onClose={() => closeDialog('exit')}
  confirmDisabled={!valid}
>
  {#snippet content()}
    <div style="padding: 1rem;" >
      <TypeIdInput
        bind:this={inputEl}
        bind:typeId={value}
        bind:valid
        idLabel="Rename Type ID"
        showErrorOnInput
      />
    </div>
  {/snippet}
</OscdBaseDialog>
