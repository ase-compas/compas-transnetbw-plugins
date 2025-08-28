import { writable, derived, type Readable } from 'svelte/store';
import { ObjectReferenceDetails } from '../domain/core.model';

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

  function toggleMarked(id: string) {
    update(list =>
      list.map(item => item.name === id ? { ...item, isMarked: !item.isMarked } : item)
    );
  }

  function setTypeReference(id: string, typeRef: string) {
    update(list =>
      list.map(item => item.name === id ? { ...item, typeRef, meta: { ...item.meta, isConfigured: true }, } : item)
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

  const markedItems = derived(store, $items => $items.filter(item => item.isMarked));
  const configuredItems = derived(store, $items => $items.filter(item => item.meta.isConfigured || item.meta.isMandatory));

  const isDirty = derived(store, $items => {
    if ($items.length !== original.length) return true;

    return $items.some((curr, index) => {
      const orig = original[index];
      // Only consider configured items

      if(curr.meta.isConfigured !== orig.meta.isConfigured) return true;
      if (!curr.meta.isConfigured) return false;
      return (curr.name !== orig.name ||
        curr.typeRef !== orig.typeRef ||
        curr.typeRef === '' ||
        curr.typeRef == null || false);
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
    configuredItems,
    isDirty,
    reset
  };
}
