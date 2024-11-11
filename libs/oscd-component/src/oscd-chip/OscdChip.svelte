<script lang="ts">
  import Chip, { Text, TrailingAction } from '@smui/chips';

  export let title = '';
  export let closeable = true;
  export let callback: () => void;
  export let disabled = false;
</script>

<Chip chip={title} nonInteractive disabled class="{disabled ? 'disabled' : ''}">
  <Text>{title}</Text>
  {#if closeable && !disabled}
    <TrailingAction icon$class="material-icons" on:click={callback}>cancel</TrailingAction>
  {/if}
</Chip>

<style lang="css">
  :global(.disabled) {
    color: #c1bfbf !important;
    background-color: #ededed !important;
  }
</style>
