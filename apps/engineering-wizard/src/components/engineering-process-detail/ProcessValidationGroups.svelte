<script lang="ts">
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';

  export let pluginGroups: PluginGroup[] = [];

  let selectedIdx: number | null = null;
  let activePluginIdx: number | null = null;

  $: currentGroup = selectedIdx != null ? pluginGroups[selectedIdx] : null;
  $: currentPlugin =
    currentGroup && activePluginIdx != null ? currentGroup.plugins[activePluginIdx] : null;

  // Auto-select first group/plugin if nothing selected (optional, keep/remove as you like)
  $: if (pluginGroups?.length && (selectedIdx == null || selectedIdx >= pluginGroups.length)) {
    selectedIdx = 0;
    activePluginIdx = pluginGroups[0]?.plugins?.length ? 0 : null;
  }

  // --- XML loading state ---
  let xmlText = '';
  let loadingXml = false;
  let xmlError = '';
  let xmlAbort: AbortController | null = null;

  async function loadXmlFor(pluginId: string) {
    loadingXml = true;
    xmlError = '';
    xmlText = '';

    xmlAbort?.abort();
    xmlAbort = new AbortController();

    try {
      const SRC = new URL(`../../assets/validations/${pluginId}.xml`, import.meta.url).href;
      const res = await fetch(SRC, { cache: 'no-cache', signal: xmlAbort.signal });

      if (!res.ok) {
        if (res.status === 404) {
          xmlText = '(No XML found for this plugin.)';
          return;
        }
        throw new Error(`HTTP ${res.status}`);
      }

      xmlText = await res.text();
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return;
      xmlError = (e as Error)?.message || 'Failed to load XML.';
    } finally {
      loadingXml = false;
    }
  }

  $: currentPluginId = currentPlugin?.id ?? null;
  $: if (currentPluginId) loadXmlFor(currentPluginId);

  function selectGroup(gIdx: number) {
    const group = pluginGroups[gIdx];
    selectedIdx = gIdx;
    activePluginIdx = group?.plugins?.length ? 0 : null;
  }

  function selectPlugin(gIdx: number, pIdx: number) {
    selectedIdx = gIdx;
    activePluginIdx = pIdx;
  }
</script>

<div class="validation-groups">
  {#each pluginGroups as group, gIdx}
    <div class="validation-groups__group" class:expanded={gIdx === selectedIdx}>
      <button
        type="button"
        class="validation-groups__group-title"
        aria-pressed={gIdx === selectedIdx}
        on:click={() => selectGroup(gIdx)}
      >
        {group.title}
      </button>

      {#if gIdx === selectedIdx}
        {#each group.plugins as plugin, idx}
          <button
            type="button"
            class="validation-groups__plugin"
            class:active={gIdx === selectedIdx && idx === activePluginIdx}
            on:click={() => selectPlugin(gIdx, idx)}
          >
            <span>{plugin.name}</span>
          </button>
        {/each}
      {/if}
    </div>
  {/each}
</div>

{#if currentPlugin}
  <div class="xml-viewer">
    <h4 class="xml-viewer__title">XML for: {currentPlugin.name}</h4>

    {#if loadingXml}
      <p>Loading…</p>
    {:else if xmlError}
      <p class="error">{xmlError}</p>
    {:else}
      <div class="xml-viewer__box">
        <pre>{xmlText}</pre>
      </div>
    {/if}
  </div>
{/if}

<style>
  .validation-groups {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .validation-groups__group {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 4px;
    background-color: white;
  }

  .validation-groups__group.expanded {
    background-color: var(--brand);
  }

  .validation-groups__group.expanded .validation-groups__group-title {
    color: var(--on-brand);
  }

  .validation-groups__group-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    padding: 0 8px;
    margin: 0;
    color: var(--brand);
    cursor: pointer;
    user-select: none;
    background: transparent;
    border: none;
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  .validation-groups__plugin {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: var(--brand);
    padding: 6px 1rem;
    background-color: white;
    border-radius: 6px;
    width: fit-content;
    min-width: 2rem;
    cursor: pointer;
    margin: 0;
    border: none;
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  .validation-groups__plugin.active {
    background-color: #D9D800;
  }

  .xml-viewer {
    margin-top: 0.5rem;
  }

  .xml-viewer__title {
    margin: 0.25rem 0 0.5rem;
    color: var(--brand);
  }

  .xml-viewer__box {
    background: #0f172a0d;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 8px;
    overflow: auto;
    max-height: 50vh;
  }

  .xml-viewer__box pre {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 13px; line-height: 1.4;
  }

  .error {
    color: #b00020;
  }
</style>
