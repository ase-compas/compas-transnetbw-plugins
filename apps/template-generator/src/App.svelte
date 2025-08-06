<script lang="ts">
  import LNodeTypesView from "./views/lNodeTypesView/LNodeTypesView.svelte";
  import LNodeTypeDetailView from "./views/lNodeTypeDetailsView/LNodeTypeDetailView.svelte";
  import { route, host as storeHost } from "./lib/stores";
  import { onMount } from 'svelte';
  import { initServices } from './lib/services';
  import TestView from './views/TestView.svelte';
  import { DialogHost } from '@oscd-transnet-plugins/oscd-services/dialog';

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

  function createMockHost(): HTMLElement | null {
    const mockHost = document.createElement('div');
    mockHost.id = 'oscd-host';
    mockHost.addEventListener('oscd-edit-v2', (e) => {
      console.log('Mock host clicked:', e);
    });
    document.body.appendChild(mockHost);
    return mockHost;
  }

  onMount(() => {
    if(devMode) host = createMockHost(); // Create a mock host element in dev mode
    storeHost.set(host);
  })

  $: if(doc) {
    initServices(doc, host);
  }
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
        <LNodeTypesView {doc}/>
      {:else if $route.path[0] === 'test'}
        <TestView/>
      {:else}
        <LNodeTypeDetailView {doc}/>
      {/if}
    </div>
  {/if}
</div>
<DialogHost/>

<style>
  @import "/global.css";
  @import "/material-icon.css";
  @import '/smui.css';

  .template-generator-container {
    padding: 1rem 2rem;
  }
</style>
