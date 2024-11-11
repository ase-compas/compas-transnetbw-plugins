<script lang="ts">
  import IconButton from '@smui/icon-button';

  export let callback = () => {};
  export let icon = '';
  export let disabled = false;
</script>

<IconButton class="material-icons" on:click={callback} {disabled}>{icon}</IconButton>

<style lang="css">
</style>
