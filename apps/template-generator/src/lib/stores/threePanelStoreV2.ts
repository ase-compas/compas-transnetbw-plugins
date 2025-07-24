import { writable, derived } from 'svelte/store';
import type { TreeNode } from '../types/threePanelTypes.ts';
import { buildNodeMap, getSelectedNodePath as getSelectedNodePathUtil } from '../utils/threePanelUtilsV2';

export const hierarchy = writable<TreeNode[]>([]);
export const nodeMap = derived(hierarchy, ($hierarchy) => buildNodeMap($hierarchy));
export const selectedNodeId = writable<string | null>(null);

export const getSelectedNodePath = derived(
  [selectedNodeId, nodeMap],
  ([$selectedNodeId, $nodeMap]) =>
    getSelectedNodePathUtil($selectedNodeId, $nodeMap)
);
