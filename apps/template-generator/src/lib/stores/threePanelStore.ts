import {writable} from 'svelte/store';
import type {Item} from '../../layouts/three-panel-layout/types.ts';

export const selectedItem = writable<Item | null>(null);
