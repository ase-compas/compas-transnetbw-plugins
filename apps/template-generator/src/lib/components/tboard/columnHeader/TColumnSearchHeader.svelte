<script lang="ts" xmlns:svelte="http://www.w3.org/1999/html">
  import { OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import { createEventDispatcher } from 'svelte';
  import TColumnHeaderLayout from './TColumnHeaderLayout.svelte';

  const dispatch = createEventDispatcher();

  export let title: string;
  export let subtitle: string | null = null;
  export let actionLabel: string | null = null;
  export let search: string = '';
  export let hasSearch: boolean = false;
  export let hasAction: boolean = false;

</script>

<TColumnHeaderLayout
  {title}
  {subtitle}
  {actionLabel}
  {hasAction}
  on:action={() => dispatch('action')}
>
<svelte:fragment slot="bot-action">
  {#if hasSearch}
    <OscdInput
      bind:value={search}
      icon="search"
      label="Search..."
      variant="outlined"
      on:input={() => dispatch('search', { value: search })}
    />
  {/if}
  </svelte:fragment>
</TColumnHeaderLayout>
