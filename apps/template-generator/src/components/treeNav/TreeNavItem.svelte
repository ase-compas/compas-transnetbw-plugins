<script lang="ts">
  import { TreeNode } from '../../lib/types/threePanelTypes';
  import TreeNavItem from './TreeNavItem.svelte';
  import { createEventDispatcher } from 'svelte';

  export let node: TreeNode;
  export let selectedId: string | null = null;
  export let openSet: Set<string>;

  let canToggle = false;
  $: isOpen = openSet.has(node.id) ?? false;


  const dispatch = createEventDispatcher();

  function selectNode(id: string) {
    dispatch('select', id);
  }

  function toggleNode(id: string) {
    dispatch('toggle', id);
  }

  $: canToggle = node.children && node.children.length > 0;



</script>

<li>
  <div class="item" class:selected={node.id === selectedId}
       on:click|stopPropagation={() => selectNode(node.id)}>
    <div class="item-row">

      {#if canToggle}
        <button on:click|stopPropagation={() => toggleNode(node.id)} class="toggle-btn">
          {isOpen ? '▾' : '▸'}
        </button>
      {/if}

      <div class="item-text" class:toggle-able={canToggle}>
        {#if node?.prefixLabel}
          <span class="prefix-label">{node.prefixLabel}</span>
        {/if}

        <span>{node.label}</span>

        {#if node?.suffixLabel}
          <span class="suffix-label">{node.suffixLabel}</span>
        {/if}

      </div>
    </div>
  </div>

  {#if canToggle && isOpen}
    <ul>
      {#each node.children as child (child.id)}
        <TreeNavItem
          node={child}
          {selectedId}
          {openSet}
          on:select={(e) => selectNode(e.detail)}
          on:toggle={(e) => toggleNode(e.detail)}
        />
      {/each}
    </ul>
  {/if}
</li>


<style>
  ul {
    list-style: none;
    padding-inline-start: 2rem;
  }

  li {
    padding: 0.1rem;
    border-radius: 4px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;
  }

  .item {
    padding: 0.1rem;
  }

  .toggle-able {
    font-weight: 500;
  }

  .item-text {
    flex: 1;
    min-width: 0;
    word-break: break-word;
  }

  .item:hover .item-text {
    text-decoration: underline;
  }

  .item.selected {
    background-color: #e0f7fa;
  }

  .prefix-label {
    font-style: italic;
    font-weight: 400;
    opacity: 0.7;
    margin-right: 0.3em;
    font-size: 0.9rem;
  }

  .suffix-label {
    font-style: italic;
    font-weight: 400;
    opacity: 0.7;
    margin-left: 0.3em;
    font-size: 0.9rem;
  }

  .item-row {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  .toggle-btn {
    all: unset;
    cursor: pointer;
  }
</style>
