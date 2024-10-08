<script>
  import { Button } from '@svelteuidev/core';

  export let callback = () => {
  };
  export let name = 'Button';
  export let disabled = false;
  export let icon = null;
  export let iconPlacement = 'left';
</script>

<Button on:click={callback()} disabled="{disabled}">
  {#if icon && iconPlacement === 'left'}
    <span class="btn-icon-left">
      <svelte:component this={icon} />
    </span>
  {/if}
  {name}
  {#if icon && iconPlacement === 'right'}
    <span class="btn-icon-right">
      <svelte:component this={icon} />
    </span>
  {/if}
</Button>


<style lang="css">
  .btn-icon-left {
    margin-right: 0.5rem;
  }

  .btn-icon-right {
    margin-left: 0.5rem;
  }
</style>
