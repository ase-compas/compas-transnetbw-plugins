<script>
  import { OscdBreadcrumbs } from '@oscd-transnet-plugins/oscd-component';
  import {getSelectedNodePath, selectedNodeId } from '../../lib/stores/threePanelStoreV2';

  let selectedNodePath;
  let breadcrumbs = [];

  $: if ($getSelectedNodePath) {
    selectedNodePath = $getSelectedNodePath;

    breadcrumbs = $getSelectedNodePath.map((node, index) => ({
      label: node.label,
      secondaryLabel: node.type,
      enabled: index < breadcrumbs.length,
    }));
  } else {
    breadcrumbs = [{ label: 'Logical Node Types', enabled: false }];
  }

  function handleBreadcrumbClick(event) {
    const { index } = event.detail;
    const item = selectedNodePath[index];
    if (item) selectedNodeId.set(item.id);
  }
</script>

<div class="layout">
  <div class="bread-crumbs">
    <OscdBreadcrumbs activeIndex={breadcrumbs.length - 1} {breadcrumbs} on:click={(e) => handleBreadcrumbClick(e)}/>
  </div>
  <div class="content">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="right"></div>
  </div>
</div>

<style>
  .content {
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
    .content {
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
