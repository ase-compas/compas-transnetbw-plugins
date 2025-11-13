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
    {@render header()}
  {/if}
  {#if content}
    {@render content()}
    {/if}
  {#if additional}
    {@render additional()}
  {/if}
</div>
<style>
  .panel-parent {
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 24px;
    width: 30vw;
    border-radius: 4px;
    padding: 24px;
    background-color: var(--bg-color);
  }
</style>
