import { TreeNode } from '../model/TreeNode';

function dfs(root: TreeNode, sum: number, currentVal: number): boolean {
  const value: number = currentVal + root.val;

  if (!root.left && !root.right) {
    return value === sum;
  }
  return (
    (!!root.left && dfs(root.left, sum, value)) || (!!root.right && dfs(root.right, sum, value))
  );
}
/**
 * @description 判断二叉树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * @author angle
 * @date 2020-08-12
 * @export
 * @param {(TreeNode | null)} root 二叉树
 * @param {number} sum 目标值
 * @returns {boolean}
 */
export function hasPathSum(root: TreeNode | null, sum: number): boolean {
  return !!root && dfs(root, sum, 0);
}
