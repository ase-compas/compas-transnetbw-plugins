<script lang="ts">
  import { flip } from 'svelte/animate';
  import { OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import { createEventDispatcher } from 'svelte';
  import { EnumTypeDetails } from '../../domain';
  import EnumListItem from '../dialogs/EnumTypeDialog/EnumListItem.svelte';

  export let isDirty: boolean = false;
  export let enumType: EnumTypeDetails;

  let searchQuery = '';
  let listItems: { id: string; label: string; selected: boolean }[] = [];
  $: filteredList = listItems.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase())) ?? [];

    $: if (enumType) {
      listItems = enumType.children.map(enumValue => ({
        id: enumValue.attributes.literalValue,
        label: enumValue.name,
        selected: enumValue.meta.isConfigured
      }));
    }

  const dispatch = createEventDispatcher();

  /** Dispatch updated data on change */
  function handleItemToggle(id: string, selected: boolean) {
    // Update the item
    if (id) {
      listItems = listItems.map(i => i.id === id ? { ...i, selected } : i);
      isDirty = true;
      dispatch('change', {
        isDirty,
        updatedItems: listItems.map(i => ({ id: i.id, selected: i.selected }))
      });
    }
  }
</script>

<div class="header">
  <h2>ID: {enumType?.id}</h2>
  <h4>Instance Type: {enumType?.instanceType ?? 'Unknown'}</h4>
</div>


<OscdInput
  bind:value={searchQuery}
  icon="search"
  label="Search..."
  variant="outlined"
/>

{#if listItems && listItems.length > 0}
  <ul class="enum-list">
    {#each filteredList as item (item.id)}
      <li animate:flip={{ duration: 200 }}>
        <EnumListItem
          id={item.id}
          label={item.label}
          selected={item.selected}
          showCheckbox={true}
          on:toggle={(e) => handleItemToggle(item.id, e.detail.selected)}
        />
      </li>
    {/each}
  </ul>
{:else}
  <div class="no-results">
    {#if searchQuery}
      <p>No results for "{searchQuery}".</p>
    {:else}
      <p>No values available.</p>
    {/if}
  </div>
{/if}



<style lang="css">
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .enum-list {
    overflow-y: auto;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .no-results {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
  }

  .no-results p {
    margin: 0;
  }

  .action {
    display: flex;
    justify-content: flex-end;
  }
</style>
