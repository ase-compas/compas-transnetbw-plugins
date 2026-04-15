<script lang="ts">
  import { OscdSwitch, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import Button from '@smui/button';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { TypeKind } from '../../../../shared/model';
  import ChooseInstanceTypeDialog from '../dialogs/ChooseInstanceTypeDialog.svelte';
  import SetDefaultButton from './SetDefaultButton.svelte';
  import TypeActionMenu from './TypeActionMenu.svelte';
  import type { DataTypeService } from '../../services/type.service';
  import TypeInfo from 'apps/template-generator/src/shared/ui/TypeInfo.svelte';

  interface Props {
    type: TypeKind;
    typeId: string;
    instanceType?: string | null;
    isEditMode?: boolean;
    toggleEditModeSwitchDisabled?: boolean;
    showSetAsDefault?: boolean;
    setAsDefaultDisabled?: boolean;

    onModeChange?: (mode: 'edit' | 'view') => void;
    onInstanceTypeChange?: (instanceType: string) => void;
    onClickDefault?: () => void;
    onDelete?: () => void;
    onRename?: () => void;

    service: DataTypeService
  }

  let {
    type,
    typeId,
    instanceType = null,
    isEditMode = $bindable(false),
    showSetAsDefault = true,
    setAsDefaultDisabled = false,
    toggleEditModeSwitchDisabled = false,


    onModeChange = (_: 'edit' | 'view') => {},
    onInstanceTypeChange = (_: string) => {},
    onClickDefault = () => {},
    onDelete = () => {},
    onRename = () => {},

    service
  }: Props = $props();

  const handleChange = (checked) => onModeChange(checked ? 'edit' : 'view');


  async function handleInstanceTypeSelect() {
    const result = await openDialog(ChooseInstanceTypeDialog, {
      typeKind: type,
      service: service
    })

    if (result.type !== 'confirm') {
      return;
    }
    onInstanceTypeChange(result.data.instance);
  }

</script>

<div class="header-bar">
  <!-- Left side: information -->
   <TypeInfo kind={type} {typeId} instance={instanceType} />

  <!-- Right side: actions -->
  <div class="actions-section">
    {#if instanceType}
      <OscdSwitch
        bind:checked={isEditMode}
        onChange={e => handleChange(e)}
        preventToggleOnClick={true}
        id={`edit-mode-switch-${typeId}`}
        label="Edit Mode"
        labelStyle="font-weight: bold; text-transform: uppercase; color: var(--mdc-theme-primary);"
        disabled={toggleEditModeSwitchDisabled}
      />
      {#if showSetAsDefault}
        {#if setAsDefaultDisabled}
          <OscdTooltip content="Save first to set as default" side="bottom" hoverDelay={300}>
            <SetDefaultButton onClick={onClickDefault} disabled={setAsDefaultDisabled}/>
          </OscdTooltip>
        {:else}
          <SetDefaultButton onClick={onClickDefault} />
        {/if}
      {/if}
    {:else}
      <Button variant="unelevated" color="primary" onclick={handleInstanceTypeSelect}>Choose Instance Type to Edit</Button>
    {/if}
    <TypeActionMenu
      onDelete={onDelete}
      onRename={onRename}
    />
  </div>
</div>

<style>
  /* Main header container */
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 0;
    gap: 2.5rem;
    margin-bottom: 1rem;
  }

  /* Right side actions */
  .actions-section {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  :global(.mdc-button) {
    margin-bottom: 0;
  }

</style>
