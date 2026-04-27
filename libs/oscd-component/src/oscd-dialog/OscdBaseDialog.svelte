<script lang="ts">
  import Dialog, { Actions, Content, Header } from '@smui/dialog';
  import Button from '@smui/button';
  import { OscdIconActionButton } from '../index';
  import LeaveConfirmDialog from './LeaveConfirmDialog.svelte';

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
    confirmClose?: boolean;
    content?: import('svelte').Snippet;
    actions?: import('svelte').Snippet<[{ requestClose: () => void }]>;
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
    confirmClose = false,
    content,
    actions,
    onClose = () => {},
    onCancel = () => {},
    onConfirm = () => {},
  }: Props = $props();

  let leaveConfirmOpen = $state(false);
  let pendingCloseAction: (() => void) | null = $state(null);
  let suppressNextClose = $state(false);

  function initiateClosure(callback: () => void) {
    if (confirmClose) {
      pendingCloseAction = callback;
      leaveConfirmOpen = true;
    } else {
      suppressNextClose = true;
      callback();
    }
  }

  function handleClose(e: CustomEvent<{ action: string }>) {
    if (suppressNextClose) { suppressNextClose = false; return; }
    if (e.detail.action === 'confirm') onConfirm();
    else initiateClosure(onClose);
  }

  function handleDialogClick(e: MouseEvent) {
    if (confirmClose && (e.target as Element).classList.contains('mdc-dialog__scrim')) {
      initiateClosure(onClose);
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (confirmClose && open && e.key === 'Escape' && !leaveConfirmOpen) {
      e.preventDefault();
      initiateClosure(onClose);
    }
  }

  function confirmLeave() {
    suppressNextClose = true;
    leaveConfirmOpen = false;
    const action = pendingCloseAction ?? onClose;
    pendingCloseAction = null;
    action();
  }

  const confirmButtonStyle = $derived(
    confirmDisabled
      ? ''
      : `background-color: ${confirmActionColor === 'primary' ? color : '#FF203A'}; color: white;`
  );
</script>

<svelte:window onkeydown={handleKeydown} />

<Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  onSMUIDialogClosed={handleClose}
  escapeKeyAction={confirmClose ? '' : 'close'}
  scrimClickAction={confirmClose ? '' : 'close'}
  onclick={handleDialogClick}
  surface$style={`width: ${width}; max-width: ${maxWidth}; height: ${height}; max-height: ${maxHeight};`}
>
  <Header>
    <div class="dialog__title" style={`background-color: ${color};`}>
      <h4>{title}</h4>
      {#if showCloseButton}
        <OscdIconActionButton
          tabindex="-1"
          onClick={() => initiateClosure(onClose)}
          tooltip="Close"
          tooltipSide="left"
          type="close"
          fillColor="white"
        />
      {/if}
    </div>
  </Header>

  <Content id="dialog__content">
    {@render content?.()}
  </Content>

  <div class="dialog__actions">
    {#if actions}
      {@render actions({ requestClose: () => initiateClosure(onCancel) })}
    {:else}
      <Actions class="oscd-dialog__actions">
        {#if cancelActionText}
          <Button type="button" onclick={() => initiateClosure(onCancel)} color="secondary">
            {cancelActionText}
          </Button>
        {/if}
        <Button type="button" action="confirm" disabled={confirmDisabled} style={confirmButtonStyle}>
          {confirmActionText}
        </Button>
      </Actions>
    {/if}
  </div>
</Dialog>

{#if confirmClose}
  <LeaveConfirmDialog
    bind:open={leaveConfirmOpen}
    onStay={() => { leaveConfirmOpen = false; }}
    onLeave={confirmLeave}
  />
{/if}

<style>
  /* Shared horizontal padding token — keeps title, content and footer buttons in one column */
  :global(.mdc-dialog__surface) {
    --dialog-h-padding: 1.5rem;
  }

  :global(.mdc-dialog) { z-index: 5000 !important; }

  /* Align SMUI action buttons (default footer) with content */
  :global(.mdc-dialog__actions) {
    padding-top: 0.6rem !important;
    padding-bottom: 0.6rem !important;
    padding-left: var(--dialog-h-padding, 1.5rem) !important;
    padding-right: var(--dialog-h-padding, 1.5rem) !important;
  }

  :global(.oscd-dialog__actions) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  :global(.oscd-dialog__actions > button) { margin: 0; }

  .dialog__title {
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid var(--mdc-theme-on-surface-divider-color, rgba(0, 0, 0, 0.12));
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: white;
    padding: 1.2rem var(--dialog-h-padding, 1.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto, sans-serif;
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
