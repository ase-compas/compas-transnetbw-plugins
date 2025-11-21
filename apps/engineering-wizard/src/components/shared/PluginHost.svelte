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
    src: string;
  }

  interface Props {
    plugin?: Plugin;

    doc?: XMLDocument;
    editCount?: number;
    plugins?: Plugin[];
    nsdoc?: any;
    docName?: string;
    docId?: string;
    docs?: Record<string, XMLDocument>;
    locale?: string;
    oscdApi?: any;
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
  }: Props = $props();

  let container: HTMLDivElement | null = null;

  $effect(() => {
    if (!container) return;

    container.innerHTML = '';

    if (!plugin || !plugin.src) return;

    const tag = pluginTag(plugin.src);
    const el = document.createElement(tag) as any;

    el.doc = doc;
    el.editCount = editCount;
    el.plugins = plugins;
    el.nsdoc = nsdoc;
    el.docName = docName;
    el.docId = docId;
    el.docs = docs;
    el.locale = locale;
    if (oscdApi) el.oscdApi = oscdApi;

    container.appendChild(el);
  });
</script>

<div bind:this={container}></div>
