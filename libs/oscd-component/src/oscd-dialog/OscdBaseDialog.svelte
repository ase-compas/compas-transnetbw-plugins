<script lang="ts">
  import Dialog, { Actions, Content, Header } from '@smui/dialog';
  import { createEventDispatcher } from 'svelte';
  import Button from '@smui/button';
  import { OscdIconActionButton } from '../index';

  interface Props {
    open?: boolean;
    title?: string;
    confirmActionText?: string;
    cancelActionText?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    confirmDisabled?: boolean;
    color?: string;
    showCloseButton?: boolean;
    content?: import('svelte').Snippet;

    onClose?: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
  }

  let {
    open = $bindable(false),
    title = '',
    confirmActionText = 'Confirm',
    cancelActionText = 'Cancel',
    width = '80vw',
    maxWidth = '85vw',
    height = '85vh',
    maxHeight = '85vh',
    confirmDisabled = false,
    color = 'var(--mdc-theme-primary, #ff3e00)',
    showCloseButton = true,
    content,

    onClose = () => {},
    onCancel = () => {},
    onConfirm = () => {},
  }: Props = $props();

  function handleClose(e: CustomEvent<{action: string}>) {
    if (e.detail.action === 'cancel') onCancel()
    else if (e.detail.action === 'confirm') onConfirm()
    else if (e.detail.action === 'close') onClose()
    else onClose();
  }
</script>

<Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  onSMUIDialogClosed={handleClose}
  surface$style={`width: ${width}; max-width: ${maxWidth}; height: ${height}; max-height: ${maxHeight};`}
>

  <Header>
    <div class="dialog__title" style={`background-color: ${color};`}>
      <h4>{title}</h4>
      {#if showCloseButton}
      <OscdIconActionButton
        onClick={() => {
          open = false;
          onClose();
        }}
        tooltip="Close"
        tooltipSide="left"
        type="close"
        fillColor="white"/>
      {/if}
    </div>
  </Header>

  <Content id="dialog__content">
    {@render content?.()}
  </Content>

  <div class="dialog__actions">
    <Actions class="oscd-dialog__actions">
      {#if cancelActionText}
        <Button
          action="cancel"
          color="secondary"
          tabindex="1">
          {cancelActionText}
        </Button>
      {/if}
      <Button
        color="primary"
        action="confirm"
        disabled={confirmDisabled}
        style={confirmDisabled ? '' : `background-color: ${color}; color: white;`}
        tabindex="0"
      >{confirmActionText}</Button>
    </Actions>
  </div>
</Dialog>

<style lang="css">
  :global(.mdc-dialog) {
    z-index: 5000 !important;
  }
  :global(.oscd-dialog__actions) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  :global(.oscd-dialog__actions > button) {
    margin: 0;
  }

  .dialog__title {
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid var(--mdc-theme-on-surface-divider-color, rgba(0, 0, 0, 0.12));
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Bottom shadow */
    color: white;
    padding: 1.2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  .dialog__actions {
    background-color: white;
    border-top: 1px solid var(--mdc-theme-on-surface-divider-color, rgba(0, 0, 0, 0.12));
  }

  h4 {
    margin: 0;
    padding: 0;
    font-weight: 500;
  }
</style>


