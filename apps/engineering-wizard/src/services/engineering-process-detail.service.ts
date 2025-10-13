import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';

export function getBreadcrumbs(
  proc: Process | null,
  opts?: { edit?: boolean }
) {
  const name = proc?.name ?? '—';
  return [
    { label: 'Engineering-Wizard', enabled: true },
    { label: opts?.edit ? `Edit ${name}` : name, enabled: false },
  ];
}

export function getPluginGroups(proc: Process | null): PluginGroup[] {
  if (proc?.pluginGroups?.length) return proc.pluginGroups as PluginGroup[];
  return [{ title: 'Process', plugins: proc?.plugins ?? [] }];
}

export interface LocalStoredPlugin {
  name?: string;
  kind?: string;
  [key: string]: unknown;
}

export function loadEditorPluginNamesFromLocalStorage(storageKey = 'plugins'): string[] {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(storageKey) : null;
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(p => (p as LocalStoredPlugin)?.kind === 'editor')
      .map(p => (p as LocalStoredPlugin)?.name)
      .filter((n): n is string => !!n);
  } catch (err) {
    console.error('Failed to load plugins from localStorage', err);
    return [];
  }
}
