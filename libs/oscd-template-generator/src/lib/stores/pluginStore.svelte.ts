import { readable } from 'svelte/store';

export type PluginState = {
  doc: XMLDocument | null;
  host: HTMLElement | null;
}

const createPluginStore = () => {
  const state = $state<PluginState>({doc: null, host: null})

  const setDoc = (newDoc: XMLDocument) => {
    state.doc = newDoc;
  }

  const setHost = (newHost: HTMLElement) => {
    state.host = newHost;
  }

  const setPluginState = (newState: Partial<PluginState>) => {
    state.doc = newState.doc ?? state.doc;
    state.host = newState.host ?? state.host;
  }

  return {
    get state() { return state },
    setDoc,
    setHost,
    setPluginState
   };
}

export const pluginStore = createPluginStore();
