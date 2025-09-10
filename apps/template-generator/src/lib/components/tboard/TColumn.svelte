<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import TColumnHeaderLayout from './columnHeader/TColumnHeaderLayout.svelte';
  import TCardList from './TCardList.svelte';
  import { TBoardItemContext, TItem } from './types';
  import TColumnSearchHeader from './columnHeader/TColumnSearchHeader.svelte';
  import TColumnActionHeader from './columnHeader/TColumnActionHeader.svelte';

  const dispatch = createEventDispatcher();

  export let title: string;
  export let subtitle: string | null = null;
  export let actionLabel: string | null = 'Action';

  export let hasSearch: boolean = false;
  export let searchPlaceHolder: string = 'Search...';
  export let hasAction: boolean = false;

  export let showApplyDefaults: boolean = false;
  export let highlighted: boolean = false; // If true, visually highlights the column background
  export let dragAndDropBorder: boolean = false; // If true, shows a dashed border around the column to indicate a valid drop target
  export let canSelectItems: boolean = false;
  export let showSelectionIndicator: boolean = false;

  export let itemsDraggable: boolean = false;
  export let dropCandidate: TBoardItemContext | null = null;
  export let dragAndDropType: string;

  export let items: TItem[] = []

  let searchQuery = '';

  let filteredItems: TItem[] = [];
  $: filteredItems = filterItems(items, searchQuery);


  function matchesQuery(item: TItem, query: string): boolean {
    const q = query.toLowerCase().trim();

    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle?.toLowerCase().includes(q))
    );
  }

  function filterItems(items: TItem[], query: string): TItem[] {
    return items.filter(item => matchesQuery(item, query));
  }

  function forwardEvent(eventType, detail) {
    dispatch(eventType, detail);
  }
</script>

<div class="oscd-tcolumn"
     class:apply-defaults={highlighted}
     class:drag-border={dragAndDropBorder}
>
  {#if !showApplyDefaults}
  <TColumnSearchHeader
    title={title}
    subtitle={subtitle}
    searchPlaceHolder={searchPlaceHolder}
    hasSearch={hasSearch}
    hasAction={hasAction}
    actionLabel={actionLabel}
    bind:search={searchQuery}
    on:action={() => dispatch('columnActionClick')}
  />
  {:else}
    <TColumnActionHeader
      title={title}
      subtitle={subtitle}
      hasAction={hasAction}
      actionLabel={actionLabel}
      secondaryActionLabel="Apply Defaults"
      on:action={() => dispatch('columnActionClick')}
      on:secondaryAction={() => dispatch('applyDefaults')}
    />
  {/if}


  <div class="oscd-tcolumn__list">
  <TCardList
    items={filteredItems}
    selectable={canSelectItems}
    itemsDraggable={itemsDraggable}
    dropCandidate={dropCandidate}
    showSelectionIndicator={showSelectionIndicator}
    dragAndDropType={dragAndDropType}
    on:itemClick={(e) => forwardEvent('itemClick', e.detail)}
    on:itemEdit={(e) => forwardEvent('itemEdit', e.detail)}
    on:itemApplyDefaults={(e) => forwardEvent('itemApplyDefaults', e.detail)}
    on:itemUnlink={(e) => forwardEvent('itemUnlink', e.detail)}
    on:itemMarkChange={(e) => forwardEvent('itemMarkChange', e.detail)}
    on:itemSelectChange={(e) => forwardEvent('itemSelectChange', e.detail)}
    on:itemDragChange={(e) => forwardEvent('itemDragChange', e.detail)}
    on:itemDrop={(e) => forwardEvent('itemDrop', e.detail)}
    on:itemReferenceClick={(e) => forwardEvent('itemReferenceClick', e.detail)}
  />
  </div>
</div>


<style>
  .oscd-tcolumn {
    padding: 0.5rem;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .oscd-tcolumn__list {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 0.2rem;
  }

  .oscd-tcolumn.apply-defaults {
    background-color: color-mix(in srgb, var(--mdc-theme-primary, #ff3e00) 13%, transparent);
  }

  .oscd-tcolumn.drag-border {
    outline: 2px dashed color-mix(in srgb, var(--mdc-theme-primary, #ff3e00) 50%, transparent);;
  }
</style>
