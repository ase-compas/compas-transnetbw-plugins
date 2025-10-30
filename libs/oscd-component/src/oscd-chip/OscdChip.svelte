<script lang="ts">
  import Chip, { Text, TrailingAction } from '@smui/chips';
  import { OscdCancelIcon } from '@oscd-transnet-plugins/oscd-icons';

  interface Props {
    title?: string;
    closeable?: boolean;
    callback: () => void;
    disabled?: boolean;
  }

  let {
    title = '',
    closeable = true,
    callback,
    disabled = false
  }: Props = $props();
</script>

<Chip chip={title} nonInteractive disabled class={disabled ? 'disabled' : ''}>
  <Text>{title}</Text>
  {#if closeable && !disabled}
    <TrailingAction on:click={callback}>
      <OscdCancelIcon svgStyles="margin-left: 0; fill: unset;" />
    </TrailingAction>
  {/if}
</Chip>

<style lang="css">
  :global(.disabled) {
    color: #c1bfbf !important;
    background-color: #ededed !important;
  }
</style>
