<script lang="ts">
  function pluginTag(uri: string): string {
    let h1 = 0xdeadbeef,
      h2 = 0x41c6ce57;
    for (let i = 0, ch; i < uri.length; i++) {
      ch = uri.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 =
      Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
      Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
      Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
      Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (
      'oscd-plugin' +
      ((h2 >>> 0).toString(16).padStart(8, '0') +
        (h1 >>> 0).toString(16).padStart(8, '0'))
    );
  }

  interface Plugin {
    name: string;
    src: string;
    kind: string;
  }

  interface Props {
    doc?: XMLDocument;
    editCount?: number;
    host?: HTMLElement;
    plugins?: Plugin[];
    docId?: string;
    pluginId?: string;
    docName?: string;
    nsdoc?: any;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: any;
  }

  let {
    doc,
    editCount = -1,
    host,
    plugins = [],
    docId,
    pluginId,
    docName,
    nsdoc,
    docs,
    locale,
    oscdApi,
  }: Props = $props();

  let container: HTMLDivElement | null = null;

  $effect(() => {
    if (!container) return;

    container.innerHTML = '';

    if (!plugins || plugins.length === 0) return;

    const first = plugins[1];
    if (!first?.src) return;

    const tag = pluginTag(first.src);
    const el = document.createElement(tag) as any;

    el.doc = doc;
    el.docName = docName;
    el.docId = docId;
    el.editCount = editCount;
    el.plugins = plugins;
    el.pluginId = first.src;
    el.nsdoc = nsdoc;
    el.docs = docs;
    el.locale = locale;

    container.appendChild(el);
  });
</script>

<div bind:this={container}></div>
