<script lang="ts">
  import ProcessPluginGroupsEditor from '../../components/engineering-process-detail/ProcessPluginGroupsEditor.svelte';
  import { PluginGroup, Process } from 'libs/shared/src';

  export let pluginGroups: PluginGroup[] = [];
  export let proc: Process | null = null;
</script>

<ProcessPluginGroupsEditor
  {pluginGroups}
  on:removeAllPlugins={(e) => console.log('remove all plugins', e)}
  on:removePlugin={(e) => console.log('remove one', e.detail)}
/>
