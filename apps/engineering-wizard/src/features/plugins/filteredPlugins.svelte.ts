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

  // Host catalogs can contain multiple entries that derive the same ID
  // (e.g. duplicate registrations, or entries missing a distinguishing
  // `src`). Keeping duplicates would crash the keyed `{#each}` list in
  // PluginExternalPanel with a `each_key_duplicate` error, so only the
  // first occurrence of each ID is retained.
  const seenIds = new Set<string>();
  const allPlugins = mapped.filter((p) => {
    if (seenIds.has(p.id)) return false;
    seenIds.add(p.id);
    return true;
  });

  const term = searchTerm.toLowerCase().trim();
  if (!term) return allPlugins;
  return allPlugins.filter((p) => p.name.toLowerCase().includes(term));
}
