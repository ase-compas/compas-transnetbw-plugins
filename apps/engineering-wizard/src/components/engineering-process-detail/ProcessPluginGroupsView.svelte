<script lang="ts">
  import Button from '@smui/button';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import { createEventDispatcher } from 'svelte';
  import ProcessPluginGroupsBase from './ProcessPluginGroupsBase.svelte';

  export let pluginGroups: PluginGroup[] = [];

  const dispatch = createEventDispatcher();
  const requestEdit = () => dispatch('editRequested');
</script>

<ProcessPluginGroupsBase {pluginGroups}>
  <Button
    slot="headerAction"
    variant="raised"
    style="--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)"
    aria-label="Edit process"
    on:click={requestEdit}
  >EDIT</Button>
</ProcessPluginGroupsBase>
