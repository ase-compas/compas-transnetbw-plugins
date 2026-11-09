<script lang="ts">
import {OscdBaseDialog} from "@oscd-transnet-plugins/oscd-component";
import {closeDialog} from "@oscd-transnet-plugins/oscd-services/dialog";


  interface Props {
    open: boolean;
    title?: string;
    message?: string;
    confirmActionText?: string;
    confirmActionColor?: 'primary' | 'danger';
    cancelActionText?: string;
    color?: string;
    headerColor?: string;
    confirmButtonColor?: string;
  }

  let {
    open = $bindable(false),
    title = '',
    message = '',
    confirmActionText = 'OK',
    confirmActionColor = 'primary',
    cancelActionText = 'Cancel',
    color,
    headerColor,
    confirmButtonColor,
  }: Props = $props();

function handleConfirm() {
  closeDialog('confirm');
}

function handleCancel() {
  closeDialog('cancel');
}

function fitMessage(node: HTMLDivElement) {
  const content = node.parentElement;
  const surface = node.closest<HTMLElement>('.oscd-base-dialog__surface');
  if (!content || !surface) throw new Error('Confirmation message requires a dialog surface.');

  const update = () => {
    const contentStyle = getComputedStyle(content);
    const availableHeight =
      parseFloat(getComputedStyle(surface).maxHeight) -
      (surface.offsetHeight - content.offsetHeight) -
      parseFloat(contentStyle.paddingTop) -
      parseFloat(contentStyle.paddingBottom);
    const lineHeight = parseFloat(getComputedStyle(node).lineHeight);
    node.style.setProperty('--message-lines', String(Math.max(1, Math.floor(availableHeight / lineHeight))));
  };

  const observer = new ResizeObserver(update);
  // Clamping changes the content size, so observe only the dialog chrome.
  for (const child of Array.from(surface.children)) {
    if (child !== content) observer.observe(child);
  }
  window.addEventListener('resize', update);
  update();
  return {
    destroy() {
      observer.disconnect();
      window.removeEventListener('resize', update);
    },
  };
}
</script>

<OscdBaseDialog
  bind:open
  {title}
  {confirmActionText}
  {confirmActionColor}
  {cancelActionText}
  {color}
  {headerColor}
  {confirmButtonColor}
  onConfirm={() => handleConfirm()}
  onCancel={() => handleCancel()}
  onClose={() => closeDialog('cancel')}
  width="100%"
  maxWidth="500px"
  height="auto"
  maxHeight="calc(100dvh - 64px)"
>
  {#snippet content()}
    <div class="oscd-confirm-dialog__content" title={message} use:fitMessage>
      {message}
    </div>
  {/snippet}
</OscdBaseDialog>


<style>
  .oscd-confirm-dialog__content {
    text-align: center;
    min-width: 0;
    overflow-wrap: anywhere;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--message-lines);
    line-clamp: var(--message-lines);
    line-height: 1.5;
  }
</style>
