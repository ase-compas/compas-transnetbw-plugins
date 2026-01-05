import { writable, derived, type Readable } from 'svelte/store';
import { type ObjectReferenceDetails } from '../domain';

export interface ObjectReferenceState extends ObjectReferenceDetails {
  isMarked: boolean
}
export interface ObjectReferenceStore extends Readable<ObjectReferenceState[]> {

  /** Reload items from the loader function */
  reload: () => Promise<void>;

  /** Toggle the configured state of an item */
  toggleConfigured: (id: string) => void;

  /** Toggle the marked state of an item */
  toggleMarked: (id: string) => void;

  /** Update properties of an item */
  updateItem: (id: string, changes: Partial<ObjectReferenceState>) => void;

  /** Items that have been marked */
  markedItems: Readable<ObjectReferenceState[]>;

  /** Items that have been marked */
  markedItemIds: Readable<string[]>;

  /** Items that have been configured */
  configuredItems: Readable<ObjectReferenceState[]>;

  /** Add a reference type to an item */
  setTypeReference: (id: string, typeRef: string) => void;

  /** Remove a reference type from an item */
  removeTypeReference: (id: string) => void;

  /**True if the current store state differs from the originally loaded state */
  isDirty: Readable<boolean>;

  /** Reset the store to its original loaded state */
  reset: () => void;

  /** Set the current state as the new original state, so isDirty becomes false */
  commit: () => void;
}

export function createObjectReferenceStore(
  loader: () => Promise<ObjectReferenceDetails[]>
): ObjectReferenceStore {
  const store = writable<ObjectReferenceState[]>([]);
  let original: ObjectReferenceState[] = [];
  const { subscribe, set, update } = store;

  // Load items and ensure default states
  async function reload() {
    const items = await loader();
    const stateItems: ObjectReferenceState[] = items.map(i => ({...i, isMarked: false }))
    original = JSON.parse(JSON.stringify(items));
    set(stateItems);
  }

  function updateItem(id: string, changes: Partial<ObjectReferenceState>) {
    update(list =>
      list.map(item => item.name === id ? { ...item, ...changes } : item)
    );
  }

  function toggleConfigured(id: string) {
    update(list =>
      list.map(item => item.name === id ? { ...item, meta: { ...item.meta, isConfigured: !item.meta.isConfigured } } : item
      )
    );
  }

 /**
 * Handles card selection when a card is clicked.
 *
 * If the clicked card is already selected, it will be deselected.
 * If a different card is clicked, the selection switches to the new card,
 * ensuring that only one card is selected at any time.
 *
 * @param {string} id - The id of the card that to toggle / select.
 */
  function toggleMarked(id: string) {
    update(list =>
      list.map(item => item.name === id ? { ...item, isMarked: !item.isMarked } : {...item, isMarked: false})
    );
  }

  function setTypeReference(id: string, typeRef: string) {
    update(list =>
      list.map(item => item.name === id ? { ...item, typeRef, isMarked: false, meta: { ...item.meta, isConfigured: true }, } : item)
    );
  }

  function removeTypeReference(id: string) {
    update(list =>
      list.map(item => item.name === id ? { ...item, typeRef: undefined, meta: { ...item.meta, isConfigured: false }, } : item)
    );
  }

  function reset() {
    set(JSON.parse(JSON.stringify(original)));
  }

  function commit() {
    store.update(current => {
      original = JSON.parse(JSON.stringify(current));
      return current;
    });
  }

  const markedItems = derived(store, $items => $items.filter(item => item.isMarked));
  const markedItemIds = derived(markedItems, $items => $items.map(item => item.name));

  const configuredItems = derived(store, $items => $items.filter(item => item.meta.isConfigured || item.meta.isMandatory));

  const isDirty = derived(store, $items => {
    if ($items.length !== original.length) return true;

    return $items.some((curr, index) => {
      const orig = original[index];
      // Only consider configured items

      if(curr.meta.isConfigured !== orig.meta.isConfigured) return true;
      if (!curr.meta.isConfigured) return false;
      return (curr.name !== orig.name ||
        curr.typeRef !== orig.typeRef);
    });
  });

  return {
    subscribe,
    reload,
    updateItem,
    toggleConfigured,
    toggleMarked,
    setTypeReference,
    removeTypeReference,
    markedItems,
    markedItemIds,
    configuredItems,
    isDirty,
    reset,
    commit
  };
}
