<script lang="ts">
  import Button from '@smui/button';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';
  import PluginBasePanel from './PluginBasePanel.svelte';

  interface Props {
    pluginGroups?: PluginGroup[];
    requestEdit: () => void;
  }

  let {
    pluginGroups = [],
    requestEdit
  }: Props = $props();
</script>

<PluginBasePanel
  {pluginGroups}
  {headerAction}
/>

{#snippet headerAction()}
  <Button
    variant="raised"
    style="--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base)"
    aria-label="Edit process"
    onclick={requestEdit}
  >
    EDIT
  </Button>
{/snippet}
