import type {
  ActiveFilter,
  FilterType,
} from '@oscd-transnet-plugins/oscd-component';
import { lastValueFrom, map, take, tap } from 'rxjs';
import type { SearchParams } from '../domain/search-params.interface';
import { LocationService } from './location.service';
import { LocationStore } from '../store';

export class ArchiveFilterService {
  private static instance: ArchiveFilterService;

  private readonly locationService = LocationService.getInstance();
  private readonly archiveExplorerLocationStore = LocationStore.getInstance();

  private constructor() {
    //
  }

  public static getInstance(): ArchiveFilterService {
    if (!ArchiveFilterService.instance) {
      ArchiveFilterService.instance = new ArchiveFilterService();
    }
    return ArchiveFilterService.instance;
  }

  convertFilterToSearchParams(filters: ActiveFilter[]): SearchParams {
    const searchParams: SearchParams = {
      uuid: null,
      type: null,
      contentType: null,
      name: null,
      location: null,
      approver: null,
      voltage: null,
      from: null,
      to: null,
    };

    filters
      .filter((f) => !f.disabled)
      .forEach((filter) => {
        console.log('KEY:', filter.key);
        if (filter.key === 'from' || filter.key === 'to') {
          searchParams[filter.key] = new Date(filter.value).toISOString();
        } else {
          searchParams[filter.key] = filter.value;
        }
      });
    return searchParams;
  }

  createLocationFilter(): Promise<FilterType[]> {
    return lastValueFrom(
      this.locationService.listLocations().pipe(
        take(1),
        tap((locations) => {
          // Archive search uses location.key for grouping and filtering
          const locationKeyToNameMap = new Map<string, string>();

          locations.forEach((location) => {
            locationKeyToNameMap.set(location.key, location.name);
          });

          this.archiveExplorerLocationStore.updateData(locationKeyToNameMap);
        }),
        map((locations) => {
          return [
            {
              id: 1,
              key: 'location',
              label: 'Location',
              inputType: {
                id: 2,
                type: 'select',
                validatorFn: () => true,
                options:
                  locations?.map((location) => ({
                    value: location.key,
                    label: location.name,
                  })) || [],
              },
              allowedOperations: ['='],
            },
          ];
        })
      )
    );
  }

  createArchiveFilter(): FilterType[] {
    return [
      {
        id: 2,
        key: 'uuid',
        label: 'UUID',
        inputType: {
          id: 1,
          type: 'string',
          validatorFn: () => true,
          options: [],
        },
        allowedOperations: ['='],
      },
      {
        id: 4,
        key: 'approver',
        label: 'Approver',
        inputType: {
          id: 1,
          type: 'string',
          validatorFn: () => true,
          options: [],
        },
        allowedOperations: ['='],
      },
      {
        id: 3,
        key: 'type',
        label: 'Type',
        inputType: {
          id: 2,
          type: 'select',
          validatorFn: () => true,
          options: [
            { value: 'SSD', label: 'SSD' },
            { value: 'IID', label: 'IID' },
            { value: 'ICD', label: 'ICD' },
            { value: 'SCD', label: 'SCD' },
            { value: 'CID', label: 'CID' },
            { value: 'SED', label: 'SED' },
            { value: 'ISD', label: 'ISD' },
            { value: 'STD', label: 'STD' },
          ],
        },
        allowedOperations: ['='],
      },
    ];
  }
}
