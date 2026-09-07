import { ValidationLibraryResourceType } from '../generated/models';
import type { ValidationLibraryService } from './service';

/** One library resource, reduced to its newest published version. */
export interface CatalogueEntry {
  name: string;
  /** Newest version found, e.g. `2.1.0`. */
  version: string;
  description?: string;
  uploadedAt: Date;
}

/**
 * Lists every resource of one type, at its newest version.
 *
 * The backend provides dedicated `listLatest*` endpoints that already collapse
 * the version history server-side, so no client-side pagination or version
 * comparison is required.
 */
export async function listCatalogue(
  service: ValidationLibraryService,
  type: ValidationLibraryResourceType,
): Promise<CatalogueEntry[]> {
  const entries =
    type === ValidationLibraryResourceType.Rule
      ? await service.listLatestRules()
      : type === ValidationLibraryResourceType.Ruleset
        ? await service.listLatestRuleSets()
        : await service.listLatestPolicies();

  return entries
    .map((entry) => ({
      name: entry.name,
      version: entry.version,
      ...(entry.description !== undefined ? { description: entry.description } : {}),
      uploadedAt: entry.uploadedAt,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** Convenience wrapper for the most common catalogue: the available policies. */
export function listPolicies(service: ValidationLibraryService): Promise<CatalogueEntry[]> {
  return listCatalogue(service, ValidationLibraryResourceType.Policy);
}

/** Convenience wrapper for browsing/binding rule sets (e.g. a policy editor). */
export function listRuleSets(service: ValidationLibraryService): Promise<CatalogueEntry[]> {
  return listCatalogue(service, ValidationLibraryResourceType.Ruleset);
}
