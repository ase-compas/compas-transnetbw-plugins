import type { ComponentType } from 'svelte';
import {
  type DialogCloseType,
  type DialogResult,
  dialogStore,
} from './dialog.store';

/**
 * Opens a dialog with the given component and props.
 * Returns a Promise that resolves when the dialog is closed.
 *
 * @template T - Type of the optional data returned by the dialog.
 * @param component - The Svelte component to show in the dialog.
 * @param props - Props to pass to the component (optional).
 * @returns A Promise that resolves with a `DialogResult<T>` when the dialog is closed.
 */
export function openDialog<T = any>(
  component: ComponentType,
  props: Record<string, any> = {}
): Promise<DialogResult<T>> {
  return new Promise((resolve) => {
    dialogStore.set({
      component,
      props,
      isOpen: true,
      resolve,
    });
  });
}

/**
 * Closes the currently open dialog and optionally provides result data.
 * This will resolve the Promise returned by `openDialog`.
 *
 * @template T - Type of the optional data to return.
 * @param type - A string describing how the dialog was closed (e.g., 'confirm', 'cancel').
 * @param data - Optional data to return from the dialog.
 */
export function closeDialog<T = any>(type: DialogCloseType, data?: T) {
  dialogStore.update((store) => {
    store.resolve?.({ type, data });
    return { component: null, props: {}, isOpen: false };
  });
}

/**
 * Helper to update props of the currently open dialog reactively.
 * @param partial - An object containing the props to update.
 */
export function updateDialogProps(partial: Record<string, any>) {
  dialogStore.update((store) => {
    if (!store.isOpen) return store; // nothing to do
    return { ...store, props: { ...store.props, ...partial } };
  });
}
