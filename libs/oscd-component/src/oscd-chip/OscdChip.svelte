<script lang="ts">
  import Chip, { LeadingIcon, TrailingAction, Text } from '@smui/chips';

  export let title = '';
  export let closeable = true;
  export let callback: () => void;
</script>


<Chip chip={title} nonInteractive>
  <Text>{title}</Text>
  {#if closeable}
    <TrailingAction icon$class="material-icons" on:click={callback}>cancel</TrailingAction>
  {/if}
</Chip>

<style lang="css">

</style>
