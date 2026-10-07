import { describe, expect, it } from 'vitest';
import { getFilteredCorePlugins } from './filteredPlugins.svelte';
import { corePlugins } from '../processes/stores.svelte';

describe('getFilteredCorePlugins', () => {
  it('returns all plugins when the search term is empty', () => {
    corePlugins.plugins = [
      { src: 'a.js', name: 'Plugin A', kind: 'editor' } as any,
      { src: 'b.js', name: 'Plugin B', kind: 'editor' } as any,
    ];

    const result = getFilteredCorePlugins('');
    expect(result.map((p) => p.name)).toEqual(['Plugin A', 'Plugin B']);
  });

  it('deduplicates entries that derive the same ID so the keyed list never crashes', () => {
    // Two host-catalog entries that would otherwise collide on derived ID
    // (e.g. duplicate registrations for the same plugin module).
    corePlugins.plugins = [
      { src: 'a.js', name: 'Plugin A', kind: 'editor' } as any,
      { src: 'a.js', name: 'Plugin A', kind: 'editor' } as any,
      { src: 'b.js', name: 'Plugin B', kind: 'editor' } as any,
    ];

    const result = getFilteredCorePlugins('');
    const ids = result.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(result).toHaveLength(2);
  });
});
