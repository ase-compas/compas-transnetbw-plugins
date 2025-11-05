<script lang="ts">
  import LNodeTypesView from "./views/lNodeTypes/LNodeTypesView.svelte";
  import LNodeTypeDetailView from "./views/lNodeTypeDetails/LNodeTypeDetailView.svelte";
  import { route, host as storeHost, doc as storeDoc } from "@oscd-transnet-plugins/oscd-template-generator";
  import { onMount } from 'svelte';
  import { initServices } from '@oscd-transnet-plugins/oscd-template-generator';
  import { DialogHost } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { DrawerStack } from '@oscd-transnet-plugins/oscd-component';
  import DefaultTypeView from './views/defaults/DefaultTypeView.svelte';
  import "svelte-material-ui/bare.css"
  import "../public/material-icon.css"
  import "../public/global.css"
  import "../public/smui.css"

  interface Props {
    doc?: XMLDocument | null;
    devMode?: boolean;
    host?: HTMLElement | null;
  }

  let { doc, devMode = false, host}: Props = $props();

  if (import.meta.env.DEV) {
    import("../../../libs/theme/src/lib/theme-light.css")
  }

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
    if (devMode) host = createMockHost(); // Create a mock host element in dev mode
    storeHost.set(host);
  })

  $effect(() => {
    if (doc) {
      console.log(doc)
      initServices(doc, host);
      storeDoc.set(doc);
    }
  });
</script>

<div class="oscd-app">
  {#if !doc && devMode}
    <!-- Development mode: allow file upload -->
    <input type="file" accept=".ssd" onchange={handleFileChange} />
    <p>Please load an XML file to start.</p>
  {:else}
    {#if $storeDoc}
    <div class="template-generator-container">
      {#if $route.path[0] === 'overview'}
        <LNodeTypesView/>
      {:else if $route.path[0] === 'defaults'}
        <DefaultTypeView/>
      {:else}
        <LNodeTypeDetailView/>
      {/if}
    </div>
    {/if}
  {/if}
</div>
<DialogHost/>
<DrawerStack/>

<style>
  .template-generator-container {
    padding: 1rem 2rem;
  }
</style>
