import {
  Configuration,
  type Location,
  LocationsApi,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';
import { catchError, type Observable, of, take } from 'rxjs';

export class LocationService {
  private static instance: LocationService;

  private baseUrl = '/compas-scl-data-service';

  private constructor() {
    //
  }

  public static getInstance(): LocationService {
    if (!LocationService.instance) {
      LocationService.instance = new LocationService();
    }
    return LocationService.instance;
  }

  listLocations(): Observable<Location[]> {
    return this.generateApiClient()
      .getLocations({})
      .pipe(
        take(1),
      );
  }

  private generateApiClient() {
    const config = new Configuration({
      basePath: this.baseUrl,
      // accessToken: authInfo.token,
    });
    return new LocationsApi(config);
  }
}
