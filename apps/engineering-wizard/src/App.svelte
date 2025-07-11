<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let doc: XMLDocument | undefined;
  export let editCount: number = -1;

  let tagName: string | null = null;
  let editorTabsVisible = false;

  const dispatch = createEventDispatcher<{
    'toggle-editor-tabs': { visible?: boolean };
  }>();

  function getLayoutContainer(): HTMLElement | null {
    const openScd = document.querySelector('open-scd');
    return openScd?.shadowRoot?.querySelector('compas-layout') ?? null;
  }

  function setEditorTabsVisibility(visible: boolean) {
    editorTabsVisible = visible;

    const layout = getLayoutContainer();
    if (layout)
      layout.dispatchEvent(
        new CustomEvent('toggle-editor-tabs', {
          detail: { visible },
          bubbles: true,
          composed: true,
        })
      );
  }

  onMount(() => {
    setEditorTabsVisibility(false);
  });

  const toggleEditorTabs = () => setEditorTabsVisibility(!editorTabsVisible);
  const exitEditor       = () => setEditorTabsVisibility(true);

  async function addIED() {
    const plugin = {
      tag: 'substation-explorer',
      src: 'https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/ied.js',
    };
    const mod = await import(plugin.src);
    addPlugin(plugin, mod);
  }

  async function addSubstation() {
    const plugin = {
      tag: 'engineering-wizard',
      src: 'https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/substation.js',
    };
    const mod = await import(plugin.src);
    addPlugin(plugin, mod);
  }

  function addPlugin(plugin: { tag: string; src: string }, mod: any) {
    if (!customElements.get(plugin.tag)) customElements.define(plugin.tag, mod.default);
    tagName = plugin.tag;
  }

  /** Light helper to pass properties into a custom element */
  function setProps(node: HTMLElement, props: any) {
    Object.assign(node, props);
    return { update(newProps: any) { Object.assign(node, newProps); } };
  }
</script>

<div class="stepper-container">
  <button on:click={addSubstation}>Load Substation</button>
  <button on:click={addIED}>Load IED Editor</button>

  <button on:click={exitEditor}>Exit</button>
</div>

{#if tagName}
  <svelte:element this={tagName} use:setProps={{ doc, editCount }} />
{/if}

<style>
  .stepper-container {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 2rem;
    background-color: #004552;
  }
  button {
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    border: none;
    color: #fff;
    background: #00738c;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(1.15);
  }
</style>
