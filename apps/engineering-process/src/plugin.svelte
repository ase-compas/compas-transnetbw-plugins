<svelte:options tag={null} />
<script lang="ts">
  import * as pckg from '../package.json';
  import App from './App.svelte';

  export let doc: XMLDocument;
  export let dev = false;
  export let editCount = 0;
</script>

{#if doc || dev}
    <App { doc } { editCount }></App>
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
