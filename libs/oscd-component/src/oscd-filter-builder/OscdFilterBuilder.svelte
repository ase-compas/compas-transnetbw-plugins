<script lang="ts">
  /**
   * OscdFilters.svelte
   *
   * A flexible filter bar component that displays filters as badges and opens
   * custom menus for editing values. Supports text, number, select, multiselect,
   * date, and datetime filters.
   *
   * Props:
   * - filters: FilterDefinition[] — Array of filters to display.
   * - onfiltersChanged?: (filters: FilterDefinition[]) => void — Callback invoked
   *   when a filter is applied or cleared.
   *
   * Example usage:
   * <script lang="ts">
   *   import OscdFilters from './OscdFilters.svelte';
   *   let filters = [
   *     { key: 'name', type: 'text', label: 'Name' },
   *     { key: 'status', type: 'select', label: 'Status', options: [
   *       { label: 'Active', value: 'active' },
   *       { label: 'Inactive', value: 'inactive' }
   *     ]}
   *   ];
   *   function handleFiltersChanged(updatedFilters) {
   *     console.log(updatedFilters);
   *   }
   *
   *
   * <OscdFilters bind:filters={filters} onfiltersChanged={handleFiltersChanged} />
   */

  import type { FilterDefinition } from './types';
  import OscdFilterBadge from './OscdFilterBadge.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import Button from '@smui/button';
  import Textfield from '@smui/textfield';
  import OscdSelect from '../oscd-select/OscdSelect.svelte';
  import OscdDatePicker from '../oscd-datepicker/OscdDatePicker.svelte';
  import OscdDateTimePicker from '../oscd-datetime-picker/OscdDateTimePicker.svelte';
  import OscdMultiSelect from '../oscd-multi-select/OscdMultiSelect.svelte';


  interface Props<T = any> {
    filters: FilterDefinition<T>[];
    onfiltersChanged?: (filter: FilterDefinition<T>[]) => void;
  }

  let { filters = $bindable(), onfiltersChanged }: Props = $props();

  let openMenuIndex = $state<number | null>(null);
  let menuRefs: HTMLElement[] = [];
  let tempValues: (any | undefined)[] = [];

  function valueString(filter: FilterDefinition): undefined | string {
    if (filter.value === undefined || filter.value === null || filter.value === '') return undefined;
    switch (filter.type) {
      case 'text':
        return String(filter.value);

      case 'number':
        return String(filter.value);

      case 'select':
        // If options are provided, show the label of the selected value
        const opt = filter.options?.find(o => o.value === filter.value);
        return opt ? opt.label : String(filter.value);
      case 'multiselect':
        if (!Array.isArray(filter.value) || filter.value.length === 0) return undefined;

        const labels = filter.value.map((v: any) => {
          const opt = filter.options?.find(o => o.value === v);
          return opt ? opt.label : String(v);
        });

        const MAX = 1;

        if (labels.length <= MAX) {
          return labels.join(', ');
        }

        return `${labels.slice(0, MAX).join(', ')} +${labels.length - MAX} more`;

      case 'date':
        // Format date nicely
        try {
          const date = new Date(filter.value);
          return isNaN(date.getTime()) ? String(filter.value) : date.toLocaleDateString();
        } catch {
          return String(filter.value);
        }
      case 'datetime':
        try {
          const date = new Date(filter.value);
          if (isNaN(date.getTime())) return String(filter.value);
          // Show date + time
          return new Intl.DateTimeFormat('default', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }).format(date);
        } catch {
          return String(filter.value);
        }

      default:
        return String(filter.value);
    }
  }

  function initTempValue(filter: FilterDefinition): any {
    switch (filter.type) {
      case 'text':
      case 'date':
      case 'datetime':
        return filter.value ?? '';
      case 'number':
        return filter.value ?? 0;
      case 'select':
        return filter.value ?? null;
      case 'multiselect':
        return Array.isArray(filter.value) ? [...filter.value] : [];
      default:
        return filter.value ?? '';
    }
  }

  function toggleMenu(idx: number) {
    if (openMenuIndex === idx) {
      openMenuIndex = null;
    } else {
      openMenuIndex = idx;
      // copy current value for this filter
      tempValues[idx] = initTempValue(filters[idx]);

    }
  }

  function closeMenuWithoutApply() {
    openMenuIndex = null;
    // discard temp value
    tempValues[openMenuIndex!] = undefined;
  }

  // Apply button
  function applyFilter(idx: number) {
    filters = filters.map((f, i) =>
      i === idx ? { ...f, value: tempValues[idx] } : f
    );
    onfiltersChanged?.([...filters]);
    openMenuIndex = null;
  }

  function clearFilter(idx: number) {
    filters = filters.map((f, i) =>
      i === idx ? { ...f, value: undefined } : f
    );
    tempValues[idx] = undefined;
    onfiltersChanged?.([...filters]);
    closeMenuWithoutApply();
  }

  function handleClickOutside(event: MouseEvent) {
    const clickedInside = menuRefs.some(el => el && el.contains(event.target as Node));
    if (!clickedInside) closeMenuWithoutApply();
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onDestroy(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  // If filter value is set to empty (e.g. when cleraning for outside of the component), reset tempValue.
  $effect(() => {
    /**
     filters.forEach((filters, idx) => {
     if (filters.value === undefined || filters.value === null || filters.value === '') {
     tempValues[idx] = initTempValue(filters);
     }
     });
     */
  });
</script>

<div class="oscd-filters">
  {#each filters as filter, idx (filter.key)}
    <div class="filter-wrapper" bind:this={menuRefs[idx]}>
      <OscdFilterBadge
        label={filter.label}
        value={valueString(filter)}
        onOpen={() => toggleMenu(idx)}
        onRemove={() => clearFilter(idx)}
      />
      {#if openMenuIndex === idx}
        <!-- svelte-ignore a11y_interactive_supports_focus -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="custom-menu" out:fly={{y: 5, duration: 120 }} in:fly={{ y: -5, duration: 120 }}
             onclick={(e) => e.stopPropagation()}>
          <div class="menu-arrow"></div>
          <h4>Filter by {filter.label}</h4>
          <div class=custom-menu__content>
            {#if filter.type === 'text' || filter.type === 'number'}
              <Textfield
                label={filter.label}
                placeholder={filter.placeholder}
                type={filter.type}
                bind:value={tempValues[idx]}
                style="width: 100%;"
              />
            {:else if filter.type === 'select'}
              <OscdSelect
                label={filter.label}
                data={filter?.options}
                bind:value={tempValues[idx]}
              />
            {:else if filter.type === 'multiselect'}
              <OscdMultiSelect
                data={filter?.options}
                bind:values={tempValues[idx]}
              />
            {:else if filter.type === 'date'}
              <OscdDatePicker bind:value={tempValues[idx]} />
            {:else if filter.type === 'datetime'}
              <OscdDateTimePicker bind:value={tempValues[idx]} />
            {/if}


          </div>
          <Button
            variant="unelevated"
            style="background: var(--secondary); color: white; width: 100%;"
            onclick={() => applyFilter(idx)}
          >Apply
          </Button>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .oscd-filters {
    display: flex;
    gap: 0.5rem;
  }

  .filter-wrapper {
    position: relative;
  }

  .custom-menu {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid #ccc;
    background: var(--base2);
    padding: 1rem 0.5rem;
    margin-top: 0.25rem;
    z-index: 10;
    min-width: 225px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .custom-menu h4 {
    margin: 0;
  }

  .menu-arrow {
    position: absolute;
    top: -6px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--base2);
    filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1));
  }
</style>
