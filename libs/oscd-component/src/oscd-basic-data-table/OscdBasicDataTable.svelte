<script lang="ts">
  import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import Select, { Option } from '@smui/select';
  import IconButton from '@smui/icon-button';
  import { Label } from '@smui/common';

  export type Column = {
    /** Key used to read a value from each item object. */
    key: string;
    /** Header text shown for the column. */
    header: string;
    /** Optional CSS width value, e.g. "140px" or "20%". */
    width?: string;
    /** Renders the cell value using bold text when true. */
    bold?: boolean;
  };

  interface Props {
    /** Rows to render in the table body. */
    items?: any[];
    /** Column definitions in display order. */
    columns?: Column[];
    /** Controls the built-in table loading progress bar. */
    loading?: boolean;
    /** Displays an error row when set. Takes precedence over empty state. */
    errorMsg?: string;
    /** Text rendered when there are no items and no error. */
    emptyText?: string;
    /** Stable key generator for each row. Falls back to item.id/item.key/index. */
    getRowId?: (item: any, index: number) => string | number;
    /** Optional header background color. */
    headerBg?: string | null;
    /** Optional background color for body rows. */
    rowBg?: string | null;
    /** Legacy switch to enable the actions column. */
    hasActions?: boolean;
    /** Optional actions snippet rendered in the right-most cell. */
    actions?: import('svelte').Snippet<[any]>;
    /** Called when a row is clicked. If omitted, rows are non-clickable. */
    onRowClick?: (item: any) => void;
    /** Accessible label used by the underlying DataTable element. */
    tableAriaLabel?: string;
    /** Enables SMUI pagination controls and page slicing in this component. */
    enablePagination?: boolean;
    /** Current page index (zero-based). Supports two-way binding. */
    pageIndex?: number;
    /** Rows per page. Supports two-way binding. */
    rowsPerPage?: number;
    /** Select options for rows-per-page picker. */
    rowsPerPageOptions?: number[];
    /** Label shown before rows-per-page selector in pagination footer. */
    paginationLabel?: string;
    /** Toggle visibility of first/last page buttons. */
    showFirstLastPageButtons?: boolean;
    /** Hover color used only for clickable rows. */
    rowHoverBg?: string;
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
    onRowClick,
    tableAriaLabel = 'Data table',
    enablePagination = false,
    pageIndex = $bindable(0),
    rowsPerPage = $bindable(10),
    rowsPerPageOptions = [10, 25, 50, 100],
    paginationLabel = 'Rows Per Page',
    showFirstLastPageButtons = true,
    rowHoverBg = '#D9D800'
  }: Props = $props();

  let showActions = $derived(hasActions || !!actions);
  let isRowClickable = $derived(!!onRowClick);
  let allItems = $derived(items ?? []);
  let safeRowsPerPage = $derived(Math.max(1, Number(rowsPerPage) || 1));
  let totalItems = $derived(allItems.length);
  let isPaginated = $derived(enablePagination && totalItems > 0);
  let lastPage = $derived(Math.max(Math.ceil(totalItems / safeRowsPerPage) - 1, 0));
  let start = $derived(isPaginated ? pageIndex * safeRowsPerPage : 0);
  let end = $derived(isPaginated ? Math.min(start + safeRowsPerPage, totalItems) : totalItems);
  let visibleItems = $derived(isPaginated ? allItems.slice(start, end) : allItems);
  let rangeLabel = $derived(totalItems === 0 ? '0-0 of 0' : `${start + 1}-${end} of ${totalItems}`);

  $effect(() => {
    if (pageIndex < 0) {
      pageIndex = 0;
    } else if (pageIndex > lastPage) {
      pageIndex = lastPage;
    }
  });

  $effect(() => {
    const numericPageSize = Number(rowsPerPage);
    if (!Number.isFinite(numericPageSize) || numericPageSize < 1) {
      rowsPerPage = rowsPerPageOptions[0] ?? 10;
      return;
    }

    if (numericPageSize !== rowsPerPage) {
      rowsPerPage = numericPageSize;
    }
  });

  function goToPage(nextPage: number) {
    pageIndex = Math.min(Math.max(nextPage, 0), lastPage);
  }

  function handleRowClick(item: any) {
    if (!onRowClick) {
      return;
    }

    onRowClick(item);
  }

  /**
   * Usage notes:
   * - Pagination is opt-in via `enablePagination` and can be controlled externally with
   *   `bind:pageIndex` and `bind:rowsPerPage`.
   * - `errorMsg` overrides empty state and data rows.
   * - Row hover and pointer styles are only active when `onRowClick` is provided.
   */
</script>

