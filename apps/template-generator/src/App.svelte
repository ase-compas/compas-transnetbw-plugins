<script lang="ts">
  import LogicalNodesOverview from "./views/logical-nodes-overview/LogicalNodesOverview.svelte";
  import LogicalNodeDetailsView from "./views/logical-node-details-view/LogicalNodeDetailsView.svelte";
  import { selectedLNodeTypeId } from "./lib/stores";

  export let doc: XMLDocument | null = null;
  export let devMode: boolean = false;


  async function handleFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const text = await file.text();
    const parser = new DOMParser();
    doc = parser.parseFromString(text, "application/xml");
  }

</script>

{#if devMode}<h1>Dev Mode Active</h1>{/if}
<div>
  {#if !doc && devMode}
    <!-- Development mode: allow file upload -->
    <input type="file" accept=".ssd" on:change={handleFileChange} />
    <p>Please load an XML file to start.</p>
  {:else}
    <div class="template-generator-container">
      {#if !$selectedLNodeTypeId }
        <LogicalNodesOverview {doc}/>
      {:else}
        <LogicalNodeDetailsView/>
      {/if}
    </div>
  {/if}
</div>

<style>
  @import "/global.css";
  @import "/material-icon.css";
  @import '/smui.css';

  .template-generator-container {
    padding: 1rem 2rem;
  }
</style>
