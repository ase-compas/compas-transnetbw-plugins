<script lang="ts">
  import type { IEnumTypeService, IDefaultService, IDataTypeService } from '../../services';
  import { getEnumTypeService, getDefaultTypeService, getDataTypeService } from '../../services';
  import { DataTypeKind, type EnumTypeDetails, type Mode } from '../../domain';
  import { onMount } from 'svelte';
  import { type CloseReason } from '@oscd-transnet-plugins/oscd-services/drawer';
  import { OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import DataTable, { Body, Cell, Head, Row } from '@smui/data-table';
  import Checkbox from '@smui/checkbox';
  import TypeHeader from '../TypeHeader.svelte';
  import { createEditorStore } from '../../stores';
  import { setDefaultTypeErrorNotification, setDefaultTypeSuccessNotification, setTypeAsDefaultWithConfirmation } from '../../utils';
  import { error } from 'console';


  // ===== Services =====
  const enumTypeService: IEnumTypeService = getEnumTypeService();
  const defaultService: IDefaultService = getDefaultTypeService();
  const dataTypeService: IDataTypeService = getDataTypeService();

  // ===== Props =====
  interface Props {
    mode?: Mode;
    typeId: string;
    instanceTypeId?: string | null;
  }

  let { mode = 'view', typeId, instanceTypeId = $bindable(null) }: Props = $props();

  // ===== Stores =====
  const editorStore = createEditorStore({ onSave: async () => saveChanges(), onDiscard: async () => {}, initialMode: instanceTypeId ? mode : 'view' });
  const { canEdit, isEditModeSwitchState, mode: currentMode } = editorStore;

  // ===== State =====
  let enumType: EnumTypeDetails = $state(null);
  let searchQuery = $state('');
  let selected: string[] = $state([])
  let isLoading = $state(false);


  // ===== Lifecycle =====
  onMount(async () => {
    await loadData();
  });

  // ===== Functions =====
  /** Load enum type depending on mode */
  async function loadData() {
    isLoading = true;
    enumType = editorStore.isCreateMode()
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
    typeId = result.id;
    instanceTypeId = result.instanceType;
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
    enumTypeService.createOrUpdateType({
      id: enumType.id,
      instanceType: enumType.instanceType,
      children: selected.map(name => ({ name }))
    });
  }

  // ===== Dialog Close Guard =====
  export const canClose = async (reason: CloseReason): Promise<boolean> => {
    if (reason === 'save') {
      if(isDirty()) await editorStore.save();
      return true;
    } else {
      return editorStore.confirmLeave();
    }
  };

  function isDirty() {
    if(!enumType) return false;
    if(mode === 'create') return true;
    const configuredNames = enumType.children.filter(item => item.meta.isConfigured).map(a => a.name).sort();
    const selectedSorted = selected.slice().sort();
    return JSON.stringify(configuredNames) !== JSON.stringify(selectedSorted);
  }

  async function handleModeChange(newMode: 'view' | 'edit') {
    const ok = await editorStore.switchMode(newMode);
    if(ok) await loadData();
  }

  async function handleOnSetAsDefault() {
    try {
      await setTypeAsDefaultWithConfirmation(defaultService, dataTypeService, DataTypeKind.EnumType, enumType.instanceType, enumType.id);
      setDefaultTypeSuccessNotification(enumType.id, DataTypeKind.EnumType, enumType.instanceType);
    } catch (e) {
      setDefaultTypeErrorNotification(enumType.id, e?.message);
    }
  }
  // ===== Derived =====
  let filteredItems = $derived.by(() => {
    if (!enumType) return [];
    const query = searchQuery.toLowerCase();
    return enumType.children
      .filter(item => $currentMode === 'view' ? item.meta.isConfigured : true)
      .filter(item => item.name.toLowerCase().includes(query));

  });

  $effect(() => {
    if (!selected) return;
    const dirty = isDirty();
    if (dirty) editorStore.makeDirty();
    else editorStore.makeClean();
  });
</script>

<TypeHeader
  {typeId}
  type={DataTypeKind.EnumType}
  instanceType={enumType?.instanceType}
  onClickDefault={() => handleOnSetAsDefault()}
  bind:isEditMode={$isEditModeSwitchState}
  onModeChange={(e) => handleModeChange(e)}
  onInstanceTypeChange={(e) => {
    instanceTypeId = e;
    editorStore.switchMode('create')
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
        {#if $canEdit}
        <Cell checkbox><Checkbox /></Cell>
        {/if}
        <Cell numeric><strong>Ord</strong></Cell>
        <Cell><strong>Label</strong></Cell>
      </Row>
    </Head>

    <Body>
    {#each filteredItems as item (item.name)}
      <Row style="background: white">
        {#if $canEdit}
        <Cell checkbox>
          <Checkbox
            bind:group={selected}
            value={item.name}
            valueKey={item.name}
          />
        </Cell>
        {/if}
        <Cell style="width: 80px;" numeric>{item.attributes.literalValue}</Cell>
        <Cell><strong>{item.name}</strong></Cell>
      </Row>
    {/each}
    </Body>
  </DataTable>
  {/if}
</div>
