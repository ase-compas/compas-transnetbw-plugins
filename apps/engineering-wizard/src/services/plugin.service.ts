import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';

export interface LocalStoredPlugin {
  name?: string;
  kind?: string;
  src?: string;
  sourceUrl?: string;
  [key: string]: unknown;
}

export function getPluginGroups(proc: Process | null): PluginGroup[] {
  if (proc?.pluginGroups?.length) return proc.pluginGroups as PluginGroup[];
  return [{ title: 'Process', plugins: proc?.plugins ?? [] }];
}

export function loadEditorPluginNamesFromLocalStorage(storageKey = 'plugins'): LocalStoredPlugin[] {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(storageKey) : null;
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(p => (p as LocalStoredPlugin)?.kind === 'editor');
  } catch (err) {
    console.error('Failed to load plugins from localStorage', err);
    return [];
  }
}
