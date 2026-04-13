<script lang="ts">
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import DefaultTypeDetails from './DefaultTypeDetails.svelte';
  import DefaultTypesList from './DefaultTypesList.svelte';
  import CreateDefaultTypeDialog from './CreateDefaultTypeDialog.svelte';
  import type { CreateDefaultTypeDialogResult, CreateDefaultTypeInfo } from '../types';

  interface View {
    mode: 'list' | 'details';
    selectedId?: string;
    createInfo?: CreateDefaultTypeInfo;
  }

  let view: View = $state({ mode: 'list', selectedId: undefined, createInfo: undefined });

  const navigateToDetails = (id?: string) => {
    view = { mode: 'details', selectedId: id, createInfo: undefined };
  };

  const navigateToCreate = (createInfo: CreateDefaultTypeInfo) => {
    view = { mode: 'details', createInfo, selectedId: undefined };
  };

  const navigateToList = () => {
    view = { mode: 'list', selectedId: undefined, createInfo: undefined };
  }

  async function createDefaultType() {
    const result = await openDialog(CreateDefaultTypeDialog)
    if (result.type !== 'confirm') {
      return;
    }
    const info = result.data as CreateDefaultTypeDialogResult;
    if (info.action === 'open-existing') {
      navigateToDetails(info.existingDefaultTypeId);
    } else if (info.action === 'create') {
      navigateToCreate({
        kind: info.kind!,
        instance: info.instance!,
        version: info.initialVersion!,
      });
    }
  }
</script>

<div class="container">
{#if view.mode === 'details'}
  <DefaultTypeDetails
    id={view.selectedId}
    createInfo={view.createInfo}
    onBack={navigateToList}
  />
{:else}
  <DefaultTypesList 
    onCreateDefaultType={createDefaultType}
    onEditDefaultType={(id) => navigateToDetails(id)}
  />
{/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>