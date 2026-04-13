<script lang="ts">
  import OscdBaseDialog from '../../../../../../libs/oscd-component/src/oscd-dialog/OscdBaseDialog.svelte';
  import Textfield from '@smui/textfield';
  import List, { Item, Graphic, Label } from '@smui/list';
  import Radio from '@smui/radio';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import HelperText from '@smui/textfield/helper-text';

  interface Props {
    open?: boolean;
    mode: 'create' | 'update';
    initialVersion?: string;
  }

  let { open = $bindable(false), mode, initialVersion }: Props = $props();

  let error: string | null = $state(null);

  let description: string = $state('');
  let selectedVersionUpdate = $state(''); 
  function validateSave(): boolean {
    if (mode === 'update' && !selectedVersionUpdate) {
      error = "Please select a version update type.";
      return false;
    }
    return true;
  }


  function handleConfirm() {
    if (validateSave()) {
      closeDialog('confirm', { versionUpdate: selectedVersionUpdate, description: description });
    }
  }

  function handleClose() {
    closeDialog('cancel');
  }

</script>

<OscdBaseDialog
  title={ mode === 'update' ? "Save as new version" : "Create new default type" }
  confirmActionText="Save"
  maxWidth="500px"
  maxHeight="800px"
  bind:open
  onConfirm={handleConfirm}
  onCancel={handleClose}
  onClose={handleClose}
>
  {#snippet content()}
    <div class="content">
      <div class="summary"></div>
      <div class="update-info">
      {#if mode === 'update'}
        <List class="demo-list" radioList>
          <Item>
            <Graphic>
              <Radio bind:group={selectedVersionUpdate} value="major" />
            </Graphic>
            <Label>Major change</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selectedVersionUpdate} value="minor" />
            </Graphic>
            <Label>Minor change</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selectedVersionUpdate} value="patch" />
            </Graphic>
            <Label>Patch change</Label>
          </Item>
        </List>
      {:else}
      <Textfield
          variant="outlined"
          disabled={true}
          bind:value={initialVersion}
          label="Initial version"
          style="width: 100%;"
          />
      {/if}

        <Textfield
          textarea
          input$maxlength={100}
          bind:value={description}
          label="Description (optional)"
          style="width: 100%;"
        />
      </div>
        {#if error}
          <HelperText validationMsg>{error}</HelperText>
        {/if}
    </div>
  {/snippet}
</OscdBaseDialog>

<style>
  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .update-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
