import { writable } from 'svelte/store';

export type Route = {
  path: string[];
  meta?: Record<string, any>;
}

export const route = writable<Route>({
  path: ['overview']
});

export const host = writable<HTMLElement | null>(null);

export const doc = writable<XMLDocument | null>(null);

function usePluginStateStore() {
  let pluginState = $state<{host: HTMLElement | null; doc: XMLDocument | null}>({
    host: null,
    doc: null
  })

  function setPluginState(newState: Partial<{host: HTMLElement | null; doc: XMLDocument | null}>) {
    pluginState = {...pluginState, ...newState};
  }


  return { get pluginState() {return pluginState}, setPluginState};
}

export const pluginStateStore = usePluginStateStore();

export const test = $state({doc: null});
