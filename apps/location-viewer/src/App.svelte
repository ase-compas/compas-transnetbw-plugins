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
  import {
    LocationViewerService,
    ResourceStore,
    SclResourceModel
  } from '@oscd-transnet-plugins/oscd-location-viewer';
  import type { SearchParams } from '@oscd-transnet-plugins/oscd-location-viewer';
  import { onMount } from 'svelte';
  import {
    OscdDataTable,
    OscdLoadingSpinner,
  } from '@oscd-transnet-plugins/oscd-component';
  import type { ActiveFilter } from '@oscd-transnet-plugins/oscd-component';
  import { take, tap } from 'rxjs/operators';
  import { _ } from 'svelte-i18n';
  import 'svelte-material-ui/bare.css';
  import '../public/material-icon.css';
  import '../public/global.css';
  import '../public/smui.css';
  import LocationCell from './LocationCell.svelte';

  const locationViewerService = LocationViewerService.getInstance();
  let locations: { label: string, value: string }[] = $state([]);
  let selectedLocationUUID: string = $state('');

  //loading quickfix for css to load
  let loading = $state(true);

  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 200);
  });

  onMount(() => {
    locationViewerService.getLocations().subscribe({
      next: (data) => {
        locations = data.map((item) => ({ label: item.name, value: item.uuid }));
      }
    });
    search();
  });

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


  let filtersToSearch: ActiveFilter[] = $state([]);

  function search() {
    const searchParams = convertFilterToSearchParams(filtersToSearch);
    locationViewerService.searchResources(searchParams).pipe(
      take(1),
      tap((data: SclResourceModel[]) => {
        searchResourceStore.set(data.filter((item) => item.location !== selectedLocationUUID));
      })
    ).subscribe();
  }

  function convertFilterToSearchParams(filters: ActiveFilter[]): SearchParams {
    const searchParams: SearchParams = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    console.log('Convert filter to search params: ', filters);
    filters.forEach((filter) => {
      console.log('KEY:', filter.key);
      if (filter.key === 'from' || filter.key === 'to') {
        searchParams[filter.key] = new Date(filter.value).toISOString();
      } else {
        searchParams[filter.key] = filter.value;
      }
    });
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
        search();
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
    { headerName: $_('name'), field: 'name', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('author'), field: 'author', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('type'), field: 'type', numeric: false, filter: true, filterType: 'text', sortable: true },
    {
      headerName: $_('location'),
      field: 'location',
      numeric: false,
      filter: true,
      filterType: 'text',
      sortable: true,
      cellRenderer: LocationCell,
      cellRendererProps: { locations, onChange: handleRowLocationChange },

      filterValueGetter: (row: SclResourceModel) => formatLocation(row.location)
    },
    { headerName: $_('version'), field: 'version', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('changed_at'), field: 'changedAt', numeric: false, filter: true, filterType: 'text', sortable: true, valueFormatter: formatDate },
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

{#if loading}
  <OscdLoadingSpinner loadingDone={!loading} />
{:else}
  <div class="app-container">
    <h3 style="margin-bottom: 1rem;">{$_('search_result')}</h3>
    <OscdDataTable columnDefs={searchColumnDefs}
                   store={searchResourceStore}
                   searchInputLabel={$_('search')} />
  </div>
{/if}

<style>
  .app-container {
    padding: 2rem;
  }

  h3 {
    margin-top: 0;
  }
</style>
