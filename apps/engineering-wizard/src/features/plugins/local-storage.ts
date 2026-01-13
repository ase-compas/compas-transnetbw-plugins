import type { LocalStoredPlugin } from '@oscd-transnet-plugins/shared';

export function loadEditorPluginNamesFromLocalStorage(
  storageKey = 'plugins',
): LocalStoredPlugin[] {
  try {
    const raw =
      typeof localStorage !== 'undefined'
        ? localStorage.getItem(storageKey)
        : null;
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((p) => (p as LocalStoredPlugin)?.kind === 'editor');
  } catch (err) {
    console.error('Failed to load plugins from localStorage', err);
    return [];
  }
}
