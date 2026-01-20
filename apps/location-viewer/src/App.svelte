<script module>
  import { setupTranslation } from '@oscd-transnet-plugins/oscd-localization';
  import de from './i18n/de.json';
  import en from './i18n/en.json';

  setupTranslation({
    en,
    de
  });
</script>
<script lang="ts">
  import { OscdFilterBuilder, OscdFilterTab } from '@oscd-transnet-plugins/oscd-component';
  import {
    LocationViewerService,
    ResourceStore,
    SclResourceModel
  } from '@oscd-transnet-plugins/oscd-location-viewer';
  import type { SearchParams } from '@oscd-transnet-plugins/oscd-location-viewer';
  import { onMount } from 'svelte';
  import {
    OscdDataTable
  } from '@oscd-transnet-plugins/oscd-component';
  import { _ } from 'svelte-i18n';
  import 'svelte-material-ui/bare.css';
  import '../public/material-icon.css';
  import '../public/global.css';
  import '../public/smui.css';
  import LocationCell from './LocationCell.svelte';
  import type { FilterDefinition } from '../../../libs/oscd-component/src/oscd-filter-builder/types';
  import { Subject } from 'rxjs';
  import { tap, finalize, switchMap, debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

  const locationViewerService = LocationViewerService.getInstance();
  let locations: { label: string, value: string }[] = $state([]);
  let selectedLocationUUID: string = $state('');

  //loading quickfix for css to load
  let loading = $state(true);
  let searchText = $state('');

  const searchTrigger$ = new Subject<void>();
  const search$ = searchTrigger$.pipe(
    debounceTime(150),
    map(() => convertFilterToSearchParams(filterDefinitions)),
    distinctUntilChanged(
      (a, b) => JSON.stringify(a) === JSON.stringify(b)
    ),
    tap(() => {
      loading = true;
    }),
    switchMap(searchParams =>
      locationViewerService.searchResources(searchParams).pipe(
        tap((data: SclResourceModel[]) => {
          searchResourceStore.set(data.filter((item) => item.location !== selectedLocationUUID));
        }),
        finalize(() => {
          loading = false;
        })
      )
    )
  );

  onMount(() => {
    const sub = search$.subscribe();
    locationViewerService.getLocations().subscribe({
      next: (data) => {
        locations = data.map((item) => ({ label: item.name, value: item.uuid }));
        filterDefinitions = filterDefinitions.map(f => f.key === 'location' ? { ...f, options: locations } : f); // populate location filter options
      }
    });
    searchTrigger$.next();
    return () => sub.unsubscribe();
  });

  let filterDefinitions: FilterDefinition[] = $state([
    {
      key: "type",
      label: "Type",
      type: "select",
      options: [
        { value: 'SSD', label: 'SSD' },
        { value: 'IID', label: 'IID' },
        { value: 'ICD', label: 'ICD' },
        { value: 'SCD', label: 'SCD' },
        { value: 'CID', label: 'CID' },
        { value: 'SED', label: 'SED' },
        { value: 'ISD', label: 'ISD' },
        { value: 'STD', label: 'STD' }
      ]
    },
    {
      key: "author",
      label: "Author",
      type: "text"
    },
    {
      key: "from",
      label: "Date from",
      type: "date"
    },
    {
      key: "to",
      label: "Date to",
      type: "date"
    },
    {
      key: "location",
      label: "Location",
      type: "select",
    }
  ]);

  // Resource stores for the two tables
  const locationResourceStore = new ResourceStore();
  const searchResourceStore = new ResourceStore();

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  function formatLocation(uuid: string) {
    if (!locations || !uuid) return uuid || '';
    return locations.find(l => l.value === uuid)?.label ?? uuid;
  }

  function convertFilterToSearchParams(filters: FilterDefinition[]): SearchParams {
    const searchParams: SearchParams = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };

    // Map filter values to searchParams
    filters.forEach((filter) => {
      if (filter.value && filter.key in searchParams) {
        searchParams[filter.key] = filter.value;
      }
    });

    // Include searchText in filename search
    if (searchText && searchText.trim() !== '') {
      searchParams.name = searchText.trim();
    }

    return searchParams;
  }

  function handleRowLocationChange(row: SclResourceModel, newLocationUuid: string) {
    const prev = row.location;
    const next = newLocationUuid || null;

    if (prev === next) {
      return;
    }

    // optimistic UI update
    const updatedRow = { ...row, location: next };

    // Update search store: ensure row reflects new location so it may move out of search list if equals selected
    searchResourceStore.update(updatedRow);
    // Update location store depending on selected filter
    if (selectedLocationUUID) {
      if (next === selectedLocationUUID) {
        // moved into selected location
        locationResourceStore.add(updatedRow);
      } else {
        // moved away from selected location
        locationResourceStore.remove(row.uuid);
      }
    }

    // server-side update
    const obs = next
      ? locationViewerService.assignResourceToLocation(next, row.uuid)
      : locationViewerService.unassignResourceFromLocation(prev ?? '', row.uuid);

    obs.subscribe({
      next: () => {
        // refresh search to keep in sync
        searchTrigger$.next();
      },
      error: () => {
        // revert on error
        const revertRow = { ...row, location: prev };
        searchResourceStore.update(revertRow);
        if (selectedLocationUUID) {
          if (prev === selectedLocationUUID) {
            locationResourceStore.add(revertRow);
          } else {
            locationResourceStore.remove(row.uuid);
          }
        }
      }
    });
  }

  let searchColumnDefs = $derived([
    { headerName: $_('name'), field: 'name', numeric: false, filter: false, filterType: 'text', sortable: true },
    { headerName: $_('author'), field: 'author', numeric: false, filter: false, filterType: 'text', sortable: true },
    { headerName: $_('type'), field: 'type', numeric: false, filter: false, filterType: 'text', sortable: true },
    {
      headerName: $_('location'),
      field: 'location',
      numeric: false,
      filter: false,
      filterType: 'text',
      sortable: true,
      cellRenderer: LocationCell,
      cellRendererProps: { locations, onChange: handleRowLocationChange },

      filterValueGetter: (row: SclResourceModel) => formatLocation(row.location)
    },
    { headerName: $_('version'), field: 'version', numeric: false, filter: false, filterType: 'text', sortable: true },
    { headerName: $_('changed_at'), field: 'changedAt', numeric: false, filter: false, filterType: 'text', sortable: true, valueFormatter: formatDate },
  ]);

  $effect(() => {
    if (!selectedLocationUUID) {
      return;
    }

    const subscription = locationViewerService.searchResources({}).subscribe({
      next: (data) => {
        console.log({ data, selectedLocation: selectedLocationUUID });
        locationResourceStore.set(data.filter((item) => item.location === selectedLocationUUID));
      },
      error: (err) => {
        console.error('Error loading resources:', err);
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<div class="app-container">
  <OscdFilterTab
    bind:filters={filterDefinitions}
    bind:searchText={searchText}
    searchLabel="Search name..."
    onFilterChange={() => searchTrigger$.next(null)}
    onSearchInput={() => searchTrigger$.next(null)}
  />
  <OscdDataTable columnDefs={searchColumnDefs}
                 loadingDone={!loading}
                 store={searchResourceStore}
                 searchInputLabel={$_('search')} />
</div>

<style>
  .app-container {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>
