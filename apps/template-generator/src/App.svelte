<script lang="ts">
  import LNodeTypesView from './views/lNodeTypes/LNodeTypesView.svelte';
  import LNodeTypeDetailView from './views/lNodeTypeDetails/LNodeTypeDetailView.svelte';
  import { pluginStore, route } from '@oscd-transnet-plugins/oscd-template-generator';
  import { DialogHost } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { DrawerStack, OscdToastHost } from '@oscd-transnet-plugins/oscd-component';
  import DefaultTypeView from './views/defaults/DefaultTypeView.svelte';
  import IDBuilderView from './views/id-builder/IDBuilderView.svelte';
  import 'svelte-material-ui/bare.css';
  import '../public/material-icon.css';
  import '../public/smui.css';
  import '../public/global.css';
  import '../../../libs/theme/src/lib/global.css';
</script>

<div class="oscd-app">
  {#if pluginStore.state.doc !== null && pluginStore.ready}
    <div class="template-generator-container">
      {#if $route.path[0] === 'overview'}
        <LNodeTypesView />
      {:else if $route.path[0] === 'defaults'}
        <DefaultTypeView />
      {:else if $route.path[0] === 'id-builder'}
        <IDBuilderView />
      {:else}
        <LNodeTypeDetailView />
      {/if}
    </div>
  {/if}
</div>
<DialogHost />
<DrawerStack />
<OscdToastHost />

<style>
  .template-generator-container {
    padding: 1rem 2rem;
  }
</style>
