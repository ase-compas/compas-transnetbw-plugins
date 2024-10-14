
import { Observable, map, switchMap, from, tap, filter } from 'rxjs';
import { FileSearchResult, SearchParams } from '../domain';
import { Configuration, DataResourceSearch, SclApi, ServerConfiguration } from '@oscd-transnet-plugins/oscd-api-client';

export class VersionEditorFileService {
  private static instance: VersionEditorFileService;

  private constructor() {
  }

  public static getInstance(): VersionEditorFileService {
    if (!VersionEditorFileService.instance) {
      VersionEditorFileService.instance = new VersionEditorFileService();
    }
    return VersionEditorFileService.instance;
  }

  searchFiles(params: SearchParams): Observable<FileSearchResult[]> {
    const sclApiClient = this.generateApiClient('http://localhost:9090/compas-scl-data-service');
    return sclApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(params),
    }).pipe(
      filter((response: any) => !!response || !!response.results),
      map((response: any) => response.results),
      map((data: any[]) => data.map((item: any) => this.mapToFileSearchResult(item))),
    );
  }

  private mapToFileSearchResult(data: any): FileSearchResult {
    console.log(data);
    return new FileSearchResult(
      data.uuid,
      data.name,
      data.author,
      data.type,
      new Date(data.changedAt),
      data.version,
    );
  }

  private mapToDataResourceSearch(params: SearchParams): DataResourceSearch {
    return {
      uuid: params.uuid || '',
      type: params.type || '',
      name: params.name || '',
      author: params.author || ''
    };
  }

  private generateApiClient(url: string) {
    const config = new Configuration({
      basePath: url,
      // accessToken: authInfo.token,
    })

    return new SclApi(config);
  }
}
