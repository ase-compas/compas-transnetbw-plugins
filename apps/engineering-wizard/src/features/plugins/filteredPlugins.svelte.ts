import type { Plugin } from '@oscd-transnet-plugins/shared';
import { corePlugins } from '../processes/stores.svelte';
import { derivePluginId } from './id';
import { getHostPluginCatalogId } from './plugin-catalog';

/**
 * Returns all host-catalog plugins mapped to the process `Plugin` shape.
 */
export function getFilteredCorePlugins(searchTerm: string): Plugin[] {
  const mapped = (corePlugins.plugins ?? []).map((p) => ({
    id: derivePluginId(p.src, p.name),
    catalogId: getHostPluginCatalogId(p),
    icon: p.icon,
    name: p.name,
    src: p.src,
    type: 'internal' as const,
  }));

  const seenPlugins = new Set<string>();
  const seenIds = new Set<string>();
  const allPlugins = mapped.filter((plugin) => {
    const identity = `${plugin.catalogId}\0${plugin.src ?? ''}\0${plugin.name}`;
    if (seenPlugins.has(identity)) return false;
    seenPlugins.add(identity);

    const baseId = plugin.id;
    let suffix = 2;
    while (seenIds.has(plugin.id)) {
      plugin.id = `${baseId}-${suffix}`;
      suffix += 1;
    }
    seenIds.add(plugin.id);
    return true;
  });

  const term = searchTerm.toLowerCase().trim();
  if (!term) return allPlugins;
  return allPlugins.filter((p) => p.name.toLowerCase().includes(term));
}
