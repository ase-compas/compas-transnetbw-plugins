<script lang="ts">
  import LogicalNodesOverview from './views/logical-nodes-overview/LogicalNodesOverview.svelte';
  import LogicalNodeDetailsView from './views/logical-node-details-view/LogicalNodeDetailsView.svelte';

  let selectedElement = null;

  function handleSelectNode(node) {
    selectedElement = node;
  }

</script>

<div class="template-generator-container">
  {#if !selectedElement}
    <LogicalNodesOverview on:selectNode={e => handleSelectNode(e.detail)}/>
  {:else}
    <LogicalNodeDetailsView/>
  {/if}
</div>

<style>
  @import "/global.css";
  @import "/material-icon.css";
  @import '/smui.css';

  .template-generator-container {
    padding: 0 2rem;
  }
</style>
