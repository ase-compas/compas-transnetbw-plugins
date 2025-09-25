<script lang="ts">
  import { OscdButton } from '@oscd-transnet-plugins/oscd-component';
  import { createEventDispatcher } from 'svelte';
  import TColumnHeaderLayout from './TColumnHeaderLayout.svelte';

  const dispatch = createEventDispatcher();

  export let title: string;
  export let subtitle: string | null = null;
  export let actionLabel: string | null = null;
  export let hasAction: boolean = false
  export let secondaryActionLabel: string | null = null;

</script>

<TColumnHeaderLayout
  {title}
  {subtitle}
  {actionLabel}
  {hasAction}
>
  <svelte:fragment slot="bot-action">
    <OscdButton
      variant="raised"
      callback={() => dispatch('secondaryAction')}>
      {secondaryActionLabel}
    </OscdButton>
  </svelte:fragment>
</TColumnHeaderLayout>
