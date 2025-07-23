<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ItemNode from './ItemNode.svelte';
  import type { Item, ToggleItem } from '../../layouts/three-panel-layout/types.ts';

  // Props
  export let hierarchy: Item[] = [];

  // Local state
  let toggleHierarchy: ToggleItem[] = [];
  let selectedItem: ToggleItem | null = null;

  // Event dispatcher (currently unused)
  const dispatch = createEventDispatcher();

  // Convert plain hierarchy to toggle-aware format
  $: toggleHierarchy = toToggleHierarchy(hierarchy);

  // Handle item selection
  function handleSelect(item: ToggleItem) {
    const isAlreadySelected = selectedItem && selectedItem.id === item.id;

    if (isAlreadySelected) {
      handleToggle(item);
    } else {
      if (selectedItem) {
        selectedItem.selected = false;
      }
      selectedItem = item;
      item.selected = true;
      item.isOpen = true;
      dispatch('select', selectedItem as Item );
    }

    toggleHierarchy = [...toggleHierarchy];
  }

  // Handle toggle open/close
  function handleToggle(item: ToggleItem) {
    item.isOpen = !item.isOpen;

    if (!item.isOpen) {
      closeChildren(item);
    }

    toggleHierarchy = [...toggleHierarchy];
  }

  // Recursively close children
  function closeChildren(item: ToggleItem) {
    item.children?.forEach(child => {
      child.isOpen = false;
      closeChildren(child);
    });
  }

  // Recursive helper to convert raw items to toggleable structure
  function toToggleHierarchy(
    items: Item[],
    defaultIsOpen = false,
    defaultSelected = false
  ): ToggleItem[] {
    return items.map(item => ({
      ...item,
      isOpen: defaultIsOpen,
      selected: defaultSelected,
      children: item.children
        ? toToggleHierarchy(item.children, defaultIsOpen, defaultSelected)
        : undefined,
    }));
  }

  function getItemPrefix(item: ToggleItem): string {
    return `[${item.type}]`;
  }

  function getItemSuffix(item: ToggleItem): string {
    if (item.type === 'LNodeType') {
      return '(' + item.item.attributes['lnClass'] + ')' || '';
    } else if (item.type === 'DA' || item.type === 'BDA') {
      return '(' + item.item.attributes['bType'] + ')' || '';
    }
  }
</script>

<div class="oscd-left-panel">
  <h1>Hierarchy</h2>

  {#if toggleHierarchy.length > -1}
    <ul>
      {#each toggleHierarchy as item}
        <ItemNode
          {item}
          onSelect={handleSelect}
          onToggle={handleToggle}
          prefixLabel={getItemPrefix}
          suffixLabel={getItemSuffix}
        />
      {/each}
    </ul>
  {:else}
    <p>No items available.</p>
  {/if}
</div>

<style>
  ul {
    list-style: none;
    padding-inline-start: -1;
    font-size: 0.1rem;
  }
</style>

