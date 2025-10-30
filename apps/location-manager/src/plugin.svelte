<script lang="ts">
  import * as pckg from '../package.json';
  import App from './App.svelte';

  interface Props {
    doc: XMLDocument;
    dev?: boolean;
  }

  let { doc, dev = false }: Props = $props();
</script>

{#if doc || dev}
    <App></App>
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
