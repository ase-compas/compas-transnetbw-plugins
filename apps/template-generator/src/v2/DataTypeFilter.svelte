<script lang="ts">
  import OscdFilterTab from 'libs/oscd-component/src/oscd-filter-tab/OscdFilterTab.svelte';
  import type { FilterDefinition } from 'libs/oscd-component/src/oscd-filter-builder/types';
  import { TypeKind } from './model';
  import { getDataTypeService } from './type.service';

  interface Props {
    query?: string;
    dataTypeKind?: TypeKind;
    instance?: string;
  }

  const service = getDataTypeService();
  const navigationTabs = ['LNode Types', 'DO Types', 'DA Types', 'Enum Types', 'All Types'];

  let {
    query = $bindable(''),
    dataTypeKind = $bindable(),
    instance = $bindable(),
  }: Props = $props();

  let activeNavigationTab = $state<string>(typeKindToTab(dataTypeKind));
  let filters = $state<FilterDefinition[]>([]);

  function tabToTypeKind(tab: string): TypeKind | undefined {
    switch (tab) {
      case 'LNode Types':
        return TypeKind.LNodeType;
      case 'DO Types':
        return TypeKind.DOType;
      case 'DA Types':
        return TypeKind.DAType;
      case 'Enum Types':
        return TypeKind.EnumType;
      default:
        return undefined;
    }
  }

  function typeKindToTab(typeKind?: TypeKind): string {
    switch (typeKind) {
      case TypeKind.LNodeType:
        return 'LNode Types';
      case TypeKind.DOType:
        return 'DO Types';
      case TypeKind.DAType:
        return 'DA Types';
      case TypeKind.EnumType:
        return 'Enum Types';
      default:
        return 'All Types';
    }
  }

  function buildInstanceFilter(selectedValue: string | undefined): FilterDefinition[] {
    const options = service
      .listInstanceTypes(dataTypeKind)
      .map((instanceType) => ({ value: instanceType, label: instanceType }));

    const isSelectedValueValid = !selectedValue || options.some((opt) => opt.value === selectedValue);
    const nextValue = isSelectedValueValid ? selectedValue : undefined;

    if (instance !== nextValue) {
      instance = nextValue;
    }

    return [
      {
        key: 'instanceType',
        type: 'select',
        label: 'Instance',
        value: nextValue,
        options,
      },
    ];
  }

  function syncFilterWithCurrentState() {
    filters = buildInstanceFilter(instance);
  }

  $effect(() => {
    const mappedTypeKind = tabToTypeKind(activeNavigationTab);
    if (dataTypeKind !== mappedTypeKind) {
      dataTypeKind = mappedTypeKind;
      syncFilterWithCurrentState();
    }
  });

  // Initialize once and keep filter options in sync with selected type kind.
  $effect(() => {
    if (filters.length === 0) {
      syncFilterWithCurrentState();
    }
  });

  function handleFilterChange(nextFilters: FilterDefinition[]) {
    filters = nextFilters;
    const nextInstance = nextFilters.find((f) => f.key === 'instanceType')?.value as string | undefined;
    if (instance !== nextInstance) {
      instance = nextInstance;
    }
  }
</script>

<OscdFilterTab
  searchLabel="Search by name, type kind, or instance type"
  bind:searchText={query}
  {navigationTabs}
  bind:activeNavigationTab={activeNavigationTab}
  bind:filters
  onFilterChange={handleFilterChange}
/>
