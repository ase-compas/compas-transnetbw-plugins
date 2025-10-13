<script lang="ts">
  import Button from '@smui/button';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { createEventDispatcher } from 'svelte';
  import { OscdRemoveIcon } from '../../../../../libs/oscd-icons/src';
  import { OscdCardItem, OscdCardParent } from '../../../../../libs/oscd-component/src';

  export let pluginGroups: PluginGroup[] = [];

  const dispatch = createEventDispatcher();

  const removeAllPlugins = () => dispatch('removeAllPlugins');

  const removeOne = (groupIndex: number, pluginIndex: number) => {
    const group = pluginGroups[groupIndex];
    const plugin = group.plugins[pluginIndex];
    dispatch('removePlugin', { groupIndex, pluginIndex, group, plugin });
  };
</script>

<OscdCardParent class="plugin-list" backgroundColor="var(--brand)">
  <div slot="header" class="plugin-list__header">
    <p class="plugin-list__title">Process</p>
    <Button
      style="background-color: #FF203A"
      variant="raised"
      aria-label="Remove all plugins"
      on:click={removeAllPlugins}
    >
      REMOVE ALL
    </Button>
  </div>

  <div slot="content" class="plugin-list__content">
    {#each pluginGroups as group, i}
      <section class="plugin-list__group">
        <header class="plugin-list__groupHeader">
          <span class="plugin-list__groupIndex">{i + 1}.</span>
          <span class="plugin-list__groupTitle">{group.title}</span>
        </header>

        {#each group.plugins as plugin, j}
          <OscdCardItem variant="secondary">
            <div class="plugin-list__itemRow">
              <span class="plugin-list__itemName">{plugin.name}</span>
              <button
                type="button"
                class="plugin-list__removeBtn"
                aria-label={`Remove ${plugin.name}`}
                on:click={() => removeOne(i, j)}
              >
                <OscdRemoveIcon svgStyles="fill: #FF203A"></OscdRemoveIcon>
              </button>
            </div>
          </OscdCardItem>
        {/each}
      </section>
    {/each}
  </div>
</OscdCardParent>

<style>
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

  .plugin-list__content {
    display: flex;
    flex-direction: column;
  }

  .plugin-list__group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .plugin-list__group:last-child {
    margin-bottom: 0;
  }

  .plugin-list__groupHeader {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .plugin-list__groupIndex {
    font-weight: 500;
    color: var(--on-brand);
  }

  .plugin-list__groupTitle {
    font-weight: 500;
    color: #dae3e6;
  }

  .plugin-list__itemRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .plugin-list__itemName {
    font-weight: 500;
    color: var(--brand);
  }

  .plugin-list__removeBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    padding: 0.25rem;
    margin: 0;
    cursor: pointer;
    border-radius: 0.375rem;
  }

  .plugin-list__removeBtn:hover {
    opacity: 0.9;
  }

  .plugin-list__removeBtn:focus-visible {
    outline: 2px solid var(--danger);
    outline-offset: 2px;
  }
</style>
