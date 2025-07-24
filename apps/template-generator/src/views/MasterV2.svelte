<script lang="ts">
import ThreePanelLayoutV2 from '../layouts/three-panel-layout/ThreePanelLayoutV2.svelte';
import LeftPanel from '../components/panels/LeftPanel.svelte';
import { hierarchy as stateHierarchy, selectedNodeId } from '../lib/stores/threePanelStoreV2';
import { TreeNode } from '../lib/types/threePanelTypes';
import { type XmlNode, createXmlNode, resolveReferences } from '@oscd-transnet-plugins/oscd-xml-utils';
import { transformToTreeNodes } from '../lib/utils/oscdNodeTransformerUtils';
import CenterPanel from '../components/panels/CenterPanel.svelte';
import OscdLNodeCenterPanel from '../components/threePanelV1/oscd-center-panels/OscdLNodeCenterPanel.svelte';
import OscdDataObjectPanel from '../components/threePanelV1/oscd-center-panels/OscdDataObjectPanel.svelte';
import OscdDataAttributePanel from '../components/threePanelV1/oscd-center-panels/OscdDataAttributePanel.svelte';
import LogicalNodesOverview from './logical-nodes-overview/LogicalNodesOverview.svelte';
import ComponentSwitcher from '../components/threePanelV1/ComponentSwitcher.svelte';


export let doc: XMLDocument | null = null;


let rootNodes: XmlNode[] = [];
let hierarchy: TreeNode[] = [];

// Reactive: parse XML document into XmlNode objects
$: if (doc) {
  const lNodeElements = Array.from(doc.querySelectorAll('DataTypeTemplates > LNodeType'));
  rootNodes = lNodeElements.map(el => createXmlNode(el));
  rootNodes.forEach(node => resolveReferences(doc, node));
}

// Reactive: transform XmlNodes into TreeNode hierarchy
$: if (rootNodes.length > 0) {
  const lNodeTypeItems = transformToTreeNodes(rootNodes);

  const rootItem: TreeNode = {
    id: 'root',
    label: 'DataTypeTemplates',
    type: 'Root',
    prefixLabel: '[DataTypeTemplates]',
    data: null,
    children: lNodeTypeItems,
  };

  lNodeTypeItems.forEach(child => child.parent = rootItem);
  hierarchy = [rootItem];

  stateHierarchy.set(hierarchy);
  selectedNodeId.set('root')
}
</script>

<div class="master-view">

  <ThreePanelLayoutV2>
    <svelte:fragment slot="left">
      <LeftPanel/>
    </svelte:fragment>
    <svelte:fragment slot="center">
      <CenterPanel/>
    </svelte:fragment>
  </ThreePanelLayoutV2>

</div>
