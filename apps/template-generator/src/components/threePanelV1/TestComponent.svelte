<script lang="ts">
  export let data: any = {};

</script>

<h1>{data.name}</h1>

{#each Object.entries(data) as [key, value]}
  <div>
    <strong>{key}:</strong> {value}
  </div>
{/each}

{#if data.children && data.children.length > 0}
  <h2>Children:</h2>
  <ul>
    {#each data.children as child}
      <li>{child.name}</li>
    {/each}
  </ul>
{:else}
  <p>No children available.</p>
{/if}
