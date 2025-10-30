<script lang="ts">
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdArrowDownIcon, OscdArrowUpIcon, OscdDeleteIcon } from '../../../../../libs/oscd-icons/src';

  interface Props {
    pluginGroups?: PluginGroup[];
  }

  let { pluginGroups = [] }: Props = $props();

  let selectedIdx: number | null = $state(null);
  let activePluginIdx: number | null = $state(null);

  let currentGroup = $derived(selectedIdx != null ? pluginGroups[selectedIdx] : null);
  let currentPlugin =
    $derived(currentGroup && activePluginIdx != null ? currentGroup.plugins[activePluginIdx] : null);

  $effect(() => {
    if (pluginGroups?.length && (selectedIdx == null || selectedIdx >= pluginGroups.length)) {
      selectedIdx = 0;
      activePluginIdx = pluginGroups[0]?.plugins?.length ? 0 : null;
    }
  });

  let xmlText = $state('');
  let loadingXml = $state(false);
  let xmlError = $state('');
  let xmlAbort: AbortController | null = null;

  type ValidationEntry = { name: string; description?: string; xml: string };
  let validationEntries: ValidationEntry[] = $state([]);
  let openSet: Set<number> = $state(new Set());

  async function loadXmlFor(pluginId: string) {
    loadingXml = true;
    xmlError = '';
    xmlText = '';
    validationEntries = [];
    openSet = new Set();

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

      const parser = new DOMParser();
      const doc = parser.parseFromString(xmlText, 'application/xml');
      const parseErr = doc.querySelector('parsererror');
      if (parseErr) throw new Error('Invalid XML format.');

      const serializer = new XMLSerializer();
      const nodes = Array.from(doc.getElementsByTagName('validation'));
      validationEntries = nodes.map((el, i) => {
        const name =
          el.getAttribute('name')?.trim() ||
          el.getAttribute('id')?.trim() ||
          el.querySelector('name')?.textContent?.trim() ||
          `Validation ${i + 1}`;
        const description =
          el.getAttribute('description')?.trim() ||
          el.querySelector('description')?.textContent?.trim() ||
          undefined;
        const xml = serializer.serializeToString(el);
        return { name, description, xml };
      });
      openSet = new Set();
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return;
      xmlError = (e as Error)?.message || 'Failed to load XML.';
    } finally {
      loadingXml = false;
    }
  }

  let currentPluginId = $derived(currentPlugin?.id ?? null);
  $effect(() => {
    if (currentPluginId) loadXmlFor(currentPluginId);
  });

  function selectGroup(gIdx: number) {
    const group = pluginGroups[gIdx];
    selectedIdx = gIdx;
    activePluginIdx = group?.plugins?.length ? 0 : null;
  }

  function selectPlugin(gIdx: number, pIdx: number) {
    selectedIdx = gIdx;
    activePluginIdx = pIdx;
  }

  function toggleEntry(idx: number) {
    if (openSet.has(idx)) openSet.delete(idx);
    else openSet.add(idx);
    openSet = new Set(openSet);
  }
</script>

<div class="validation-groups">
  {#each pluginGroups as group, gIdx}
    <div class="validation-groups__group" class:expanded={gIdx === selectedIdx}>
      <button
        type="button"
        class="validation-groups__group-title"
        aria-pressed={gIdx === selectedIdx}
        onclick={() => selectGroup(gIdx)}
      >
        {group.title}
      </button>

      {#if gIdx === selectedIdx}
        {#each group.plugins as plugin, idx}
          <button
            type="button"
            class="validation-groups__plugin"
            class:active={gIdx === selectedIdx && idx === activePluginIdx}
            onclick={() => selectPlugin(gIdx, idx)}
          >
            <span>{plugin.name}</span>
          </button>
        {/each}
      {/if}
    </div>
  {/each}
</div>

{#if currentPlugin}
  {#if loadingXml}
    <p>Loading…</p>
  {:else if xmlError}
    <p class="error">{xmlError}</p>
  {:else}
    {#if validationEntries.length === 0}
      <div class="xml-viewer">
        <h4 class="xml-viewer__title">XML for: {currentPlugin.name}</h4>
        <div class="xml-viewer__box">
          <pre>{xmlText}</pre>
        </div>
      </div>
    {:else}
      <div class="validation-xml-list">
        {#each validationEntries as validationEntry, idx}
          <div class="validation-xml-container">
            <div class="validation-xml-container__meta">
              <span class="validation-xml-container__name">{validationEntry.name}</span>
              {#if validationEntry.description}
                <span class="validation-xml-container__description">{validationEntry.description}</span>
              {/if}
              <div class="validaton-xml-container__actions">
                <button type="button" class="delete-btn" title="Remove">
                  <OscdDeleteIcon svgStyles="fill: #FF203A" />
                </button>

                {#if openSet.has(idx)}
                  <button
                    type="button"
                    class="toggle-btn"
                    aria-expanded="true"
                    onclick={() => toggleEntry(idx)}
                    title="Collapse"
                  >
                    <OscdArrowUpIcon svgStyles="fill: #004552" />
                  </button>
                {:else}
                  <button
                    type="button"
                    class="toggle-btn"
                    aria-expanded="false"
                    onclick={() => toggleEntry(idx)}
                    title="Expand"
                  >
                    <OscdArrowDownIcon svgStyles="fill: #004552" />
                  </button>
                {/if}
              </div>
            </div>

            {#if openSet.has(idx)}
              <div class="xml-viewer">
                <div class="xml-viewer__box">
                  <pre>{validationEntry.xml}</pre>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  {/if}
{/if}

<style>
  .validation-groups {
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin-bottom: 2rem;
  }

  .validation-groups__group {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    border-radius: 4px;
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
    border-radius: 2px;
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

  .validation-xml-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;
  }

  .validaton-xml-container__actions {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    gap: 6px;
  }

  .validation-xml-container {
    border-radius: 4px;
    background: #fff;
    padding: 8px;
  }

  .validation-xml-container__meta {
    display: flex;
    flex-direction: row;
    gap: 6rem;
    padding: 12px 0;
  }

  .validation-xml-container__meta span {
    align-self: center;
  }

  .validation-xml-container__name {
    font-size: 16px;
    font-weight: 500;
    color: #002B37;
  }

  .validation-xml-container__description {
    font-weight: 400;
    color: #002B37;
  }

  .toggle-btn, .delete-btn {
    background: transparent;
    border: none;
    padding: 4px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .xml-viewer {
    margin-top: 0.5rem;
  }

  .xml-viewer__title {
    margin: 0.25rem 0 0.5rem;
    color: var(--brand);
  }

  .xml-viewer__box {
    background: #EDF1F2;
    border-radius: 6px;
    padding: 12px;
    overflow: auto;
    max-height: 50vh;
  }

  .xml-viewer__box pre {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: 'Roboto', sans-serif;
    color: #004552;
    font-weight: 400;
  }

  .error {
    color: #b00020;
  }
</style>
