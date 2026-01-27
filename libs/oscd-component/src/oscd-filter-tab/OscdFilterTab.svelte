<script lang="ts">

  import type { FilterDefinition } from '../oscd-filter-builder/types';
  import { OscdFilterBuilder, OscdInput } from '@oscd-transnet-plugins/oscd-component';

  interface Props {
    filters: FilterDefinition[];
    onfiltersChanged?: (filters: FilterDefinition[]) => void;
    searchText?: string
    searchLabel?: string;
    searchPlaceholder?: string;
    onSearchInput?: () => void;
    searchDisabled?: boolean;
  }

  let {
    filters = $bindable(),
    onFilterChange = (filters: FilterDefinition[]) => {},
    searchText = $bindable(''),
    searchLabel = 'Search',
    searchPlaceholder = 'Type to search...',
    onSearchInput = () => {},
    searchDisabled = false,
  }: Props = $props();

  let showClearFilters = $derived.by(() => {
    return filters.some(f => f.value !== undefined && f.value !== null && f.value !== '');
  });

  let clearFilters = () => {
    filters = filters.map(f => ({ ...f, value: undefined }));
    onFilterChange(filters);
  }

</script>

<div class="filter-tab">
  {#if !searchDisabled}
    <OscdInput
      bind:value={searchText}
      oninput={() => onSearchInput()}
      icon="search"
      label={searchLabel}
      placeholder={searchPlaceholder}
      variant="outlined"
      styles="background: var(--oscd-base2,#fff); max-width: 650px;"/>
  {/if}
  <div class="filter-tab__tabs">
    <h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4>
    <OscdFilterBuilder
      bind:filters={filters}
      onfiltersChanged={(e) => onFilterChange(e)}
    />

    {#if showClearFilters}
      <button onclick={() => clearFilters()} class="filter-tab__tabs__clear">Clear Filters</button>
    {/if}
  </div>
</div>

<style>
  .filter-tab {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .filter-tab__tabs {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-tab__tabs__clear {
    background: none;
    border: none;
    color: var(--secondary, #1976d2);
    cursor: pointer;
    font-size: 1rem;
    text-decoration: underline;
    padding: 0;
    margin: 0;
  }

  .filter-tab__tabs__clear:hover {
    text-decoration: underline;
  }


</style>
