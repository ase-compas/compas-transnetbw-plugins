import type {
  ArchivedResource,
  ArchivedResources,
  ArchivedResourcesSearch,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';
import {
  ArchivingApi,
  Configuration,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';
import { from, map, Observable, take } from 'rxjs';
import { ArchiveSearchResult } from '../domain';

export class ArchiveExplorerService {
  private static instance: ArchiveExplorerService;
  private readonly baseUrl = '/compas-scl-data-service';
  private readonly apiClient: ArchivingApi;

  private constructor() {
    this.apiClient = this.generateApiClient();
  }

  public static getInstance(): ArchiveExplorerService {
    if (!ArchiveExplorerService.instance) {
      ArchiveExplorerService.instance = new ArchiveExplorerService();
    }
    return ArchiveExplorerService.instance;
  }

  searchArchive(
    archivedResourcesSearch: ArchivedResourcesSearch
  ): Observable<ArchiveSearchResult[]> {
    return this.apiClient
      .searchArchivedResources({ archivedResourcesSearch })
      .pipe(
        take(1),
        map((result: ArchivedResources) => result.resources),
        map((resources) => this.mapResourcesToArchiveSearchResults(resources))
      );
  }

  retrieveArchivedResourceHistory(
    uuid: string
  ): Observable<ArchiveSearchResult[]> {
    return this.apiClient
      .retrieveArchivedResourceHistory({ id: uuid })
      .pipe(
        take(1),
        map((res) => res.versions),
        map((resources) => this.mapResourcesToArchiveSearchResults(resources))
      );
  }

  findByUUIDAndVersion(
    uuid: string,
    type: string,
    version: string
  ): Observable<Blob> {
    return from(
      fetch(`${this.baseUrl}/scl/v1/${type}/${uuid}/${version}`).then((r) => {
        if (r.status >= 200 && r.status < 300) {
          return r.blob();
        }

        throw new Error(
          'Unable to download resource: ' + r.status + ' ' + r.statusText
        );
      })
    );
  }

  archiveSclFile(
    uuid: string,
    version: string
  ): Observable<ArchivedResource> {
    return this.apiClient.archiveSclResource({ id: uuid, version });
  }

  private mapResourcesToArchiveSearchResults(
    resources: ArchivedResource[] | undefined
  ): ArchiveSearchResult[] {
    if (!resources?.length) {
      return [];
    }

    return resources.map((resource) => this.mapToArchiveSearchResult(resource));
  }

  private mapToArchiveSearchResult(
    data: ArchivedResource
  ): ArchiveSearchResult {
    return new ArchiveSearchResult(
      data.uuid,
      data.name,
      data.location,
      data.note,
      data.author,
      data.approver,
      data.type,
      data.voltage,
      new Date(data.modifiedAt).toDateString(),
      new Date(data.archivedAt).toDateString(),
      data.contentType,
      data.version,
      data.fields
    );
  }

  private generateApiClient(): ArchivingApi {
    const config = new Configuration({
      basePath: this.baseUrl,
      // accessToken: authInfo.token,
    });
    return new ArchivingApi(config);
  }
}
