// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { type XmlNode } from '@oscd-transnet-plugins/oscd-xml-utils';
import { TreeNode } from '../types/threePanelTypes';


export function transformToTreeNodes(nodes: XmlNode[], parent: TreeNode | null = null): TreeNode[] {
  return nodes.map(node => toTreeNode(node, parent));
}

function toTreeNode(node: XmlNode, parent: TreeNode | null = null): TreeNode {
  const item = toBasicTreeNode(node, parent);
  const children: TreeNode[] = [];

  for (const child of node.children ?? []) {
    children.push(toTreeNode(child, item));
  }

  if (node.reference?.children) {
    for (const refChild of node.reference.children) {
      children.push(toTreeNode(refChild, item));
    }
  }

  item.children = children;
  return item;
}

function toBasicTreeNode(node: XmlNode, parent: TreeNode): TreeNode {
  const type = node.tag;
  return {
    id: Math.random().toString(34).slice(2),
    label: getLabel(node),
    prefixLabel: getPrefix(node),
    suffixLabel: getSuffix(node),
    parent: parent,
    type,
    data: node,
  } as TreeNode;
}

function getLabel(node: XmlNode): string {
  const type = node.tag;
  if (type === 'LNodeType') {
    return node?.attributes['id'] || '';
  } else if (type === 'EnumVal' || type === 'Val') {
    return node?.text || '';
  } else {
    return node?.attributes['name'];
  }
}

function getPrefix(node: XmlNode): string {
  return `[${node.tag}]`;
}

function getSuffix(node: XmlNode): string {
  const type = node.tag;
  if (type === 'LNodeType') {
    return `(${node.attributes?.lnClass || ''})`;
  } else if (type === 'DA' || type === 'BDA') {
    return `(${node.attributes?.bType || ''})`;
  }
  return '';
}
