<script lang="ts">
  import OscdBaseDialog from 'libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import List, { Item, Graphic, Label } from '@smui/list';
  import Radio from '@smui/radio';
  import type { VersionBump } from '../../process.service';

  interface Props {
    open: boolean;
    currentVersion: string;
  }

  let { open = $bindable(false), currentVersion }: Props = $props();

  let selected = $state<VersionBump | ''>('');

  function confirm() {
    if (selected) closeDialog('confirm', selected);
  }

  function cancel() {
    closeDialog('cancel');
  }
</script>

<OscdBaseDialog
  title="Save process"
  confirmActionText="Save"
  maxWidth="420px"
  bind:open
  onConfirm={confirm}
  onCancel={cancel}
  onClose={cancel}
  confirmDisabled={!selected}
  confirmClose={true}
>
  {#snippet content()}
    <p>Current version: <strong>{currentVersion}</strong></p>
    <p>Choose how to increment the version:</p>

    <List radioList>
      <Item>
        <Graphic><Radio bind:group={selected} value="patch" /></Graphic>
        <Label>Patch</Label>
      </Item>
      <Item>
        <Graphic><Radio bind:group={selected} value="minor" /></Graphic>
        <Label>Minor</Label>
      </Item>
      <Item>
        <Graphic><Radio bind:group={selected} value="major" /></Graphic>
        <Label>Major</Label>
      </Item>
    </List>
  {/snippet}
</OscdBaseDialog>


