<script lang="ts">
  import { OscdCardList } from '@oscd-transnet-plugins/oscd-component';
  import OscdCardItem from './OscdCardItem.svelte';
  import IconButton from '@smui/icon-button';
  import { createEventDispatcher } from 'svelte';
  import type { ListSettings } from './types';

  const dispatch = createEventDispatcher();

  const handleItemEvent = (eventName: string, listIndex: number, listId: string, item: any, itemIndex: number) => {
    dispatch(eventName, { listIndex, listId, item, itemIndex });
  };

  export let settings: ListSettings<any>[];
</script>

<div class="oscd-board">
  {#each settings as setting, listIndex (setting.id)}
    <OscdCardList
      title={setting.title}
      secondaryTitle={setting.secondaryTitle}
      showSearch={setting.showSearch ?? true}
      actionText={setting.actionText}
      on:actionClick={() => dispatch('actionClick', { listId: setting.id })}
    >

      <div slot="default" let:searchQuery style="display: flex; flex-direction: column; gap: 0.2rem;">
        {#each setting.items.filter(i => setting.getItemTitle(i).toLowerCase().includes(searchQuery.toLowerCase())) as item, index (item)}
          <OscdCardItem
            title={setting.getItemTitle(item)}
            subtitle={setting.getItemSubtitle ? setting.getItemSubtitle(item) : null}
            references={setting.getItemReferences ? setting?.getItemReferences(item) : null}
            state={setting.getItemState(item) ?? 'default'}
            on:edit={() => handleItemEvent('itemEdit', listIndex, setting.id, item, index)}
            on:mark={() => handleItemEvent('itemMark', listIndex, setting.id, item, index)}
            canEdit={setting?.canEdit ?? false}
            canMark={setting?.canMark ?? false}
          />
        {/each}

    </OscdCardList>

    {#if listIndex < settings.length - 1}
      <div class="seperator">
        <IconButton class="material-icons" disabled={true}>chevron_right</IconButton>
      </div>
    {/if}
  {/each}
</div>

<style>
  .oscd-board {
    width: 100%;
    display: flex;
    gap: 0.5rem;
  }
</style>


