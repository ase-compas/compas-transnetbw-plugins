<script lang="ts">
  import type { TBoardItemContext, TItem } from './types';
  import TCard from './TCard.svelte';
  import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME, TRIGGERS } from 'svelte-dnd-action';
  import { isDragTarget, isDroppable } from './utils';
  import { flip } from 'svelte/animate';


  // Items of a list can only be dropped on items of another list with the same dragAndDropType.
  interface Props {
    selectable?: boolean;
    showSelectionIndicator?: boolean;
    itemsDraggable: boolean;
    items?: TItem[];
    dropCandidate?: TBoardItemContext | null;
    dragAndDropType: string;

    // Callbacks
    onItemDrop?: (event: { targetItem: TItem }) => void;
    onItemDragChange?: (event: { itemId: string | null; item: TItem | null }) => void;
    onItemMarkChange?: (event: { itemId: string; item: TItem; marked: boolean }) => void;
    onItemSelectChange?: (event: { itemId: string; item: TItem | null }) => void;
    onItemReferenceClick?: (event: { itemId: string; item: TItem; reference: string }) => void;
    onItemSetDefault?: (event: {itemId: string, item: TItem}) => void;
    onItemUnlink?: (event: {itemId: string, item: TItem}) => void;
    onItemEdit?: (event: {itemId: string, item: TItem}) => void;
    onItemClick?: (event: {itemId: string, item: TItem}) => void;
    onItemApplyDefaults?: (event: {itemId: string, item: TItem}) => void;
  }

  let {
    selectable = false,
    showSelectionIndicator = false,
    itemsDraggable,
    items = [],
    dropCandidate = null,
    dragAndDropType,

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
    onItemApplyDefaults = () => {}
  }: Props = $props();

  let workItems = $state([...items]);

  $effect(() => {
    workItems = [...items];
  });

  let isOverId: string | null = $state(null);

  function dispatchOnDragEvent(draggedItem: TItem) {
    onItemDragChange({ itemId: draggedItem?.id ?? null, item: draggedItem ?? null });
  }

  // ===== D&D Handlers =====
  function handleListConsider(e) {
    const { detail } = e;
    const { trigger, id } = detail.info;

    if (trigger === TRIGGERS.DRAG_STARTED) {
      const idx = workItems.findIndex(i => i.id === id);
      const newId = `${id}_copy`;
      e.detail.items = e.detail.items.filter(item => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME]);
      e.detail.items.splice(idx, 0, { ...workItems[idx], id: newId });
      workItems = e.detail.items;
      dispatchOnDragEvent(items[idx]);
    } else {
      workItems = [...workItems];
    }
  }

  function handleListFinalize(e) {
    workItems = [...items];
    dispatchOnDragEvent(null);
  }

  function handleDropConsider(e, itemId) {
    const { detail } = e;
    const { trigger } = detail.info;
    if (trigger === TRIGGERS.DRAGGED_ENTERED) {
      isOverId = itemId;
    }

    if (trigger === TRIGGERS.DRAGGED_LEFT) {
      isOverId = null;
    }
  }

  function handleDropFinalize(e, itemId) {
    const item = items.find(i => i.id === itemId);
    onItemDrop({ targetItem: item });
    dispatchOnDragEvent(null);
    isOverId = null;
  }
</script>

<div
  class="oscd-card-list"
  use:dndzone={{
    items: workItems,
    dragDisabled: !itemsDraggable,
    dropAnimationDisabled: true,
    dropTargetStyle: {},
    type: dragAndDropType,

  }}
  onconsider={e => handleListConsider(e)}
  onfinalize={e => handleListFinalize(e)}
>
  {#each workItems as item (item.id)}
    <div class="card-wrapper"
         use:dndzone={{
               items: [item],
               dragDisabled: true,
               dropAnimationDisabled: true,
              dropTargetStyle: {},
              type: dragAndDropType
             }}
         onconsider={e => handleDropConsider(e, item.id)}
         onfinalize={e => handleDropFinalize(e, item.id)}
         animate:flip={{ duration: 400 }}
    >
    <TCard
      title={item.title}
      subtitle={item.subtitle}
      references={item.references}
      badgeText={item.badgeText}
      canEdit={item.canEdit}
      canMark={item.canMark}
      canSetDefault={item.canSetDefault}
      selectionEnabled={selectable}
      showSelectionIndicator={showSelectionIndicator}
      canApplyDefaults={item.canApplyDefaults}
      canUnlink={item.canUnlink}
      canClick={item.canClick}
      isDragTarget={isDragTarget(item, dropCandidate)}
      canDrop={isDroppable(item, dropCandidate)}
      canDrag={itemsDraggable}
      isOver={isOverId === item.id}
      marked={item.marked}
      isMandatory={item.isMandatory}
      referencable={item.referencable}
      bind:selected={item.selected}


      onMarked={e => onItemMarkChange({ itemId: item.id, item: item, marked: e})}
      onSelectChange={() => onItemSelectChange({item, itemId: item.id})}
      onClick={() => onItemClick({itemId: item.id, item})}
      onEdit={() => onItemEdit({itemId: item.id, item})}
      onApplyDefaults={() => onItemApplyDefaults({itemId: item.id, item})}
      onUnlink={() => onItemUnlink({itemId: item.id, item})}
      onReferenceClick={(e) => onItemReferenceClick({item, itemId: item.id, reference: e})}
      onSetDefault={() => onItemSetDefault({itemId: item.id, item})}
    />
    </div>
  {/each}
</div>


<style>
  .oscd-card-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0.1rem;
  }
</style>
