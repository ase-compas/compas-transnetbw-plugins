<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Process } from "@oscd-transnet-plugins/shared";
  import { OscdBreadcrumbs } from "../../../../libs/oscd-component/src";
  import Button from '@smui/button';

  export let proc: Process | null = null;

  const dispatch = createEventDispatcher<{ back: void; start: Process }>();

  $: breadcrumbs = [
    { label: "Engineering-Wizard", enabled: true },
    { label: proc?.name ?? "—", enabled: false },
  ];

  const onCrumbClick = (e: CustomEvent<{ index: number }>) => {
    if (e.detail.index === 0) dispatch("back");
  };
</script>

<div class="container">
  <OscdBreadcrumbs
    {breadcrumbs}
    activeIndex={1}
    on:click={onCrumbClick}
  />

  <div class="plugins-list">
    <div class="plugins-list__header">
      <p>Process</p>
      <Button
        variant="raised"
        style="--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552"
      >
        EDIT
      </Button>
    </div>
  </div>
</div>

<style>
  * {
    font-family: 'Roboto', sans-serif;
  }

  .container {
    margin-top: 16px;
    padding: 0 24px;
  }

  .plugins-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: fit-content;
    width: 33vw;
    border-radius: 4px;
    padding: 24px;
    background-color: #004552;
  }

  .plugins-list__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .plugins-list p {
    font-weight: 500;
    color: #ffffff;
  }
</style>
