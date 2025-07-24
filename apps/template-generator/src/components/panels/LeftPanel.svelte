<script lang="ts">
  import TreeNav from '../treeNav/TreeNav.svelte';
  import {hierarchy, selectedNodeId } from '../../lib/stores/threePanelStoreV2'

  function handleTreeSelect(id: string) {
    selectedNodeId.set(id);
  }
</script>

<div class="left-panel">
  <h1>Hierarchy</h1>
  <TreeNav
    nodes={$hierarchy}
    selectedId={$selectedNodeId}
    on:select={e => handleTreeSelect(e.detail)} />
</div>
