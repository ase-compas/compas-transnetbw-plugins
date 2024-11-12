<script lang="ts">
  import IconButton from '@smui/icon-button';

  export let callback = () => {
  };
  export let icon = '';
  export let iconComponent = null;
  export let iconStyles = '';
  export let disabled = false;
</script>

<IconButton class="material-icons" on:click={callback} {disabled} style="margin-bottom: 0;">
  {#if iconComponent}
    <svelte:component this={iconComponent} svgStyles="{iconStyles}" />
  {:else}
    {icon}
  {/if}

</IconButton>

<style lang="css">
</style>
