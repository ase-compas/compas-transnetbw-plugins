<script lang="ts">
  import OscdListBoard from './OscdListBoard.svelte';
  import type { ListSettings, FilterListSettings, ItemState } from './types';
  import { onMount } from 'svelte';

  export let settings: FilterListSettings<any>[] = [];

  // State: Tracks marked items per list
  let markedSets: Set<any>[] = [];

  onMount(() => {
    markedSets = settings.map(() => new Set()); // initialize marked sets for each list
  });

  // Converts FilterListSettings[] into ListSettings[] and injects state logic
  $: listSettings = settings.map((setting, index): ListSettings<any> => {
    const { filterFn, items, ...base } = setting;

    // Previous marked items are from the list before this one
    const previousMarkedSets = markedSets.slice(0, index);

    return {
      ...base,
      items: filterFn ? items.filter(item => filterFn(item, previousMarkedSets)) : items,
      getItemState: (item) => markedSets[index]?.has(item) ? 'marked' : 'default'
    } as ListSettings<any>;
  });


  const handleOnMark = ({ listIndex, listId, item, itemIndex}) => {
    const updatedSet = new Set(markedSets[listIndex]); // clone to preserve immutability
    if (updatedSet.has(item)) {
      updatedSet.delete(item);
    } else {
      updatedSet.add(item);
    }

    // Re-assign the entire array to trigger reactivity
    markedSets = [
      ...markedSets.slice(0, listIndex),
      updatedSet,
      ...markedSets.slice(listIndex + 1)
    ];
  };
</script>

<div class="filter-list-board">

  <OscdListBoard
    settings={listSettings}
    on:itemEdit={(e) => console.info('Item Edit:', e.detail)}
    on:itemMark={(e) => handleOnMark(e.detail)}
    on:actionClick={(e) => console.info('Action Click:', e.detail)}
  />
</div>

<style>
  .filter-list-board {
    width: 100%;
  }
</style>
