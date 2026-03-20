<script lang="ts">
  import { DialogHost } from '@oscd-transnet-plugins/oscd-services/dialog';
  import {
    DrawerStack,
    OscdToastHost,
  } from '@oscd-transnet-plugins/oscd-component';
  import DefaultTypeView from './features/default-types/components/DefaultTypeView.svelte';
  import 'svelte-material-ui/bare.css';
  import '../public/material-icon.css';
  import '../public/smui.css';
  import '../public/global.css';
  import '../../../libs/theme/src/lib/global.css';
  import DataTypesListView from './features/type-details/components/DataTypesListView.svelte';
  import NavigationHeader from './shared/ui/NavigationHeader.svelte';
  import IdFormatSettings from './features/id-format-settings/IdFormatSettings.svelte';
  import { setIdSettingsState } from './features/id-format-settings/id-format-settings.state.svelte';
  import { pluginStore } from './shared/states/plugin.state.svelte';

  let activeTab = $state('Data Types');
  setIdSettingsState();
</script>

<div class="oscd-app">
  {#if pluginStore.state.doc !== null && pluginStore.ready}
    <div class="template-generator-container">
      <NavigationHeader bind:activeTab title="Template Generator" />

      {#if activeTab === 'Data Types'}
        <DataTypesListView />
      {:else if activeTab === 'Default Types'}
        <DefaultTypeView />
      {:else if activeTab === 'ID Builder'}
        <IdFormatSettings />
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
