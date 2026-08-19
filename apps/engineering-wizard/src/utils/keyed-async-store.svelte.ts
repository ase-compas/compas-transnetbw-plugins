export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncEntry<T> {
  status: AsyncStatus;
  data?: T;
  error?: string;
}

const IDLE_ENTRY: AsyncEntry<never> = { status: 'idle' };

export interface KeyedAsyncStore<T> {
  get(key: string): AsyncEntry<T>;
  begin(key: string): void;
  succeed(key: string, data: T): void;
  fail(key: string, error: string): void;
}

export function createKeyedAsyncStore<T>(): KeyedAsyncStore<T> {
  const entries = $state<Record<string, AsyncEntry<T>>>({});

  return {
    get(key) {
      return entries[key] ?? IDLE_ENTRY;
    },
    begin(key) {
      entries[key] = { ...entries[key], status: 'loading' };
    },
    succeed(key, data) {
      entries[key] = { status: 'success', data };
    },
    fail(key, error) {
      entries[key] = { status: 'error', error };
    },
  };
}
