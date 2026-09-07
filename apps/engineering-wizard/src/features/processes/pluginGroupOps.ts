/**
 * Pure helper functions that operate on a PluginGroup[] array.
 * These contain no store references and can be used both by the store-backed
 * mutations (for existing processes) and by local component state (e.g. AddProcess).
 */

import type { Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';

export function createPluginInstance(
  groups: PluginGroup[],
  plugin: Plugin,
): Plugin {
  const existingIds = new Set(
    groups.flatMap((group) => (group.plugins ?? []).map((item) => item.id)),
  );

  let id = plugin.id;
  let suffix = 2;
  while (existingIds.has(id)) {
    id = `${plugin.id}-${suffix}`;
    suffix += 1;
  }

  const instance: Plugin = { ...plugin, id };
  if (plugin.validations) {
    instance.validations = plugin.validations.map((validation) => ({
      ...validation,
      pluginId: id,
    }));
  }
  return instance;
}

export function addPluginToGroups(
  groups: PluginGroup[],
  plugin: Plugin,
  groupTitle = 'Ungrouped',
): PluginGroup[] {
  const title = groupTitle.trim() || 'Ungrouped';
  const instance = createPluginInstance(groups, plugin);
  const existing = groups.find((g) => g.title === title);
  if (existing) {
    return groups.map((g) =>
      g.title === title
        ? { ...g, plugins: [...(g.plugins ?? []), instance] }
        : g,
    );
  }
  return [...groups, { title, plugins: [instance] }];
}

export function removePluginFromGroups(
  groups: PluginGroup[],
  pluginId: string,
): PluginGroup[] {
  // Empty groups are intentionally kept so users don't lose their group structure.
  return groups.map((g) => ({
    ...g,
    plugins: (g.plugins ?? []).filter((p) => p.id !== pluginId),
  }));
}

/**
 * Clears all plugins from every group, but preserves the groups themselves (titles intact).
 * Use this instead of `removeAllPluginsFromProcess` when the group structure should remain.
 */
export function removeAllPluginsFromGroups(
  groups: PluginGroup[],
): PluginGroup[] {
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
