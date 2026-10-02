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
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    /** Optional custom body. When provided, replaces the default centered `message` text. */
    content?: import('svelte').Snippet;
  }

  let {
    open = $bindable(false),
    title = '',
    message = '',
    confirmActionText = 'OK',
    confirmActionColor = 'primary',
    cancelActionText = 'Cancel',
    color = 'var(--mdc-theme-primary, #ff3e00)',
    width = '100%',
    maxWidth = '500px',
    height = 'auto',
    maxHeight = 'auto',
    content
  }: Props = $props();

function handleConfirm() {
  closeDialog('confirm');
}

function handleCancel() {
  closeDialog('cancel');
}
</script>

<OscdBaseDialog
  bind:open
  {title}
  {confirmActionText}
  {confirmActionColor}
  {cancelActionText}
  {color}
  onConfirm={() => handleConfirm()}
  onCancel={() => handleCancel()}
  onClose={() => closeDialog('cancel')}
  {width}
  {maxWidth}
  {height}
  {maxHeight}
  content={dialogContent}
/>

{#snippet dialogContent()}
  {#if content}
    {@render content()}
  {:else}
    <div class="oscd-confirm-dialog__content">
      {message}
    </div>
  {/if}
{/snippet}


<style>
  .oscd-confirm-dialog__content {
    text-align: center;
  }
</style>
