<script lang="ts">
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdArrowDownIcon, OscdArrowUpIcon, OscdDeleteIcon } from '../../../../../libs/oscd-icons/src';
  import PluginGroupsStepper from './PluginGroupsStepper.svelte';

  interface Props {
    pluginGroups?: PluginGroup[];
  }

  let { pluginGroups = [] }: Props = $props();

  let selectedGroupIndex: number | null = $state(null);
  let selectedPluginIndex: number | null = $state(null);

  const selectedGroup = $derived(
    selectedGroupIndex !== null ? pluginGroups[selectedGroupIndex] : null
  );

  const selectedPlugin = $derived(
    selectedGroup && selectedPluginIndex !== null
      ? selectedGroup.plugins[selectedPluginIndex]
      : null
  );

  $effect(() => {
    if (!pluginGroups?.length) {
      selectedGroupIndex = null;
      selectedPluginIndex = null;
      return;
    }

    if (selectedGroupIndex === null || selectedGroupIndex >= pluginGroups.length) {
      selectedGroupIndex = 0;
    }

    const group = pluginGroups[selectedGroupIndex];

    if (!group?.plugins?.length) {
      selectedPluginIndex = null;
      return;
    }

    if (selectedPluginIndex === null || selectedPluginIndex >= group.plugins.length) {
      selectedPluginIndex = 0;
    }
  });

  let xmlText = $state('');
  let isLoadingXml = $state(false);
  let xmlErrorMessage = $state('');
  let xmlAbortController: AbortController | null = null;

  type ValidationEntry = {
    name: string;
    description?: string;
    xml: string;
  };

  let validationEntries: ValidationEntry[] = $state([]);
  let expandedValidationEntryIndexes: Set<number> = $state(new Set());

  async function loadXmlForPlugin(pluginId: string) {
    isLoadingXml = true;
    xmlErrorMessage = '';
    xmlText = '';
    validationEntries = [];
    expandedValidationEntryIndexes = new Set();

    xmlAbortController?.abort();
    xmlAbortController = new AbortController();

    try {
      const sourceUrl = new URL(`../../assets/validations/${pluginId}.xml`, import.meta.url).href;
      const response = await fetch(sourceUrl, {
        cache: 'no-cache',
        signal: xmlAbortController.signal
      });

      if (!response.ok) {
        if (response.status === 404) {
          xmlText = '(No XML found for this plugin.)';
          return;
        }

        throw new Error(`HTTP ${response.status}`);
      }

      xmlText = await response.text();

      const parser = new DOMParser();
      const parsedDocument = parser.parseFromString(xmlText, 'application/xml');
      const parseErrorNode = parsedDocument.querySelector('parsererror');

      if (parseErrorNode) {
        throw new Error('Invalid XML format.');
      }

      const serializer = new XMLSerializer();
      const validationNodes = Array.from(parsedDocument.getElementsByTagName('validation'));

      validationEntries = validationNodes.map((validationElement, index) => {
        const attributeName = validationElement.getAttribute('name')?.trim();
        const attributeId = validationElement.getAttribute('id')?.trim();
        const nameElement = validationElement.querySelector('name')?.textContent?.trim();
        const descriptionAttribute = validationElement.getAttribute('description')?.trim();
        const descriptionElement = validationElement
          .querySelector('description')
          ?.textContent?.trim();

        const name = attributeName || attributeId || nameElement || `Validation ${index + 1}`;
        const description = descriptionAttribute || descriptionElement || undefined;
        const xml = serializer.serializeToString(validationElement);

        return { name, description, xml };
      });

      expandedValidationEntryIndexes = new Set(validationEntries.map((_, index) => index));
    } catch (error) {
      if ((error as DOMException)?.name === 'AbortError') {
        return;
      }

      xmlErrorMessage = (error as Error)?.message || 'Failed to load XML.';
    } finally {
      isLoadingXml = false;
    }
  }

  let currentPluginId = $derived(selectedPlugin?.id ?? null);
  let lastLoadedPluginId: string | null = null;

  $effect(() => {
    if (!currentPluginId || currentPluginId === lastLoadedPluginId) {
      return;
    }

    lastLoadedPluginId = currentPluginId;
    loadXmlForPlugin(currentPluginId);
  });

  function toggleValidationEntry(index: number) {
    if (expandedValidationEntryIndexes.has(index)) {
      expandedValidationEntryIndexes.delete(index);
    } else {
      expandedValidationEntryIndexes.add(index);
    }

    expandedValidationEntryIndexes = new Set(expandedValidationEntryIndexes);
  }
</script>

<PluginGroupsStepper
  {pluginGroups}
  bind:selectedGroupIndex
  bind:selectedPluginIndex
/>

{#if selectedPlugin}
  {#if isLoadingXml}
    <p>Loading…</p>
  {:else if xmlErrorMessage}
    <p class="error">{xmlErrorMessage}</p>
  {:else}
    {#if validationEntries.length === 0}
      <div class="xml-viewer">
        <h4 class="xml-viewer__title">XML for: {selectedPlugin.name}</h4>
        <div class="xml-viewer__box">
          <pre>{xmlText}</pre>
        </div>
      </div>
    {:else}
      <div class="validation-xml-list">
        {#each validationEntries as validationEntry, index}
          <div class="validation-xml-container">
            <div class="validation-xml-container__meta">
              <span class="validation-xml-container__name">{validationEntry.name}</span>
              {#if validationEntry.description}
                <span class="validation-xml-container__description">
                  {validationEntry.description}
                </span>
              {/if}
              <div class="validation-xml-container__actions">
                <button type="button" class="delete-btn" title="Remove">
                  <OscdDeleteIcon svgStyles="fill: #FF203A" />
                </button>

                {#if expandedValidationEntryIndexes.has(index)}
                  <button
                    type="button"
                    class="toggle-btn"
                    aria-expanded="true"
                    onclick={() => toggleValidationEntry(index)}
                    title="Collapse"
                  >
                    <OscdArrowUpIcon svgStyles="fill: #004552" />
                  </button>
                {:else}
                  <button
                    type="button"
                    class="toggle-btn"
                    aria-expanded="false"
                    onclick={() => toggleValidationEntry(index)}
                    title="Expand"
                  >
                    <OscdArrowDownIcon svgStyles="fill: #004552" />
                  </button>
                {/if}
              </div>
            </div>

            {#if expandedValidationEntryIndexes.has(index)}
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
  .validation-xml-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;
  }

  .validation-xml-container__actions {
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
    color: #002b37;
  }

  .validation-xml-container__description {
    font-weight: 400;
    color: #002b37;
  }

  .toggle-btn,
  .delete-btn {
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
    background: #edf1f2;
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
