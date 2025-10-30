<script lang="ts">
  import { OscdButton } from '@oscd-transnet-plugins/oscd-component';
  import { createEventDispatcher } from 'svelte';
  import TColumnHeaderLayout from './TColumnHeaderLayout.svelte';

  const dispatch = createEventDispatcher();

  interface Props {
    title: string;
    subtitle?: string | null;
    actionLabel?: string | null;
    hasAction?: boolean;
    secondaryActionLabel?: string | null;
  }

  let {
    title,
    subtitle = null,
    actionLabel = null,
    hasAction = false,
    secondaryActionLabel = null
  }: Props = $props();

</script>

<TColumnHeaderLayout
  {title}
  {subtitle}
  {actionLabel}
  {hasAction}
>
  <!-- @migration-task: migrate this slot by hand, `bot-action` is an invalid identifier -->
  <svelte:fragment slot="bot-action">
    <OscdButton
      variant="raised"
      callback={() => dispatch('secondaryAction')}>
      {secondaryActionLabel}
    </OscdButton>
  </svelte:fragment>
</TColumnHeaderLayout>
