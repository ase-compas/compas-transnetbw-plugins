<script lang="ts">
  import {Icon, Label} from "@smui/button";
  import {
    OscdButton,
    OscdDataTable,
    OscdDialog, OscdInput, OscdLoadingSpinner,
  } from "@oscd-transnet-plugins/oscd-component";
  import Card from "@smui/card";
  import {LocationManagerService, type Location, LocationModel, LocationStore} from "@oscd-transnet-plugins/oscd-location-manager";
  import {take} from "rxjs";
  import {finalize, tap} from "rxjs/operators";
  import {onMount} from "svelte";

  const locationManagerService = LocationManagerService.getInstance();
  export let locationStore = new LocationStore();

  enum DialogState {
    Closed = 'closed',
    Update = 'update',
    Create = 'create',
    Remove = 'remove'
  }

  let loadingDone = false;
  let dialogState: DialogState = DialogState.Closed;
  let currentSelectLocation: Location | null = null;

  const columnDefs = [
    { headerName: 'UUID', field: 'uuid', numeric: false, filter: true, filterType: 'text', sortable: false },
    { headerName: 'Key', field: 'key', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Name', field: 'name', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: 'Description', field: 'description', numeric: false, filter: true, filterType: 'text', sortable: true },
    { headerName: '', field: 'actions', numeric: false, filter: false, filterType: 'text', minWidth: '100px', sortable: false}
  ];

  const rowActions = [
    { icon: 'edit', callback: (row) => update(row), disabled: () => false },
    { icon: 'remove', callback: (row) => remove(row), disabled: () => false }
  ];

  function update(row: Location) {
    currentSelectLocation = row;
    dialogState = DialogState.Update;
  }

  function create() {
    currentSelectLocation = new LocationModel("", "");
    dialogState = DialogState.Create;
  }

  function remove(row: Location) {
    currentSelectLocation = row;
    dialogState = DialogState.Remove;
  }

  function onUpdateOrCreateSave() {
    try {
      const isUpdate = currentSelectLocation?.uuid !== undefined;
      const locationServiceRequest = isUpdate
        ? locationManagerService.updateLocation({ locationId: currentSelectLocation.uuid, location: currentSelectLocation})
        : locationManagerService.createLocation(currentSelectLocation);

      locationServiceRequest
        .pipe(
          take(1),
          tap((location: Location) => {
            isUpdate ? locationStore.update(location) : locationStore.add(location);
          }),
          finalize(onCloseDialog)
        ).subscribe();
    } catch (error) {
      console.error("Error saving location", error)
    }
  }

  function onRemoveConfirm() {
    locationManagerService.deleteLocation(currentSelectLocation.uuid).subscribe({
      next: () => {
        locationStore.remove(currentSelectLocation.uuid);
        onCloseDialog();
      },
    });
  }

  function onCloseDialog() {
    dialogState = DialogState.Closed;
    currentSelectLocation = null;
  }

  function load() {
    loadingDone = false;
    locationManagerService.getLocations().pipe(
      take(1),
      tap((data: LocationModel[]) => {
        locationStore.set(data);
      }),
      finalize(() => {
        loadingDone = true
      })
    )
    .subscribe()
  }

  onMount(() => {
    load();
  })

</script>

<div class="location-manager-container">
  <OscdLoadingSpinner {loadingDone} />
  <OscdDialog open="{dialogState === DialogState.Remove}">
    <h3 slot="title">Delete location {currentSelectLocation?.name}?</h3>
    <div slot="actions">
      <OscdButton callback={onRemoveConfirm}>
        <Icon class="material-icons">confirm</Icon>
        <Label>Confirm</Label>
      </OscdButton>
      <OscdButton callback={onCloseDialog}>
        <Icon class="material-icons">cancel</Icon>
        <Label>Cancel</Label>
      </OscdButton>
    </div>
  </OscdDialog>
  <OscdDialog open="{dialogState === DialogState.Update || dialogState === DialogState.Create}">
    <h3 slot="title">{dialogState === DialogState.Update ? `Location: ${currentSelectLocation?.name}` : 'New Location'}</h3>
    <div slot="content">
      {#if currentSelectLocation}
        {#if dialogState === DialogState.Update}
          <Label>{currentSelectLocation.uuid}</Label>
        {/if}
        <OscdInput label="Name" bind:value={currentSelectLocation.name}></OscdInput>
        <OscdInput label="Key" bind:value={currentSelectLocation.key}></OscdInput>
        <OscdInput label="Description" bind:value={currentSelectLocation.description}></OscdInput>
      {/if}
    </div>
    <div slot="actions">
      <OscdButton callback={onUpdateOrCreateSave}>
        <Icon class="material-icons">save</Icon>
        <Label>Save</Label>
      </OscdButton>
      <OscdButton callback={onCloseDialog}>
        <Icon class="material-icons">cancel</Icon>
        <Label>Cancel</Label>
      </OscdButton>
    </div>
  </OscdDialog>
  <OscdButton class="add-button" callback={create}>
    <Icon class="material-icons">add</Icon>
    <Label>Add Location</Label>
  </OscdButton>
  <OscdButton class="reload-button" callback={load}>
    <Icon class="material-icons">load</Icon>
    <Label>Reload</Label>
  </OscdButton>
  <div class="table-container">
    <Card style="padding: 1rem; width: 100%; height: 100%;">
      <h3 style="margin-bottom: 1rem;">Location Table</h3>
      <OscdDataTable {columnDefs} store={locationStore} {loadingDone} {rowActions} />
    </Card>
  </div>
</div>

<style>
  @import "/global.css";
  @import "/material-icon.css";
  @import '/smui.css';
</style>
