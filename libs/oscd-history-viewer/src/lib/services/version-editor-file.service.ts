import { firstValueFrom } from 'rxjs';
import { FileSearchResult } from '../domain';
import type { SearchParams } from '../domain';
import { Configuration, HistoryApi } from '@oscd-transnet-plugins/oscd-history-api-client';
import type { DataResourceSearch } from '@oscd-transnet-plugins/oscd-history-api-client';

export class VersionEditorFileService {
  private static instance: VersionEditorFileService;

  private readonly endpoint = '/compas-scl-data-service';

  private constructor() {}

  public static getInstance(): VersionEditorFileService {
    if (!VersionEditorFileService.instance) {
      VersionEditorFileService.instance = new VersionEditorFileService();
    }
    return VersionEditorFileService.instance;
  }

  async searchFiles(params: SearchParams): Promise<FileSearchResult[]> {
    const client = this.generateApiClient(this.endpoint);
    const response = await firstValueFrom(
      client.searchForResources({ dataResourceSearch: this.mapToDataResourceSearch(params) })
    ) as any;
    if (!response?.results) return [];
    return (response.results as any[]).map(item => this.mapToFileSearchResult(item));
  }

  async getHistoryFiles(uuid: string): Promise<FileSearchResult[]> {
    const client = this.generateApiClient(this.endpoint);
    const response = await firstValueFrom(
      client.retrieveDataResourceHistory({ id: uuid })
    ) as any;
    if (!response?.versions) return [];
    return (response.versions as any[]).map(item => this.mapToFileSearchResult(item));
  }

  /**
   * Delete all versions of a resource
   * @param type scl file type (e.g., SSD, SCL, etc.)
   * @param uuid uuid of the resource
   */
  async deleteResource(type: string, uuid: string): Promise<void> {
    const client = this.generateApiClient(this.endpoint);
    await firstValueFrom(client.deleteAllSclFileVersions({ id: uuid, type }));
  }

  async downloadSclData(uuid: string, type: string, version: string): Promise<Blob> {
    const client = this.generateApiClient(this.endpoint);
    return firstValueFrom(
      client.retrieveDataResourceByVersion({ id: uuid, version })
    ) as Promise<Blob>;
  }

  private mapToFileSearchResult(data: any): FileSearchResult {
    return new FileSearchResult(
      data.uuid,
      data.name,
      data.author,
      data.type,
      new Date(data.changedAt),
      data.version,
      data.comment,
      data.archived,
      data.available,
      data.deleted,
    );
  }

  private mapToDataResourceSearch(params: SearchParams): DataResourceSearch {
    return {
      uuid: params.uuid || null,
      type: params.type || null,
      name: params.filename || null,
      author: params.author || null,
      from: params.from || null,
      to: params.to || null,
    };
  }

  private generateApiClient(url: string) {
    return new HistoryApi(new Configuration({ basePath: url }));
  }
}
