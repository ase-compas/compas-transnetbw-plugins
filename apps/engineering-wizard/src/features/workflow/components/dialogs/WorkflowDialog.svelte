<script lang="ts">
  import EngineeringWorkflowView from '../../../../views/EngineeringWorkflow.view.svelte';
  import { closeDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import type { ViewPlugin } from '../../viewPlugin';
  import { selectedEngineeringProcess } from '../../../processes/stores.svelte.js';
  import { editorTabs } from '../../layout.svelte.js';

  interface Props {
    open: boolean;
    doc: XMLDocument | undefined;
    editCount?: any;
    host: HTMLElement;
    plugins?: ViewPlugin[];
    docName?: string;
    docId?: string;
    nsdoc?: any;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: any;
  }

  let {
    open,
    doc,
    editCount = -1,
    host,
    plugins = [],
    nsdoc,
    docName,
    docId,
    docs,
    locale,
    oscdApi,
  }: Props = $props();

  let hasExited = $state(false);
  let prevOpen: boolean | undefined = $state();
  let backdropEl: HTMLDivElement | null = $state(null);

  const exit = (reason: 'cancel' | 'exit') => {
    if (hasExited) return;
    hasExited = true;
    // when closing
    selectedEngineeringProcess.process = null;
    editorTabs.visible = true;
    closeDialog(reason);
  };

  const onBackdropClick = () => exit('exit');
  const onBackdropKeydown = (event: KeyboardEvent) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      exit('exit');
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onBackdropClick();
    }
  };

  $effect(() => {
    if (open !== prevOpen) {
      prevOpen = open;
      if (open) {
        hasExited = false;
        backdropEl?.focus();
      } else {
        exit('cancel');
      }
    }
  });
</script>

{#if open}
  <div
    class="ewf-dialog-backdrop"
    bind:this={backdropEl}
    role="dialog"
    aria-modal="true"
    aria-labelledby="ewf-title"
    tabindex="-1"
    onkeydown={onBackdropKeydown}
    onclick={(event) => {
      if (event.target === event.currentTarget) {
        exit('exit');
      }
    }}
  >
    <div class="ewf-dialog-panel" role="document">
      <h2 id="ewf-title" class="sr-only">Engineering Workflow</h2>
      <EngineeringWorkflowView
        {doc}
        {editCount}
        {host}
        {plugins}
        {docName}
        {nsdoc}
        {docs}
        {docId}
        {locale}
        {oscdApi}
        onExit={() => exit('exit')}
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
