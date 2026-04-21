import type { Plugin } from '@oscd-transnet-plugins/shared';
import { corePlugins } from '../processes/stores.svelte';
import { createPluginId } from './id';

/**
 * Returns all core plugins mapped to the `Plugin` shape, optionally filtered
 * by a search term. Use inside a `$derived` context.
 */
export function getFilteredCorePlugins(searchTerm: string): Plugin[] {
  const allPlugins = (corePlugins.plugins ?? []).map((p) => ({
    id: createPluginId(p.name),
    name: p.name,
    src: p.src,
    type: 'internal',
  })) as Plugin[];

  const term = searchTerm.toLowerCase().trim();
  if (!term) return allPlugins;
  return allPlugins.filter((p) => p.name.toLowerCase().includes(term));
}

