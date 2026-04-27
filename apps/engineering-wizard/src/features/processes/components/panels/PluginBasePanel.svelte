<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdListItem, OscdPanel } from '@oscd-transnet-plugins/oscd-component';
  import { OscdArrowSouthIcon, OscdAddCircleIcon, OscdAddIcon, OscdDragIndicatorIcon, OscdEditIcon } from '@oscd-transnet-plugins/oscd-icons';
  import { openDialog } from '@oscd-transnet-plugins/oscd-services/dialog';
  import AddPluginGroupDialog from '../dialogs/AddPluginGroupDialog.svelte';
  import EditPluginGroupsDialog from '../dialogs/EditPluginGroupsDialog.svelte';
  import { dragHandle, dragHandleZone, TRIGGERS } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import StepCircle from '../steppers/StepCircle.svelte';
  import { engineeringProcessEditing } from '../../stores.svelte';

  type ItemActionContext = {
    group: PluginGroup;
    plugin: PluginGroup['plugins'][number];
    groupIndex: number;
    pluginIndex: number;
  };

  interface Props {
    pluginGroups?: PluginGroup[];
    title?: string;
    /** Bindable — title of the currently selected group, or null if none. */
    selectedGroupTitle?: string | null;

    headerAction?: Snippet;
    itemAction?: Snippet<[ItemActionContext]>;

    onAddGroup?: (name: string, position: number) => void;
    onUpdateGroups?: (updatedGroups: PluginGroup[]) => void;
  }

  let {
    pluginGroups = [],
    title = 'Process',
    selectedGroupTitle = $bindable<string | null>(null),
    headerAction,
    itemAction,

    onAddGroup = () => {},
    onUpdateGroups = (updatedGroups: PluginGroup[]) => {}
  }: Props = $props();

  async function addGroup() {
    const result = await openDialog(AddPluginGroupDialog, {groups: pluginGroups.length})
    if (result.type !== 'confirm') return;
    onAddGroup(result.data.name, result.data.position);
  }


  async function editGroups() {
    const currentGroups = pluginGroups.map((g, idx) => ({ id: idx.toString(), title: g.title }));
    const result = await openDialog(EditPluginGroupsDialog, { groups: currentGroups });
    if (result.type !== 'confirm') return;

    const updatedGroups: PluginGroup[] = result.data.groups.map((g: { id: string; title: string }) => {
      const originalIndex = parseInt(g.id, 10);
      return { ...pluginGroups[originalIndex], title: g.title };
    });

    // Clear selection since groups may have been renamed or reordered.
    selectedGroupTitle = null;
    onUpdateGroups(updatedGroups);
  }

  function toggleGroupSelection(group: PluginGroup) {
    selectedGroupTitle = selectedGroupTitle === group.title ? null : group.title;
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
  backgroundColor="var(--primary-base)"
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
      {@const isSelected = group.title === selectedGroupTitle}
      <section class="plugin-list__group">
        <button
          type="button"
          class="plugin-list__group-header"
          class:plugin-list__group-header--selected={isSelected}
          onclick={() => toggleGroupSelection(group)}
          aria-pressed={isSelected}
        >
          <span class="plugin-list__group-index plugin-list__group-plugins__indicator">
            <StepCircle number={groupIndex + 1} selected={isSelected} />
          </span>
          <span class="plugin-list__group-title">{group.title}</span>
        </button>

        <div
          class="plugin-list__group-plugins-section"
        >
          <div
            class="plugin-list__group-plugins"
            class:plugin_list__group-plugins--dashed={engineeringProcessEditing.isEditing}
            class:plugin_list__group-plugins--selected={isSelected}
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
                    {#if engineeringProcessEditing.isEditing}
                      <div use:dragHandle aria-label="drag-handle" class="drag-handle">
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
        {#if groupIndex < pluginGroups.length - 1}
          <div style="display: flex; justify-content: center; margin-top: 0.4rem;">
            <OscdArrowSouthIcon svgStyles="fill: #6B9197;"/>
          </div>
        {/if}
      </section>
    {/each}
  </div>
{/snippet}

{#snippet additional()}
  {#if engineeringProcessEditing.isEditing}
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
        <span class="footer-btn__icon footer-btn__icon--filled">
          <OscdAddIcon svgStyles="fill: #fff; width: 14px; height: 14px;" aria-hidden="true" />
        </span>
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
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-heading, 1.125rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--white);
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
    /*gap: 1.5rem;*/
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

  /* Group header as button */

  .plugin-list__group-header {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-align: left;
    width: 100%;
    border-radius: 4px;
  }

  .plugin-list__group-header:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.8);
    outline-offset: 2px;
  }

  /* Group plugins section */

  .plugin-list__group-plugins-section {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
  }

  .plugin-list__group-plugins__indicator {
    width: 30px;
    flex-shrink: 0;
  }

  .plugin-list__group-title {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
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
    transition: border-color 0.15s ease;
  }

  .plugin_list__group-plugins--dashed.plugin_list__group-plugins--selected {
    border-color: rgba(255, 255, 255, 1);
  }

  .plugin-list__item-name {
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: var(--ew-font-weight-medium, 500);
    color: var(--primary-base);
  }

  .plugin-list__item-action {
    display: flex;
    align-items: center;
  }

  /* Drag handle wrapper — flex so the icon's inline span centres correctly */
  .drag-handle {
    display: flex;
    align-items: center;
  }

  /* Footer / edit controls */

  .plugin-list__footer {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    flex-shrink: 0;
    justify-content: flex-end;
  }

  .plugin-list__footer-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    height: 36px;
    padding: 0 16px;
    font-size: var(--ew-font-size-body, 0.875rem);
    font-weight: 500;
    font-family: var(--ew-font-family, 'Roboto', sans-serif);
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    background-color: white;
    color: var(--primary-base);
  }

  .footer-btn__icon--filled {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-base);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
</style>

