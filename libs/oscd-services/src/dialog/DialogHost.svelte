<script>
  import { dialogStore } from './dialog.store';
  import { onMount } from 'svelte';

  let dialogData = $state();
  let isOpen = $state(false);

  const unsubscribe = dialogStore.subscribe(value => {
    dialogData = value;
    isOpen = value.isOpen;
  });

  onMount(() => {
    return () => unsubscribe();
  });
</script>

{#if dialogData.isOpen && dialogData.component}
  <dialogData.component
    bind:open={isOpen}
    {...dialogData.props} />
{/if}
