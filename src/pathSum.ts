import { TreeNode } from '../model/TreeNode';

function dfs(root: TreeNode, sum: number, curSum: number, res: number[][], path: number[]): void {
  const val: number = curSum + root.val;
  path.push(root.val);
  if (!root.left && !root.right) {
    if (val === sum) {
      res.push([...path]);
    }
  } else {
    if (root.left) {
      dfs(root.left, sum, val, res, path);
    }
    if (root.right) {
      dfs(root.right, sum, val, res, path);
    }
  }
  path.pop();
}

/**
 * @description 找到二叉树所有从根节点到叶子节点路径总和等于给定目标和的路径
 * @author angle
 * @date 2020-08-13
 * @export
 * @param {(TreeNode | null)} root
 * @param {number} sum
 * @returns {number[][]}
 */
export function pathSum(root: TreeNode | null, sum: number): number[][] {
  const res: number[][] = [];
  if (root) {
    dfs(root, sum, 0, res, []);
  }
  return res;
}
