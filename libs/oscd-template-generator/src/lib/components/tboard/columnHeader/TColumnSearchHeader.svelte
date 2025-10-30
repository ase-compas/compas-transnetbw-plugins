<script lang="ts">
  import { OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import { createEventDispatcher } from 'svelte';
  import TColumnHeaderLayout from './TColumnHeaderLayout.svelte';

  const dispatch = createEventDispatcher();

  interface Props {
    title: string;
    subtitle?: string | null;
    actionLabel?: string | null;
    search?: string;
    hasSearch?: boolean;
    searchPlaceHolder?: string;
    hasAction?: boolean;
  }

  let {
    title,
    subtitle = null,
    actionLabel = null,
    search = $bindable(''),
    hasSearch = false,
    searchPlaceHolder = 'Search...',
    hasAction = false
  }: Props = $props();

</script>

<TColumnHeaderLayout
  {title}
  {subtitle}
  {actionLabel}
  {hasAction}
  on:action={() => dispatch('action')}
>
  {#snippet botAction()}
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
  {/snippet}
</TColumnHeaderLayout>
