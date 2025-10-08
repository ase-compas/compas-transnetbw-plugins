<script lang="ts">
  import EngineeringWorkflow from './engineering-workflow.view.svelte';
  import { closeDialog } from '../../../../libs/oscd-services/src/dialog';
  import type { ViewPlugin } from '../types/view-plugin';
  import { editorTabsVisible } from '../stores/editor-tabs.store';
  import { onMount } from 'svelte';

  export let open: boolean;
  export let doc: XMLDocument | undefined;
  export let editCount = -1;
  export let host: HTMLElement;
  export let plugins: ViewPlugin[] = [];

  let closed = false;
  $: if (!open && !closed) {
    closed = true;
    editorTabsVisible.set(true);
    closeDialog('cancel');
  }

  function handleExit() {
    if (!closed) {
      closed = true;
      editorTabsVisible.set(true);
      closeDialog('exit');
    }
  }

  let backdropEl: HTMLDivElement | null = null;
  onMount(() => {
    backdropEl?.focus();
  });
</script>

<div class="ewf-dialog-backdrop"
     bind:this={backdropEl}
     role="dialog"
     aria-modal="true"
     tabindex="-1"
     aria-label="Engineering Workflow"
     on:keydown={(e)=>{ if(e.key==='Escape') handleExit(); }}
     on:click|self={handleExit}>
  <div class="ewf-dialog-panel">
    <EngineeringWorkflow {doc} {editCount} {host} {plugins} on:exit={handleExit} />
  </div>
</div>

<style>
  .ewf-dialog-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    z-index: 5;
    overflow: auto;
  }

  .ewf-dialog-panel {
    background: #fff;
    width: 100vw;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 28px -2px rgba(0,0,0,0.35);
    display: flex;
    flex-direction: column;
  }
</style>
