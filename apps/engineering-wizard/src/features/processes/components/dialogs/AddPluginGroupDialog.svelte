<script lang="ts">
  import { closeDialog } from "@oscd-transnet-plugins/oscd-services/dialog";
  import OscdBaseDialog from "libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte";
  import OscdInput from "libs/oscd-component/src/oscd-input/OscdInput.svelte";
  import OscdSelect from "libs/oscd-component/src/oscd-select/OscdSelect.svelte";

  interface Props {
        open: boolean;
        groups: number
    };

    let {
        open = $bindable(false),
        groups
    }: Props = $props();

    let name = $state<string>('')
    let position = $state<string>((groups+1).toString());

    const cancel = () => closeDialog('cancel');
    const addGroup = () => closeDialog('confirm', {name,  position: Number(position)})

    // select values from 1..groups+1
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

            <OscdSelect
                data={groupPositions}
                label="Position"
                variant="outlined"
                bind:value={position}
                required
            />
        </div>
    {/snippet}
</OscdBaseDialog>

<style>
    .add-group-form {
        display: flex;
        padding: 1rem 0;
        flex-direction: column;
        gap: 1rem;
    }
</style>


