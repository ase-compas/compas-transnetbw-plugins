<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { OscdTooltip } from '../../../../libs/oscd-component/src';
  import { OscdCheckIcon, OscdErrorIcon, OscdWarningIcon } from '../../../../libs/oscd-icons/src';
  import type { Plugin } from '@oscd-transnet-plugins/shared';

  export let doc:        XMLDocument | undefined;
  export let editCount  = -1;
  export let host:  HTMLElement;
  export let plugins: Plugin[] = [];

  let tagName: string | null = null;
  let editorTabsVisible = false;
  let visited: string[] = [];

  const statuses: ('check' | 'warning' | 'error')[] = ['check', 'warning', 'error'];
  let pluginStatus: Record<string, 'check' | 'warning' | 'error'> = {};

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
      }),
    );
  }

  async function loadPlugin(plugin: Plugin) {

    const mod = await import(plugin.src);
    if (!customElements.get(plugin.id))
      customElements.define(plugin.id, mod.default);

    tagName = plugin.id;

    if (!visited.includes(plugin.id)) {
      visited = [...visited, plugin.id];
      const idx = plugins.findIndex(p => p.id === plugin.id);
      pluginStatus = {
        ...pluginStatus,
        [plugin.id]: statuses[idx % statuses.length],
      };
    }
  }


  function nextPlugin()     { advance(+1); }
  function previousPlugin() { advance(-1); }
  function advance(step: number) {
    const idx = plugins.findIndex(p => p.id === tagName);
    loadPlugin(plugins[(idx + step + plugins.length) % plugins.length]);
  }


  function setProps(node: HTMLElement, props: any) {
    Object.assign(node, props);
    return { update: (p: any) => Object.assign(node, p) };
  }

  $: tooltipText = plugins.reduce<Record<string,string>>((map, p) => {
    const status = pluginStatus[p.id];
    map[p.id] =
      status === 'error'
        ? `Resolve errors in ${p.name}`
        : status === 'warning'
          ? `Check warnings for ${p.name}`
          : `Load the ${p.name} editor`;
    return map;
  }, {});

  onMount(() => {
    if (plugins.length) loadPlugin(plugins[0]);
    setEditorTabsVisibility(false);
  });
</script>

<div class="stepper">
  <div style="display:flex;align-items:center;gap:0.5rem;">
    <button class="back-button" on:click={() => setEditorTabsVisibility(true)}>
      exit
    </button>
    <p class="plugin-flow-title">Plugin Flow</p>
  </div>

  <div class="plugin-steps">
    {#each plugins as plugin, i}
      <div class="plugin-step">
        <OscdTooltip text={tooltipText[plugin.id]} position="bottom">
          <button
            on:click={() => loadPlugin(plugin)}
            class:not-visited={!visited.includes(plugin.id)}
            class:current={plugin.id === tagName}
            class:visited={visited.includes(plugin.id) && plugin.id !== tagName}
          >
            {#if visited.includes(plugin.id) && plugin.id !== tagName}
              {#if pluginStatus[plugin.id] === 'check'}
                <OscdCheckIcon />
              {:else if pluginStatus[plugin.id] === 'error'}
                <OscdErrorIcon />
              {:else}
                <OscdWarningIcon />
              {/if}
            {:else}
              {i + 1}
            {/if}
          </button>
        </OscdTooltip>
        <p>{plugin.name}</p>
      </div>

      {#if i < plugins.length - 1}
        <div class="plugin-step-line"></div>
      {/if}
    {/each}
  </div>
  <div class="stepper-navigation">
    <button on:click={previousPlugin} class="back-button">Back</button>
    <button on:click={nextPlugin}     class="next-button">Next</button>
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
