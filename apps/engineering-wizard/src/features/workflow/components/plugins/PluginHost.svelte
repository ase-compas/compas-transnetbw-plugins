<script lang="ts">
  import type { ViewPlugin } from '../../viewPlugin';
  import {
    ensureCustomElementDefined,
    getPluginElementTag,
  } from '../../external-elements';
  import { getPluginLoadState } from '../../plugin-load-status.svelte';
  import PluginLoadingIndicator from './PluginLoadingIndicator.svelte';
  import PluginLoadError from './PluginLoadError.svelte';

  interface Props {
    plugin: ViewPlugin;
    doc?: XMLDocument;
    editCount?: number;
    plugins?: ViewPlugin[];
    nsdoc?: any;
    docName?: string;
    docId?: string;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: any;
    host?: HTMLElement;
  }

  let {
    plugin,
    doc,
    editCount = -1,
    plugins = [],
    nsdoc,
    docName,
    docId,
    docs,
    locale,
    oscdApi,
    host,
  }: Props = $props();

  let tag = $derived(getPluginElementTag(plugin));
  let loadState = $derived(getPluginLoadState(tag));

  function load() {
    ensureCustomElementDefined(plugin).catch(() => {});
  }

  $effect(() => {
    plugin.src;
    tag;
    load();
  });

  function setProps(node: HTMLElement, props: Record<string, unknown>) {
    Object.assign(node, props);

    return {
      update(newProps: Record<string, unknown>) {
        Object.assign(node, newProps);
      },
    };
  }
</script>

{#if loadState.status === 'error'}
  <PluginLoadError
    message={loadState.error}
    kind={loadState.errorKind}
    onRetry={plugin.resolutionError ? undefined : load}
  />
{:else if loadState.status !== 'loaded'}
  <PluginLoadingIndicator />
{:else}
  <svelte:element
    this={tag}
    use:setProps={{ doc, editCount, plugins, nsdoc, docName, docId, docs, locale, oscdApi, host }}
  />
{/if}
