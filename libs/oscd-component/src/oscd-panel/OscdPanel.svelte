<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    backgroundColor?: string;
    header?: Snippet;
    content?: Snippet;
    additional?: Snippet;
  }

  let {
    backgroundColor = '',
    header,
    content,
    additional,
  }: Props = $props();
</script>

<div class="panel-parent" style="--bg-color: {backgroundColor}">
  {#if header}
    <div class="panel-parent__header">
      {@render header()}
    </div>
  {/if}

  {#if content}
    <div class="panel-parent__body">
      {@render content()}
    </div>
  {/if}

  {#if additional}
    <div class="panel-parent__footer">
      {@render additional()}
    </div>
  {/if}
</div>

<style>
  .panel-parent {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 30vw;
    border-radius: 4px;
    padding: 24px;
    background-color: var(--bg-color);
    max-height: calc(100vh - 14rem);
  }

  .panel-parent__header,
  .panel-parent__footer {
    flex-shrink: 0;
  }

  .panel-parent__body {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;

    padding-right: 4px;

    scrollbar-width: thin;
    scrollbar-color: #6B9197 transparent;
  }

  .panel-parent__body::-webkit-scrollbar {
    width: 4px;
  }

  .panel-parent__body::-webkit-scrollbar-track {
    background: transparent;
  }

  .panel-parent__body::-webkit-scrollbar-thumb {
    background-color: #6B9197;
    border-radius: 999px;
  }
</style>
