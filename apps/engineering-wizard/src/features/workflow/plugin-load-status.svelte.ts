export type PluginLoadStatus = 'idle' | 'loading' | 'loaded' | 'error';
export type PluginLoadErrorKind = 'offline' | 'plugin';

export interface PluginLoadState {
  status: PluginLoadStatus;
  error?: string;
  errorKind?: PluginLoadErrorKind;
}

const IDLE: PluginLoadState = { status: 'idle' };

const states = $state<Record<string, PluginLoadState>>({});

export function getPluginLoadState(pluginId: string): PluginLoadState {
  return states[pluginId] ?? IDLE;
}

export function setPluginLoadState(
  pluginId: string,
  state: PluginLoadState,
): void {
  states[pluginId] = state;
}

export function describePluginLoadError(
  error: unknown,
): Pick<PluginLoadState, 'error' | 'errorKind'> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return {
      error:
        'You are offline. Restore your network connection and try loading the plugin again.',
      errorKind: 'offline',
    };
  }

  const reason = error instanceof Error ? error.message : '';
  return {
    error: reason
      ? `The plugin could not be loaded. ${reason}`
      : 'The plugin could not be loaded.',
    errorKind: 'plugin',
  };
}
