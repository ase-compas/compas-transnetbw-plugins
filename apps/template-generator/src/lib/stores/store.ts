import { writable } from 'svelte/store';

export type Route = {
  path: string[];
  mata?: Record<string, any>;
}

export const route = writable<Route>({
  path: ['master']
});
export const host = writable<HTMLElement>();
