import { writable, derived, type Readable } from 'svelte/store';

export type BoardItemState = {
  id: string;
  selected?: boolean;
  marked?: boolean;
  mandatory?: boolean;
  type?: string | null;
};

export interface BoardStore<T extends BoardItemState> extends Readable<T[]> {
  reload: () => Promise<void>;
  toggleSelected: (id: string) => void;
  toggleMarked: (id: string) => void;
  updateItem: (id: string, changes: Partial<T>) => void;
  markedItems: Readable<T[]>;
  selectedItems: Readable<T[]>;
  setReferenceType: (id: string, type: string) => void;
  removeReferenceType: (id: string) => void;
  isDirty: Readable<boolean>;
}

export function createObjectReferenceStore<T extends BoardItemState>(
  loader: () => Promise<T[]>
): BoardStore<T> {
  const store = writable<T[]>([]);
  let original: T[] = [];
  const { subscribe, set, update } = store;

  // Load items and ensure default states
  async function reload() {
    const items = await loader();
    original = JSON.parse(JSON.stringify(items));
    set(items);
  }

  function updateItem(id: string, changes: Partial<T>) {
    update(list =>
      list.map(item => item.id === id ? { ...item, ...changes } : item)
    );
  }

  function toggleSelected(id: string) {
    update(list =>
      list.map(item => item.id === id ? { ...item, selected: !item.selected } : item)
    );
  }

  function toggleMarked(id: string) {
    update(list =>
      list.map(item => item.id === id ? { ...item, marked: !item.marked } : item)
    );
  }

  /** Add a reference type to an item */
  function setReferenceType(id: string, type: string) {
    update(list =>
      list.map(item => item.id === id ? { ...item, type, selected: true } : item)
    );
  }

  /** Remove a reference type from an item */
  function removeReferenceType(id: string) {
    update(list =>
      list.map(item => item.id === id ? { ...item, type: null, selected: false } : item)
    );
  }

  const markedItems = derived(store, $items => $items.filter(item => item.marked));
  const selectedItems = derived(store, $items => $items.filter(item => item.selected));

  const isDirty = derived(store, $items => {
    if ($items.length !== original.length) return true;

    return $items.some((curr, index) => {
      const orig = original[index];
      // Only consider items that are selected/configured
      if (!curr.selected) return false;
      // Dirty if id or type differs
      return curr.id !== orig.id || curr.type !== orig.type || curr.type === '' || curr.type === null;
    });
  });

  return {
    subscribe,
    reload,
    updateItem,
    toggleSelected,
    toggleMarked,
    markedItems,
    selectedItems,
    setReferenceType: setReferenceType,
    removeReferenceType,
    isDirty,
  };
}