<DataTable table$aria-label={tableAriaLabel} style="width: 100%;">
  <Head style={headerBg ? `background-color:${headerBg}` : undefined}>
    <Row>
      {#each columns as col}
        <Cell
          style={[
            col.width ? `width:${col.width}` : '',
            headerBg ? `background-color:${headerBg}` : ''
          ].filter(Boolean).join(';')}
        >
          {col.header}
        </Cell>
      {/each}
      {#if showActions}
        <Cell style={headerBg ? `background-color:${headerBg}` : undefined}></Cell>
      {/if}
    </Row>
  </Head>

  <Body>
    {#if errorMsg}
      <Row class="oscd-basic-table__state-row">
        <Cell
          class="oscd-basic-table__state-cell oscd-basic-table__state-cell--error"
          colspan={columns.length + (showActions ? 1 : 0)}
        >
          {errorMsg}
        </Cell>
      </Row>
    {:else if totalItems === 0}
      <Row class="oscd-basic-table__state-row">
        <Cell
          class="oscd-basic-table__state-cell"
          colspan={columns.length + (showActions ? 1 : 0)}
        >
          {emptyText}
        </Cell>
      </Row>
    {:else}
      {#each visibleItems as item, i (getRowId(item, start + i))}
        <Row
          class={[isRowClickable ? 'oscd-basic-table__row--clickable' : ''].filter(Boolean).join(' ')}
          style={[
            rowBg ? `background-color:${rowBg}` : '',
            rowHoverBg ? `--oscd-basic-table-row-hover-bg:${rowHoverBg}` : ''
          ].filter(Boolean).join(';')}
          role={isRowClickable ? 'button' : undefined}
          tabindex={isRowClickable ? 0 : undefined}
          onclick={() => handleRowClick(item)}
          onkeydown={(event) => {
            if (!isRowClickable) return;
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleRowClick(item);
            }
          }}
        >
          {#each columns as col}
            <Cell class={col.bold ? 'cell-bold' : ''}>
              {item?.[col.key] ?? ''}
            </Cell>
          {/each}
          {#if showActions}
            <Cell class="oscd-basic-table__actions-cell">{@render actions?.({ item })}</Cell>
          {/if}
        </Row>
      {/each}
    {/if}
  </Body>

  {#snippet progress()}
    <LinearProgress indeterminate closed={!loading} aria-label="Data is being loaded..." />
  {/snippet}

  {#if isPaginated && !errorMsg}
    {#snippet paginate()}
      <Pagination>
        {#snippet rowsPerPage()}
          <Label>{paginationLabel}</Label>
          <Select variant="outlined" noLabel bind:value={rowsPerPage}>
            {#each rowsPerPageOptions as option (option)}
              <Option value={option}>{option}</Option>
            {/each}
          </Select>
        {/snippet}

        {#snippet total()}
          {rangeLabel}
        {/snippet}

        {#if showFirstLastPageButtons}
          <IconButton
            class="material-icons"
            action="first-page"
            title="First page"
            onclick={() => goToPage(0)}
            aria-disabled={pageIndex === 0 ? 'true' : undefined}
          >
            first_page
          </IconButton>
        {/if}

        <IconButton
          class="material-icons"
          action="prev-page"
          title="Previous page"
          onclick={() => goToPage(pageIndex - 1)}
          aria-disabled={pageIndex === 0 ? 'true' : undefined}
        >
          chevron_left
        </IconButton>

        <IconButton
          class="material-icons"
          action="next-page"
          title="Next page"
          onclick={() => goToPage(pageIndex + 1)}
          aria-disabled={pageIndex >= lastPage ? 'true' : undefined}
        >
          chevron_right
        </IconButton>

        {#if showFirstLastPageButtons}
          <IconButton
            class="material-icons"
            action="last-page"
            title="Last page"
            onclick={() => goToPage(lastPage)}
            aria-disabled={pageIndex >= lastPage ? 'true' : undefined}
          >
            last_page
          </IconButton>
        {/if}
      </Pagination>
    {/snippet}
  {/if}
</DataTable>

<style>
  :global(td.oscd-basic-table__state-cell) {
    text-align: center;
    padding: 24px;
    opacity: 0.75;
    background: rgba(0, 0, 0, 0.04);
  }

  :global(td.oscd-basic-table__state-cell--error) {
    color: var(--mdc-theme-error, #B00020);
    opacity: 1;
  }

  :global(td.oscd-basic-table__actions-cell) {
    white-space: nowrap;
  }

  :global(.mdc-data-table__row.oscd-basic-table__row--clickable > .mdc-data-table__cell) {
    cursor: pointer;
  }

  :global(.mdc-data-table__row.oscd-basic-table__row--clickable:hover > .mdc-data-table__cell) {
    background-color: var(--oscd-basic-table-row-hover-bg, #D9D800) !important;
  }

  :global(.mdc-data-table__row.oscd-basic-table__row--clickable:focus-visible > .mdc-data-table__cell) {
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.22);
  }

  :global(.mdc-data-table__pagination-button[aria-disabled='true']) {
    opacity: 0.45;
    pointer-events: none;
  }

  :global(td.mdc-data-table__cell.cell-bold) {
    font-weight: 700 !important;
  }
</style>
