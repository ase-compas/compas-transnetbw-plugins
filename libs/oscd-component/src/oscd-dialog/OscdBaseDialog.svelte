<script lang="ts">
  import Dialog, { Actions, Content } from '@smui/dialog';
  import { createEventDispatcher } from 'svelte';
  import Button from '@smui/button';

  export let open: boolean = false;
  export let title: string = '';
  export let confirmActionText: string = 'Confirm';
  export let cancelActionText: string = 'Cancel';
  export let width: string = '80vw';
  export let maxWidth: string = '85vw';
  export let height: string = '85vh';
  export let maxHeight: string = '85vh';
  export let confirmDisabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleClose(e) {
    if (e.detail.action === 'cancel') dispatch('cancel');
    else if (e.detail.action === 'confirm') dispatch('confirm');
    else dispatch('cancel');
  }
</script>

<Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  on:SMUIDialog:closed={(e) => handleClose(e)}
  surface$style={`width: ${width}; max-width: ${maxWidth}; height: ${height}; max-height: ${maxHeight};`}
>
  <div class="dialog__title">
    <h4>{title}</h4>
  </div>

  <Content id="dialog__content">
    <slot name="content" />
  </Content>

  <div class="dialog__actions">
    <Actions class="oscd-dialog__actions">
      <Button action="cancel">{cancelActionText}</Button>
      <Button
        action="confirm"
        variant="raised"
        disabled={confirmDisabled}
      >{confirmActionText}</Button>
    </Actions>
  </div>
</Dialog>

<style lang="css">
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
    background-color: var(--mdc-theme-primary, #ff3e00);
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


