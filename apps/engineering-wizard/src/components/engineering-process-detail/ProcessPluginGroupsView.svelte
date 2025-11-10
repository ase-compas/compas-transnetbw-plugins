<script lang="ts">
  import Button from '@smui/button';
  import type { PluginGroup } from '@oscd-transnet-plugins/shared';

  interface Props {
    pluginGroups?: PluginGroup[];
    requestEdit: () => void;
  }

  let {
    pluginGroups = [],
    requestEdit
  }: Props = $props();

</script>

<div class="plugins-list">
  <div class="plugins-list__header">
    <p>Process</p>
    <Button
      variant="raised"
      style="--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)"
      aria-label="Edit process"
      onclick={requestEdit}
    >
      EDIT
    </Button>
  </div>

  {#each pluginGroups as group, i}
    <div class="plugin">
      <div class="plugin__group-title">
        <span class="plugin__index">{i + 1}.</span>
        <span class="plugin__title">{group.title}</span>
      </div>

      <div class="plugin__items">
        {#each group.plugins as plugin}
          <div class="plugin-item">
            <span class="plugin-item__name">{plugin.name}</span>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .plugins-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 33vw;
    max-width: 640px;
    border-radius: 4px;
    padding: 24px;
    background-color: var(--brand);
  }

  .plugins-list__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .plugins-list__header p {
    font-weight: 500;
    color: var(--on-brand);
    font-size: 24px;
    margin: 0;
  }

  .plugin {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .plugin__group-title {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .plugin__index,
  .plugins-list p {
    font-weight: 500;
    color: var(--on-brand);
  }

  .plugin__title {
    font-weight: 500;
    color: #dae3e6;
  }

  .plugin__items {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .plugin-item {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px;
    background-color: #ffffff;
    border-radius: 4px;
  }

  .plugin-item__name {
    font-weight: 500;
    color: var(--brand);
  }
</style>
