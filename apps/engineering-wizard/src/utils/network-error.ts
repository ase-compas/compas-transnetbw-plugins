export interface NetworkErrorMessages {
  offline: string;
  unreachable: string;
  fallback: string;
}

export function describeNetworkError(error: unknown, messages: NetworkErrorMessages): string {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return messages.offline;
  }
  if (error instanceof TypeError) {
    return messages.unreachable;
  }
  return error instanceof Error ? error.message : messages.fallback;
}
