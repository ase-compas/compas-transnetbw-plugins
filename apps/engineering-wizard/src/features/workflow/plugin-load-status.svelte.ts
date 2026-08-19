import { createKeyedAsyncStore } from '../../utils/keyed-async-store.svelte';
import { describeNetworkError } from '../../utils/network-error';

export type PluginLoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

export interface PluginLoadState {
  status: PluginLoadStatus;
  error?: string;
}

const store = createKeyedAsyncStore<void>();

export function getPluginLoadState(pluginId: string): PluginLoadState {
  const entry = store.get(pluginId);
  return {
    status: entry.status === 'success' ? 'loaded' : entry.status,
    error: entry.error,
  };
}

export function setPluginLoadState(pluginId: string, state: PluginLoadState): void {
  if (state.status === 'loading') store.begin(pluginId);
  else if (state.status === 'loaded') store.succeed(pluginId, undefined);
  else if (state.status === 'error') store.fail(pluginId, state.error ?? 'Failed to load the plugin.');
  // 'idle' is the store's default for unseen keys; no explicit reset is needed.
}

export function describePluginLoadError(error: unknown): string {
  return describeNetworkError(error, {
    offline: 'You appear to be offline. Check your internet connection and try again.',
    unreachable: 'Could not reach the plugin server. Check your connection and try again.',
    fallback: 'Failed to load the plugin.',
  });
}
