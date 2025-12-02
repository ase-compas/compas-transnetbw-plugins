<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdListItem, OscdPanel } from '../../../../../libs/oscd-component/src';
  import {
    OscdAddCircleIcon,
    OscdArrowSouthIcon,
    OscdDragIndicatorIcon,
    OscdEditIcon
  } from '@oscd-transnet-plugins/oscd-icons';
  import { processEditModeState } from '../../services/engineering-process.svelte';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import AddGroupDialog from './AddGroupDialog.svelte';
  import EditGroupsDialog from './EditGroupsDialog.svelte';
  import { dragHandle, dragHandleZone, TRIGGERS } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import StepCircle from '../shared/StepCircle.svelte';

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

    onAddGroup?: (name: string, position: number) => void;
    onUpdateGroups?: (updatedGroups: PluginGroup[]) => void;
  }

  let {
    pluginGroups = [],
    title = 'Process',
    headerAction,
    itemAction,

    onAddGroup = () => {},
    onUpdateGroups = (updatedGroups: PluginGroup[]) => {}
  }: Props = $props();

  async function addGroup() {
    const result = await openDialog(AddGroupDialog, {groups: pluginGroups.length})
    if (result.type !== 'confirm') return;
    onAddGroup(result.data.name, result.data.position);
  }


  async function editGroups() {
    const currentGroups = pluginGroups.map((g, idx) => ({ id: idx.toString(), title: g.title }));
    const result = await openDialog(EditGroupsDialog, { groups: currentGroups });
    if (result.type !== 'confirm') return;

    const updatedGroups: PluginGroup[] = result.data.groups.map((g: { id: string; title: string }) => {
      const originalIndex = parseInt(g.id, 10);
      return { ...pluginGroups[originalIndex], title: g.title };
    });

    onUpdateGroups(updatedGroups);
  }

  function handleSort(e, group) {
    group.plugins = e.detail.items;
  }

  function handleFinalize(e, group) {
    if(e.detail.info.trigger === TRIGGERS.DROPPED_OUTSIDE_OF_ANY) {
     // discard plugin from configuration
     group.plugins = e.detail.items.filter(item => e.detail.info.id !== item.id);
    } else {
      group.plugins = e.detail.items;
    }
    onUpdateGroups(pluginGroups)
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
          <span class="plugin-list__group-index plugin-list__group-plugins__indicator"><StepCircle number={groupIndex + 1} /></span>
          <span class="plugin-list__group-title">{group.title}</span>
        </header>

        <div class="plugin-list__group-plugins-section">
          <div class="plugin-list__group-plugins__indicator">
            {#if groupIndex < pluginGroups.length - 1}
              <!-- Show arrow except for last group -->
              <OscdArrowSouthIcon svgStyles="fill: #6B9197;"/>
            {/if}
          </div>
          <div
            class="plugin-list__group-plugins"
            class:plugin_list__group-plugins--dashed={processEditModeState.isEditing}
            use:dragHandleZone={{
              items: group.plugins,
              flipDurationMs: 100,
              dropTargetStyle: {},
            }}
            onconsider={(e) => handleSort(e, group)}
            onfinalize={(e) => handleFinalize(e, group)}
          >
            {#each group.plugins as plugin, pluginIndex (plugin.id)}
              <div
                data-id={plugin.id}
                animate:flip={{duration: 100}}
              >
                <OscdListItem variant="secondary">
                  <div class="plugin-list__item-row">

                    <div class="plugin-list__item-row__left">
                      {#if processEditModeState.isEditing}
                        <div use:dragHandle aria-label="drag-handle">
                          <OscdDragIndicatorIcon/>
                        </div>
                      {/if}

                      <span class="plugin-list__item-name">{plugin.name}</span>
                    </div>

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
              </div>
            {/each}
          </div>
        </div>
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
        onclick={editGroups}
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

  .plugin-list__group-plugins {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }

  .plugin-list__group-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .plugin-list__group-plugins-section {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
  }

  .plugin-list__group-plugins__indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
  }

  .plugin-list__group-title {
    font-weight: 500;
    color: #dae3e6;
  }

  .plugin-list__item-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 0.75rem;
  }

  .plugin-list__item-row__left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .plugin_list__group-plugins--dashed {
    padding: 0.8rem;
    min-height: 2rem;
    border-radius: 12px;
    border: 2px dashed rgba(255, 255, 255, 0.4);
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
