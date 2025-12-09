import type { Component, SvelteComponent } from 'svelte';
import { get, type Readable, writable } from 'svelte/store';

export type CloseReason = 'esc' | 'backdrop' | 'button' | 'cancel' | 'save' | 'force';

/**
 * Drawer interface
 *
 * - `title`: Displayed in the header / breadcrumbs.
 * - `component`: Svelte component that will be rendered inside the drawer.
 * - `props`: Optional props to pass to the component.
 * - `canClose`: (optional) callback to decide if the drawer is allowed to close.
 *   - Receives a `CloseReason` (why the drawer is being closed).
 *   - Should return `true` (allow close) or `false` (prevent close).
 *   - Can also return a Promise for async validation (e.g., confirm dialogs).
 * - `ref`: Reference to the mounted Svelte component instance.
 *   - If the component itself defines and exports a `canClose` method, that will be called.
 * Example usage in a Svelte component:
 * ```svelte
 * <script lang="ts">
 * import type { CloseReason } from "@oscd-transnet-plugins/oscd-services/drawer";
 *
 *
 * //This function will be called automatically before the drawer closes
 *   export function canClose(reason: CloseReason): boolean {
 *    if (reason === "save") return true;
 *     return confirm("Are you sure you want to close without saving?");
 *  }
 *  </script>
 *
 * <div>Drawer Content</div>
 * ```
 */
export interface Drawer<T = any> {
  title: string;
  component: Component;
  props?: T;
  canClose?: (reason: CloseReason) => boolean | Promise<boolean>;
  ref?: SvelteComponent; // reference to the mounted component
}

const drawerStore = writable<Drawer[]>([]);
export const drawers: Readable<Drawer[]> = {
  subscribe: drawerStore.subscribe
};

/**
 * Open a new drawer by pushing it to the stack.
 */
export function openDrawer<T>(drawer: Drawer<T>) {
  drawerStore.update(list => [...list, drawer]);
}

/**
 * Helper: check if a drawer can close.
 * Returns true if allowed, false if canceled.
 */
async function canCloseDrawer(drawer: Drawer, reason: CloseReason) {
  if (drawer.ref?.canClose) {
    return await drawer.ref.canClose(reason);
  }
  return true;
}

/**
 * Close the top drawer
 */
export async function closeDrawer(reason: CloseReason = 'button') {
  const drawerList = get(drawers);
  if (!drawerList.length) return;

  const topDrawer = drawerList[drawerList.length - 1];
  const allowed = await canCloseDrawer(topDrawer, reason);
  if (!allowed) return;

  drawerStore.update(list => list.slice(0, -1));
}

/**
 * Replace the top drawer, checking canClose on the current top
 */
export async function replaceTopDrawer<T>(drawer: Drawer<T>, reason: CloseReason = 'button') {
  const drawerList = get(drawers);

  if (!drawerList.length) {
    drawerStore.update(() => [drawer]);
    return;
  }

  const topDrawer = drawerList[drawerList.length - 1];
  const allowed = await canCloseDrawer(topDrawer, reason);
  if (!allowed) return; // canceled, do not replace

  drawerStore.update(list => [...list.slice(0, -1), drawer]);
}
