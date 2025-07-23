<script lang="ts">
  import ItemNode from './ItemNode.svelte';
  import {type ToggleItem, type Item } from '../../layouts/three-panel-layout/types.ts'

  // ===== Props =====
  export let item: ToggleItem;
  export let onSelect: (item: ToggleItem) => void;
  export let onToggle: (item: ToggleItem) => void;
  export let prefixLabel: (item: ToggleItem) => string = null;
  export let suffixLabel: (item: ToggleItem) => string = null;

  function canToggle(item: ToggleItem): boolean {
    return item.children && item.children.length > 0;
  }

</script>

<li>
  <div on:click|stopPropagation={() => onSelect(item)} class="item" class:selected={item.selected}>
    <div class="item-row">
      {#if canToggle(item)}
          <button style="all: unset; cursor: pointer," on:click|stopPropagation={() => onToggle(item)}>
            {item.isOpen ? '▼' : '▶'}
          </button>
      {/if}

        <div class="item-text" class:toggle-able={canToggle(item)}>
          {#if prefixLabel && prefixLabel(item)}
            <span class="prefix-label">{prefixLabel(item)}</span>
          {/if}

          <span >{item.name}</span>

          {#if suffixLabel && suffixLabel(item)}
            <span class="suffix-label">{suffixLabel(item)}</span>
          {/if}
        </div>
    </div>
  </div>

  {#if canToggle(item) && item.isOpen}
    <ul>
      {#each item.children as child}
        <ItemNode item={child} onSelect={onSelect} onToggle={onToggle} prefixLabel={prefixLabel} suffixLabel={suffixLabel} />
      {/each}
    </ul>
  {/if}
</li>

<style>
  ul {
    list-style: none;
    padding-inline-start: 2rem;
  }

  li {
    padding: 0.1rem;
    border-radius: 4px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;
  }

  .item {
    padding: 0.1rem;
  }

  .toggle-able {
    font-weight: 500;
  }

  .item-text {
    flex: 1;
    min-width: 0;
    word-break: break-word;
  }

.item:hover .item-text {
    text-decoration: underline;
  }

  .item.selected {
    background-color: #e0f7fa;
  }

  .prefix-label {
    font-style: italic;
    font-weight: 400;
    opacity: 0.7;
    margin-right: 0.3em;
    font-size: 0.9rem;
  }

  .suffix-label {
    font-style: italic;
    font-weight: 400;
    opacity: 0.7;
    margin-left: 0.3em;
    font-size: 0.9rem;
  }

  .item-row {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
    flex-wrap: wrap;
  }
</style>
