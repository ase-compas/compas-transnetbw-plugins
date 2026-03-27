<script lang="ts">
  import { OscdSwitch, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import Button from '@smui/button';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import { TypeKind } from '../../../../shared/model';
  import ChooseInstanceTypeDialog from '../dialogs/ChooseInstanceTypeDialog.svelte';
  import SetDefaultButton from './SetDefaultButton.svelte';
  import TypeActionMenu from './TypeActionMenu.svelte';
  import type { DataTypeService } from '../../services/type.service';

  interface Props {
    type: TypeKind;
    typeId: string;
    instanceType?: string | null;
    isEditMode?: boolean;
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
  <div class="info-section">
    <!-- Type section -->
    <div class="section">
      <span class="label">Type</span>
      <span class="value strong">{TypeKind.abbreviation(type)}</span>
    </div>

    <!-- Type ID section -->
    <div class="section">
      <span class="label">Type ID</span>
      <span class="value mono">{typeId}</span>
    </div>

    <!-- Instance section -->
    <div class="section">
      <span class="label">{TypeKind.toTypeKindLabel(type)}</span>
      {#if instanceType}
        <span class="instance-badge static">{instanceType}</span>
      {:else}
        <span class="instance-badge unknown">Unknown</span>
        {/if}
    </div>
  </div>

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

  /* Info section grid */
  .info-section {
    display: grid;
    grid-auto-flow: column;
    gap: 2.8rem;
    align-items: stretch;
  }

  /* Each section: label top, value/badge bottom */
  .section {
    display: grid;
    row-gap: 0.2rem;
  }

  /* Label styling */
  .label {
    font-size: 0.7rem;
    font-weight: 600;
    color: #555;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* Value styling */
  .value {
    font-size: 1.1rem; /* bigger value text */
    color: var(--mdc-theme-primary, #ff3e00);
    align-self: end;
  }

  .value.strong {
    font-weight: 700;
  }

  .value.mono {
    font-family: 'Courier New', monospace;
    font-size: 1.1rem;
  }

  /* Instance badges */
  .instance-badge {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    height: 1.8rem;
    padding: 0 0.5rem;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    white-space: nowrap;
    font-size: 0.8rem
  }

  /* Known instance badge */
  .instance-badge.static {
    background: var(--mdc-theme-primary, #ff3e00);
    color: white;
  }

  /* Unknown/editable instance badge */
  .instance-badge.unknown {
    white-space: nowrap;
    color: var(--mdc-theme-primary, #ff3e00);
    border: 1px dashed var(--mdc-theme-primary, #ff3e00);
    transition: background 0.2s, border-color 0.2s;
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
