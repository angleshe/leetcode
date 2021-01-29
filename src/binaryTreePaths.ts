import { TreeNode } from '../model/TreeNode';

function dfs(root: TreeNode, res: string[], path: number[]): void {
  path.push(root.val);
  if (root.left) {
    dfs(root.left, res, path);
  }
  if (root.right) {
    dfs(root.right, res, path);
  }
  if (!root.left && !root.right) {
    res.push(path.join('->'));
  }
  path.pop();
}
/**
 * @description 返回所有从根节点到叶子节点的路径
 * @author angle
 * @date 2021-01-29
 * @export
 * @param {(TreeNode | null)} root
 * @returns {string[]}
 */
export function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = [];
  if (root) {
    dfs(root, res, []);
  }
  return res;
}
