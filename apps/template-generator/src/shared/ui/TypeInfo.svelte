<script lang="ts">
  import Textfield from '@smui/textfield';
  import { TypeKind } from '../model';
  import OscdIconActionButton from 'libs/oscd-component/src/oscd-icon-action-button/OscdIconActionButton.svelte';
  import HeaderElement from './HeaderElement.svelte';
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
  <HeaderElement label="Type" textOnly>
    {#snippet children()}
      <span class="value">{TypeKind.abbreviation(type)}</span>
    {/snippet}
  </HeaderElement>

  <HeaderElement label={TypeKind.toTypeKindLabel(type)} textOnly>
    {#snippet children()}
      {#if instanceType}
        <span class="value">{instanceType}</span>
      {:else}
        <span class="value value--muted">Unknown</span>
      {/if}
    {/snippet}
  </HeaderElement>

  <HeaderElement label={showIdEditor ? undefined : 'Type ID'} textOnly>
    {#snippet children()}
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
        <div class="type-id-row">
          <span class="value">{typeId}</span>
          {#if canEditId}
            <OscdIconActionButton
              type="edit"
              tooltip="Rename"
              tooltipSide="bottom"
              size="20px"
              onClick={enterIdEditMode}
            />
          {/if}
        </div>
      {/if}
    {/snippet}
  </HeaderElement>
</div>

<style>
  .info-section {
    display: grid;
    grid-auto-flow: column;
    gap: 2.8rem;
    align-items: self-start;
    min-height: 57px;
  }

  .value--muted {
    color: #54727d;
    opacity: 0.9;
  }

  .type-id-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

</style>