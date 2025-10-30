<script>
import {OscdBaseDialog} from "@oscd-transnet-plugins/oscd-component";
import {Content} from "@smui/dialog";
import {closeDialog} from "@oscd-transnet-plugins/oscd-services/dialog";


  /**
   * @typedef {Object} Props
   * @property {boolean} [open]
   * @property {string} [title] - Dialog title text
   * @property {string} [message] - Short message in center
   * @property {string} [confirmActionText] - Confirm button label
   * @property {string} [cancelActionText] - Cancel button label
   * @property {string} [color] - CSS color for primary button and dialog title bar
   */

  /** @type {Props} */
  let {
    open = $bindable(false),
    title = '',
    message = '',
    confirmActionText = 'OK',
    cancelActionText = 'Cancel',
    color = 'var(--mdc-theme-primary, #ff3e00)'
  } = $props();

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
  on:close={() => closeDialog('close')}
  width="100%"
  maxWidth="500px"
  height="auto"
  maxHeight="auto"
>
  {#snippet content()}
    <Content >
      <div class="oscd-confirm-dialog__content">
        {message}
      </div>
    </Content>
  {/snippet}
</OscdBaseDialog>


<style>
  .oscd-confirm-dialog__content {
    text-align: center;
  }
</style>
