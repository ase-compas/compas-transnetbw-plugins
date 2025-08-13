<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Process } from '@oscd-transnet-plugins/shared';
  import { OscdBasicDataTable, OscdIconButton } from '../../../../libs/oscd-component/src';

  export let processes: Process[] = [];
  export let loading = false;
  export let errorMsg = '';

  const dispatch = createEventDispatcher<{ view: Process; start: Process }>();
  const startProcess = (p: Process) => dispatch('start', p);
  const viewProcess  = (p: Process) => dispatch('view', p);

  $: rows = (processes ?? []).map((p) => ({
    ...p,
    displayName: p.name || p.id,
  }));

  const columns = [
    { key: 'displayName', header: 'Name' },
    { key: 'description', header: 'Description' },
  ];
</script>

<OscdBasicDataTable
  items={rows}
  {columns}
  {loading}
  errorMsg={errorMsg}
  emptyText="No processes available."
  hasActions
  headerBg="#DAE3E6"
  rowBg="#ffffff"
>
  <svelte:fragment slot="actions" let:item>
    <OscdIconButton icon="visibility" callback={() => viewProcess(item)} outlined />
    <OscdIconButton icon="play_circle" callback={() => startProcess(item)} outlined />
  </svelte:fragment>
</OscdBasicDataTable>

<style>
  @import "/material-icon.css";
  @import "/smui.css";
</style>
