/**
 * Dialog system for Svelte using a global store.
 *
 * Usage:
 *
 * 1. Place <DialogHost /> at the root of your app:
 *
 *    <DialogHost {dialogStore} />
 *
 * 2. Open a dialog anywhere in your code:
 *
 *    const result = await openDialog(MyModal, { message: 'Are you sure?' });
 *
 *    if (result.type === 'confirm') {
 *      console.log('Confirmed with:', result.data);
 *    } else {
 *      console.log('Cancelled');
 *    }
 *
 *    // or using .then:
 *    openDialog(MyModal, { message: 'Delete item?' }).then((result) => {
 *      if (result.type === 'confirm') {
 *        // proceed
 *      }
 *    });
 *
 * 3. From inside MyModal.svelte, close the dialog like this:
 *
 *    function onConfirm() {
 *      closeDialog('confirm', { userId: 123 });
 *    }
 *
 *    function onCancel() {
 *      closeDialog('cancel');
 *    }
 *
 *    // This will resolve the openDialog promise with:
 *    // { type: 'confirm', data: { userId: 123 } }
 */
import type { ComponentType } from 'svelte';
import { type DialogResult, dialogStore } from './dialog.store';

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
export function closeDialog<T = any>(type: string, data?: T) {
  dialogStore.update((store) => {
    store.resolve?.({ type, data });
    return { component: null, props: {}, isOpen: false };
  });
}
