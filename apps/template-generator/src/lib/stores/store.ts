import { writable } from 'svelte/store';

export const selectedLNodeTypeId = writable<string | null>(null);
export const host = writable<Element>();
