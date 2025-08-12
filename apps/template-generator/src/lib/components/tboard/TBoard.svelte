<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import IconButton from '@smui/icon-button';
  import TColumn from './TColumn.svelte';
  import { ItemDropOnItemEventDetail, TBoardItemContext, TColumnConfig, TData, TItem } from './types';
  import { isDroppable } from './utils';

  const dispatch = createEventDispatcher();

  export let columns: TColumnConfig[] = [];
  export let data: TData[] = [];

  let dropCandidate: TBoardItemContext | null = null; // This will hold the item being dragged. On The board only one item can be dragged at a time.

  function forwardEvent(eventType: string, columnId: string, detail: any) {
    dispatch(eventType, { columnId, ...detail });
  }

  function dispatchItemDropOnItemEvent(eventDetail: ItemDropOnItemEventDetail) {
    dispatch('itemDrop', eventDetail);
  }

  function handleItemDrop(columnId: string, detail: any) {
    const targetItem = detail.targetItem;
    if(!dropCandidate || !targetItem) return

    const sourceItem = dropCandidate;

    if (isDroppable(targetItem, sourceItem.item))
    dispatchItemDropOnItemEvent({
      source: {...sourceItem},
      target: { columnId, itemId: targetItem.id, item: targetItem},
    })
  }

  function handleOnItemDrag(columnId: string, detail: any) {
    if(!detail.item || !detail.item) {
      dropCandidate = null
      return;
    }
    dropCandidate = {columnId, ...detail};
  }

  // Check that columns are defined
  $: {
    columns.forEach(column => {
      if (!data[column.id]) {
        data[column.id] = []; // Initialize with an empty array if no data exists for this column
        console.warn(`Warning: No data found for column with id "${column.id}"`);
      }
    });
  }

  // Check that column ids are unique
  $: {
    const columnIds = columns.map(col => col.id);
    const uniqueColumnIds = new Set(columnIds);
    if (uniqueColumnIds.size !== columnIds.length) {
      throw new Error('Duplicate column ids detected! Each column id must be unique.');
    }
  }

  // Check that each TItem's id is unique within its column
  $: {
    for (const col of columns) {
      const items = data[col.id] || [];
      const itemIds = items.map(item => item.id);
      const uniqueItemIds = new Set(itemIds);
      if (uniqueItemIds.size !== itemIds.length) {
        throw new Error(`Duplicate item ids detected in column "${col.id}". Each item id must be unique.`);
      }
    }
  }

</script>

<div class="oscd-board">
  {#each columns as column, index (column.id)}
    <TColumn
      title={column.title}
      subtitle={column.subtitle}
      highlighted={column.highlighted}
      actionLabel={column.actionLabel}
      hasSearch={column.hasSearch}
      hasAction={column.hasAction}
      showApplyDefaults={column.showApplyDefaults}
      itemsDraggable={column.itemsDraggable}
      items={data[column.id]}
      dropCandidate={dropCandidate}
      on:columnActionClick={e => forwardEvent('columnActionClick', column.id, e.detail)}
      on:applyDefaults={e => forwardEvent('applyDefaults', column.id, e.detail)}
      on:itemClick={e => forwardEvent('itemClick', column.id, e.detail)}
      on:itemEdit={e => forwardEvent('itemEdit', column.id, e.detail)}
      on:itemMarkChange={e => forwardEvent('itemMarkChange', column.id, e.detail)}
      on:itemDragChange={e => handleOnItemDrag(column.id, e.detail)}
      on:itemDrop={e => handleItemDrop(column.id, e.detail)}
    />

    {#if index < columns.length - 1}
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


