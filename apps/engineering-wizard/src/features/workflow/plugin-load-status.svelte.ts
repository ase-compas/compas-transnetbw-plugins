import { describeNetworkError } from '../../utils/network-error';

export type PluginLoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

export interface PluginLoadState {
  status: PluginLoadStatus;
  error?: string;
}

const IDLE: PluginLoadState = { status: 'idle' };

const states = $state<Record<string, PluginLoadState>>({});

export function getPluginLoadState(pluginId: string): PluginLoadState {
  return states[pluginId] ?? IDLE;
}

export function setPluginLoadState(pluginId: string, state: PluginLoadState): void {
  states[pluginId] = state;
}

export function describePluginLoadError(error: unknown): string {
  return describeNetworkError(error, {
    offline: 'You appear to be offline. Check your internet connection and try again.',
    unreachable: 'Could not reach the plugin server. Check your connection and try again.',
    fallback: 'Failed to load the plugin.',
  });
}
