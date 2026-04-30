<script lang="ts">
  import OscdBaseDialog from './OscdBaseDialog.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';

  interface Props {
    open: boolean;
    title?: string;
    message?: string;
    discardActionText?: string;
    cancelActionText?: string;
  }

  let {
    open = $bindable(false),
    title = 'Unsaved changes',
    message = 'If you leave now, your unsaved changes will be lost.',
    discardActionText = 'Discard changes',
    cancelActionText = 'Keep editing',
  }: Props = $props();
</script>

<OscdBaseDialog
  bind:open
  {title}
  confirmActionText={discardActionText}
  confirmActionColor="danger"
  cancelActionText={cancelActionText}
  width="100%"
  maxWidth="480px"
  height="auto"
  maxHeight="auto"
  showCloseButton={false}
  onConfirm={() => closeDialog('confirm')}
  onCancel={() => closeDialog('cancel')}
  onClose={() => closeDialog('cancel')}
>
  {#snippet content()}
    <p class="discard-dialog__message">{message}</p>
  {/snippet}
</OscdBaseDialog>

<style>
  .discard-dialog__message {
    text-align: center;
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 0.9375rem;
  }
</style>
