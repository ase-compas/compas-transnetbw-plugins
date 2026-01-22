<script lang="ts">
  import type { Plugin, PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdDeleteIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { validations } from '../../features/plugins/validation/stores.svelte';
  import { selectedEngineeringProcess } from '../../features/processes/stores.svelte';

  interface Props {
    pluginGroups?: PluginGroup[];
    selectedPlugin?: Plugin | null;
  }

  let {
    pluginGroups = [],
    selectedPlugin = null,
  }: Props = $props();

  let isLoadingXml = $state(false);
  let xmlErrorMessage = $state('');

  let validationEntries = $derived.by(() => {
    const processId = selectedEngineeringProcess?.process?.id;
    const pluginId = selectedPlugin?.id;
    if (!processId || !pluginId) return [] as any[];

    return (validations.validationEntries ?? []).filter(
      (entry) => entry.processId === processId && entry.pluginId === pluginId,
    );
  });

</script>

{#if selectedPlugin}
  {#if isLoadingXml}
    <p>Loading…</p>
  {:else if xmlErrorMessage}
    <p class="error">{xmlErrorMessage}</p>
  {:else}
    {#if validationEntries.length === 0}
      <div class="empty-state">
        <p>No validations configured for "{selectedPlugin.name}" yet.</p>
      </div>
    {:else}
      <div class="validation-xml-list">
        {#each validationEntries as validationEntry, index}
          <div class="validation-xml-container">
            <div class="validation-xml-container__meta">
              <span class="validation-xml-container__name">{validationEntry.title}</span>
              {#if validationEntry.description}
                <span class="validation-xml-container__description">
                  {validationEntry.description}
                </span>
              {/if}
              <div class="validation-xml-container__actions">
                <button type="button" class="delete-btn" title="Remove">
                  <OscdDeleteIcon svgStyles="fill: #FF203A" />
                </button>
              </div>
            </div>

            <div class="xml-viewer">
              <div class="xml-viewer__box">
                <pre>{validationEntry.context}</pre>
              </div>
              <div class="xml-viewer__box">
                <pre>{validationEntry.assert}</pre>
              </div>
            </div>
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

  .delete-btn {
    background: transparent;
    border: none;
    padding: 4px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .xml-viewer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
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

  .empty-state {
    padding: 0.5rem 0.75rem;
    color: #004552;
    background: #edf1f2;
    border-radius: 6px;
  }
</style>
