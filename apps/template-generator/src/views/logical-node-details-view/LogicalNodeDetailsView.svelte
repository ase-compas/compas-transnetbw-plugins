<script lang="ts">
  import { selectedLNodeTypeId } from '../../lib/stores';
  import { OscdBreadcrumbs } from '@oscd-transnet-plugins/oscd-component';
  import { templateService } from '@oscd-transnet-plugins/oscd-template-generator';

  export let doc: XMLDocument;

  let logicalNodeType = templateService.getLogicalNodeTypeById(doc, $selectedLNodeTypeId);

  let breadcrumbs = [
    { label: 'Logical Nodes Types', enabled: true },
    { label: 'Current-LN', secondaryLabel: logicalNodeType.lnClass, enabled: false }
  ];

  const handleBreadcrumbClick = (event) => {
    const { index } = event.detail;
    if (index === 0) {
      selectedLNodeTypeId.set(null);
    } else {
      // Handle other breadcrumb clicks if needed
    }
  };

</script>

<div class="oscd-details">

  <div class="oscd-details-toolbar">
    <OscdBreadcrumbs {breadcrumbs} activeIndex={1} on:click={handleBreadcrumbClick} />
  </div>


</div>


<style>
  .oscd-details-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: var(--mdc-theme-surface);
    border-bottom: 1px solid var(--mdc-theme-on-surface);
  }
</style>
