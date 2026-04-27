<script lang="ts">
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { selectedEngineeringProcess } from '../../features/processes/stores.svelte';
  import {
    addPluginToProcess,
    removePluginFromProcess,
    removeAllPluginsFromProcess,
    addGroupToProcess,
    updateGroupsOfProcess,
  } from '../../features/processes/mutations.svelte';
  import ProcessPluginEditor from '../../features/processes/components/ProcessPluginEditor.svelte';

  type Props = { pluginGroups?: PluginGroup[] };
  let { pluginGroups = [] }: Props = $props();

  function procId() { return selectedEngineeringProcess.process?.id ?? ''; }
</script>

<ProcessPluginEditor
  {pluginGroups}
  onRemoveOne={(id) => removePluginFromProcess(procId(), id)}
  onRemoveAll={() => removeAllPluginsFromProcess(procId())}
  onAddGroup={(name, pos) => addGroupToProcess(procId(), name, pos)}
  onUpdateGroups={(groups) => updateGroupsOfProcess(procId(), groups)}
  onAddPlugin={(p, groupTitle) => addPluginToProcess(procId(), p, groupTitle)}
/>
