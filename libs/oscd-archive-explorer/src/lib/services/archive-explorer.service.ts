import type {
  ArchivedResource,
  ArchivedResources,
  ArchivedResourcesSearch,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';
import {
  ArchivingApi,
  Configuration,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';
import { catchError, delay, map, Observable, of, take } from 'rxjs';
import { ArchiveSearchResult } from '../domain';

export class ArchiveExplorerService {
  private static instance: ArchiveExplorerService;
  private baseUrl = 'http://localhost:9090/compas-scl-data-service';

  private constructor() {
    //
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
    return this.generateApiClient()
      .searchArchivedResources({ archivedResourcesSearch })
      .pipe(
        take(1),
        map((result: ArchivedResources) => result.resources),
        map((resources) =>
          resources.map((resource) => this.mapToArchiveSearchResult(resource))
        ),
        catchError(() => {
          // Dummy data until the service is implemented
          return of([
            new ArchiveSearchResult(
              crypto.randomUUID(),
              'Dummy name',
              'My Note',
              'Jane Doe',
              'John Doe',
              'Leittechnik',
              '220',
              this.formatDate(new Date().toISOString()),
              this.formatDate(new Date().toISOString()),
              'SCD',
              '1.0.0',
              []
            ),
            new ArchiveSearchResult(
              crypto.randomUUID(),
              'Dummy name 2',
              'My Note 2',
              'Jane Doe',
              'John Doe',
              'Leittechnik',
              '220',
              this.formatDate(new Date().toISOString()),
              this.formatDate(new Date().toISOString()),
              'PDF',
              '4.1.0',
              []
            ),
          ]);
        }),
        delay(500)
      );
  }

  retrieveArchivedResourceHistory(
    uuid: string
  ): Observable<ArchiveSearchResult[]> {
    return this.generateApiClient()
      .retrieveArchivedResourceHistory({ id: uuid })
      .pipe(
        take(1),
        map((res) => res.versions),
        map((resources) =>
          resources.map((resource) => this.mapToArchiveSearchResult(resource))
        ),
        catchError(() => {
          return of([
            new ArchiveSearchResult(
              crypto.randomUUID(),
              'Dummy name',
              'My Note',
              'Jane Doe',
              'John Doe',
              'Leittechnik',
              '220',
              this.formatDate(new Date().toISOString()),
              this.formatDate(new Date().toISOString()),
              'SCD',
              '2.0.0',
              []
            ),
            new ArchiveSearchResult(
              crypto.randomUUID(),
              'Dummy name',
              'My Note 2',
              'Jane Doe',
              'John Doe',
              'Leittechnik',
              '220',
              this.formatDate(new Date().toISOString()),
              this.formatDate(new Date().toISOString()),
              'PDF',
              '5.1.0',
              []
            ),
          ]);
        })
      );
  }

  private mapToArchiveSearchResult(
    data: ArchivedResource
  ): ArchiveSearchResult {
    return new ArchiveSearchResult(
      data.uuid,
      data.name,
      data.note,
      data.author,
      data.aprover,
      data.type,
      data.voltage,
      this.formatDate(data.modifiedAt),
      this.formatDate(data.archivedAt),
      data.contentType,
      data.version,
      data.fields
    );
  }

  private formatDate(dateString: string) {
    if (!dateString) {
      return '';
    }

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return '';
    }

    return Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }

  private generateApiClient() {
    const config = new Configuration({
      basePath: this.baseUrl,
      // accessToken: authInfo.token,
    });
    return new ArchivingApi(config);
  }
}
