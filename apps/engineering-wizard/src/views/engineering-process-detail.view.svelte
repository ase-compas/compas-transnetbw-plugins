<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Process, PluginGroup } from "@oscd-transnet-plugins/shared";
  import { OscdBreadcrumbs } from "../../../../libs/oscd-component/src";
  import Button from "@smui/button";

  export let proc: Process | null = null;

  const dispatch = createEventDispatcher();

  const onCrumbClick = (e: CustomEvent<{ index: number }>) => {
    if (e.detail.index === 0) dispatch("back");
  };

  const start = () => {
    if (proc) dispatch("start", proc);
  };

  $: breadcrumbs = [
    { label: "Engineering-Wizard", enabled: true },
    { label: proc?.name ?? "—", enabled: false },
  ];

  let pluginGroups: PluginGroup[] = [];
  $: pluginGroups = proc?.pluginGroups?.length
    ? (proc!.pluginGroups as PluginGroup[])
    : [{ title: "Process", plugins: proc?.plugins ?? [] }];
</script>

<div class="page-content">
  <div class="header">
    <OscdBreadcrumbs {breadcrumbs} activeIndex={1} on:click={onCrumbClick} />

    <Button
      variant="raised"
      style="--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff"
      on:click={start}
      disabled={!proc}
      aria-label="Start process"
    >
      START PROCESS
    </Button>
  </div>

  <div class="plugins-list">
    <div class="plugins-list__header">
      <p>Process</p>
      <Button
        variant="raised"
        style="--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552"
        aria-label="Edit process"
      >
        EDIT
      </Button>
    </div>

    {#each pluginGroups as group, gi}
      <div class="plugin">
        <div class="plugin__group-title">
          <span class="plugin__index">{gi + 1}.</span>
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
</div>

<style>
  .page-content {
    --brand: #004552;
    --on-brand: #ffffff;

    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding: 0 24px;
    gap: 24px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
  }

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
    color: var(--on-brand);
    text-transform: uppercase;
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
