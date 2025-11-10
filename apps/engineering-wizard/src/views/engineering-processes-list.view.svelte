<script lang="ts">
  import { OscdBasicDataTable } from '../../../../libs/oscd-component/src';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';
  import { OscdInfoIcon, OscdPlayCircleIcon, OscdVisibilityIcon } from '../../../../libs/oscd-icons/src';

  let {
    processes = [],
    loading = false,
    errorMsg = '',
    handleStart,
    handleView
  } = $props();

  let searchQuery = $state('');

  let searchLower = $derived(searchQuery.trim().toLowerCase());
  let rows = $derived((processes ?? []).map((p) => ({ ...p, displayName: p.name || p.id })));
  let filteredRows = $derived(searchLower
    ? rows.filter((p) => (p.displayName ?? '').toLowerCase().includes(searchLower))
    : rows);

  const columns: { key: string; header: string }[] = [
    { key: 'displayName', header: 'Name' },
    { key: 'description', header: 'Description' },
  ];

  const handleAddNew = () => {
    console.log('Add new process clicked');
  };
</script>

<div class="processes">
  <div class="process-banner">
    <div class="process-banner__info">
      <OscdInfoIcon />
      <span>
        A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?
      </span>
    </div>
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
    {#snippet actions({ item })}

        <button
          type="button"
          class="icon"
          aria-label="View process"
          onclick={() => handleView(item)}
        >
          <OscdVisibilityIcon svgStyles="fill: #002B37; width: 100%; height: 100%;" />
        </button>
        <button
          type="button"
          class="icon"
          aria-label="Start process"
          onclick={() => handleStart(item)}
        >
          <OscdPlayCircleIcon svgStyles="fill: #002B37; width: 100%; height: 100%;" />
        </button>

      {/snippet}
  </OscdBasicDataTable>
</div>

<style>
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
    padding: 0 24px;
    margin-bottom: 24px;
    border-radius: 4px;
    background-color: var(--primary-base);
  }

  .process-banner__info {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .process-banner span {
    font-family: 'Roboto', sans-serif;
    color: var(--white);
    font-weight: 500;
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
