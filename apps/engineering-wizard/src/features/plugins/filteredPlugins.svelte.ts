import type { Plugin } from '@oscd-transnet-plugins/shared';
import { corePlugins } from '../processes/stores.svelte';
import { derivePluginId } from './id';

/**
 * Returns all core plugins mapped to the `Plugin` shape, optionally filtered
 * by a search term. IDs are deterministic (derived from src), so the output
 * is referentially stable across re-renders for the same input.
 */
export function getFilteredCorePlugins(searchTerm: string): Plugin[] {
  const allPlugins = (corePlugins.plugins ?? []).map((p) => ({
    id: derivePluginId(p.src, p.name),
    name: p.name,
    src: p.src,
    type: 'internal' as const,
  }));

  const term = searchTerm.toLowerCase().trim();
  if (!term) return allPlugins;
  return allPlugins.filter((p) => p.name.toLowerCase().includes(term));
}
