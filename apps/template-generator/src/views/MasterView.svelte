<script lang="ts">
  import ThreePanelLayout from '../lib/layouts/three-panel-layout/ThreePanelLayout.svelte';
  import OscdLeftPanel from '../lib/components/oscd-left-panels/OscdLeftPanel.svelte';
  import { hierarchy as exampleHierarchy } from '../lib/layouts/three-panel-layout/hierachy';
  import ComponentSwitcher from '../lib/components/ComponentSwitcher.svelte';
  import { type XmlNode, createXmlNode, resolveReferences } from '@oscd-transnet-plugins/oscd-xml-utils';
  import { Item } from '../lib/layouts/three-panel-layout/types';
  import OscdLNodeCenterPanel from '../lib/components/oscd-center-panels/OscdLNodeCenterPanel.svelte';
  import OscdDataObjectPanel from '../lib/components/oscd-center-panels/OscdDataObjectPanel.svelte';
  import OscdDataAttributePanel from '../lib/components/oscd-center-panels/OscdDataAttributePanel.svelte';
  import LogicalNodesOverview from './logical-nodes-overview/LogicalNodesOverview.svelte';

  export let doc: XMLDocument | null = null;

  const componentsByType = {
    'LNodeType': OscdLNodeCenterPanel,
    'DO': OscdDataObjectPanel,
    'DA': OscdDataAttributePanel,
    'Root': LogicalNodesOverview, // Use the same panel for root nodes
  };

  let rootNodes: XmlNode[] = [];

  $: if (doc) {
    const lNodeElements = Array.from(doc.querySelectorAll('DataTypeTemplates > LNodeType'));
    rootNodes = lNodeElements.map(el => createXmlNode(el)); // Map each DOM node to XmlNode
    rootNodes.forEach(node => resolveReferences(doc, node));
  }

  let hierarchy: Item[] = [];

  $: if (rootNodes.length > 0) {
    let lNodeTypeItems = transformToItems(rootNodes);
    let rootItem: Item = {
      id: 'DataTypeTemplates',
      name: 'DataTypeTemplates',
      type: 'Root',
      item: null, // No specific item for root
      children: lNodeTypeItems,
    };
    hierarchy = [rootItem];
  }

  function transformToItems(rootNodes: XmlNode[]): Item[] {
    if (!rootNodes || rootNodes.length === 0) return [];

    function toItem(node: XmlNode): Item {
      const children: Item[] = [];

      for (const child of node.children) {
        children.push(toItem(child));
      }

      if (node.reference) {
        for (const refChild of node.reference.children) {
          children.push(toItem(refChild));
        }
      }

      function mapName(node) {
        const type = node.tag;
        if (type === 'LNodeType') {
          return node.attributes['id'] || '';
        } else if (type === 'EnumVal') {
          return node.text || '';
        } else {
          return node.attributes['name'] || '';
        }

      }

      return {
        id: Math.random().toString(36).slice(2),
        name: mapName(node),
        type: node.tag,
        item: node,
        children: children.length > 0 ? children : undefined,
      };
    }

    // Map each root node (e.g., LNodeType) into an Item
    return rootNodes.map(toItem);
  }


</script>
<div class="master-view">
  <ThreePanelLayout hierarchy={hierarchy}>
   <!--- Left Panel --->
    <svelte:fragment slot="left" let:hierarchy let:onSelect>
      <OscdLeftPanel slot="left" {hierarchy} on:select={onSelect}/>
    </svelte:fragment>

    <!--- Center Panel --->
    <svelte:fragment slot="center" let:selectedItem>
      <ComponentSwitcher
        slot="left"
        data={selectedItem}
        typeKey="type"
        extraProps={{
          doc,
        }}
        {componentsByType}
      />
    </svelte:fragment>

  </ThreePanelLayout>
</div>
