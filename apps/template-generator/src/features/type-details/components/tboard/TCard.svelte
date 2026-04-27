<script lang="ts">
  import { OscdIconActionButton, OscdTooltip } from '@oscd-transnet-plugins/oscd-component';
  import Checkbox from '@smui/checkbox';
  import Button, {Icon, Label} from '@smui/button';
  import { OscdLockIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { TypeKind } from '../../../../shared/model';

  interface Props {
    title: string;
    subtitle?: string | null;
    references?: number | null;
    badgeText?: string | null;
    canEdit?: boolean;
    canMark?: boolean;
    canApplyDefaults?: boolean;
    canClick?: boolean;
    canUnlink?: boolean;
    canClickReference?: boolean;
    selectionEnabled?: boolean;
    selected?: boolean;
    isMandatory?: boolean;
    showSelectionIndicator: boolean;
    marked?: boolean;
    isDragTarget?: boolean;
    canDrop?: boolean;
    isOver?: boolean;
    canDrag?: boolean;
    referencable?: boolean;
    isDefaultType?: boolean;
    defaultTypeVersion?: string;
    defaultTypeRootId?: string;
    defaultTypeInstance?: string;
    defaultTypeKind?: TypeKind;

    // Callbacks
    onClick?: () => void;
    onMarked?: (marked: boolean) => void;
    onEdit?: () => void;
    onApplyDefaults?: () => void;
    onUnlink?: () => void;
    onReferenceClick?: () => void;
    onAddReferenceClick?: () => void;
    onSelectChange?: () => void;
    onDefaultTypeClick?: () => void;
  }

  let {
    title,
    subtitle = null,
    references = null,
    badgeText = null,
    canEdit = false,
    canMark = false,
    canApplyDefaults = false,
    canClick = false,
    canUnlink = true,
    canClickReference = true,
    selectionEnabled = false,
    selected = false,
    isMandatory = false,
    showSelectionIndicator,
    marked = false,
    isDragTarget = false,
    canDrop = false,
    isOver = false,
    canDrag = false,
    referencable = false,
    isDefaultType = false,
    defaultTypeVersion = '',
    defaultTypeRootId = '',
    defaultTypeInstance = '',
    defaultTypeKind,
    onClick = () => {},
    onMarked = (_: boolean) => {},
    onEdit = () => {},
    onApplyDefaults = () => {},
    onUnlink = () => {},
    onReferenceClick = () => {},
    onAddReferenceClick = () => {},
    onSelectChange = () => {},
    onDefaultTypeClick = () => {},
  }: Props = $props();


  function getCardState(isDragTarget, canDrop, selectionEnabled, isMandatory, selected): 'drag-can-drop' | 'drag-cannot-drop' | 'mandatory' | 'selected' | 'unselected' | 'default' {
    if (isDragTarget) return canDrop ? 'drag-can-drop' : 'drag-cannot-drop';
    if(selectionEnabled) {
      if(isMandatory) return 'mandatory';
      return selected ? 'selected' : 'unselected';
    }
    return 'default'
  }

  // ==== Event Handlers ====
  function handleOnClick() { if (canClick) onClick(); }
  function toggleMark() { if(canMark) onMarked(!marked); }
  function handleOnEdit() { if (canEdit) onEdit(); }
  function handleOnApplyDefaults() { if (canApplyDefaults) onApplyDefaults(); }
  function handleOnUnlink() { if (canUnlink) onUnlink(); }
  function handleOnReferenceClick(e: Event) { e.stopPropagation(); if (canClickReference) onReferenceClick(); }

  let cardState= $derived(getCardState(isDragTarget, canDrop, selectionEnabled, isMandatory, selected));
  let onPrimaryColor = $derived(((selected || isMandatory) && !isDragTarget) ? 'white' : 'var(--mdc-theme-primary)');
  let referenceButtonState = $derived.by(() => {
    if (referencable) {
      if (isDragTarget && canDrop) return 'drop';
      if (subtitle) return 'has-reference';
      if (isMandatory || selected) return 'needs-reference';
      return 'no-reference';
    }
    return 'not-referencable';

  });

  let defaultTypeTooltipContent = $derived.by(() => {
    if (!isDefaultType || !defaultTypeVersion || !defaultTypeRootId) {
      return '';
    }
    return `Version: v${defaultTypeVersion}\nRoot Type: ${defaultTypeRootId}\nDefault Key: ${TypeKind.abbreviation(defaultTypeKind)}/${defaultTypeInstance}`;
  });
</script>

<div
  class="oscd-card-item {cardState} {canClick ? 'clickable' : ''}"
  class:marked={marked}
  class:is-over={isOver}
  class:error={(isMandatory || selected) && referencable && !subtitle && !isDragTarget}
  class:draggable={canDrag}
  role={canClick ? 'button' : 'undefined'}
  onclick={handleOnClick}
>

  <!-- Selection Checkbox: Start -->
  {#if selectionEnabled && showSelectionIndicator}
    <div class="selection">
      {#if isMandatory}
        <OscdTooltip content="Mandatory Object" hoverDelay={500}>
          <OscdLockIcon width="33px" svgStyles={`fill: ${onPrimaryColor}`}/>
        </OscdTooltip>
      {:else}
        <OscdTooltip content="Configure" hoverDelay={500}>
          <Checkbox checked={selected} onchange={onSelectChange} onclick={e => e.stopPropagation()}/>
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
        {#if isDefaultType && defaultTypeVersion}
          <OscdTooltip content={defaultTypeTooltipContent} side="left">
            <span class="default-type-star">★</span>
          </OscdTooltip>
        {/if}
        {#if canUnlink}
          <OscdIconActionButton
            type="link-off"
            tooltip="Remove Reference"
            onClick={handleOnUnlink}
            fillColor={onPrimaryColor}
          />
        {/if}
        {#if canApplyDefaults}
          <OscdIconActionButton
            type="wand-stars"
            tooltip="Apply Defaults"
            onClick={handleOnApplyDefaults}
            fillColor={onPrimaryColor}
          />
        {/if}
        {#if canMark}
          <OscdIconActionButton
            type="visibility"
            tooltip="Mark"
            onClick={toggleMark}
            fillColor={marked ? '#D9D800': onPrimaryColor}
          />
        {/if}
        {#if canEdit}
          <OscdIconActionButton
            type="edit"
            tooltip="Edit"
            onClick={handleOnEdit}
            fillColor={onPrimaryColor}
          />
        {/if}
      </div>
      <!-- Actions: End -->
    </div>
    <!-- Header Row: End -->

    <div class="sub-row">

  {#if referencable}
    <OscdTooltip content={subtitle ? subtitle : 'Add reference'} hoverDelay={500} side="right">
      <Button
        variant={subtitle ? "outlined" : "unelevated"}
        class="reference-button {referenceButtonState ? referenceButtonState : ''}"
        onclick={(e) => {
          e.stopPropagation();
          if (subtitle) {
            handleOnReferenceClick(e);
          } else {
            onAddReferenceClick();
          }
        }}
        >
        {#if subtitle}
          <Icon class="material-icons">call_made</Icon>
          <Label>{subtitle.length > 25 ? subtitle.slice(0, 20) + '...' : subtitle}</Label>
        {:else}
          {#if referenceButtonState === 'needs-reference'}
            <Icon class="material-icons">warning</Icon>
          {:else}
            <Icon class="material-icons">add_circle</Icon>
          {/if}
          <Label>Add Reference</Label>
        {/if}
      </Button>
    </OscdTooltip>
  {/if}
      {#if badgeText}<span class="oscd-card-chip">{badgeText}</span>{/if}
    </div>
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

  .oscd-card-item.error {
    outline: 2px solid #FF6B6B;
    box-shadow: 0 0 8px 2px rgba(255, 107, 107, 0.5);
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
  .oscd-card-item.selected .oscd-references,
  .oscd-card-item.mandatory .oscd-card-title {
    color: white;
  }

  .oscd-card-item.unselected {
    background-color: #F0F4F6; /* subtle bluish-gray */

    outline: 1px solid #E0E0E0;
    border-left: 4px solid var(--mdc-theme-primary, #004552); /* clickable accent */
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
    min-height: 30px;
  }

  .sub-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    word-break: break-word;
    gap: 0.35rem;
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
    font-size: 1rem;
    font-weight: 500;
    color: var(--mdc-theme-primary);
    line-height: 1.2;
  }

  /* Base subtitle */
  .oscd-card-subtitle {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--mdc-theme-primary);
    opacity: 0.8;
    line-height: 1.2;
    border-radius: 8px;
    padding: 0.15rem 0.4rem;
    outline: 2px solid var(--mdc-theme-primary, #004552);
    transition: all 0.2s ease;
  }

  /* Neutral unreferenced */
  .oscd-card-subtitle.empty {
    color: #6E7C7C; /* subtle gray */
    font-style: italic;
    opacity: 0.9;
    outline: 1px dashed #B0BEC5;
    background: rgba(0, 69, 82, 0.03);
    cursor: default;
  }

  /* Error / required state */
  .oscd-card-subtitle.error-state {
    color: var(--oscd-error);
    font-style: italic;
    outline: 2px dashed var(--oscd-error);
    background: rgba(255, 76, 76, 0.05);
  }

  .oscd-card-subtitle.drop {
    outline: 2px dashed #9dcaf5;
    color: var(--mdc-theme-primary, #004552);
  }

  .oscd-card-subtitle--with-tooltip {
    all: unset;
    display: flex;
    align-items: center;
  }

  .oscd-references {
    padding-right: 4px;
    white-space: nowrap;
  }


  .clickable:hover {
    cursor: pointer;
    filter: brightness(1.05); /* 5% brighter */
    transition: filter 0.2s ease;
  }

  .oscd-card-chip {
    display: inline-flex;
    align-items: center;
    height: 1.5rem;
    font-size: 0.8rem;
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

  .pointer {
    cursor: pointer;
  }

  .oscd-card-subtitle__add-reference {
     all: unset;
     cursor: pointer;
     display: flex;
     align-items: center;
     gap: 0.1rem;
  }

  .oscd-card-subtitle__add-reference:hover {
     cursor: pointer;
  }

  :global(.oscd-card-item .selection .oscd-icon svg) {
    all: unset;
  }

  :global(.oscd-card-item .reference-button) {
    min-height: 28px !important;
    padding: 1px 8px !important;
    font-size: 12px !important;
    line-height: 16px !important;
    letter-spacing: 0.02em !important;
    border-radius: 6px !important;
    text-transform: none !important;
  }

  :global(.oscd-card-item .reference-button.has-reference) {
    color: var(--mdc-theme-on-primary) !important;
    border-color: var(--mdc-theme-on-primary) !important;
    text-transform: none !important;
  }

  :global(.oscd-card-item .reference-button.needs-reference) {
    background: var(--oscd-error) !important;
  }

  :global(.oscd-card-item .reference-button.no-reference) {
    background: var(--primary) !important;
  }

  :global(.oscd-card-item .reference-button.drop) {
    background: none !important;
    outline: 2px dashed #9dcaf5;
    color: var(--mdc-theme-primary, #004552);
  }

  .default-type-star-button {
    all: unset;
    font-size: 1.2rem;
    color: #FFD700;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    display: inline-flex;
    align-items: center;
    line-height: 1;
    cursor: pointer;
    transition: transform 0.2s ease, filter 0.2s ease;
  }

  .default-type-star {
    font-size: 1.2rem;
    color: var(--mdc-theme-primary, #004552);
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    line-height: 1;
  }

  :global(.oscd-card-item .reference-button.has-reference:hover .mdc-button__label) {
    text-decoration: underline !important;
  }
</style>
