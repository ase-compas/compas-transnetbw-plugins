import { writable } from 'svelte/store';
import { initServices } from '../services';

export type PluginState = {
  doc: XMLDocument | null;
  host: HTMLElement | null;
}

type PluginCallback = (doc: XMLDocument, host: HTMLElement) => void;

const createPluginStore = (callback: PluginCallback) => {
  const state = $state<PluginState>({doc: null, host: null})
  let ready = $state<boolean>(false)
  const {subscribe, set} = writable<PluginState>({doc: null, host: null})

  const setDoc = (newDoc: XMLDocument) => {
    state.doc = newDoc;
    runCallback()
  }

  const setHost = (newHost: HTMLElement) => {
    state.host = newHost;
    runCallback()
  }

  const setPluginState = (newState: Partial<PluginState>) => {
    state.doc = newState.doc ?? state.doc;
    state.host = newState.host ?? state.host;
    runCallback()
  }

  const runCallback = () => {
    if (state.doc && state.host) {
      callback(state.doc, state.host);
      ready = true;
      set(state);
    }
  }

  return {
    get state() { return state },
    get ready() { return ready; },
    setDoc,
    setHost,
    setPluginState,
    updates: {subscribe}
   };
}

export const pluginStore = createPluginStore((doc, host) => initServices(doc, host));
