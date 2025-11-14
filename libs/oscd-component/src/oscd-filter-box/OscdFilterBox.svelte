<script lang="ts">
  import Paper from '@smui/paper';
  import { Set } from '@smui/chips';
  import { v4 as uuidv4 } from 'uuid';
  import { OscdButton, OscdDateTimePicker, OscdInput, OscdSelect } from '../index';
  import OscdChip from '../oscd-chip/OscdChip.svelte';
  import OscdDatePicker from '../oscd-datepicker/OscdDatePicker.svelte';
  import type { Snippet } from 'svelte';
  import type { ActiveFilter, FilterType } from './interfaces';

  interface Props {
    filterTypes?: FilterType[];
    activeFilters?: ActiveFilter[];
    useOptionLabelInChipText?: boolean;
    selectedOptionIndex?: number;
    disabled?: boolean;
    addFilterLabel?: string;
    selectFilterLabel?: string;
    filterControls?: Snippet;
  }

  let {
    filterTypes = [],
    activeFilters = $bindable([] as ActiveFilter[]),
    useOptionLabelInChipText = false,
    selectedOptionIndex = $bindable(-1),
    disabled = false,
    addFilterLabel = 'Add Filter',
    selectFilterLabel = 'Filter Types',
    filterControls,
  }: Props = $props();

  let inputValue = $state('');
  let selectedFilterType = $state<string | undefined>(undefined);

  let convertTypeToSelection = $derived.by(() =>
    filterTypes.map((type) => ({
      value: type.label,
      label: type.label,
    }))
  );

  let addFilterDisabled = $derived.by(() => !selectedFilterType || !inputValue);

  let getSelectedFilterType = $derived.by<FilterType | undefined>(() =>
    filterTypes.find((type) => type.label === selectedFilterType)
  );

  function addFilter() {
    if (!selectedFilterType || !inputValue) {
      console.warn('Filter type or input value is empty');
      return;
    }

    if (!getSelectedFilterType) {
      console.warn('Filter type not found');
      return;
    }

    const newFilters: ActiveFilter[] = [
      ...activeFilters,
      {
        id: uuidv4(),
        key: getSelectedFilterType.label.toLowerCase(),
        value: inputValue,
        operation: '=',
        text: `${selectedFilterType}: ${
          useOptionLabelInChipText && getSelectedFilterType.inputType.options?.length
            ? getSelectedFilterType.inputType.options[selectedOptionIndex]?.label
            : inputValue
        }`,
        disabled: false,
      },
    ];

    activeFilters = newFilters;

    updateActiveFilterDisabledStates();
    clearInputs();
  }

  function onFilterChipClose(id: string) {
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
    const updated = activeFilters.map((filter) => ({ ...filter }));
    if (updated.find((f) => f.key === 'uuid')) {
      updated
        .filter((f) => f.key !== 'uuid')
        .forEach((f) => {
          f.disabled = true;
        });
    } else {
      updated.forEach((f) => {
        f.disabled = false;
      });
    }

    activeFilters = updated;
  }
</script>

<Paper>
  <div class="filter-box-container">
    <div class="input-section">
      <div class="filter-input-controls">
        <OscdSelect
          {disabled}
          label={selectFilterLabel}
          data={convertTypeToSelection}
          bind:value={selectedFilterType}
        />

        {#if getSelectedFilterType?.inputType?.type === 'string'}
          <OscdInput label="Input" bind:value={inputValue} />
        {/if}

        {#if getSelectedFilterType?.inputType?.type === 'select'}
          <OscdSelect
            label="Input"
            data={getSelectedFilterType.inputType?.options}
            bind:value={inputValue}
            bind:selectedOptionIndex
          />
        {/if}

        {#if getSelectedFilterType?.inputType?.type === 'datepicker'}
          <OscdDatePicker bind:value={inputValue} />
        {/if}

        {#if getSelectedFilterType?.inputType?.type === 'timepicker'}
          <OscdDateTimePicker bind:value={inputValue} />
        {/if}
      </div>
      <div class="filter-button-controls">
        <OscdButton callback={addFilter} disabled={addFilterDisabled}>{addFilterLabel}</OscdButton>
        {#if filterControls}
          {@render filterControls?.()}
        {/if}
      </div>
    </div>

    <div class="separator"></div>

    <div class="chip-section">
      <Set chips={activeFilters} let:chip>
        <OscdChip
          title={chip.text}
          callback={() => onFilterChipClose(chip.id)}
          disabled={chip.disabled}
        />
      </Set>
    </div>
  </div>
</Paper>

<style lang="css">/*$$__STYLE_CONTENT__$$*/</style>
