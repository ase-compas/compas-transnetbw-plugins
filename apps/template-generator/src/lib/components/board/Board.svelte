<script lang="ts">
  import IconButton from '@smui/icon-button';
  import { createEventDispatcher } from 'svelte';
  import Column from './Column.svelte';
  import { ColumnConfig } from './types';

  const dispatch = createEventDispatcher();

  export let columns: ColumnConfig[] = [];

  export let onEdit: (event: { columnId: string, itemId: string, item: any }) => void;
  export let onSelect: (event: { columnId: string, itemId: string, item: any }) => void;
  export let onMark: (event: { columnId: string, itemId: string, item: any }) => void;
  export let onClick: (event: { columnId: string, itemId: string, item: any }) => void;
</script>

<div class="oscd-board">
  {#each columns as column, index (column.id)}
    <Column
      {column}
      on:edit={(e) => onEdit && onEdit(e.detail)}
      on:select={(e) => onSelect && onSelect(e.detail)}
      on:mark={(e) => onMark && onMark(e.detail)}
      on:click={(e) => onClick && onClick(e.detail)}
    />

    {#if index < columns.length - 1}
      <div class="seperator">
        <IconButton class="material-icons" disabled={true}>chevron_right</IconButton>
      </div>
    {/if}
  {/each}
</div>

<style>
  .oscd-board {
    width: 100%;
    display: flex;
    gap: 0.5rem;
  }
</style>


