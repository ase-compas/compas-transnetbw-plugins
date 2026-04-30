<script lang="ts">
  import { OscdSwitch } from '@oscd-transnet-plugins/oscd-component';
  import Button from '@smui/button';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { TypeKind } from '../../../../shared/model';
  import ChooseInstanceTypeDialog from '../dialogs/ChooseInstanceTypeDialog.svelte';
  import ConfirmDetachDefaultTypeDialog from '../dialogs/ConfirmDetachDefaultTypeDialog.svelte';
  import SetDefaultButton from './SetDefaultButton.svelte';
  import TypeActionMenu from './TypeActionMenu.svelte';
  import type { DataTypeService } from '../../services/type.service';
  import TypeInfo from 'apps/template-generator/src/shared/ui/TypeInfo.svelte';
  import DefaultTypeBadge from './DefaultTypeBadge.svelte';
  import HeaderElement from 'apps/template-generator/src/shared/ui/HeaderElement.svelte';

  type HeaderDefaultTypeInfo = {
    kind: TypeKind;
    instance: string;
    version: string;
    rootId: string;
  };

  type HeaderDefaultTypeVersionStatus = {
    currentVersion: string;
    latestVersion: string;
    latestSource: 'local' | 'db';
    localLatestVersion: string | null;
    dbLatestVersion: string | null;
    hasUpdate: boolean;
    isDeprecated: boolean;
  };

  interface Props {
    type: TypeKind;
    typeId: string;
    instanceType?: string | null;
    defaultTypeInfo?: HeaderDefaultTypeInfo | null;
    defaultTypeVersionStatus?: HeaderDefaultTypeVersionStatus | null;
    isEditMode?: boolean;
    toggleEditModeSwitchDisabled?: boolean;
    showSetAsDefault?: boolean;
    setAsDefaultDisabled?: boolean;
    actionsDisabled?: boolean;

    onModeChange?: (mode: 'edit' | 'view') => void;
    onInstanceTypeChange?: (instanceType: string) => void;
    onOpenDefaultRootType?: (typeId: string, typeKind: TypeKind) => void;
    onUpdateDefaultTypeToLatest?: () => void;
    onDetachDefault?: () => void;
    onClickDefault?: () => void;
    onDelete?: () => void;
    onRename?: () => void;

    service: DataTypeService;
  }

  let {
    type,
    typeId,
    instanceType = null,
    defaultTypeInfo = null,
    defaultTypeVersionStatus = null,
    isEditMode = $bindable(false),
    showSetAsDefault = true,
    setAsDefaultDisabled = false,
    toggleEditModeSwitchDisabled = false,
    actionsDisabled = false,

    onModeChange = (_: 'edit' | 'view') => {},
    onInstanceTypeChange = (_: string) => {},
    onOpenDefaultRootType = (_: string, __: TypeKind) => {},
    onUpdateDefaultTypeToLatest = () => {},
    onDetachDefault = () => {},
    onClickDefault = () => {},
    onDelete = () => {},
    onRename = () => {},

    service,
  }: Props = $props();

  const handleChange = (checked) => onModeChange(checked ? 'edit' : 'view');

  async function handleInstanceTypeSelect() {
    const result = await openDialog(ChooseInstanceTypeDialog, {
      typeKind: type,
      service,
    });

    if (result.type !== 'confirm') {
      return;
    }
    onInstanceTypeChange(result.data.instance);
  }

  async function handleDetachDefault() {
    if (!defaultTypeInfo) {
      return;
    }

    const result = await openDialog(ConfirmDetachDefaultTypeDialog, {
      typeId,
      defaultRootId: defaultTypeInfo.rootId,
      defaultVersion: defaultTypeInfo.version,
    });

    if (result.type !== 'confirm') {
      return;
    }

    onDetachDefault();
  }
</script>

<div class="header-bar">
  <div class="info-section">
    <TypeInfo kind={type} {typeId} instance={instanceType}>
      {#snippet extraHeader()}
        {#if defaultTypeInfo}
          <HeaderElement label="Default" textOnly>
            <DefaultTypeBadge
              {typeId}
              {defaultTypeInfo}
              {defaultTypeVersionStatus}
              onOpenDefaultRootType={onOpenDefaultRootType}
              onUpdateDefaultTypeToLatest={onUpdateDefaultTypeToLatest}
              onCustomizeDefault={handleDetachDefault}
            />
          </HeaderElement>
        {/if}
      {/snippet}
    </TypeInfo>
  </div>

  <div class="actions-section">
    {#if instanceType}
      <OscdSwitch
        bind:checked={isEditMode}
        onChange={e => handleChange(e)}
        preventToggleOnClick={true}
        id={`edit-mode-switch-${typeId}`}
        label="Edit Mode"
        labelStyle="font-weight: bold; text-transform: uppercase; color: var(--mdc-theme-primary);"
        disabled={toggleEditModeSwitchDisabled}/>
      {#if showSetAsDefault && !defaultTypeInfo}
        <SetDefaultButton onClick={onClickDefault} />
      {/if}
    {:else}
      <Button variant="unelevated" color="primary" onclick={handleInstanceTypeSelect}>Choose Instance Type to Edit</Button>
    {/if}
    <TypeActionMenu onDelete={onDelete} onRename={onRename} actionsDisabled={actionsDisabled} />
  </div>
</div>

<style>
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }

  .info-section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .actions-section {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    .header-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
    }

    .actions-section {
      width: 100%;
      justify-content: flex-start;
    }
  }

  :global(.mdc-button) {
    margin-bottom: 0;
  }
</style>
