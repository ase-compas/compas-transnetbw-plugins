<script lang="ts">
  import ProcessPluginGroupsEditor from '../../components/engineering-process-detail/ProcessPluginGroupsEditor.svelte';
  import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';

  interface Props {
    pluginGroups?: PluginGroup[];
    proc?: Process | null;
  }

  let { pluginGroups = [], proc = null }: Props = $props();
</script>

<ProcessPluginGroupsEditor
  {pluginGroups}
  on:removeAllPlugins={(e) => console.log('remove all plugins', e)}
  on:removePlugin={(e) => console.log('remove one', e.detail)}
/>
