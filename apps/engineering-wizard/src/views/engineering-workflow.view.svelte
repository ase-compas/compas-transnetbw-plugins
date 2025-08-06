<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { OscdTooltip } from '../../../../libs/oscd-component/src';
  import { OscdCheckIcon, OscdErrorIcon, OscdWarningIcon } from '../../../../libs/oscd-icons/src';

  export let doc: XMLDocument | undefined;
  export let editCount = -1;
  export let host: HTMLElement;


  let tagName: string | null = null;
  let editorTabsVisible = false;
  let visited: string[] = [];

  const statuses: ('check' | 'warning' | 'error')[] = ['check', 'warning', 'error'];

  let pluginStatus: Record<string, 'check' | 'error' | 'warning'> = {};

  function randomStatus(): 'check' | 'error' | 'warning' {
    const values = ['check', 'error', 'warning'] as const;
    return values[Math.floor(Math.random() * values.length)];
  }

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

    if (!visited.includes(plugin.tag)) {
      visited = [...visited, plugin.tag];
      const idx = plugins.findIndex(p => p.tag === plugin.tag);
      pluginStatus = {
        ...pluginStatus,
        [plugin.tag]: statuses[idx]
      };
    }
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

  function setProps(node: HTMLElement, props: any) {
    Object.assign(node, props);
    return { update: (p: any) => Object.assign(node, p) };
  }

  $: tooltipText = plugins.reduce<Record<string, string>>((map, p) => {
    const status = pluginStatus[p.tag];
    map[p.tag] =
      status === 'error'
        ? `Resolve errors in ${p.label}`
        : status === 'warning'
          ? `Check warnings for ${p.label}`
          : `Load the ${p.label} editor`;
    return map;
  }, {});
</script>


<div class="stepper">
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <button class="back-button" on:click={() => setEditorTabsVisibility(true)}>
      exit
    </button>
    <p class="plugin-flow-title">Plugin Flow</p>
  </div>
  <div class="plugin-steps">
    {#each plugins as plugin, i}
      <div class="plugin-step">
        <!-- use the helper here -->
        <OscdTooltip text={tooltipText[plugin.tag]} position="bottom">
          <button
            on:click={() => loadPlugin(plugin)}
            class:not-visited={!visited.includes(plugin.tag)}
            class:current={plugin.tag === tagName}
            class:visited={visited.includes(plugin.tag) && plugin.tag !== tagName}
          >
            {#if visited.includes(plugin.tag) && plugin.tag !== tagName}
              {#if pluginStatus[plugin.tag] === 'check'}
                <OscdCheckIcon />
              {:else if pluginStatus[plugin.tag] === 'error'}
                <OscdErrorIcon />
              {:else}
                <OscdWarningIcon />
              {/if}
            {:else}
              {i + 1}
            {/if}
          </button>
        </OscdTooltip>
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

  .plugin-flow-title {
    font-weight: 500;
    color: #ffffff;
  }

  .stepper-navigation {
    display: flex;
    gap: 0.8rem;
    justify-self: end;
  }

  .back-button,
  .next-button {
    height: 36px;
    width: 70px;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
  }

  .back-button {
    color: white;
    background-color: #6B9197;
  }

  .next-button {
    background-color: white;
    color: #004552;
  }

  .plugin-step {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 0.8rem;
    text-transform: uppercase;
    cursor: pointer;

    & button {
      display:  flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  .plugin-step-line {
    width: 56px;
    height: 1px;
    background-color: #6B9197;
  }

  .plugin-step button {
    width: 2rem;
    height: 2rem;
    border: 1px solid transparent;
    border-radius: 50%;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  .plugin-step button.not-visited {
    background-color: #6B9197;
    color: #ffffff;
  }

  .plugin-step button.current {
    background-color: #D9D800;
    color: #004552;
  }

  .plugin-step button.visited {
    background-color: #ffffff;
    color: #004552;
  }
</style>
