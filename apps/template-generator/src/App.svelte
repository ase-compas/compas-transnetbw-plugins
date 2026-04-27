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
  import DataTypesListView from './features/type-details/components/DataTypesListView.svelte';
  import NavigationHeader from './shared/ui/NavigationHeader.svelte';
  import IdFormatSettings from './features/id-format-settings/IdFormatSettings.svelte';
  import { setIdSettingsState } from './features/id-format-settings/id-format-settings.state.svelte';
  import { onMount } from 'svelte';
  import { DataTypeService } from './features/type-details/services/type.service';
  import { docState } from './shared/states/doc.state.svelte';

  let host: HTMLElement;
  let activeTab = $state('Data Types');
  let loaded = $state(false);
  let sclService: DataTypeService | null = $state(null); 

  onMount(() => {
    setIdSettingsState();
    docState.registerDocChangeListener(docChangeHandler);
    sclService = new DataTypeService(docState.doc, host);
    loaded = true;

    return () => {
      docState.unregisterDocChangeListener(docChangeHandler);
    };
  });

  const docChangeHandler = (doc) => {
    sclService.setDoc(doc);
  };
</script>

<div class="oscd-app" bind:this={host}>
  {#if loaded}
    <div class="template-generator-container">
      <NavigationHeader bind:activeTab title="Template Generator" />

      {#if activeTab === 'Data Types'}
        <DataTypesListView service={sclService} docState={docState}/>
      {:else if activeTab === 'Default Types'}
        <DefaultTypeView />
      {:else if activeTab === 'Settings'}
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
