<script lang="ts">
  import { OscdIconActionButton, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import { createEventDispatcher } from 'svelte';
  import Checkbox from '@smui/checkbox';
  import { OscdWarningIcon, OscdLockIcon } from '@oscd-transnet-plugins/oscd-icons';

  const dispatch = createEventDispatcher();

  export let title: string;
  export let subtitle: string | null = null;
  export let references: number | null = null;
  export let badgeText: string | null = null;

  export let canEdit: boolean = false;
  export let canMark: boolean = false;
  export let canApplyDefaults: boolean = false;
  export let canClick: boolean = false;
  export let canUnlink: boolean = true;

  export let selectionEnabled: boolean = false;
  export let selected: boolean = false;
  export let isMandatory: boolean = false;
  export let showSelectionIndicator: boolean

  export let marked: boolean = false;

  export let isDragTarget: boolean = false; // Indicates if the card is a valid drop target
  export let canDrop: boolean = false; // Indicates if the card can accept a drop of the dragged card
  export let isOver: boolean = false; // Indicates if the card is currently being hovered over by a dragged card
  export let canDrag: boolean = false; // Indicates if the card can be dragged


  export let error: boolean = false;
  export let errorMessage: string | null = null;

  $: cardState= getCardState(isDragTarget, canDrop, selectionEnabled, isMandatory, selected);

  function getCardState(isDragTarget, canDrop, selectionEnabled, isMandatory, selected): 'drag-can-drop' | 'drag-cannot-drop' | 'mandatory' | 'selected' | 'unselected' | 'default' {
    if (isDragTarget) return canDrop ? 'drag-can-drop' : 'drag-cannot-drop';
    if(selectionEnabled) {
      if(isMandatory) return 'mandatory';
      return selected ? 'selected' : 'unselected';
    }
    return 'default'
  }



  // ==== Event Handlers ====
  function handleOnClick() { if (canClick) dispatch('click'); }
  function toggleMark() { if(canMark) dispatch('marked', !marked); }
  function handleOnEdit() { if (canEdit) dispatch('edit'); }
  function handleOnApplyDefaults() { if (canApplyDefaults) dispatch('applyDefaults'); }
  function handleOnUnlink() { if (canUnlink) dispatch('unlink'); }

</script>

<div
  class="oscd-card-item {cardState}"
  class:marked={marked}
  class:is-over={isOver}
  class:error={error && !isDragTarget}
  class:draggable={canDrag}
  role={canClick ? 'button' : 'undefined'}
  on:click={handleOnClick}
>

  <!-- Selection Checkbox: Start -->
  {#if selectionEnabled && showSelectionIndicator}
    <div class="selection">
      {#if isMandatory}
        <OscdTooltip content="Mandatory Object" hoverDelay={500}>
          <OscdLockIcon width="33px" svgStyles={selected || isMandatory ? 'fill: white' : 'fill: gray'}/>
        </OscdTooltip>
      {:else}
        <OscdTooltip content="Configure" hoverDelay={500}>
          <Checkbox checked={selected} on:change={() => dispatch('selectChange')}/>
        </OscdTooltip>
      {/if}
    </div>
  {/if}
  <!-- Selection Checkbox: End -->


  <div class="content">

    <!-- Header Row: Start -->
    <div class="header-row">

      <span class="oscd-card-title">{title}</span>

      <!-- Actions: Start -->
      <div class="actions">
        <span class="oscd-references" class:invisible={!references}>{references}</span>
        {#if canUnlink}
          <OscdIconActionButton
            type="link-off"
            tooltip="Remove Reference"
            onClick={handleOnUnlink}
            fillColor={selected || isMandatory ? 'white' : 'var(--mdc-theme-primary)' }
          />
        {/if}
        {#if canApplyDefaults}
          <OscdIconActionButton
            type="wand-stars"
            tooltip="Apply Defaults"
            onClick={handleOnApplyDefaults}
            fillColor={selected || isMandatory ? 'white' : 'var(--mdc-theme-primary)' }
          />
        {/if}
        {#if canMark}
          <OscdIconActionButton
            type="visibility"
            tooltip="Mark"
            onClick={toggleMark}
            fillColor={marked ? '#D9D800': (selected  || isMandatory ? 'white' : 'var(--mdc-theme-primary)') }
          />
        {/if}
        {#if canEdit}
          <OscdIconActionButton
            type="edit"
            tooltip="Edit"
            onClick={handleOnEdit}
            fillColor={selected || isMandatory ? 'white' : 'var(--mdc-theme-primary)' }
          />
        {/if}
      </div>
      <!-- Actions: End -->
    </div>
    <!-- Header Row: End -->

    <div class="sub-row">
      <span class="oscd-card-subtitle" class:invisible={!subtitle}>{subtitle}</span>
      {#if badgeText}<span class="oscd-card-chip">{badgeText}</span>{/if}
    </div>

    {#if error && errorMessage}
      <div class="oscd-card-item__error-message">
        <OscdWarningIcon size="18px" fill="red"/><span>{errorMessage}</span>
      </div>
    {/if}

  </div>
</div>

<style>
  div.oscd-card-item {
    all: unset;
    padding: 0.4rem;
    border-radius: 8px;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
  }

  div.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Marked, Selected, etc. — your existing states */
  .oscd-card-item.marked {
    outline: 2px solid #D9D800;
    box-shadow: 0 0 6px 2px rgba(217, 216, 0, 0.3); /* soft glow */

  }
  .oscd-card-item.selected, .oscd-card-item.mandatory {
    background-color: var(--mdc-theme-primary, #ff3e00);
  }

  .oscd-card-item.selected .oscd-card-title,
  .oscd-card-item.selected .oscd-card-subtitle,
  .oscd-card-item.selected .oscd-references,
  .oscd-card-item.mandatory .oscd-card-title,
  .oscd-card-item.mandatory .oscd-card-subtitle,
  .oscd-card-item.mandatory .oscd-card-references {
    color: white;
  }

  .oscd-card-item.unselected {
    background-color: #F0F4F6; /* subtle bluish-gray */

    outline: 1px solid #E0E0E0;
    border-left: 4px solid var(--mdc-theme-primary, #004552); /* clickable accent */
    padding-left: 0.75rem; /* space for stripe */
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  .oscd-card-item.unselected.marked {
    outline: 2px solid #D9D800; /* yellow override */
    box-shadow: 0 0 6px 2px rgba(217, 216, 0, 0.3);
  }

  .oscd-card-item.default {
    background-color: white;
  }

  .oscd-card-item.draggable:hover {
    background-color: rgba(0, 69, 82, 0.05);
  }

  /* ✅ Drop target — valid */
  .oscd-card-item.drag-can-drop {
    outline: 2px dashed #2196F3; /* Material Blue 500 */
    background-color: #E3F2FD; /* Light blue */
    box-shadow: 0 0 4px 1px rgba(33, 150, 243, 0.3);
  }

  .oscd-card-item.drag-can-drop.is-over {
    background-color: #BBDEFB; /* darker blue */
    box-shadow: 0 0 6px 2px rgba(33, 150, 243, 0.4);
  }

  /* ❌ Drop target — invalid */
  .oscd-card-item.drag-cannot-drop {
    outline: 2px dashed transparent;
    background-color: #F5F5F5; /* light gray */
    opacity: 0.6;
  }


  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: start;
    word-break: break-word;
    gap: 0.5rem;
  }

  .sub-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    word-break: break-word;
    gap: 2rem;
  }

  .actions {
    display: flex;
    gap: 0.1rem;
    align-items: center;
  }

  .invisible {
    visibility: hidden;
  }

  .oscd-card-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--mdc-theme-primary);
    line-height: 1.2;
  }

  .oscd-card-subtitle {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--mdc-theme-primary);
    opacity: 0.8;
    line-height: 1.2;
  }

  .oscd-references {
    padding-right: 4px;
    white-space: nowrap;
  }

  .clickable:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .oscd-card-item.error {
    outline: 2px solid red;
    box-shadow: 0 0 6px 2px rgba(255, 0, 0, 0.3); /* red glow */
  }

  .oscd-card-item__error-message {
    display: flex;
    align-items: center;
    color: red;
    font-weight: 500;
    font-size: 0.8rem;
  }

  .oscd-card-chip {
    display: inline-flex;
    align-items: center;
    height: 1.5rem;
    font-size: 0.85rem;
    padding: 0 0.5rem;
    border-radius: 8px;
    background: #DAE3E6;
    color: var(--mdc-theme-primary);;
    font-weight: 500;
    white-space: nowrap;
  }

  .selection {
    min-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.3rem
  }

  :global(.oscd-card-item .selection .oscd-icon svg) {
    all: unset;
  }
</style>
