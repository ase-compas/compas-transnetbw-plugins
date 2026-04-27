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

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    plugins?: unknown[];
    docId?: string;
    pluginId?: string;
    docName?: string;
    nsdoc?: unknown;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: unknown;
    host?: HTMLElement;
  }

  let { doc, editCount = 0 }: Props = $props();

  setIdSettingsState();

  let containerEl: HTMLElement;
  let activeTab = $state('Data Types');
  let loaded = $state(false);
  let sclService: DataTypeService | null = $state(null);

  onMount(() => {
    sclService = new DataTypeService(doc ?? null, containerEl);
    loaded = true;
  });

  $effect(() => {
    docState.doc = doc ?? null;
    if (sclService && doc) {
      sclService.setDoc(doc);
    }
  });

  $effect(() => {
    docState.editCount = editCount ?? -1;
  });
</script>

<div class="oscd-app" bind:this={containerEl}>
  {#if loaded}
    <div class="template-generator-container">
      <NavigationHeader bind:activeTab title="Template Generator" />

      {#if activeTab === 'Data Types'}
        <DataTypesListView service={sclService} docState={docState}/>
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
