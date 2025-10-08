<script lang="ts">
  import EngineeringWorkflow from './engineering-workflow.view.svelte';
  import { closeDialog } from '../../../../libs/oscd-services/src/dialog';
  import type { ViewPlugin } from '../types/view-plugin';
  import { editorTabsVisible } from '../stores/editor-tabs.store';

  export let open: boolean;
  export let doc: XMLDocument | undefined;
  export let editCount = -1;
  export let host: HTMLElement;
  export let plugins: ViewPlugin[] = [];

  let hasExited = false;
  let prevOpen: boolean | undefined;
  let backdropEl: HTMLDivElement | null = null;

  const exit = (reason: 'cancel' | 'exit') => {
    if (hasExited) return;
    hasExited = true;
    editorTabsVisible.set(true);
    closeDialog(reason);
  };

  const onBackdropClick = () => exit('exit');
  const onChildExit = () => exit('exit');

  $: if (open !== prevOpen) {
    prevOpen = open;
    if (open) {
      hasExited = false;
      backdropEl?.focus();
    } else {
      exit('cancel');
    }
  }
</script>

{#if open}
  <div
    class="ewf-dialog-backdrop"
    bind:this={backdropEl}
    role="dialog"
    aria-modal="true"
    aria-labelledby="ewf-title"
    tabindex="-1"
    on:click|self={onBackdropClick}
  >
    <div class="ewf-dialog-panel" role="document">
      <h2 id="ewf-title" class="sr-only">Engineering Workflow</h2>
      <EngineeringWorkflow
        {doc}
        {editCount}
        {host}
        {plugins}
        on:exit={onChildExit}
      />
    </div>
  </div>
{/if}

<style>
    .ewf-dialog-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.45);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 1.2rem;
        z-index: 5;
        overflow: auto;
    }

    .ewf-dialog-panel {
        background: var(--white);
        width: 100vw;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 10px 28px -2px rgba(0,0,0,0.35);
        display: flex;
        flex-direction: column;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 1px, 1px);
        white-space: nowrap;
        border: 0;
    }
</style>
