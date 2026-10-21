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

  it('deduplicates repeated registrations of the same catalog entry', () => {
    corePlugins.plugins = [
      { src: 'a.js', name: 'Plugin A', kind: 'editor', catalogId: 'plugin-a' } as any,
      { src: 'a.js', name: 'Plugin A', kind: 'editor', catalogId: 'plugin-a' } as any,
      { src: 'b.js', name: 'Plugin B', kind: 'editor', catalogId: 'plugin-b' } as any,
    ];

    const result = getFilteredCorePlugins('');
    const ids = result.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(result).toHaveLength(2);
  });

  it('keeps distinct catalog entries with colliding derived IDs', () => {
    corePlugins.plugins = [
      { src: 'a.js', name: 'Plugin A', kind: 'editor', catalogId: 'plugin-a' } as any,
      { src: 'a.js', name: 'Plugin A', kind: 'editor', catalogId: 'plugin-a-alias' } as any,
    ];

    const result = getFilteredCorePlugins('');

    expect(result).toHaveLength(2);
    expect(result.map((plugin) => plugin.catalogId)).toEqual([
      'plugin-a',
      'plugin-a-alias',
    ]);
    expect(new Set(result.map((plugin) => plugin.id)).size).toBe(2);
  });
});
