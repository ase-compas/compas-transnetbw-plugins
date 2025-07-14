import { writable } from 'svelte/store';

export const selectedLNodeTypeId = writable<string | null>(null);
