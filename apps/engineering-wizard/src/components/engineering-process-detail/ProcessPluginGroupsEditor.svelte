<script lang="ts">
  import Button from '@smui/button';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { OscdRemoveIcon } from '../../../../../libs/oscd-icons/src';
  import ProcessPluginGroupsBase from './ProcessPluginGroupsBase.svelte';

  interface Props {
    pluginGroups?: PluginGroup[];
  }

  let {
    pluginGroups = [],
  }: Props = $props();

  function removeAllPlugins() {
    // TODO:
    // Implement the logic to remove all plugins
  }

  const removeOne = (groupIndex: number, pluginIndex: number) => {
    const group = pluginGroups[groupIndex];
    const plugin = group.plugins[pluginIndex];
  };
</script>
<ProcessPluginGroupsBase {pluginGroups}>
  <Button
    slot="headerAction"
    style="background-color: #FF203A"
    variant="raised"
    aria-label="Remove all plugins"
    on:click={removeAllPlugins}
  >
    REMOVE ALL
  </Button>

  <button
    slot="itemAction"
    let:group
    let:plugin
    let:groupIndex
    let:pluginIndex
    type="button"
    class="plugin-list__removeBtn"
    aria-label={`Remove ${plugin.name}`}
    onclick={() => removeOne(groupIndex, pluginIndex)}
  >
    <OscdRemoveIcon svgStyles="fill: #FF203A" />
  </button>
</ProcessPluginGroupsBase>

<style>
  .plugin-list__removeBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    padding: 0;
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
