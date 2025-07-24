// lib/utils/treeNavUtils.ts
import type { TreeNode } from '../types/threePanelTypes';

export function toggleNode(id: string, openSet: Set<string>, nodes: TreeNode[]) {
  if (openSet.has(id)) {
    collapseNode(id, openSet, nodes);
  } else {
    expandNodeAndAncestors(id, openSet, nodes);
  }
}

export function expandNodeAndAncestors(id: string, openSet: Set<string>, nodes: TreeNode[]) {
  const node = findNodeById(id, nodes);
  if (!node) return;

  for (const ancestor of getAncestors(node).concat(node)) {
    openSet.add(ancestor.id);
  }
}

export function collapseNode(id: string, openSet: Set<string>, nodes: TreeNode[]) {
  openSet.delete(id);
  const node = findNodeById(id, nodes);
  if (node) {
    collapseDescendants(node, openSet);
  }
}

function collapseDescendants(node: TreeNode, openSet: Set<string>) {
  for (const child of node.children ?? []) {
    openSet.delete(child.id);
    collapseDescendants(child, openSet);
  }
}

function findNodeById(id: string, tree: TreeNode[]): TreeNode | undefined {
  for (const node of tree) {
    if (node.id === id) return node;
    const found = node.children ? findNodeById(id, node.children) : undefined;
    if (found) return found;
  }
  return undefined;
}

function getAncestors(node: TreeNode): TreeNode[] {
  const ancestors: TreeNode[] = [];
  let current = node.parent;
  while (current) {
    ancestors.push(current);
    current = current.parent;
  }
  return ancestors.reverse();
}
