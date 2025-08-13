<script lang="ts">
  import DataTable from '@smui/data-table';
  import { Button } from '@smui/button';
  import { createEventDispatcher } from 'svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';

  export let processes: Process[] = [];
  export let loading = false;
  export let errorMsg = '';

  const dispatch = createEventDispatcher<{
    view: Process;
    start: Process;
  }>();

  function startProcess(p: Process) {
    dispatch('start', p);
  }
  function viewProcess(p: Process) {
    dispatch('view', p);
  }
</script>

{#if loading}
  <p class="status">Loading…</p>
{:else if errorMsg}
  <p class="status error">{errorMsg}</p>
{:else if processes.length === 0}
  <p class="status">No processes available.</p>
{:else}
  <DataTable class="smui-data-table--striped">
    <table>
      <thead>
      <tr class="mdc-data-table__header-row">
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">
          Name
        </th>
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">
          Description
        </th>
        <th class="mdc-data-table__header-cell text-right" role="columnheader" scope="col">
          Actions
        </th>
      </tr>
      </thead>

      <tbody class="mdc-data-table__content">
      {#each processes as p (p.id)}
        <tr class="mdc-data-table__row">
          <td class="mdc-data-table__cell">{p.name || p.id}</td>
          <td class="mdc-data-table__cell">{p.description}</td>
          <td class="mdc-data-table__cell text-right">
            <button on:click={() => startProcess(p)}>START</button>
            <button on:click={() => viewProcess(p)}>VIEW</button>
          </td>
        </tr>
      {/each}
      </tbody>
    </table>
  </DataTable>
{/if}

<style>
  .status {
    font-family: Roboto, sans-serif;
  }
  .error {
    color: red;
  }
  .text-right {
    text-align: right;
  }
</style>
