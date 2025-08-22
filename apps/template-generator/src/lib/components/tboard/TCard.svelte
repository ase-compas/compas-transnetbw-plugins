<script lang="ts">
  import { OscdIconActionButton } from '@oscd-transnet-plugins/oscd-component';
  import { createEventDispatcher } from 'svelte';
  import Checkbox from '@smui/checkbox';
  import { OscdWarningIcon } from '@oscd-transnet-plugins/oscd-icons';

  const dispatch = createEventDispatcher();

  export let title: string;
  export let subtitle: string | null = null;
  export let references: number | null = null;
  export let badgeText: string | null = null;

  export let canEdit: boolean = false;
  export let canMark: boolean = false;
  export let canSelect: boolean = false;
  export let canClick: boolean = false;

  export let marked: boolean = false;
  export let selected: boolean = false;

  export let isDragTarget: boolean = false; // Indicates if the card is a valid drop target
  export let canDrop: boolean = false; // Indicates if the card can accept a drop of the dragged card
  export let isOver: boolean = false; // Indicates if the card is currently being hovered over by a dragged card

  export let error: boolean = false;
  export let errorMessage: string | null = null;

  $: stateClass = getStateClass(isDragTarget, canDrop, marked, selected);

  function getStateClass(
    isDragTarget: boolean,
    canDrop: boolean,
    marked: boolean,
    selected: boolean
  ): string {
    if (isDragTarget) {
      return canDrop ? 'drag-can-drop' : 'drag-cannot-drop';
    }

    if (canMark && canSelect && marked && selected) return 'marked-selected';
    if (canMark && marked) return 'marked';
    if (canSelect && selected) return 'selected';

    return '';
  }

  function handleOnClick() {
    if (canClick) {
      dispatch('click');
    }
  }

  function toggleMark() {
    if(canMark) {
      dispatch('marked', !marked);
    }
  }

  function handleOnEdit() {
    if (canEdit) {
      dispatch('edit');
    }
  }

</script>

<div
  class="oscd-card-item {stateClass}"
  class:is-over={isOver}
  class:error={error && !isDragTarget}
  role={canClick ? 'button' : 'undefined'}
  on:click={handleOnClick}
>

  <!-- Selection Checkbox: Start -->
  {#if canSelect}
    <div class="selection">
      <Checkbox bind:checked={selected}/>
    </div>
  {/if}
  <!-- Selection Checkbox: End -->


  <div class="content">

    <!-- Header Row: Start -->
    <div class="header-row">

      <span class="oscd-card-title">{title}</span>

      <!-- Actions: Start -->
      <div class="actions">
        <span class="oscd-card-subtitle oscd-references" class:invisible={!references}>{references}</span>
        {#if canMark}
          <OscdIconActionButton
            type="visibility"
            tooltip="Mark"
            onClick={toggleMark}
          />
        {/if}
        {#if canEdit}
          <OscdIconActionButton
            type="edit"
            tooltip="Edit"
            onClick={handleOnEdit}
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
    background-color: white;
    border-radius: 8px;
    transition: background-color 0.2s ease;
    display: flex;
  }

  div.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Marked, Selected, etc. — your existing states */
  .oscd-card-item.marked {
    background-color: #D9D800;
  }
  .oscd-card-item.selected {
    background-color: #E0F7FA;
  }
  .oscd-card-item.marked-selected {
    background-color: #B2EBF2;
  }

  /* ✅ Drop target — valid */
  .oscd-card-item.drag-can-drop {
    border: 2px dashed #2196F3; /* Material Blue 500 */
    background-color: #E3F2FD; /* Light blue */
    box-shadow: 0 0 4px 1px rgba(33, 150, 243, 0.3);
  }

  .oscd-card-item.drag-can-drop.is-over {
    background-color: #BBDEFB; /* darker blue */
    box-shadow: 0 0 6px 2px rgba(33, 150, 243, 0.4);
  }

  /* ❌ Drop target — invalid */
  .oscd-card-item.drag-cannot-drop {
    border: 2px dashed transparent;
    background-color: #F5F5F5; /* light gray */
    opacity: 0.6;
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: start;
    word-break: break-word;
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
    gap: 0.1rem
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
  }

  .clickable:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .oscd-card-item.error {
    border: 2px solid red;
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
  }
</style>
