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
    OscdButton,
    OscdDataTable, OscdExpansionPanel,
    OscdFilterBox, OscdLoadingSpinner,
    OscdSelect
  } from '@oscd-transnet-plugins/oscd-component';
  import type { ActiveFilter, FilterType } from '@oscd-transnet-plugins/oscd-component';
  import Card from '@smui/card';
  import { Label } from '@smui/button';
  import { finalize, take, tap } from 'rxjs/operators';
  import { OscdSearchIcon } from '../../../libs/oscd-icons/src';
  import { _, locale } from 'svelte-i18n';
  import 'svelte-material-ui/bare.css';
  import '../public/material-icon.css';
  import '../public/global.css';
  import '../public/smui.css';

  const locationViewerService = LocationViewerService.getInstance();
  let locations: { label: string, value: string }[] = $state([]);
  let selectedLocationUUID: string = $state('');
  let searchOpen = $state(false);

  //loading quickfix for css to load
  let loading = $state(true);

  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 1000);
  });

  onMount(() => {
    locationViewerService.getLocations().subscribe({
      next: (data) => {
        locations = data.map((item) => ({ label: item.name, value: item.uuid }));
      }
    });
  });

  // Resource stores for the two tables
  const locationResourceStore = new ResourceStore();
  const searchResourceStore = new ResourceStore();

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  function formatLocation(uuid: string) {
    if (!locations || !uuid) {
      return uuid || '';
    }
    const foundLocation = locations.find((location) => location.value === uuid);
    console.log('foundlocation', { foundLocation, bool: foundLocation?.label !== undefined });
    return foundLocation?.label ? foundLocation.label : uuid;
  }

  const filterTypes: FilterType[] = [
    {
      id: 1,
      key: 'uuid',
      label: $_('uuid'),
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 2,
      key: 'type',
      label: $_('type'),
      inputType: {
        id: 2, type: 'select', validatorFn: () => true, options: [
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
      allowedOperations: ['=']
    },
    {
      id: 3,
      key: 'name',
      label: $_('name'),
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 4,
      key: 'location',
      label: $_('location'),
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 5,
      key: 'author',
      label: $_('author'),
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 6,
      key: 'from',
      label: $_('from'),
      inputType: { id: 1, type: 'datepicker', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 7,
      key: 'to',
      label: $_('to'),
      inputType: { id: 1, type: 'datepicker', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    }
  ];

  const locationRowActions = [
    { icon: 'remove', callback: (row) => unassign(row), disabled: () => false }
  ];

  const searchRowActions = [
    { icon: 'add', callback: (row) => assign(row), disabled: () => false }
  ];

  let filtersToSearch: ActiveFilter[] = $state([]);

  function assign(row: SclResourceModel) {
    locationViewerService.assignResourceToLocation(selectedLocationUUID, row.uuid).subscribe({
      next: () => {
        searchResourceStore.remove(row.uuid);
        locationResourceStore.add({ ...row, location: selectedLocationUUID });
      }
    });
  }

  function unassign(row: SclResourceModel) {
    locationViewerService.unassignResourceFromLocation(selectedLocationUUID, row.uuid).subscribe({
      next: () => {
        locationResourceStore.remove(row.uuid);
      }
    });
  }

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

  function toggleSearchPanel() {
    searchOpen = !searchOpen;
  }

  let searchColumnDefs = $derived([
    { headerName: $_('uuid'), field: 'uuid', numeric: false, filter: true, filterType: 'text', sortable: false },
    { headerName: $_('name'), field: 'name', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('author'), field: 'author', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('type'), field: 'type', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('location'), field: 'location', numeric: false, filter: true, filterType: 'text', sortable: true, valueFormatter: formatLocation },
    { headerName: $_('version'), field: 'version', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('changed_at'), field: 'changedAt', numeric: false, filter: true, filterType: 'text', sortable: true, valueFormatter: formatDate },
    { headerName: '', field: 'actions', numeric: false, filter: false, filterType: 'text', minWidth: '100px', sortable: false}
  ]);
  let locationColumnDefs = $derived([
    { headerName: $_('uuid'), field: 'uuid', numeric: false, filter: true, filterType: 'text', sortable: false },
    { headerName: $_('name'), field: 'name', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('author'), field: 'author', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('type'), field: 'type', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('version'), field: 'version', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: $_('changed_at'), field: 'changedAt', numeric: false, filter: true, filterType: 'text', sortable: true, valueFormatter: formatDate },
    { headerName: '', field: 'actions', numeric: false, filter: false, filterType: 'text', minWidth: '100px', sortable: false}
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
  <div class="location-viewer-container">
    <OscdSelect
      bind:data={locations}
      bind:value={selectedLocationUUID}
      label={$_('location')}
    />
    <div class="search-filter">
      <OscdExpansionPanel title={$_('search')} bind:open={searchOpen} onclick={toggleSearchPanel}>
        {#snippet content()}
          <div>
            <div class="filter-box">
              <OscdFilterBox
                {filterTypes}
                addFilterLabel={$_('add_filter')}
                selectFilterLabel={$_('filter_types')}
                bind:activeFilters={filtersToSearch}
              >
                {#snippet filterControls()}
                  <OscdButton variant="raised" callback={search}>
                    <OscdSearchIcon />
                    <Label>{$_('search')}</Label>
                  </OscdButton>
                {/snippet}
              </OscdFilterBox>
            </div>
            <div class="table-container">
              <Card style="padding: 1rem; width: 100%; height: 100%;">
                <h3 style="margin-bottom: 1rem;">{$_('search_result')}</h3>
                <OscdDataTable columnDefs={searchColumnDefs}
                               store={searchResourceStore}
                               rowActions={searchRowActions}
                               searchInputLabel={$_('search')} />
              </Card>
            </div>
          </div>
        {/snippet}
      </OscdExpansionPanel>
    </div>
    <div class="table-container">
      <Card style="padding: 1rem; width: 100%; height: 100%;">
        <h3 style="margin-bottom: 1rem;">
          {selectedLocationUUID
            ? `${$_('location')}: ${locations.find((item) => item.value === selectedLocationUUID)?.label}`
            : $_('select_location')}
        </h3>
        <OscdDataTable columnDefs={locationColumnDefs}
                       store={locationResourceStore}
                       rowActions={locationRowActions}
                       searchInputLabel={$_('search')} />
      </Card>
    </div>
  </div>
{/if}

<style>
  .search-filter {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .filter-box {
    margin-bottom: 1rem;
  }
</style>
