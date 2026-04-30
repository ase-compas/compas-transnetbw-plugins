import type { Process, VersionBump } from '@oscd-transnet-plugins/shared';
import type { CustomResourceService } from '@oscd-transnet-plugins/api-compas-custom-resource';
import {
  UploadDataContentTypeEnum,
  UploadDataNextVersionTypeEnum,
} from '@oscd-transnet-plugins/api-compas-custom-resource';

export type { UploadDataNextVersionTypeEnum };

export type { VersionBump } from '@oscd-transnet-plugins/shared';

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
    const entries = await this.svc.getLatestByType(ProcessService.RESOURCE_TYPE);

    return entries.map((entry) => ({
      resourceId: entry.id,
      processId: entry.name,
      version: entry.version,
      description: entry.description ?? '',
    }));
  }

  async getByName(name: string): Promise<Process> {
    const entry = await this.svc.getLatestByTypeAndName(ProcessService.RESOURCE_TYPE, name);
    try {
      return JSON.parse(entry.content) as Process;
    } catch (e) {
      throw new Error(`Failed to parse process content for resource "${name}": ${e instanceof Error ? e.message : String(e)}`);
    }
  }

  async getById(resourceId: string): Promise<Process> {
    const entry = await this.svc.getById(resourceId);
    try {
      return JSON.parse(entry.content) as Process;
    } catch (e) {
      throw new Error(`Failed to parse process content for resource "${resourceId}": ${e instanceof Error ? e.message : String(e)}`);
    }
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

  async delete(name: string): Promise<void> {
    await this.svc.deleteByTypeAndName(ProcessService.RESOURCE_TYPE, name);
  }
}
