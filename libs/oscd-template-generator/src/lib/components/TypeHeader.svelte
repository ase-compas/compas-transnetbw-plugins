<script lang="ts">
  import { DataTypeKind } from '../domain';
  import { OscdSwitch, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import Button from '@smui/button';
  import { openSelectInstanceTypeDialog } from '../utils/overlayUitils';
  import { createEventDispatcher } from 'svelte';
  import { SetDefaultButton } from '@oscd-transnet-plugins/oscd-template-generator';

  const dispatch = createEventDispatcher();


  interface Props {
    type: DataTypeKind;
    typeId: string;
    instanceType?: string | null;
    isEditMode?: boolean;
    showSetAsDefault?: boolean;
    setAsDefaultDisabled?: boolean;
  }

  let {
    type,
    typeId,
    instanceType = null,
    isEditMode = $bindable(false),
    showSetAsDefault = true,
    setAsDefaultDisabled = false
  }: Props = $props();

  const handleChange = (checked) => dispatch('modeChange', checked ? 'edit' : 'view');

  function getTypeText(type: DataTypeKind): string {
    switch (type) {
      case DataTypeKind.DOType: return 'DO';
      case DataTypeKind.DAType: return 'DA';
      case DataTypeKind.EnumType: return 'Enum';
      default: return 'Unknown';
    }
  }

  function getInstanceText(type: DataTypeKind): string {
    switch (type) {
      case DataTypeKind.LNodeType: return 'ln-Class';
      case DataTypeKind.DOType: return 'cdc';
      case DataTypeKind.DAType:
      case DataTypeKind.EnumType:
      default: return 'Instance';
    }
  }

  function handleInstanceTypeSelect() {
    openSelectInstanceTypeDialog(type, `The type of ${typeId} is unknown. To edit this type a ${getTypeText(type)} must be chosen. Existing changes will be overwritten.`).then((result) => {
      if (result) {
        dispatch('instanceTypeChange', result);
      }
    });
  }

</script>

<div class="header-bar">
  <!-- Left side: information -->
  <div class="info-section">
    <!-- Type section -->
    <div class="section">
      <span class="label">Type</span>
      <span class="value strong">{getTypeText(type)}</span>
    </div>

    <!-- Type ID section -->
    <div class="section">
      <span class="label">Type ID</span>
      <span class="value mono">{typeId}</span>
    </div>

    <!-- Instance section -->
    <div class="section">
      <span class="label">{getInstanceText(type)}</span>
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
      {#if showSetAsDefault}
        {#if setAsDefaultDisabled}
          <OscdTooltip content="Save first to set as default" side="bottom" hoverDelay={300}>
            <SetDefaultButton on:click={() => dispatch('clickDefault')} disabled={setAsDefaultDisabled}/>
          </OscdTooltip>
        {:else}
          <SetDefaultButton on:click={() => dispatch('clickDefault')} />
        {/if}
      {/if}
    <OscdSwitch
      bind:checked={isEditMode}
      on:change={e => handleChange(e.detail)}
      preventToggleOnClick={true}
      id={`edit-mode-switch-${typeId}`}
      label="Edit Mode"
      labelStyle="font-weight: bold; text-transform: uppercase; color: var(--mdc-theme-primary);"
    />
    {:else}
      <Button variant="unelevated" color="primary" on:click={handleInstanceTypeSelect}>Choose {getInstanceText(type)} to Edit</Button>
    {/if}
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
