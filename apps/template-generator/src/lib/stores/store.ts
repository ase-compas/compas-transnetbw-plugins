import { writable } from 'svelte/store';

export type Route = {
  path: string[];
  meta?: Record<string, any>;
}

export const route = writable<Route>({
  path: ['overview']
});

export const host = writable<HTMLElement>();
