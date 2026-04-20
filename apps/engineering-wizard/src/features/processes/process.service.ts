import type { Process } from '@oscd-transnet-plugins/shared';
import type { CustomResourceService } from '@oscd-transnet-plugins/api-compas-custom-resource';
import {
  UploadDataContentTypeEnum,
  UploadDataNextVersionTypeEnum,
} from '@oscd-transnet-plugins/api-compas-custom-resource';

export type { UploadDataNextVersionTypeEnum };

export interface RemoteProcessEntry {
  /** Backend resource UUID */
  resourceId: string;
  /** Equals process.id */
  processId: string;
  version: string;
  description: string;
}

/**
 * Domain service for storing and retrieving engineering processes via the
 * CoMPAS custom-resource API (`/plugins/resources/v1`).
 *
 * Each process is stored as a JSON blob with:
 *   type  = "engineering-wizard_process"
 *   name  = process.id   (stable, unique, queryable)
 */
export class ProcessService {
  static readonly RESOURCE_TYPE = 'engineering-wizard_process';
  static readonly DATA_COMPATIBILITY_VERSION = '1.0.0';

  constructor(private readonly svc: CustomResourceService) {}

  // ---------------------------------------------------------------------------
  // Queries
  // ---------------------------------------------------------------------------

  /**
   * Returns lightweight metadata for all stored processes (no content body).
   * The backend may return multiple versions per process name; only the latest
   * for each `process.id` is included here.
   */
  async listLatest(): Promise<RemoteProcessEntry[]> {
    const result = await this.svc.listData({
      type: ProcessService.RESOURCE_TYPE,
      size: 100,
      page: 0,
    });

    // Keep only the latest version per process name
    const latestMap = new Map<string, RemoteProcessEntry>();
    for (const entry of result.content ?? []) {
      const existing = latestMap.get(entry.name);
      if (!existing || isVersionGreater(entry.version, existing.version)) {
        latestMap.set(entry.name, {
          resourceId: entry.id,
          processId: entry.name,
          version: entry.version,
          description: entry.description ?? '',
        });
      }
    }
    return Array.from(latestMap.values());
  }

  /**
   * Fetches a single process by its backend resource UUID and deserialises the
   * JSON content body back into a `Process` object.
   */
  async getById(resourceId: string): Promise<Process> {
    const entry = await this.svc.getById(resourceId);
    return JSON.parse(entry.content) as Process;
  }

  // ---------------------------------------------------------------------------
  // Mutations
  // ---------------------------------------------------------------------------

  /**
   * Uploads a process to the backend.
   *
   * - **First save**: leaves `nextVersionType` undefined and uses
   *   `process.version` (or `'1.0.0'` as fallback) as the explicit version.
   * - **Subsequent saves**: pass `nextVersionType: 'patch'` to let the backend
   *   auto-increment the semver patch segment.
   *
   * Returns the backend-assigned resource UUID.
   */
  async save(
    process: Process,
    opts: { nextVersionType?: UploadDataNextVersionTypeEnum } = {},
  ): Promise<string> {
    const content = new Blob([JSON.stringify(process)], {
      type: 'application/json',
    });

    const result = await this.svc.upload({
      type: ProcessService.RESOURCE_TYPE,
      name: process.id,
      contentType: UploadDataContentTypeEnum.Json,
      content,
      dataCompatibilityVersion: ProcessService.DATA_COMPATIBILITY_VERSION,
      description: process.description ?? undefined,
      version: opts.nextVersionType ? undefined : (process.version || '1.0.0'),
      nextVersionType: opts.nextVersionType,
    });

    if (!result.id) {
      throw new Error('Backend did not return a resource id after upload.');
    }

    return result.id;
  }
}

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function parseVersion(v: string): [number, number, number] {
  const parts = (v ?? '0.0.0').split('.').map(Number);
  return [parts[0] ?? 0, parts[1] ?? 0, parts[2] ?? 0];
}

function isVersionGreater(a: string, b: string): boolean {
  const [ma, mi, pa] = parseVersion(a);
  const [mb, mi2, pb] = parseVersion(b);
  if (ma !== mb) return ma > mb;
  if (mi !== mi2) return mi > mi2;
  return pa > pb;
}

