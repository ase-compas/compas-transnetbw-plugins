<script lang="ts">
  import {
    ActiveFilter,
    FilterType,
    OscdButton,
    OscdExpansionPanel,
    OscdFilterBox,
    OscdLoadingSpinner
  } from '@oscd-transnet-plugins/oscd-component';
  import { Icon, Label } from '@smui/button';
  import {
    ArchiveExplorerService,
    ArchiveExplorerStore,
    ArchiveFilterService,
    ArchiveSearchResult
  } from '@oscd-transnet-plugins/oscd-archive-explorer';
  import { onMount } from 'svelte';
  import { combineLatest, finalize, Observable, take, tap } from 'rxjs';
  import SearchResult from './search-result/SearchResult.svelte';
  import { ArchiveExplorerLocationStore } from '../../../libs/oscd-archive-explorer/src/lib/store/location-store';

  const archiveExplorerService = ArchiveExplorerService.getInstance();
  const archiveFilterService = ArchiveFilterService.getInstance();
  const archiveExplorerStore = ArchiveExplorerStore.getInstance();
  const archiveExplorerLocationStore = ArchiveExplorerLocationStore.getInstance();

  let filterTypes: FilterType[] = [];
  let locationFilterType: FilterType[] = [];
  let filtersToSearch: ActiveFilter[] = [];
  let locationFiltersToSearch: ActiveFilter[] = [];
  let searchResults: Map<string, ArchiveSearchResult[]> = new Map();

  let loadingDone = false;

  $: uuidFilterSelected = filtersToSearch.length && !!filtersToSearch?.find(f => f.key === 'uuid');

  onMount(async () => {
    filterTypes = archiveFilterService.createArchiveFilter();
    console.log('filters', filterTypes);
    locationFilterType = await archiveFilterService.createLocationFilter();
    console.log('loc', locationFilterType);
    loadingDone = true;
  });

  function search() {
    console.log('Start archive search...');
    loadingDone = false;

    const search$: Observable<ArchiveSearchResult[]>[] = [];
    const results: Map<string, ArchiveSearchResult[]> = new Map();

    locationFiltersToSearch.forEach(locationFilter => {
      const filters = archiveFilterService.convertFilterToSearchParams(filtersToSearch);
      filters.location = locationFilter.id;

      search$.push(archiveExplorerService.searchArchive(filters)
        .pipe(
          take(1),
          tap((searchResults: ArchiveSearchResult[]) => results.set(locationFilter.value, searchResults)),
          finalize(() => loadingDone = true)
        ));
    });

    combineLatest(search$)
      .pipe(
        tap(() => {
          archiveExplorerStore.updateData(results);
        })
      )
      .subscribe();
  }

  archiveExplorerStore.store.subscribe(searchResults_ => searchResults = searchResults_);
</script>

<div class="archive-explorer-container">
  <OscdLoadingSpinner {loadingDone} />
  <div class="search-filter">
    <OscdFilterBox filterTypes="{locationFilterType}"
                   bind:activeFilters={locationFiltersToSearch} useOptionLabelInChipText="{true}">
    </OscdFilterBox>

    <OscdFilterBox disabled="{uuidFilterSelected || !locationFiltersToSearch.length}" {filterTypes}
                   bind:activeFilters={filtersToSearch}>
      <OscdButton slot="filter-controls" variant="raised" callback={search}
                  disabled="{!locationFiltersToSearch.length}">
        <Icon class="material-icons">search</Icon>
        <Label>Search</Label>
      </OscdButton>
    </OscdFilterBox>
  </div>

  <div class="content-container">
    {#if (searchResults.size)}
      {#each searchResults as result, index}
        <OscdExpansionPanel open="{index === 0}"
                            title="{archiveExplorerLocationStore.getLocationNameByUuid(result[0])}">
          >
          <span slot="content">
              <SearchResult data="{result[1]}" />
          </span>
        </OscdExpansionPanel>
        <div class="separator"></div>
      {/each}
    {/if}
  </div>
</div>

<style>
  @import "/global.css";
  @import "/material-icon.css";
  @import '/smui.css';

  .archive-explorer-container {
    min-height: 100%;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

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
