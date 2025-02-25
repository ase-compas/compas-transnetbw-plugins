import { map, Observable } from 'rxjs';
import {
  type ArchivedResourcesSearch,
  ArchivingApi,
  Configuration,
  type Location,
  LocationsApi,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';
import { LocationModel } from '../domain';
import type { SearchParams } from '../domain/search-params.interface';
import { ArchivedResourceModel } from '../domain/archived-resource.model';

export class LocationViewerService {
  private static instance: LocationViewerService;
  private readonly endpoint = 'http://localhost:9090/compas-scl-data-service';
  private readonly locationsApiClient: LocationsApi;
  private readonly archivingApiClient: ArchivingApi;

  private constructor() {
    this.locationsApiClient = this.createLocationsApiClient(this.endpoint);
    this.archivingApiClient = this.createArchivingApiClient(this.endpoint);
  }

  public static getInstance(): LocationViewerService {
    if (!LocationViewerService.instance) {
      LocationViewerService.instance = new LocationViewerService();
    }
    return LocationViewerService.instance;
  }

  public getLocations(params?: {
    page?: number;
    pageSize?: number;
  }): Observable<Location[]> {
    return this.locationsApiClient
      .getLocations({
        page: params?.page,
        pageSize: params?.pageSize,
      })
      .pipe(
        map((response) => response || []),
        map((data) => data.map((item) => LocationModel.from(item)))
      );
  }

  public searchArchivedResources(
    params: SearchParams
  ): Observable<ArchivedResourceModel[]> {
    console.log(params);
    return this.archivingApiClient
      .searchArchivedResources({
        archivedResourcesSearch: this.mapToArchivedResourcesSearch(params),
      })
      .pipe(
        map((response: any) => response.results),
        map((data: any[]) =>
          data.map((item: any) => ArchivedResourceModel.from(item))
        )
      );
  }

  private mapToArchivedResourcesSearch(
    params: SearchParams
  ): ArchivedResourcesSearch {
    return {
      uuid: params.uuid || null,
      location: params.location || null,
      name: params.name || null,
      approver: params.approver || null,
      contentType: params.contentType || null,
      type: params.type || null,
      voltage: params.voltage || null,
      from: params.from || null,
      to: params.to || null,
    };
  }

  private createLocationsApiClient(url: string): LocationsApi {
    const config = new Configuration({
      basePath: url,
      // accessToken: authInfo.token,
    });
    return new LocationsApi(config);
  }

  private createArchivingApiClient(url: string): ArchivingApi {
    const config = new Configuration({
      basePath: url,
      // accessToken: authInfo.token,
    });
    return new ArchivingApi(config);
  }
}
