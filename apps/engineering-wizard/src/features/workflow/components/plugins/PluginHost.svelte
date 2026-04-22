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
    oscdApi
  }: Props = $props();

  let container: HTMLDivElement | null = null;
  let el: any = null;
  let currentTag = '';

  function syncProps(target: any) {
    target.doc = doc;
    target.editCount = editCount;
    target.plugins = plugins;
    target.nsdoc = nsdoc;
    target.docName = docName;
    target.docId = docId;
    target.docs = docs;
    target.locale = locale;
    if (oscdApi) target.oscdApi = oscdApi;
  }

  $effect(() => {
    if (!container) return;

    if (!plugin?.src) {
      container.innerHTML = '';
      el = null;
      currentTag = '';
      return;
    }

    const newTag = pluginTag(plugin.src);

    if (newTag !== currentTag) {
      currentTag = newTag;
      container.innerHTML = '';
      el = document.createElement(newTag);
      syncProps(el);
      container.appendChild(el);
    } else if (el) {
      syncProps(el);
    }
  });
</script>

<div bind:this={container}></div>
