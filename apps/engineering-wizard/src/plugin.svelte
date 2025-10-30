<script lang="ts">
  import App from './App.svelte';
  import * as pckg from '../package.json';

  interface Props {
    doc?: XMLDocument;
    dev?: boolean;
    editCount?: number;
  }

  let { doc, dev = false, editCount = 0 }: Props = $props();
</script>

{#if doc || dev}
  <App {doc} {editCount} />
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
