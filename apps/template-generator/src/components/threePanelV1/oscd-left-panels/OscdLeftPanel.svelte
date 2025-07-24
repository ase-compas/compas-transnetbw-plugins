<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte';
  import ItemNode from './ItemNode.svelte';
  import type { Item, ToggleItem } from '../../../layouts/three-panel-layout/types.ts';
  import { selectedItem } from '../../../lib/stores/threePanelStore.ts';

  export let hierarchy: Item[] = [];

  let toggleHierarchy: ToggleItem[] = [];
  let previousSelectedItem: ToggleItem | null = null;

  // Convert and reset toggle state when hierarchy changes
  $: toggleHierarchy = toToggleHierarchy(hierarchy);

  // Subscribe to selectedItem changes once
  const unsubscribe = selectedItem.subscribe((selected: Item | null) => {
    if (!selected) return;

    // Deselect previous
    if (previousSelectedItem) {
      previousSelectedItem.selected = false;
    }


    // Find and select the new item
    const selectedToggleItem = findItemById(toggleHierarchy, selected.id);
    if (selectedToggleItem) {
      selectedToggleItem.selected = true;
      selectedToggleItem.isOpen = true; // Ensure it's visible
      previousSelectedItem = selectedToggleItem;
    }

    toggleHierarchy = [...toggleHierarchy]; // Trigger reactive update
  });

  onDestroy(unsubscribe);

  const findItemById = (items: ToggleItem[], id: string | number): ToggleItem | undefined => {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findItemById(item.children, id);
        if (found) return found;
      }
    }
    return undefined;
  };

  function handleSelect(item: ToggleItem) {
    const isAlreadySelected = $selectedItem?.id === item.id;
    if (isAlreadySelected) {
      handleToggle(item);
    } else {
      selectedItem.set(item as Item);
    }
  }

  function handleToggle(item: ToggleItem) {
    item.isOpen = !item.isOpen;
    if (!item.isOpen) closeChildren(item);
    toggleHierarchy = [...toggleHierarchy];
  }

  function closeChildren(item: ToggleItem) {
    item.children?.forEach(child => {
      child.isOpen = false;
      closeChildren(child);
    });
  }

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
      return `(${item.item.attributes?.lnClass || ''})`;
    } else if (item.type === 'DA' || item.type === 'BDA') {
      return `(${item.item.attributes?.bType || ''})`;
    }
    return '';
  }
</script>

<div class="oscd-left-panel">
  <h1>Hierarchy</h1>

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
    padding-inline-start: 0;
  }
</style>

