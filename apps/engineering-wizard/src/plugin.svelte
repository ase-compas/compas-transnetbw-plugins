<script lang="ts">
  import * as pckg from '../package.json';
  import App from './App.svelte';

  interface Props {
    doc: XMLDocument;
    dev?: boolean;
    editCount?: number;
  }

  let { doc, dev = false, editCount = 0 }: Props = $props();
  console.log("editcount", editCount);
</script>

{#if doc || dev}
    <App { doc } { editCount }></App>
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
