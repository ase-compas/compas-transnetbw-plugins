<script lang="ts">

  import {LocationViewerService, ResourceStore, SclResourceModel, SearchParams} from "@oscd-transnet-plugins/oscd-location-viewer";
  import {onMount} from "svelte";
  import {
    ActiveFilter, FilterType,
    OscdButton,
    OscdDataTable, OscdExpansionPanel,
    OscdFilterBox, OscdLoadingSpinner,
    OscdSelect
  } from "@oscd-transnet-plugins/oscd-component";
  import Card from "@smui/card";
  import {Icon, Label} from "@smui/button";
  import {finalize, take, tap} from "rxjs/operators";
  import {OscdSearchIcon} from "../../../libs/oscd-icons/src";

  const locationViewerService = LocationViewerService.getInstance();
  let locations: { label: string, value: string }[] = [];
  let selectedLocationUUID: string;
  let searchOpen = false;

  //loading quickfix for css to load
  let loading = true;

  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 1000)
  });

  onMount(() => {
    locationViewerService.getLocations().subscribe({
      next: (data) => {
        locations = data.map((item) => ({ label: item.name, value: item.uuid }))
      }
    })
  })

  export let locationResourceStore = new ResourceStore();
  export let searchResourceStore = new ResourceStore();

  const searchColumnDefs = [
    { headerName: 'UUID', field: 'uuid', numeric: false, filter: true, filterType: 'text', sortable: false },
    { headerName: 'Name', field: 'name', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Author', field: 'author', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Type', field: 'type', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Location', field: 'location', numeric: false, filter: true, filterType: 'text', sortable: true, valueFormatter: formatLocation },
    { headerName: 'Version', field: 'version', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Changed At', field: 'changedAt', numeric: false, filter: true, filterType: 'text', sortable: true, valueFormatter: formatDate },
    { headerName: '', field: 'actions', numeric: false, filter: false, filterType: 'text', minWidth: '100px', sortable: false}
  ];

  const locationColumnDefs = [
    { headerName: 'UUID', field: 'uuid', numeric: false, filter: true, filterType: 'text', sortable: false },
    { headerName: 'Name', field: 'name', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Author', field: 'author', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Type', field: 'type', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Version', field: 'version', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Changed At', field: 'changedAt', numeric: false, filter: true, filterType: 'text', sortable: true, valueFormatter: formatDate },
    { headerName: '', field: 'actions', numeric: false, filter: false, filterType: 'text', minWidth: '100px', sortable: false}
  ];

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  function formatLocation(uuid: string) {
    if(!locations || !uuid) {
      return uuid || '';
    }
    const foundLocation = locations.find((location) => location.value === uuid);
    console.log("foundlocation", { foundLocation, bool: foundLocation?.label !== undefined });
    return foundLocation?.label ? foundLocation.label : uuid;
  }

  const filterTypes: FilterType[] = [
    {
      id: 1,
      label: 'UUID',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['='],
    },
    {
      id: 2,
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
      id: 3,
      label: 'Name',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 4,
      label: 'Location',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 5,
      label: 'Author',
      inputType: { id: 1, type: 'string', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 6,
      label: 'from',
      inputType: { id: 1, type: 'datepicker', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
    {
      id: 7,
      label: 'to',
      inputType: { id: 1, type: 'datepicker', validatorFn: () => true, options: [] },
      allowedOperations: ['=']
    },
  ];

  const locationRowActions = [
    { icon: 'remove', callback: (row) => unassign(row), disabled: () => false }
  ];

  const searchRowActions = [
    { icon: 'add', callback: (row) => assign(row), disabled: () => false },
  ];

  let filtersToSearch: ActiveFilter[] = [];

  function assign(row: SclResourceModel) {
    locationViewerService.assignResourceToLocation(selectedLocationUUID, row.uuid).subscribe({
      next: () => {
        searchResourceStore.remove(row.uuid);
        locationResourceStore.add({...row, location: selectedLocationUUID});
      },
    });
  }

  function unassign(row: SclResourceModel) {
    locationViewerService.unassignResourceFromLocation(selectedLocationUUID, row.uuid).subscribe({
      next: () => {
        locationResourceStore.remove(row.uuid);
      },
    });
  }

  function search() {
    const searchParams = convertFilterToSearchParams(filtersToSearch);
    locationViewerService.searchResources(searchParams).pipe(
      take(1),
      tap((data: SclResourceModel[]) => {
        searchResourceStore.set(data.filter((item) => item.location !== selectedLocationUUID));
      }),
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
      to: null,
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

  $: if (selectedLocationUUID) {
    locationViewerService.searchResources({}).subscribe({
      next: (data) => {
        console.log({data, selectedLocation: selectedLocationUUID});
        locationResourceStore.set(data.filter((item) => item.location === selectedLocationUUID));
      },
      error: (err) => {
        console.error('Error loading resources:', err);
      }
    });
  }
</script>

{#if loading}
  <OscdLoadingSpinner loadingDone={!loading} />
{:else}
  <div class="location-viewer-container">
    <OscdSelect
      bind:data={locations}
      bind:value={selectedLocationUUID}
      label="Location"
    />
      <div class="search-filter">
      <OscdExpansionPanel title="Search" bind:open={searchOpen} on:click={toggleSearchPanel}>
        <div slot="content">
          <div class="filter-box">
            <OscdFilterBox {filterTypes} bind:activeFilters={filtersToSearch}>
              <OscdButton slot="filter-controls" variant="raised" callback={search}>
                <OscdSearchIcon />
                <Label>Search</Label>
              </OscdButton>
            </OscdFilterBox>
          </div>
          <div class="table-container">
            <Card style="padding: 1rem; width: 100%; height: 100%;">
              <h3 style="margin-bottom: 1rem;">Search Result</h3>
              <OscdDataTable columnDefs="{searchColumnDefs}" store={searchResourceStore} rowActions={searchRowActions} />
            </Card>
          </div>
        </div>
      </OscdExpansionPanel>
    </div>
    <div class="table-container">
      <Card style="padding: 1rem; width: 100%; height: 100%;">
        <h3 style="margin-bottom: 1rem;">
          {selectedLocationUUID
            ? `Location: ${locations.find((item) => item.value === selectedLocationUUID)?.label}`
            : 'Select Location'}
        </h3>
        <OscdDataTable columnDefs="{locationColumnDefs}" store={locationResourceStore} rowActions={locationRowActions}  />
      </Card>
    </div>
  </div>
{/if}

<style>
  @import "/global.css";
  @import "/material-icon.css";
  @import '/smui.css';

  .search-filter {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .filter-box {
    margin-bottom: 1rem;
  }
</style>
