<script lang="ts">
  import IconButton from '@smui/icon-button';

  export let callback = () => {};
  export let icon = '';

</script>

<IconButton class="material-icons" on:click={callback}>{icon}</IconButton>

<style lang="css">
</style>
