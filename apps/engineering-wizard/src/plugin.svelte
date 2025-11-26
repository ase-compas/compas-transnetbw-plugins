<script lang="ts">
  import App from './App.svelte';
  import * as pckg from '../package.json';

  interface Props {
    doc?: XMLDocument;
    dev?: boolean;
    editCount?: number;
    plugins?: any[];
    docId?: string;
    pluginId?: string;
    docName?: string;
    nsdoc?: any;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: any;
    host?: HTMLElement;
  }

  let {
    doc,
    dev = false,
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

{#if doc || dev}
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
