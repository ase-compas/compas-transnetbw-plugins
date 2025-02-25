<script lang="ts">

  import {
    ArchivedResourceModel,
    ArchivedResourceStore,
    LocationViewerService,
    SearchParams
  } from '@oscd-transnet-plugins/oscd-location-viewer';
  import { onMount } from 'svelte';
  import {
    ActiveFilter,
    FilterType,
    OscdButton,
    OscdDataTable,
    OscdExpansionPanel,
    OscdFilterBox,
    OscdSelect
  } from '@oscd-transnet-plugins/oscd-component';
  import Card from '@smui/card';
  import { Icon, Label } from '@smui/button';
  import { finalize, take, tap } from 'rxjs/operators';

  const locationViewerService = LocationViewerService.getInstance();
  let locations: { label: string, value: string }[] = [];
  let selectedLocation;
  let loadingDone = false;
  let searchOpen = false;

  export let locationArchivedResourceStore = new ArchivedResourceStore();
  export let searchArchivedResourceStore = new ArchivedResourceStore();

  const columnDefs = [
    { headerName: 'UUID', field: 'uuid', numeric: false, filter: true, filterType: 'text', sortable: false },
    { headerName: 'Name', field: 'name', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Note', field: 'note', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Author', field: 'author', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Approver', field: 'approver', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Type', field: 'type', numeric: false, filter: true, filterType: 'text', sortable: true },
    {
      headerName: 'Content Type',
      field: 'contentType',
      numeric: false,
      filter: true,
      filterType: 'text',
      sortable: true
    },
    { headerName: 'Voltage', field: 'voltage', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Version', field: 'version', numeric: false, filter: true, filterType: 'text', sortable: true },
    {
      headerName: 'Modified At',
      field: 'modifiedAt',
      numeric: false,
      filter: true,
      filterType: 'text',
      sortable: true,
      valueFormatter: formatDate
    },
    {
      headerName: 'Archived At',
      field: 'archivedAt',
      numeric: false,
      filter: true,
      filterType: 'text',
      sortable: true,
      valueFormatter: formatDate
    },
    {
      headerName: '',
      field: 'actions',
      numeric: false,
      filter: false,
      filterType: 'text',
      minWidth: '100px',
      sortable: false
    }
  ];

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  const searchRowActions = [
    { icon: 'add', callback: (row) => add(row), disabled: () => false }
  ];

  const locationRowActions = [
    { icon: 'remove', callback: (row) => remove(row), disabled: () => false }
  ];

  const filterTypes: FilterType[] = [
    {
      id: 1,
      label: 'UUID',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 2,
      label: 'Name',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 5,
      label: 'Approver',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 6,
      label: 'Type',
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
      id: 7,
      label: 'ContentType',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 8,
      label: 'Voltage',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 9,
      label: 'Version',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 10,
      label: 'ModifiedAt',
      inputType: { id: 3, type: 'timepicker', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 11,
      label: 'ArchivedAt',
      inputType: { id: 3, type: 'timepicker', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    }
  ];

  let filtersToSearch: ActiveFilter[] = [];

  function add(row: ArchivedResourceModel) {

  }

  function remove(row: ArchivedResourceModel) {

  }

  function search() {
    const searchParams = convertFilterToSearchParams(filtersToSearch);
    loadingDone = false;
    locationViewerService.searchArchivedResources(searchParams).pipe(
      take(1),
      tap((data: ArchivedResourceModel[]) => {
        searchArchivedResourceStore.set(data);
      }),
      finalize(() => {
        loadingDone = true;
      })
    ).subscribe();
  }

  function convertFilterToSearchParams(filters: ActiveFilter[]): SearchParams {
    const searchParams: SearchParams = {
      uuid: null,
      location: null,
      name: null,
      approver: null,
      contentType: null,
      type: null,
      voltage: null,
      modifiedAt: null,
      archivedAt: null
    };
    console.log('Convert filter to search params: ', filters);
    filters.forEach((filter) => {
      console.log('KEY:', filter.key);
      if (filter.key === 'modifiedat' ||
        filter.key === 'archiveddat') {
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

  onMount(() => {
    locationViewerService.getLocations().subscribe({
      next: (data) => {
        locations = data.map((item) => ({ label: item.name, value: item.uuid }));
        selectedLocation = locations[0].value || undefined;
      }
    });
  });

  $: if (selectedLocation) {
    loadingDone = false; // Optional: Set a loading state
    locationViewerService.searchArchivedResources({ location: selectedLocation }).subscribe({
      next: (data) => {
        locationArchivedResourceStore.set(data);
      },
      complete: () => {
        loadingDone = true;
      },
      error: (err) => {
        console.error('Error loading resources:', err);
        loadingDone = true;
      }
    });
  }
</script>

<div class="location-viewer-container">
  <OscdSelect
    bind:data={locations}
    bind:value={selectedLocation}
    label="Location"
  />
  <OscdExpansionPanel title="Search" bind:open={searchOpen} on:click={toggleSearchPanel}>
    <div slot="content">
      <div class="search-filter">
        <OscdFilterBox {filterTypes} bind:activeFilters={filtersToSearch}>
          <OscdButton slot="filter-controls" variant="raised" callback={search}>
            <Icon class="material-icons">search</Icon>
            <Label>Search</Label>
          </OscdButton>
        </OscdFilterBox>
      </div>
      <div class="table-container">
        <Card style="padding: 1rem; width: 100%; height: 100%;">
          <h3 style="margin-bottom: 1rem;">Search Result</h3>
          <OscdDataTable {columnDefs} store={searchArchivedResourceStore} {loadingDone} {searchRowActions} />
        </Card>
      </div>
    </div>
  </OscdExpansionPanel>
  <div class="table-container">
    <Card style="padding: 1rem; width: 100%; height: 100%;">
      <h3 style="margin-bottom: 1rem;">
        {selectedLocation
          ? `Location: ${locations.find((item) => item.value === selectedLocation)?.label}`
          : 'Select Location'}
      </h3>
      <OscdDataTable {columnDefs} store={locationArchivedResourceStore} {loadingDone} {locationRowActions} />
    </Card>
  </div>
</div>

<style>
  @import "/global.css";
  @import "/material-icon.css";
  @import '/smui.css';
</style>
