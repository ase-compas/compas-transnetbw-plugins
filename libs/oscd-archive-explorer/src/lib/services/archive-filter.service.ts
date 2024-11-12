import type {
  ActiveFilter,
  FilterType,
} from '@oscd-transnet-plugins/oscd-component';
import { lastValueFrom, map, take, tap } from 'rxjs';
import type { SearchParams } from '../domain/search-params.interface';
import { LocationService } from './location.service';
import { LocationStore } from '../store/location-store';

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

    console.log('Convert filter to search params: ', filters);
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
          const locationIdToNameMap = new Map<string, string>();

          locations.forEach((location) => {
            locationIdToNameMap.set(location.uuid, location.name);
          });

          this.archiveExplorerLocationStore.updateData(locationIdToNameMap);
        }),
        map((locations) => {
          return [
            {
              id: 1,
              label: 'Location',
              inputType: {
                id: 2,
                type: 'select',
                validatorFn: () => true,
                options:
                  locations?.map((location) => ({
                    value: location.uuid,
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
        label: 'Content Type',
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
      // {
      //   id: 4,
      //   label: 'Type',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: 'Schütz', label: 'Schütz' },
      //       { value: 'Leittechnik', label: 'Leittechnik' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
      // {
      //   id: 5,
      //   label: 'Voltage',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: '380', label: '380' },
      //       { value: '220', label: '220' },
      //       { value: '110', label: '110' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
    ];
  }
}
