<script lang="ts">
  import TCardList from './TCardList.svelte';
  import TColumnActionHeader from './columnHeader/TColumnActionHeader.svelte';
  import TColumnSearchHeader from './columnHeader/TColumnSearchHeader.svelte';
  import type { TBoardItemContext, TItem } from './types';


  interface Props {
    title: string;
    subtitle?: string | null;
    actionLabel?: string | null;
    hasSearch?: boolean;
    searchPlaceHolder?: string;
    hasAction?: boolean;
    showApplyDefaults?: boolean;
    highlighted?: boolean;
    dragAndDropBorder?: boolean;
    canSelectItems?: boolean;
    showSelectionIndicator?: boolean;
    itemsDraggable?: boolean;
    dropCandidate?: TBoardItemContext | null;
    dragAndDropType: string;
    items?: TItem[];

    // Callbacks
    onItemDrop?: (event: { targetItem: TItem }) => void;
    onItemDragChange?: (event: { itemId: string | null; item: TItem | null }) => void;
    onItemMarkChange?: (event: { itemId: string; item: TItem; marked: boolean }) => void;
    onItemSelectChange?: (event: { itemId: string; item: TItem | null }) => void;
    onItemReferenceClick?: (event: { itemId: string; item: TItem; reference: string }) => void;
    onItemSetDefault?: ({itemId: string, item: TItem}) => void;
    onItemUnlink?: ({itemId: string, item: TItem}) => void;
    onItemEdit?: ({itemId: string, item: TItem}) => void;
    onItemClick?: ({itemId: string, item: TItem}) => void;
    onItemApplyDefaults?: ({itemId: string, item: TItem}) => void;
    onColumnActionClick?: () => void;
    onApplyDefaults?: () => void;
  }

  let {
    title,
    subtitle = null,
    actionLabel = 'Action',
    hasSearch = false,
    searchPlaceHolder = 'Search...',
    hasAction = false,
    showApplyDefaults = false,
    highlighted = false,
    dragAndDropBorder = false,
    canSelectItems = false,
    showSelectionIndicator = false,
    itemsDraggable = false,
    dropCandidate = null,
    dragAndDropType,
    items = [],

    // Callbacks
    onItemDrop = () => {},
    onItemDragChange = () => {},
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
  }: Props = $props();

  let searchQuery = $state('');

  let filteredItems = $derived(filterItems(items, searchQuery));

  function matchesQuery(item: TItem, query: string): boolean {
    const q = query.toLowerCase().trim();

    return item.title.toLowerCase().includes(q) || item.subtitle?.toLowerCase().includes(q);
  }

  function filterItems(itemsToFilter: TItem[], query: string): TItem[] {
    return itemsToFilter.filter((item) => matchesQuery(item, query));
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
    onAction={onColumnActionClick}
  />
  {:else}
    <TColumnActionHeader
      title={title}
      subtitle={subtitle}
      hasAction={hasAction}
      actionLabel={actionLabel}
      secondaryActionLabel="Apply Defaults"
      onAction={onColumnActionClick}
      onSecondaryAction={onApplyDefaults}
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

    onItemClick={(e) => onItemClick(e)}
    onItemEdit={(e) => onItemEdit(e)}
    onItemApplyDefaults={(e) => onItemApplyDefaults(e)}
    onItemUnlink={(e) => onItemUnlink(e)}
    onItemMarkChange={(e) => onItemMarkChange(e)}
    onItemSelectChange={(e) => onItemSelectChange(e)}
    onItemDragChange={(e) => onItemDragChange(e)}
    onItemDrop={(e) => onItemDrop(e)}
    onItemReferenceClick={(e) => onItemReferenceClick(e)}
    onItemSetDefault={(e) => onItemSetDefault(e)}
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
    outline: 2px dashed color-mix(in srgb, var(--mdc-theme-primary, #ff3e00) 50%, transparent);
  }
</style>
