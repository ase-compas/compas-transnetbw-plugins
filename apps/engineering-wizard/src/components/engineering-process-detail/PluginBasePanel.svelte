<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdListItem, OscdPanel } from '../../../../../libs/oscd-component/src';
  import { OscdAddCircleIcon, OscdEditIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { processEditModeState } from '../../services/engineering-process.svelte';

  type ItemActionContext = {
    group: PluginGroup;
    plugin: PluginGroup['plugins'][number];
    groupIndex: number;
    pluginIndex: number;
  };

  interface Props {
    pluginGroups?: PluginGroup[];
    title?: string;

    headerAction?: Snippet;
    itemAction?: Snippet<[ItemActionContext]>;
  }

  let {
    pluginGroups = [],
    title = 'Process',
    headerAction,
    itemAction
  }: Props = $props();

  function addGroup() {
    alert('adding a group');
  }
</script>

<OscdPanel
  class="plugin-list"
  backgroundColor="var(--brand)"
  {header}
  {content}
  {additional}
/>

{#snippet header()}
  <header class="plugin-list__header">
    <p class="plugin-list__title">{title}</p>

    {#if headerAction}
      <div class="plugin-list__header-action">
        {@render headerAction()}
      </div>
    {/if}
  </header>
{/snippet}

{#snippet content()}
  <div class="plugin-list__body">
    {#each pluginGroups as group, groupIndex}
      <section class="plugin-list__group">
        <header class="plugin-list__group-header">
          <span class="plugin-list__group-index">{groupIndex + 1}.</span>
          <span class="plugin-list__group-title">{group.title}</span>
        </header>
        {#if group.plugins.length === 0}
          <OscdListItem variant="dashed">
            <div class="plugin-list__item-row__dashed">
            </div>
          </OscdListItem>
        {/if}

        {#each group.plugins as plugin, pluginIndex}
          <OscdListItem variant="secondary">
            <div class="plugin-list__item-row">
              <span class="plugin-list__item-name">{plugin.name}</span>

              {#if itemAction}
                <div class="plugin-list__item-action">
                  {@render itemAction({
                    group,
                    plugin,
                    groupIndex,
                    pluginIndex
                  })}
                </div>
              {/if}
            </div>
          </OscdListItem>
        {/each}
      </section>
    {/each}
  </div>
{/snippet}

{#snippet additional()}
  {#if processEditModeState.isEditing}
    <div class="plugin-list__footer">
      <button
        type="button"
        class="plugin-list__footer-button plugin-list__footer-button--edit"
      >
        <OscdEditIcon svgStyles="fill: var(--primary-base);" aria-hidden="true" />
        <span>Edit groups</span>
      </button>

      <button
        type="button"
        class="plugin-list__footer-button plugin-list__footer-button--add"
        onclick={addGroup}
      >
        <OscdAddCircleIcon svgStyles="fill: var(--primary-base);" aria-hidden="true" />
        <span>Add group</span>
      </button>
    </div>
  {/if}
{/snippet}

<style>
  /* Header */

  .plugin-list__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .plugin-list__title {
    margin: 0;
    font-weight: 500;
    color: var(--on-brand);
    font-size: 1.25rem;
    line-height: 1.2;
  }

  .plugin-list__header-action {
    display: flex;
    align-items: center;
  }

  /* Body */

  .plugin-list__body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1 1 auto;
    min-height: 0;
  }

  .plugin-list__group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .plugin-list__group-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .plugin-list__group-index {
    font-weight: 500;
    color: var(--on-brand);
  }

  .plugin-list__group-title {
    font-weight: 500;
    color: #dae3e6;
  }

  .plugin-list__item-row__dashed {
    height: 2rem;
  }

  .plugin-list__item-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 0.75rem;
  }

  .plugin-list__item-name {
    font-weight: 500;
    color: var(--brand);
  }

  .plugin-list__item-action {
    display: flex;
    align-items: center;
  }

  /* Footer / edit controls */

  .plugin-list__footer {
    display: flex;
    gap: 1rem;
    width: 100%;
    flex-shrink: 0;
  }

  .plugin-list__footer-button {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 36px;
    width: 70px;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    margin: 0;
    background-color: white;
    color: var(--primary-base);
  }
</style>
