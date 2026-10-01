import type { Plugin } from '@oscd-transnet-plugins/shared';
import { corePlugins } from '../processes/stores.svelte';
import { derivePluginId } from './id';
import { getHostPluginCatalogId } from './plugin-catalog';

/**
 * Returns all host-catalog plugins mapped to the process `Plugin` shape.
 */
export function getFilteredCorePlugins(searchTerm: string): Plugin[] {
  const allPlugins = (corePlugins.plugins ?? []).map((p) => ({
    id: derivePluginId(p.src, p.name),
    catalogId: getHostPluginCatalogId(p),
    name: p.name,
    src: p.src,
    type: 'internal' as const,
  }));

  const term = searchTerm.toLowerCase().trim();
  if (!term) return allPlugins;
  return allPlugins.filter((p) => p.name.toLowerCase().includes(term));
}
