/**
 * Derives a deterministic, stable plugin ID from its source URL.
 * For external plugins this produces a valid custom-element tag name
 * (contains a dash, lowercase alphanumeric).
 *
 * Falls back to slugifying the name if no src is provided.
 */
export function derivePluginId(src: string | undefined, name: string): string {
  const raw = src || name;
  const slug = raw
    .toLowerCase()
    .trim()
    // strip protocol + domain for URLs
    .replace(/^https?:\/\/[^/]+\//, '')
    // keep only alphanumeric, dashes, slashes
    .replace(/[^a-z0-9/-]/g, '')
    // collapse slashes/dashes into single dashes
    .replace(/[/-]+/g, '-')
    // trim leading/trailing dashes
    .replace(/^-+|-+$/g, '')
    .slice(-48); // take the tail — most distinctive part of a URL

  return `plugin-${slug || 'unknown'}`;
}
