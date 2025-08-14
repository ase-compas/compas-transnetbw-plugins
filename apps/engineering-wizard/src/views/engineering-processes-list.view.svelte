<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { OscdBasicDataTable, OscdIconButton } from '../../../../libs/oscd-component/src';
  import Textfield from '@smui/textfield';
  import IconButton from '@smui/icon-button';
  import Button from '@smui/button';
  import { OscdPlayCircleIcon, OscdVisibilityIcon } from '../../../../libs/oscd-icons/src';

  export let processes: Process[] = [];
  export let loading = false;
  export let errorMsg = '';

  const dispatch = createEventDispatcher<{ view: Process; start: Process }>();
  const handleStart = (p: Process) => dispatch('start', p);
  const handleView = (p: Process) => dispatch('view', p);

  let searchQuery: string = '';

  $: searchLower = searchQuery.trim().toLowerCase();
  $: filteredRows = (processes ?? [])
    .filter((p) => (p.name ?? '').toLowerCase().includes(searchLower))
    .map((p) => ({
      ...p,
      displayName: p.name || p.id,
    }));

  const columns = [
    { key: 'displayName', header: 'Name' },
    { key: 'description', header: 'Description' },
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const handleAddNew = () => {
    console.log('Add new process clicked');
  };
</script>

<div class="processes">
  <div class="process-banner">
    <span>
      A process “Process Name C” has already been started for the ---.scd.
      Would you like to continue where you left off?
    </span>
    <Button
      variant="raised"
      style="--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552"
      on:click={() => console.log('Continue Process')}
    >
      CONTINUE
    </Button>
  </div>

  <div class="process-toolbar">
    <Textfield
      bind:value={searchQuery}
      variant="outlined"
      label="Search Processes"
      on:keyup={(e) => e.key === 'Enter' && handleSearch()}
    />
    <Button
      variant="raised"
      style="--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff"
      on:click={handleAddNew}
    >
      ADD NEW PROCESS
    </Button>
  </div>

  <OscdBasicDataTable
    items={filteredRows}
    {columns}
    {loading}
    errorMsg={errorMsg}
    emptyText="No processes available."
    hasActions
    headerBg="#DAE3E6"
    rowBg="#ffffff"
  >
    <svelte:fragment slot="actions" let:item>
      <button class="icon" on:click={() => handleView(item)}>
        <OscdVisibilityIcon svgStyles="fill: #002B37; width: 100%; height: 100%;" />
      </button>
      <button class="icon" on:click={() => handleStart(item)}>
        <OscdPlayCircleIcon svgStyles="fill: #002B37; width: 100%; height: 100%;" />
      </button>
    </svelte:fragment>
  </OscdBasicDataTable>
</div>

<style>
  @import "/material-icon.css";
  @import "/smui.css";

  .processes {
    margin-top: 16px;
    padding: 0 24px;
  }

  .process-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    gap: 12px;
  }

  .process-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
    padding: 0 16px;
    margin-bottom: 24px;
    border-radius: 4px;
    background-color: #004552;
  }

  .process-banner span {
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  }

  .icon {
    border: none;
    cursor: pointer;
    padding: 0;
    background: none;
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  .icon:last-child {
    margin-right: 0;
  }
</style>
