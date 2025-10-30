<script lang="ts">
  import App from './App.svelte';
  import * as pckg from '../package.json';

  interface Props {
    doc?: XMLDocument;
    dev?: boolean;
  }

  let { doc, dev = false }: Props = $props();
</script>

{#if doc || dev}
  <App />
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
