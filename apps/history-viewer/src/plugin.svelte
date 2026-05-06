<script lang="ts">
  import App from './App.svelte';
  import * as pckg from '../package.json';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    docName?: string;
    docId?: string;
    host?: HTMLElement;
    locale?: string;
    dev?: boolean;
  }

  let { doc, editCount = -1, docName, docId, host, locale, dev = false }: Props = $props();
</script>

{#if doc || dev}
  <App {doc} {editCount} {docName} {docId} {host} {locale} />
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
