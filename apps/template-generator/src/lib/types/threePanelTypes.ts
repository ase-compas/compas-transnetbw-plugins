export type TreeNode = {
  id: string;
  label: string;
  prefixLabel?: string;
  suffixLabel?: string;
  type: string;
  data: any;
  children?: TreeNode[];
  parent?: TreeNode;
}
