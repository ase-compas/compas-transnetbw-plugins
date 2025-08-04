<script lang="ts">
  import { OscdIconActionButton } from '@oscd-transnet-plugins/oscd-component';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // ===== Parameters =====
  export let title: string;
  export let subtitle: string | null = null;
  export let references: number | null = null;
  export let marked: boolean = false;
  export let selected: boolean = false;

  export let canEdit: boolean = false;
  export let canMark: boolean = false;
  export let canClick: boolean = false;
  export let canSelect: boolean = false;


  function handleOnClick() {
    if (canClick) {
      dispatch('click');
    }
  }

  function handleOnMark() {
    if (canMark) {
      dispatch('mark');
    }
  }

  function handleOnEdit() {
    if (canEdit) {
      dispatch('edit');
    }
  }

</script>

<div
  class="oscd-card-item"
  role={canClick ? 'button' : 'undefined'}
  tabindex={canClick ? 0 : undefined}
  class:marked={marked}
  class:clickable={canClick}
  on:click={handleOnClick}
  disabled={!canClick}
>
  <div class="header-row">
    <span class="oscd-card-title">{title}</span>
    <div class="actions">

      {#if canMark}
        <OscdIconActionButton
          type="visibility"
          tooltip="Mark"
          onClick={handleOnMark}
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
  </div>

  <div class="sub-row">
    <span class="oscd-card-subtitle" class:invisible={!subtitle}>{subtitle}</span>
    <span class="oscd-card-subtitle oscd-references" class:invisible={references === null}>{references}</span>
  </div>

</div>

<style>
  div.oscd-card-item {
    all: unset;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.4rem;
    background-color: white;
    border-radius: 8px;
    transition: background-color 0.2s ease;
  }

  div.oscd-card-item.marked {
    background-color: #D9D800;
  }

  div.oscd-card-item.clickable:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
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
</style>



