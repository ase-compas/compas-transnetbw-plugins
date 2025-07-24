<script lang="ts">
  import { TreeNode } from '../../lib/types/threePanelTypes';
  import { createEventDispatcher } from 'svelte';
  import TreeNavItem from './TreeNavItem.svelte';

  export let nodes: TreeNode[] = [];
  export let selectedId: string | null = null;
  export let openSet: Set<string> = new Set<string>();


  const dispatch = createEventDispatcher();

  const handleSelected = (id: string) => {
    dispatch('select', id);
  }

  function handleToggle(id: string) {
    dispatch('toggle', id);
  }

</script>

<ul>
  {#each nodes as node (node.id)}
    <TreeNavItem
      {node}
      {selectedId}
      {openSet}
      on:select={(e) => handleSelected(e.detail)}
      on:toggle={(e) => handleToggle(e.detail)}
    />
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding-inline-start: 0;
  }
</style>


