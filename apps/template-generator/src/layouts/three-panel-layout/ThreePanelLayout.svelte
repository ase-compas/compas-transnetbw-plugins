<script lang="ts">
  import {type Item } from './types';
  import { OscdBreadcrumbs } from '@oscd-transnet-plugins/oscd-component';
  import { selectedItem } from '../../lib/stores/threePanelStore'


  export let hierarchy: Item[] = [];

  let breadcrumbs = [];
  let breadcrumbPath: Item[] = [];

  $: if(hierarchy) {
    selectedItem.set(null)
  }

  // Rebuild breadcrumb path using the parent chain
  $: if ($selectedItem) {
    breadcrumbPath = buildPathFromSelected($selectedItem);
    breadcrumbs = breadcrumbPath.map((node, index) => ({
      label: node.name,
      secondaryLabel: node.type,
      enabled: index < breadcrumbPath.length - 1,
    }));
  } else {
    breadcrumbs = [{ label: 'Logical Node Types', enabled: false }];
    breadcrumbPath = [];
  }

  function buildPathFromSelected(item: Item): Item[] {
    const path = [];
    let current: Item | undefined = item;
    while (current) {
      path.unshift(current);
      current = current.parent;
    }
    return path;
  }

  function handleBreadcrumbClick(event: CustomEvent<number>) {
    const { index } = event.detail;
    const item = breadcrumbPath[index];
    if (item) selectedItem.set(item);
  }
</script>



<div style="border-top: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0;">
  <OscdBreadcrumbs activeIndex={breadcrumbs.length - 1} {breadcrumbs} on:click={handleBreadcrumbClick}/>
</div>
<div class="layout">
  <div class="left">
    <slot name="left" {hierarchy}/>
  </div>
  <div class="center">
    <slot name="center"/>
  </div>
  <div class="right"></div>
</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    height: calc(100vh - 150px); /* Replace 80px with height of siblings above */
    overflow: hidden;
  }

  .left,
  .center,
  .right {
    padding: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #e0e0e0;
  }

  .right {
    border-right: none;
    border-left: 1px solid #e0e0e0;
  }

  .center {
    background-color: #fafafa;
  }

  .right {
    background-color: #fcfcfc;
  }

  @media (max-width: 900px) {
    .layout {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
    }

    .left,
    .center,
    .right {
      border: none;
      border-bottom: 1px solid #e0e0e0;
      height: auto;
      max-height: 30vh;
    }

    .center {
      max-height: 40vh;
    }
  }
</style>
