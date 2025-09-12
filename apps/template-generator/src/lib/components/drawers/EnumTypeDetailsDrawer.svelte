<script lang="ts">
  import { IEnumTypeService } from '../../services/enum-type.service';
  import { getEnumTypeService } from '../../services';
  import { DataTypeKind, type EnumTypeDetails } from '../../domain';
  import { onMount } from 'svelte';
  import { CloseReason } from '../../stores/drawerStackStore';
  import { confirmUnsavedChanges } from '../../utils/overlayUitils';
  import { OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import DataTable, { Body, Cell, Head, Row } from '@smui/data-table';
  import Checkbox from '@smui/checkbox';
  import TypeHeader from '../../TypeHeader.svelte';

  // ===== Services =====
  const enumTypeService: IEnumTypeService = getEnumTypeService();

  // ===== Props =====
  export let mode: 'view' | 'edit' | 'create' = 'view';
  export let typeId: string;
  export let instanceTypeId: string | null = null;

  // ===== State =====
  let enumType: EnumTypeDetails = null;
  let searchQuery = '';
  let selected: string[] = []
  let isLoading = false;

  // ===== Derived =====
  const isCreateMode = () => mode === 'create';
  $: filteredItems = enumType?.children.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())) ?? [];

  // ===== Lifecycle =====
  onMount(async () => {
    await loadData();
  });

  // ===== Functions =====
  /** Load enum type depending on mode */
  async function loadData() {
    isLoading = true;
    enumType = isCreateMode()
      ? await loadEnumTypeForCreate(typeId, instanceTypeId)
      : await loadEnumTypeForEdit(typeId);
    selected = enumType.children.filter(item => item.meta.isConfigured).map(a => a.name);
    isLoading = false;
  }

  /** Load and initialize a new enum type (create mode) */
  async function loadEnumTypeForCreate(typeId: string, instanceTypeId: string | null) {
    const result = await enumTypeService.getDefaultType(instanceTypeId);
    result.id = typeId;
    result.instanceType = instanceTypeId;
    setAllChildrenToConfigured(result);
    return result;
  }

  /** Load existing enum type by ID (edit/view mode) */
  async function loadEnumTypeForEdit(typeId: string) {
    return await enumTypeService.getTypeById(typeId);
  }

  /** Set all children of a type to configured */
  function setAllChildrenToConfigured(type: EnumTypeDetails) {
    type.children.forEach(child => child.meta.isConfigured = true);
  }

  function saveChanges() {
    if(isDirty() || isCreateMode()) {
      enumTypeService.createOrUpdateType({
        id: enumType.id,
        instanceType: enumType.instanceType,
        children: selected.map(name => ({ name }))
      });
    }
  }

  // ===== Dialog Close Guard =====
  export const canClose = async (reason: CloseReason): Promise<boolean> => {
    if ((isDirty() || isCreateMode()) && reason !== 'save') {
      const { action } = await confirmUnsavedChanges();
      if (action === 'save') saveChanges();
      else if (action === 'cancel') return false;
    } else if (reason === 'save') {
      await saveChanges();
    }
    return true;
  };

  function isDirty() {
    const configuredNames = enumType.children.filter(item => item.meta.isConfigured).map(a => a.name).sort();
    const selectedSorted = selected.slice().sort();
    return JSON.stringify(configuredNames) !== JSON.stringify(selectedSorted);
  }
</script>

<TypeHeader
  {typeId}
  type={DataTypeKind.EnumType}
  instanceType={enumType?.instanceType}
  on:instanceTypeChange={(e) => {
    instanceTypeId = e.detail;
    mode = 'create';
    loadData();
    }
  }
/>
<div class="oscd-card oscd-container enum-type-details">
  <OscdInput
    bind:value={searchQuery}
    icon="search"
    label="Search..."
    variant="outlined"
  />

  {#if !isLoading}
  <DataTable style="width: 100%; margin-top: 1rem;">
    <Head style="font-weight: bold;">
      <Row>
        <Cell checkbox><Checkbox /></Cell>
        <Cell numeric><strong>Ord</strong></Cell>
        <Cell><strong>Label</strong></Cell>
      </Row>
    </Head>

    <Body>
    {#each filteredItems as item (item.name)}
      <Row style="background: white">
        <Cell checkbox>
          <Checkbox
            bind:group={selected}
            value={item.name}
            valueKey={item.name}
          />
        </Cell>
        <Cell style="width: 80px;" numeric>{item.attributes.literalValue}</Cell>
        <Cell><strong>{item.name}</strong></Cell>
      </Row>
    {/each}
    </Body>
  </DataTable>
  {/if}
</div>
