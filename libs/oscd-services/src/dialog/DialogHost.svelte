<script>
  import { dialogStore } from './dialog.store';
  import { onMount } from 'svelte';
  import { freezeEvents } from '@oscd-transnet-plugins/oscd-services/drawer';

  let dialogData = $state();
  let isOpen = $state(false);

  const unsubscribe = dialogStore.subscribe(value => {
    dialogData = value;
    isOpen = value.isOpen;
    freezeEvents.freeze = false;
  });

  onMount(() => {
    return () => unsubscribe();
  });

  $effect(() => {
    freezeEvents.freeze = isOpen; // freeze drawer controls when dialog is open
  })
</script>

{#if dialogData.isOpen && dialogData.component}
    <dialogData.component
      bind:open={isOpen}
      {...dialogData.props} />
{/if}
