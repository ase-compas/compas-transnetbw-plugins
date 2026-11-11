import type { Process, VersionBump } from '@oscd-transnet-plugins/shared';
import { bumpVersion, toStoredValidation } from '@oscd-transnet-plugins/shared';
import type { CustomResourceService } from '@oscd-transnet-plugins/api-compas-custom-resource';
import {
  UploadDataContentTypeEnum,
  UploadDataNextVersionTypeEnum,
  ResponseError,
} from '@oscd-transnet-plugins/api-compas-custom-resource';

export type { UploadDataNextVersionTypeEnum };

export type { VersionBump } from '@oscd-transnet-plugins/shared';

function toStoredProcess(process: Process, version: string): Process {
  return {
    ...process,
    version,
    pluginGroups: process.pluginGroups.map((group) => ({
      ...group,
      plugins: group.plugins.map((plugin) =>
        plugin.validations
          ? { ...plugin, validations: plugin.validations.map(toStoredValidation) }
          : plugin,
      ),
    })),
  };
}

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

export class ProcessVersionConflictError extends Error {
  constructor(id: string, version: string) {
    super(`The backend rejected process ID "${id}" and version "${version}" because that version already exists.`);
    this.name = 'ProcessVersionConflictError';
  }
}

export class ProcessService {
  static readonly RESOURCE_TYPE = 'engineering-wizard_process';
  static readonly DATA_COMPATIBILITY_VERSION = '1.0.0';

  constructor(private readonly svc: CustomResourceService) {}

  async listLatest(): Promise<RemoteProcessEntry[]> {
    const entries = await this.svc.getLatestByType(ProcessService.RESOURCE_TYPE).catch(async (error: unknown) => {
      if (!(error instanceof ResponseError) || error.response.status !== 404) throw error;

      let body: unknown;
      try {
        body = await error.response.clone().json();
      } catch {
        throw error;
      }
      if (
        typeof body === 'object' && body !== null &&
        'errorMessages' in body && Array.isArray(body.errorMessages) &&
        body.errorMessages.length > 0 &&
        body.errorMessages.every((message: unknown) =>
          typeof message === 'object' && message !== null &&
          'code' in message && message.code === 'SDS-0006',
        )
      ) return [];

      throw error;
    });

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
    // Pre-compute the new version so the stored JSON content is consistent
    // with the version the backend will assign.
    const currentVersion = process.version || '1.0.0';
    const newVersion = versionBump ? bumpVersion(currentVersion, versionBump) : currentVersion;

    const content = new Blob([JSON.stringify(toStoredProcess(process, newVersion))], {
      type: 'application/json',
    });

    const result = await this.svc.upload({
      type: ProcessService.RESOURCE_TYPE,
      name: process.id,
      contentType: UploadDataContentTypeEnum.Json,
      content,
      dataCompatibilityVersion: ProcessService.DATA_COMPATIBILITY_VERSION,
      description: process.description ?? undefined,
      version: versionBump ? undefined : newVersion,
      nextVersionType: versionBump ?? undefined,
    }).catch((error: unknown) => {
      if (error instanceof ResponseError && error.response.status === 409) {
        throw new ProcessVersionConflictError(process.id, newVersion);
      }
      throw error;
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
