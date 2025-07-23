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

  export let title: string;
  export let secondaryTitle: string | null = null;
  export let showSearch: boolean = false;
  export let actionText: string | null = null;

  const dispatch = createEventDispatcher();

  let searchQuery: string = '';

  const onActionClick = () => {
    dispatch('actionClick');
  };

</script>

<div class="oscd-card-list">
  <div class="oscd-card-list-header">
    <div class="oscd-list-title-bar">
      <h3 class="main-title">{title}
        {#if secondaryTitle}<span class="secondary-title">{secondaryTitle}</span>{/if}
      </h3>

      <div class:invisible={!actionText}>

        <OscdButton
          callback={onActionClick}
          backgroundColor="white"
        >
          {actionText}
        </OscdButton>
      </div>
    </div>


    <!-- Always reserve space for search input -->
    <div class="search-wrapper" class:invisible={!showSearch}>
      <OscdInput
        bind:value={searchQuery}
        disabled={!showSearch}
        icon="search"
        label="Search..."
        variant="outlined"
      />
    </div>
  </div>


  <div class="oscd-card-list-body">
    <slot {searchQuery} />
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
