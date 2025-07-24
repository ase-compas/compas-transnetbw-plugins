<script lang="ts">
  import ThreePanelLayout from '../layouts/three-panel-layout/ThreePanelLayout.svelte';
  import OscdLeftPanel from '../components/threePanelV1/oscd-left-panels/OscdLeftPanel.svelte';
  import { hierarchy as exampleHierarchy } from '../layouts/three-panel-layout/hierachy';
  import ComponentSwitcher from '../components/threePanelV1/ComponentSwitcher.svelte';
  import { type XmlNode, createXmlNode, resolveReferences } from '@oscd-transnet-plugins/oscd-xml-utils';
  import { Item } from '../layouts/three-panel-layout/types';
  import OscdLNodeCenterPanel from '../components/threePanelV1/oscd-center-panels/OscdLNodeCenterPanel.svelte';
  import OscdDataObjectPanel from '../components/threePanelV1/oscd-center-panels/OscdDataObjectPanel.svelte';
  import OscdDataAttributePanel from '../components/threePanelV1/oscd-center-panels/OscdDataAttributePanel.svelte';
  import LogicalNodesOverview from './logical-nodes-overview/LogicalNodesOverview.svelte';
  import { selectedItem } from '../lib/stores/threePanelStore.ts'

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
      parent: null
    };
    lNodeTypeItems.forEach(child => child.parent = rootItem);
    hierarchy = [rootItem];
  }

  function transformToItems(rootNodes: XmlNode[]): Item[] {
    if (!rootNodes || rootNodes.length === 0) return [];

    function toItem(node: XmlNode, parent: Item | null = null): Item {
      const children: Item[] = [];

      for (const child of node.children) {
        const childItem = toItem(child); // Temporarily without parent
        children.push(childItem);
      }

      if (node.reference) {
        for (const refChild of node.reference.children) {
          const refItem = toItem(refChild); // Temporarily without parent
          children.push(refItem);
        }
      }

      const type = node.tag;
      let name;
        if (type === 'LNodeType') {
          name = node.attributes['id'] || '';
        } else if (type === 'EnumVal' || type === 'Val') {
          name = node.text || '';
        } else {
          name = node.attributes['name'] || '';
        }

      const item: Item = {
        id: Math.random().toString(36).slice(2),
        name,
        type,
        item: node,
        children: undefined,
        parent: parent ?? undefined,
      };

      if (children.length > 0) {
        for (const child of children) {
          child.parent = item; // Set parent reference
        }
        item.children = children;
      }

      return item;
    }

    return rootNodes.map(node => toItem(node));
  }


</script>
<div class="master-view">
  <ThreePanelLayout hierarchy={hierarchy}>
   <!--- Left Panel --->
    <svelte:fragment slot="left" let:hierarchy>
      <OscdLeftPanel slot="left" {hierarchy}/>
    </svelte:fragment>

    <!--- Center Panel --->
    <svelte:fragment slot="center">
      <ComponentSwitcher
        slot="left"
        data={$selectedItem}
        typeKey="type"
        extraProps={{
          doc,
        }}
        {componentsByType}
      />
    </svelte:fragment>

  </ThreePanelLayout>
</div>
