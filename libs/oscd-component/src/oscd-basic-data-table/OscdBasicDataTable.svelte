<script module lang="ts">
  export type Column = {
    /** Key used to read a value from each item object. */
    key: string;
    /** Header text shown for the column. */
    header: string;
    /** Optional CSS width value, e.g. "140px" or "20%". */
    width?: string;
    /** Shows the full cell text in a tooltip when the column is truncated. */
    tooltip?: boolean;
    /** Renders the cell value using bold text when true. */
    bold?: boolean;
  };
</script>

<script lang="ts" generics="T extends object">
  import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import Select, { Option } from '@smui/select';
  import IconButton, { Icon } from '@smui/icon-button';
  import { Label } from '@smui/common';

  interface Props {
    /** Rows to render in the table body. */
    items?: T[];
    /** Column definitions in display order. */
    columns?: readonly Column[];
    /** Fixed layout lets columns without a width share the remaining space. */
    tableLayout?: 'auto' | 'fixed';
    actionsWidth?: string;
    /** Controls the built-in table loading progress bar. */
    loading?: boolean;
    /** Displays an error row when set. Takes precedence over empty state. */
    errorMsg?: string;
    /** Text rendered when there are no items and no error. */
    emptyText?: string;
    /** Stable key generator for each row. Falls back to item.id/item.key/index. */
    getRowId?: (item: T, index: number) => string | number;
    /** Optional header background color. */
    headerBg?: string | null;
    /** Optional background color for body rows. */
    rowBg?: string | null;
    /** Legacy switch to enable the actions column. */
    hasActions?: boolean;
    /** Optional actions snippet rendered in the right-most cell. */
    actions?: import('svelte').Snippet<[{ item: T }]>;
    /** Called when a row is clicked. If omitted, rows are non-clickable. */
    onRowClick?: (item: T) => void;
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
    selectable?: boolean;
    selectedRowIds?: (string | number)[];
    selectionDisabled?: boolean;
    getSelectionLabel?: (item: T, index: number) => string;
    scrollable?: boolean;
    selectionActions?: import('svelte').Snippet;
  }

  let {
    items = [],
    columns = [],
    tableLayout = 'auto',
    actionsWidth,
    loading = false,
    errorMsg = '',
    emptyText = 'Nothing to show.',
    getRowId = defaultRowId,
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
    rowHoverBg = 'rgba(217, 216, 0, 0.1)',
    selectable = false,
    selectedRowIds = $bindable([]),
    selectionDisabled = false,
    getSelectionLabel = (_item, index) => `Select row ${index + 1}`,
    scrollable = false,
    selectionActions,
  }: Props = $props();

  function defaultRowId(item: T, index: number): string | number {
    const id = ('id' in item ? item.id : undefined) ?? ('key' in item ? item.key : undefined);
    return typeof id === 'string' || typeof id === 'number' ? id : index;
  }

  function cellValue(item: T, key: string): unknown {
    return Reflect.get(item, key);
  }

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
  const selectedIds = $derived(new Set(selectedRowIds));
  const visibleRowIds = $derived(visibleItems.map((item, i) => getRowId(item, start + i)));
  const selectedVisibleCount = $derived(visibleRowIds.filter((id) => selectedIds.has(id)).length);
  const allVisibleSelected = $derived(visibleRowIds.length > 0 && selectedVisibleCount === visibleRowIds.length);
  const columnCount = $derived(columns.length + (showActions ? 1 : 0) + (selectable ? 1 : 0));
  let selectionAnchor: string | number | null = null;

  $effect(() => {
    void visibleRowIds;
    selectionAnchor = null;
  });

  function toggleSelection(id: string | number, checked: boolean, shiftKey: boolean) {
    const index = visibleRowIds.indexOf(id);
    const anchorIndex = selectionAnchor === null ? -1 : visibleRowIds.indexOf(selectionAnchor);
    const rangeIds = shiftKey && anchorIndex >= 0
      ? visibleRowIds.slice(Math.min(anchorIndex, index), Math.max(anchorIndex, index) + 1)
      : [id];
    const nextSelection = new Set(selectedRowIds);
    for (const rowId of rangeIds) {
      if (checked) nextSelection.add(rowId);
      else nextSelection.delete(rowId);
    }
    selectedRowIds = [...nextSelection];
    if (!shiftKey || anchorIndex < 0) selectionAnchor = id;
  }

  function toggleVisibleSelection(checked: boolean) {
    const visibleIds = new Set(visibleRowIds);
    const otherIds = selectedRowIds.filter((id) => !visibleIds.has(id));
    selectedRowIds = checked ? [...otherIds, ...visibleRowIds] : otherIds;
    selectionAnchor = null;
  }

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

  function handleRowClick(item: T) {
    if (!onRowClick) {
      return;
    }

    onRowClick(item);
  }

  function fitScrollHeight(node: HTMLDivElement, enabled: boolean) {
    let observer: ResizeObserver | undefined;

    function updateHeight() {
      const table = node.querySelector<HTMLElement>('.mdc-data-table');
      const top = (table ?? node).getBoundingClientRect().top;
      const height = Math.max(112, window.innerHeight - top - 24);
      node.style.setProperty('--oscd-basic-table-max-height', `${height}px`);
    }

    function stop() {
      observer?.disconnect();
      window.removeEventListener('resize', updateHeight);
    }

    function update(enabled: boolean) {
      stop();
      if (!enabled) {
        node.style.removeProperty('--oscd-basic-table-max-height');
        return;
      }
      observer = new ResizeObserver(updateHeight);
      observer.observe(node.parentElement ?? node);
      window.addEventListener('resize', updateHeight);
      updateHeight();
    }

    update(enabled);
    return { update, destroy: stop };
  }

  /**
   * Usage notes:
   * - Pagination is opt-in via `enablePagination` and can be controlled externally with
   *   `bind:pageIndex` and `bind:rowsPerPage`.
   * - `errorMsg` overrides empty state and data rows.
   * - Row hover and pointer styles are only active when `onRowClick` is provided.
   */
