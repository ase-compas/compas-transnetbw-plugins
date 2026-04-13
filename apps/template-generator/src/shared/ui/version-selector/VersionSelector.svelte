<script lang="ts">
  import Button, { Icon, Label } from '@smui/button';
  import MenuSurface from '@smui/menu-surface';
  import List, { Item } from '@smui/list';
  import VersionItem from './VersionItem.svelte';
  import CircularProgress from '@smui/circular-progress';

  interface Props {
    versions: Version[];
    currentVersion: Version;
    onVersionChange?: (version: Version) => void;
    loading?: boolean;
    loadingCurrentVersion?: boolean;
    onOpenMenu?: () => void;
  }

  let {
    versions = [],
    currentVersion,
    onVersionChange = () => {},
    loading = false,
    loadingCurrentVersion = false,
    onOpenMenu = () => {},
  }: Props = $props();

  let surface: MenuSurface;
</script>

<Button
  variant="unelevated"
  onclick={() => {
    onOpenMenu();
    surface.setOpen(true);
  }}
>
  <Label>
    {#if loadingCurrentVersion}
      <CircularProgress style="height: 16px; width: 16px;" indeterminate />
    {:else}
      {currentVersion.version}
    {/if}
  </Label>
  <Icon class="material-icons">expand_more</Icon>
</Button>
<MenuSurface bind:this={surface} anchorCorner="BOTTOM_RIGHT" maxHeight={300}>
  <div style="overflow-y: auto;">
    {#if loading}
      <div class="loading-container">
        <CircularProgress style="height: 32px; width: 32px;" indeterminate />
      </div>
    {:else}
      <List>
        {#each versions as version}
          <Item onclick={() => onVersionChange(version)}>
            <VersionItem {version} />
          </Item>
        {/each}
      </List>
    {/if}
  </div>
</MenuSurface>

<style>
  .loading-container {
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
