/**
 * Pure helper functions that operate on a PluginGroup[] array.
 * These contain no store references and can be used both by the store-backed
 * mutations (for existing processes) and by local component state (e.g. AddProcess).
 */

import type { Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';

export function addPluginToGroups(
  groups: PluginGroup[],
  plugin: Plugin,
  groupTitle = 'Ungrouped',
): PluginGroup[] {
  // Prevent duplicates — a plugin (by id) should only appear once in a process.
  const alreadyExists = groups.some((g) =>
    (g.plugins ?? []).some((p) => p.id === plugin.id),
  );
  if (alreadyExists) return groups;

  const title = groupTitle.trim() || 'Ungrouped';
  const existing = groups.find((g) => g.title === title);
  if (existing) {
    return groups.map((g) =>
      g.title === title ? { ...g, plugins: [...(g.plugins ?? []), plugin] } : g,
    );
  }
  return [...groups, { title, plugins: [plugin] }];
}

export function removePluginFromGroups(groups: PluginGroup[], pluginId: string): PluginGroup[] {
  // Empty groups are intentionally kept so users don't lose their group structure.
  return groups.map((g) => ({ ...g, plugins: (g.plugins ?? []).filter((p) => p.id !== pluginId) }));
}

/**
 * Clears all plugins from every group, but preserves the groups themselves (titles intact).
 * Use this instead of `removeAllPluginsFromProcess` when the group structure should remain.
 */
export function removeAllPluginsFromGroups(groups: PluginGroup[]): PluginGroup[] {
  return groups.map((g) => ({ ...g, plugins: [] }));
}

export function addGroupToGroups(
  groups: PluginGroup[],
  groupTitle: string,
  position?: number,
): PluginGroup[] {
  const t = groupTitle.trim();
  if (!t || groups.some((g) => g.title === t)) return groups;
  const newGroup: PluginGroup = { title: t, plugins: [] };
  if (position === undefined) return [...groups, newGroup];
  const next = [...groups];
  next.splice(Math.max(0, position - 1), 0, newGroup);
  return next;
}

