<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let doc: XMLDocument | undefined;
  export let editCount = -1;

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
    getLayoutContainer()?.dispatchEvent(
      new CustomEvent('toggle-editor-tabs', {
        detail: { visible },
        bubbles: true,
        composed: true,
      })
    );
  }

  /** Registry of all editors in the desired order */
  const plugins = [
    {
      tag: 'engineering-wizard',
      src: 'https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/substation.js',
      label: 'Substation',
    },
    {
      tag: 'substation-explorer',
      src: 'https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/ied.js',
      label: 'IED',
    },
    {
      tag: 'communication-editor',
      src: 'https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/communication.js',
      label: 'Communication',
    },
  ];

  async function loadPlugin(plugin: { tag: string; src: string }) {
    const mod = await import(plugin.src);
    if (!customElements.get(plugin.tag))
      customElements.define(plugin.tag, mod.default);
    tagName = plugin.tag;
  }

  onMount(() => {
    loadPlugin(plugins[0]);
    setEditorTabsVisibility(false);
  });

  function nextPlugin() {
    const idx = plugins.findIndex(p => p.tag === tagName);
    loadPlugin(plugins[(idx + 1) % plugins.length]);
  }

  function previousPlugin() {
    const idx = plugins.findIndex(p => p.tag === tagName);
    loadPlugin(plugins[(idx - 1 + plugins.length) % plugins.length]);
  }

  /** Helper to forward props into the dynamically created element */
  function setProps(node: HTMLElement, props: any) {
    Object.assign(node, props);
    return { update: (p: any) => Object.assign(node, p) };
  }
</script>

<div class="stepper">
  <p class="plugin-flow-title">Plugin Flow</p>

  <div class="plugin-steps">
    {#each plugins as plugin, i}
      <div class="plugin-step">
        <button on:click={() => loadPlugin(plugin)}>{i + 1}</button>
        <p>{plugin.label}</p>
      </div>
      {#if i < plugins.length - 1}
        <div class="plugin-step-line"></div>
      {/if}
    {/each}
  </div>

  <div class="stepper-navigation">
    <button on:click={previousPlugin} class="back-button">Back</button>
    <button on:click={nextPlugin} class="next-button">Next</button>
  </div>
</div>

{#if tagName}
  <svelte:element this={tagName} use:setProps={{ doc, editCount }} />
{/if}

<style>
  * {
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }

  .stepper {
    height: 4rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background-color: #004552;
  }

  .plugin-steps {
    display: flex;
    gap: 0.5rem;
    justify-self: center;
    align-items: center;
  }

  .plugin-step {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 0.8rem;
    text-transform: uppercase;

    & button {
      background-color: #ffffff;
      width: 2rem;
      height: 2rem;
      border: 1px solid transparent;
      border-radius: 50%;
    }

    & p {
      margin: 0;
      font-size: 14px;
    }
  }

  .plugin-step-line {
    width: 56px;
    height: 1px;
    background-color: #6B9197;
  }

  .plugin-flow-title {
    font-weight: 500;
    color: #ffffff;
  }

  .stepper-navigation {
    display: flex;
    gap: 0.8rem;
    justify-self: end;
  }

  .back-button {
    height: 36px;
    width: 70px;
    text-transform: uppercase;
    color: white;
    background-color: #6B9197;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }

  .next-button {
    height: 36px;
    width: 70px;
    text-transform: uppercase;
    background-color: white;
    color: #004552;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
