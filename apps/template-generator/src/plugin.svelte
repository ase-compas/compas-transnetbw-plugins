<script lang="ts">
  import App from './App.svelte';
  import * as pckg from '../package.json';

  interface Props {
    doc?: XMLDocument;
    dev?: boolean;
    host: HTMLElement;
  }

  let { doc, dev = false, host }: Props = $props();
</script>

{#if doc || dev}
  <App {doc} {host} />
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
