<script lang="ts">

  import Checkbox from '@smui/checkbox';

  export let id: string;
  export let label: string;
  export let selected: boolean = false;
  export let showCheckbox: boolean = true;

  // dispatch event when selected changes
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    dispatch('toggle', { id, selected: target.checked });
  }
</script>


<div class="enum-list-item" class:selected={selected}>
  {#if showCheckbox}
    <Checkbox checked={selected} on:change={handleChange} />
  {/if}
  <span class="enum-list-item__id">{id}</span>
  <span class="enum-list-item__label">{label}</span>
</div>

<style lang="css">
  .enum-list-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: var(--mdc-theme-primary);
    background: white;
    line-height: 1.2;
    border-radius: 8px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .enum-list-item.selected {
    background-color: var(--mdc-theme-primary, #ff3e00);
    color: white;
  }

  .enum-list-item__id {
    display: inline-block;
    text-align: right;
    min-width: 2rem;
    font-weight: 200;
    margin-right: 1.2rem;
  }

  .enum-list-item__label {
    flex-grow: 1;
    font-weight: 500;
  }

</style>
