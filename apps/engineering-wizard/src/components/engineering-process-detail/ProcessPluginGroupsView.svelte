<script lang="ts">
  import Button from '@smui/button';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import ProcessPluginGroupsBase from './ProcessPluginGroupsBase.svelte';

  interface Props {
    pluginGroups?: PluginGroup[];
    requestEdit: () => void;
  }

  let {
    pluginGroups = [],
    requestEdit
  }: Props = $props();

</script>

<ProcessPluginGroupsBase {pluginGroups}>
  <Button
    slot="headerAction"
    variant="raised"
    style="--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)"
    aria-label="Edit process"
    onclick={requestEdit}
  >EDIT</Button>
</ProcessPluginGroupsBase>
