import { map, Observable } from 'rxjs';
import {
  Configuration as ArchivingApiConfiguration,
  LocationsApi,
  type Location,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';
import {
  Configuration as HistoryApiConfiguration,
  HistoryApi,
  type DataResourceSearch,

} from '@oscd-transnet-plugins/oscd-history-api-client';
import { LocationModel, SclResourceModel } from '../domain';


export class LocationViewerService {
  private static instance: LocationViewerService;
  private readonly endpoint = '/compas-scl-data-service';
  private readonly locationsApiClient: LocationsApi;
  private readonly historyApiClient: HistoryApi;

  private constructor() {
    this.locationsApiClient = this.createLocationsApiClient(this.endpoint);
    this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }

  public static getInstance(): LocationViewerService {
    if (!LocationViewerService.instance) {
      LocationViewerService.instance = new LocationViewerService();
    }
    return LocationViewerService.instance;
  }

  public getLocations(params?: { page?: number; pageSize?: number }): Observable<Location[]> {
    return this.locationsApiClient.getLocations({
      page: params?.page,
      pageSize: params?.pageSize
    }).pipe(
      map((response) => response || []),
      map((data) => data.map(item => LocationModel.from(item)))
    );
  }

  public assignResourceToLocation(locationId: string, uuid: string): Observable<Location[]> {
    return this.locationsApiClient.assignResourceToLocation({locationId, uuid}).pipe(map(() => undefined));
  }

  public unassignResourceFromLocation(locationId: string, uuid: string): Observable<Location[]> {
    return this.locationsApiClient.unassignResourceFromLocation({locationId, uuid}).pipe(map(() => undefined));
  }

  public searchResources(params: DataResourceSearch): Observable<SclResourceModel[]> {
    return this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(params),
    }).pipe(
      map((response: any) => { return response.results}),
      map((data: any[]) => data.map((item: any) => SclResourceModel.from(item))
      )
    )
  }

  private mapToDataResourceSearch(params: DataResourceSearch):  DataResourceSearch {
    return {
      uuid: params.uuid || null,
      type: params.type || null,
      name: params.name || null,
      author: params.author || null,
      location: params.location || null,
      from: params.from || null,
      to: params.to || null,
    };
  }

  private createLocationsApiClient(url: string): LocationsApi {
    const config = new ArchivingApiConfiguration({
      basePath: url,
      // accessToken: authInfo.token,
    });
    return new LocationsApi(config);
  }

  private createHistoryApiClient(url: string): HistoryApi {
    const config = new HistoryApiConfiguration({
      basePath: url,
      // accessToken: authInfo.token,
    });
    return new HistoryApi(config);
  }
}
