<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

  export type Column = {
    key: string;
    header: string;
    width?: string;
    bold?: boolean;
  };

  let hoveredRow: string | number | null = $state(null);

  interface Props {
    items?: any[];
    columns?: Column[];
    loading?: boolean;
    errorMsg?: string;
    emptyText?: string;
    getRowId?: (item: any, index: number) => string | number;
    headerBg?: string | null;
    rowBg?: string | null;
    hasActions?: boolean;
    actions?: import('svelte').Snippet<[any]>;
    onRowClick?: (item: any) => void;
  }

  let {
    items = [],
    columns = [],
    loading = false,
    errorMsg = '',
    emptyText = 'Nothing to show.',
    getRowId = (item, i) => (item && (item.id ?? item.key)) ?? i,
    headerBg = null,
    rowBg = null,
    hasActions = false,
    actions,
    onRowClick
  }: Props = $props();

  let showActions = $derived(hasActions || !!actions);
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
        {#if showActions}
          <Cell header style={headerBg ? `background-color:${headerBg}` : undefined}></Cell>
        {/if}
      </Row>
    </Head>

    <Body>
    {#each items as item, i (getRowId(item, i))}
      <Row style={rowBg ? `background-color:${rowBg}` : undefined}>
        {#each columns as col}
          <Cell class={col.bold ? 'cell-bold' : ''} onclick={() => onRowClick?.(item)}>
            {item?.[col.key] ?? ''}
          </Cell>
        {/each}
        {#if showActions}
          <Cell numeric>{@render actions?.({ item })}</Cell>
        {/if}
      </Row>
    {/each}
    </Body>
  </DataTable>
{/if}

<style>
  .status { font-family: Roboto, system-ui, -apple-system, Segoe UI, sans-serif; }
  .error { color: #b00020; }

  :global(.mdc-data-table__row:hover > .mdc-data-table__cell) {
    background-color: #D9D800 !important;
  }

  :global(td.mdc-data-table__cell.cell-bold) {
    font-weight: 700 !important;
  }
</style>
