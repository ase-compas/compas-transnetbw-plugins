<script lang="ts">
  import Dialog, { Actions, Content, Header } from '@smui/dialog';
  import Button from '@smui/button';

  interface Props {
    open?: boolean;
    title?: string;
    message?: string;
    discardActionText?: string;
    cancelActionText?: string;
    onStay?: () => void;
    onLeave?: () => void;
  }

  let {
    open = $bindable(false),
    title = 'Unsaved changes',
    message = 'If you leave now, your unsaved changes will be lost.',
    discardActionText = 'Discard changes',
    cancelActionText = 'Keep editing',
    onStay = () => {},
    onLeave = () => {},
  }: Props = $props();
</script>

<Dialog
  bind:open
  class="leave-confirm-dialog"
  surface$style="width: 100%; max-width: 480px;"
  aria-labelledby="leave-confirm-title"
  aria-describedby="leave-confirm-content"
>
  <Header>
    <div class="header">
      <h4 id="leave-confirm-title">{title}</h4>
    </div>
  </Header>

  <Content>
    <p class="message" id="leave-confirm-content">{message}</p>
  </Content>

  <Actions class="leave-confirm-actions">
    <Button type="button" onclick={onStay}>{cancelActionText}</Button>
    <Button type="button" onclick={onLeave} style="background-color: #FF203A; color: white;">
      {discardActionText}
    </Button>
  </Actions>
</Dialog>

<style>
  .header {
    background-color: var(--primary-base);
    color: white;
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  h4 {
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 20px;
  }

  .message {
    text-align: center;
    margin: 0;
    padding: 1rem 0;
    font-family: Roboto, sans-serif;
    font-size: 0.9375rem;
  }

  :global(.mdc-dialog.leave-confirm-dialog) {
    z-index: 6000 !important;
  }

  :global(.leave-confirm-actions) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 1.5rem;
  }

  :global(.leave-confirm-actions > button) { margin: 0; }
</style>
