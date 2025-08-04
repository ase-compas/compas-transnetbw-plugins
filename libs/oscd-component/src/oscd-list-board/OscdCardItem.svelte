<script lang="ts">
  import { OscdIconActionButton } from '@oscd-transnet-plugins/oscd-component';
  import {createEventDispatcher} from 'svelte';
  import type { ItemState } from './types';

  // ===== Parameters =====
  export let title: string;
  export let subtitle: string | null = null;
  export let references: number | null = null;
  export let canEdit: boolean = true;
  export let canMark: boolean = true;
  export let state: ItemState = 'default';

  const dispatch = createEventDispatcher();

  const handleOnMark = () => {
    dispatch('mark');
  }

  const handleOnEdit = () => {
    dispatch('edit');
  }

  const handleOnClick = () => {
    dispatch('click');
  }

</script>

<div class="oscd-card-item" on:click={handleOnClick} class:marked={state === 'marked'}>
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
  .oscd-card-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.4rem;
    background-color: white;
    border-radius: 8px;
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

  .marked {
    background-color: #D9D800;
  }
</style>



