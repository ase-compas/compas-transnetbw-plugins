<script lang="ts">
  import { OscdButton } from '@oscd-transnet-plugins/oscd-component';
  import TColumnHeaderLayout from './TColumnHeaderLayout.svelte';


  interface Props {
    title: string;
    subtitle?: string | null;
    actionLabel?: string | null;
    hasAction?: boolean;
    secondaryActionLabel?: string | null;

    onSecondaryAction: () => void;
  }

  let {
    title,
    subtitle = null,
    actionLabel = null,
    hasAction = false,
    secondaryActionLabel = null,

    onSecondaryAction = () => {},
  }: Props = $props();

</script>

<TColumnHeaderLayout
  {title}
  {subtitle}
  {actionLabel}
  {hasAction}
>
  {#snippet botAction()}
    <OscdButton variant="raised" callback={onSecondaryAction} >
      {secondaryActionLabel}
    </OscdButton>
  {/snippet}
</TColumnHeaderLayout>
