<script lang="ts">
  /**
   * OscdCardList.svelte
   * ----------------------------
   * A generic card list component with optional search input and action button.
   *
   * ## Props:
   * - `title: string` – Main title of the card list (required)
   * - `secondaryTitle: string | null` – Optional subtitle shown next to the title
   * - `showSearch: boolean` – Whether to display the search input (defaults to `false`)
   * - `actionText: string | null` – If set, displays a button with this label
   *
   * ## Events:
   * - `actionClick` – Emitted when the action button is clicked
   *
   * ## Slot:
   * Default slot receives a `searchQuery` prop you can use to filter content:
   *
   * ```svelte
   * <CardList title="My Items" showSearch={true} actionText="Add Item" on:actionClick={handleAdd}>
   *   <div slot="default" let:searchQuery>
   *     {#each items.filter(item => item.includes(searchQuery)) as item}
   *       <div class="card">{item}</div>
   *     {/each}
   *   </div>
   * </CardList>
   * ```
   */
  import { OscdButton, OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import { createEventDispatcher } from 'svelte';
  import { ColumnConfig } from './types';
  import Card from './Card.svelte';

  export let column: ColumnConfig;

  const dispatch = createEventDispatcher();

  let searchQuery: string = '';

  $: items = column.items.map(i => ({
    props: {...column.getCardProps(i)},
    id: i.id,
  }));

  $: filteredItems = items.filter(i =>
    i.props.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function forwardEvent(eventName: string, itemId ) {
    return () => {
      dispatch(eventName, { columnId: column.id, itemId: itemId });
    };
  }
</script>

<div class="oscd-card-list">
  <div class="oscd-card-list-header">
    <div class="oscd-list-title-bar">
      <h3 class="main-title">{column.title}
        {#if column.secondaryTitle}<span class="secondary-title">{column.secondaryTitle}</span>{/if}
      </h3>

      <div class:invisible={!column.actionText}>

        <OscdButton
          callback={column.onActionClick}
          backgroundColor="white"
        >
          {column.actionText}
        </OscdButton>
      </div>
    </div>


    <!-- Always reserve space for search input -->
    <div class="search-wrapper" class:invisible={!column.showSearch}>
      <OscdInput
        bind:value={searchQuery}
        icon="search"
        label="Search..."
        variant="outlined"
      />
    </div>
  </div>


  <div class="oscd-card-list-body">
    {#each filteredItems as item (item.id)}
      <Card
        {...item.props}
        on:edit={forwardEvent('edit', item.id)}
        on:mark={forwardEvent('mark', item.id)}
        on:select={forwardEvent('select', item.id)}
        on:click={forwardEvent('click', item.id)}
      />
    {/each}
  </div>
</div>


<style>

  .invisible {
    visibility: hidden;
  }


  .oscd-card-list-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .oscd-card-list {
    color: var(--mdc-theme-primary)
  }

  .oscd-card-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 350px;
    width: 100%;
  }

  .main-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.2;
  }

  .secondary-title {
    opacity: 0.6;
    font-weight: 500;
  }

  .oscd-list-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
</style>
