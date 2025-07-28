<script lang="ts">
  import { Title, Content, Actions } from '@smui/dialog';
  import Dialog from '@smui/dialog';
  import { createEventDispatcher } from 'svelte';
  import Button from '@smui/button';
  import { isValid } from 'date-fns';

  export let open: boolean = false;
  export let title: string = '';
  export let confirmActionText: string = 'Confirm';
  export let cancelActionText: string = 'Cancel';
  export let width: string = '2160px';
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
  <div class="dialog-title">
    <h4>{title}</h4>
  </div>

  <Content id="large-scroll-content">
    <slot name="content" />
  </Content>

  <div  class="actions">
  <Actions>
      <Button action="cancel" style="margin: 0 0.5rem 0 0">{cancelActionText}</Button>
      <Button
        action="confirm"
        variant="raised"
        style="margin: 0"
        disabled={confirmDisabled}
      >{confirmActionText}</Button>
  </Actions>
  </div>
</Dialog>

<style lang="css">
  .dialog-title {
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid var(--mdc-theme-on-surface-divider-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Bottom shadow */
    color: white;
    padding: 1.2rem 1rem;
    background-color: var(--mdc-theme-primary, #ff3e00);
  }

  .actions {
    background-color: white;
    border-top: 1px solid var(--mdc-theme-on-surface-divider-color);
  }

  h4 {
    margin: 0;
    padding: 0;
    font-weight: 500;
  }
</style>


