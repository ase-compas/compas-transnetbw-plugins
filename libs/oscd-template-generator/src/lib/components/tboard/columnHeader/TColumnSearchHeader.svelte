<script lang="ts">
  import { OscdInput } from '@oscd-transnet-plugins/oscd-component';
  import TColumnHeaderLayout from './TColumnHeaderLayout.svelte';

  interface Props {
    title: string;
    subtitle?: string | null;
    actionLabel?: string | null;
    search?: string;
    hasSearch?: boolean;
    searchPlaceHolder?: string;
    hasAction?: boolean;

    onAction: () => void;
    onSearch(event: { value: string }): void;
  }

  let {
    title,
    subtitle = null,
    actionLabel = null,
    search = $bindable(''),
    hasSearch = false,
    searchPlaceHolder = 'Search...',
    hasAction = false,

    onAction = () => {},
    onSearch = (_) => {},
  }: Props = $props();

</script>

<TColumnHeaderLayout
  {title}
  {subtitle}
  {actionLabel}
  {hasAction}
  onAction={onAction}
>
  {#snippet botAction()}
    {#if hasSearch}
      <OscdInput
        bind:value={search}
        icon="search"
        label={searchPlaceHolder}
        variant="outlined"
        styles="background: var(--oscd-base2,#fff)"
        oninput={() => onSearch({ value: search })}
      />
    {/if}
  {/snippet}
</TColumnHeaderLayout>
