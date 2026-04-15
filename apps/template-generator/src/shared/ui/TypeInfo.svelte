<script lang="ts">
  import Textfield from '@smui/textfield';
  import { TypeKind } from '../model';
  import OscdIconActionButton from 'libs/oscd-component/src/oscd-icon-action-button/OscdIconActionButton.svelte';
  import { onMount, tick } from 'svelte';

  interface Props {
    kind: TypeKind;
    typeId: string;
    instance?: string | null;
    canEditId?: boolean;
    onIdChange?: (newId: string) => void;
  }

  let {
    kind: type,
    typeId = $bindable(''),
    instance: instanceType = null,
    canEditId = false,
    onIdChange,
  }: Props = $props();

  let idTextFieldElement: Textfield | null = $state(null);
  let idEditMode = $state(false);
  let typeIdRequiredButMissing = $state(false);

  const showIdEditor = $derived(idEditMode || typeIdRequiredButMissing);

  function isTypeIdMissing(): boolean {
    return !typeId.trim();
  }

  function submitTypeId() {
    idEditMode = false;
    typeIdRequiredButMissing = isTypeIdMissing();
    onIdChange?.(typeId);
  }

  async function enterIdEditMode() {
    idEditMode = true;
    await tick();
    idTextFieldElement?.focus();
  }

  function onTypeIdKeydown(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;
    event.stopPropagation();
    submitTypeId();
  }

  onMount(() => {
    if (!isTypeIdMissing()) return;
    typeIdRequiredButMissing = true;
    idEditMode = true;
  });
</script>
  

<div class="info-section">
    <div class="section">
      <span class="label">Type</span>
      <span class="value strong">{TypeKind.abbreviation(type)}</span>
    </div>

    <div class="section">
      <span class="label">{TypeKind.toTypeKindLabel(type)}</span>
      {#if instanceType}
        <span class="instance-badge static">{instanceType}</span>
      {:else}
        <span class="instance-badge unknown">Unknown</span>
      {/if}
    </div>

    <div class="section">
      {#if showIdEditor}
      <Textfield
        bind:this={idTextFieldElement}
        variant="outlined"
        bind:value={typeId}
        required
        initialInvalid
        label="Type ID"
        style="min-width: 250px;"
        onblur={submitTypeId}
        onkeydown={onTypeIdKeydown}
      />
      {:else}
        <span class="label">Type ID</span>
        <div class="type-id-row">
          <span class="value mono">{typeId}</span>
          {#if canEditId}
            <OscdIconActionButton
              type="edit"
              tooltip="Edit"
              tooltipSide="bottom"
              size="20px"
              onClick={enterIdEditMode}
            />
          {/if}
        </div>
      {/if}
    </div>
</div>

<style>

  .info-section {
    display: grid;
    grid-auto-flow: column;
    gap: 2.8rem;
    align-items: self-start;
    min-height: 57px;
  }

  .section {
    display: grid;
    row-gap: 0.2rem;
  }

  .label {
    font-size: 0.7rem;
    font-weight: 600;
    color: #555;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .value {
    font-size: 1.1rem;
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
    font-size: 0.8rem;
  }

  .instance-badge.static {
    background: var(--mdc-theme-primary, #ff3e00);
    color: white;
  }

  .instance-badge.unknown {
    white-space: nowrap;
    color: var(--mdc-theme-primary, #ff3e00);
    border: 1px dashed var(--mdc-theme-primary, #ff3e00);
    transition: background 0.2s, border-color 0.2s;
  }

  .type-id-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

</style>