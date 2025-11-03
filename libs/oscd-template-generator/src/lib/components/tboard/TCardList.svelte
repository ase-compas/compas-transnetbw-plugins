<script lang="ts">
  import { createEventDispatcher} from 'svelte';
  import type { TBoardItemContext, TItem } from './types';
  import TCard from './TCard.svelte';
  import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME, TRIGGERS } from 'svelte-dnd-action';
  import { isDragTarget, isDroppable } from './utils';
  import { flip } from 'svelte/animate';

  const dispatch = createEventDispatcher();



  // Items of a list can only be dropped on items of another list with the same dragAndDropType.
  interface Props {
    selectable?: boolean;
    showSelectionIndicator?: boolean;
    itemsDraggable: boolean;
    items?: TItem[];
    dropCandidate?: TBoardItemContext | null;
    dragAndDropType: string;
  }

  let {
    selectable = false,
    showSelectionIndicator = false,
    itemsDraggable,
    items = [],
    dropCandidate = null,
    dragAndDropType
  }: Props = $props();

  let workItems = $state([...items]);

  $effect(() => {
    workItems = [...items];
  });

  let isOverId: string | null = $state(null);

  function forwardEvent(eventType: string, item: TItem) {
    dispatch(eventType, { itemId: item.id, item: item });
  }

  function dispatchOnDragEvent(draggedItem: TItem) {
    dispatch("itemDragChange", { itemId: draggedItem?.id ?? null, item: draggedItem ?? null});
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
    dispatch('itemDrop', {targetItem: item})
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
      isDragTarget={isDragTarget(item, dropCandidate)}
      canDrop={isDroppable(item, dropCandidate)}
      canDrag={itemsDraggable}
      isOver={isOverId === item.id}
      marked={item.marked}
      isMandatory={item.isMandatory}
      referencable={item.referencable}
      bind:selected={item.selected}
      on:marked={(e) => dispatch('itemMarkChange', {item, itemId: item.id, marked: e.detail})}
      on:selectChange={() => dispatch('itemSelectChange', {item, itemId: item.id})}
      on:click={() => forwardEvent('itemClick', item)}
      on:edit={() => forwardEvent('itemEdit', item)}
      on:applyDefaults={() => forwardEvent('itemApplyDefaults', item)}
      on:unlink={() => forwardEvent('itemUnlink', item)}
      on:referenceClick={(e) => dispatch('itemReferenceClick', {item, itemId: item.id, reference: e.detail})}
      on:setDefault={() => forwardEvent('itemSetDefault', item)}
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
