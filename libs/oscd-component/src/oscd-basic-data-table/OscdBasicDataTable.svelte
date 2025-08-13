<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

  export type Column = {
    key: string;
    header: string;
    width?: string;
  };

  export let items: any[] = [];
  export let columns: Column[] = [];
  export let loading = false;
  export let errorMsg = '';
  export let emptyText = 'Nothing to show.';
  export let getRowId: (item: any, index: number) => string | number = (item, i) =>
    (item && (item.id ?? item.key)) ?? i;

  export let headerBg: string | null = null;
  export let rowBg: string | null = null;

  const slots: any = $$slots;
  export let hasActions = false;
  $: slotHasActions = hasActions || !!slots?.actions;
</script>

{#if loading}
  <p class="status">Loading…</p>
{:else if errorMsg}
  <p class="status error">{errorMsg}</p>
{:else if !items || items.length === 0}
  <p class="status">{emptyText}</p>
{:else}
  <DataTable style="width: 100%;">
    <Head style={headerBg ? `background-color:${headerBg}` : undefined}>
      <Row>
        {#each columns as col}
          <Cell
            header
            style={[
              col.width ? `width:${col.width}` : '',
              headerBg ? `background-color:${headerBg}` : ''
            ].filter(Boolean).join(';')}
          >
            {col.header}
          </Cell>
        {/each}
        {#if slotHasActions}
          <Cell header style={headerBg ? `background-color:${headerBg}` : undefined}></Cell>
        {/if}
      </Row>
    </Head>

    <Body>
    {#each items as item, i (getRowId(item, i))}
      <Row style={rowBg ? `background-color:${rowBg}` : undefined}>
        {#each columns as col}
          <Cell>{item?.[col.key] ?? ''}</Cell>
        {/each}
        {#if slotHasActions}
          <Cell><slot name="actions" {item} /></Cell>
        {/if}
      </Row>
    {/each}
    </Body>
  </DataTable>
{/if}

<style>
  .status { font-family: Roboto, system-ui, -apple-system, Segoe UI, sans-serif; }
  .error { color: #b00020; }
</style>
