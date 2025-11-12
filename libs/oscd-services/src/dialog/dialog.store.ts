import { writable } from 'svelte/store';
import type { Component } from 'svelte';

export type DialogCloseType = 'confirm' | 'cancel' | 'exit';
export type DialogResult<T = any> = { type: DialogCloseType; data?: T };

interface DialogStore<T = any> {
  component: Component | null;
  props: Record<string, any>;
  isOpen: boolean;
  resolve?: (value: DialogResult<T>) => void;
}

export const dialogStore = writable<DialogStore>({
  component: null,
  props: {},
  isOpen: false,
});
