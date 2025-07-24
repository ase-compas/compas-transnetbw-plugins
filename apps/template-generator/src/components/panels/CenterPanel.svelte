<script>
import { selectedNodeId, nodeMap } from '../../lib/stores/threePanelStoreV2';
import {findNodeById} from '../../lib/utils/threePanelUtilsV2';
import OscdLNodeCenterPanel from '../threePanelV1/oscd-center-panels/OscdLNodeCenterPanel.svelte';
import OscdDataObjectPanel from '../threePanelV1/oscd-center-panels/OscdDataObjectPanel.svelte';
import OscdDataAttributePanel from '../threePanelV1/oscd-center-panels/OscdDataAttributePanel.svelte';
import LogicalNodesOverview from '../../views/logical-nodes-overview/LogicalNodesOverview.svelte';
import ComponentSwitcher from '../threePanelV1/ComponentSwitcher.svelte';

const componentsByType = {
  'LNodeType': OscdLNodeCenterPanel,
  'DO': OscdDataObjectPanel,
  'DA': OscdDataAttributePanel,
  'Root': LogicalNodesOverview, // Use the same panel for root nodes
};

$: currentNode = findNodeById($selectedNodeId, $nodeMap);

</script>


<div>
  <h2>Current</h2>
  <ComponentSwitcher
    data={currentNode}
    typeKey="type"
    componentsByType={componentsByType}
    extraProps={{ nodeMap }}
    />
</div>
