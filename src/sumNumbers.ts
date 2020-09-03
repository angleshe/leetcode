import { TreeNode } from '../model/TreeNode';

function dfs(root: TreeNode, targetNum: number, targetSum: number): number {
  targetNum = targetNum * 10 + root.val;
  if (root.left === null && root.right === null) {
    return targetNum + targetSum;
  }
  if (root.left === null || root.right === null) {
    return dfs(root.left ?? root.right!, targetNum, targetSum);
  }
  return dfs(root.right, targetNum, dfs(root.left, targetNum, targetSum));
}
/**
 * @description 计算二叉树从根到叶子节点生成的所有数字之和
 * @author angle
 * @date 2020-09-03
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number}
 */
export function sumNumbers(root: TreeNode | null): number {
  return root ? dfs(root, 0, 0) : 0;
}
