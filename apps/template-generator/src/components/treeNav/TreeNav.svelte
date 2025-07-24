<script lang="ts">
  import type { TreeNode } from '../../lib/types/threePanelTypes.ts';
  import { createEventDispatcher } from 'svelte';
  import TreeNavList from './TreeNavList.svelte';
  import { toggleNode, expandNodeAndAncestors, } from '../../lib/utils/treeNavUtils';

  export let nodes: TreeNode[] = [];
  export let selectedId: string | null = null;

  let openSet = new Set<string>();

  export let lastHandledId: string | null = null;

  const dispatch = createEventDispatcher();

  // React to external or internal changes to selectedId
  $: if (selectedId !== lastHandledId && selectedId !== null) {
    expandNodeAndAncestors(selectedId, openSet, nodes);
    openSet = new Set(openSet); // trigger reactivity
    lastHandledId = selectedId;
  }

  function handleSelected(id: string) {
    if (id === selectedId) {
      // toggle if reselecting the same item
      toggleNode(id, openSet, nodes);
    } else {
      // update selectedId — reactive block above will run
      selectedId = id;
      dispatch('select', id);
    }

    openSet = new Set(openSet); // ensure reactivity
  }

  const handleToggle = (id: string) => {
    toggleNode(id, openSet, nodes);
    openSet = new Set<string>(openSet); // trigger reactivity
  }

</script>

<TreeNavList
  {nodes}
  {selectedId}
  {openSet}
  on:select={(e) => handleSelected(e.detail)}
  on:toggle={(e) => handleToggle(e.detail)}
/>
