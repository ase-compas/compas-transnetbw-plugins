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
  return groups
    .map((g) => ({ ...g, plugins: (g.plugins ?? []).filter((p) => p.id !== pluginId) }))
    .filter((g) => g.plugins.length > 0);
}

export function removeAllPluginsFromGroups(): PluginGroup[] {
  return [];
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

