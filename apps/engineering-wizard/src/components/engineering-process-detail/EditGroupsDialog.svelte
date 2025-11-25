<script lang="ts">
  /**
   * The EditGroupsDialog allows to rename, reorder and delete Plugin Groups.
   * On confirmation, the dialog returns the new list of groups. Deleted Groups are omitted.
   */
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import OscdBaseDialog from 'libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
  import OscdInput from 'libs/oscd-component/src/oscd-input/OscdInput.svelte';
  import { OscdIconActionButton } from '@oscd-transnet-plugins/oscd-component';
  import { dragHandle, dragHandleZone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import { OscdDragIndicatorIcon } from '@oscd-transnet-plugins/oscd-icons';

  const FLIP_DURATION_MS = 100;

  export interface PluginGroupItem {
    id: string;
    title: string;
  }

  interface Props {
    open: boolean;
    groups: PluginGroupItem[];
  }

  let {
    open = $bindable(false),
    groups
  }: Props = $props();

  let editGroup = $state<PluginGroupItem[]>([...groups]);

  const cancel = () => closeDialog('cancel');
  const save = () => {
    closeDialog('confirm', { groups: editGroup.map(g => ({ ...g })) });
  };

  const removeGroup = (id: string) => () => {
    editGroup = editGroup.filter(g => g.id !== id);
  };
  const handleSort = (event) => {
    editGroup = event.detail.items;
  };

  // Validation: All group names must be non-empty
  let valid = $derived(editGroup.every(g => g.title.trim().length > 0));
</script>

<OscdBaseDialog
  title="Edit Groups"
  confirmActionText="Save"
  maxWidth="600px"
  bind:open
  onConfirm={save}
  onCancel={cancel}
  onClose={cancel}
  confirmDisabled={!valid}
>
  {#snippet content()}
    <div class="edit-groups-form">
      <h3>Drag & Drop to change Order</h3>
      <div
        use:dragHandleZone={{ items: editGroup, flipDurationMs: FLIP_DURATION_MS, dropTargetStyle: {} }}
        onconsider={handleSort}
        onfinalize={handleSort}
      >
        {#each editGroup as group (group.id)}
          <div
            class="group-list-item"
            data-id={group.id}
            animate:flip={{ duration: FLIP_DURATION_MS }}
          >

            <div use:dragHandle>
              <OscdDragIndicatorIcon />
            </div>

            <OscdInput
              label="Name"
              variant="outlined"
              bind:value={group.title}
              required={true}
            />

            <OscdIconActionButton
              type="delete"
              tooltip="Delete"
              fillColor="#FF203A"
              onClick={removeGroup(group.id)}
            />
          </div>
        {/each}
      </div>
    </div>
  {/snippet}
</OscdBaseDialog>

<style>

  .group-list-item {
    display: flex;
    padding: 1rem 0;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
</style>


