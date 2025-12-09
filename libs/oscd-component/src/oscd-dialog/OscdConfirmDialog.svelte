<script lang="ts">
import {OscdBaseDialog} from "@oscd-transnet-plugins/oscd-component";
import {Content} from "@smui/dialog";
import {closeDialog} from "@oscd-transnet-plugins/oscd-services/dialog";


  interface Props {
    open: boolean;
    title?: string;
    message?: string;
    confirmActionText?: string;
    confirmActionColor?: 'primary' | 'danger';
    cancelActionText?: string;
    color?: string;
  }

  let {
    open = $bindable(false),
    title = '',
    message = '',
    confirmActionText = 'OK',
    confirmActionColor = 'primary',
    cancelActionText = 'Cancel',
    color = 'var(--mdc-theme-primary, #ff3e00)'
  }: Props = $props();

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
  {confirmActionColor}
  {cancelActionText}
  {color}
  onConfirm={() => handleConfirm()}
  onCancel={() => handleCancel()}
  onClose={() => closeDialog('cancel')}
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
