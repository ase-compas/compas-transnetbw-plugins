/**
 * Backend-name derivation for validation-library resources.
 * Names must match `^[a-z0-9]([a-z0-9-]*[a-z0-9])?$`.
 */

/** Normalises to the backend name shape; returns `''` if nothing usable remains. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    // Strip combining marks so "Umspannwerk Ö" becomes "umspannwerk-o".
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Deterministic and collision-free within `existing`; appends `-N` on clash. */
export function deriveResourceName(title: string, existing: readonly string[]): string {
  const base = slugify(title.trim()) || 'unnamed';

  if (!existing.includes(base)) return base;

  let suffix = 2;
  while (existing.includes(`${base}-${suffix}`)) suffix += 1;
  return `${base}-${suffix}`;
}
