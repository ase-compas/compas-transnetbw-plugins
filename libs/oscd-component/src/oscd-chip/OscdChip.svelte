<script lang="ts">
  import Chip, { Text, TrailingAction } from '@smui/chips';
  import { OscdCancelIcon } from '@oscd-transnet-plugins/oscd-icons';

  export let title = '';
  export let closeable = true;
  export let callback: () => void;
  export let disabled = false;
</script>

<Chip chip={title} nonInteractive disabled class="{disabled ? 'disabled' : ''}">
  <Text>{title}</Text>
  {#if closeable && !disabled}
    <TrailingAction on:click={callback}>
      <OscdCancelIcon svgStyles="{'margin-left: 0; fill: unset;'}" />
    </TrailingAction>
  {/if}
</Chip>

<style lang="css">
  :global(.disabled) {
    color: #c1bfbf !important;
    background-color: #ededed !important;
  }
</style>
