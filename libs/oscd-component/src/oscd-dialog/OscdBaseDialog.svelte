<script lang="ts">
  import Dialog, { Actions, Content, Header } from '@smui/dialog';
  import Button from '@smui/button';
  import { OscdIconActionButton } from '../index';

  interface Props {
    open?: boolean;
    title?: string;
    confirmActionText?: string;
    cancelActionText?: string;
    confirmActionColor?: 'primary' | 'danger';
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    confirmDisabled?: boolean;
    color?: string;
    showCloseButton?: boolean;
    content?: import('svelte').Snippet;
    actions?: import('svelte').Snippet;

    onClose?: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
  }

  let {
    open = $bindable(false),
    title = '',
    confirmActionText = 'Confirm',
    confirmActionColor = 'primary',
    cancelActionText = 'Cancel',
    width = '80vw',
    maxWidth = '85vw',
    height = '85vh',
    maxHeight = '85vh',
    confirmDisabled = false,
    color = 'var(--mdc-theme-primary, #ff3e00)',
    showCloseButton = true,
    content,
    actions,

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

  let confirmButtonStyle = $derived.by(() => {
    let confirmColor;
    if (confirmActionColor === 'primary') {
      confirmColor = color;
    } else {
      confirmColor = '#FF203A'
    }

    return confirmDisabled ? '' : `background-color: ${confirmColor}; color: white;`
  })
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
        tabindex="-1"
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
    {#if actions}
      {@render actions()}
    {:else}
      <Actions class="oscd-dialog__actions">
        {#if cancelActionText}
          <Button
            type="button"
            action="cancel"
            color="secondary">
            {cancelActionText}
          </Button>
        {/if}
        <Button
          type="button"
          action="confirm"
          disabled={confirmDisabled}
          style={confirmButtonStyle}
        >
          {confirmActionText}
        </Button>
      </Actions>
    {/if}
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


