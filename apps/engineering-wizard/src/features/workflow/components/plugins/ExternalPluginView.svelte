<script lang="ts">
  import type { ViewPlugin } from '../../viewPlugin';
  import { ensureCustomElementDefined } from '../../external-elements';
  import { getPluginLoadState } from '../../plugin-load-status.svelte';
  import PluginLoadingIndicator from './PluginLoadingIndicator.svelte';
  import PluginLoadError from './PluginLoadError.svelte';

  interface Props {
    plugin: ViewPlugin;
    doc?: XMLDocument;
    editCount?: number;
    docs?: Record<string, XMLDocument>;
    nsdoc?: any;
    docName?: string;
    docId?: string;
    locale?: string;
    oscdApi?: any;
    host?: HTMLElement;
  }

  let { plugin, doc, editCount, docs, nsdoc, docName, docId, locale, oscdApi, host }: Props = $props();

  let loadState = $derived(getPluginLoadState(plugin.id));

  function load() {
    ensureCustomElementDefined(plugin).catch(() => {});
  }

  $effect(() => {
    plugin.id;
    plugin.src;
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
  <PluginLoadError message={loadState.error} onRetry={load} />
{:else if loadState.status !== 'loaded'}
  <PluginLoadingIndicator />
{:else}
  <svelte:element
    this={plugin.id}
    use:setProps={{ doc, editCount, docs, nsdoc, docName, docId, locale, oscdApi, host }}
  />
{/if}
