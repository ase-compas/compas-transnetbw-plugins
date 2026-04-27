<script lang="ts">
  import App from './App.svelte';
  import * as pckg from '../package.json';

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    plugins?: unknown[];
    docId?: string;
    pluginId?: string;
    docName?: string;
    nsdoc?: unknown;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: unknown;
    host?: HTMLElement;
  }

  let {
    doc,
    editCount = 0,
    plugins = [],
    docId,
    pluginId,
    docName,
    nsdoc,
    docs,
    locale,
    oscdApi,
    host,
  }: Props = $props();
</script>

{#if doc}
  <App
    {doc}
    {editCount}
    {plugins}
    {docId}
    {pluginId}
    {docName}
    {nsdoc}
    {docs}
    {locale}
    {oscdApi}
    {host}
  />
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
