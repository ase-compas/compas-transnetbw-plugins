<Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  onSMUIDialogClosed={(e) => {
    (open = false);
     onClose();
  }}
  surface$style="width: 1080px; max-width: calc(100vw - 32px);"
>
  <div class="dialog-title">
    {@render title?.()}
  </div>

  <Content id="large-scroll-content">
    {@render content?.()}
  </Content>

  <Actions>
    {@render actions?.()}
  </Actions>
</Dialog>

<script lang="ts">
  import Dialog, { Actions, Content } from '@smui/dialog';

  interface Props {
    open?: boolean;
    title?: import('svelte').Snippet;
    content?: import('svelte').Snippet;
    actions?: import('svelte').Snippet;
    onClose?: () => void;
  }

  let {
    open = $bindable(false),
    title,
    content,
    actions,
    onClose = () => {}
  }: Props = $props();

</script>

<style lang="css">
  .dialog-title {
    padding: 1rem;
    font-size: 24px;
    font-weight: 500;
    border-bottom: 1px solid var(--mdc-theme-on-surface-divider-color);
  }
</style>
