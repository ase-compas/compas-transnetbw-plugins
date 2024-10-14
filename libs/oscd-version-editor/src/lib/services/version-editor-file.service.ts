
import { Observable, map, switchMap, from, tap, filter } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { FileSearchResult, SearchParams } from '../domain';

export class VersionEditorFileService {
  private static instance: VersionEditorFileService;

  private constructor() {}

  public static getInstance(): VersionEditorFileService {
    if (!VersionEditorFileService.instance) {
      VersionEditorFileService.instance = new VersionEditorFileService();
    }
    return VersionEditorFileService.instance;
  }

  searchFiles(params: SearchParams): Observable<FileSearchResult[]> {
    return fromFetch('http://localhost:3000/api/scl/search', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    }).pipe(
      switchMap(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return from(response.json());
      }),
      filter((response: any) => response && response.results),
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
}
