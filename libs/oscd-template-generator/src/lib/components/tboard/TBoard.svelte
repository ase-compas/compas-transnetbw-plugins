<script lang="ts">
  import { onMount } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';

  import IconButton from '@smui/icon-button';
  import TColumn from './TColumn.svelte';
  import type { ItemDropOnItemEventDetail, TBoardItemContext, TColumnConfig, TData, TItem } from './types';
  import { isDroppable } from './utils';

  interface EventDetails {
    columnId: string;
    itemId: string;
    item: TItem;
  }


  interface Props {
    columns?: TColumnConfig[];
    data?: TData[];

    // Callbacks
    onItemDragChange?: (event: EventDetails) => void;
    onItemMarkChange?: (event: { columnId: string, itemId: string; item: TItem; marked: boolean }) => void;
    onItemSelectChange?: (event: EventDetails) => void;
    onItemReferenceClick?: (event: { columnId:string, itemId: string; item: TItem; reference: string }) => void;
    onItemSetDefault?: (event: EventDetails) => void;
    onItemUnlink?: (event: EventDetails) => void;
    onItemEdit?: (event: EventDetails) => void;
    onItemClick?: (event: EventDetails) => void;
    onItemApplyDefaults?: (event: EventDetails) => void;
    onColumnActionClick?: (event: {columnId: string}) => void;
    onApplyDefaults?: (event: {columnId: string}) => void;
    onItemDrop?: (event: ItemDropOnItemEventDetail) => void;
  }

  let {
    columns = [],
    data = $bindable({} as TData),

    // Callbacks
    onItemMarkChange = () => {},
    onItemSelectChange = () => {},
    onItemReferenceClick = () => {},
    onItemSetDefault = () => {},
    onItemUnlink = () => {},
    onItemEdit = () => {},
    onItemClick = () => {},
    onItemApplyDefaults = () => {},
    onColumnActionClick = () => {},
    onApplyDefaults = () => {},
    onItemDrop = () => {}
  }: Props = $props();

  let dropCandidate: TBoardItemContext | null = $state(null); // This will hold the item being dragged. On The board only one item can be dragged at a time.
  let boardId: string = $state();

  onMount(() => {
    boardId = uuidv4();
  });

  function dispatchItemDropOnItemEvent(eventDetail: ItemDropOnItemEventDetail) {
    onItemDrop(eventDetail)
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
      onColumnActionClick={_ => onColumnActionClick({columnId: column.id})}
      onApplyDefaults={_ => onApplyDefaults({columnId: column.id})}
      onItemClick={e => onItemClick({columnId: column.id, ...e})}
      onItemEdit={e => onItemEdit({columnId: column.id, ...e})}
      onItemApplyDefaults={e => onItemApplyDefaults({columnId: column.id, ...e})}
      onItemUnlink={e => onItemUnlink({ columnId: column.id, ...e})}
      onItemMarkChange={e => onItemMarkChange({columnId: column.id, ...e})}
      onItemSelectChange={e => onItemSelectChange({columnId: column.id, ...e})}
      onItemDragChange={e => handleOnItemDrag(column.id, e)}
      onItemDrop={e => handleItemDrop(column.id, e)}
      onItemReferenceClick={e => onItemReferenceClick({columnId: column.id, ...e})}
      onItemSetDefault={e => onItemSetDefault({columnId: column.id, ...e})}
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
