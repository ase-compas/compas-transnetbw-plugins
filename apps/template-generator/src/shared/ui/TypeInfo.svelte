<script lang=ts>
  import Textfield from "@smui/textfield";
  import { TypeKind } from "../model";
  import OscdIconActionButton from "libs/oscd-component/src/oscd-icon-action-button/OscdIconActionButton.svelte";
    
    interface Props {
        kind: TypeKind;
        typeId: string;
        instance?: string | null;
        canEditId?: boolean;
    }
    
    let { kind: type, typeId = $bindable(''), instance: instanceType = null, canEditId = false }: Props = $props();

    let idTextFieldElement: Textfield | null = $state(null);
    let idEditMode = $state(false);

</script>
  

  <div class="info-section">
    <!-- Type section -->
    <div class="section">
      <span class="label">Type</span>
      <span class="value strong">{TypeKind.abbreviation(type)}</span>
    </div>

    <!-- Type ID section -->

    <!-- Instance section -->
    <div class="section">
      <span class="label">{TypeKind.toTypeKindLabel(type)}</span>
      {#if instanceType}
        <span class="instance-badge static">{instanceType}</span>
      {:else}
        <span class="instance-badge unknown">Unknown</span>
        {/if}
    </div>

    <div class="section">
    {#if idEditMode}
    <Textfield
        bind:this={idTextFieldElement}
        variant="outlined"
        bind:value={typeId}
        label="Type ID"
        style="min-width: 250px;"
        onblur={() => idEditMode = false}
        onkeydown={(e) => {
            if (e.key === 'Enter') {
                e.stopPropagation();
                idEditMode = false;
            }
        }}
      />
    {:else}
      <span class="label">Type ID</span>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span class="value mono">{typeId}</span>
        {#if canEditId}
            <OscdIconActionButton
                type="edit"
                tooltip="Edit"
                tooltipSide="bottom"
                size="20px"
                onClick={() => {
                    idEditMode = true;
                    setTimeout(() => idTextFieldElement?.focus(), 100);
                }}
            />
      {/if}
      </div>
    {/if}
    </div>
  </div>

  <style>

  /* Info section grid */
  .info-section {
    display: grid;
    grid-auto-flow: column;
    gap: 2.8rem;
    align-items: self-start;
    min-height: 57px;
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

  </style>