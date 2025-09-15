import { derived, get, writable } from 'svelte/store';
import { Mode } from '../domain';
import { confirmUnsavedChanges } from '../utils/overlayUitils';

interface EditorStoreOptions {
  onSave: () => Promise<void>;
  onDiscard: () => Promise<void>;
  initialMode?: Mode;
}

export function createEditorStore({ onSave, onDiscard, initialMode = "view" }: EditorStoreOptions) {

  const mode = writable<Mode>(initialMode || 'view');
  const dirty = writable<boolean>();
  const isEditModeSwitchState = writable<boolean>(false);

  const canEdit = derived(mode, ($mode) => $mode === 'edit' || $mode === 'create');

  canEdit.subscribe(canEdit => isEditModeSwitchState.set(canEdit));

  async function save() {
    await onSave();
    makeClean();
    if(get(mode) === 'create') {
      mode.set('edit');
    }
  }

  function makeDirty() {
    dirty.set(true);
  }

  function makeClean() {
    dirty.set(false);
  }

  async function close(): Promise<boolean> {
    if(get(dirty) || get(mode) === 'create') {
      const confirmed = await confirmUnsavedChanges()
      if(confirmed.action === 'save') {
        await save();
        return true;
      } else if(confirmed.action === 'discard') {
        await onDiscard();
        makeClean();
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  async function switchMode(next: Mode): Promise<boolean> {
    const current = get(mode);

    // only guard if leaving edit/create
    if ((current === "edit" || current === "create") && next === "view") {
      const canLeave = await close();
      if (!canLeave) return false;
    }

    mode.set(next);
    return true;
  }

  function getCanEdit() {
    return get(canEdit);
  }

  function isEditMode() {
    return get(mode) === 'edit';
  }

  function isViewMode() {
    return get(mode) === 'view';
  }

  function isCreateMode() {
    return get(mode) === 'create';
  }


  return {
    mode,
    dirty,
    canEdit,
    getCanEdit,
    isCreateMode,
    isEditMode,
    isViewMode,
    isEditModeSwitchState,
    save,
    makeDirty,
    makeClean,
    close,
    switchMode,
  };
}
