<script lang="ts">
  import type { ActiveFilter, FilterType } from './interfaces';
  import {OscdButton, OscdDateTimePicker, OscdInput, OscdSelect} from '../index';
  import Paper from '@smui/paper';
  import OscdChip from '../oscd-chip/OscdChip.svelte';
  import { Set } from '@smui/chips';
  import OscdDatePicker from '../oscd-datepicker/OscdDatePicker.svelte';
  import { v4 as uuidv4 } from 'uuid';

  export let filterTypes: FilterType[] = [];
  export let activeFilters: ActiveFilter[] = [];
  export let useOptionLabelInChipText = false;
  export let selectedOptionIndex = -1;
  export let disabled = false;
  export let addFilterLabel = 'Add Filter';
  export let selectFilterLabel = 'Filter Types';

  let inputValue = '';
  let selectedFilterType = '';

  $: convertTypeToSelection = filterTypes.map((type) => {
    return {
      value: type.label,
      label: type.label
    };
  });

  $: addFilterDisabled = !selectedFilterType || !inputValue;
  $: getSelectedFilterType = filterTypes.find((type) => type.label === selectedFilterType);

  function addFilter() {
    if (!selectedFilterType || !inputValue) {
      console.warn('Filter type or input value is empty');
      return;
    }

    if (!getSelectedFilterType) {
      console.warn('Filter type not found');
      return;
    }

    let activeFilters_ = [
      ...activeFilters,
      {
        id: uuidv4(),
        key: getSelectedFilterType.label.toLowerCase(),
        value: inputValue,
        operation: '=',
        text: `${selectedFilterType}: ${useOptionLabelInChipText && getSelectedFilterType.inputType.options?.length ? getSelectedFilterType.inputType.options[selectedOptionIndex].label : inputValue}`,
        disabled: false
      }
    ];

    activeFilters = activeFilters_;

    updateActiveFilterDisabledStates();

    clearInputs();
  }

  function onFilterChipClose(id: string) {
    // WORKAROUND: Dirty workaround to wait for DOM to remove object before removing it from the array
    setTimeout(() => {
      activeFilters = activeFilters.filter((filter) => filter.id !== id);
      updateActiveFilterDisabledStates();
    }, 0);
  }

  function clearInputs() {
    inputValue = '';
    selectedFilterType = undefined;
  }

  function updateActiveFilterDisabledStates() {
    const activeFilters_ = [...activeFilters];
    if (activeFilters_.find(f => f.key === 'uuid')) {
      activeFilters_.filter(f => f.key !== 'uuid').forEach(f => {
        f.disabled = true;
      });
    } else {
      activeFilters_.forEach(f => {
        f.disabled = false;
      });
    }

    activeFilters = activeFilters_;
  }

</script>

<Paper>
  <div class="filter-box-container">
    <div class="input-section">
      <div class="filter-input-controls">
        <OscdSelect {disabled} label={selectFilterLabel} data={convertTypeToSelection} bind:value={selectedFilterType} />

        {#if getSelectedFilterType?.inputType?.type === 'string'}
          <OscdInput label="Input" bind:value={inputValue}></OscdInput>
        {/if}

        {#if getSelectedFilterType?.inputType?.type === 'select'}
          <OscdSelect label="Input" data={getSelectedFilterType.inputType?.options}
                      bind:value={inputValue} bind:selectedOptionIndex></OscdSelect>
        {/if}

        {#if getSelectedFilterType?.inputType?.type === 'datepicker'}
          <OscdDatePicker bind:value={inputValue}></OscdDatePicker>
        {/if}

        {#if getSelectedFilterType?.inputType?.type === 'timepicker'}
          <OscdDateTimePicker bind:value={inputValue}></OscdDateTimePicker>
        {/if}
      </div>
      <div class="filter-button-controls">
        <OscdButton callback={addFilter} disabled={addFilterDisabled}>{addFilterLabel}</OscdButton>
        <slot name="filter-controls"></slot>
      </div>
    </div>

    <div class="separator"></div>

    <div class="chip-section">
      <Set chips={activeFilters} let:chip>
        <OscdChip title={chip.text} callback={() => onFilterChipClose(chip.id)} disabled="{chip.disabled}"></OscdChip>
      </Set>
    </div>
  </div>
</Paper>

<style lang="css">
  .filter-box-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 150px;
    align-items: center;
  }

  .input-section {
    display: flex;
    flex-direction: column;
    width: 600px;
  }

  .filter-input-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
    gap: 1rem;
  }

  .filter-button-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2rem;
    margin-right: 1rem;
    gap: 1rem;
  }

  .separator {
    width: 1px;
    height: 100%;
    margin: 0 1rem;
    background-color: #e0e0e0;
  }

  .chip-section {
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 0.5rem;
    gap: 0.5rem;
  }

</style>
