<script lang="ts">
  import Dialog, { Actions, Content, Header } from '@smui/dialog';
  import Button from '@smui/button';

  interface Props {
    open?: boolean;
    onStay?: () => void;
    onLeave?: () => void;
  }

  let {
    open = $bindable(false),
    onStay = () => {},
    onLeave = () => {},
  }: Props = $props();
</script>

<Dialog
  bind:open
  class="leave-confirm-dialog"
  surface$style="width: 100%; max-width: 420px;"
  aria-labelledby="leave-confirm-title"
  aria-describedby="leave-confirm-content"
>
  <Header>
    <div class="header">
      <h4 id="leave-confirm-title">Discard unsaved data?</h4>
    </div>
  </Header>

  <p class="message">If you close this dialog now, all entered data will be permanently lost. This action cannot be undone.</p>

  <Actions class="oscd-dialog__actions">
    <Button type="button" onclick={onStay}>Continue editing</Button>
    <Button type="button" onclick={onLeave} style="background-color: var(--red); color: white;">
      Discard data
    </Button>
  </Actions>
</Dialog>

<style>
  .header {
    background-color: var(--primary-base);
    color: white;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  h4 {
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }

  .message {
    text-align: center;
    margin: 0;
    padding: 1.5rem 1.25rem;
    font-family: Roboto, sans-serif;
  }

  :global(.mdc-dialog.leave-confirm-dialog) {
    z-index: 6000 !important;
  }
</style>
