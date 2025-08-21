<script lang="ts">
  /**
   * OscdDraggableList.svelte
   * A Svelte component for creating a draggable list with items that can be reordered.
   * Uses svelte-dnd-action for drag-and-drop functionality.
   *
   */
  import { dragHandleZone, dragHandle } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate'
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  type ListItem = {
    id: string;
    label: string;
  }

  export let canDrag: boolean = true;
  export let items: ListItem[] = [];

  const flipDurationMs = 100;

  function handleSort(event) {
    const { items: newItems } = event.detail;
    items = [...newItems];
  }
</script>

<div class="draggable-list">
  {#if items.length > 0}
    <ol
    use:dragHandleZone="{{ items, flipDurationMs, dropTargetStyle: {}}}"
    on:consider={handleSort}
    on:finalize={e => {
      handleSort(e);
      dispatch('orderChange', { items });
    }}
 >
      {#each items as item, index (item.id)}
        <li  data-id={item.id} style:cursor={canDrag ? 'move' : 'default'} animate:flip="{{ duration: flipDurationMs }}">

          <div class="draggable-item">

          {#if canDrag}
            <div class="drag-handle" use:dragHandle>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray">
                <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z"/>
              </svg>
            </div>
          {/if}
            <div class="item-content">
              <span class="item-id">{item.id}</span>
              <span class="item-label">{item.label}</span>
            </div>
          </div>
        </li>
      {/each}
    </ol>
  {:else}
    <p>No items available.</p>
  {/if}
</div>

<style>
  ol {
    counter-reset: item;
    list-style: none;
    padding-left: 0;
    margin-left: 0;
  }

  ol > li {
    counter-increment: item;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .draggable-item{
    padding: 0.7rem;
    background-color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }

  .item-content {
    display: flex;
    align-items: baseline;
    font-size: 1.1rem;
    color: var(--mdc-theme-primary);
    line-height: 1.2;
  }

  .item-id {
    display: inline-block;
    text-align: right;
    min-width: 2rem;
    font-weight: 200;
    margin-right: 1.2rem;
  }

  .item-label {
    font-weight: 500;
  }

  .drag-handle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: move;
  }

</style>
