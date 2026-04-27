<script lang="ts">
  import { OscdButton } from '@oscd-transnet-plugins/oscd-component';
  import TColumnHeaderLayout from './TColumnHeaderLayout.svelte';


  interface Props {
    title: string;
    subtitle?: string | null;
    actionLabel?: string | null;
    actionIcon?: string | null;
    hasAction?: boolean;
    secondaryActionLabel?: string | null;

    onAction?: () => void;
    onSecondaryAction: () => void;
  }

  let {
    title,
    subtitle = null,
    actionLabel = null,
    actionIcon = null,
    hasAction = false,
    secondaryActionLabel = null,

    onAction = () => {},
    onSecondaryAction = () => {},
  }: Props = $props();

</script>

<TColumnHeaderLayout
  {title}
  {subtitle}
  {actionLabel}
  {actionIcon}
  {hasAction}
  {onAction}
>
  {#snippet botAction()}
    <OscdButton variant="raised" callback={onSecondaryAction} >
      {secondaryActionLabel}
    </OscdButton>
  {/snippet}
</TColumnHeaderLayout>
