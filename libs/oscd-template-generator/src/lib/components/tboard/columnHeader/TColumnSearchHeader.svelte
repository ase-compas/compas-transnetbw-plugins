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
  export let searchPlaceHolder: string = 'Search...';
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
      label={searchPlaceHolder}
      variant="outlined"
      styles="background: var(--oscd-base2,#fff)"
      on:input={() => dispatch('search', { value: search })}
    />
  {/if}
  </svelte:fragment>
</TColumnHeaderLayout>
