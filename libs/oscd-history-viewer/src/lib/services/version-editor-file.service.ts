import { filter, map, Observable } from 'rxjs';
import { FileSearchResult } from '../domain';
import type { SearchParams } from '../domain';
import { Configuration, HistoryApi } from '@oscd-transnet-plugins/oscd-history-api-client';
import type { DataResourceSearch } from '@oscd-transnet-plugins/oscd-history-api-client';

export class VersionEditorFileService {
  private static instance: VersionEditorFileService;


  private endpoint = '/compas-scl-data-service';

  private constructor() {}

  public static getInstance(): VersionEditorFileService {
    if (!VersionEditorFileService.instance) {
      VersionEditorFileService.instance = new VersionEditorFileService();
    }
    return VersionEditorFileService.instance;
  }

  searchFiles(params: SearchParams): Observable<FileSearchResult[]> {
    const sclApiClient = this.generateApiClient(this.endpoint);
    return sclApiClient
      .searchForResources({
        dataResourceSearch: this.mapToDataResourceSearch(params),
      })
      .pipe(
        filter((response: any) => !!response || !!response.results),
        map((response: any) => response.results),
        map((data: any[]) =>
          data.map((item: any) => this.mapToFileSearchResult(item))
        )
      );
  }

  getHistoryFiles(uuid: string): Observable<any[]> {
    const sclApiClient = this.generateApiClient(this.endpoint);
    return sclApiClient
      .retrieveDataResourceHistory({
        id: uuid,
      })
      .pipe(
        filter((response: any) => !!response || !!response.versions),
        map((response: any) => response.versions),
        map((data: any[]) =>
          data.map((item: any) => this.mapToFileSearchResult(item))
        )
      );
  }

  deleteResource(uuid: string): Observable<void> {
    const sclApiClient = this.generateApiClient(this.endpoint);
    return sclApiClient.deleteAllSclFileVersions({id: uuid});
  }

  downloadSclData(
    uuid: string,
    type: string,
    version: string
  ): Observable<Blob> {
    const sclApiClient = this.generateApiClient(this.endpoint);
    return sclApiClient.retrieveDataResourceByVersion({
      id: uuid,
      version: version,
    });
  }

  private mapToFileSearchResult(data: any): FileSearchResult {
    console.log("data", data);
    return new FileSearchResult(
      data.uuid,
      data.name,
      data.author,
      data.type,
      new Date(data.changedAt),
      data.version,
      data.comment,
      data.archived,
      data.available
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
    const config = new Configuration({
      basePath: url,
      // accessToken: authInfo.token,
    });
    return new HistoryApi(config);
  }
}
