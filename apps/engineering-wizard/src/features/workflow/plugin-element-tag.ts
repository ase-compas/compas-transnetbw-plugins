import type { ViewPlugin } from './viewPlugin';

function hash(value: string): string {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;

  for (let i = 0, ch; i < value.length; i++) {
    ch = value.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return (
    (h2 >>> 0).toString(16).padStart(8, '0') +
    (h1 >>> 0).toString(16).padStart(8, '0')
  );
}

export function getLegacyHostPluginElementTag(src: string): string {
  return `oscd-plugin${hash(src)}`;
}

export function getPluginElementTag(plugin: ViewPlugin): string {
  if (plugin.tag) return plugin.tag;

  const identity =
    plugin.type === 'internal'
      ? `catalog:${plugin.catalogId ?? plugin.src}`
      : `external:${plugin.id}:${plugin.src}`;

  return `engineering-wizard-plugin-${hash(identity)}`;
}
