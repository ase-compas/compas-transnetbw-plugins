<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';

  import IconButton from '@smui/icon-button';
  import TColumn from './TColumn.svelte';
  import type { ItemDropOnItemEventDetail, TBoardItemContext, TColumnConfig, TData } from './types';
  import { isDroppable } from './utils';

  const dispatch = createEventDispatcher();

  interface Props {
    columns?: TColumnConfig[];
    data?: TData[];
  }

  let { columns = [], data = $bindable({} as TData) }: Props = $props();

  let dropCandidate: TBoardItemContext | null = $state(null); // This will hold the item being dragged. On The board only one item can be dragged at a time.
  let boardId: string = $state();

  onMount(() => {
    boardId = uuidv4();
  });

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

    if (isDroppable(targetItem, sourceItem))
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

  $effect(() => {
    let updated: TData | null = null;

    for (const column of columns) {
      if (!Array.isArray((updated ?? data)[column.id])) {
        if (!updated) updated = { ...data };
        updated[column.id] = [];
        console.warn(`Warning: No data found for column with id "${column.id}"`);
      }
    }

    if (updated) {
      data = updated;
    }
  });

  $effect(() => {
    const columnIds = columns.map((col) => col.id);
    const uniqueColumnIds = new Set(columnIds);
    if (uniqueColumnIds.size !== columnIds.length) {
      throw new Error('Duplicate column ids detected! Each column id must be unique.');
    }
  });

  $effect(() => {
    for (const col of columns) {
      const items = data[col.id] || [];
      const itemIds = items.map((item) => item.id);
      const uniqueItemIds = new Set(itemIds);
      if (uniqueItemIds.size !== itemIds.length) {
        throw new Error(`Duplicate item ids detected in column "${col.id}". Each item id must be unique.`);
      }
    }
  });

</script>

<div class="oscd-board">
  {#each columns as column, index (column.id)}
    <TColumn
      title={column.title}
      subtitle={column.subtitle}
      highlighted={column.highlighted}
      dragAndDropBorder={column.dragAndDropBorder}
      actionLabel={column.actionLabel}
      hasSearch={column.hasSearch}
      searchPlaceHolder={column.searchPlaceholder}
      hasAction={column.hasAction}
      showApplyDefaults={column.showApplyDefaults}
      canSelectItems={column.canSelectItems}
      showSelectionIndicator={column.showSelectionIndicator}
      itemsDraggable={column.itemsDraggable}
      items={data[column.id]}
      dragAndDropType={boardId}
      dropCandidate={dropCandidate}
      on:columnActionClick={e => forwardEvent('columnActionClick', column.id, e.detail)}
      on:applyDefaults={e => forwardEvent('applyDefaults', column.id, e.detail)}
      on:itemClick={e => forwardEvent('itemClick', column.id, e.detail)}
      on:itemEdit={e => forwardEvent('itemEdit', column.id, e.detail)}
      on:itemApplyDefaults={e => forwardEvent('itemApplyDefaults', column.id, e.detail)}
      on:itemUnlink={e => forwardEvent('itemUnlink', column.id, e.detail)}
      on:itemMarkChange={e => forwardEvent('itemMarkChange', column.id, e.detail)}
      on:itemSelectChange={e => forwardEvent('itemSelectChange', column.id, e.detail)}
      on:itemDragChange={e => handleOnItemDrag(column.id, e.detail)}
      on:itemDrop={e => handleItemDrop(column.id, e.detail)}
      on:itemReferenceClick={e => forwardEvent('itemReferenceClick', column.id, e.detail)}
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
    height: 100%;
    display: flex;
  }
</style>
