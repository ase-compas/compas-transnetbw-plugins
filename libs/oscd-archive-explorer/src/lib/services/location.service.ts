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
        catchError(() => {
          // Dummy data until the service is implemented
          return of([
            {
              uuid: '912e83a1-f84e-4d0d-9432-b5381e2b9e0d',
              name: 'Location 1',
              description: '',
              key: '',
            },
            {
              uuid: 'b9d01044-7bc7-4430-93b3-86ff093319e6',
              name: 'Location 2',
              description: '',
              key: '',
            },
            {
              uuid: 'f8435ba3-0c92-4ea3-ade0-5d72458c95c7',
              name: 'Location 3',
              description: '',
              key: '',
            },
          ]);
        })
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
