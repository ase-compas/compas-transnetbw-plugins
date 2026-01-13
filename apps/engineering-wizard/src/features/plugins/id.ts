export function createPluginId(name: string): string {
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .slice(0, 32);

  const rand =
    crypto.randomUUID?.().split('-')[0] ??
    Math.random().toString(36).slice(2, 10);

  return `ext-${slug || 'plugin'}-${rand}`;
}