</script>

{#if scrollable || selectionActions}
  <div class="oscd-basic-table" use:fitScrollHeight={scrollable}>
    {#if selectionActions}
      <div class="oscd-basic-table__selection-tab">
        {@render selectionActions()}
      </div>
    {/if}
    {@render table()}
  </div>
{:else}
  {@render table()}
{/if}

{#snippet table()}
<DataTable
  stickyHeader={scrollable}
  container$style={scrollable ? 'overflow:auto;overscroll-behavior:contain;' : undefined}
  container$tabindex={scrollable ? 0 : undefined}
  container$role={scrollable ? 'region' : undefined}
  container$aria-label={scrollable ? `${tableAriaLabel} rows` : undefined}
  table$aria-label={tableAriaLabel}
  table$style={`width:100%;table-layout:${tableLayout}`}
  style={`width:100%;min-width:0;${scrollable ? 'max-height:var(--oscd-basic-table-max-height);' : ''}${tableLayout === 'fixed' ? 'container-type:inline-size;' : ''}`}
>
  <Head style={headerBg ? `background-color:${headerBg}` : undefined}>
    <Row>
      {#if selectable}
        <Cell class="oscd-basic-table__selection-cell" style={`width:48px;${headerBg ? `background-color:${headerBg}` : ''}`}>
          <input
            type="checkbox"
            class="oscd-basic-table__checkbox"
            aria-label="Select all rows"
            checked={allVisibleSelected}
            indeterminate={selectedVisibleCount > 0 && !allVisibleSelected}
            disabled={selectionDisabled || loading || !!errorMsg || visibleRowIds.length === 0}
            onchange={(event) => toggleVisibleSelection(event.currentTarget.checked)}
          />
        </Cell>
      {/if}
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
        <Cell
          style={[
            actionsWidth ? `width:${actionsWidth}` : '',
            headerBg ? `background-color:${headerBg}` : ''
          ].filter(Boolean).join(';')}
        ></Cell>
      {/if}
    </Row>
  </Head>

  <Body>
    {#if errorMsg}
      <Row class="oscd-basic-table__state-row">
        <Cell
          class="oscd-basic-table__state-cell oscd-basic-table__state-cell--error"
          colspan={columnCount}
        >
          {errorMsg}
        </Cell>
      </Row>
    {:else if totalItems === 0}
      <Row class="oscd-basic-table__state-row">
        <Cell
          class="oscd-basic-table__state-cell"
          colspan={columnCount}
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
            if (event.target !== event.currentTarget) return;
            if (!isRowClickable) return;
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleRowClick(item);
            }
          }}
        >
          {#if selectable}
            <Cell
              class="oscd-basic-table__selection-cell"
              onclick={(event) => event.stopPropagation()}
            >
              <input
                type="checkbox"
                class="oscd-basic-table__checkbox"
                aria-label={getSelectionLabel(item, start + i)}
                checked={selectedIds.has(getRowId(item, start + i))}
                disabled={selectionDisabled || loading}
                onclick={(event) => {
                  event.stopPropagation();
                  toggleSelection(getRowId(item, start + i), event.currentTarget.checked, event.shiftKey);
                }}
              />
            </Cell>
          {/if}
          {#each columns as col}
            <Cell
              class={col.bold ? 'cell-bold' : ''}
              title={col.tooltip ? String(cellValue(item, col.key) ?? '') : undefined}
            >
              {cellValue(item, col.key) ?? ''}
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
            action="first-page"
            title="First page"
            onclick={() => goToPage(0)}
            aria-disabled={pageIndex === 0 ? 'true' : undefined}
          >
            <Icon class="material-icons">first_page</Icon>
          </IconButton>
        {/if}

        <IconButton
          action="prev-page"
          title="Previous page"
          onclick={() => goToPage(pageIndex - 1)}
          aria-disabled={pageIndex === 0 ? 'true' : undefined}
        >
          <Icon class="material-icons">chevron_left</Icon>
        </IconButton>

        <IconButton
          action="next-page"
          title="Next page"
          onclick={() => goToPage(pageIndex + 1)}
          aria-disabled={pageIndex >= lastPage ? 'true' : undefined}
        >
          <Icon class="material-icons">chevron_right</Icon>
        </IconButton>

        {#if showFirstLastPageButtons}
          <IconButton
            action="last-page"
            title="Last page"
            onclick={() => goToPage(lastPage)}
            aria-disabled={pageIndex >= lastPage ? 'true' : undefined}
          >
            <Icon class="material-icons">last_page</Icon>
          </IconButton>
        {/if}
      </Pagination>
    {/snippet}
  {/if}
</DataTable>
{/snippet}

<style>
  .oscd-basic-table {
    position: relative;
    min-width: 0;
  }

  .oscd-basic-table__selection-tab {
    display: flex;
    justify-content: flex-end;
  }

  .oscd-basic-table__selection-tab :global(.mdc-button) {
    height: 40px;
    border-radius: 6px 6px 0 0;
  }

  .oscd-basic-table__checkbox {
    width: 18px;
    height: 18px;
    margin: 0;
    vertical-align: middle;
    accent-color: var(--oscd-plugin-brand);
    cursor: pointer;
  }

  :global(.oscd-basic-table__selection-cell) {
    padding-left: 12px;
    padding-right: 12px;
    text-align: center;
    text-overflow: clip;
  }

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

  :global(.mdc-data-table__row.oscd-basic-table__row--clickable > .mdc-data-table__cell:not(.oscd-basic-table__selection-cell)) {
    cursor: pointer;
  }

  :global(.mdc-data-table__row.oscd-basic-table__row--clickable:hover > .mdc-data-table__cell) {
    background-color: var(--oscd-basic-table-row-hover-bg, rgba(217, 216, 0, 0.1)) !important;
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
