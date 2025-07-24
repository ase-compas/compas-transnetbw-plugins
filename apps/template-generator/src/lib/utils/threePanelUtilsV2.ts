import type { TreeNode } from '../types/threePanelTypes'

export const buildNodeMap = (
  nodes: TreeNode[],
  map: Record<string, TreeNode> = {}
): Record<string, TreeNode> => {
  for (const node of nodes) {
    map[node.id] = node;
    if (node.children) {
      buildNodeMap(node.children, map);
    }
  }
  return map;
}

export const findNodeById = (id: string, nodeMap: Record<string, TreeNode>): TreeNode | undefined => {
  return nodeMap[id];
}

export const getSelectedNodePath = (id: string, nodeMap: Record<string, TreeNode>): TreeNode[] => {
  const path: TreeNode[] = [];
  let currentNode: TreeNode | undefined = findNodeById(id, nodeMap);

  while (currentNode) {
    path.unshift(currentNode);
    currentNode = currentNode.parent;
  }

  return path;
}

export const addChildNode = (parentNode: TreeNode, childNode: TreeNode): void => {
  if (!parentNode.children) {
    parentNode.children = [];
  }
  childNode.parent = parentNode; // Set the parent reference
  parentNode.children.push(childNode);
}
