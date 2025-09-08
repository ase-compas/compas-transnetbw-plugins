import { SvelteComponent } from 'svelte';
import { get, Readable, writable } from 'svelte/store';

export type CloseReason = 'esc' | 'backdrop' | 'button';

export interface Drawer<T = unknown> {
  title: string;
  component: typeof SvelteComponent;
  props?: T;
  canClose?: (reason: CloseReason) => boolean | Promise<boolean>;
  ref?: SvelteComponent; // reference to the mounted component
}

const drawerStore = writable<Drawer[]>([]);
export const drawers: Readable<Drawer[]> = {
  subscribe: drawerStore.subscribe
};

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
