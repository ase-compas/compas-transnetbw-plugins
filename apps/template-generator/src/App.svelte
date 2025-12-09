<script lang="ts">
  import LNodeTypesView from "./views/lNodeTypes/LNodeTypesView.svelte";
  import LNodeTypeDetailView from "./views/lNodeTypeDetails/LNodeTypeDetailView.svelte";
  import { route, pluginStore } from '@oscd-transnet-plugins/oscd-template-generator';
  import { onMount } from 'svelte';
  import { DialogHost } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { DrawerStack, OscdToastHost } from '@oscd-transnet-plugins/oscd-component';
  import DefaultTypeView from './views/defaults/DefaultTypeView.svelte';
  import "svelte-material-ui/bare.css"
  import "../public/material-icon.css"
  import "../public/global.css"
  import "../public/smui.css"

  interface Props {
    devMode?: boolean;
  }

  const { devMode = false } : Props = $props();
  let file;

  if (import.meta.env.DEV) {
    import("../../../libs/theme/src/lib/theme-light.css")
  }

  async function handleFileChange(event: Event) {
    file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const text = await file.text();
    const parser = new DOMParser();
    pluginStore.setPluginState({doc: parser.parseFromString(text, "application/xml")})
  }

  async function setPluginState() {
    const text = await file.text();
    const parser = new DOMParser();
    pluginStore.setPluginState({doc: parser.parseFromString(text, "application/xml")})
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
    if (devMode) pluginStore.state.host = createMockHost();
  });
</script>

<div class="oscd-app">
  {#if !pluginStore.state.doc && devMode}
    <input type="file" accept=".ssd" oninput={handleFileChange} />
    <p>Please load an XML file to start.</p>
  {:else}
    {#if pluginStore.state.doc !== null && pluginStore.ready}
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
<OscdToastHost/>

<style>
  .template-generator-container {
    padding: 1rem 2rem;
  }
</style>
