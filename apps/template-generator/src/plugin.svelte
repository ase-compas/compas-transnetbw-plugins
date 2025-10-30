<script lang="ts">
  import * as pckg from '../package.json';
  import App from './App.svelte';

  interface Props {
    doc: XMLDocument;
    dev?: boolean;
    host: HTMLElement;
  }

  let { doc, dev = false, host }: Props = $props();

</script>

{#if doc || dev}
    <App {doc} {host}></App>
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
