<script module>
  import {setupTranslation} from '@oscd-transnet-plugins/oscd-localization';
  import de from './i18n/de.json';
  import en from './i18n/en.json';

  setupTranslation({
    en,
    de,
  });
</script>
<script lang="ts">
  import {
    OscdButton,
    OscdExpansionPanel,
    OscdFilterBox,
    OscdLoadingSpinner
  } from '@oscd-transnet-plugins/oscd-component';
  import type { ActiveFilter, FilterType } from '@oscd-transnet-plugins/oscd-component';
  import { Label } from '@smui/button';
  import {
    ArchiveExplorerService,
    ArchiveExplorerStore,
    ArchiveFilterService,
    ArchiveSearchResult,
    FilterStore,
    LocationFilterStore,
    LocationStore
  } from '@oscd-transnet-plugins/oscd-archive-explorer';
  import { onMount } from 'svelte';
  import { combineLatest, finalize, Observable, take, tap } from 'rxjs';
  import { OscdSearchIcon } from '@oscd-transnet-plugins/oscd-icons';
  import ArchivedResources from './search-result/ArchivedResources.svelte';
  import {_} from "svelte-i18n";

  const archiveExplorerService = ArchiveExplorerService.getInstance();
  const archiveFilterService = ArchiveFilterService.getInstance();
  const archiveExplorerStore = ArchiveExplorerStore.getInstance();
  const filterStore = FilterStore.getInstance();
  const locationFilterStore = LocationFilterStore.getInstance();
  const archiveExplorerLocationStore = LocationStore.getInstance();

  let filterTypes: FilterType[] = $state([]);
  let locationFilterType: FilterType[] = $state([]);
  let filtersToSearch: ActiveFilter[] = $state(filterStore.currentData);
  let locationFiltersToSearch: ActiveFilter[] = $state(locationFilterStore.currentData);
  let searchResults: Map<string, ArchiveSearchResult[]> = $state(new Map());

  let loadingDone = $state(false);

  //loading quickfix for css to load
  let loading = $state(true);

  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 1000)
  });

  let uuidFilterSelected = $derived(filtersToSearch.length && !!filtersToSearch?.find(f => f.key === 'uuid'));

  onMount(async () => {
    filterTypes = archiveFilterService.createArchiveFilter();
    locationFilterType = await archiveFilterService.createLocationFilter();
    loadingDone = true;
  });

  function search() {
    loadingDone = false;

    const search$: Observable<ArchiveSearchResult[]>[] = [];
    const results: Map<string, ArchiveSearchResult[]> = new Map();

    locationFiltersToSearch.forEach(locationFilter => {
      const filters = archiveFilterService.convertFilterToSearchParams(filtersToSearch);
      filters.location = locationFilter.value;

      search$.push(archiveExplorerService.searchArchive(filters)
        .pipe(
          take(1),
          tap((searchResults: ArchiveSearchResult[]) => results.set(locationFilter.value, searchResults)),
          finalize(() => loadingDone = true)
        ));
    });

    filterStore.updateData(filtersToSearch);
    locationFilterStore.updateData(locationFiltersToSearch);

    combineLatest(search$)
      .pipe(
        tap(() => {
          archiveExplorerStore.updateData(results);
          searchResults = results;
        })
      )
      .subscribe();
  }
</script>

<!--
  Before all CSS is loaded, the select box expansion icons are briefly displayed extremely large.
  Setting display: none and overriding it in the CSS after it is loaded prevents this.
-->
{#if loading}
  <OscdLoadingSpinner loadingDone={!loading} />
{:else}
  <div class="archive-explorer-container" style="display: none;">
    <OscdLoadingSpinner {loadingDone} />
    <div class="search-filter">
      <OscdFilterBox
        filterTypes={locationFilterType}
        bind:activeFilters={locationFiltersToSearch}
        useOptionLabelInChipText={true}
        addFilterLabel={$_('add_filter')}
        selectFilterLabel={$_('filter_types')}
      />

      <OscdFilterBox
        disabled={uuidFilterSelected || !locationFiltersToSearch.length}
        {filterTypes}
        bind:activeFilters={filtersToSearch}
        addFilterLabel={$_('add_filter')}
        selectFilterLabel={$_('filter_types')}
      >
        {#snippet filterControls()}
          <OscdButton variant="raised" callback={search} disabled={!locationFiltersToSearch.length}>
            <OscdSearchIcon />
            <Label>{$_('search')}</Label>
          </OscdButton>
        {/snippet}
      </OscdFilterBox>
    </div>

    <div class="content-container">
      {#if searchResults.size}
        {#each searchResults as result, index (result)}
          <!-- result[0] => UUID of the location -->
          <!-- result[1] => ArchiveSearchResult[] -->
          <OscdExpansionPanel
            open={index === 0}
            title={archiveExplorerLocationStore.getLocationNameByUuid(result[0])}
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
    </div>
  </div>
{/if}
<style>
  @import "/global.css";
  @import '/smui.css';

  .archive-explorer-container {
    min-height: 100%;
    height: fit-content;
    width: 100%;
    display: flex !important;
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
