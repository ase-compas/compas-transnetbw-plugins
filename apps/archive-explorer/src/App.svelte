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
    OscdExpansionPanel,
    OscdFilterTab, OscdToastHost } from '@oscd-transnet-plugins/oscd-component';
  import LinearProgress from '@smui/linear-progress';
  import {
    ArchiveExplorerService,
    ArchiveSearchResult,
  } from '@oscd-transnet-plugins/oscd-archive-explorer';
  import {
    combineLatest,
    BehaviorSubject,
    catchError,
    of,
    merge,
    startWith,
    distinctUntilChanged
  } from 'rxjs';
  import ArchivedResources from './search-result/ArchivedResources.svelte';
  import { _ } from 'svelte-i18n';
  import 'svelte-material-ui/bare.css';
  import '../public/material-icon.css';
  import '../public/global.css';
  import '../public/smui.css';
  import type { FilterDefinition } from '../../../libs/oscd-component/src/oscd-filter-builder/types';
  import { debounceTime, map, switchMap, shareReplay } from 'rxjs/operators';
  import type { SearchParams } from '../../../libs/oscd-archive-explorer/src/lib/domain/search-params.interface';
  import { LocationService } from '../../../libs/oscd-archive-explorer/src/lib/services/location.service';
  import { onMount } from 'svelte';
  import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';

  const archiveExplorerService = ArchiveExplorerService.getInstance();
  const locationService = LocationService.getInstance();

  let searchResults: Map<string, ArchiveSearchResult[]> = $state(new Map());
  let loading = $state(true);
  let locations: Map<string, string> = $state(new Map());

  let filterDefinitions: FilterDefinition[] = $state([
    {
      key: 'type', label: 'Type', type: 'select', options: [
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
    { key: 'author', label: 'Author', type: 'text' },
    { key: 'from', label: 'Date from', type: 'date' },
    { key: 'to', label: 'Date to', type: 'date' },
    { key: 'location', label: 'Location', type: 'select' }
  ]);

  let searchText: string = $state('');

  const filters$ = new BehaviorSubject<FilterDefinition[]>([]);
  const searchText$ = new BehaviorSubject<string>('');

  // Fetch locations and store as Observable
  const locations$ = locationService.listLocations().pipe(
    map(locs => {
      const locMap = new Map(locs.map(l => [l.uuid, l.name]));
      // Update filter options
      const locFilter = filterDefinitions.find(f => f.key === 'location');
      if (locFilter) {
        locFilter.options = locs.map(loc => ({ value: loc.uuid, label: loc.name }));
      }
      locations = locMap;
      return locMap;
    }),
    catchError(err => {
      console.error('Error fetching locations:', err);
      toastService.error('Failed to load locations.');
      return of(new Map());
    }),
    shareReplay(1)
  );


  function convertFilterToSearchParams(filters: FilterDefinition[], text: string): SearchParams {
    const searchParams: SearchParams = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      from: null,
      to: null
    };

    // Map filter values to searchParams
    filters.forEach((filter) => {
      if (!filter.value) return;

      // Date filters
      if (filter.type === 'date') {
        const date = new Date(filter.value);

        if (filter.key === 'from') {
          searchParams.from = date.toISOString();
        }

        if (filter.key === 'to') {
          date.setHours(23, 59, 59, 999);
          searchParams.to = date.toISOString();
        }

        return;
      }

      // Normal filters
      if (filter.key in searchParams) {
        searchParams[filter.key as keyof SearchParams] = filter.value;
      }

    });

    // Include searchText in filename search
    if (text && text.trim() !== '') {
      searchParams.name = text.trim();
    }

    return searchParams;
  }

  // Reactive search params
  const searchParams$ = combineLatest([filters$, searchText$]).pipe(
    debounceTime(300),
    distinctUntilChanged((prev,curr) => JSON.stringify(prev) === JSON.stringify(curr)),
    map(([filters, text]) => convertFilterToSearchParams(filters, text))
  );

  // Combined search + locations
  const search$ = searchParams$.pipe(
    switchMap(params =>
      combineLatest({
        results: archiveExplorerService.searchArchive(params).pipe(
          catchError(err => {
            console.error('Search error:', err);
            toastService.error('Search failed. Please try again later.');
            return of([] as ArchiveSearchResult[]);
          })
        ),
        locations: locations$
      }).pipe(
        map(({ results, locations }) => {
          const grouped = new Map<string, ArchiveSearchResult[]>();
          for (const r of results) {
            const loc = r.location ?? 'Default';
            if (!grouped.has(loc)) grouped.set(loc, []);
            grouped.get(loc)!.push(r);
          }
          return { grouped, locations };
        })
      )
    ),
    shareReplay(1)
  );

  // Loading state
  const loading$ = merge(
    searchParams$.pipe(map(() => true)),
    search$.pipe(map(() => false))
  ).pipe(startWith(true));

  onMount(() => {
    const sub = combineLatest([search$, loading$]).subscribe(([data, isLoading]) => {
      loading = isLoading;
      searchResults = data.grouped;
      locations = data.locations;
    });

    // Trigger initial search
    filters$.next(filterDefinitions);
    searchText$.next(searchText);

    return () => sub.unsubscribe();
  });
</script>

<!--
  Before all CSS is loaded, the select box expansion icons are briefly displayed extremely large.
  Setting display: none and overriding it in the CSS after it is loaded prevents this.
-->
<div class="oscd-app">
  <div class="search-filter">
    <OscdFilterTab
      bind:filters={filterDefinitions}
      bind:searchText={searchText}
      searchLabel="Search file name..."
      onFilterChange={() => filters$.next(filterDefinitions)}
      onSearchInput={() => searchText$.next(searchText)}
    />
  </div>

  <div class="content-container">
    {#if loading}
      <LinearProgress indeterminate/>
    {:else}
      {#if searchResults.size}
        {#each searchResults as result, index (result)}
          <!-- result[0] => UUID of the location -->
          <!-- result[1] => ArchiveSearchResult[] -->
          <OscdExpansionPanel
            open={true}
            title={locations.get(result[0]) ?? 'Unknown'}
          >
            {#snippet content()}
              <span>
                <ArchivedResources
                  searchResults={result[1]}
                  noResourcesLabel={$_('no_resources_found')}
                />
              </span>
            {/snippet}
          </OscdExpansionPanel>
          <div class="separator"></div>
        {/each}
      {/if}
    {/if}
  </div>
</div>
<OscdToastHost />

<style>
  .content-container {
    padding: 1rem 0;
  }

  .search-filter {
    display: flex;
    gap: 1rem;
  }

  .separator {
    height: 1rem;
  }
</style>
