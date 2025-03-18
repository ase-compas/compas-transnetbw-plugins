import type {
  ArchivedResource,
  ArchivedResources,
  ArchivedResourcesSearch,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';
import {
  ArchivingApi,
  Configuration,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';
import { catchError, delay, from, map, Observable, of, take } from 'rxjs';
import { ArchiveSearchResult } from '../domain';
import { v4 as uuidv4 } from 'uuid';
export class ArchiveExplorerService {
  private static instance: ArchiveExplorerService;
  private baseUrl = 'http://compas.northeurope.cloudapp.azure.com:9090/compas-scl-data-service';

  private dummySearchResults = [
    new ArchiveSearchResult(
      uuidv4(),
      'Dummy name',
      'My Note',
      'Jane Doe',
      'John Doe',
      'SCD',
      '220',
      this.formatDate(new Date().toISOString()),
      this.formatDate(new Date().toISOString()),
      'application/xml',
      '1.0.0',
      []
    ),
    new ArchiveSearchResult(
      uuidv4(),
      'Dummy name 2',
      'My Note 2',
      'Jane Doe',
      'John Doe',
      'SCD',
      '220',
      this.formatDate(new Date().toISOString()),
      this.formatDate(new Date().toISOString()),
      'application/xml',
      '4.1.0',
      []
    ),
  ];

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
          return of(this.dummySearchResults);
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
              uuidv4(),
              'Dummy name',
              'My Note',
              'Jane Doe',
              'John Doe',
              'SCD',
              '220',
              this.formatDate(new Date().toISOString()),
              this.formatDate(new Date().toISOString()),
              'application/xml',
              '2.0.0',
              []
            ),
            new ArchiveSearchResult(
              uuidv4(),
              'Dummy name',
              'My Note 2',
              'Jane Doe',
              'John Doe',
              'SCD',
              '220',
              this.formatDate(new Date().toISOString()),
              this.formatDate(new Date().toISOString()),
              'application/xml',
              '5.1.0',
              []
            ),
          ]);
        })
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

  private mapToArchiveSearchResult(
    data: ArchivedResource
  ): ArchiveSearchResult {
    return new ArchiveSearchResult(
      data.uuid,
      data.name,
      data.note,
      data.author,
      data.approver,
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
