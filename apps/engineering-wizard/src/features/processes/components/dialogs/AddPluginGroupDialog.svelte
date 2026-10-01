<script lang="ts">
  import { closeDialog } from "@oscd-transnet-plugins/oscd-services/dialog";
  import OscdBaseDialog from "libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte";
  import OscdInput from "libs/oscd-component/src/oscd-input/OscdInput.svelte";

  interface Props { open: boolean; groups: number; }

  let {
      open = $bindable(false),
      groups
  }: Props = $props();

  let name = $state<string>('')
  let position = $state<string>((groups+1).toString());

  const cancel = () => closeDialog('cancel');
  const addGroup = () => closeDialog('confirm', {name,  position: Number(position)})

  let groupPositions = $derived.by(() =>
    [
      ...Array.from({length: groups+1}, (_, i) => ({ value: (i+1).toString(), label: (i+1).toString() })), // iterate from 1..groups+1
    ]
  )
  let valid = $derived(name && position)

</script>

<OscdBaseDialog
    title="Add Groups"
    confirmActionText="Add"
    maxWidth="600px"
    height="auto"
    maxHeight="80vh"
    bind:open
    onConfirm={addGroup}
    onCancel={cancel}
    onClose={cancel}
    confirmDisabled={!valid}
>
    {#snippet content()}
        <div class="add-group-form">
            <OscdInput
                label="Name"
                placeholder="Group 1"
                variant="outlined"
                bind:value={name}
                required
                />

            <label class="position-field">
                <span>Position</span>
                <select bind:value={position} required>
                    {#each groupPositions as option}
                        <option value={option.value}>{option.label}</option>
                    {/each}
                </select>
            </label>
        </div>
    {/snippet}
</OscdBaseDialog>

<style>
    .add-group-form {
        display: flex;
        padding: 0;
        flex-direction: column;
        gap: 1rem;
    }

    .position-field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        color: var(--base01);
        font-family: var(--ew-font-family, 'Inter', sans-serif);
        font-size: var(--ew-font-size-small, 0.75rem);
    }

    .position-field select {
        box-sizing: border-box;
        width: 100%;
        min-height: 3.5rem;
        padding: 0 0.75rem;
        border: 1px solid #b2c7cb;
        border-radius: 4px;
        background: var(--white);
        color: var(--base03);
        font: inherit;
        font-size: 1rem;
    }

    .position-field select:focus {
        border-color: var(--primary-base);
        outline: 1px solid var(--primary-base);
    }
</style>
