import { map, Observable } from 'rxjs';
import { Configuration, LocationsApi, type Location } from '@oscd-transnet-plugins/oscd-archiving-api-client';
import {LocationModel} from "../domain";

export class LocationManagerService {
  private static instance: LocationManagerService;
  private readonly endpoint = 'http://compas.northeurope.cloudapp.azure.com:9090/compas-scl-data-service';
  private readonly locationsApiClient: LocationsApi;

  private constructor() {
    this.locationsApiClient = this.createApiClient(this.endpoint);
  }

  public static getInstance(): LocationManagerService {
    if (!LocationManagerService.instance) {
      LocationManagerService.instance = new LocationManagerService();
    }
    return LocationManagerService.instance;
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

  public createLocation(location: LocationModel): Observable<Location> {
    return this.locationsApiClient.createLocation({ location }).pipe(
      map(response => LocationModel.from(response)),
    );
  }

  public deleteLocation(locationId: string): Observable<void> {
    return this.locationsApiClient.deleteLocation({ locationId }).pipe(map(() => undefined));
  }

  public updateLocation(params: { locationId: string, location: LocationModel }): Observable<Location> {
    return this.locationsApiClient.updateLocation({ locationId: params.locationId, location: params.location }).pipe(
      map(response => LocationModel.from(response))
    );
  }

  private createApiClient(url: string): LocationsApi {
    const config = new Configuration({
      basePath: url,
      // accessToken: authInfo.token,
    });
    return new LocationsApi(config);
  }
}
