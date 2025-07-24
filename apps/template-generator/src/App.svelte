<script lang="ts">
  import LogicalNodesOverview from "./views/logical-nodes-overview/LogicalNodesOverview.svelte";
  import LogicalNodeDetailsView from "./views/logical-node-details-view/LogicalNodeDetailsView.svelte";
  import MasterView from './views/MasterView.svelte';
  import { route, host as storeHost } from "./lib/stores";
  import { onMount } from 'svelte';
  import MasterV2 from './views/MasterV2.svelte';

  export let doc: XMLDocument | null = null;
  export let devMode: boolean = false;
  export let host: HTMLElement | null = null;

  async function handleFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const text = await file.text();
    const parser = new DOMParser();
    doc = parser.parseFromString(text, "application/xml");
  }

  onMount(() => {
    storeHost.set(host)
  })

</script>

{#if devMode}<h1>Dev Mode Active</h1>{/if}
<div class="oscd-app">
  {#if !doc && devMode}
    <!-- Development mode: allow file upload -->
    <input type="file" accept=".ssd" on:change={handleFileChange} />
    <p>Please load an XML file to start.</p>
  {:else}
    <div class="template-generator-container">
      {#if $route.path[0] === 'overview'}
        <LogicalNodesOverview {doc}/>
      {:else if $route.path[0] === 'master'}
        <MasterView {doc}/>
      {:else if $route.path[0] === 'masterv2'}
        <MasterV2 {doc}/>
      {:else}
        <LogicalNodeDetailsView {doc}/>
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
