<script lang="ts">
  import type { SvelteComponent } from "svelte";

  export let data: any;
  export let typeKey: string = "type";
  export let componentsByType: Record<string, typeof SvelteComponent>;
  export let extraProps: Record<string, any> = {};

  $: SelectedComponent = (data && componentsByType[data[typeKey]]) ?? null;
</script>

{#if SelectedComponent}
  <svelte:component this={SelectedComponent} {data} {...extraProps}/>
{:else}
  <p>No component for type: {data?.[typeKey]}</p>
{/if}
