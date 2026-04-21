import type { Process } from '@oscd-transnet-plugins/shared';
import type { CustomResourceService } from '@oscd-transnet-plugins/api-compas-custom-resource';
import {
  UploadDataContentTypeEnum,
  UploadDataNextVersionTypeEnum,
} from '@oscd-transnet-plugins/api-compas-custom-resource';

export type { UploadDataNextVersionTypeEnum };

/** Semantic version bump direction — maps 1:1 to the API enum values. */
export type VersionBump = 'major' | 'minor' | 'patch';

export interface RemoteProcessEntry {
  /** Backend resource UUID */
  resourceId: string;
  /** Equals process.id */
  processId: string;
  version: string;
  description: string;
}

/** Returned by {@link ProcessService.save} after a successful upload. */
export interface SaveResult {
  /** Backend resource UUID */
  resourceId: string;
  /** The version the backend assigned (may be auto-incremented). */
  version: string;
}


export class ProcessService {
  static readonly RESOURCE_TYPE = 'engineering-wizard_process';
  static readonly DATA_COMPATIBILITY_VERSION = '1.0.0';

  constructor(private readonly svc: CustomResourceService) {}

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

  async getById(resourceId: string): Promise<Process> {
    const entry = await this.svc.getById(resourceId);
    return JSON.parse(entry.content) as Process;
  }

  async save(
    process: Process,
    versionBump?: VersionBump,
  ): Promise<SaveResult> {
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
      version: versionBump ? undefined : (process.version || '1.0.0'),
      nextVersionType: versionBump ?? undefined,
    });

    if (!result.id) {
      throw new Error('Backend did not return a resource id after upload.');
    }
    if (!result.version) {
      throw new Error('Backend did not return a version after upload.');
    }

    return { resourceId: result.id, version: result.version };
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

