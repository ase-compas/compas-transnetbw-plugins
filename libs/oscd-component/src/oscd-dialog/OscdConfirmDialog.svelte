<script>
import {OscdBaseDialog} from "@oscd-transnet-plugins/oscd-component";
import {Content} from "@smui/dialog";
import {closeDialog} from "@oscd-transnet-plugins/oscd-services/dialog";

export let open = false;

export let title = '';              // Dialog title text
export let message = '';            // Short message in center
export let confirmActionText = 'OK';// Confirm button label
export let cancelActionText = 'Cancel'; // Cancel button label
export let color = 'var(--mdc-theme-primary, #ff3e00)'; // CSS color for primary button and dialog title bar

function handleConfirm() {
  closeDialog('confirm');
}

function handleCancel() {
  closeDialog('cancel');
}
</script>

<OscdBaseDialog
  bind:open
  {title}
  {confirmActionText}
  {cancelActionText}
  {color}
  on:confirm={() => handleConfirm()}
  on:cancel={() => handleCancel()}
  width="100%"
  maxWidth="500px"
  height="auto"
  maxHeight="auto"
>
  <Content slot="content">
    <div class="oscd-confirm-dialog__content">
      {message}
    </div>
  </Content>
</OscdBaseDialog>


<style>
  .oscd-confirm-dialog__content {
    text-align: center;
  }
</style>
